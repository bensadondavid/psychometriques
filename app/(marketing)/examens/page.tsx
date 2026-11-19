import type { Metadata } from "next";
import Link from "next/link";

import { publicPrograms } from "@/lib/content/catalog";

export const metadata: Metadata = {
  title: "Choisir son examen | Psychometriques.fr",
  description:
    "Choisissez votre parcours de préparation : Psychométriques, AMIRNET ou YAELNET.",
};

export default function ExamsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 md:py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        Les parcours
      </p>
      <h1 className="mt-4 font-serif text-4xl text-primary md:text-6xl">
        Quel examen prépares-tu ?
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
        Chaque examen a son propre parcours. Choisis le tien pour découvrir sa
        méthode et suivre sa progression.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {publicPrograms.map((program) => (
          <article
            key={program.slug}
            className="border border-border bg-card p-7"
          >
            <p className="text-sm text-muted-foreground">{program.subject}</p>
            <h2 className="mt-4 font-serif text-3xl text-primary">
              {program.name}
            </h2>
            <p className="mt-4 min-h-24 leading-7 text-muted-foreground">
              {program.description}
            </p>
            <Link
              href={`/examens/${program.slug}`}
              className="mt-6 inline-flex rounded-sm bg-primary px-5 py-3 font-semibold text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Découvrir le parcours
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
