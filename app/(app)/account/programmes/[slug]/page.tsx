import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  ClipboardList,
  Timer,
} from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth/get-current-session";
import {
  getAccessiblePrograms,
  getProgramAuthorization,
} from "@/lib/auth/has-program-access";
import { prisma } from "@/lib/database/prisma";
import { quantitativeLessons } from "@/lib/content/quantitative-lessons";
import { verbalLessons } from "@/lib/content/verbal-lessons";

const lessonSourceIds = [...quantitativeLessons, ...verbalLessons].map(
  (lesson) => lesson.sourceId,
);

export default async function AccountProgramPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");

  const { slug } = await params;
  const program = (await getAccessiblePrograms(session.user.id)).find(
    (item) => item.slug === slug,
  );
  if (!program) notFound();
  const authorization = await getProgramAuthorization(session.user.id, slug);
  if (!authorization.allowed) notFound();

  const [lessons, attemptCount] = await Promise.all([
    prisma.lesson.findMany({
      where: {
        programId: program.id,
        sourceId: { in: lessonSourceIds },
        ...(!authorization.isAdmin ? { status: "PUBLISHED" as const } : {}),
        content: { not: null },
        ...(!authorization.isAdmin
          ? { course: { status: "PUBLISHED" as const } }
          : {}),
      },
      select: {
        id: true,
        course: { select: { slug: true } },
      },
      orderBy: [
        { course: { sortOrder: "asc" } },
        { sortOrder: "asc" },
        { createdAt: "asc" },
      ],
    }),
    prisma.attempt.count({
      where: { userId: session.user.id, exercise: { programId: program.id } },
    }),
  ]);
  const modules = [
    {
      slug: "reflexion-quantitative",
      name: "Réflexion quantitative",
      href: "/account/lecons/quantitatif",
      description: "Calcul, problèmes, données et géométrie.",
    },
    {
      slug: "reflexion-verbale",
      name: "Réflexion verbale",
      href: "/account/lecons/verbal",
      description: "Analogies, compréhension et déduction.",
    },
  ]
    .map((module) => ({
      ...module,
      count: lessons.filter((lesson) => lesson.course.slug === module.slug)
        .length,
    }))
    .filter((module) => module.count > 0);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/account/programmes"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" /> Mes programmes
      </Link>
      <header className="mt-7 border border-primary bg-primary px-6 py-9 text-primary-foreground sm:px-9">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d6b476]">
          Votre programme
        </p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">{program.name}</h1>
      </header>

      <section
        className="mt-6 grid gap-4 sm:grid-cols-2"
        aria-label="Votre progression"
      >
        <div className="border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">Leçons en ligne</p>
          <p className="mt-2 font-serif text-4xl text-primary">
            {lessons.length}
          </p>
        </div>
        <div className="border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            Tentatives enregistrées
          </p>
          <p className="mt-2 font-serif text-4xl text-primary">
            {attemptCount}
          </p>
        </div>
      </section>

      <section className="mt-10" aria-labelledby="program-lessons">
        <div className="flex items-center gap-3">
          <BookOpen className="size-5 text-[#9b7a48]" aria-hidden="true" />
          <h2 id="program-lessons" className="font-serif text-3xl text-primary">
            Modules de leçons
          </h2>
        </div>
        {modules.length ? (
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {modules.map((module) => (
              <Link
                href={module.href}
                key={module.slug}
                className="group flex items-start justify-between gap-4 border border-border bg-card p-6 hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9b7a48]">
                    Psychométriques · Module
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-primary">
                    {module.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {module.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-primary">
                    {module.count} leçons
                  </p>
                </div>
                <ArrowRight
                  className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        ) : (
          <p className="mt-5 border border-border bg-card p-5 text-sm text-muted-foreground">
            Aucun module de leçons en ligne pour ce programme actuellement.
          </p>
        )}
      </section>

      <section
        className="mt-10 grid gap-4 sm:grid-cols-2"
        aria-label="Entraînement"
      >
        <Link
          href={`/account/exercices?programme=${program.slug}`}
          className="group border border-border bg-card p-6 hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <ClipboardList className="size-6 text-[#9b7a48]" aria-hidden="true" />
          <h2 className="mt-5 font-serif text-2xl text-primary">Exercices</h2>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Ouvrir{" "}
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </Link>
        <Link
          href={`/account/tests?programme=${program.slug}`}
          className="group border border-border bg-card p-6 hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Timer className="size-6 text-[#9b7a48]" aria-hidden="true" />
          <h2 className="mt-5 font-serif text-2xl text-primary">Tests</h2>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Ouvrir{" "}
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </Link>
      </section>
    </main>
  );
}
