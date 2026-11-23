import "katex/dist/katex.min.css";
import "../nombres/lesson.css";

import { ArrowLeft, BookOpen, Download, List } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { LessonMarkdown } from "@/components/account/lesson-markdown";
import { getCurrentSession } from "@/lib/auth/get-current-session";
import { getProgramAuthorization } from "@/lib/auth/has-program-access";
import { parseLessonMarkdown } from "@/lib/content/nombres-lesson";
import {
  getQuantitativeLesson,
  quantitativeLessons,
} from "@/lib/content/quantitative-lessons";

export default async function QuantitativeLessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const source = quantitativeLessons.find(
    (item) => item.slug === slug && Number(item.number) >= 3,
  );
  if (!source) notFound();

  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");
  const authorization = await getProgramAuthorization(
    session.user.id,
    "psychometriques",
  );
  if (!authorization.allowed) notFound();

  const lesson = await getQuantitativeLesson(
    source.sourceId,
    authorization.isAdmin,
  );
  if (!lesson?.content) notFound();
  const { introduction, sections } = parseLessonMarkdown(lesson.content);
  const assetBasePath =
    Number(source.number) >= 16
      ? `/account/lecons/${source.slug}/schema`
      : undefined;

  return (
    <div className="lesson-page mx-auto w-full max-w-[96rem] px-4 pb-20 pt-7 sm:px-6 lg:px-8">
      <Link
        href="/account/lecons"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="size-4" aria-hidden="true" /> Toutes les leçons
      </Link>
      <header className="lesson-hero mt-6 overflow-hidden border border-primary px-6 py-9 text-primary-foreground sm:px-10 sm:py-12">
        <div className="flex items-center gap-3 text-[#d6b476]">
          <BookOpen className="size-5" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em]">
            Psychométriques · Quantitatif · Leçon {source.number}
          </p>
        </div>
        <h1 className="mt-7 max-w-4xl font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {lesson.title}
        </h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-primary-foreground/75 sm:text-base">
          Une lecture progressive, des ateliers et une mission finale pour
          mettre les méthodes en pratique.
        </p>
      </header>
      <div className="mt-8 grid items-start gap-8 xl:grid-cols-[16rem_minmax(0,1fr)]">
        <aside
          className="lesson-toc xl:sticky xl:top-20"
          aria-label="Sommaire de la leçon"
        >
          <div className="flex items-center gap-2 border-b border-border px-5 py-4 text-primary">
            <List className="size-4" aria-hidden="true" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">
              Dans cette leçon
            </h2>
          </div>
          <nav className="max-h-[calc(100vh-9rem)] overflow-auto p-3">
            <a className="lesson-toc__link" href="#introduction">
              Introduction
            </a>
            {sections.map((section) => (
              <a
                className="lesson-toc__link"
                href={`#${section.id}`}
                key={section.id}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </aside>
        <main className="min-w-0 space-y-5">
          <div className="border-l-4 border-[#b58b52] bg-[#f0e6d6] px-5 py-4 text-sm leading-6 text-[#493525] dark:bg-[#382b24] dark:text-[#ead8bf]">
            Version de lecture : les questions et ateliers se font librement,
            avec indices et corrigés à ouvrir à votre rythme. Les réponses et la
            progression ne sont pas encore enregistrées.
          </div>
          <section id="introduction" className="lesson-section scroll-mt-20">
            <p className="lesson-section__label">Pour commencer</p>
            <LessonMarkdown
              markdown={introduction}
              assetBasePath={assetBasePath}
            />
          </section>
          {sections.map((section, index) => (
            <section
              id={section.id}
              className="lesson-section scroll-mt-20"
              key={section.id}
            >
              <p className="lesson-section__label">
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(sections.length).padStart(2, "0")}
              </p>
              <div className="flex flex-wrap items-start justify-between gap-x-5 gap-y-1">
                <h2 className="lesson-section__title">{section.title}</h2>
                {section.title === "Votre fiche de révision" && (
                  <a
                    href={`/account/lecons/${source.slug}/fiche-pdf`}
                    download={`fiche-revision-${source.slug}-psychometriques.pdf`}
                    type="application/pdf"
                    className="mb-6 inline-flex items-center gap-2 border border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    <Download className="size-4" aria-hidden="true" />{" "}
                    Enregistrer la fiche en PDF
                  </a>
                )}
              </div>
              <LessonMarkdown
                markdown={section.markdown}
                assetBasePath={assetBasePath}
              />
            </section>
          ))}
          <Link
            href="/account/lecons"
            className="inline-flex items-center gap-2 pt-5 text-sm font-semibold text-primary hover:underline"
          >
            <ArrowLeft className="size-4" aria-hidden="true" /> Revenir aux
            leçons
          </Link>
        </main>
      </div>
    </div>
  );
}
