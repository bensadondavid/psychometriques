"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth/get-current-session";
import { canPublishQuestion, canReviewPassage, canReviewQuestion } from "@/lib/admin/catalogue-publication";
import { prisma } from "@/lib/database/prisma";

type Operation = "review" | "publish" | "withdraw";

async function requireCurrentAdmin() {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true, banned: true },
  });
  if (user?.role !== "admin" || user.banned) redirect("/account/home");
}

function input(formData: FormData) {
  const id = formData.get("id");
  const operation = formData.get("operation");
  const revision = formData.get("revision");
  if (typeof id !== "string" || !id || id.length > 100 ||
    (operation !== "review" && operation !== "publish" && operation !== "withdraw") ||
    typeof revision !== "string") return null;
  return { id, operation: operation as Operation, revision };
}

export async function changeQuestionPublication(formData: FormData) {
  await requireCurrentAdmin();
  const submitted = input(formData);
  if (!submitted) redirect("/account/admin/catalogue?onglet=questions");
  const base = `/account/admin/catalogue/questions/${encodeURIComponent(submitted.id)}`;
  const expectedVersion = Number(submitted.revision);
  if (!Number.isSafeInteger(expectedVersion) || expectedVersion < 1) redirect(`${base}?result=stale`);

  let result = "failed";
  try {
    result = await prisma.$transaction(async (tx) => {
      const question = await tx.question.findUnique({
        where: { id: submitted.id },
        include: { options: { orderBy: { position: "asc" } }, passage: { select: { status: true } } },
      });
      if (!question || question.version !== expectedVersion) return "stale";
      const figureExists = !question.imagePath || Boolean(await tx.questionFigure.findUnique({
        where: { programId_path: { programId: question.programId, path: question.imagePath } },
        select: { id: true },
      }));
      if (submitted.operation !== "withdraw" && !canReviewQuestion(question, figureExists)) return "incomplete";
      if (submitted.operation === "publish" && !question.editorialReviewedAt) return "not-reviewed";
      if (submitted.operation === "publish" && !canPublishQuestion(question, figureExists)) return "passage";
      const data = submitted.operation === "review"
        ? { editorialReviewedAt: new Date() }
        : { status: submitted.operation === "publish" ? "PUBLISHED" as const : "DRAFT" as const };
      const update = await tx.question.updateMany({ where: { id: question.id, version: expectedVersion }, data });
      return update.count === 1 ? submitted.operation : "stale";
    }, { isolationLevel: "Serializable" });
  } catch (error) {
    console.error("catalog_question_update_failed", error);
  }
  revalidatePath("/account/admin/catalogue");
  revalidatePath(base);
  redirect(`${base}?result=${result}`);
}

export async function changePassagePublication(formData: FormData) {
  await requireCurrentAdmin();
  const submitted = input(formData);
  if (!submitted) redirect("/account/admin/catalogue?onglet=passages");
  const base = `/account/admin/catalogue/passages/${encodeURIComponent(submitted.id)}`;
  let result = "failed";
  try {
    result = await prisma.$transaction(async (tx) => {
      const passage = await tx.passage.findUnique({ where: { id: submitted.id } });
      if (!passage || passage.updatedAt.toISOString() !== submitted.revision) return "stale";
      if (submitted.operation !== "withdraw" && !canReviewPassage(passage)) return "incomplete";
      if (submitted.operation === "publish" && !passage.editorialReviewedAt) return "not-reviewed";
      const data = submitted.operation === "review"
        ? { editorialReviewedAt: new Date() }
        : { status: submitted.operation === "publish" ? "PUBLISHED" as const : "DRAFT" as const };
      const update = await tx.passage.updateMany({ where: { id: passage.id, updatedAt: passage.updatedAt }, data });
      if (update.count !== 1) return "stale";
      if (submitted.operation === "withdraw") {
        await tx.question.updateMany({
          where: { passageId: passage.id, status: "PUBLISHED" },
          data: { status: "DRAFT", editorialReviewedAt: null, version: { increment: 1 } },
        });
      }
      return submitted.operation;
    }, { isolationLevel: "Serializable" });
  } catch (error) {
    console.error("catalog_passage_update_failed", error);
  }
  revalidatePath("/account/admin/catalogue");
  revalidatePath(base);
  redirect(`${base}?result=${result}`);
}
