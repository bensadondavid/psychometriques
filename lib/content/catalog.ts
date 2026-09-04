export const publicPrograms = [
  {
    slug: "psychometriques",
    name: "Psychométriques",
    description: "Le premier parcours de préparation de la plateforme.",
    status: "Ouverture prochaine",
    available: true,
  },
  {
    slug: "amir",
    name: "AMIR",
    description:
      "Un futur parcours consacré à la préparation de l’examen d’anglais.",
    status: "Bientôt disponible",
    available: false,
  },
  {
    slug: "yael",
    name: "YAEL",
    description:
      "Un futur parcours consacré à la préparation de l’examen d’hébreu.",
    status: "Bientôt disponible",
    available: false,
  },
  {
    slug: "oulpan",
    name: "Oulpan",
    description: "Des parcours progressifs du niveau Aleph au niveau Vav.",
    status: "Bientôt disponible",
    available: false,
  },
] as const;

export const oulpanLevels = [
  "aleph",
  "bet",
  "gimel",
  "dalet",
  "he",
  "vav",
] as const;

export const oulpanLevelNames: Record<(typeof oulpanLevels)[number], string> = {
  aleph: "Aleph",
  bet: "Bet",
  gimel: "Gimel",
  dalet: "Dalet",
  he: "He",
  vav: "Vav",
};
