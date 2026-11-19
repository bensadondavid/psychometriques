import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getPublicProgram, publicPrograms } from "@/lib/content/catalog";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return publicPrograms.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getPublicProgram(slug);
  if (!program) return {};
  return {
    title: `${program.name} | Psychometriques.fr`,
    description: program.description,
  };
}

export default async function ExamPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getPublicProgram(slug);
  if (!program) notFound();

  return (
    <main>
      <section className="bg-primary px-6 py-16 text-primary-foreground md:py-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/examens"
            className="text-sm underline underline-offset-4"
          >
            Tous les examens
          </Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-widest opacity-75">
            {program.subject}
          </p>
          <h1 className="mt-4 font-serif text-5xl md:text-7xl">
            {program.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 opacity-90">
            {program.description}
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <h2 className="font-serif text-3xl text-primary md:text-4xl">
          Comment se déroulera le parcours ?
        </h2>
        <ol className="mt-9 grid gap-5 md:grid-cols-3">
          <li className="border-t border-border pt-5">
            <p className="text-sm font-semibold text-muted-foreground">01</p>
            <h3 className="mt-3 font-serif text-2xl">Essayer</h3>
            <p className="mt-3 leading-7 text-muted-foreground">
              Une courte série découverte sera accessible sans compte, avec
              résultat et explications à la fin.
            </p>
          </li>
          <li className="border-t border-border pt-5">
            <p className="text-sm font-semibold text-muted-foreground">02</p>
            <h3 className="mt-3 font-serif text-2xl">S&apos;entraîner</h3>
            <p className="mt-3 leading-7 text-muted-foreground">
              Des séries préparées par matière et thème, en mode apprentissage
              ou en conditions d&apos;examen.
            </p>
          </li>
          <li className="border-t border-border pt-5">
            <p className="text-sm font-semibold text-muted-foreground">03</p>
            <h3 className="mt-3 font-serif text-2xl">Progresser</h3>
            <p className="mt-3 leading-7 text-muted-foreground">
              Les bilans, les erreurs et les explications aideront à choisir la
              suite du travail.
            </p>
          </li>
        </ol>
        <p className="mt-10 rounded-sm border border-border bg-card p-5 text-muted-foreground">
          La série découverte de {program.name} sera accessible ici après sa
          composition avec les questions publiées.
        </p>
      </section>
    </main>
  );
}
