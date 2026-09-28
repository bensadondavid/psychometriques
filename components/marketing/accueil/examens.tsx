import { ArrowRight } from "lucide-react";
import Link from "next/link";

const formations = [
  {
    code: "Filière I",
    titre: "Psychométriques",
    sousTitre: "Épreuve nationale d’admission",
    description:
      "Une préparation structurée à la réflexion quantitative, à la réflexion verbale et à la rédaction argumentative.",
    details: ["Réflexion quantitative", "Réflexion verbale", "Rédaction"],
    action: "Consulter le parcours",
  },
  {
    code: "Filière II",
    titre: "Épreuve AMIRNET",
    sousTitre: "Anglais académique",
    description:
      "Un entraînement méthodique aux phrases à compléter, aux reformulations et à la compréhension de textes en anglais.",
    details: ["Sentence completions", "Restatements", "Reading comprehension"],
    action: "Découvrir AMIRNET",
  },
  {
    code: "Filière III",
    titre: "YAEL & YAELNET",
    sousTitre: "Certification de langue hébraïque",
    description:
      "Un travail progressif sur la compréhension, la grammaire et l’expression écrite, avec des contenus hébreux adaptés au sens de lecture RTL.",
    details: ["Compréhension", "Grammaire", "Expression écrite"],
    action: "Découvrir YAEL",
  },
] as const;

export function AccueilExamens() {
  return (
    <section
      id="formations"
      className="bg-[#f8f3ea] py-20 text-[#1d1c16] lg:py-24"
      aria-labelledby="formations-title"
    >
      <div className="mx-auto w-full max-w-7xl space-y-12 px-6 lg:px-12">
        <header className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3">
            <p className="flex items-center gap-2 text-[0.625rem] font-bold tracking-[0.28em] text-[#45121d] uppercase">
              <span className="h-px w-6 bg-current" aria-hidden="true" />
              Cursus réglementés
            </p>
            <h2
              id="formations-title"
              className="font-serif text-[clamp(2.5rem,4vw,3.75rem)] leading-[1.05] font-normal tracking-[-0.03em] text-[#45121d]"
            >
              Les Trois Piliers Universitaires
            </h2>
            <p className="max-w-xl text-base leading-[1.65] text-[#524344]">
              Trois préparations conçues pour travailler méthodiquement les
              épreuves d’admission et de langue des universités israéliennes.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {formations.map((formation) => (
            <article
              key={formation.titre}
              className="group relative flex min-h-[31rem] flex-col justify-between rounded-sm bg-white p-8 shadow-[0_4px_20px_rgba(42,33,29,0.08)] transition-shadow hover:shadow-[0_8px_28px_rgba(42,33,29,0.12)]"
            >
              <div
                className="absolute top-0 left-0 h-1.5 w-full rounded-t-sm bg-[#45121d]"
                aria-hidden="true"
              />
              <div className="space-y-6 pt-2">
                <p className="font-mono text-xs tracking-[0.05em] text-[#4e5e7f] uppercase">
                  {formation.code}
                </p>
                <div>
                  <h3 className="font-serif text-[2rem] leading-[1.25] font-normal tracking-[-0.015em] text-[#45121d]">
                    {formation.titre}
                  </h3>
                  <p className="mt-1 text-[0.6875rem] font-semibold tracking-[0.22em] text-[#4e5e7f] uppercase">
                    {formation.sousTitre}
                  </p>
                </div>
                <p className="text-sm leading-[1.65] text-[#524344]">
                  {formation.description}
                </p>
                <dl className="space-y-3 rounded-sm bg-[#f2ede4] p-4">
                  {formation.details.map((detail, index) => (
                    <div
                      key={detail}
                      className="flex items-center justify-between gap-4 font-mono text-xs text-[#1d1c16]"
                    >
                      <dt>Module {String(index + 1).padStart(2, "0")}</dt>
                      <dd className="text-right font-sans font-semibold">
                        {detail}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <Link
                href="/sign-in"
                className="mt-8 inline-flex h-11 w-full items-center justify-between rounded-sm bg-[#fef9f0] px-4 text-sm text-[#45121d] transition-colors hover:bg-[#45121d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]"
              >
                {formation.action}
                <ArrowRight className="size-[18px]" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
