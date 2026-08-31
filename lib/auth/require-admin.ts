import { auth } from "@/lib/auth/auth";
import { prisma } from "@/lib/database/prisma";

type AdminAuthorization =
  | { ok: true; userId: string }
  | { ok: false; status: 401 | 403; message: string };

export async function requireAdmin(
  request: Request,
): Promise<AdminAuthorization> {
  const session = await auth.api.getSession({ headers: request.headers });

  if (!session) {
    return { ok: false, status: 401, message: "Vous devez vous connecter." };
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { role: true },
  });

  if (user?.role !== "admin") {
    return {
      ok: false,
      status: 403,
      message: "Cette action est réservée aux administrateurs.",
    };
  }

  return { ok: true, userId: session.user.id };
}
