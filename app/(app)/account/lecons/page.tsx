import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth/get-current-session";
import { getProgramAuthorization } from "@/lib/auth/has-program-access";
import { getAmirnetLessons } from "@/lib/content/amirnet-lessons";
import { getQuantitativeLessons } from "@/lib/content/quantitative-lessons";
import { getVerbalLessons } from "@/lib/content/verbal-lessons";

export const metadata = { title: "Modules de leçons | Psychométriques" };

export default async function LessonsPage() {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");
  const authorization = await getProgramAuthorization(
    session.user.id,
    "psychometriques",
  );
  const amirnetAuthorization = await getProgramAuthorization(
    session.user.id,
    "amirnet",
  );
  const [quantitative, verbal] = authorization.allowed
    ? await Promise.all([
        getQuantitativeLessons(authorization.isAdmin),
        getVerbalLessons(authorization.isAdmin),
      ])
    : [[], []];
  const modules = [
    {
      title: "Réflexion quantitative",
      description: "Nombres, calculs, problèmes, données et géométrie.",
      href: "/account/lecons/quantitatif",
      count: quantitative.filter((lesson) => lesson.content).length,
    },
    {
      title: "Réflexion verbale",
      description: "Analogies, compréhension et déduction.",
      href: "/account/lecons/verbal",
      count: verbal.filter((lesson) => lesson.content).length,
    },
    {
      title: "Anglais AMIRNET",
      description:
        "Structure des phrases, temps, modaux et phrases à compléter.",
      href: "/account/lecons/amirnet",
      count: amirnetAuthorization.allowed
        ? (await getAmirnetLessons(amirnetAuthorization.isAdmin)).filter(
            (lesson) => lesson.content,
          ).length
        : 0,
      exam: "AMIRNET",
    },
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">
          Votre apprentissage
        </p>
        <h1 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
          Modules de leçons
        </h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          Choisissez la matière que vous souhaitez travailler.
        </p>
      </header>
      {modules.some((module) => module.count > 0) ? (
        <section
          className="mt-9 grid gap-5 md:grid-cols-2"
          aria-label="Modules disponibles"
        >
          {modules
            .filter((module) => module.count > 0)
            .map((module) => (
              <Link
                key={module.href}
                href={module.href}
                className="group flex flex-col border border-border bg-card p-6 hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:p-8"
              >
                <BookOpen
                  className="size-6 text-[#9b7a48]"
                  aria-hidden="true"
                />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#9b7a48]">
                  {"exam" in module ? module.exam : "Psychométriques"} · Module
                </p>
                <h2 className="mt-3 font-serif text-3xl text-primary">
                  {module.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                  {module.description}
                </p>
                <span className="mt-6 text-sm text-muted-foreground">
                  {module.count} leçon{module.count > 1 ? "s" : ""} disponible
                  {module.count > 1 ? "s" : ""}
                </span>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Ouvrir le module{" "}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
        </section>
      ) : (
        <p className="mt-9 text-muted-foreground">
          Aucun module de leçons disponible pour votre compte actuellement.
        </p>
      )}
    </main>
  );
}
