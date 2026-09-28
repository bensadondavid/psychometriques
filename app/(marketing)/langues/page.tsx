import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Préparer AMIRNET et YAEL/YAELNET | Psychometriques.fr",
  description:
    "Préparez l'anglais académique (AMIRNET) et la certification d'hébreu (YAEL/YAELNET) depuis une interface francophone, avec contenus hébreux en lecture RTL.",
};

const amirnet = [
  {
    title: "Sentence completions",
    text: "Choisir le mot qui complète la phrase. Vous apprenez à lire les indices de sens et de construction avant de regarder les propositions.",
  },
  {
    title: "Restatements",
    text: "Repérer la reformulation fidèle d'une phrase. Les corrections expliquent pourquoi chaque distracteur change subtilement le sens.",
  },
  {
    title: "Reading comprehension",
    text: "Lire un texte académique, situer l'information, justifier la réponse. Chaque série travaille la rapidité sans sacrifier la précision.",
  },
];

const yael = [
  {
    title: "Compréhension",
    text: "Textes hébreux et questions de lecture, présentés dans leur sens naturel, de droite à gauche.",
  },
  {
    title: "Grammaire",
    text: "Conjugaison, accords, structures de phrase : chaque règle est expliquée en français, puis appliquée en hébreu.",
  },
  {
    title: "Expression écrite",
    text: "Rédiger un texte clair en hébreu, avec des corrections qui montrent comment reformuler.",
  },
];

const steps = [
  { title: "Le cours pose la notion", text: "Une explication en français, avec un exemple résolu." },
  { title: "L'exercice l'applique", text: "Des questions classées par compétence, en anglais ou en hébreu." },
  { title: "La correction détaille la méthode", text: "Raisonnement, raccourci à retenir et pièges des distracteurs." },
];

const faq = [
  {
    q: "L'interface est-elle en français ?",
    a: "Oui. Les explications, les cours et les corrections sont en français. Seuls les énoncés d'exercice sont en anglais (AMIRNET) ou en hébreu (YAEL/YAELNET).",
  },
  {
    q: "Comment sont affichés les textes en hébreu ?",
    a: "Les contenus hébreux conservent leur sens de lecture de droite à gauche et une mise en page adaptée, sans casser le reste de l'interface.",
  },
  {
    q: "Dois-je préparer les deux examens ?",
    a: "Non. Vous pouvez choisir un seul parcours ou réunir les deux dans le pack langues.",
  },
  {
    q: "Puis-je m'entraîner avec un chronomètre ?",
    a: "Oui. Travaillez d'abord la méthode sans pression, puis activez le chronomètre pour la vitesse de décision.",
  },
];

const linkBase =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

export default function LanguesPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero : deux feuilles, deux langues */}
      <section className="overflow-hidden border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Deux langues, une seule méthode.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Préparez AMIRNET pour l&apos;anglais académique et YAEL/YAELNET pour
            l&apos;hébreu, avec des explications en français du début à la fin.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/sign-up"
              className={`${linkBase} bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary`}
            >
              Créer mon compte
            </Link>
            <Link
              href="#amirnet"
              className={`${linkBase} border border-border hover:bg-secondary focus-visible:outline-primary`}
            >
              Voir les deux parcours
            </Link>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <figure className="-rotate-1 bg-card p-6 shadow-xl md:p-8">
              <figcaption className="text-xs text-muted-foreground">
                AMIRNET · Sentence completion (exemple)
              </figcaption>
              <p lang="en" className="mt-4 font-serif text-2xl leading-snug">
                Despite the initial ________, the findings were eventually accepted by the
                scientific community.
              </p>
              <ul lang="en" className="mt-6 grid grid-cols-2 gap-2 text-sm">
                {["skepticism", "approval", "delay", "funding"].map((o, i) => (
                  <li key={o} className="border border-border px-3 py-2">
                    <span className="mr-2 text-muted-foreground">{"ABCD"[i]}</span>
                    {o}
                  </li>
                ))}
              </ul>
            </figure>

            <figure className="rotate-1 bg-card p-6 shadow-xl md:mt-10 md:p-8">
              <figcaption className="text-xs text-muted-foreground">
                YAEL · Grammaire (exemple)
              </figcaption>
              <p dir="rtl" lang="he" className="mt-4 font-serif text-3xl leading-snug">
                הילדות ________ בגינה.
              </p>
              <ul dir="rtl" lang="he" className="mt-6 grid grid-cols-2 gap-2 text-lg">
                {["משחקות", "משחק", "משחקים", "משחקת"].map((o) => (
                  <li key={o} className="border border-border px-3 py-2">
                    {o}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Les énoncés hébreux se lisent de droite à gauche ; les consignes restent
                en français.
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
              Anglais académique : trois types de questions, travaillés séparément puis
              ensemble.
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
                Certification d&apos;hébreu : une progression pas à pas, avec des contenus
                adaptés à la lecture RTL.
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

      {/* Séance */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="max-w-2xl font-serif text-4xl leading-tight tracking-tight md:text-5xl">
          Une séance de travail, en trois temps
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="font-serif text-5xl text-primary/30">{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Pack langues */}
      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <h2 className="font-serif text-4xl leading-tight tracking-tight md:text-5xl">
              Pack langues
            </h2>
            <p className="mt-4 max-w-prose leading-relaxed text-secondary-foreground/75">
              Réunissez AMIRNET et YAEL/YAELNET dans un seul parcours de travail, depuis
              le même espace personnel.
            </p>
          </div>
          <div className="bg-card p-8">
            <ul className="space-y-3">
              <li className="border-l-2 border-accent pl-3">Préparation AMIRNET</li>
              <li className="border-l-2 border-accent pl-3">Préparation YAEL &amp; YAELNET</li>
              <li className="border-l-2 border-accent pl-3">Exercices et corrections dédiés</li>
            </ul>
            <Link
              href="/sign-up"
              className={`${linkBase} mt-8 bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-primary`}
            >
              Choisir ce pack
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
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
    </main>
  );
}