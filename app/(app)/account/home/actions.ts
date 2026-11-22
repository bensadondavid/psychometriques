"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth/get-current-session";
import { publicPrograms } from "@/lib/content/catalog";
import { prisma } from "@/lib/database/prisma";

async function currentUserId() {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { id: true, banned: true },
  });
  if (!user || user.banned) redirect("/sign-in");
  return user.id;
}

function validDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T12:00:00Z`);
  return (
    !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value
  );
}

export async function saveStudyGoal(formData: FormData) {
  const userId = await currentUserId();
  const examSlug = String(formData.get("examSlug") ?? "");
  const examDate = String(formData.get("examDate") ?? "");
  const objective = String(formData.get("objective") ?? "").trim();
  const sessionsPerWeek = Number(formData.get("sessionsPerWeek"));
  const sessionMinutes = Number(formData.get("sessionMinutes"));
  if (
    !publicPrograms.some((program) => program.slug === examSlug) ||
    (examDate && !validDate(examDate)) ||
    objective.length > 140 ||
    !Number.isInteger(sessionsPerWeek) ||
    sessionsPerWeek < 1 ||
    sessionsPerWeek > 7 ||
    !Number.isInteger(sessionMinutes) ||
    sessionMinutes < 15 ||
    sessionMinutes > 180
  )
    redirect("/account/home?erreur=objectif");

  const data = {
    examSlug,
    examDate: examDate || null,
    objective: objective || null,
    sessionsPerWeek,
    sessionMinutes,
  };
  await prisma.studyGoal.upsert({
    where: { userId },
    create: { userId, ...data },
    update: data,
  });
  revalidatePath("/account/home");
  redirect("/account/home");
}

export async function addStudySession(formData: FormData) {
  const userId = await currentUserId();
  const scheduledOn = String(formData.get("scheduledOn") ?? "");
  const title = String(formData.get("title") ?? "").trim();
  if (!validDate(scheduledOn) || !title || title.length > 120) {
    redirect("/account/home?erreur=seance");
  }
  const goal = await prisma.studyGoal.findUnique({
    where: { userId },
    select: { id: true },
  });
  if (!goal) redirect("/account/home");
  await prisma.studySession.create({
    data: { goalId: goal.id, scheduledOn, title },
  });
  revalidatePath("/account/home");
  redirect("/account/home");
}

export async function changeStudySession(formData: FormData) {
  const userId = await currentUserId();
  const id = String(formData.get("id") ?? "");
  const operation = String(formData.get("operation") ?? "");
  if (
    !id ||
    id.length > 100 ||
    !["complete", "reopen", "delete"].includes(operation)
  ) {
    redirect("/account/home");
  }
  const where = { id, goal: { userId } };
  if (operation === "delete") {
    await prisma.studySession.deleteMany({ where });
  } else {
    await prisma.studySession.updateMany({
      where,
      data: { completedAt: operation === "complete" ? new Date() : null },
    });
  }
  revalidatePath("/account/home");
  redirect("/account/home");
}
