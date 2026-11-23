import { readFile } from "node:fs/promises";
import path from "node:path";

import { auth } from "@/lib/auth/auth";
import { getProgramAuthorization } from "@/lib/auth/has-program-access";
import {
  getQuantitativeLesson,
  quantitativeLessons,
} from "@/lib/content/quantitative-lessons";
import { getVerbalLesson, verbalLessons } from "@/lib/content/verbal-lessons";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const quantitativeSource = quantitativeLessons.find(
    (item) => item.slug === slug && Number(item.number) >= 3,
  );
  const verbalSource = verbalLessons.find((item) => item.slug === slug);
  const source = quantitativeSource ?? verbalSource;
  if (!source) return new Response("Fiche indisponible.", { status: 404 });

  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) return new Response("Connexion requise.", { status: 401 });

  const authorization = await getProgramAuthorization(
    session.user.id,
    "psychometriques",
  );
  if (!authorization.allowed) {
    return new Response("Abonnement Psychométriques requis.", { status: 403 });
  }

  const lesson = quantitativeSource
    ? await getQuantitativeLesson(source.sourceId, authorization.isAdmin)
    : await getVerbalLesson(source.sourceId, authorization.isAdmin);
  if (!lesson?.content)
    return new Response("Fiche indisponible.", { status: 404 });

  const file = await readFile(
    path.join(
      process.cwd(),
      "content/lessons/assets",
      `fiche-revision-${verbalSource ? `verbal-${slug}` : slug}.pdf`,
    ),
  );
  return new Response(new Uint8Array(file), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="fiche-revision-${slug}-psychometriques.pdf"`,
      "Cache-Control": "private, no-store, max-age=0",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
