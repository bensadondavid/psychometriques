"use server";

import { randomInt } from "node:crypto";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { getCurrentSession } from "@/lib/auth/get-current-session";
import { isActiveAdmin } from "@/lib/auth/is-active-admin";
import {
  discoveryDraftSlug,
  drawDiscoveryQuestions,
  isDiscoveryBlueprintForExam,
  parseDiscoveryBlueprintForm,
} from "@/lib/admin/discovery-blueprint";
import { getPublicProgram } from "@/lib/content/catalog";
import { prisma } from "@/lib/database/prisma";
import type { Prisma } from "@/lib/database/prisma/client";
import { isPrismaUniqueConstraintError } from "@/lib/database/is-prisma-unique-constraint-error";

const destination = "/account/admin/decouvertes";

async function requireAdmin() {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");
  if (!(await isActiveAdmin(session.user.id))) redirect("/account/home");
}

function fail(reason: string): never {
  redirect(`${destination}?erreur=${reason}`);
}

export async function createDiscoveryDraft(formData: FormData) {
  await requireAdmin();
  const slug = formData.get("exam");
  const title = formData.get("title");
  const draftSlug = discoveryDraftSlug(formData.get("requestKey"));
  if (
    typeof slug !== "string" ||
    !getPublicProgram(slug) ||
    typeof title !== "string" ||
    !title.trim() ||
    title.trim().length > 120 ||
    !draftSlug
  )
    fail("saisie");
  const blueprint = parseDiscoveryBlueprintForm(formData);
  if (!blueprint || !isDiscoveryBlueprintForExam(slug, blueprint))
    fail("structure");
  const program = await prisma.program.findUnique({
    where: { slug },
    select: { id: true, status: true },
  });
  if (!program || program.status !== "PUBLISHED") fail("programme");
  const uniqueDraft = {
    programId_slug: { programId: program.id, slug: draftSlug },
  };
  const priorSubmission = await prisma.exercise.findUnique({
    where: uniqueDraft,
    select: { kind: true },
  });
  if (priorSubmission?.kind === "DISCOVERY")
    redirect(`${destination}?cree=existant`);
  if (priorSubmission) fail("saisie");
  if (formData.get("anotherVersion") !== "yes") {
    const currentDraft = await prisma.exercise.findFirst({
      where: { programId: program.id, kind: "DISCOVERY", status: "DRAFT" },
      select: { id: true },
    });
    if (currentDraft) fail("brouillon-existant");
  }
  const requestedChapters = [
    ...new Set(
      blueprint.map((row) => row.chapterId).filter((id): id is string => !!id),
    ),
  ];
  const chapters = requestedChapters.length
    ? await prisma.questionChapter.findMany({
        where: { programId: program.id, id: { in: requestedChapters } },
        select: { id: true, name: true },
      })
    : [];
  if (chapters.length !== requestedChapters.length) fail("saisie");
  const chapterNames = new Map(
    chapters.map((chapter) => [chapter.id, chapter.name]),
  );
  const pool = await prisma.question.findMany({
    where: {
      programId: program.id,
      status: "PUBLISHED",
      imagePath: null,
      OR: [{ passageId: null }, { passage: { status: "PUBLISHED" } }],
    },
    select: { id: true, domain: true, difficulty: true, chapterId: true },
  });
  const drawn = drawDiscoveryQuestions(blueprint, pool, randomInt);
  if (drawn.shortageRow !== null) fail(`manque-${drawn.shortageRow}`);
  const selected = await prisma.question.findMany({
    where: { programId: program.id, id: { in: drawn.ids } },
    select: {
      id: true,
      status: true,
      imagePath: true,
      passage: { select: { status: true } },
      options: { select: { isCorrect: true } },
    },
  });
  if (
    selected.length !== drawn.ids.length ||
    selected.some(
      (question) =>
        question.status !== "PUBLISHED" ||
        question.imagePath ||
        (question.passage && question.passage.status !== "PUBLISHED") ||
        question.options.length !== 4 ||
        question.options.filter((option) => option.isCorrect).length !== 1,
    )
  )
    fail("questions");
  const composition = blueprint
    .map(
      (row) =>
        `${row.count} ${row.domain === "VERBAL" ? "verbale(s)" : "quantitative(s)"}, difficulté ${row.difficulty}${row.chapterId ? `, ${chapterNames.get(row.chapterId)}` : ""}`,
    )
    .join(" ; ");
  try {
    await prisma.exercise.create({
      data: {
        programId: program.id,
        kind: "DISCOVERY",
        status: "DRAFT",
        slug: draftSlug,
        title: title.trim(),
        instructions: composition,
        questions: {
          create: drawn.ids.map(
            (id, index) =>
              ({
                position: index + 1,
                question: {
                  connect: { id_programId: { id, programId: program.id } },
                },
              }) satisfies Prisma.ExerciseQuestionCreateWithoutExerciseInput,
          ),
        },
      },
    });
  } catch (error) {
    if (isPrismaUniqueConstraintError(error)) {
      const created = await prisma.exercise.findUnique({
        where: uniqueDraft,
        select: { kind: true },
      });
      if (created?.kind === "DISCOVERY")
        redirect(`${destination}?cree=existant`);
    }
    throw error;
  }
  revalidatePath(destination);
  redirect(`${destination}?cree=1`);
}

export async function publishDiscovery(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id");
  if (typeof id !== "string" || !id || id.length > 100) fail("saisie");
  const series = await prisma.exercise.findUnique({
    where: { id },
    select: {
      id: true,
      programId: true,
      kind: true,
      status: true,
      program: { select: { slug: true, status: true } },
      questions: {
        select: {
          question: {
            select: {
              status: true,
              imagePath: true,
              passage: { select: { status: true } },
              options: { select: { isCorrect: true } },
            },
          },
        },
      },
    },
  });
  if (
    !series ||
    series.kind !== "DISCOVERY" ||
    series.status !== "DRAFT" ||
    series.program.status !== "PUBLISHED" ||
    !series.questions.length ||
    series.questions.some(
      ({ question }) =>
        question.status !== "PUBLISHED" ||
        question.imagePath ||
        (question.passage && question.passage.status !== "PUBLISHED") ||
        question.options.length !== 4 ||
        question.options.filter((option) => option.isCorrect).length !== 1,
    )
  )
    fail("questions");
  const replacePublished = formData.get("replacePublished") === "yes";
  try {
    await prisma.$transaction(async (tx) => {
      const existing = await tx.exercise.count({
        where: {
          programId: series.programId,
          kind: "DISCOVERY",
          status: "PUBLISHED",
        },
      });
      if (existing && !replacePublished)
        throw new Error("Published discovery already exists");
      if (replacePublished) {
        await tx.exercise.updateMany({
          where: {
            programId: series.programId,
            kind: "DISCOVERY",
            status: "PUBLISHED",
          },
          data: { status: "ARCHIVED" },
        });
      }
      const published = await tx.exercise.updateMany({
        where: {
          id: series.id,
          programId: series.programId,
          kind: "DISCOVERY",
          status: "DRAFT",
        },
        data: { status: "PUBLISHED" },
      });
      if (published.count !== 1) throw new Error("Discovery draft changed");
    });
  } catch {
    fail("deja-publie");
  }
  revalidatePath(`/examens/${series.program.slug}`);
  revalidatePath(`/examens/${series.program.slug}/decouverte`);
  redirect(`${destination}?publie=1`);
}

export async function withdrawDiscovery(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id");
  if (typeof id !== "string" || !id || id.length > 100) fail("saisie");
  const series = await prisma.exercise.findUnique({
    where: { id },
    select: {
      id: true,
      kind: true,
      status: true,
      program: { select: { slug: true } },
    },
  });
  if (!series || series.kind !== "DISCOVERY" || series.status !== "PUBLISHED")
    fail("saisie");
  await prisma.exercise.update({ where: { id }, data: { status: "ARCHIVED" } });
  revalidatePath(`/examens/${series.program.slug}`);
  revalidatePath(`/examens/${series.program.slug}/decouverte`);
  redirect(`${destination}?retire=1`);
}

export async function trashDiscoveryDraft(formData: FormData) {
  await requireAdmin();
  const id = formData.get("id");
  if (typeof id !== "string" || !id || id.length > 100) fail("saisie");
  const archived = await prisma.exercise.updateMany({
    where: { id, kind: "DISCOVERY", status: "DRAFT" },
    data: { status: "ARCHIVED" },
  });
  if (archived.count !== 1) fail("saisie");
  revalidatePath(destination);
  redirect(`${destination}?corbeille=1`);
}
