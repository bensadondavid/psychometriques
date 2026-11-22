import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Questions fréquentes | Psychometriques.fr",
  description:
    "Réponses sur les parcours Psychométriques, AMIRNET et YAELNET, les leçons, le compte et les fonctionnalités en préparation.",
};

type Group = { id: string; title: string; items: { q: string; a: string }[] };

const groups: Group[] = [
  {
    id: "preparations",
    title: "Les préparations",
    items: [
      {
        q: "Quels examens sont présentés sur la plateforme ?",
        a: "Le site présente trois parcours distincts : Psychométriques, AMIRNET et YAELNET. Leurs séries de découverte et d'entraînement sont encore en préparation.",
      },
      {
        q: "Puis-je préparer plusieurs examens depuis le même compte ?",
        a: "Oui. Un même compte donne accès à l'espace personnel. Les règles d'accès aux futures séries et aux éventuelles offres restent à définir.",
      },
      {
        q: "Une leçon est-elle déjà disponible ?",
        a: "La première leçon de réflexion quantitative, « Les nombres », est réservée aux comptes disposant d'un accès Psychométriques actif. Ses ateliers proposent des indices et des corrigés ; les réponses ne sont pas encore enregistrées.",
      },
    ],
  },
  {
    id: "methode",
    title: "La méthode de travail",
    items: [
      {
        q: "Comment s'organise une séance de travail ?",
        a: "Le parcours prévu permet d'essayer une courte série sans compte, de voir le résultat et les explications, puis de créer un compte pour sauvegarder et continuer. Cette série découverte n'est pas encore disponible.",
      },
      {
        q: "Puis-je avancer à mon propre rythme ?",
        a: "La leçon disponible peut être lue librement. La reprise des séries interrompues et le suivi des erreurs font partie du parcours à construire.",
      },
      {
        q: "Que contient une correction détaillée ?",
        a: "Dans la leçon « Les nombres », les ateliers proposent des indices et des raisonnements repliables. Les corrections des futures séries seront conçues avec les questions validées.",
      },
      {
        q: "Comment utiliser les entraînements chronométrés ?",
        a: "Le mode chronométré est prévu pour les futures séries d'entraînement ; il n'est pas encore actif.",
      },
    ],
  },
  {
    id: "hebreu",
    title: "Hébreu et langues",
    items: [
      {
        q: "Comment sont présentées les questions en hébreu ?",
        a: "L'interface est en français. Les futurs blocs de contenu en hébreu seront affichés de droite à gauche, sans inverser toute l'interface.",
      },
      {
        q: "Les explications sont-elles en français pour AMIRNET et YAEL ?",
        a: "Les explications sont prévues en français ; les contenus de question en anglais ou en hébreu devront être vérifiés avant publication.",
      },
    ],
  },
  {
    id: "compte-paiement",
    title: "Compte et tarifs",
    items: [
      {
        q: "Les prix et le paiement sont-ils déjà fixés ?",
        a: "L'accès aux leçons Psychométriques nécessitera un abonnement Psychométriques actif. Le fournisseur de paiement, les prix et le regroupement éventuel des offres restent à décider. Aucun paiement n'est disponible actuellement.",
      },
      {
        q: "Faut-il un compte pour consulter une leçon ?",
        a: "La leçon se trouve dans l'espace compte, mais une simple connexion ne suffit pas : un accès Psychométriques actif est requis.",
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
            Vous souhaitez découvrir les parcours ?
          </p>
          <div className="flex flex-col items-start gap-4">
            <Link
              href="/examens"
              className={`${linkBase} bg-accent text-accent-foreground hover:bg-accent/85 focus-visible:outline-accent`}
            >
              Voir les examens
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
