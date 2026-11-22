import { readFile } from "node:fs/promises";
import path from "node:path";

import { auth } from "@/lib/auth/auth";
import { getProgramAuthorization } from "@/lib/auth/has-program-access";
import { getDivisibiliteLesson } from "@/lib/content/nombres-lesson";

export async function GET(request: Request) {
  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) return new Response("Connexion requise.", { status: 401 });

  const authorization = await getProgramAuthorization(
    session.user.id,
    "psychometriques",
  );
  if (!authorization.allowed) {
    return new Response("Abonnement Psychométriques requis.", { status: 403 });
  }

  const lesson = await getDivisibiliteLesson(authorization.isAdmin);
  if (!lesson?.content)
    return new Response("Fiche indisponible.", { status: 404 });

  const file = await readFile(
    path.join(
      process.cwd(),
      "content/lessons/assets/fiche-revision-divisibilite.pdf",
    ),
  );
  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="fiche-revision-divisibilite-psychometriques.pdf"',
      "Cache-Control": "private, no-store, max-age=0",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
