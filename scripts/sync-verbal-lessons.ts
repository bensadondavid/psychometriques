import "dotenv/config";

import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { PrismaNeon } from "@prisma/adapter-neon";

import { PrismaClient } from "../lib/database/prisma/client";
import { verbalLessons } from "../lib/content/verbal-lessons";

async function main() {
  const lessons = await Promise.all(
    verbalLessons.map(async (source) => {
      const content = await readFile(
        path.join(process.cwd(), "content/lessons/verbal", source.file),
        "utf8",
      );
      const title = content.match(/^# (.+)\n/)?.[1];
      if (
        !title ||
        !content.includes("## Votre fiche de révision\n") ||
        content.includes("Annexe d'intégration") ||
        content.includes("Annexe d’intégration") ||
        content.includes("Hors contenu élève")
      ) {
        throw new Error(`Source élève invalide : ${source.file}`);
      }
      const hash = createHash("sha256")
        .update(content)
        .digest("hex")
        .slice(0, 12);
      console.log(
        `${source.sourceId} v1 SHA-256 ${hash} : ${content.length} caractères`,
      );
      return { ...source, title, content };
    }),
  );

  if (!process.argv.includes("--apply")) {
    console.log(
      "Lecture seule. Pour écrire : --apply --expect-host=... et LESSON_IMPORT_DATABASE_URL ou --use-configured-database. --publish rend les leçons visibles.",
    );
    return;
  }

  const connectionString =
    process.env.LESSON_IMPORT_DATABASE_URL ??
    (process.argv.includes("--use-configured-database")
      ? process.env.DATABASE_URL
      : undefined);
  const expectedHost = process.argv
    .find((arg) => arg.startsWith("--expect-host="))
    ?.slice("--expect-host=".length);
  if (
    !connectionString ||
    !expectedHost ||
    new URL(connectionString).hostname !== expectedHost
  ) {
    throw new Error(
      "Cible absente ou différente de --expect-host. Import annulé.",
    );
  }
  const publish = process.argv.includes("--publish");
  const prisma = new PrismaClient({
    adapter: new PrismaNeon({ connectionString }),
  });
  try {
    await prisma.$transaction(
      async (tx) => {
        const program = await tx.program.findUnique({
          where: { slug: "psychometriques" },
        });
        if (!program) throw new Error("Programme Psychométriques introuvable.");
        const chapters = await Promise.all(
          [1, 2, 3].map((externalId) =>
            tx.questionChapter.findUnique({
              where: {
                programId_domain_externalId: {
                  programId: program.id,
                  domain: "VERBAL",
                  externalId,
                },
              },
            }),
          ),
        );
        if (
          chapters.some(
            (chapter, index) =>
              !chapter ||
              chapter.slug !==
                [
                  "analogies",
                  "comprehension-et-deduction",
                  "comprehension-de-textes",
                ][index],
          )
        ) {
          throw new Error(
            "Les trois chapitres verbaux attendus sont absents ou renommés.",
          );
        }
        const existingCourse = await tx.course.findUnique({
          where: {
            programId_slug: {
              programId: program.id,
              slug: "reflexion-verbale",
            },
          },
        });
        if (
          chapters.some(
            (chapter) =>
              chapter!.courseId && chapter!.courseId !== existingCourse?.id,
          )
        ) {
          throw new Error(
            "Un chapitre verbal appartient déjà à une autre matière.",
          );
        }
        const course = await tx.course.upsert({
          where: {
            programId_slug: {
              programId: program.id,
              slug: "reflexion-verbale",
            },
          },
          create: {
            programId: program.id,
            slug: "reflexion-verbale",
            name: "Réflexion verbale",
            description:
              "Analogies, compréhension et déduction, compréhension de textes.",
            sortOrder: 1,
            status: publish ? "PUBLISHED" : "DRAFT",
          },
          update: publish ? { status: "PUBLISHED" } : {},
        });
        for (const chapter of chapters) {
          await tx.questionChapter.update({
            where: { id: chapter!.id },
            data: { courseId: course.id },
          });
        }
        for (const source of lessons) {
          const chapter = chapters[source.chapter - 1]!;
          const existing = await tx.lesson.findUnique({
            where: { sourceId: source.sourceId },
          });
          if (
            existing &&
            (existing.slug !== source.slug ||
              existing.courseId !== course.id ||
              existing.programId !== program.id)
          ) {
            throw new Error(
              `Identifiant ${source.sourceId} déjà lié à une autre leçon.`,
            );
          }
          if (
            existing &&
            existing.content !== source.content &&
            existing.contentVersion >= 1
          ) {
            throw new Error(
              `Contenu de ${source.sourceId} modifié : augmenter sa version avant de resynchroniser.`,
            );
          }
          const lesson = await tx.lesson.upsert({
            where: { sourceId: source.sourceId },
            create: {
              sourceId: source.sourceId,
              programId: program.id,
              courseId: course.id,
              slug: source.slug,
              title: source.title,
              content: source.content,
              contentVersion: 1,
              sortOrder: Number(source.number),
              status: publish ? "PUBLISHED" : "DRAFT",
            },
            update: publish ? { status: "PUBLISHED" } : {},
          });
          await tx.lessonChapter.upsert({
            where: {
              lessonId_chapterId: {
                lessonId: lesson.id,
                chapterId: chapter.id,
              },
            },
            create: {
              lessonId: lesson.id,
              chapterId: chapter.id,
              courseId: course.id,
            },
            update: {},
          });
        }
      },
      { timeout: 60_000, maxWait: 20_000 },
    );
    console.log(
      `${lessons.length} leçons verbales synchronisées${publish ? " et publiées" : " en brouillon"}.`,
    );
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
