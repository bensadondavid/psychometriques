import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function AccueilAcces() {
  return (
    <section
      id="acces"
      className="bg-[#fef9f0] py-20 text-[#45121d] lg:py-28"
      aria-labelledby="acces-title"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-24 lg:px-12">
        <div>
          <p className="text-xs font-semibold tracking-[0.14em] uppercase">
            Les offres
          </p>
          <h2
            id="acces-title"
            className="mt-6 max-w-xl font-serif text-[clamp(2.8rem,4.7vw,5rem)] leading-[1.02] tracking-[-0.035em]"
          >
            Une préparation seule ou plusieurs réunies.
          </h2>
        </div>
        <div className="border-t border-[#bda99b] pt-8">
          <p className="max-w-lg text-lg leading-relaxed text-[#524344]">
            Psychométriques, AMIRNET et YAELNET existent chacun en formule
            dédiée. Les packs réunissent plusieurs préparations dans le même
            espace.
          </p>
          <Link
            href="/tarifs"
            className="mt-8 inline-flex min-h-12 items-center gap-5 border-b border-[#45121d] pb-2 text-sm font-semibold hover:gap-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]"
          >
            Comparer les cinq offres{" "}
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
