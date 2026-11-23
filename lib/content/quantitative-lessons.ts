import { prisma } from "@/lib/database/prisma";

export const quantitativeLessons = [
  {
    sourceId: "quant-nombres",
    slug: "nombres",
    number: "01",
    description: "Nombres, signes, parité et méthodes de résolution.",
  },
  {
    sourceId: "quant-divisibilite",
    slug: "divisibilite",
    number: "02",
    description: "Divisibilité, PGCD, PPCM, restes et cycles.",
  },
  {
    sourceId: "quant-fractions",
    slug: "fractions",
    number: "03",
    description:
      "Unités, opérations sur les fractions et problèmes de partage.",
  },
  {
    sourceId: "quant-pourcentages",
    slug: "pourcentages",
    number: "04",
    description: "Bases de calcul, variations successives et taux globaux.",
  },
  {
    sourceId: "quant-ratios-proportions",
    slug: "ratios-proportions",
    number: "05",
    description: "Rapports, proportions et quantités conservées.",
  },
  {
    sourceId: "quant-moyennes",
    slug: "moyennes",
    number: "06",
    description: "Sommes, effectifs et moyennes pondérées.",
  },
  {
    sourceId: "quant-puissances-racines",
    slug: "puissances-racines",
    number: "07",
    description: "Puissances, racines, signes et valeurs exactes.",
  },
  {
    sourceId: "quant-expressions-algebriques",
    slug: "expressions-algebriques",
    number: "08",
    description: "Réduire, développer, factoriser et substituer.",
  },
  {
    sourceId: "quant-equations-inegalites",
    slug: "equations-inegalites",
    number: "09",
    description: "Équations, systèmes, intervalles et solutions autorisées.",
  },
  {
    sourceId: "quant-problemes-algebriques",
    slug: "problemes-algebriques",
    number: "10",
    description: "Traduire un énoncé en modèle puis vérifier la réponse.",
  },
  {
    sourceId: "quant-vitesse-distance-temps",
    slug: "vitesse-distance-temps",
    number: "11",
    description: "Unités, vitesses moyennes, rencontres et trajets par phases.",
  },
  {
    sourceId: "quant-travail-debits",
    slug: "travail-debits",
    number: "12",
    description: "Cadences, travail simultané, remplissage et changements de rythme.",
  },
  {
    sourceId: "quant-suites-regularites",
    slug: "suites-regularites",
    number: "13",
    description: "Rangs, suites arithmétiques et géométriques, récurrences.",
  },
  {
    sourceId: "quant-combinatoire",
    slug: "combinatoire",
    number: "14",
    description: "Choix, ordre, répétition et méthodes de dénombrement.",
  },
  {
    sourceId: "quant-probabilites",
    slug: "probabilites",
    number: "15",
    description: "Univers, événements, tirages et probabilités conditionnelles.",
  },
  {
    sourceId: "quant-tableaux-donnees",
    slug: "tableaux-donnees",
    number: "16",
    description:
      "Lire un tableau, calculer des fréquences et interpréter les données.",
  },
  {
    sourceId: "quant-angles-droites",
    slug: "angles-droites",
    number: "17",
    description:
      "Lire une figure, relier les angles et reconnaître les droites.",
  },
  {
    sourceId: "quant-triangles",
    slug: "triangles",
    number: "18",
    description: "Angles, aires, longueurs et triangles semblables.",
  },
  {
    sourceId: "quant-quadrilateres-polygones",
    slug: "quadrilateres-polygones",
    number: "19",
    description: "Aires, périmètres et propriétés des polygones.",
  },
  {
    sourceId: "quant-cercles",
    slug: "cercles",
    number: "20",
    description: "Périmètres, aires, arcs, secteurs et tangentes.",
  },
  {
    sourceId: "quant-espace-reperage",
    slug: "espace-reperage",
    number: "21",
    description: "Coordonnées, distances, solides et volumes.",
  },
] as const;

export async function getQuantitativeLesson(
  sourceId: string,
  includeUnpublished = false,
) {
  if (!quantitativeLessons.some((lesson) => lesson.sourceId === sourceId))
    return null;
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
