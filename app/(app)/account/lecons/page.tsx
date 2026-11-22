import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth/get-current-session";
import { getProgramAuthorization } from "@/lib/auth/has-program-access";
import {
  getDivisibiliteLesson,
  getNombresLesson,
} from "@/lib/content/nombres-lesson";

export const metadata = { title: "Leçons | Psychométriques" };

export default async function LessonsPage() {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");
  const authorization = await getProgramAuthorization(
    session.user.id,
    "psychometriques",
  );
  const [nombresLesson, divisibiliteLesson] = authorization.allowed
    ? await Promise.all([
        getNombresLesson(authorization.isAdmin),
        getDivisibiliteLesson(authorization.isAdmin),
      ])
    : [null, null];
  const lessons = [
    {
      lesson: nombresLesson,
      href: "/account/lecons/nombres",
      description:
        "Une leçon progressive sur les familles de nombres, les signes, la parité, les bornes, les valeurs absolues et les méthodes de résolution.",
    },
    {
      lesson: divisibiliteLesson,
      href: "/account/lecons/divisibilite",
      description:
        "Décomposer un nombre, choisir entre PGCD et PPCM, raisonner sur les restes et reconnaître les cycles.",
    },
  ].filter((entry) => Boolean(entry.lesson?.content));

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">
          Votre apprentissage
        </p>
        <h1 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
          Leçons
        </h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          Retrouvez les leçons incluses dans vos accès actifs.
        </p>
      </header>
      {lessons.length ? (
        <section
          className="mt-9 grid max-w-3xl gap-5"
          aria-label="Leçons disponibles"
        >
          {lessons.map(({ lesson, href, description }) => (
            <article
              className="border border-border bg-card p-6 sm:p-8"
              key={href}
            >
              <div className="flex items-center gap-3 text-[#9b7a48]">
                <BookOpen className="size-5" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Psychométriques · Réflexion quantitative
                </p>
              </div>
              <h2 className="mt-5 font-serif text-3xl text-primary">
                {lesson?.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {description}
              </p>
              <Link
                href={href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Lire la leçon{" "}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </section>
      ) : (
        <p className="mt-9 text-muted-foreground">
          Aucune leçon disponible pour votre compte actuellement.
        </p>
      )}
    </div>
  );
}
