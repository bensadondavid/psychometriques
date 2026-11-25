import { prisma } from "@/lib/database/prisma";

export const verbalLessons = [
  {
    sourceId: "verbal-analogies-methode",
    slug: "analogies-methode",
    number: "01",
    file: "01-analogies-methode.md",
    chapter: 1,
    description:
      "Formuler la relation exacte et conserver le rôle des deux mots.",
  },
  {
    sourceId: "verbal-analogies-categories-parties",
    slug: "categories-parties",
    number: "02",
    file: "02-categories-parties.md",
    chapter: 1,
    description: "Distinguer catégorie, partie, groupe et contenu.",
  },
  {
    sourceId: "verbal-analogies-objets-fonctions-mesures",
    slug: "objets-fonctions-mesures",
    number: "03",
    file: "03-objets-fonctions-mesures.md",
    chapter: 1,
    description: "Reconnaître les fonctions, les instruments et les mesures.",
  },
  {
    sourceId: "verbal-analogies-createurs-matieres-lieux",
    slug: "createurs-matieres-lieux",
    number: "04",
    file: "04-createurs-matieres-lieux.md",
    chapter: 1,
    description: "Relier créateurs, productions, matières et lieux.",
  },
  {
    sourceId: "verbal-analogies-actions-causes-objectifs",
    slug: "actions-causes-objectifs",
    number: "05",
    file: "05-actions-causes-objectifs.md",
    chapter: 1,
    description: "Distinguer résultat, conséquence et objectif.",
  },
  {
    sourceId: "verbal-analogies-opposition-intensite-processus",
    slug: "opposition-intensite-processus",
    number: "06",
    file: "06-opposition-intensite-processus.md",
    chapter: 1,
    description: "Lire les oppositions, les degrés et les étapes.",
  },
  {
    sourceId: "verbal-analogies-relations-abstraites-synthese",
    slug: "relations-abstraites-et-synthese",
    number: "07",
    file: "07-relations-abstraites-et-synthese.md",
    chapter: 1,
    description:
      "Résoudre les relations abstraites et faire le bilan des analogies.",
  },
  {
    sourceId: "verbal-connecteurs-phrases",
    slug: "connecteurs-phrases-a-completer",
    number: "08",
    file: "08-connecteurs-phrases-a-completer.md",
    chapter: 2,
    description: "Reconstruire le raisonnement d'une phrase à compléter.",
  },
  {
    sourceId: "verbal-negations-conditions",
    slug: "negations-quantificateurs-conditions",
    number: "09",
    file: "09-negations-quantificateurs-conditions.md",
    chapter: 2,
    description: "Comprendre négations, quantificateurs et conditions.",
  },
  {
    sourceId: "verbal-comprendre-paragraphe",
    slug: "comprendre-reformuler-paragraphe",
    number: "10",
    file: "10-comprendre-reformuler-paragraphe.md",
    chapter: 2,
    description: "Reformuler un paragraphe sans perdre son idée ni ses limites.",
  },
  {
    sourceId: "verbal-conclusions-certitude",
    slug: "conclusions-certitude-possibilite",
    number: "11",
    file: "11-conclusions-certitude-possibilite.md",
    chapter: 2,
    description: "Distinguer le certain, le possible et le non établi.",
  },
  {
    sourceId: "verbal-arguments-hypotheses",
    slug: "arguments-hypotheses-implicites",
    number: "12",
    file: "12-arguments-hypotheses-implicites.md",
    chapter: 2,
    description: "Repérer prémisses, conclusion et hypothèse implicite.",
  },
  {
    sourceId: "verbal-renforcer-affaiblir",
    slug: "renforcer-affaiblir-argument",
    number: "13",
    file: "13-renforcer-affaiblir-argument.md",
    chapter: 2,
    description: "Renforcer ou affaiblir le lien central d'un argument.",
  },
  {
    sourceId: "verbal-expliquer-paradoxes",
    slug: "expliquer-resultats-paradoxes",
    number: "14",
    file: "14-expliquer-resultats-paradoxes.md",
    chapter: 2,
    description: "Expliquer un résultat surprenant sans nier les faits.",
  },
  {
    sourceId: "verbal-regles-configurations",
    slug: "regles-configurations-possibles",
    number: "15",
    file: "15-regles-configurations-possibles.md",
    chapter: 2,
    description: "Appliquer des règles pour construire le possible.",
  },
  {
    sourceId: "verbal-comparer-raisonnements-principes",
    slug: "comparer-raisonnements-principes",
    number: "16",
    file: "16-comparer-raisonnements-principes.md",
    chapter: 2,
    description: "Comparer des structures de raisonnement et appliquer un principe.",
  },
  {
    sourceId: "verbal-textes-lecture-structure",
    slug: "lire-structure-texte",
    number: "17",
    file: "17-lire-structure-texte.md",
    chapter: 3,
    description: "Lire la structure d'un texte et retrouver le rôle de chaque passage.",
  },
  {
    sourceId: "verbal-textes-these-intention",
    slug: "idee-principale-these-intention",
    number: "18",
    file: "18-idee-principale-these-intention.md",
    chapter: 3,
    description: "Distinguer l'idée principale, la thèse et l'intention de l'auteur.",
  },
  {
    sourceId: "verbal-textes-informations-referents",
    slug: "informations-vocabulaire-referents",
    number: "19",
    file: "19-informations-vocabulaire-referents.md",
    chapter: 3,
    description: "Retrouver les informations exactes, le sens des mots et leurs référents.",
  },
  {
    sourceId: "verbal-textes-deductions-bilan",
    slug: "deductions-pieges-bilan-textes",
    number: "20",
    file: "20-deductions-pieges-bilan-textes.md",
    chapter: 3,
    description: "Déduire sans extrapoler et éviter les pièges de lecture.",
  },
] as const;

export async function getVerbalLesson(
  sourceId: string,
  includeUnpublished = false,
) {
  if (!verbalLessons.some((lesson) => lesson.sourceId === sourceId))
    return null;
  return prisma.lesson.findFirst({
    where: {
      sourceId,
      ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
      course: {
        slug: "reflexion-verbale",
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

export async function getVerbalLessons(includeUnpublished = false) {
  return prisma.lesson.findMany({
    where: {
      sourceId: { in: verbalLessons.map((lesson) => lesson.sourceId) },
      ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
      course: {
        slug: "reflexion-verbale",
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
