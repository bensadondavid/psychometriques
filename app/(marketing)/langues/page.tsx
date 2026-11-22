import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Préparer AMIRNET et YAEL/YAELNET | Psychometriques.fr",
  description:
    "Découvrez les parcours distincts AMIRNET et YAELNET, présentés en français avec des exemples de questions en anglais et en hébreu.",
};

const amirnet = [
  {
    title: "Sentence completions",
    text: "Choisir le mot qui complète la phrase, en lisant les indices de sens et de construction avant les propositions.",
  },
  {
    title: "Restatements",
    text: "Repérer la reformulation fidèle d'une phrase et comprendre comment un distracteur peut changer le sens.",
  },
  {
    title: "Reading comprehension",
    text: "Lire un texte académique, situer l'information et justifier la réponse.",
  },
];

const yael = [
  {
    title: "Compréhension",
    text: "Les futurs textes hébreux et questions de lecture devront être présentés de droite à gauche.",
  },
  {
    title: "Grammaire",
    text: "Conjugaison, accords et structures de phrase : des thèmes prévus pour le parcours en hébreu.",
  },
  {
    title: "Expression écrite",
    text: "La rédaction en hébreu est prévue ; son mode de correction reste à définir.",
  },
];

const linkBase =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

export default function LanguesPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Deux exemples de questions, un par langue */}
      <section className="overflow-hidden border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Deux langues, une seule méthode.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Découvrez deux parcours distincts : AMIRNET pour l&apos;anglais et
            YAELNET pour l&apos;hébreu. Les séries et leurs corrections sont en préparation.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/examens"
              className={`${linkBase} bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary`}
            >
              Choisir un examen
            </Link>
            <Link
              href="#amirnet"
              className={`${linkBase} border border-border hover:bg-secondary focus-visible:outline-primary`}
            >
              Voir les deux parcours
            </Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <figure className="border-t-2 border-primary bg-card p-6 md:p-8">
              <figcaption className="text-xs text-muted-foreground">
                AMIRNET · Exemple illustratif
              </figcaption>
              <p lang="en" className="mt-4 font-serif text-2xl leading-snug">
                Despite the initial ________, the findings were eventually
                accepted by the scientific community.
              </p>
              <ul lang="en" className="mt-6 grid grid-cols-2 gap-2 text-sm">
                {["skepticism", "approval", "delay", "funding"].map((o, i) => (
                  <li key={o} className="border border-border px-3 py-2">
                    <span className="mr-2 text-muted-foreground">
                      {"ABCD"[i]}
                    </span>
                    {o}
                  </li>
                ))}
              </ul>
            </figure>

            <figure className="border-t-2 border-primary bg-card p-6 md:p-8">
              <figcaption className="text-xs text-muted-foreground">
                YAELNET · Exemple illustratif
              </figcaption>
              <p
                dir="rtl"
                lang="he"
                className="mt-4 font-serif text-3xl leading-snug"
              >
                הילדות ________ בגינה.
              </p>
              <ul
                dir="rtl"
                lang="he"
                className="mt-6 grid grid-cols-2 gap-2 text-lg"
              >
                {["משחקות", "משחק", "משחקים", "משחקת"].map((o) => (
                  <li key={o} className="border border-border px-3 py-2">
                    {o}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Les énoncés hébreux se lisent de droite à gauche ; les consignes
                restent en français.
              </p>
            </figure>
          </div>
        </div>
      </section>

      {/* AMIRNET */}
      <section id="amirnet" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              AMIRNET
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Anglais académique : trois types de questions à travailler
              séparément puis ensemble dans le parcours prévu.
            </p>
          </div>
          <div className="border-t border-border">
            {amirnet.map((m) => (
              <article key={m.title} className="border-b border-border py-8">
                <h3 className="font-serif text-2xl">{m.title}</h3>
                <p className="mt-2 max-w-prose leading-relaxed text-muted-foreground">
                  {m.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* YAEL */}
      <section id="yael" className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
                YAEL &amp; YAELNET
              </h2>
              <p className="mt-4 leading-relaxed text-primary-foreground/75">
                Hébreu : une progression pas à pas est prévue, avec des contenus
                adaptés à la lecture de droite à gauche.
              </p>
            </div>
            <div className="border-t border-primary-foreground/20">
              {yael.map((m) => (
                <article
                  key={m.title}
                  className="border-b border-primary-foreground/20 py-8"
                >
                  <h3 className="font-serif text-2xl">{m.title}</h3>
                  <p className="mt-2 max-w-prose leading-relaxed text-primary-foreground/75">
                    {m.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Parcours distincts */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Deux parcours distincts
            </h2>
            <p className="mt-4 max-w-prose leading-relaxed text-secondary-foreground/75">
              AMIRNET et YAELNET disposent chacun d&apos;une présentation. Leurs
              futures séries de découverte seront propres à chaque examen.
            </p>
          </div>
          <div className="bg-card p-8">
            <ul className="space-y-3">
              <li className="border-l-2 border-accent pl-3">
                Préparation AMIRNET
              </li>
              <li className="border-l-2 border-accent pl-3">
                Préparation YAEL &amp; YAELNET
              </li>
              <li className="border-l-2 border-accent pl-3">Séries en préparation</li>
            </ul>
            <Link
              href="/examens"
              className={`${linkBase} mt-8 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary`}
            >
              Voir les examens
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
