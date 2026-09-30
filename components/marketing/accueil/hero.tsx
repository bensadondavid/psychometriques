import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function AccueilHero() {
  return (
    <section
      className="border-b border-[#d8cbbc] bg-[#fef9f0] text-[#45121d]"
      aria-labelledby="accueil-title"
    >
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.5fr_0.5fr] lg:items-end lg:px-12 lg:py-28">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase">
            Préparer les examens en Israël, en français
          </p>
          <h1
            id="accueil-title"
            className="mt-8 max-w-[12ch] font-serif text-[clamp(3.6rem,8vw,7.7rem)] leading-[0.93] tracking-[-0.045em]"
          >
            La réussite ne s’improvise pas.
          </h1>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-[#524344]">
            Psychométriques, AMIRNET et YAELNET : trois préparations pour
            travailler chaque épreuve avec méthode, depuis une interface en
            français.
          </p>
          <Link
            href="#formations"
            className="mt-10 inline-flex min-h-12 items-center gap-5 border-b border-[#45121d] pb-2 text-sm font-semibold hover:gap-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]"
          >
            Explorer les préparations{" "}
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
        <nav
          aria-label="Accès aux préparations"
          className="border-t border-[#bda99b] pt-6 lg:mb-2"
        >
          <p className="mb-5 text-xs font-semibold tracking-[0.14em] uppercase text-[#74615b]">
            Choisir son épreuve
          </p>
          <Link
            href="/psychometriques"
            className="flex items-center justify-between border-b border-[#d8cbbc] py-4 font-serif text-2xl hover:text-[#8a3545] focus-visible:outline-2 focus-visible:outline-[#45121d]"
          >
            Psychométriques{" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/langues#amirnet"
            className="flex items-center justify-between border-b border-[#d8cbbc] py-4 font-serif text-2xl hover:text-[#8a3545] focus-visible:outline-2 focus-visible:outline-[#45121d]"
          >
            AMIRNET <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/langues#yael"
            className="flex items-center justify-between border-b border-[#d8cbbc] py-4 font-serif text-2xl hover:text-[#8a3545] focus-visible:outline-2 focus-visible:outline-[#45121d]"
          >
            YAELNET <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </nav>
      </div>
    </section>
  );
}
