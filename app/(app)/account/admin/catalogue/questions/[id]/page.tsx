import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { canPublishQuestion, canReviewQuestion } from "@/lib/admin/catalogue-publication";
import { prisma } from "@/lib/database/prisma";
import { changeQuestionPublication } from "../../actions";

const MESSAGES: Record<string, string> = {
  review: "Question marquée comme relue.",
  publish: "Question publiée.",
  withdraw: "Question retirée de la publication.",
  stale: "Cette fiche a changé. Relisez sa version actuelle avant de continuer.",
  incomplete: "La question, ses réponses ou sa figure sont incomplètes.",
  "not-reviewed": "Marquez d’abord cette version comme relue.",
  passage: "Publiez d’abord le texte lié à cette question.",
  failed: "La modification a échoué. Réessayez après avoir actualisé la page.",
};

export default async function QuestionCatalogDetail({
  params, searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ result?: string }>;
}) {
  const { id } = await params;
  const { result } = await searchParams;
  const question = await prisma.question.findUnique({
    where: { id },
    include: {
      chapter: { select: { name: true } },
      options: { orderBy: { position: "asc" } },
      passage: { select: { id: true, title: true, status: true, text: true } },
    },
  });
  if (!question) notFound();
  const [program, figure] = await Promise.all([
    prisma.program.findUnique({ where: { id: question.programId }, select: { name: true } }),
    question.imagePath ? prisma.questionFigure.findUnique({
      where: { programId_path: { programId: question.programId, path: question.imagePath } },
      select: { svg: true },
    }) : Promise.resolve(null),
  ]);
  const image = figure ? `data:image/svg+xml;base64,${Buffer.from(figure.svg).toString("base64")}` : null;
  const complete = canReviewQuestion(question, Boolean(image));
  const canPublish = canPublishQuestion(question, Boolean(image));
  const direction = question.language === "he" ? "rtl" : "ltr";

  return <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
    <Link href="/account/admin/catalogue?onglet=questions" className="text-sm font-semibold text-primary underline">← Retour aux questions</Link>
    <div className="mt-6 flex flex-wrap items-center gap-3"><p className="font-mono text-xs text-muted-foreground">{question.externalId}</p><span className="rounded-full border border-border px-3 py-1 text-xs">{question.status}</span>{question.editorialReviewedAt && <span className="text-xs text-emerald-700">Relue le {question.editorialReviewedAt.toLocaleDateString("fr-FR")}</span>}</div>
    <h1 className="mt-3 font-serif text-4xl text-primary">Relecture de la question</h1>
    <p className="mt-3 text-sm text-muted-foreground">{program?.name ?? "Examen"} · {question.chapter.name} · {question.subTheme} · difficulté {question.difficulty} · version {question.version}</p>
    <p className="mt-1 text-xs text-muted-foreground">Fichier : {question.sourceFile ?? "non renseigné"} · statut source : {question.sourceStatus}</p>
    {result && MESSAGES[result] && <p role="status" className="mt-6 border-l-4 border-primary bg-muted px-4 py-3 text-sm">{MESSAGES[result]}</p>}
    <section className="mt-7 border border-border bg-card p-6">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Énoncé</h2>
      <p dir={direction} className="mt-3 whitespace-pre-wrap text-lg leading-8">{question.statement}</p>
      {question.imagePath && <div className="mt-5"><p className="text-xs text-muted-foreground">Figure : {question.imagePath}</p>{image ? <Image src={image} alt={question.imageAlt ?? "Figure de la question"} width={640} height={400} unoptimized className="mt-2 max-h-80 max-w-full border border-border bg-white p-3 object-contain" /> : <p className="mt-2 text-sm font-semibold text-destructive">Figure absente de la base : publication bloquée.</p>}</div>}
      <h2 className="mt-7 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Choix et correction</h2>
      <ol dir={direction} className="mt-3 space-y-2">{question.options.map((option) => <li key={option.id} className={`border px-4 py-3 text-sm ${option.isCorrect ? "border-emerald-500 bg-emerald-50 text-emerald-950 dark:bg-emerald-950 dark:text-emerald-100" : "border-border"}`}>{option.position}. {option.text}{option.isCorrect && <span className="ml-2 font-semibold">✓ Réponse correcte</span>}</li>)}</ol>
      <h2 className="mt-7 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Explication</h2>
      <p dir={direction} className="mt-3 whitespace-pre-wrap text-sm leading-7">{question.explanation}</p>
    </section>
    {question.passage && <section className="mt-5 border border-border bg-card p-6"><div className="flex flex-wrap items-center gap-2"><h2 className="font-serif text-xl">Texte lié : {question.passage.title}</h2><span className="text-xs text-muted-foreground">{question.passage.status}</span></div><p dir={direction} className="mt-3 whitespace-pre-wrap text-sm leading-7">{question.passage.text}</p><Link href={`/account/admin/catalogue/passages/${question.passage.id}`} className="mt-4 inline-block text-sm font-semibold text-primary underline">Ouvrir la fiche du texte</Link></section>}
    <section className="mt-7 border border-border bg-card p-6"><h2 className="font-serif text-2xl text-primary">Publication</h2><p className="mt-2 text-sm text-muted-foreground">Vérifiez l’énoncé, les quatre choix, la correction, le texte et la figure avant de marquer cette version comme relue.</p>
      <form action={changeQuestionPublication} className="mt-5 flex flex-wrap gap-3"><input type="hidden" name="id" value={question.id} /><input type="hidden" name="revision" value={question.version} />
        <button name="operation" value="review" type="submit" disabled={!complete} className="border border-primary px-4 py-2 text-sm font-semibold text-primary disabled:opacity-50">Marquer comme relue</button>
        <button name="operation" value="publish" type="submit" disabled={!canPublish || question.status === "PUBLISHED"} className="bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-50">Publier</button>
        <button name="operation" value="withdraw" type="submit" disabled={question.status !== "PUBLISHED"} className="border border-border px-4 py-2 text-sm font-semibold disabled:opacity-50">Retirer</button>
      </form>
      {!canPublish && <p className="mt-3 text-xs text-muted-foreground">Publication disponible après relecture, avec texte lié publié et figure présente.</p>}
    </section>
  </main>;
}
