import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";

import { ComingSoonPage } from "@/components/marketing/coming-soon-page";
import { Button } from "@/components/ui/button";
import { publicPrograms } from "@/lib/content/catalog";

type FormationPageProps = { params: Promise<{ programSlug: string }> };

export function generateStaticParams() {
  return publicPrograms.map(({ slug: programSlug }) => ({ programSlug }));
}

export async function generateMetadata({
  params,
}: FormationPageProps): Promise<Metadata> {
  const { programSlug } = await params;
  const program = publicPrograms.find(({ slug }) => slug === programSlug);
  return program
    ? { title: `Formation ${program.name}`, description: program.description }
    : {};
}

export default async function FormationPage({ params }: FormationPageProps) {
  const { programSlug } = await params;
  const program = publicPrograms.find(({ slug }) => slug === programSlug);
  if (!program) notFound();
  if (program.slug === "oulpan") permanentRedirect("/oulpan");

  if (!program.available) {
    return (
      <ComingSoonPage
        eyebrow="Formation à venir"
        title={program.name}
        description={`La préparation ${program.name} rejoindra la plateforme après le lancement du Psychométrique. Aucun faux programme n’est affiché avant que son contenu soit défini.`}
        backHref="/formations"
        backLabel="Revenir aux formations"
      />
    );
  }

  return (
    <main>
      <header className="relative isolate flex min-h-[72svh] items-end overflow-hidden bg-primary px-4 py-16 text-primary-foreground sm:px-6 lg:px-8">
        <div className="marketing-hero__orb" aria-hidden="true">
          <span>Σ</span>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-accent">
            Première formation
          </p>
          <h1 className="mt-6 max-w-6xl font-serif text-[clamp(5rem,12vw,10rem)] leading-[0.78] tracking-[-0.05em]">
            Psychométrique
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-primary-foreground/62">
            La première préparation construite sur la plateforme, organisée en
            parcours, leçons, exercices et corrections.
          </p>
        </div>
      </header>
      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#86643a]">
              État du programme
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-[0.92] text-primary sm:text-6xl">
              La structure avant le remplissage.
            </h2>
            <p className="mt-6 leading-7 text-muted-foreground">
              Le contenu sera importé après validation. Pour l’instant, la
              plateforme prépare le cadre qui reliera proprement chaque notion à
              sa pratique.
            </p>
          </div>
          <div className="border-t border-primary/20">
            {["Parcours", "Leçons", "Exercices", "Corrections"].map(
              (item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[3rem_1fr_auto] items-center border-b border-primary/20 py-7"
                >
                  <span className="font-mono text-xs text-primary/35">
                    0{index + 1}
                  </span>
                  <span className="font-serif text-3xl text-primary">
                    {item}
                  </span>
                  <span className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[#86643a]">
                    En construction
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
        <Button asChild size="lg" className="mt-12 h-12 px-5">
          <Link href="/sign-in">
            Accéder à mon espace <ArrowRight />
          </Link>
        </Button>
      </section>
    </main>
  );
}
