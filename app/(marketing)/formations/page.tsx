import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Languages } from "lucide-react";

import { publicPrograms } from "@/lib/content/catalog";

export const metadata: Metadata = {
  title: "Formations",
  description:
    "Préparations aux examens psychométriques, AMIR et YAEL, et parcours d’Oulpan en ligne pour les francophones.",
};

export default function FormationsPage() {
  const exams = publicPrograms.filter(({ slug }) => slug !== "oulpan");
  const oulpan = publicPrograms.find(({ slug }) => slug === "oulpan");

  return (
    <main>
      <header className="bg-primary px-4 py-16 text-primary-foreground sm:px-6 sm:py-24">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-accent">
            Catalogue pédagogique
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-[0.9] tracking-[-0.035em] sm:text-7xl">
            Choisissez la formation que vous êtes venu préparer.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/65">
            Chaque formation réunira ses leçons, ses exercices et ses
            corrections dans un parcours continu.
          </p>
        </div>
      </header>
      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-[#8b683b]">
          Préparer un examen
        </p>
        <div className="mt-7 border-t border-primary/20">
          {exams.map((program, index) => (
            <Link
              key={program.slug}
              href={`/formations/${program.slug}`}
              className="group grid grid-cols-[2rem_1fr] gap-4 border-b border-primary/20 py-8 sm:grid-cols-[4rem_1fr_auto] sm:items-center"
            >
              <span className="font-mono text-xs text-primary/35">
                0{index + 1}
              </span>
              <div>
                <h2 className="font-serif text-4xl text-primary">
                  {program.name}
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
                  {program.description}
                </p>
              </div>
              <span className="col-start-2 flex items-center gap-3 text-[0.58rem] font-semibold uppercase tracking-[0.17em] text-[#8b683b] sm:col-start-auto">
                <span>{program.status}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      {oulpan ? (
        <section className="border-y border-primary/15 bg-[#e8dfd2] px-4 py-16 sm:px-6 sm:py-20">
          <Link
            href="/oulpan"
            className="group mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
          >
            <div>
              <p className="flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#8b683b]">
                <Languages className="size-4" /> Apprendre l’hébreu
              </p>
              <h2 className="mt-5 font-serif text-6xl text-primary">Oulpan</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                {oulpan.description} Cet univers reste lié à la même expérience
                d’apprentissage tout en conservant sa progression propre.
              </p>
            </div>
            <span className="flex items-center gap-3 font-semibold text-primary">
              Découvrir les niveaux{" "}
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </section>
      ) : null}
    </main>
  );
}
