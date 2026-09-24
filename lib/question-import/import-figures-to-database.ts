import { createHash, randomUUID } from "node:crypto";

import { prisma } from "../database/prisma";
import type { SvgSource } from "./svg-contract";
import type { DatabaseImportResult } from "./import-to-database";

export async function importValidatedFigures(
  figures: SvgSource[],
): Promise<DatabaseImportResult> {
  return prisma.$transaction(
    async (transaction) => {
      const program = await transaction.program.upsert({
        where: { slug: "psychometriques" },
        create: {
          slug: "psychometriques",
          name: "Psychométriques",
          status: "PUBLISHED",
          sortOrder: 10,
        },
        update: { name: "Psychométriques" },
        select: { id: true },
      });
      const existing = await transaction.questionFigure.findMany({
        where: {
          programId: program.id,
          path: { in: figures.map((figure) => figure.path) },
        },
        select: { path: true },
      });
      const existingPaths = new Set(existing.map((figure) => figure.path));

      const rows = figures.map((figure) => ({
        id: randomUUID(),
        path: figure.path,
        file_name: figure.name,
        svg: figure.content,
        byte_size: new TextEncoder().encode(figure.content).byteLength,
        checksum: createHash("sha256").update(figure.content).digest("hex"),
      }));

      for (let index = 0; index < rows.length; index += 250) {
        await transaction.$executeRawUnsafe(
          `
            INSERT INTO "question_figure" (
              "id", "programId", "path", "fileName", "svg", "byteSize", "checksum", "createdAt", "updatedAt"
            )
            SELECT x.id, $2, x.path, x.file_name, x.svg, x.byte_size, x.checksum, now(), now()
            FROM jsonb_to_recordset($1::jsonb) AS x(
              id text, path text, file_name text, svg text, byte_size integer, checksum text
            )
            ON CONFLICT ("programId", "path") DO UPDATE SET
              "fileName" = EXCLUDED."fileName",
              "svg" = EXCLUDED."svg",
              "byteSize" = EXCLUDED."byteSize",
              "checksum" = EXCLUDED."checksum",
              "updatedAt" = now()
          `,
          JSON.stringify(rows.slice(index, index + 250)),
          program.id,
        );
      }

      return {
        imported: figures.length,
        created: figures.length - existingPaths.size,
        updated: existingPaths.size,
      };
    },
    { maxWait: 10_000, timeout: 120_000 },
  );
}
