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
import { getAccessiblePrograms } from "@/lib/auth/has-program-access";
import { prisma } from "@/lib/database/prisma";
import { quantitativeLessons } from "@/lib/content/quantitative-lessons";

const lessonRoutes = Object.fromEntries(
  quantitativeLessons.map((lesson) => [lesson.sourceId, `/account/lecons/${lesson.slug}`]),
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

  const [lessons, attemptCount] = await Promise.all([
    prisma.lesson.findMany({
      where: {
        programId: program.id,
        sourceId: { in: Object.keys(lessonRoutes) },
        status: "PUBLISHED",
        content: { not: null },
        course: { status: "PUBLISHED" },
      },
      select: {
        id: true,
        sourceId: true,
        title: true,
        course: { select: { name: true } },
      },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
    }),
    prisma.attempt.count({
      where: { userId: session.user.id, exercise: { programId: program.id } },
    }),
  ]);

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
            Leçons
          </h2>
        </div>
        {lessons.length ? (
          <div className="mt-5 grid gap-3">
            {lessons.map((lesson) => (
              <Link
                href={lessonRoutes[lesson.sourceId!]}
                key={lesson.id}
                className="group flex items-center justify-between gap-4 border border-border bg-card p-5 hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9b7a48]">
                    {lesson.course.name}
                  </p>
                  <h3 className="mt-2 font-serif text-xl text-primary">
                    {lesson.title}
                  </h3>
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
            Aucune leçon en ligne pour ce programme actuellement.
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
