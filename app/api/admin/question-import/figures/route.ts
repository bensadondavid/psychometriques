import { SeverityNumber } from "@opentelemetry/api-logs";
import { after } from "next/server";

import {
  emitImportOutcomeLog,
  flushPostHogLogs,
} from "@/instrumentation";
import { requireAdmin } from "@/lib/auth/require-admin";
import { readAnalyticsConsent } from "@/lib/analytics/consent";
import { importValidatedFigures } from "@/lib/question-import/import-figures-to-database";
import {
  validateSvgBatch,
  type SvgSource,
} from "@/lib/question-import/svg-contract";

export const runtime = "nodejs";
export const maxDuration = 300;

function parseBody(value: unknown) {
  if (!value || typeof value !== "object") return null;
  const body = value as { figures?: unknown };
  if (
    !Array.isArray(body.figures) ||
    body.figures.length === 0 ||
    body.figures.length > 500
  ) {
    return null;
  }
  const figures: SvgSource[] = [];
  let totalCharacters = 0;
  for (const figure of body.figures) {
    if (
      !figure ||
      typeof figure !== "object" ||
      typeof figure.name !== "string" ||
      typeof figure.path !== "string" ||
      typeof figure.content !== "string"
    ) {
      return null;
    }
    totalCharacters += figure.content.length;
    if (
      figure.name.length > 255 ||
      figure.path.length > 500 ||
      totalCharacters > 4_000_000
    ) {
      return null;
    }
    figures.push({
      name: figure.name,
      path: figure.path,
      content: figure.content,
    });
  }
  return figures;
}

export async function POST(request: Request) {
  const analyticsAllowed =
    readAnalyticsConsent(request.headers.get("cookie") ?? "") === "accepted";
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
  const figures = parseBody(body);
  if (!figures) {
    return Response.json(
      {
        ok: false,
        message: "Le lot SVG est absent, trop volumineux ou invalide.",
      },
      { status: 400 },
    );
  }
  const validation = validateSvgBatch(figures);
  if (!validation.valid) {
    return Response.json(
      {
        ok: false,
        message: "Le serveur a refusé les figures.",
        issues: validation.issues,
      },
      { status: 422 },
    );
  }

  try {
    const result = await importValidatedFigures(validation.figures);
    console.info("question_figure_import_completed", {
      adminUserId: authorization.userId,
      ...result,
    });
    if (analyticsAllowed) {
      emitImportOutcomeLog("question figure import completed", SeverityNumber.INFO, {
        figure_count: figures.length,
        outcome: "completed",
      });
      after(() => flushPostHogLogs());
    }
    return Response.json({ ok: true, ...result });
  } catch (error) {
    console.error("question_figure_import_failed", {
      adminUserId: authorization.userId,
      error,
    });
    if (analyticsAllowed) {
      emitImportOutcomeLog("question figure import failed", SeverityNumber.ERROR, {
        figure_count: figures.length,
        outcome: "failed",
        failure_stage: "persistence",
      });
      after(() => flushPostHogLogs());
    }
    return Response.json(
      {
        ok: false,
        message: "L’import des figures a échoué sans créer de lot partiel.",
      },
      { status: 500 },
    );
  }
}
