"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getCurrentSession } from "@/lib/auth/get-current-session";
import { getPublicProgram } from "@/lib/content/catalog";
import { getOwnedDiscovery } from "@/lib/discovery/attempt";
import { prisma } from "@/lib/database/prisma";

export async function saveDiscovery(slug: string) {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");
  if (!getPublicProgram(slug)) redirect("/account/home");
  const attempt = await getOwnedDiscovery(slug);
  if (!attempt || attempt.status !== "COMPLETED") redirect("/account/decouverte?examen=" + slug);
  if (attempt.userId && attempt.userId !== session.user.id) redirect("/account/home");
  if (!attempt.userId) {
    const claimed = await prisma.attempt.updateMany({
      where: { id: attempt.id, userId: null, status: "COMPLETED",
        claimExpiresAt: { gt: new Date() } },
      data: { userId: session.user.id, claimTokenHash: null, claimExpiresAt: null },
    });
    if (claimed.count !== 1) {
      const current = await prisma.attempt.findUnique({
        where: { id: attempt.id }, select: { userId: true },
      });
      if (current?.userId !== session.user.id) redirect("/account/home");
    }
  }
  (await cookies()).delete(`discovery_${slug}`);
  redirect(`/account/decouverte?examen=${slug}&enregistre=1`);
}
