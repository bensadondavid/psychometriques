import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth/get-current-session";
import { getProgramAuthorization } from "@/lib/auth/has-program-access";
import { getVerbalLessons, verbalLessons } from "@/lib/content/verbal-lessons";

export const metadata = { title: "Parcours Analogies | Psychométriques" };

export default async function AnalogiesPage() {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");
  const authorization = await getProgramAuthorization(
    session.user.id,
    "psychometriques",
  );
  if (!authorization.allowed) notFound();
  const available = await getVerbalLessons(authorization.isAdmin);
  const lessons = verbalLessons.filter(
    (source) =>
      source.chapter === 1 &&
      available.some(
        (item) => item.sourceId === source.sourceId && item.content,
      ),
  );
  if (!lessons.length) notFound();

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/account/lecons/verbal"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" /> Module verbal
      </Link>
      <header className="mt-7 border border-primary bg-primary px-6 py-9 text-primary-foreground sm:px-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6b476]">
          Psychométriques · Réflexion verbale
        </p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
          Parcours Analogies
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-primary-foreground/80">
          Sept étapes pour trouver la relation exacte entre deux mots,
          reconnaître les familles de relations et résoudre un bilan mélangé.
        </p>
      </header>
      <ol className="mt-8 grid gap-4">
        {lessons.map((source) => {
          const lesson = available.find(
            (item) => item.sourceId === source.sourceId,
          )!;
          return (
            <li key={source.sourceId}>
              <Link
                href={`/account/lecons/${source.slug}`}
                className="group flex items-center gap-5 border border-border bg-card p-5 hover:border-primary/50"
              >
                <span className="flex size-11 shrink-0 items-center justify-center border border-[#b58b52] font-serif text-xl text-primary">
                  {source.number}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#9b7a48]">
                    <BookOpen className="size-4" aria-hidden="true" /> Analogies
                  </span>
                  <span className="mt-2 block font-serif text-xl text-primary">
                    {lesson.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                    {source.description}
                  </span>
                </span>
                <ArrowRight
                  className="size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        })}
      </ol>
      <p className="mt-8 text-sm leading-7 text-muted-foreground">
        Chaque leçon se termine par une fiche de synthèse consultable et
        téléchargeable en PDF. Les activités et leurs corrigés sont disponibles
        dans les leçons.
      </p>
    </main>
  );
}
