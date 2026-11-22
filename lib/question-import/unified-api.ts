import { MAX_HTTP_BYTES, readBoundedJson } from "./unified-request";
import {
  parseImportInput,
  publicValidation,
  validateUnifiedCsv,
} from "./unified-csv";
import type { Exam, Validation } from "./unified-types";

type Dependencies = {
  authorize: (
    request: Request,
  ) => Promise<{ ok: true } | { ok: false; status: number; message: string }>;
  checkPassages: (
    v: Validation,
  ) => Promise<{ exam: Exam; externalId: string }[]>;
  persist: (v: Validation) => Promise<unknown>;
};

export function createUnifiedImportHandler(deps: Dependencies) {
  return async function POST(request: Request) {
    const json = (body: unknown, status = 200) =>
      Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
    const auth = await deps.authorize(request);
    if (!auth.ok)
      return json({ ok: false, message: auth.message }, auth.status);
    // Session-cookie mutations must come from this site's admin interface.
    if (request.headers.get("origin") !== new URL(request.url).origin)
      return json({ ok: false, message: "Origine de requête refusée." }, 403);
    if (
      !/^application\/json(?:;|$)/i.test(
        request.headers.get("content-type") ?? "",
      )
    )
      return json(
        { ok: false, message: "Content-Type application/json requis." },
        415,
      );
    const length = request.headers.get("content-length");
    if (length && (!/^\d+$/.test(length) || Number(length) > MAX_HTTP_BYTES))
      return json({ ok: false, message: "Requête trop volumineuse." }, 413);
    let body: unknown;
    try {
      body = await readBoundedJson(request);
    } catch (e) {
      return json(
        {
          ok: false,
          message:
            e instanceof RangeError
              ? "Requête trop volumineuse."
              : "JSON ou UTF-8 invalide.",
        },
        e instanceof RangeError ? 413 : 400,
      );
    }
    const input = parseImportInput(body);
    if (!input)
      return json(
        {
          ok: false,
          message:
            "Lot invalide : 1 à 200 CSV, 4 Mo au total, noms uniques, mode validate ou import.",
        },
        400,
      );
    // Ignore any client-supplied preview, normalized records or valid flag.
    const validation = validateUnifiedCsv(input.sources, input.exam);
    if (!validation.valid)
      return json(
        {
          ok: false,
          message: "Corrigez les erreurs avant l’import.",
          validation: publicValidation(validation),
        },
        422,
      );
    try {
      const missing = await deps.checkPassages(validation);
      if (missing.length)
        return json(
          {
            ok: false,
            message:
              "Importez les textes manquants avant ou avec leurs questions.",
            validation: {
              ...publicValidation(validation),
              valid: false,
              missingPassages: missing,
            },
          },
          422,
        );
      if (input.mode === "validate")
        return json({
          ok: true,
          validation: { ...publicValidation(validation), missingPassages: [] },
        });
      // The storage implementation checks passage references again inside its transaction.
      const result = await deps.persist(validation);
      return json({ ok: true, result, summary: validation.summary });
    } catch (error) {
      console.error("unified_csv_import_failed", {
        error: error instanceof Error ? error.name : "UnknownError",
      });
      return json(
        {
          ok: false,
          message:
            "L’import a été annulé. Aucune modification partielle du lot n’a été enregistrée.",
        },
        500,
      );
    }
  };
}
