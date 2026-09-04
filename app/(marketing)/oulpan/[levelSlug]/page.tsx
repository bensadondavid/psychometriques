import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ComingSoonPage } from "@/components/marketing/coming-soon-page";
import { oulpanLevelNames, oulpanLevels } from "@/lib/content/catalog";

type LevelPageProps = { params: Promise<{ levelSlug: string }> };

export function generateStaticParams() {
  return oulpanLevels.map((levelSlug) => ({ levelSlug }));
}

export async function generateMetadata({
  params,
}: LevelPageProps): Promise<Metadata> {
  const { levelSlug } = await params;
  if (!oulpanLevels.includes(levelSlug as (typeof oulpanLevels)[number]))
    return {};
  return {
    title: `Oulpan ${oulpanLevelNames[levelSlug as keyof typeof oulpanLevelNames]}`,
  };
}

export default async function OulpanLevelPage({ params }: LevelPageProps) {
  const { levelSlug } = await params;
  if (!oulpanLevels.includes(levelSlug as (typeof oulpanLevels)[number]))
    notFound();
  const name = oulpanLevelNames[levelSlug as keyof typeof oulpanLevelNames];
  return (
    <ComingSoonPage
      eyebrow="Parcours Oulpan à venir"
      title={name}
      description={`Le niveau ${name} est prévu dans la structure Oulpan. Son contenu ne sera présenté qu’après définition et validation du parcours pédagogique.`}
      backHref="/oulpan"
      backLabel="Voir tous les niveaux"
    />
  );
}
