import { createHash, randomUUID } from "node:crypto";
import { prisma } from "../database/prisma";
import type { Exam, Validation } from "./unified-types";

const NAMES: Record<Exam, string> = {
  psychometriques: "Psychométriques",
  amirnet: "AMIRNET",
  yaelnet: "YAELNET",
};
const chunks = <T>(items: T[], size = 400): T[][] =>
  Array.from({ length: Math.ceil(items.length / size) }, (_, i) =>
    items.slice(i * size, (i + 1) * size),
  );
const chapterKey = (domain: string, id: number) => `${domain}:${id}`;

export class MissingPassagesError extends Error {
  constructor(public readonly missing: { exam: Exam; externalId: string }[]) {
    super("Passages référencés absents du lot et de la base.");
  }
}

export async function checkMissingPassages(
  validation: Validation,
  db: Pick<typeof prisma, "program" | "passage"> = prisma,
) {
  const missing: { exam: Exam; externalId: string }[] = [];
  for (const exam of Object.keys(NAMES) as Exam[]) {
    const ids = validation.missingPassages
      .filter((p) => p.exam === exam)
      .map((p) => p.externalId);
    if (!ids.length) continue;
    const program = await db.program.findUnique({
      where: { slug: exam },
      select: { id: true },
    });
    const found = program
      ? await db.passage.findMany({
          where: { programId: program.id, externalId: { in: ids } },
          select: { externalId: true },
        })
      : [];
    const foundIds = new Set(found.map((p) => p.externalId));
    missing.push(
      ...ids
        .filter((id) => !foundIds.has(id))
        .map((externalId) => ({ exam, externalId })),
    );
  }
  return missing;
}

/** One transaction for all selected exams, passages, questions, options and source sections. */
export async function importUnifiedBatch(validation: Validation) {
  if (!validation.valid) throw new Error("Lot non validé.");
  return prisma.$transaction(
    async (tx) => {
      // Serialize this import pipeline; a concurrent retry must not compare against stale options.
      await tx.$queryRaw`SELECT pg_advisory_xact_lock(781230441::bigint)::text AS locked`;
      const missing = await checkMissingPassages(validation, tx);
      if (missing.length) throw new MissingPassagesError(missing);
      const result = {
        created: 0,
        updated: 0,
        unchanged: 0,
        passages: 0,
        sections: 0,
      };
      const now = new Date().toISOString();
      for (const exam of Object.keys(NAMES) as Exam[]) {
        const questions = validation.questions.filter((q) => q.exam === exam);
        const passages = validation.passages.filter((p) => p.exam === exam);
        if (!questions.length && !passages.length) continue;
        const program = await tx.program.upsert({
          where: { slug: exam },
          create: { slug: exam, name: NAMES[exam], status: "DRAFT" },
          update: {},
          select: { id: true },
        });
        const programId = program.id;
        const chapterInputs = [
          ...new Map(
            questions.map((q) => [
              chapterKey(q.domain, q.chapterExternalId),
              {
                programId,
                domain: q.domain,
                externalId: q.chapterExternalId,
                slug: `import-${q.domain.toLowerCase()}-${q.chapterExternalId}`,
                name: q.chapter,
                sortOrder: q.chapterExternalId,
              },
            ]),
          ).values(),
        ];
        // Never rename an editorial chapter or alter its course relation as a side effect.
        if (chapterInputs.length)
          await tx.questionChapter.createMany({
            data: chapterInputs,
            skipDuplicates: true,
          });
        const chapterRows = await tx.questionChapter.findMany({
          where: { programId },
          select: { id: true, domain: true, externalId: true },
        });
        const chapterIds = new Map(
          chapterRows.map((c) => [chapterKey(c.domain, c.externalId), c.id]),
        );

        const changedPassageIds: string[] = [];
        for (const batch of chunks(passages)) {
          const previous = await tx.passage.findMany({
            where: {
              programId,
              externalId: { in: batch.map((p) => p.externalId) },
            },
          });
          const byId = new Map(previous.map((p) => [p.externalId, p]));
          const payload = batch.map((p) => {
            const old = byId.get(p.externalId);
            const changed = Boolean(
              old &&
              (old.title !== p.title ||
                old.theme !== p.theme ||
                old.text !== p.text ||
                old.language !== p.language ||
                old.wordCount !== p.wordCount ||
                old.estimatedLines !== p.estimatedLines),
            );
            if (old && changed) changedPassageIds.push(old.id);
            return {
              ...p,
              id: randomUUID(),
              changed,
              sourceStatus: p.sourceStatus === "VALIDATED" ? "DRAFT" : p.sourceStatus,
              sourceCreatedAt:
                p.sourceCreatedAt ?? old?.sourceCreatedAt.toISOString() ?? now,
              sourceUpdatedAt:
                p.sourceUpdatedAt ?? old?.sourceUpdatedAt.toISOString() ?? now,
            };
          });
          await tx.$executeRawUnsafe(
            `
          INSERT INTO "passage" ("id","programId","externalId","title","theme","text","wordCount","estimatedLines","language","status","sourceStatus","sourceCreatedAt","sourceUpdatedAt","sourceFile","createdAt","updatedAt")
          SELECT x.id,$2,x."externalId",x.title,x.theme,x.text,x."wordCount",x."estimatedLines",x.language,'DRAFT'::"ContentStatus",x."sourceStatus"::"ContentStatus",x."sourceCreatedAt"::timestamptz,x."sourceUpdatedAt"::timestamptz,x."sourceFile",now(),now()
          FROM jsonb_to_recordset($1::jsonb) AS x(id text,"externalId" text,title text,theme text,text text,"wordCount" integer,"estimatedLines" integer,language text,"sourceStatus" text,"sourceCreatedAt" text,"sourceUpdatedAt" text,"sourceFile" text)
          ON CONFLICT ("programId","externalId") DO UPDATE SET
            "title"=EXCLUDED."title","theme"=EXCLUDED."theme","text"=EXCLUDED."text","wordCount"=EXCLUDED."wordCount","estimatedLines"=EXCLUDED."estimatedLines","language"=EXCLUDED."language",
            "sourceStatus"=EXCLUDED."sourceStatus","sourceCreatedAt"=EXCLUDED."sourceCreatedAt","sourceUpdatedAt"=EXCLUDED."sourceUpdatedAt","sourceFile"=EXCLUDED."sourceFile",
            "status"=CASE WHEN "passage"."id" IN (SELECT jsonb_array_elements_text($3::jsonb)) THEN 'DRAFT'::"ContentStatus" ELSE "passage"."status" END,
            "editorialReviewedAt"=CASE WHEN "passage"."id" IN (SELECT jsonb_array_elements_text($3::jsonb)) THEN NULL ELSE "passage"."editorialReviewedAt" END,
            "updatedAt"=now()
        `,
            JSON.stringify(payload),
            programId,
            JSON.stringify(changedPassageIds),
          );
          result.passages += batch.length;
        }
        // A changed reading passage invalidates editorial approval of its dependent questions.
        if (changedPassageIds.length)
          await tx.question.updateMany({
            where: { programId, passageId: { in: changedPassageIds } },
            data: {
              status: "DRAFT",
              editorialReviewedAt: null,
              version: { increment: 1 },
            },
          });
        const passageRows = await tx.passage.findMany({
          where: {
            programId,
            externalId: {
              in: [
                ...new Set(
                  questions.flatMap((q) =>
                    q.passageExternalId ? [q.passageExternalId] : [],
                  ),
                ),
              ],
            },
          },
          select: { id: true, externalId: true },
        });
        const passageIds = new Map(
          passageRows.map((p) => [p.externalId, p.id]),
        );
        const questionIds = new Map<string, string>();

        for (const batch of chunks(questions)) {
          const previous = await tx.question.findMany({
            where: {
              programId,
              externalId: { in: batch.map((q) => q.externalId) },
            },
            include: { options: { orderBy: { position: "asc" } } },
          });
          const byId = new Map(previous.map((q) => [q.externalId, q]));
          const changedIds: string[] = [];
          const options: {
            id: string;
            questionId: string;
            position: number;
            text: string;
            isCorrect: boolean;
          }[] = [];
          const payload = batch.map((q) => {
            const old = byId.get(q.externalId);
            const id = old?.id ?? randomUUID();
            questionIds.set(q.externalId, id);
            const chapterId = chapterIds.get(
              chapterKey(q.domain, q.chapterExternalId),
            );
            const passageId = q.passageExternalId
              ? passageIds.get(q.passageExternalId)
              : null;
            if (!chapterId || (q.passageExternalId && !passageId))
              throw new Error("Référence introuvable après validation.");
            const next = {
              chapterId,
              passageId: passageId ?? null,
              domain: q.domain,
              type: q.type,
              subTheme: q.subTheme,
              difficulty: q.difficulty,
              difficultyLabel: q.difficultyLabel,
              statement: q.statement,
              explanation: q.explanation,
              language: q.language,
              imagePath: q.imagePath,
              imageAlt: q.imageAlt,
            };
            const changed = Boolean(
              old &&
              (Object.entries(next).some(
                ([key, value]) => old[key as keyof typeof next] !== value,
              ) ||
                old.options.length !== 4 ||
                old.options.some(
                  (o, i) =>
                    o.position !== i + 1 ||
                    o.text !== q.choices[i] ||
                    o.isCorrect !== (i + 1 === q.correctChoice),
                )),
            );
            if (!old) result.created++;
            else if (changed) result.updated++;
            else result.unchanged++;
            if (changed) changedIds.push(id);
            if (!old || changed)
              q.choices.forEach((text, i) =>
                options.push({
                  id: randomUUID(),
                  questionId: id,
                  position: i + 1,
                  text,
                  isCorrect: i + 1 === q.correctChoice,
                }),
              );
            return {
              ...next,
              id,
              externalId: q.externalId,
              sourceCreatedAt:
                q.sourceCreatedAt ?? old?.sourceCreatedAt.toISOString() ?? now,
              sourceUpdatedAt:
                q.sourceUpdatedAt ?? old?.sourceUpdatedAt.toISOString() ?? now,
              sourceFile: q.sourceFile,
              sourceStatus: q.sourceStatus,
            };
          });
          await tx.$executeRawUnsafe(
            `
          INSERT INTO "question" ("id","programId","chapterId","passageId","externalId","domain","type","subTheme","difficulty","difficultyLabel","statement","explanation","language","status","sourceStatus","imagePath","imageAlt","sourceCreatedAt","sourceUpdatedAt","sourceFile","version","createdAt","updatedAt")
          SELECT x.id,$2,x."chapterId",x."passageId",x."externalId",x.domain::"QuestionDomain",x.type::"QuestionType",x."subTheme",x.difficulty,x."difficultyLabel",x.statement,x.explanation,x.language,'DRAFT'::"QuestionStatus",x."sourceStatus"::"QuestionStatus",x."imagePath",x."imageAlt",x."sourceCreatedAt"::timestamptz,x."sourceUpdatedAt"::timestamptz,x."sourceFile",1,now(),now()
          FROM jsonb_to_recordset($1::jsonb) AS x(id text,"chapterId" text,"passageId" text,"externalId" text,domain text,type text,"subTheme" text,difficulty integer,"difficultyLabel" text,statement text,explanation text,language text,"sourceStatus" text,"imagePath" text,"imageAlt" text,"sourceCreatedAt" text,"sourceUpdatedAt" text,"sourceFile" text)
          ON CONFLICT ("programId","externalId") DO UPDATE SET
            "chapterId"=EXCLUDED."chapterId","passageId"=EXCLUDED."passageId","domain"=EXCLUDED."domain","type"=EXCLUDED."type","subTheme"=EXCLUDED."subTheme","difficulty"=EXCLUDED."difficulty","difficultyLabel"=EXCLUDED."difficultyLabel","statement"=EXCLUDED."statement","explanation"=EXCLUDED."explanation","language"=EXCLUDED."language","imagePath"=EXCLUDED."imagePath","imageAlt"=EXCLUDED."imageAlt",
            "sourceStatus"=EXCLUDED."sourceStatus","sourceCreatedAt"=EXCLUDED."sourceCreatedAt","sourceUpdatedAt"=EXCLUDED."sourceUpdatedAt","sourceFile"=EXCLUDED."sourceFile",
            "version"="question"."version" + CASE WHEN "question"."id" IN (SELECT jsonb_array_elements_text($3::jsonb)) THEN 1 ELSE 0 END,
            "status"=CASE WHEN "question"."id" IN (SELECT jsonb_array_elements_text($3::jsonb)) THEN 'DRAFT'::"QuestionStatus" ELSE "question"."status" END,
            "editorialReviewedAt"=CASE WHEN "question"."id" IN (SELECT jsonb_array_elements_text($3::jsonb)) THEN NULL ELSE "question"."editorialReviewedAt" END,"updatedAt"=now()
        `,
            JSON.stringify(payload),
            programId,
            JSON.stringify(changedIds),
          );
          if (changedIds.length)
            await tx.questionOption.deleteMany({
              where: { questionId: { in: changedIds } },
            });
          for (const group of chunks(options, 1000))
            await tx.questionOption.createMany({ data: group });
        }

        // Preserve source section and position without inventing a new Prisma schema.
        for (const section of validation.sections.filter(
          (s) => s.exam === exam,
        )) {
          const slug = `csv-${createHash("sha256").update(`${section.file}:${section.section}`).digest("hex")}`;
          const old = await tx.exercise.findUnique({
            where: { programId_slug: { programId, slug } },
            include: { questions: { orderBy: { position: "asc" } } },
          });
          const members = [...section.questions]
            .sort((a, b) => a.position - b.position)
            .map((q) => ({
              questionId: questionIds.get(q.externalId)!,
              position: q.position,
            }));
          const changed =
            !old ||
            old.questions.length !== members.length ||
            old.questions.some(
              (q, i) =>
                q.questionId !== members[i].questionId ||
                q.position !== members[i].position,
            );
          if (!changed) continue;
          const exercise = await tx.exercise.upsert({
            where: { programId_slug: { programId, slug } },
            create: {
              programId,
              slug,
              title: `${section.file} — section ${section.section}`,
              kind: "PREPARED",
              status: "DRAFT",
              sortOrder: section.section,
            },
            update: { status: "DRAFT" },
            select: { id: true },
          });
          await tx.exerciseQuestion.deleteMany({
            where: { exerciseId: exercise.id },
          });
          await tx.exerciseQuestion.createMany({
            data: members.map((q) => ({
              ...q,
              programId,
              exerciseId: exercise.id,
            })),
          });
          result.sections++;
        }
      }
      return result;
    },
    { maxWait: 10_000, timeout: 120_000 },
  );
}
