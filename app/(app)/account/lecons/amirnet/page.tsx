import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth/get-current-session";
import { getProgramAuthorization } from "@/lib/auth/has-program-access";
import {
  amirnetLessons,
  getAmirnetLessons,
} from "@/lib/content/amirnet-lessons";

export const metadata = { title: "Leçons AMIRNET | Psychométriques" };

export default async function AmirnetLessonsPage() {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");
  const authorization = await getProgramAuthorization(
    session.user.id,
    "amirnet",
  );
  if (!authorization.allowed) notFound();
  const available = await getAmirnetLessons(authorization.isAdmin);
  const availableBySource = new Map(
    available.map((lesson) => [lesson.sourceId, lesson]),
  );
  const lessons = amirnetLessons.flatMap((source) => {
    const lesson = availableBySource.get(source.sourceId);
    return lesson?.content ? [{ ...source, title: lesson.title }] : [];
  });

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/account/lecons"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" /> Tous les modules
      </Link>
      <header className="mt-7 border border-primary bg-primary px-6 py-9 text-primary-foreground sm:px-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6b476]">
          AMIRNET · Module
        </p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">Anglais</h1>
        <p className="mt-4 text-sm leading-7 text-primary-foreground/80">
          {lessons.length} leçon{lessons.length > 1 ? "s" : ""} disponible
          {lessons.length > 1 ? "s" : ""}, dans l’ordre du parcours.
        </p>
      </header>
      {lessons.length ? (
        <ol className="mt-9 grid gap-3">
          {lessons.map((lesson) => (
            <li key={lesson.sourceId}>
              <Link
                href={`/account/lecons/${lesson.slug}`}
                className="group flex items-center gap-4 border border-border bg-card p-5 hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <span className="flex size-10 shrink-0 items-center justify-center border border-[#b58b52] font-serif text-lg text-primary">
                  {lesson.number}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#9b7a48]">
                    <BookOpen className="size-4" aria-hidden="true" /> Leçon{" "}
                    {lesson.number}
                  </span>
                  <span className="mt-1 block font-serif text-xl text-primary">
                    {lesson.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                    {lesson.description}
                  </span>
                </span>
                <ArrowRight
                  className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-8 border border-border bg-card p-6 text-sm text-muted-foreground">
          Aucune leçon disponible dans ce module actuellement.
        </p>
      )}
    </main>
  );
}
