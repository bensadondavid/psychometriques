import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partenariats avec les prépas",
  description:
    "Le futur espace de partenariat pour les prépas et établissements qui souhaitent proposer la plateforme à leurs élèves.",
};

const principles = [
  [
    "Des comptes individuels",
    "Chaque élève conservera son identité et son propre accès. Aucun compte ne sera partagé par une classe.",
  ],
  [
    "Des accès attribués",
    "L’établissement pourra financer des formations précises pour les élèves concernés.",
  ],
  [
    "Un cadre à définir",
    "Le suivi pédagogique et le partage des données ne seront ouverts qu’après définition des permissions et des règles de confidentialité.",
  ],
] as const;

export default function CompaniesPage() {
  return (
    <main>
      <header className="relative isolate flex min-h-[72svh] items-end overflow-hidden bg-primary px-4 py-16 text-primary-foreground sm:px-6 lg:px-8">
        <div className="marketing-hero__orb" aria-hidden="true">
          <span>+</span>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent">
            Prépas et établissements
          </p>
          <h1 className="mt-6 max-w-6xl font-serif text-[clamp(4.8rem,11vw,9rem)] leading-[0.8] tracking-[-0.05em]">
            Accompagner vos élèves, chacun dans son parcours.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-primary-foreground/62">
            L’offre partenaire sera ouverte après la fondation pédagogique et
            commerciale de la plateforme.
          </p>
        </div>
      </header>
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#86643a]">
          Les principes déjà décidés
        </p>
        <div className="mt-8 border-t border-primary/20">
          {principles.map(([title, text], index) => (
            <article
              key={title}
              className="grid gap-5 border-b border-primary/20 py-9 sm:grid-cols-[5rem_0.8fr_1.2fr]"
            >
              <span className="font-mono text-xs text-primary/35">
                0{index + 1}
              </span>
              <h2 className="font-serif text-3xl text-primary sm:text-4xl">
                {title}
              </h2>
              <p className="max-w-xl text-sm leading-7 text-muted-foreground">
                {text}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm font-semibold text-[#86643a]">
          Partenariats en préparation — aucune offre commerciale n’est encore
          ouverte.
        </p>
      </section>
    </main>
  );
}
