import { requireAdmin } from "@/lib/auth/require-admin";
import { prisma } from "@/lib/database/prisma";
import { createUnifiedImportHandler } from "@/lib/question-import/unified-api";
import {
  checkMissingPassages,
  importUnifiedBatch,
} from "@/lib/question-import/unified-database";

export const runtime = "nodejs";
export const maxDuration = 300;

export const POST = createUnifiedImportHandler({
  authorize: async (request) => {
    const auth = await requireAdmin(request);
    if (!auth.ok) return auth;
    const current = await prisma.user.findUnique({
      where: { id: auth.userId },
      select: { role: true, banned: true },
    });
    if (current?.role !== "admin" || current.banned)
      return {
        ok: false,
        status: 403,
        message: "Accès administrateur refusé.",
      };
    return { ok: true };
  },
  checkPassages: checkMissingPassages,
  persist: importUnifiedBatch,
});
