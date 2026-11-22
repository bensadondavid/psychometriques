import type { Metadata } from "next";
import Link from "next/link";

import { prisma } from "@/lib/database/prisma";

export const metadata: Metadata = { title: "Catalogue pédagogique | Administration" };

const EXAMS = [
  { slug: "psychometriques", name: "Psychométriques" },
  { slug: "amirnet", name: "AMIRNET" },
  { slug: "yaelnet", name: "YAELNET" },
] as const;
const TABS = ["questions", "passages", "parcours", "series"] as const;
type Tab = (typeof TABS)[number];
type Search = { examen?: string; onglet?: string; statut?: string; q?: string; page?: string };

function param(value: string | string[] | undefined) {
  return typeof value === "string" ? value : "";
}

function url(exam: string, tab: Tab, status = "", q = "", page = 1) {
  const params = new URLSearchParams({ onglet: tab });
  if (exam) params.set("examen", exam);
  if (status) params.set("statut", status);
  if (q) params.set("q", q);
  if (page > 1) params.set("page", String(page));
  return `/account/admin/catalogue?${params}`;
}

function Badge({ status }: { status: string }) {
  const label: Record<string, string> = {
    DRAFT: "Brouillon", VALIDATED: "Ancien statut validé", PUBLISHED: "Publié",
    ARCHIVED: "Archivé", COMING_SOON: "À venir",
  };
  return <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs ${status === "PUBLISHED" ? "border-emerald-600 text-emerald-700 dark:text-emerald-300" : "border-border text-muted-foreground"}`}>{label[status] ?? status}</span>;
}

export default async function AdminCatalogPage({ searchParams }: { searchParams: Promise<Search> }) {
  const raw = await searchParams;
  const exam = EXAMS.some((entry) => entry.slug === param(raw.examen)) ? param(raw.examen) : "";
  const tab = TABS.includes(param(raw.onglet) as Tab) ? param(raw.onglet) as Tab : "questions";
  const q = param(raw.q).trim().slice(0, 80);
  const pageNumber = Number(param(raw.page));
  const page = Number.isSafeInteger(pageNumber) && pageNumber > 0 ? Math.min(pageNumber, 1000) : 1;
  const take = 25;
  const questionStatuses = ["DRAFT", "VALIDATED", "PUBLISHED", "ARCHIVED"] as const;
  const contentStatuses = ["DRAFT", "PUBLISHED", "ARCHIVED", "COMING_SOON"] as const;
  const availableStatuses: readonly string[] = tab === "questions" ? questionStatuses : contentStatuses;
  const status = availableStatuses.includes(param(raw.statut)) ? param(raw.statut) : "";

  const [programs, questionCounts, lessonCounts] = await Promise.all([
    prisma.program.findMany({
      orderBy: { sortOrder: "asc" },
      select: { id: true, slug: true, name: true, status: true, _count: { select: { passages: true } } },
    }),
    prisma.question.groupBy({ by: ["programId"], _count: { _all: true } }),
    prisma.lesson.groupBy({ by: ["programId"], _count: { _all: true } }),
  ]);
  const selectedProgram = programs.find((program) => program.slug === exam);
  const programId = exam ? (selectedProgram?.id ?? "__absent__") : undefined;
  const programName = (id: string) => programs.find((program) => program.id === id)?.name ?? "Examen";
  const questionCount = new Map(questionCounts.map((item) => [item.programId, item._count._all]));
  const lessonCount = new Map(lessonCounts.map((item) => [item.programId, item._count._all]));

  let total = 0;
  let hasUnassignedChapters = false;
  let content: React.ReactNode;
  if (tab === "questions") {
    const where = {
      ...(programId ? { programId } : {}),
      ...(status ? { status: status as (typeof questionStatuses)[number] } : {}),
      ...(q ? { OR: [
        { externalId: { contains: q, mode: "insensitive" as const } },
        { statement: { contains: q, mode: "insensitive" as const } },
      ] } : {}),
    };
    const [count, questions] = await Promise.all([
      prisma.question.count({ where }),
      prisma.question.findMany({
        where, orderBy: [{ updatedAt: "desc" }, { id: "asc" }], skip: (page - 1) * take, take,
        select: { id: true, programId: true, externalId: true, statement: true, status: true,
          sourceStatus: true, editorialReviewedAt: true, difficulty: true,
          chapter: { select: { name: true } } },
      }),
    ]);
    total = count;
    content = <div className="space-y-2">{questions.map((question) =>
      <Link key={question.id} href={`/account/admin/catalogue/questions/${question.id}`} className="block border border-border bg-card p-4 hover:border-primary">
        <div className="flex flex-wrap items-center gap-2"><span className="font-mono text-xs text-muted-foreground">{question.externalId}</span><Badge status={question.status} />{question.editorialReviewedAt && <span className="text-xs text-emerald-700">Relue</span>}</div>
        <p className="mt-2 line-clamp-2 font-medium">{question.statement}</p>
        <p className="mt-2 text-xs text-muted-foreground">{programName(question.programId)} · {question.chapter.name} · difficulté {question.difficulty} · source {question.sourceStatus}</p>
      </Link>,
    )}</div>;
  } else if (tab === "passages") {
    const where = {
      ...(programId ? { programId } : {}),
      ...(status ? { status: status as (typeof contentStatuses)[number] } : {}),
      ...(q ? { OR: [
        { externalId: { contains: q, mode: "insensitive" as const } },
        { title: { contains: q, mode: "insensitive" as const } },
      ] } : {}),
    };
    const [count, passages] = await Promise.all([
      prisma.passage.count({ where }),
      prisma.passage.findMany({
        where, orderBy: [{ updatedAt: "desc" }, { id: "asc" }], skip: (page - 1) * take, take,
        select: { id: true, programId: true, externalId: true, title: true, status: true,
          sourceStatus: true, editorialReviewedAt: true, _count: { select: { questions: true } } },
      }),
    ]);
    total = count;
    content = <div className="space-y-2">{passages.map((passage) =>
      <Link key={passage.id} href={`/account/admin/catalogue/passages/${passage.id}`} className="block border border-border bg-card p-4 hover:border-primary">
        <div className="flex flex-wrap items-center gap-2"><span className="font-mono text-xs text-muted-foreground">{passage.externalId}</span><Badge status={passage.status} />{passage.editorialReviewedAt && <span className="text-xs text-emerald-700">Relu</span>}</div>
        <p className="mt-2 font-medium">{passage.title}</p>
        <p className="mt-2 text-xs text-muted-foreground">{programName(passage.programId)} · {passage._count.questions} questions liées · source {passage.sourceStatus}</p>
      </Link>,
    )}</div>;
  } else if (tab === "parcours") {
    const where = programId ? { programId } : {};
    const [count, courses, unassignedChapters] = await Promise.all([
      prisma.course.count({ where }),
      prisma.course.findMany({
        where, orderBy: [{ sortOrder: "asc" }, { name: "asc" }], skip: (page - 1) * take, take,
        select: { id: true, programId: true, name: true, status: true,
          chapters: { orderBy: { sortOrder: "asc" }, select: { id: true, name: true, _count: { select: { questions: true } } } },
          lessons: { orderBy: { sortOrder: "asc" }, select: { id: true, title: true, slug: true, status: true } } },
      }),
      prisma.questionChapter.findMany({
        where: { courseId: null, ...(programId ? { programId } : {}) },
        orderBy: [{ domain: "asc" }, { sortOrder: "asc" }],
        select: { id: true, name: true, domain: true, programId: true, _count: { select: { questions: true } } },
      }),
    ]);
    total = count;
    hasUnassignedChapters = unassignedChapters.length > 0;
    content = <div className="grid gap-4 lg:grid-cols-2">{courses.map((course) =>
      <section key={course.id} className="border border-border bg-card p-5">
        <div className="flex flex-wrap items-center gap-2"><h2 className="font-serif text-2xl text-primary">{course.name}</h2><Badge status={course.status} /></div>
        <p className="mt-2 text-xs text-muted-foreground">{programName(course.programId)} · {course.chapters.length} chapitres · {course.lessons.length} leçons</p>
        <h3 className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Chapitres</h3>
        <ul className="mt-2 space-y-1 text-sm">{course.chapters.map((chapter) => <li key={chapter.id}>{chapter.name} <span className="text-muted-foreground">({chapter._count.questions})</span></li>)}</ul>
        <h3 className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Leçons</h3>
        <ul className="mt-2 space-y-2 text-sm">{course.lessons.map((lesson) =>
          <li key={lesson.id} className="flex flex-wrap items-center gap-2"><span>{lesson.title}</span><Badge status={lesson.status} />{course.programId === programs.find((program) => program.slug === "psychometriques")?.id && ["nombres", "divisibilite"].includes(lesson.slug) && <Link href={`/account/lecons/${lesson.slug}`} className="font-semibold text-primary underline">Prévisualiser</Link>}</li>,
        )}</ul>
        {!course.lessons.length && <p className="mt-2 text-sm text-muted-foreground">Aucune leçon.</p>}
      </section>,
    )}{unassignedChapters.length > 0 && <section className="border border-amber-400 bg-amber-50 p-5 text-amber-950 dark:bg-amber-950 dark:text-amber-100"><h2 className="font-serif text-2xl">Chapitres sans matière</h2><p className="mt-2 text-sm">Ils sont importés et consultables, mais restent à rattacher à une matière.</p><ul className="mt-4 space-y-1 text-sm">{unassignedChapters.map((chapter) => <li key={chapter.id}>{programName(chapter.programId)} · {chapter.name} ({chapter.domain}, {chapter._count.questions} questions)</li>)}</ul></section>}</div>;
  } else {
    const where = programId ? { programId } : {};
    const [count, series] = await Promise.all([
      prisma.exercise.count({ where }),
      prisma.exercise.findMany({
        where, orderBy: [{ updatedAt: "desc" }, { id: "asc" }], skip: (page - 1) * take, take,
        select: { id: true, programId: true, title: true, kind: true, status: true,
          chapter: { select: { name: true } }, _count: { select: { questions: true } } },
      }),
    ]);
    total = count;
    content = <div className="space-y-2">{series.map((item) =>
      <div key={item.id} className="border border-border bg-card p-4"><div className="flex flex-wrap items-center gap-2"><h2 className="font-semibold">{item.title}</h2><Badge status={item.status} /></div><p className="mt-2 text-xs text-muted-foreground">{programName(item.programId)} · {item.kind} · {item.chapter?.name ?? "Sans chapitre"} · {item._count.questions} questions</p></div>,
    )}</div>;
  }

  return <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
    <div className="flex flex-wrap items-start justify-between gap-5">
      <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">Administration · Contenus</p><h1 className="mt-3 font-serif text-4xl text-primary">Catalogue pédagogique</h1><p className="mt-3 max-w-3xl text-sm leading-6 text-muted-foreground">Parcourez les contenus importés et ouvrez chaque fiche avant une publication explicite.</p></div>
      <Link href="/account/admin/questions/import" className="border border-primary bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">Importer des CSV</Link>
    </div>
    <section aria-label="Examens du catalogue" className="mt-8 grid gap-3 md:grid-cols-3">{EXAMS.map((entry) => {
      const program = programs.find((item) => item.slug === entry.slug);
      return <Link key={entry.slug} href={url(entry.slug, tab)} className={`border p-5 hover:border-primary ${exam === entry.slug ? "border-primary bg-primary/5" : "border-border bg-card"}`}>
        <div className="flex items-center justify-between gap-2"><h2 className="font-serif text-xl text-primary">{entry.name}</h2>{program ? <Badge status={program.status} /> : <span className="text-xs text-muted-foreground">Absent en base</span>}</div>
        <p className="mt-3 text-sm text-muted-foreground">{program ? `${questionCount.get(program.id) ?? 0} questions · ${program._count.passages} textes · ${lessonCount.get(program.id) ?? 0} leçons` : "Import à venir"}</p>
      </Link>;
    })}</section>
    <nav aria-label="Sections du catalogue" className="mt-8 flex flex-wrap gap-2 border-b border-border pb-3">{TABS.map((item) => <Link key={item} href={url(exam, item)} aria-current={tab === item ? "page" : undefined} className={`px-4 py-2 text-sm font-semibold ${tab === item ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}>{item === "questions" ? "Questions" : item === "passages" ? "Textes" : item === "parcours" ? "Matières et leçons" : "Séries"}</Link>)}</nav>
    {(tab === "questions" || tab === "passages") && <form method="get" className="mt-5 flex flex-wrap items-end gap-3">
      <input type="hidden" name="onglet" value={tab} />
      <label className="grid gap-1 text-xs font-semibold text-muted-foreground">Examen<select name="examen" defaultValue={exam} className="border border-border bg-card px-3 py-2 text-sm text-foreground"><option value="">Tous</option>{EXAMS.map((entry) => <option key={entry.slug} value={entry.slug}>{entry.name}</option>)}</select></label>
      <label className="grid gap-1 text-xs font-semibold text-muted-foreground">Statut éditorial<select name="statut" defaultValue={status} className="border border-border bg-card px-3 py-2 text-sm text-foreground"><option value="">Tous</option>{availableStatuses.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
      <label className="grid min-w-56 flex-1 gap-1 text-xs font-semibold text-muted-foreground">Identifiant ou texte<input name="q" defaultValue={q} maxLength={80} placeholder="Rechercher" className="border border-border bg-card px-3 py-2 text-sm text-foreground" /></label>
      <button type="submit" className="border border-primary px-4 py-2 text-sm font-semibold text-primary">Filtrer</button>
    </form>}
    <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground"><p>{total} {tab === "questions" ? "question(s)" : tab === "passages" ? "texte(s)" : tab === "parcours" ? "matière(s)" : "série(s)"}</p><p>Page {page} / {Math.max(1, Math.ceil(total / take))}</p></div>
    <div className="mt-3">{content}</div>
    {total === 0 && !hasUnassignedChapters && <p className="mt-3 border border-dashed border-border bg-card px-5 py-8 text-sm text-muted-foreground">Aucun contenu pour ces filtres.</p>}
    {total > take && <nav aria-label="Pagination du catalogue" className="mt-7 flex items-center justify-between text-sm font-semibold">{page > 1 ? <Link href={url(exam, tab, status, q, page - 1)} className="text-primary underline">Page précédente</Link> : <span />}{page * take < total && <Link href={url(exam, tab, status, q, page + 1)} className="text-primary underline">Page suivante</Link>}</nav>}
  </main>;
}
