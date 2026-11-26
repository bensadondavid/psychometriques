import { prisma } from "@/lib/database/prisma";

export const amirnetLessons = [
  {
    sourceId: "amir-structure-phrase",
    slug: "amirnet-structure-phrase",
    number: "01",
    file: "01-structure-phrase.md",
    description:
      "Retrouver le sujet, le verbe et les groupes d'une phrase anglaise.",
  },
  {
    sourceId: "amir-temps-chronologie",
    slug: "amirnet-temps-chronologie",
    number: "02",
    file: "02-temps-chronologie.md",
    description: "Conserver l'ordre, la durée et l'achèvement des événements.",
  },
  {
    sourceId: "amir-modaux",
    slug: "amirnet-modaux-certitude-obligation",
    number: "03",
    file: "03-modaux-certitude-obligation.md",
    description: "Distinguer capacité, possibilité, obligation et certitude.",
  },
  {
    sourceId: "amir-negations-quantificateurs",
    slug: "amirnet-negations-quantificateurs",
    number: "04",
    file: "04-negations-quantificateurs.md",
    description: "Lire exactement négations, quantités et restrictions.",
  },
  {
    sourceId: "amir-phrases-methode",
    slug: "amirnet-phrases-a-completer-methode",
    number: "05",
    file: "05-phrases-a-completer-methode.md",
    description: "Anticiper le mot manquant et vérifier la phrase entière.",
  },
  {
    sourceId: "amir-vocabulaire-contexte",
    slug: "amirnet-vocabulaire-en-contexte",
    number: "06",
    file: "06-vocabulaire-en-contexte.md",
    description: "Déduire le sens d'un mot à partir des indices de la phrase.",
  },
  {
    sourceId: "amir-prefixes-suffixes",
    slug: "amirnet-prefixes-suffixes",
    number: "07",
    file: "07-prefixes-suffixes.md",
    description: "Utiliser les familles de mots et vérifier leurs limites.",
  },
  {
    sourceId: "amir-expressions-associations",
    slug: "amirnet-expressions-associations-mots",
    number: "08",
    file: "08-expressions-associations-mots.md",
    description: "Lire les expressions et conserver leurs constructions.",
  },
  {
    sourceId: "amir-connecteurs-logiques",
    slug: "amirnet-connecteurs-logiques",
    number: "09",
    file: "09-connecteurs-logiques.md",
    description:
      "Identifier le lien entre deux idées et choisir sa construction.",
  },
  {
    sourceId: "amir-reformulations-methode",
    slug: "amirnet-reformulations-methode",
    number: "10",
    file: "10-reformulations-methode.md",
    description: "Changer les mots sans modifier les faits ni leurs limites.",
  },
  {
    sourceId: "amir-reformulations-transformations",
    slug: "amirnet-reformulations-transformations",
    number: "11",
    file: "11-reformulations-transformations.md",
    description:
      "Reconnaître les synonymes et les transformations qui gardent le sens.",
  },
  {
    sourceId: "amir-reformulations-cause-but",
    slug: "amirnet-reformulations-cause-consequence-but",
    number: "12",
    file: "12-reformulations-cause-consequence-but.md",
    description:
      "Conserver la direction de la cause et distinguer but et résultat.",
  },
  {
    sourceId: "amir-reformulations-conditions",
    slug: "amirnet-reformulations-conditions-concessions",
    number: "13",
    file: "13-reformulations-conditions-concessions.md",
    description:
      "Lire les conditions nécessaires et les concessions sans les inverser.",
  },
  {
    sourceId: "amir-reformulations-comparaisons",
    slug: "amirnet-reformulations-comparaisons-certitude",
    number: "14",
    file: "14-reformulations-comparaisons-certitude.md",
    description: "Préserver comparaisons, quantités, certitude et chronologie.",
  },
  {
    sourceId: "amir-textes-structure",
    slug: "amirnet-textes-lecture-structure",
    number: "15",
    file: "15-textes-lecture-structure.md",
    description:
      "Construire la carte d'un texte et retrouver les preuves utiles.",
  },
] as const;

export async function getAmirnetLesson(
  sourceId: string,
  includeUnpublished = false,
) {
  if (!amirnetLessons.some((lesson) => lesson.sourceId === sourceId))
    return null;
  return prisma.lesson.findFirst({
    where: {
      sourceId,
      ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
      course: {
        slug: "anglais",
        ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
        program: {
          slug: "amirnet",
          ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
        },
      },
    },
    select: { id: true, title: true, content: true },
  });
}

export async function getAmirnetLessons(includeUnpublished = false) {
  return prisma.lesson.findMany({
    where: {
      sourceId: { in: amirnetLessons.map((lesson) => lesson.sourceId) },
      ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
      course: {
        slug: "anglais",
        ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
        program: {
          slug: "amirnet",
          ...(!includeUnpublished ? { status: "PUBLISHED" as const } : {}),
        },
      },
    },
    select: { id: true, sourceId: true, title: true, content: true },
  });
}
