import { prisma } from "@/lib/database/prisma";

export const quantitativeLessons = [
  { sourceId: "quant-nombres", slug: "nombres", number: "01", description: "Nombres, signes, parité et méthodes de résolution." },
  { sourceId: "quant-divisibilite", slug: "divisibilite", number: "02", description: "Divisibilité, PGCD, PPCM, restes et cycles." },
  { sourceId: "quant-fractions", slug: "fractions", number: "03", description: "Unités, opérations sur les fractions et problèmes de partage." },
  { sourceId: "quant-pourcentages", slug: "pourcentages", number: "04", description: "Bases de calcul, variations successives et taux globaux." },
  { sourceId: "quant-ratios-proportions", slug: "ratios-proportions", number: "05", description: "Rapports, proportions et quantités conservées." },
  { sourceId: "quant-moyennes", slug: "moyennes", number: "06", description: "Sommes, effectifs et moyennes pondérées." },
  { sourceId: "quant-puissances-racines", slug: "puissances-racines", number: "07", description: "Puissances, racines, signes et valeurs exactes." },
  { sourceId: "quant-expressions-algebriques", slug: "expressions-algebriques", number: "08", description: "Réduire, développer, factoriser et substituer." },
  { sourceId: "quant-equations-inegalites", slug: "equations-inegalites", number: "09", description: "Équations, systèmes, intervalles et solutions autorisées." },
  { sourceId: "quant-problemes-algebriques", slug: "problemes-algebriques", number: "10", description: "Traduire un énoncé en modèle puis vérifier la réponse." },
] as const;

export async function getQuantitativeLesson(sourceId: string, includeUnpublished = false) {
  if (!quantitativeLessons.some((lesson) => lesson.sourceId === sourceId)) return null;
  return prisma.lesson.findFirst({
    where: {
      sourceId,
      ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
      course: {
        ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
        program: {
          slug: "psychometriques",
          ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
        },
      },
    },
    select: { id: true, title: true, content: true },
  });
}

export async function getQuantitativeLessons(includeUnpublished = false) {
  return prisma.lesson.findMany({
    where: {
      sourceId: { in: quantitativeLessons.map((lesson) => lesson.sourceId) },
      ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
      course: {
        ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
        program: {
          slug: "psychometriques",
          ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
        },
      },
    },
    select: { id: true, sourceId: true, title: true, content: true },
  });
}
