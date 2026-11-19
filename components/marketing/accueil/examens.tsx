import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { publicPrograms } from "@/lib/content/catalog";

export function AccueilExamens() {
  return (
    <section
      id="formations"
      className="scroll-mt-20 bg-[#f8f3ea] py-20 text-[#45121d] lg:py-28"
      aria-labelledby="formations-title"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <p className="text-xs font-semibold tracking-[0.14em] uppercase">
            Les préparations
          </p>
          <h2
            id="formations-title"
            className="max-w-xl font-serif text-[clamp(2.7rem,4.7vw,5rem)] leading-[1.02] tracking-[-0.035em]"
          >
            Une épreuve à la fois.
          </h2>
        </div>
        <div className="mt-14 border-t border-[#bda99b]">
          {publicPrograms.map((formation) => (
            <article
              key={formation.slug}
              className="grid gap-5 border-b border-[#d8cbbc] py-8 md:grid-cols-[1fr_1fr_auto] md:items-center md:gap-10 lg:py-10"
            >
              <div>
                <p className="mb-2 text-xs font-semibold tracking-[0.1em] uppercase text-[#74615b]">
                  {formation.subject}
                </p>
                <h3 className="font-serif text-[clamp(2rem,3.2vw,3.5rem)] leading-none">
                  {formation.name}
                </h3>
              </div>
              <p className="max-w-sm text-base leading-relaxed text-[#524344]">
                {formation.description}
              </p>
              <Link
                href={`/examens/${formation.slug}`}
                aria-label={`Découvrir ${formation.name}`}
                className="inline-flex size-12 items-center justify-center rounded-full border border-[#aa9488] transition-colors hover:bg-[#45121d] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]"
              >
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
