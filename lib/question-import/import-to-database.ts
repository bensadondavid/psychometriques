import { randomUUID } from "node:crypto";

import { prisma } from "../database/prisma";
import type {
  PassageCsvRecord,
  QuestionCsvRecord,
  QuestionImportKind,
} from "./psychometric-csv-contract";

const PROGRAM = {
  slug: "psychometriques",
  name: "Psychométriques",
} as const;

const KIND_CONFIGURATION: Record<
  Exclude<QuestionImportKind, "passages">,
  {
    domain: "VERBAL" | "QUANTITATIVE";
    type:
      | "ANALOGY"
      | "VERBAL_REASONING"
      | "PASSAGE_COMPREHENSION"
      | "QUANTITATIVE";
  }
> = {
  analogies: { domain: "VERBAL", type: "ANALOGY" },
  "comprehension-deduction": {
    domain: "VERBAL",
    type: "VERBAL_REASONING",
  },
  "passage-questions": {
    domain: "VERBAL",
    type: "PASSAGE_COMPREHENSION",
  },
  quantitative: { domain: "QUANTITATIVE", type: "QUANTITATIVE" },
};

export type DatabaseImportResult = {
  imported: number;
  created: number;
  updated: number;
};

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function chunks<T>(values: T[], size: number) {
  const result: T[][] = [];
  for (let index = 0; index < values.length; index += size) {
    result.push(values.slice(index, index + size));
  }
  return result;
}

export async function importValidatedCsvRecords(
  kind: QuestionImportKind,
  records: Array<QuestionCsvRecord | PassageCsvRecord>,
): Promise<DatabaseImportResult> {
  return prisma.$transaction(
    async (transaction) => {
      const program = await transaction.program.upsert({
        where: { slug: PROGRAM.slug },
        create: {
          ...PROGRAM,
          status: "PUBLISHED",
          sortOrder: 10,
        },
        update: { name: PROGRAM.name },
        select: { id: true },
      });

      if (kind === "passages") {
        const passages = records as PassageCsvRecord[];
        const existing = await transaction.passage.findMany({
          where: {
            programId: program.id,
            externalId: { in: passages.map((record) => record.externalId) },
          },
          select: {
            externalId: true, title: true, theme: true, text: true,
            wordCount: true, estimatedLines: true,
          },
        });
        const existingIds = new Set(
          existing.map((record) => record.externalId),
        );
        const passageById = new Map(existing.map((record) => [record.externalId, record]));
        const changedPassageIds = new Set(passages.filter((record) => {
          const previous = passageById.get(record.externalId);
          return previous && (
            previous.title !== record.title || previous.theme !== record.theme ||
            previous.text !== record.text || previous.wordCount !== record.wordCount ||
            previous.estimatedLines !== record.estimatedLines
          );
        }).map((record) => record.externalId));

        for (const batch of chunks(passages, 500)) {
          const rows = batch.map((record) => ({
            id: randomUUID(),
            ...record,
          }));
          await transaction.$executeRawUnsafe(
            `
              INSERT INTO "passage" (
                "id", "programId", "externalId", "title", "theme", "text",
                "wordCount", "estimatedLines", "language", "status", "sourceStatus",
                "sourceCreatedAt", "sourceUpdatedAt", "sourceFile", "createdAt", "updatedAt"
              )
              SELECT
                x.id, $2, x.external_id, x.title, x.theme, x.body,
                x.word_count, x.estimated_lines, 'fr', 'DRAFT'::"ContentStatus", x.status::"ContentStatus",
                x.source_created_at::timestamptz, x.source_updated_at::timestamptz,
                x.source_file, now(), now()
              FROM jsonb_to_recordset($1::jsonb) AS x(
                id text, external_id text, title text, theme text, body text,
                word_count integer, estimated_lines integer, status text,
                source_created_at text, source_updated_at text, source_file text
              )
              ON CONFLICT ("programId", "externalId") DO UPDATE SET
                "title" = EXCLUDED."title",
                "theme" = EXCLUDED."theme",
                "text" = EXCLUDED."text",
                "wordCount" = EXCLUDED."wordCount",
                "estimatedLines" = EXCLUDED."estimatedLines",
                "sourceStatus" = EXCLUDED."sourceStatus",
                "status" = CASE WHEN EXISTS (
                  SELECT 1 FROM jsonb_array_elements_text($3::jsonb) changed(id)
                  WHERE changed.id = "passage"."externalId"
                ) THEN 'DRAFT'::"ContentStatus" ELSE "passage"."status" END,
                "editorialReviewedAt" = CASE WHEN EXISTS (
                  SELECT 1 FROM jsonb_array_elements_text($3::jsonb) changed(id)
                  WHERE changed.id = "passage"."externalId"
                ) THEN NULL ELSE "passage"."editorialReviewedAt" END,
                "sourceCreatedAt" = EXCLUDED."sourceCreatedAt",
                "sourceUpdatedAt" = EXCLUDED."sourceUpdatedAt",
                "sourceFile" = EXCLUDED."sourceFile",
                "updatedAt" = now()
            `,
            JSON.stringify(
              rows.map((record) => ({
                id: record.id,
                external_id: record.externalId,
                title: record.title,
                theme: record.theme,
                body: record.text,
                word_count: record.wordCount,
                estimated_lines: record.estimatedLines,
                status: record.status,
                source_created_at: record.sourceCreatedAt,
                source_updated_at: record.sourceUpdatedAt,
                source_file: record.sourceFile,
              })),
            ),
            program.id,
            JSON.stringify(batch.map((record) => record.externalId).filter((id) => changedPassageIds.has(id))),
          );
        }

        return {
          imported: passages.length,
          created: passages.length - existingIds.size,
          updated: existingIds.size,
        };
      }

      const questions = records as QuestionCsvRecord[];
      const configuration = KIND_CONFIGURATION[kind];
      const chapters = new Map<number, string>();
      questions.forEach((record) =>
        chapters.set(record.chapterExternalId, record.chapter),
      );

      for (const [externalId, name] of chapters) {
        await transaction.questionChapter.upsert({
          where: {
            programId_domain_externalId: {
              programId: program.id,
              domain: configuration.domain,
              externalId,
            },
          },
          create: {
            programId: program.id,
            domain: configuration.domain,
            externalId,
            slug: slugify(name),
            name,
            sortOrder: externalId,
          },
          update: { name, sortOrder: externalId },
        });
      }

      const passageExternalIds = [
        ...new Set(
          questions
            .map((record) => record.passageExternalId)
            .filter((value): value is string => Boolean(value)),
        ),
      ];
      if (passageExternalIds.length > 0) {
        const passages = await transaction.passage.findMany({
          where: {
            programId: program.id,
            externalId: { in: passageExternalIds },
          },
          select: { externalId: true },
        });
        const found = new Set(passages.map((passage) => passage.externalId));
        const missing = passageExternalIds.filter((id) => !found.has(id));
        if (missing.length > 0) {
          throw new Error(
            `PASSAGES_MISSING:${missing.slice(0, 20).join(",")}:${missing.length}`,
          );
        }
      }

      const existing = await transaction.question.findMany({
        where: {
          programId: program.id,
          externalId: { in: questions.map((record) => record.externalId) },
        },
        select: {
          externalId: true, domain: true, type: true,
          chapter: { select: { externalId: true } },
          passage: { select: { externalId: true } }, subTheme: true,
          difficulty: true, difficultyLabel: true, statement: true,
          explanation: true, imagePath: true, imageAlt: true,
          options: { orderBy: { position: "asc" }, select: { text: true, isCorrect: true } },
        },
      });
      const existingIds = new Set(existing.map((record) => record.externalId));
      const questionById = new Map(existing.map((record) => [record.externalId, record]));
      const changedQuestionIds = new Set(questions.filter((record) => {
        const previous = questionById.get(record.externalId);
        if (!previous) return false;
        return previous.domain !== configuration.domain || previous.type !== configuration.type ||
          previous.chapter.externalId !== record.chapterExternalId ||
          previous.passage?.externalId !== (record.passageExternalId ?? undefined) ||
          previous.subTheme !== record.subTheme || previous.difficulty !== record.difficulty ||
          previous.difficultyLabel !== record.difficultyLabel ||
          previous.statement !== record.statement || previous.explanation !== record.explanation ||
          previous.imagePath !== record.imagePath || previous.imageAlt !== record.imageAlt ||
          previous.options.length !== record.choices.length ||
          previous.options.some((option, index) =>
            option.text !== record.choices[index] || option.isCorrect !== (index + 1 === record.correctChoice));
      }).map((record) => record.externalId));

      for (const batch of chunks(questions, 500)) {
        const rows = batch.map((record) => ({
          id: randomUUID(),
          ...record,
        }));
        await transaction.$executeRawUnsafe(
          `
            INSERT INTO "question" (
              "id", "programId", "chapterId", "passageId", "externalId", "domain", "type",
              "subTheme", "difficulty", "difficultyLabel", "statement", "explanation", "language",
              "status", "sourceStatus", "imagePath", "imageAlt", "sourceCreatedAt", "sourceUpdatedAt", "sourceFile",
              "version", "createdAt", "updatedAt"
            )
            SELECT
              x.id, $2, chapter.id, passage.id, x.external_id,
              $3::"QuestionDomain", $4::"QuestionType", x.sub_theme, x.difficulty,
              x.difficulty_label, x.statement, x.explanation, 'fr', 'DRAFT'::"QuestionStatus", x.status::"QuestionStatus",
              x.image_path, x.image_alt, x.source_created_at::timestamptz,
              x.source_updated_at::timestamptz, x.source_file, 1, now(), now()
            FROM jsonb_to_recordset($1::jsonb) AS x(
              id text, external_id text, passage_external_id text, chapter_external_id integer,
              sub_theme text, difficulty integer, difficulty_label text, statement text,
              explanation text, status text, source_created_at text, source_updated_at text,
              source_file text, image_path text, image_alt text
            )
            JOIN "question_chapter" chapter
              ON chapter."programId" = $2
             AND chapter."domain" = $3::"QuestionDomain"
             AND chapter."externalId" = x.chapter_external_id
            LEFT JOIN "passage" passage
              ON passage."programId" = $2
             AND passage."externalId" = x.passage_external_id
            ON CONFLICT ("programId", "externalId") DO UPDATE SET
              "chapterId" = EXCLUDED."chapterId",
              "passageId" = EXCLUDED."passageId",
              "domain" = EXCLUDED."domain",
              "type" = EXCLUDED."type",
              "subTheme" = EXCLUDED."subTheme",
              "difficulty" = EXCLUDED."difficulty",
              "difficultyLabel" = EXCLUDED."difficultyLabel",
              "statement" = EXCLUDED."statement",
              "explanation" = EXCLUDED."explanation",
              "sourceStatus" = EXCLUDED."sourceStatus",
              "status" = CASE WHEN EXISTS (
                SELECT 1 FROM jsonb_array_elements_text($5::jsonb) changed(id)
                WHERE changed.id = "question"."externalId"
              ) THEN 'DRAFT'::"QuestionStatus" ELSE "question"."status" END,
              "editorialReviewedAt" = CASE WHEN EXISTS (
                SELECT 1 FROM jsonb_array_elements_text($5::jsonb) changed(id)
                WHERE changed.id = "question"."externalId"
              ) THEN NULL ELSE "question"."editorialReviewedAt" END,
              "imagePath" = EXCLUDED."imagePath",
              "imageAlt" = EXCLUDED."imageAlt",
              "sourceCreatedAt" = EXCLUDED."sourceCreatedAt",
              "sourceUpdatedAt" = EXCLUDED."sourceUpdatedAt",
              "sourceFile" = EXCLUDED."sourceFile",
              "version" = CASE WHEN EXISTS (
                SELECT 1 FROM jsonb_array_elements_text($5::jsonb) changed(id)
                WHERE changed.id = "question"."externalId"
              ) THEN "question"."version" + 1 ELSE "question"."version" END,
              "updatedAt" = now()
          `,
          JSON.stringify(
            rows.map((record) => ({
              id: record.id,
              external_id: record.externalId,
              passage_external_id: record.passageExternalId,
              chapter_external_id: record.chapterExternalId,
              sub_theme: record.subTheme,
              difficulty: record.difficulty,
              difficulty_label: record.difficultyLabel,
              statement: record.statement,
              explanation: record.explanation,
              status: record.status,
              source_created_at: record.sourceCreatedAt,
              source_updated_at: record.sourceUpdatedAt,
              source_file: record.sourceFile,
              image_path: record.imagePath,
              image_alt: record.imageAlt,
            })),
          ),
          program.id,
          configuration.domain,
          configuration.type,
          JSON.stringify(batch.map((record) => record.externalId).filter((id) => changedQuestionIds.has(id))),
        );
      }

      const importedQuestions = await transaction.question.findMany({
        where: {
          programId: program.id,
          externalId: { in: questions.map((record) => record.externalId) },
        },
        select: { id: true, externalId: true },
      });
      const refreshedQuestionIds = importedQuestions
        .filter((question) => !existingIds.has(question.externalId) || changedQuestionIds.has(question.externalId))
        .map((question) => question.id);
      const idByExternalId = new Map(
        importedQuestions.map((question) => [question.externalId, question.id]),
      );

      for (const batch of chunks(refreshedQuestionIds, 500)) {
        await transaction.questionOption.deleteMany({
          where: { questionId: { in: batch } },
        });
      }

      const questionOptions = questions.filter((record) =>
        !existingIds.has(record.externalId) || changedQuestionIds.has(record.externalId)
      ).flatMap((record) => {
        const questionId = idByExternalId.get(record.externalId);
        if (!questionId)
          throw new Error(`QUESTION_NOT_IMPORTED:${record.externalId}`);
        return record.choices.map((text, index) => ({
          id: randomUUID(),
          question_id: questionId,
          position: index + 1,
          text,
          is_correct: index + 1 === record.correctChoice,
        }));
      });
      for (const batch of chunks(questionOptions, 1_000)) {
        await transaction.$executeRawUnsafe(
          `
            INSERT INTO "question_option" (
              "id", "questionId", "position", "text", "isCorrect", "createdAt", "updatedAt"
            )
            SELECT x.id, x.question_id, x.position, x.text, x.is_correct, now(), now()
            FROM jsonb_to_recordset($1::jsonb) AS x(
              id text, question_id text, position integer, text text, is_correct boolean
            )
          `,
          JSON.stringify(batch),
        );
      }

      return {
        imported: questions.length,
        created: questions.length - existingIds.size,
        updated: existingIds.size,
      };
    },
    { maxWait: 10_000, timeout: 120_000 },
  );
}
