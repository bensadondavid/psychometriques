import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { publicPrograms } from "@/lib/content/catalog";

export default function AccountProgramsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">
          Votre apprentissage
        </p>
        <h1 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
          Mes programmes
        </h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          Psychométriques sera le premier parcours disponible. Les autres
          programmes sont déjà visibles pour préparer la suite.
        </p>
      </header>
      <section className="mt-9 grid gap-4 md:grid-cols-2">
        {publicPrograms.map((program) => (
          <article
            key={program.slug}
            className="border border-border bg-card p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <h2 className="font-serif text-2xl text-primary">
                {program.name}
              </h2>
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-[#9b7a48]">
                {program.status}
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {program.description}
            </p>
            <Link
              href={`/formations/${program.slug}`}
              className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Voir la présentation <ArrowRight className="size-4" />
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
