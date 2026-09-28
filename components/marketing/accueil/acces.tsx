import { Check } from "lucide-react";
import Link from "next/link";

const acces = [
  {
    repere: "Pack langues",
    titre: "AMIRNET + YAELNET",
    description:
      "Réunissez les deux préparations linguistiques dans un seul parcours de travail.",
    points: [
      "Préparation AMIRNET",
      "Préparation YAEL & YAELNET",
      "Exercices et corrections dédiés",
    ],
    accent: false,
  },
  {
    repere: "Pack essentiel",
    titre: "Psychométriques",
    description:
      "La préparation complète aux Psychométriques, mise en avant au cœur de l’offre.",
    points: [
      "Réflexion quantitative",
      "Réflexion verbale",
      "Rédaction argumentative",
    ],
    accent: true,
  },
  {
    repere: "Pack intégral",
    titre: "Préparation complète",
    description:
      "Regroupez les trois préparations dans une formule unique pour avancer depuis le même espace.",
    points: [
      "Pack Psychométriques",
      "Préparation AMIRNET",
      "Préparation YAEL & YAELNET",
    ],
    accent: false,
  },
] as const;

export function AccueilAcces() {
  return (
    <section
      id="acces"
      className="bg-[#fef9f0] py-20 text-[#1d1c16] lg:py-24"
      aria-labelledby="acces-title"
    >
      <div className="mx-auto w-full max-w-7xl space-y-14 px-6 lg:px-12">
        <header className="max-w-2xl space-y-3">
          <p className="flex items-center gap-2 text-[0.625rem] font-bold tracking-[0.28em] text-[#45121d] uppercase">
            <span className="h-px w-6 bg-current" aria-hidden="true" />
            Formules & tarifs
          </p>
          <h2
            id="acces-title"
            className="font-serif text-[clamp(2.5rem,4vw,3.75rem)] leading-[1.05] font-normal tracking-[-0.03em] text-[#45121d]"
          >
            Des packs adaptés à chaque objectif
          </h2>
          <p className="text-base leading-[1.65] text-[#524344]">
            Choisissez une préparation ciblée ou regroupez plusieurs examens
            dans un même pack.
          </p>
        </header>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
          {acces.map((item) => (
            <article
              key={item.titre}
              className={
                item.accent
                  ? "relative flex min-h-[28rem] flex-col justify-between rounded-sm bg-[#45121d] p-8 text-white shadow-[0_4px_20px_rgba(42,33,29,0.12)]"
                  : "flex min-h-[28rem] flex-col justify-between rounded-sm bg-[#f8f3ea] p-8 shadow-[0_4px_20px_rgba(42,33,29,0.08)]"
              }
            >
              {item.accent ? (
                <span className="absolute -top-3 right-6 rounded-sm bg-[#ffdea5] px-3 py-1 text-[0.6875rem] font-semibold tracking-[0.16em] text-[#45121d] uppercase">
                  Pack Psychométriques
                </span>
              ) : null}
              <div>
                <p
                  className={`font-mono text-xs uppercase ${item.accent ? "text-[#ded9d1]" : "text-[#4e5e7f]"}`}
                >
                  {item.repere}
                </p>
                <h3
                  className={`mt-3 font-serif text-[2rem] leading-[1.25] font-normal tracking-[-0.015em] ${item.accent ? "text-[#fef9f0]" : "text-[#45121d]"}`}
                >
                  {item.titre}
                </h3>
                <p
                  className={`mt-3 text-sm leading-[1.55] ${item.accent ? "text-[#ded9d1]" : "text-[#524344]"}`}
                >
                  {item.description}
                </p>
                <ul
                  className={`mt-8 space-y-3 border-t pt-5 text-sm ${item.accent ? "border-white/20 text-[#fef9f0]" : "border-[#e7e2d9]"}`}
                >
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${item.accent ? "text-[#ffdea5]" : "text-[#4e5e7f]"}`}
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/tarifs"
                className={
                  item.accent
                    ? "mt-8 inline-flex h-12 items-center justify-center rounded-sm bg-[#ffdea5] px-6 text-sm font-semibold text-[#45121d] transition-colors hover:bg-[#fef9f0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    : "mt-8 inline-flex h-11 items-center justify-center rounded-sm bg-[#45121d] px-6 text-sm text-[#fef9f0] transition-colors hover:bg-[#280009] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]"
                }
              >
                Voir les cinq packs
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
