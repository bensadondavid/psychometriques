import { createHash } from "node:crypto";

import { requireAdmin } from "@/lib/auth/require-admin";
import { prisma } from "@/lib/database/prisma";
import {
  validateQuestionsCsv,
  type CsvQuestion,
} from "@/lib/question-import/csv-contract";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 8 * 1024 * 1024;
const BATCH_SIZE = 100;
const TRANSACTION_TIMEOUT_MS = 30_000;

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function questionData(programSlug: string, question: CsvQuestion) {
  return {
    programSlug,
    chapterId: question.chapterId,
    subTheme: question.subTheme,
    difficulty: question.difficulty,
    difficultyLabel: question.difficultyLabel,
    statement: question.statement,
    choice1: question.choices[0],
    choice2: question.choices[1],
    choice3: question.choices[2],
    choice4: question.choices[3],
    correctChoice: question.correctChoice,
    explanation: question.explanation,
    status: question.status,
    sourceCreatedAt: question.sourceCreatedAt,
    sourceUpdatedAt: question.sourceUpdatedAt,
    imagePath: question.imagePath,
    imageAlt: question.imageAlt,
  };
}

function json(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

export async function POST(request: Request) {
  const authorization = await requireAdmin(request);
  if (!authorization.ok)
    return json(
      { ok: false, message: authorization.message },
      authorization.status,
    );

  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const mode = formData.get("mode") === "import" ? "import" : "validate";
    const programSlug = formData.get("programSlug");

    if (typeof programSlug !== "string" || !programSlug)
      return json({ ok: false, message: "Sélectionnez un parcours." }, 400);

    const program = await prisma.program.findUnique({
      where: { slug: programSlug },
      select: { slug: true, name: true, isActive: true },
    });
    if (!program || !program.isActive)
      return json(
        { ok: false, message: "Ce parcours n’est pas disponible." },
        400,
      );

    if (!(file instanceof File))
      return json({ ok: false, message: "Aucun fichier CSV reçu." }, 400);
    if (!file.name.toLowerCase().endsWith(".csv"))
      return json(
        { ok: false, message: "Le fichier doit porter l’extension .csv." },
        400,
      );
    if (file.size === 0)
      return json({ ok: false, message: "Le fichier est vide." }, 400);
    if (file.size > MAX_FILE_SIZE)
      return json(
        { ok: false, message: "Le fichier dépasse la limite de 8 Mo." },
        413,
      );

    const buffer = Buffer.from(await file.arrayBuffer());
    const checksum = createHash("sha256").update(buffer).digest("hex");
    const validation = validateQuestionsCsv(buffer.toString("utf8"));

    const baseResponse = {
      ok: validation.valid,
      mode,
      program: { slug: program.slug, name: program.name },
      file: { name: file.name, size: file.size, checksum },
      summary: validation.summary,
      preview: validation.preview,
      issues: validation.issues,
      expectedHeaders: validation.expectedHeaders,
    };

    if (!validation.valid) return json(baseResponse, 422);
    if (mode === "validate") return json(baseResponse);

    const ids = validation.rows.map((question) => question.idQuestion);
    const existing = await prisma.question.findMany({
      where: { programSlug, id: { in: ids } },
      select: { id: true },
    });
    const existingIds = new Set(existing.map((question) => question.id));

    const chapters = new Map<number, string>();
    validation.rows.forEach((question) =>
      chapters.set(question.chapterId, question.chapter),
    );
    await prisma.$transaction(
      [...chapters].map(([id, name]) =>
        prisma.chapter.upsert({
          where: { programSlug_id: { programSlug, id } },
          create: {
            programSlug,
            id,
            name,
            slug: `${String(id).padStart(2, "0")}-${slugify(name)}`,
          },
          update: { name },
        }),
      ),
      { timeout: TRANSACTION_TIMEOUT_MS },
    );

    for (let start = 0; start < validation.rows.length; start += BATCH_SIZE) {
      const batch = validation.rows.slice(start, start + BATCH_SIZE);
      await prisma.$transaction(
        batch.map((question) => {
          const data = questionData(programSlug, question);
          return prisma.question.upsert({
            where: {
              programSlug_id: { programSlug, id: question.idQuestion },
            },
            create: { id: question.idQuestion, ...data },
            update: data,
          });
        }),
        { timeout: TRANSACTION_TIMEOUT_MS },
      );
    }

    return json({
      ...baseResponse,
      ok: true,
      imported: {
        inserted: ids.filter((id) => !existingIds.has(id)).length,
        updated: ids.filter((id) => existingIds.has(id)).length,
      },
    });
  } catch (error) {
    console.error("Question CSV import failed", error);
    return json(
      {
        ok: false,
        message:
          "L’import s’est interrompu côté serveur. Les lots terminés restent valides ; vous pouvez relancer le même fichier sans créer de doublons.",
      },
      500,
    );
  }
}
