import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Questions fréquentes | Psychometriques.fr",
  description:
    "Réponses sur les préparations Psychométriques, AMIRNET et YAEL/YAELNET : organisation des séances, contenus en hébreu, chronomètre, packs et compte.",
};

// À remplacer par ton adresse de support réelle.
const CONTACT_EMAIL = "contact@psychometriques.fr";

type Group = { id: string; title: string; items: { q: string; a: string }[] };

const groups: Group[] = [
  {
    id: "preparations",
    title: "Les préparations",
    items: [
      {
        q: "Quelles préparations sont accessibles sur la plateforme ?",
        a: "Les préparations Psychométriques, AMIRNET et YAEL/YAELNET sont accessibles depuis le même espace. Vous pouvez rejoindre directement le parcours correspondant à votre objectif.",
      },
      {
        q: "Puis-je préparer plusieurs examens depuis le même compte ?",
        a: "Oui. Les packs permettent de réunir Psychométriques, AMIRNET et YAEL/YAELNET dans le même espace personnel, selon la formule choisie.",
      },
      {
        q: "Dois-je préparer tous les examens ?",
        a: "Non. Vous pouvez choisir un seul parcours, le pack langues (AMIRNET et YAELNET) ou la préparation complète.",
      },
    ],
  },
  {
    id: "methode",
    title: "La méthode de travail",
    items: [
      {
        q: "Comment s'organise une séance de travail ?",
        a: "La progression suit trois temps : un cours pose la notion, un exercice permet de l'appliquer et la correction détaille la méthode utile.",
      },
      {
        q: "Puis-je avancer à mon propre rythme ?",
        a: "Oui. Vous pouvez organiser votre travail par notion, poursuivre un parcours complet ou revenir sur une compétence qui demande davantage d'entraînement.",
      },
      {
        q: "Que contient une correction détaillée ?",
        a: "La correction présente le raisonnement utile, les étapes de résolution, le raccourci à retenir et les erreurs qui conduisent aux principaux distracteurs.",
      },
      {
        q: "Comment utiliser les entraînements chronométrés ?",
        a: "Commencez par maîtriser la méthode sans pression, puis activez progressivement le chronomètre pour travailler la vitesse de décision et la gestion du temps.",
      },
    ],
  },
  {
    id: "hebreu",
    title: "Hébreu et langues",
    items: [
      {
        q: "Comment sont présentées les questions en hébreu ?",
        a: "L'interface reste francophone tandis que les contenus en hébreu conservent leur sens de lecture de droite à gauche (RTL) et une mise en page adaptée.",
      },
      {
        q: "Les explications sont-elles en français pour AMIRNET et YAEL ?",
        a: "Oui. Les cours et les corrections sont en français. Seuls les énoncés d'exercice sont en anglais (AMIRNET) ou en hébreu (YAEL/YAELNET).",
      },
    ],
  },
  {
    id: "compte-paiement",
    title: "Compte et paiement",
    items: [
      {
        q: "Comment fonctionne l'abonnement ?",
        a: "Les tarifs affichés sont mensuels en shekels. La page Tarifs détaille les cinq offres pour choisir la préparation adaptée à votre objectif.",
      },
      {
        q: "Comment contacter l'équipe en cas de question ou de problème ?",
        a: `Écrivez-nous par e-mail à ${CONTACT_EMAIL}. Indiquez l'adresse de votre compte et décrivez votre demande pour accélérer la réponse.`,
      },
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: groups.flatMap((g) =>
    g.items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  ),
};

const linkBase =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

export default function FaqPage() {
  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h1 className="max-w-3xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
            Questions fréquentes
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
            L&apos;essentiel sur l&apos;organisation des parcours et le fonctionnement de la
            plateforme.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[14rem_1fr] md:gap-20 md:py-24">
        <nav aria-label="Rubriques" className="md:sticky md:top-24 md:self-start">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 md:flex-col md:gap-3">
            {groups.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-ring"
                >
                  {g.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-16">
          {groups.map((g) => (
            <section key={g.id} id={g.id} className="scroll-mt-24">
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">{g.title}</h2>
              <div className="mt-6 border-t border-border">
                {g.items.map((item) => (
                  <details key={item.q} className="group border-b border-border py-5">
                    <summary className="flex cursor-pointer font-serif text-xl list-none items-center justify-between gap-4 font-semibold focus-visible:outline-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <span
                        aria-hidden
                        className="font-serif text-2xl text-accent transition-transform group-open:rotate-45"
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-3 leading-relaxed text-muted-foreground font-serif">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-serif text-3xl leading-tight md:text-4xl">
            Prêt à commencer votre préparation ?
          </p>
          <div className="flex flex-col items-start gap-4">
            <Link
              href="/sign-up"
              className={`${linkBase} bg-accent text-accent-foreground hover:bg-accent/85 focus-visible:outline-accent`}
            >
              Créer mon compte
            </Link>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-primary-foreground/75 underline underline-offset-4 hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-accent"
            >
              Une question ? {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
