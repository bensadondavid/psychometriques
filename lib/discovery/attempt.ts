import { createHash, randomBytes } from "node:crypto";
import { cookies } from "next/headers";

import { prisma } from "@/lib/database/prisma";
import { getPublicProgram } from "@/lib/content/catalog";
import { getCurrentSession } from "@/lib/auth/get-current-session";
import { parseDiscoverySnapshot, type DiscoverySnapshot } from "./snapshot";

const maxAge = 60 * 60 * 24 * 30;

function cookieName(slug: string) { return `discovery_${slug}`; }
function hash(token: string) { return createHash("sha256").update(token).digest("hex"); }

export async function getDiscoverySeries(slug: string) {
  if (!getPublicProgram(slug)) return null;
  return prisma.exercise.findFirst({
    where: { kind: "DISCOVERY", status: "PUBLISHED", program: { slug, status: "PUBLISHED" } },
    select: { id: true, title: true, programId: true, questions: {
      orderBy: { position: "asc" },
      select: { question: { select: {
        id: true, version: true, status: true, programId: true, statement: true,
        explanation: true, language: true, imagePath: true,
        chapter: { select: { name: true } },
        passage: { select: { title: true, text: true, language: true, status: true } },
        options: { orderBy: { position: "asc" }, select: { id: true, text: true, isCorrect: true } },
      } } },
    } },
  });
}

export function isReadyDiscoverySeries(series: NonNullable<Awaited<ReturnType<typeof getDiscoverySeries>>>) {
  return series.questions.length > 0 && series.questions.every(({ question }) =>
    question.programId === series.programId && question.status === "PUBLISHED" &&
    (!question.passage || question.passage.status === "PUBLISHED") &&
    !question.imagePath && // Figure rendering is not yet part of this reader.
    question.options.length === 4 && question.options.filter((option) => option.isCorrect).length === 1);
}

export async function startDiscovery(slug: string) {
  const current = await getOwnedDiscovery(slug);
  if (current?.status === "IN_PROGRESS") return true;
  const series = await getDiscoverySeries(slug);
  if (!series || !isReadyDiscoverySeries(series)) return false;
  const token = randomBytes(32).toString("base64url");
  const expiresAt = new Date(Date.now() + maxAge * 1000);
  await prisma.attempt.create({
    data: {
      exerciseId: series.id, mode: "EXAM", claimTokenHash: hash(token), claimExpiresAt: expiresAt,
      questions: { create: series.questions.map(({ question }, index) => ({
        questionId: question.id, position: index + 1, questionVersion: question.version,
        snapshot: {
          statement: question.statement, explanation: question.explanation,
          language: question.language, chapter: question.chapter.name,
          passage: question.passage ? { title: question.passage.title, text: question.passage.text,
            language: question.passage.language } : null,
          options: question.options.map((option) => ({ id: option.id, text: option.text,
            isCorrect: option.isCorrect })),
        } satisfies DiscoverySnapshot,
      })) },
    },
  });
  (await cookies()).set(cookieName(slug), token, {
    httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax",
    path: "/", maxAge,
  });
  return true;
}

export async function getOwnedDiscovery(slug: string) {
  if (!getPublicProgram(slug)) return null;
  const token = (await cookies()).get(cookieName(slug))?.value;
  if (!token || token.length > 100) return null;
  const attempt = await prisma.attempt.findUnique({
    where: { claimTokenHash: hash(token) },
    select: { id: true, status: true, claimExpiresAt: true, userId: true,
      exercise: { select: { title: true, kind: true, program: { select: { slug: true } } } },
      questions: { orderBy: { position: "asc" }, select: {
        id: true, position: true, snapshot: true, answer: { select: { value: true, isCorrect: true } },
      } },
    },
  });
  if (!attempt || attempt.claimExpiresAt === null || attempt.claimExpiresAt <= new Date() ||
      attempt.exercise.kind !== "DISCOVERY" || attempt.exercise.program.slug !== slug) return null;
  if (attempt.userId && (await getCurrentSession())?.user.id !== attempt.userId) return null;
  const questions = attempt.questions.map((question) => ({
    ...question, snapshot: parseDiscoverySnapshot(question.snapshot),
  }));
  if (questions.some((question) => !question.snapshot)) return null;
  return { ...attempt, questions: questions as (typeof questions[number] & { snapshot: DiscoverySnapshot })[] };
}

export async function answerDiscovery(slug: string, questionId: string, optionId: string) {
  const attempt = await getOwnedDiscovery(slug);
  if (!attempt || attempt.status !== "IN_PROGRESS") return false;
  const next = attempt.questions.find((question) => !question.answer);
  if (!next || next.id !== questionId || next.answer ||
      !next.snapshot.options.some((option) => option.id === optionId)) return false;
  const correct = next.snapshot.options.find((option) => option.id === optionId)!.isCorrect;
  try {
    await prisma.$transaction(async (tx) => {
      await tx.attemptAnswer.create({
        data: { attemptQuestionId: next.id, value: { optionId }, isCorrect: correct },
      });
      if (next.position === attempt.questions.length) {
        await tx.attempt.updateMany({
          where: { id: attempt.id, status: "IN_PROGRESS" },
          data: { status: "COMPLETED", completedAt: new Date() },
        });
      }
    });
  } catch {
    // A concurrent double submission cannot replace an existing answer.
    return false;
  }
  return true;
}
