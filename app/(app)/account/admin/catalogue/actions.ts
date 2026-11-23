"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth/get-current-session";
import {
  canPublishQuestion, canReviewPassage, canReviewQuestion,
  passageBulkBlockReason, questionBulkBlockReason,
  type BulkBlockReason,
} from "@/lib/admin/catalogue-publication";
import { parseBulkSelection } from "@/lib/admin/catalogue-bulk-selection";
import { questionContentWhere } from "@/lib/admin/question-content-filter";
import { prisma } from "@/lib/database/prisma";

type Operation = "review" | "publish" | "withdraw";
type BulkQuestionStatus = "DRAFT" | "VALIDATED" | "PUBLISHED" | "ARCHIVED";
type BulkPassageStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED" | "COMING_SOON";
function bulkReturnUrl(
  submitted: NonNullable<ReturnType<typeof parseBulkSelection>>,
  updated: number,
  reasons: Record<BulkBlockReason | "stale", number>,
) {
  const params = new URLSearchParams({ onglet: submitted.tab, bulk: submitted.operation,
    updated: String(updated) });
  for (const [reason, count] of Object.entries(reasons)) if (count) params.set(reason, String(count));
  if (submitted.exam) params.set("examen", submitted.exam);
  if (submitted.status) params.set("statut", submitted.status);
  if (submitted.q) params.set("q", submitted.q);
  if (submitted.tab === "questions" && submitted.content !== "all") params.set("contenu", submitted.content);
  return `/account/admin/catalogue?${params}`;
}

function chunks<T>(items: T[], size = 250) {
  const result: T[][] = [];
  for (let index = 0; index < items.length; index += size) result.push(items.slice(index, index + size));
  return result;
}

export async function changeCatalogBulk(formData: FormData) {
  await requireCurrentAdmin();
  const submitted = parseBulkSelection(formData);
  if (!submitted) redirect("/account/admin/catalogue?bulk=invalid");
  const program = submitted.exam ? await prisma.program.findUnique({
    where: { slug: submitted.exam }, select: { id: true },
  }) : null;
  if (submitted.exam && !program) redirect("/account/admin/catalogue?bulk=invalid");
  const common = {
    ...(program ? { programId: program.id } : {}),
    ...(submitted.scope === "selected" ? { id: { in: [...new Set(submitted.ids)] } } : {}),
  };
  let updated = 0;
  const reasons: Record<BulkBlockReason | "stale", number> = {
    already: 0, incomplete: 0, notReviewed: 0, passageDraft: 0, stale: 0,
  };

  if (submitted.tab === "questions") {
    const questions = await prisma.question.findMany({
      where: {
        ...common,
        ...(submitted.scope === "filtered" && submitted.status ? { status: submitted.status as BulkQuestionStatus } : {}),
        ...(submitted.scope === "filtered" ? { AND: [
          questionContentWhere(submitted.content),
          ...(submitted.q ? [{ OR: [
            { externalId: { contains: submitted.q, mode: "insensitive" as const } },
            { statement: { contains: submitted.q, mode: "insensitive" as const } },
          ] }] : []),
        ] } : {}),
      },
      include: { options: { orderBy: { position: "asc" } }, passage: { select: { status: true } } },
    });
    const paths = [...new Set(questions.filter((question) => question.imagePath).map((question) => question.imagePath!))];
    const figures = paths.length ? await prisma.questionFigure.findMany({
      where: { path: { in: paths }, programId: { in: [...new Set(questions.map((question) => question.programId))] } },
      select: { programId: true, path: true },
    }) : [];
    const figureKeys = new Set(figures.map((figure) => `${figure.programId}:${figure.path}`));
    const eligible = questions.filter((question) => {
      const figureExists = !question.imagePath || figureKeys.has(`${question.programId}:${question.imagePath}`);
      const reason = questionBulkBlockReason(question, figureExists, submitted.operation);
      if (reason) reasons[reason]++;
      return !reason;
    });
    for (const group of chunks(eligible)) {
      // A changed import increments version. Keep each bulk write tied to the version inspected above.
      const versions = new Map<number, string[]>();
      for (const question of group) versions.set(question.version, [...(versions.get(question.version) ?? []), question.id]);
      for (const [version, ids] of versions) {
        const result = await prisma.question.updateMany({
          where: { id: { in: ids }, version,
            ...(submitted.operation === "publish" || submitted.operation === "review_publish" ? {
              ...(submitted.operation === "publish" ? { editorialReviewedAt: { not: null } } : {}),
              OR: [{ passageId: null }, { passage: { status: "PUBLISHED" } }],
            } : {}),
          },
          data: submitted.operation === "review_publish" ? { editorialReviewedAt: new Date(), status: "PUBLISHED" } :
            submitted.operation === "review" ? { editorialReviewedAt: new Date() } :
            { status: submitted.operation === "publish" ? "PUBLISHED" : "DRAFT" },
        });
        updated += result.count;
        reasons.stale += ids.length - result.count;
      }
    }
  } else {
    const passages = await prisma.passage.findMany({
      where: {
        ...common,
        ...(submitted.scope === "filtered" && submitted.status ? { status: submitted.status as BulkPassageStatus } : {}),
        ...(submitted.scope === "filtered" && submitted.q ? { OR: [
          { externalId: { contains: submitted.q, mode: "insensitive" } },
          { title: { contains: submitted.q, mode: "insensitive" } },
        ] } : {}),
      },
    });
    const eligible = passages.filter((passage) => {
      const reason = passageBulkBlockReason(passage, submitted.operation);
      if (reason) reasons[reason]++;
      return !reason;
    });
    for (const group of chunks(eligible)) {
      // The status and timestamp guards avoid changing a passage that was edited after selection.
      for (const passage of group) {
        const changed = await prisma.$transaction(async (tx) => {
          const result = await tx.passage.updateMany({
            where: { id: passage.id, updatedAt: passage.updatedAt },
            data: submitted.operation === "review_publish" ? { editorialReviewedAt: new Date(), status: "PUBLISHED" } :
              submitted.operation === "review" ? { editorialReviewedAt: new Date() } :
              { status: submitted.operation === "publish" ? "PUBLISHED" : "DRAFT" },
          });
          if (result.count && submitted.operation === "withdraw") {
            await tx.question.updateMany({
              where: { passageId: passage.id, status: "PUBLISHED" },
              data: { status: "DRAFT", editorialReviewedAt: null, version: { increment: 1 } },
            });
          }
          return result.count;
        });
        updated += changed;
        if (!changed) reasons.stale++;
      }
    }
  }
  revalidatePath("/account/admin/catalogue");
  redirect(bulkReturnUrl(submitted, updated, reasons));
}

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
