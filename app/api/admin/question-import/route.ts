import { requireAdmin } from "@/lib/auth/require-admin";
import { importValidatedCsvRecords } from "@/lib/question-import/import-to-database";
import {
  validateVerbalCsvBatch,
  type QuestionImportKind,
  type VerbalCsvSource,
} from "@/lib/question-import/psychometric-csv-contract";

export const runtime = "nodejs";
export const maxDuration = 300;

const ALLOWED_KINDS = new Set<QuestionImportKind>([
  "analogies",
  "comprehension-deduction",
  "passages",
  "passage-questions",
  "quantitative",
]);
const MAX_BODY_CHARACTERS = 4_000_000;

function parseBody(value: unknown) {
  if (!value || typeof value !== "object") return null;
  const body = value as { kind?: unknown; sources?: unknown };
  if (
    typeof body.kind !== "string" ||
    !ALLOWED_KINDS.has(body.kind as QuestionImportKind) ||
    !Array.isArray(body.sources) ||
    body.sources.length === 0 ||
    body.sources.length > 10
  ) {
    return null;
  }
  const sources: VerbalCsvSource[] = [];
  let totalCharacters = 0;
  for (const source of body.sources) {
    if (
      !source ||
      typeof source !== "object" ||
      typeof source.name !== "string" ||
      typeof source.content !== "string" ||
      !/\.csv$/i.test(source.name)
    ) {
      return null;
    }
    totalCharacters += source.content.length;
    if (source.name.length > 255 || totalCharacters > MAX_BODY_CHARACTERS) {
      return null;
    }
    sources.push({ name: source.name, content: source.content });
  }
  return { kind: body.kind as QuestionImportKind, sources };
}

export async function POST(request: Request) {
  const authorization = await requireAdmin(request);
  if (!authorization.ok) {
    return Response.json(
      { ok: false, message: authorization.message },
      { status: authorization.status },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, message: "La requête JSON est invalide." },
      { status: 400 },
    );
  }
  const input = parseBody(body);
  if (!input) {
    return Response.json(
      {
        ok: false,
        message: "Le lot CSV est absent, trop volumineux ou invalide.",
      },
      { status: 400 },
    );
  }

  const validation = validateVerbalCsvBatch(input.kind, input.sources);
  if (!validation.valid) {
    return Response.json(
      {
        ok: false,
        message: "Le serveur a refusé le lot : corrigez les erreurs indiquées.",
        validation: { ...validation, records: undefined },
      },
      { status: 422 },
    );
  }

  try {
    const result = await importValidatedCsvRecords(
      input.kind,
      validation.records,
    );
    console.info("question_import_completed", {
      adminUserId: authorization.userId,
      kind: input.kind,
      files: input.sources.length,
      ...result,
    });
    return Response.json({ ok: true, ...result });
  } catch (error) {
    const message = error instanceof Error ? error.message : "";
    if (message.startsWith("PASSAGES_MISSING:")) {
      const [, ids, count] = message.split(":");
      return Response.json(
        {
          ok: false,
          message: `${count} passage(s) référencé(s) sont absents. Importez d’abord les passages : ${ids}.`,
        },
        { status: 409 },
      );
    }
    console.error("question_import_failed", {
      adminUserId: authorization.userId,
      kind: input.kind,
      error,
    });
    return Response.json(
      {
        ok: false,
        message: "L’import en base a échoué sans créer de lot partiel.",
      },
      { status: 500 },
    );
  }
}
