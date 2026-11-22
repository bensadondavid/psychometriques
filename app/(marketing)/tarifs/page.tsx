import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { publicPrograms } from "@/lib/content/catalog";

export const metadata: Metadata = {
  title: "Tarifs | Psychometriques.fr",
  description:
    "Le modèle tarifaire des préparations Psychométriques, AMIRNET et YAELNET est en cours de définition. Découvrez les parcours présentés sur le site.",
};

export default function TarifsPage() {
  return (
    <main className="bg-[#fef9f0] text-[#2a211d]">
      <section className="border-b border-[#e7e2d9] px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl lg:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#9b7a48]">Tarifs</p>
          <h1 className="mt-5 max-w-4xl font-serif text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-tight text-[#45121d]">
            Les offres sont en cours de définition.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#524344]">
            Les prix, les limites gratuites et un éventuel abonnement ne sont pas encore fixés.
            Aucun paiement n&apos;est proposé pour le moment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b7a48]">Les préparations</p>
          <h2 className="mt-4 font-serif text-3xl text-[#45121d] sm:text-4xl">Choisir d&apos;abord son examen</h2>
          <p className="mt-4 leading-7 text-[#524344]">
            Les trois parcours sont présentés séparément. Vous pouvez consulter leur objectif et leur méthode pendant que les séries de découverte sont préparées.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {publicPrograms.map((program) => (
            <article className="flex flex-col border border-[#d8cbbc] bg-white p-6" key={program.slug}>
              <h3 className="font-serif text-2xl text-[#45121d]">{program.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-[#524344]">{program.description}</p>
              <Link href={`/examens/${program.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#45121d] hover:underline">
                Découvrir le parcours <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
