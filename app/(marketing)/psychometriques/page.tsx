import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Préparer les Psychométriques | Psychometriques.fr",
  description:
    "Découvrez la préparation aux Psychométriques en français, ses trois volets et la première leçon de réflexion quantitative.",
};

const modules = [
  {
    title: "Réflexion quantitative",
    text: "Algèbre, géométrie, pourcentages, problèmes à énoncé. Vous apprenez à reconnaître la structure d'une question avant de poser le calcul.",
    focus: [
      "Raisonnement algébrique",
      "Géométrie et figures",
      "Problèmes à énoncé",
    ],
  },
  {
    title: "Réflexion verbale",
    text: "Vocabulaire, logique des phrases, compréhension de textes. Les séries prévues travailleront la précision de lecture et l'élimination des distracteurs.",
    focus: [
      "Vocabulaire en contexte",
      "Raisonnement verbal",
      "Compréhension de textes",
    ],
  },
  {
    title: "Rédaction",
    text: "Construire un texte argumenté dans le temps imparti : poser une thèse, l'appuyer, conclure. La correction de la rédaction reste à définir.",
    focus: [
      "Structure de l'argumentation",
      "Gestion du temps",
      "Clarté de l'expression",
    ],
  },
];

const sessionSteps = [
  {
    title: "Le cours pose la notion",
    text: "Une explication courte, avec un exemple résolu, pour comprendre avant de s'entraîner.",
  },
  {
    title: "L'exercice l'applique",
    text: "Des séries préparées par matière et thème permettront de travailler une notion à la fois.",
  },
  {
    title: "La correction détaille la méthode",
    text: "Les corrections prévues détailleront les étapes de résolution et les erreurs fréquentes.",
  },
];

const linkBase =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

export default function PsychometriquesPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.15fr_1fr] md:items-center md:py-28">
          <div>
            <h1 className="font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Les Psychométriques, préparées en français.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
              Réflexion quantitative, réflexion verbale et rédaction : un
              parcours structuré pour les étudiants francophones qui visent
              l&apos;université en Israël.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/sign-up"
                className={`${linkBase} bg-accent text-accent-foreground hover:bg-accent/85 focus-visible:outline-accent`}
              >
                Créer mon compte
              </Link>
              <Link
                href="#programme"
                className={`${linkBase} border border-primary-foreground/30 hover:bg-primary-foreground/10 focus-visible:outline-primary-foreground`}
              >
                Voir le programme
              </Link>
            </div>
          </div>

          {/* Feuille d'épreuve : une question, sa figure */}
          <figure className="border border-primary-foreground/25 bg-[#f8f3ea] p-6 text-card-foreground md:p-8">
            <figcaption className="text-xs text-muted-foreground">
              Illustration de méthode · Réflexion quantitative
            </figcaption>
            <p className="mt-3 font-serif text-xl leading-snug">
              Quelle est la longueur exacte du segment CD ?
            </p>
            <svg
              viewBox="0 0 240 130"
              role="img"
              aria-label="Demi-cercle de diamètre AB, point C sur l'arc et sa projection D sur le diamètre"
              className="mt-6 w-full text-primary"
            >
              <path
                d="M20 110 A100 100 0 0 1 220 110 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="120"
                y1="110"
                x2="70"
                y2="23.4"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="70"
                y1="23.4"
                x2="70"
                y2="110"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <path
                d="M104 110 A16 16 0 0 0 112 96"
                fill="none"
                stroke="#9b7a48"
                strokeWidth="1.5"
              />
              <g
                fill="currentColor"
                fontSize="11"
                fontFamily="var(--font-serif)"
              >
                <text x="8" y="124">
                  A
                </text>
                <text x="222" y="124">
                  B
                </text>
                <text x="60" y="18">
                  C
                </text>
                <text x="66" y="124">
                  D
                </text>
                <text x="118" y="124">
                  O
                </text>
                <text x="92" y="103" fill="#9b7a48">
                  60°
                </text>
              </g>
            </svg>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Reconnaître le triangle rectangle avant de calculer : c&apos;est
              un réflexe à travailler dans les futures corrections.
            </p>
          </figure>
        </div>
      </section>

      {/* Programme */}
      <section id="programme" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Trois volets, travaillés un par un
        </h2>
        <div className="mt-14 border-t border-border">
          {modules.map((m) => (
            <article
              key={m.title}
              className="grid gap-6 border-b border-border py-10 md:grid-cols-[1fr_1.4fr_1fr] md:gap-12"
            >
              <h3 className="font-serif text-3xl leading-tight">{m.title}</h3>
              <p className="max-w-prose leading-relaxed text-muted-foreground">
                {m.text}
              </p>
              <ul className="space-y-2 text-sm">
                {m.focus.map((f) => (
                  <li key={f} className="border-l-2 border-accent pl-3">
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Séance de travail */}
      <section className="bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
            La méthode de travail prévue
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {sessionSteps.map((s, i) => (
              <li key={s.title}>
                <span className="font-serif text-5xl text-primary/30">
                  {i + 1}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-secondary-foreground/75">
                  {s.text}
                </p>
              </li>
            ))}
          </ol>

          <div className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl">Simulations chronométrées</h3>
              <p className="mt-3 max-w-prose leading-relaxed text-secondary-foreground/75">
                Le mode examen proposera des séries chronométrées pour travailler
                la vitesse de décision sans abandonner la méthode.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl">Diagnostic des lacunes</h3>
              <p className="mt-3 max-w-prose leading-relaxed text-secondary-foreground/75">
                Le bilan prévu regroupera les erreurs par notion pour montrer où
                revenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accès */}
      <section id="acces" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Où commencer aujourd&apos;hui ?
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col border border-border bg-card p-8">
            <h3 className="font-serif text-3xl">Première leçon</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              La leçon « Les nombres » est réservée aux abonnés Psychométriques,
              avec ses explications, ateliers et fiche de révision.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>Lecture libre</li>
              <li>Indices et corrigés repliables</li>
              <li>Fiche de révision en PDF</li>
            </ul>
            <Link
              href="/account/lecons/nombres"
              className={`${linkBase} mt-8 self-start bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary`}
            >
              Voir la leçon
            </Link>
          </div>
          <div className="flex flex-col bg-primary p-8 text-primary-foreground">
            <h3 className="font-serif text-3xl">Parcours par examen</h3>
            <p className="mt-3 leading-relaxed text-primary-foreground/75">
              Les trois examens auront chacun leur parcours. Les séries de
              découverte et d&apos;entraînement sont en préparation.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>Psychométriques</li>
              <li>AMIRNET</li>
              <li>YAELNET</li>
            </ul>
            <Link
              href="/examens"
              className={`${linkBase} mt-8 self-start bg-accent text-accent-foreground hover:bg-accent/85 focus-visible:outline-accent`}
            >
              Voir les examens
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-serif text-3xl leading-tight md:text-4xl">
            Découvrez la première leçon, à votre rythme.
          </p>
          <Link
            href="/account/lecons/nombres"
            className={`${linkBase} bg-accent text-accent-foreground hover:bg-accent/85 focus-visible:outline-accent`}
          >
            Lire la leçon
          </Link>
        </div>
      </section>
    </main>
  );
}
