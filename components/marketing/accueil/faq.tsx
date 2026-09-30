import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function AccueilFaq() {
  return (
    <section
      className="border-t border-[#d8cbbc] bg-[#fef9f0] py-14 text-[#45121d]"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-12">
        <div>
          <h2 id="faq-title" className="font-serif text-3xl sm:text-4xl">
            Une question avant de commencer ?
          </h2>
          <p className="mt-2 text-sm text-[#524344]">
            Organisation des parcours, compte et paiement : les réponses sont
            réunies au même endroit.
          </p>
        </div>
        <Link
          href="/faq"
          className="inline-flex shrink-0 items-center gap-3 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]"
        >
          Lire les réponses{" "}
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
