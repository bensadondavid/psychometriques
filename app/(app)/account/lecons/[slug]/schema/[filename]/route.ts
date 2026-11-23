import { readFile } from "node:fs/promises";
import path from "node:path";

import { auth } from "@/lib/auth/auth";
import { getProgramAuthorization } from "@/lib/auth/has-program-access";
import {
  getQuantitativeLesson,
  quantitativeLessons,
} from "@/lib/content/quantitative-lessons";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string; filename: string }> },
) {
  const { slug, filename } = await params;
  const source = quantitativeLessons.find(
    (item) => item.slug === slug && Number(item.number) >= 16,
  );
  if (
    !source ||
    !new RegExp(`^${source.number}-[a-z-]+\\.svg$`).test(filename)
  ) {
    return new Response("Schéma introuvable.", { status: 404 });
  }

  const session = await auth.api.getSession({ headers: request.headers });
  if (!session) return new Response("Connexion requise.", { status: 401 });

  const authorization = await getProgramAuthorization(
    session.user.id,
    "psychometriques",
  );
  if (!authorization.allowed)
    return new Response("Accès requis.", { status: 403 });

  const lesson = await getQuantitativeLesson(
    source.sourceId,
    authorization.isAdmin,
  );
  if (!lesson?.content?.includes(`(assets/${filename})`)) {
    return new Response("Schéma introuvable.", { status: 404 });
  }

  try {
    const svg = await readFile(
      path.join(process.cwd(), "content/lessons/assets/schemas", filename),
    );
    return new Response(new Uint8Array(svg), {
      headers: {
        "Content-Type": "image/svg+xml",
        "Cache-Control": "private, no-store, max-age=0",
        "Content-Security-Policy":
          "default-src 'none'; style-src 'unsafe-inline'; sandbox",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return new Response("Schéma introuvable.", { status: 404 });
  }
}
