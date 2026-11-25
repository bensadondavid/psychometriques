import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentSession } from "@/lib/auth/get-current-session";
import { getPublicProgram } from "@/lib/content/catalog";
import { getOwnedDiscovery } from "@/lib/discovery/attempt";
import { parseDiscoverySnapshot } from "@/lib/discovery/snapshot";
import { prisma } from "@/lib/database/prisma";
import { saveDiscovery } from "./actions";

export default async function SaveDiscoveryPage({ searchParams }: {
  searchParams: Promise<{ examen?: string; enregistre?: string }>;
}) {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");
  const { examen } = await searchParams;
  const program = examen ? getPublicProgram(examen) : null;
  if (!program) redirect("/account/home");
  const attempt = await getOwnedDiscovery(program.slug);
  const valid = attempt?.status === "COMPLETED" && (!attempt.userId || attempt.userId === session.user.id);
  const saved = !valid ? await prisma.attempt.findFirst({
    where: { userId: session.user.id, status: "COMPLETED", exercise: { kind: "DISCOVERY", program: { slug: program.slug } } },
    orderBy: { completedAt: "desc" },
    select: { id: true, questions: { orderBy: { position: "asc" },
      select: { position: true, snapshot: true, answer: { select: { value: true, isCorrect: true } } } } },
  }) : null;
  const result = valid ? attempt : saved;
  const corrections = result?.questions.map((question) => ({
    position: question.position, snapshot: parseDiscoverySnapshot(question.snapshot), answer: question.answer,
  })) ?? [];
  return <main className="mx-auto max-w-2xl px-6 py-12">
    <h1 className="font-serif text-4xl text-primary">Votre découverte {program.name}</h1>
    {!result ? <p className="mt-6 leading-7">Aucun résultat enregistré pour cet examen. Retrouvez la découverte depuis sa page.</p> :
      <section className="mt-7 border border-border bg-card p-6">
        <p className="text-lg">{result.questions.filter((question) => question.answer?.isCorrect).length} bonne(s) réponse(s) sur {result.questions.length}.</p>
        {saved || attempt?.userId ? <p className="mt-4 text-emerald-700">Ce résultat est enregistré dans votre compte.</p> :
          <form action={saveDiscovery.bind(null, program.slug)} className="mt-5"><button className="bg-primary px-5 py-3 font-medium text-primary-foreground">Enregistrer mon résultat</button></form>}
      </section>}
    {result && <section className="mt-8"><h2 className="font-serif text-2xl text-primary">Corrections</h2>
      <ol className="mt-4 space-y-4">{corrections.map(({ position, snapshot, answer }) => {
        if (!snapshot) return null;
        const selectedId = (answer?.value as { optionId?: string } | null)?.optionId;
        return <li key={position} className="border border-border bg-card p-5">
          <p className="text-sm text-muted-foreground">Question {position} · {snapshot.chapter}</p>
          <p className="mt-3 whitespace-pre-wrap font-medium" lang={snapshot.language} dir={snapshot.language.startsWith("he") ? "rtl" : undefined}>{snapshot.statement}</p>
          {snapshot.passage && <p className="mt-3 whitespace-pre-wrap border-s-4 border-primary/30 ps-4" lang={snapshot.passage.language} dir={snapshot.passage.language.startsWith("he") ? "rtl" : undefined}>{snapshot.passage.title}\n{snapshot.passage.text}</p>}
          <p className="mt-3">Votre réponse : {snapshot.options.find((option) => option.id === selectedId)?.text ?? "Aucune"} {answer?.isCorrect ? "✓" : "✗"}</p>
          {!answer?.isCorrect && <p className="mt-2">Bonne réponse : {snapshot.options.find((option) => option.isCorrect)?.text}</p>}
          <p className="mt-4 whitespace-pre-wrap border-t border-border pt-4 leading-7" lang={snapshot.language} dir={snapshot.language.startsWith("he") ? "rtl" : undefined}>{snapshot.explanation}</p>
        </li>;
      })}</ol>
    </section>}
    {valid && <Link href={`/examens/${program.slug}/decouverte`} className="mt-6 inline-block text-primary underline">Voir les explications</Link>}
    <Link href="/account/home" className="mt-6 ml-5 inline-block text-primary underline">Tableau de bord</Link>
  </main>;
}
