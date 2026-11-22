import Link from "next/link";
import { notFound } from "next/navigation";

import { canReviewPassage } from "@/lib/admin/catalogue-publication";
import { prisma } from "@/lib/database/prisma";
import { changePassagePublication } from "../../actions";

const MESSAGES: Record<string, string> = {
  review: "Texte marqué comme relu.",
  publish: "Texte publié.",
  withdraw: "Texte et questions liées publiées retirés de la publication.",
  stale: "Ce texte a changé. Relisez sa version actuelle avant de continuer.",
  incomplete: "Le titre ou le texte est vide.",
  "not-reviewed": "Marquez d’abord ce texte comme relu.",
  failed: "La modification a échoué. Réessayez après avoir actualisé la page.",
};

export default async function PassageCatalogDetail({
  params, searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ result?: string }>;
}) {
  const { id } = await params;
  const { result } = await searchParams;
  const passage = await prisma.passage.findUnique({
    where: { id },
    include: { program: { select: { name: true } }, questions: {
      select: { id: true, externalId: true, status: true },
      orderBy: { externalId: "asc" }, take: 50,
    }, _count: { select: { questions: true } } },
  });
  if (!passage) notFound();
  const complete = canReviewPassage(passage);
  return <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
    <Link href="/account/admin/catalogue?onglet=passages" className="text-sm font-semibold text-primary underline">← Retour aux textes</Link>
    <div className="mt-6 flex flex-wrap items-center gap-3"><p className="font-mono text-xs text-muted-foreground">{passage.externalId}</p><span className="rounded-full border border-border px-3 py-1 text-xs">{passage.status}</span>{passage.editorialReviewedAt && <span className="text-xs text-emerald-700">Relu le {passage.editorialReviewedAt.toLocaleDateString("fr-FR")}</span>}</div>
    <h1 className="mt-3 font-serif text-4xl text-primary">{passage.title}</h1>
    <p className="mt-3 text-sm text-muted-foreground">{passage.program.name} · {passage.theme} · {passage.wordCount} mots · {passage._count.questions} questions liées</p>
    <p className="mt-1 text-xs text-muted-foreground">Fichier : {passage.sourceFile ?? "non renseigné"} · statut source : {passage.sourceStatus}</p>
    {result && MESSAGES[result] && <p role="status" className="mt-6 border-l-4 border-primary bg-muted px-4 py-3 text-sm">{MESSAGES[result]}</p>}
    <section className="mt-7 border border-border bg-card p-6"><h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Texte à relire</h2><p dir={passage.language === "he" ? "rtl" : "ltr"} className="mt-4 whitespace-pre-wrap text-sm leading-8">{passage.text}</p></section>
    <section className="mt-5 border border-border bg-card p-6"><h2 className="font-serif text-2xl text-primary">Publication</h2><p className="mt-2 text-sm text-muted-foreground">Vérifiez ce texte avant de le marquer comme relu. Sa publication ne publie pas automatiquement les questions liées. Son retrait retire aussi les questions liées déjà publiées.</p>
      <form action={changePassagePublication} className="mt-5 flex flex-wrap gap-3"><input type="hidden" name="id" value={passage.id} /><input type="hidden" name="revision" value={passage.updatedAt.toISOString()} />
        <button name="operation" value="review" type="submit" disabled={!complete} className="border border-primary px-4 py-2 text-sm font-semibold text-primary disabled:opacity-50">Marquer comme relu</button>
        <button name="operation" value="publish" type="submit" disabled={!complete || !passage.editorialReviewedAt || passage.status === "PUBLISHED"} className="bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-50">Publier</button>
        <button name="operation" value="withdraw" type="submit" disabled={passage.status !== "PUBLISHED"} className="border border-border px-4 py-2 text-sm font-semibold disabled:opacity-50">Retirer</button>
      </form>
    </section>
    <section className="mt-5 border border-border bg-card p-6"><h2 className="font-serif text-2xl text-primary">Questions liées</h2><ul className="mt-4 space-y-2 text-sm">{passage.questions.map((question) => <li key={question.id}><Link href={`/account/admin/catalogue/questions/${question.id}`} className="font-mono text-primary underline">{question.externalId}</Link> <span className="text-muted-foreground">· {question.status}</span></li>)}</ul>{passage._count.questions > 50 && <p className="mt-3 text-xs text-muted-foreground">50 premières questions affichées.</p>}{passage._count.questions === 0 && <p className="mt-3 text-sm text-muted-foreground">Aucune question liée.</p>}</section>
  </main>;
}
