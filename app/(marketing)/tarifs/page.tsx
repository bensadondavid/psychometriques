import type { Metadata } from "next";
import { Check } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Packs de préparation | Psychometriques.fr",
  description:
    "Comparez les packs de préparation AMIRNET, YAELNET, langues et Psychométriques, ou réunissez tous les parcours dans le pack complet.",
};

type PackId = "amirnet" | "psychometriques" | "yaelnet" | "langues" | "complet";

type Pack = {
  id: PackId;
  eyebrow: string;
  title: string;
  monthlyPrice: number;
  description: string;
  features: readonly string[];
  featured?: boolean;
};

const packs: readonly Pack[] = [
  {
    id: "amirnet",
    eyebrow: "Anglais académique",
    title: "AMIRNET",
    monthlyPrice: 79,
    description:
      "Une préparation dédiée à l’épreuve d’anglais, guidée en français du cours à la correction.",
    features: [
      "Sentence completions",
      "Restatements",
      "Reading comprehension",
      "Exercices et corrections détaillées",
    ],
  },
  {
    id: "psychometriques",
    eyebrow: "Préparation essentielle",
    title: "Psychométriques",
    monthlyPrice: 119,
    description:
      "Le parcours complet pour travailler chaque volet de l’épreuve psychométrique en français.",
    features: [
      "Réflexion quantitative",
      "Réflexion verbale",
      "Rédaction argumentative",
      "Exercices et corrections détaillées",
    ],
    featured: true,
  },
  {
    id: "yaelnet",
    eyebrow: "Hébreu académique",
    title: "YAELNET",
    monthlyPrice: 79,
    description:
      "Une préparation ciblée à l’épreuve d’hébreu, avec une interface et des explications en français.",
    features: [
      "Compréhension de textes",
      "Grammaire et vocabulaire",
      "Expression écrite",
      "Contenus hébreux adaptés au RTL",
    ],
  },
  {
    id: "langues",
    eyebrow: "Deux préparations réunies",
    title: "Pack langues",
    monthlyPrice: 119,
    description:
      "AMIRNET et YAELNET réunis dans un même espace pour préparer les deux épreuves linguistiques.",
    features: [
      "Parcours complet AMIRNET",
      "Parcours complet YAELNET",
      "Explications en français",
      "Un seul espace de travail",
    ],
  },
  {
    id: "complet",
    eyebrow: "Tous les parcours",
    title: "Pack complet",
    monthlyPrice: 179,
    description:
      "La formule qui rassemble les Psychométriques, AMIRNET et YAELNET dans une préparation unique.",
    features: [
      "Parcours Psychométriques",
      "Parcours AMIRNET",
      "Parcours YAELNET",
      "Toutes les corrections détaillées",
    ],
  },
] as const;

export default function TarifsPage() {
  return (
    <main className="bg-[#fef9f0] text-[#1d1c16]">
      <section className="overflow-hidden border-b border-[#e7e2d9]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-12 lg:py-28">
          <div>
            <p className="flex items-center gap-2 text-[0.625rem] font-bold tracking-[0.28em] text-[#45121d] uppercase">
              <span className="h-px w-6 bg-current" aria-hidden="true" />
              Nos formules
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-[clamp(3.2rem,7vw,6.5rem)] leading-[0.9] font-normal tracking-[-0.045em] text-[#45121d]">
              Un pack pour chaque objectif.
            </h1>
          </div>
          <p className="text-lg leading-[1.7] text-[#524344]">
            Choisissez une préparation ciblée, réunissez les deux langues ou
            accédez à l’ensemble des parcours depuis le même espace personnel.
          </p>
        </div>
      </section>

      <section
        id="packs"
        className="scroll-mt-24 py-20 lg:py-28"
        aria-labelledby="packs-title"
      >
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-12">
          <header className="max-w-2xl">
            <p className="text-[0.625rem] font-bold tracking-[0.28em] text-[#4e5e7f] uppercase">
              Les préparations
            </p>
            <h2
              id="packs-title"
              className="mt-4 font-serif text-[clamp(2.5rem,4vw,3.75rem)] leading-[1.02] font-normal tracking-[-0.03em] text-[#45121d]"
            >
              Cinq formules, sans parcours superflu
            </h2>
          </header>

          <div className="mt-14 divide-y divide-[#ded6ca] border-y border-[#ded6ca]">
            {packs.map((pack) => (
              <article
                key={pack.id}
                className={`${
                  pack.featured
                    ? "bg-[#45121d] px-6 text-[#fef9f0] sm:px-9"
                    : "text-[#1d1c16]"
                } grid gap-8 py-9 md:grid-cols-[minmax(0,1fr)_13rem] md:items-end lg:grid-cols-[minmax(0,1fr)_16rem]`}
              >
                <div>
                  <p
                    className={`text-[0.625rem] font-bold tracking-[0.22em] uppercase ${
                      pack.featured ? "text-[#ffdea5]" : "text-[#4e5e7f]"
                    }`}
                  >
                    {pack.eyebrow}
                  </p>
                  <h3
                    className={`mt-4 font-serif text-[2.25rem] leading-none font-normal tracking-[-0.025em] ${
                      pack.featured ? "text-[#fef9f0]" : "text-[#45121d]"
                    }`}
                  >
                    {pack.title}
                  </h3>
                  <div className="mt-6 flex items-end gap-2">
                    <p
                      className={`font-serif text-5xl leading-none tracking-[-0.035em] ${
                        pack.featured ? "text-[#ffdea5]" : "text-[#45121d]"
                      }`}
                    >
                      {pack.monthlyPrice} ₪
                    </p>
                    <p
                      className={`pb-1 text-sm ${
                        pack.featured ? "text-[#ded9d1]" : "text-[#6f6261]"
                      }`}
                    >
                      / mois
                    </p>
                  </div>
                  <p
                    className={`mt-2 text-xs ${
                      pack.featured ? "text-[#ded9d1]" : "text-[#6f6261]"
                    }`}
                  >
                    Sans engagement, résiliable à tout moment
                  </p>
                  <p
                    className={`mt-5 leading-[1.65] ${
                      pack.featured ? "text-[#ded9d1]" : "text-[#524344]"
                    }`}
                  >
                    {pack.description}
                  </p>
                  <ul
                    className={`mt-8 space-y-3 border-t pt-6 text-sm ${
                      pack.featured
                        ? "border-white/20 text-[#fef9f0]"
                        : "border-[#ded6ca] text-[#342c2a]"
                    }`}
                  >
                    {pack.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={`mt-0.5 size-4 shrink-0 ${
                            pack.featured ? "text-[#ffdea5]" : "text-[#7a2b3d]"
                          }`}
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:pb-1">
                  <Link
                    href={`/sign-up?offer=${pack.id}`}
                    className={`inline-flex h-12 w-full items-center justify-center rounded-sm px-6 pt-0.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 ${
                      pack.featured
                        ? "bg-[#ffdea5] text-[#45121d] hover:bg-[#fef9f0] focus-visible:outline-white"
                        : "bg-[#45121d] text-[#fef9f0] hover:bg-[#280009] focus-visible:outline-[#45121d]"
                    }`}
                  >
                    Choisir ce pack
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#45121d] text-[#fef9f0]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-8 px-6 py-16 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-20">
          <div>
            <p className="text-[0.625rem] font-bold tracking-[0.28em] text-[#ffdea5] uppercase">
              Votre espace de préparation
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-[clamp(2.5rem,4vw,4.5rem)] leading-[0.98] font-normal tracking-[-0.035em]">
              Commencez avec le parcours qui vous correspond.
            </h2>
          </div>
          <Link
            href="/sign-up"
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-sm bg-[#ffdea5] px-7 pt-0.5 text-sm font-semibold text-[#45121d] transition-colors hover:bg-[#fef9f0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Créer mon compte
          </Link>
        </div>
      </section>
    </main>
  );
}
