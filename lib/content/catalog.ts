export const publicPrograms = [
  {
    slug: "psychometriques",
    name: "Psychométriques",
    subject: "Réflexion verbale, quantitative et rédaction",
    description:
      "Un parcours de préparation organisé par matière et par thème, avec des séries pour apprendre et s'entraîner.",
  },
  {
    slug: "amirnet",
    name: "AMIRNET",
    subject: "Anglais",
    description:
      "Un parcours distinct pour travailler l'anglais à travers des questions, des corrections et un suivi de progression.",
  },
  {
    slug: "yaelnet",
    name: "YAELNET",
    subject: "Hébreu",
    description:
      "Un parcours distinct pour travailler l'hébreu à travers des questions, des corrections et un suivi de progression.",
  },
] as const;

export type ProgramSlug = (typeof publicPrograms)[number]["slug"];

export function getPublicProgram(slug: string) {
  return publicPrograms.find((program) => program.slug === slug);
}
