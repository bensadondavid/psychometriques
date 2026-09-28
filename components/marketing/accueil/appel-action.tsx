import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AccueilAppelAction() {
  return (
    <section className="bg-[#45121d] py-16 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center lg:px-12">
        <div>
          <p className="text-[0.625rem] font-bold tracking-[0.28em] text-[#ffdea5] uppercase">
            Préparations accessibles maintenant
          </p>
          <h2 className="mt-2 max-w-2xl font-serif text-[clamp(2rem,3vw,2.8rem)] leading-[1.15] font-normal tracking-[-0.015em] text-[#fef9f0]">
            Rejoignez votre espace de préparation.
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-[1.55] text-[#ded9d1]">
            Psychométriques, AMIRNET et YAEL/YAELNET sont réunis dans un espace
            personnel conçu pour rester concentré sur l’essentiel.
          </p>
        </div>

        <Link
          href="/sign-in"
          className="inline-flex h-12 shrink-0 items-center justify-center gap-3 rounded-sm bg-[#ffdea5] px-6 text-sm font-semibold text-[#45121d] transition-colors hover:bg-[#fef9f0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Débuter ma préparation
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
