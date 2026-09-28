import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AccueilHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#fef9f0] text-[#1d1c16]"
      aria-labelledby="accueil-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(69,18,29,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(69,18,29,0.045)_1px,transparent_1px)] [background-size:5rem_5rem]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-7xl items-center px-6 py-20 lg:px-12 lg:py-24">
        <div className="w-full">
          <p className="flex items-center gap-3 text-[0.625rem] font-bold tracking-[0.28em] text-[#45121d] uppercase">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            Préparation universitaire francophone
          </p>

          <h1
            id="accueil-title"
            className="mt-7 max-w-[15ch] font-serif text-[clamp(3.5rem,8.5vw,7.5rem)] leading-[0.9] font-normal tracking-[-0.045em] text-[#45121d]"
          >
            La réussite ne s’improvise pas.
          </h1>

          <p className="mt-9 max-w-4xl text-[1.125rem] leading-[1.75] text-[#524344]">
            Une plateforme de préparation structurée pour les Psychométriques,
            AMIRNET et YAEL/YAELNET, pensée pour les étudiants francophones en
            Israël.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#formations"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-sm bg-[#45121d] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#280009] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]"
            >
              Découvrir les formations
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/sign-in"
              className="inline-flex h-12 items-center justify-center rounded-sm border border-[#cbbfae] bg-transparent px-6 text-sm font-semibold text-[#45121d] transition-colors hover:border-[#45121d] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]"
            >
              Accéder à mon espace
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
