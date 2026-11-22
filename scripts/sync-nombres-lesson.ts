import "dotenv/config";

import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { PrismaNeon } from "@prisma/adapter-neon";

import { PrismaClient } from "../lib/database/prisma/client";

const sourceId = "quant-nombres";
const title = "Les nombres : repérer la structure avant de calculer";
const contentVersion = 1;
const filePath = path.join(process.cwd(), "content/lessons/01-nombres.md");

async function main() {
  const content = await readFile(filePath, "utf8");
  if (!content.startsWith(`# ${title}\n`) || content.includes("# Annexe éditoriale")) {
    throw new Error("Le fichier de leçon ne correspond pas au contenu élève attendu.");
  }

  const hash = createHash("sha256").update(content).digest("hex").slice(0, 12);
  const apply = process.argv.includes("--apply");
  const publish = process.argv.includes("--publish");
  console.log(`Leçon ${sourceId}, version ${contentVersion}, SHA-256 ${hash}, ${content.length} caractères.`);

  if (!apply) {
    console.log("Lecture seule. Pour écrire, fournir --apply, --expect-host et une URL explicite ou --use-configured-database.");
    return;
  }

  const connectionString = process.env.LESSON_IMPORT_DATABASE_URL
    ?? (process.argv.includes("--use-configured-database") ? process.env.DATABASE_URL : undefined);
  const expectedHost = process.argv.find((argument) => argument.startsWith("--expect-host="))?.split("=", 2)[1];
  if (!connectionString || !expectedHost || new URL(connectionString).hostname !== expectedHost) {
    throw new Error("Cible absente ou différente de --expect-host. Import annulé.");
  }

  const prisma = new PrismaClient({ adapter: new PrismaNeon({ connectionString }) });
  try {
    await prisma.$transaction(async (tx) => {
      const program = await tx.program.findUnique({ where: { slug: "psychometriques" } });
      if (!program) throw new Error("Programme Psychométriques introuvable.");

      const existing = await tx.lesson.findUnique({ where: { sourceId } });
      if (existing && existing.slug !== "nombres") {
        throw new Error(`L'identifiant ${sourceId} désigne déjà une autre leçon.`);
      }
      if (existing?.status === "PUBLISHED" && existing.content !== content && !publish) {
        throw new Error("Une mise à jour d'une leçon publiée nécessite --publish.");
      }
      if (existing && existing.content !== content && existing.contentVersion >= contentVersion) {
        throw new Error("Le contenu a changé : augmenter contentVersion avant la synchronisation.");
      }

      const course = await tx.course.upsert({
        where: { programId_slug: { programId: program.id, slug: "reflexion-quantitative" } },
        create: {
          programId: program.id,
          slug: "reflexion-quantitative",
          name: "Réflexion quantitative",
          status: publish ? "PUBLISHED" : "DRAFT",
        },
        update: publish ? { status: "PUBLISHED" } : {},
      });

      if (existing && existing.courseId !== course.id) {
        throw new Error(`L'identifiant ${sourceId} est lié à un autre parcours.`);
      }

      await tx.lesson.upsert({
        where: { sourceId },
        create: {
          sourceId,
          programId: program.id,
          courseId: course.id,
          slug: "nombres",
          title,
          content,
          contentVersion,
          status: publish ? "PUBLISHED" : "DRAFT",
        },
        update: {
          title,
          content,
          contentVersion,
          ...(publish ? { status: "PUBLISHED" as const } : {}),
        },
      });
    });

    console.log(publish ? "Leçon synchronisée et publiée." : "Brouillon synchronisé.");
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
