import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Préparer les Psychométriques | Psychometriques.fr",
  description:
    "Préparez l'épreuve psychométrique en français : réflexion quantitative, réflexion verbale et rédaction, avec cours, exercices chronométrés et corrections détaillées.",
};

const modules = [
  {
    title: "Réflexion quantitative",
    text: "Algèbre, géométrie, pourcentages, problèmes à énoncé. Vous apprenez à reconnaître la structure d'une question avant de poser le calcul.",
    focus: ["Raisonnement algébrique", "Géométrie et figures", "Problèmes à énoncé"],
  },
  {
    title: "Réflexion verbale",
    text: "Vocabulaire, logique des phrases, compréhension de textes. Chaque série travaille la précision de lecture et l'élimination des distracteurs.",
    focus: ["Vocabulaire en contexte", "Raisonnement verbal", "Compréhension de textes"],
  },
  {
    title: "Rédaction",
    text: "Construire un texte argumenté dans le temps imparti : poser une thèse, l'appuyer, conclure. Les corrections montrent où le raisonnement se perd.",
    focus: ["Structure de l'argumentation", "Gestion du temps", "Clarté de l'expression"],
  },
];

const sessionSteps = [
  {
    title: "Le cours pose la notion",
    text: "Une explication courte, avec un exemple résolu, pour comprendre avant de s'entraîner.",
  },
  {
    title: "L'exercice l'applique",
    text: "Des questions classées par compétence, pour travailler une seule notion à la fois.",
  },
  {
    title: "La correction détaille la méthode",
    text: "Étapes de résolution, raccourci à retenir, et erreurs qui mènent aux mauvaises réponses.",
  },
];

const faq = [
  {
    q: "Que contient la préparation aux Psychométriques ?",
    a: "Les trois volets de l'épreuve : réflexion quantitative, réflexion verbale et rédaction argumentative, avec cours, exercices et corrections pour chacun.",
  },
  {
    q: "Puis-je m'entraîner sans chronomètre ?",
    a: "Oui. Commencez par maîtriser la méthode sans pression, puis activez le chronomètre pour travailler la vitesse de décision.",
  },
  {
    q: "Comment savoir ce que je dois revoir ?",
    a: "Chaque erreur est rattachée à une notion. Le diagnostic vous indique les compétences à reprendre en priorité.",
  },
  {
    q: "Puis-je ajouter AMIRNET ou YAEL plus tard ?",
    a: "Oui. Les préparations linguistiques se rejoignent depuis le même compte, sans repartir de zéro.",
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
              Réflexion quantitative, réflexion verbale et rédaction : un parcours
              structuré pour les étudiants francophones qui visent l&apos;université en
              Israël.
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
          <figure className="rotate-1 bg-card p-6 text-card-foreground shadow-2xl md:p-8">
            <figcaption className="text-xs text-muted-foreground">
              Réflexion quantitative, question 17
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
              <line x1="120" y1="110" x2="70" y2="23.4" stroke="currentColor" strokeWidth="1.5" />
              <line
                x1="70"
                y1="23.4"
                x2="70"
                y2="110"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />
              <path d="M104 110 A16 16 0 0 0 112 96" fill="none" stroke="#9b7a48" strokeWidth="1.5" />
              <g fill="currentColor" fontSize="11" fontFamily="var(--font-serif)">
                <text x="8" y="124">A</text>
                <text x="222" y="124">B</text>
                <text x="60" y="18">C</text>
                <text x="66" y="124">D</text>
                <text x="118" y="124">O</text>
                <text x="92" y="103" fill="#9b7a48">60°</text>
              </g>
            </svg>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Reconnaître le triangle rectangle avant de calculer : c&apos;est le réflexe
              que chaque correction vous fait travailler.
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
              <p className="max-w-prose leading-relaxed text-muted-foreground">{m.text}</p>
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
            Une séance de travail, en trois temps
          </h2>
          <ol className="mt-14 grid gap-10 md:grid-cols-3">
            {sessionSteps.map((s, i) => (
              <li key={s.title}>
                <span className="font-serif text-5xl text-primary/30">{i + 1}</span>
                <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-secondary-foreground/75">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-2xl">Simulations chronométrées</h3>
              <p className="mt-3 max-w-prose leading-relaxed text-secondary-foreground/75">
                Des séries conçues pour décider sous contrainte de temps sans abandonner
                votre méthode.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-2xl">Diagnostic des lacunes</h3>
              <p className="mt-3 max-w-prose leading-relaxed text-secondary-foreground/75">
                Vos erreurs sont regroupées par notion pour vous montrer où revenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accès */}
      <section id="acces" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Deux façons de commencer
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="flex flex-col border border-border bg-card p-8">
            <h3 className="font-serif text-3xl">Pack Psychométriques</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              La préparation complète à l&apos;épreuve, sans rien d&apos;autre.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>Réflexion quantitative</li>
              <li>Réflexion verbale</li>
              <li>Rédaction argumentative</li>
            </ul>
            <Link
              href="/sign-up"
              className={`${linkBase} mt-8 self-start bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary`}
            >
              Choisir ce pack
            </Link>
          </div>
          <div className="flex flex-col bg-primary p-8 text-primary-foreground">
            <h3 className="font-serif text-3xl">Préparation complète</h3>
            <p className="mt-3 leading-relaxed text-primary-foreground/75">
              Psychométriques, AMIRNET et YAEL/YAELNET depuis le même espace.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>Pack Psychométriques</li>
              <li>Préparation AMIRNET</li>
              <li>Préparation YAEL &amp; YAELNET</li>
            </ul>
            <Link
              href="/sign-up"
              className={`${linkBase} mt-8 self-start bg-accent text-accent-foreground hover:bg-accent/85 focus-visible:outline-accent`}
            >
              Choisir ce pack
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 pb-20 md:pb-28">
        <h2 className="font-serif text-4xl leading-tight tracking-tight">Questions fréquentes</h2>
        <div className="mt-10 border-t border-border">
          {faq.map((item) => (
            <details key={item.q} className="group border-b border-border py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold focus-visible:outline-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden
                  className="font-serif text-2xl text-accent transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-prose leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-serif text-3xl leading-tight md:text-4xl">
            Commencez par une première série, à votre rythme.
          </p>
          <Link
            href="/sign-up"
            className={`${linkBase} bg-accent text-accent-foreground hover:bg-accent/85 focus-visible:outline-accent`}
          >
            Créer mon compte
          </Link>
        </div>
      </section>
    </main>
  );
}