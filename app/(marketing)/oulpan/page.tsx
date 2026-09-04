import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { oulpanLevelNames, oulpanLevels } from "@/lib/content/catalog";

export const metadata: Metadata = {
  title: "Oulpan — Aleph à Vav",
  description:
    "Les futurs parcours d’apprentissage de l’hébreu, du niveau Aleph au niveau Vav.",
};

export default function OulpanPage() {
  return (
    <main>
      <header className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-[#ded4c5] px-4 py-16 sm:px-6 lg:px-8">
        <span className="oulpan-hero-letter" aria-hidden="true">
          א
        </span>
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#86643a]">
            Apprendre l’hébreu
          </p>
          <h1 className="mt-6 max-w-6xl font-serif text-[clamp(6rem,17vw,14rem)] leading-[0.72] tracking-[-0.055em] text-primary">
            Oulpan
          </h1>
          <p className="mt-9 max-w-2xl text-lg leading-8 text-muted-foreground">
            Un univers dédié à la langue au sein de la même plateforme. Les six
            niveaux sont posés ; leur contenu viendra après le lancement du
            Psychométrique.
          </p>
        </div>
      </header>
      <section className="bg-primary px-4 py-20 text-primary-foreground sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent">
                La progression prévue
              </p>
              <h2 className="mt-5 font-serif text-5xl leading-[0.92] sm:text-6xl">
                D’Aleph à Vav, sans inventer les étapes.
              </h2>
              <p className="mt-6 max-w-md leading-7 text-primary-foreground/58">
                Les niveaux sont visibles pour poser l’architecture. Leurs
                objectifs et leçons ne seront affichés qu’après validation du
                contenu.
              </p>
            </div>
            <div className="border-t border-primary-foreground/18">
              {oulpanLevels.map((level, index) => (
                <Link
                  key={level}
                  href={`/oulpan/${level}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center border-b border-primary-foreground/18 py-8 sm:grid-cols-[5rem_1fr_auto]"
                >
                  <span className="font-mono text-xs text-primary-foreground/30">
                    0{index + 1}
                  </span>
                  <span className="font-serif text-4xl sm:text-6xl">
                    {oulpanLevelNames[level]}
                  </span>
                  <span className="flex items-center gap-3 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-accent">
                    <span className="hidden sm:inline">À venir</span>
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-2" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
