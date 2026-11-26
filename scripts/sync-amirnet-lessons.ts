import "dotenv/config";

import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { PrismaNeon } from "@prisma/adapter-neon";

import { amirnetLessons } from "../lib/content/amirnet-lessons";
import { PrismaClient } from "../lib/database/prisma/client";

async function main() {
  const lessons = await Promise.all(
    amirnetLessons.map(async (source) => {
      const content = await readFile(
        path.join(process.cwd(), "content/lessons/amirnet", source.file),
        "utf8",
      );
      const title = content.match(/^# (.+)\n/)?.[1];
      if (
        !title ||
        !content.includes("## Votre fiche de révision\n") ||
        content.includes("\n---\n") ||
        content.includes("Annexe d'intégration")
      ) {
        throw new Error(`Source élève invalide : ${source.file}`);
      }
      console.log(
        `${source.sourceId} v1 SHA-256 ${createHash("sha256").update(content).digest("hex").slice(0, 12)}`,
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
          where: { slug: "amirnet" },
        });
        if (!program) throw new Error("Programme AMIRNET introuvable.");
        const course = await tx.course.upsert({
          where: { programId_slug: { programId: program.id, slug: "anglais" } },
          create: {
            programId: program.id,
            slug: "anglais",
            name: "Anglais",
            description: "Lecture et compréhension de l'anglais pour AMIRNET.",
            sortOrder: 0,
            status: publish ? "PUBLISHED" : "DRAFT",
          },
          update: publish ? { status: "PUBLISHED" } : {},
        });
        for (const source of lessons) {
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
          await tx.lesson.upsert({
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
        }
      },
      { timeout: 60_000, maxWait: 20_000 },
    );
    console.log(
      `${lessons.length} leçons AMIRNET synchronisées${publish ? " et publiées" : " en brouillon"}.`,
    );
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
