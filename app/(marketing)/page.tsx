import type { Metadata } from "next";
import { ArrowDown, ArrowRight, Languages } from "lucide-react";
import Link from "next/link";

import { MarketingJourney } from "@/components/marketing/marketing-journey";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Préparer ses examens et apprendre l’hébreu",
  description:
    "Préparez les examens psychométriques, AMIR et YAEL, et apprenez l’hébreu dans une plateforme francophone pensée pour votre parcours en Israël.",
};

const exams = [
  {
    number: "01",
    name: "Psychométrique",
    href: "/formations/psychometriques",
    state: "Première formation",
  },
  { number: "02", name: "AMIR", href: "/formations/amir", state: "À venir" },
  { number: "03", name: "YAEL", href: "/formations/yael", state: "À venir" },
] as const;

export default function Home() {
  return (
    <main className="overflow-clip">
      <section className="marketing-hero relative flex min-h-[calc(100svh-5rem)] items-end bg-primary px-4 pb-14 pt-20 text-primary-foreground sm:px-6 sm:pb-16 lg:px-8">
        <div className="marketing-hero__orb" aria-hidden="true">
          <span>א</span>
        </div>
        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1fr_20rem] lg:items-end">
          <div>
            <p className="mb-7 text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-accent">
              Étudier · Réussir · S’intégrer
            </p>
            <h1 className="max-w-5xl font-serif text-[clamp(4.4rem,10.5vw,9.6rem)] leading-[0.78] tracking-[-0.055em]">
              Votre avenir en Israël se prépare.
            </h1>
          </div>
          <div className="pb-2">
            <p className="text-base leading-7 text-primary-foreground/68">
              Une plateforme francophone pour avancer, de la première notion à
              l’examen — et de la langue aux études.
            </p>
            <div className="mt-7 flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="h-12 justify-between bg-accent px-5 text-accent-foreground hover:bg-[#e2c58f]"
              >
                <Link href="#parcours">
                  Vivre le parcours <ArrowDown />
                </Link>
              </Button>
              <Link
                href="/formations"
                className="flex items-center gap-2 py-2 text-sm font-semibold text-primary-foreground/70 hover:text-white"
              >
                Voir directement les formations{" "}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MarketingJourney />

      <section className="bg-background px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <header className="grid gap-8 border-b border-primary/20 pb-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#86643a]">
                Choisir une formation
              </p>
              <h2 className="mt-5 font-serif text-6xl leading-[0.87] tracking-[-0.04em] text-primary sm:text-8xl">
                À chaque objectif, son entrée.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">
              Pas de questionnaire d’orientation. Accédez directement à la
              préparation que vous recherchez.
            </p>
          </header>
          <div>
            {exams.map((exam) => (
              <Link
                href={exam.href}
                key={exam.name}
                className="formation-door group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-primary/20 py-8 sm:grid-cols-[5rem_1fr_auto] sm:py-10"
              >
                <span className="font-mono text-xs text-primary/35">
                  {exam.number}
                </span>
                <h3 className="font-serif text-4xl text-primary sm:text-6xl">
                  {exam.name}
                </h3>
                <span className="flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#86643a]">
                  <span className="hidden sm:inline">{exam.state}</span>
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-2" />
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/oulpan"
            className="oulpan-door group mt-12 grid min-h-80 overflow-hidden bg-[#ded4c5] sm:grid-cols-[1fr_0.75fr]"
          >
            <div className="flex flex-col justify-between p-8 sm:p-12">
              <p className="flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#86643a]">
                <Languages className="size-4" /> Apprendre l’hébreu
              </p>
              <div>
                <h3 className="font-serif text-6xl text-primary sm:text-8xl">
                  Oulpan
                </h3>
                <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                  Le même fil d’apprentissage, dans un espace consacré à la
                  langue et à ses niveaux.
                </p>
              </div>
            </div>
            <div className="relative min-h-64 overflow-hidden border-t border-primary/15 sm:border-l sm:border-t-0">
              <span className="oulpan-letter" aria-hidden="true">
                א
              </span>
              <ArrowRight className="absolute bottom-8 right-8 size-8 text-primary transition-transform group-hover:translate-x-2" />
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-[#2f0d15] px-4 py-24 text-primary-foreground sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent">
              Le point de départ
            </p>
            <h2 className="mt-5 max-w-5xl font-serif text-6xl leading-[0.88] tracking-[-0.04em] sm:text-8xl">
              Le Psychométrique ouvre le parcours.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/62">
              Nous construisons d’abord cette préparation. Les autres formations
              restent visibles, sans simuler un contenu qui n’existe pas encore.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="h-12 bg-accent px-5 text-accent-foreground hover:bg-[#e2c58f]"
          >
            <Link href="/formations/psychometriques">
              Découvrir la formation <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
