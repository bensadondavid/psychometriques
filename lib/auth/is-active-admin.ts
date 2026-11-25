import { cache } from "react";

import { prisma } from "@/lib/database/prisma";

export const isActiveAdmin = cache(async (userId: string) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { role: true, banned: true },
  });

  return user?.role === "admin" && !user.banned;
});
