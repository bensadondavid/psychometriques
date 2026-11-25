"use server";

import { redirect } from "next/navigation";
import { answerDiscovery, startDiscovery } from "@/lib/discovery/attempt";
import { getPublicProgram } from "@/lib/content/catalog";

export async function beginDiscovery(slug: string) {
  if (!getPublicProgram(slug)) return;
  await startDiscovery(slug);
  redirect(`/examens/${slug}/decouverte`);
}

export async function submitDiscoveryAnswer(slug: string, formData: FormData) {
  if (!getPublicProgram(slug)) return;
  const questionId = formData.get("questionId");
  const optionId = formData.get("optionId");
  if (typeof questionId === "string" && typeof optionId === "string") {
    await answerDiscovery(slug, questionId, optionId);
  }
  redirect(`/examens/${slug}/decouverte`);
}
