import { prisma } from "@/lib/database/prisma";
import { publicPrograms } from "@/lib/content/catalog";

/** Programs visible in the signed-in account, based on current verified access. */
export async function getAccessiblePrograms(userId: string) {
  const now = new Date();

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true, banned: true },
    });
    if (!user || user.banned) return [];

    return await prisma.program.findMany({
      where: {
        slug: { in: publicPrograms.map((program) => program.slug) },
        ...(user.role === "admin"
          ? {}
          : {
              status: "PUBLISHED" as const,
              accesses: {
                some: {
                  userId,
                  startsAt: { lte: now },
                  endsAt: { gt: now },
                  revokedAt: null,
                },
              },
            }),
      },
      select: { id: true, slug: true, name: true, status: true },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    });
  } catch (error) {
    console.error("Accessible programs lookup failed", error);
    return [];
  }
}

/** Resolve the current database role, then the effective program entitlement. */
export async function getProgramAuthorization(
  userId: string,
  programSlug: string,
) {
  const now = new Date();

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { role: true, banned: true },
    });
    if (!user || user.banned) return { allowed: false, isAdmin: false };
    if (user.role === "admin") return { allowed: true, isAdmin: true };

    const access = await prisma.programAccess.findFirst({
      where: {
        userId,
        program: { slug: programSlug, status: "PUBLISHED" },
        startsAt: { lte: now },
        endsAt: { gt: now },
        revokedAt: null,
      },
      select: { id: true },
    });

    return { allowed: access !== null, isAdmin: false };
  } catch (error) {
    // A missing migration or database outage must never expose paid content.
    console.error("Program access lookup failed", error);
    return { allowed: false, isAdmin: false };
  }
}

export async function hasProgramAccess(userId: string, programSlug: string) {
  return (await getProgramAuthorization(userId, programSlug)).allowed;
}
