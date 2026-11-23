import "dotenv/config";

import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { PrismaNeon } from "@prisma/adapter-neon";

import { PrismaClient } from "../lib/database/prisma/client";

const sources = [
  {
    file: "03-fractions.md",
    sourceId: "quant-fractions",
    slug: "fractions",
    chapter: 3,
    title: "Les fractions : choisir l’unité, simplifier le raisonnement",
  },
  {
    file: "04-pourcentages.md",
    sourceId: "quant-pourcentages",
    slug: "pourcentages",
    chapter: 4,
    title: "Les pourcentages : garder la bonne base du début à la fin",
  },
  {
    file: "05-ratios-proportions.md",
    sourceId: "quant-ratios-proportions",
    slug: "ratios-proportions",
    chapter: 5,
    title: "Ratios et proportions : transformer des rapports en parts communes",
  },
  {
    file: "06-moyennes.md",
    sourceId: "quant-moyennes",
    slug: "moyennes",
    chapter: 6,
    title: "Les moyennes : retrouver la somme derrière le résultat",
  },
  {
    file: "07-puissances-racines.md",
    sourceId: "quant-puissances-racines",
    slug: "puissances-racines",
    chapter: 7,
    title: "Puissances et racines : reconnaître la structure sans développer",
  },
  {
    file: "08-expressions-algebriques.md",
    sourceId: "quant-expressions-algebriques",
    slug: "expressions-algebriques",
    chapter: 8,
    title: "Expressions algébriques : transformer sans perdre l’information",
  },
  {
    file: "09-equations-inegalites.md",
    sourceId: "quant-equations-inegalites",
    slug: "equations-inegalites",
    chapter: 9,
    title: "Équations et inégalités : trouver toutes les solutions autorisées",
  },
  {
    file: "10-problemes-algebriques.md",
    sourceId: "quant-problemes-algebriques",
    slug: "problemes-algebriques",
    chapter: 10,
    title: "Problèmes algébriques : traduire l’histoire avant de résoudre",
  },
  {
    file: "11-vitesse-distance-temps.md",
    sourceId: "quant-vitesse-distance-temps",
    slug: "vitesse-distance-temps",
    chapter: 11,
    title: "Vitesse, distance et temps : suivre les positions et les horloges",
  },
  {
    file: "12-travail-debits.md",
    sourceId: "quant-travail-debits",
    slug: "travail-debits",
    chapter: 12,
    title: "Travail et débits : additionner les contributions, pas les durées",
  },
  {
    file: "13-suites-regularites.md",
    sourceId: "quant-suites-regularites",
    slug: "suites-regularites",
    chapter: 13,
    title: "Suites et régularités : compter les étapes, pas seulement les nombres",
  },
  {
    file: "14-combinatoire.md",
    sourceId: "quant-combinatoire",
    slug: "combinatoire",
    chapter: 14,
    title: "Combinatoire : compter chaque résultat une fois",
  },
  {
    file: "15-probabilites.md",
    sourceId: "quant-probabilites",
    slug: "probabilites",
    chapter: 15,
    title: "Probabilités : choisir le bon univers avant de compter",
  },
  {
    file: "16-tableaux-donnees.md",
    sourceId: "quant-tableaux-donnees",
    slug: "tableaux-donnees",
    chapter: 16,
    title: "Tableaux et données : comprendre les nombres avant de calculer",
  },
  {
    file: "17-angles-droites.md",
    sourceId: "quant-angles-droites",
    slug: "angles-droites",
    chapter: 17,
    title: "Angles et droites : apprendre à lire une figure",
  },
  {
    file: "18-triangles.md",
    sourceId: "quant-triangles",
    slug: "triangles",
    chapter: 18,
    title: "Triangles : reconnaître la situation avant de choisir la formule",
  },
  {
    file: "19-quadrilateres-polygones.md",
    sourceId: "quant-quadrilateres-polygones",
    slug: "quadrilateres-polygones",
    chapter: 19,
    title: "Quadrilatères et polygones : découper pour comprendre",
  },
  {
    file: "20-cercles.md",
    sourceId: "quant-cercles",
    slug: "cercles",
    chapter: 20,
    title: "Cercles : distinguer le bord, la surface et les angles",
  },
  {
    file: "21-espace-reperage.md",
    sourceId: "quant-espace-reperage",
    slug: "espace-reperage",
    chapter: 21,
    title: "Espace et repérage : se déplacer, mesurer et remplir",
  },
] as const;

async function main() {
  const lessons = await Promise.all(
    sources.map(async (source) => {
      const content = await readFile(
        path.join(process.cwd(), "content/lessons", source.file),
        "utf8",
      );
      if (
        !content.startsWith(`# ${source.title}\n`) ||
        !content.includes("## Votre fiche de révision\n") ||
        content.includes("Annexe éditoriale et intégration")
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
      return { ...source, content };
    }),
  );

  if (!process.argv.includes("--apply")) {
    console.log(
      "Lecture seule. Pour écrire : --apply --expect-host=... et LESSON_IMPORT_DATABASE_URL ou --use-configured-database.",
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
        const course = await tx.course.findUnique({
          where: {
            programId_slug: {
              programId: program.id,
              slug: "reflexion-quantitative",
            },
          },
        });
        if (!course) throw new Error("Matière quantitative introuvable.");

        for (const source of lessons) {
          const chapter = await tx.questionChapter.findUnique({
            where: {
              programId_domain_externalId: {
                programId: program.id,
                domain: "QUANTITATIVE",
                externalId: source.chapter,
              },
            },
          });
          if (!chapter || chapter.courseId !== course.id)
            throw new Error(
              `Chapitre ${source.chapter} absent ou mal rattaché.`,
            );
          const existing = await tx.lesson.findUnique({
            where: { sourceId: source.sourceId },
          });
          if (
            existing &&
            (existing.slug !== source.slug || existing.courseId !== course.id)
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
              sortOrder: source.chapter,
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
      publish
        ? `${lessons.length} leçons synchronisées et publiées.`
        : `${lessons.length} brouillons synchronisés.`,
    );
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
