import Link from "next/link";
import { notFound } from "next/navigation";

import { getPublicProgram } from "@/lib/content/catalog";
import { getDiscoverySeries, getOwnedDiscovery, isReadyDiscoverySeries } from "@/lib/discovery/attempt";
import { publicDiscoveryQuestion } from "@/lib/discovery/snapshot";
import { discoveryAuthUrl } from "@/lib/discovery/return-url";
import { beginDiscovery, submitDiscoveryAnswer } from "./actions";

type Props = { params: Promise<{ slug: string }> };
export const dynamic = "force-dynamic";

export default async function DiscoveryPage({ params }: Props) {
  const { slug } = await params;
  const program = getPublicProgram(slug);
  if (!program) notFound();
  const [series, attempt] = await Promise.all([getDiscoverySeries(slug), getOwnedDiscovery(slug)]);
  const ready = series && isReadyDiscoverySeries(series);
  const next = attempt?.status === "IN_PROGRESS" ? attempt.questions.find((question) => !question.answer) : null;
  const complete = attempt?.status === "COMPLETED";
  const start = beginDiscovery.bind(null, slug);

  return <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
    <Link href={`/examens/${slug}`} className="text-sm text-primary underline underline-offset-4">Retour à {program.name}</Link>
    <p className="mt-9 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Découverte · {program.name}</p>
    <h1 className="mt-3 font-serif text-4xl text-primary">Votre série découverte</h1>
    {!attempt && (!ready ?
      <p className="mt-8 rounded-sm border border-border bg-card p-6 text-muted-foreground">La série de découverte est en préparation. Elle sera proposée ici après sélection et publication des questions.</p> :
      <div className="mt-8 rounded-sm border border-border bg-card p-6">
        <p className="leading-7">{series.title} · {series.questions.length} questions. Vous verrez votre résultat et toutes les explications avant de créer un compte.</p>
        <form action={start} className="mt-6"><button className="rounded-sm bg-primary px-5 py-3 font-medium text-primary-foreground">Commencer la découverte</button></form>
      </div>)}
    {next && (() => {
      const question = publicDiscoveryQuestion(next.snapshot);
      const answer = submitDiscoveryAnswer.bind(null, slug);
      return <section className="mt-8 rounded-sm border border-border bg-card p-6 md:p-8">
        <p className="text-sm text-muted-foreground">Question {next.position} sur {attempt!.questions.length} · {question.chapter}</p>
        {question.passage && <div className="mt-6 border-s-4 border-primary/30 ps-5" lang={question.passage.language} dir={question.passage.language.startsWith("he") ? "rtl" : undefined}>
          <h2 className="font-semibold">{question.passage.title}</h2><p className="mt-3 whitespace-pre-wrap leading-7">{question.passage.text}</p>
        </div>}
        <h2 className="mt-7 whitespace-pre-wrap text-xl font-medium leading-8" lang={question.language} dir={question.language.startsWith("he") ? "rtl" : undefined}>{question.statement}</h2>
        <form action={answer} className="mt-7 space-y-3">
          <input type="hidden" name="questionId" value={next.id} />
          {question.options.map((option) => <label key={option.id} className="flex cursor-pointer gap-3 rounded-sm border border-border p-4 has-checked:border-primary has-checked:bg-primary/5" lang={question.language} dir={question.language.startsWith("he") ? "rtl" : undefined}>
            <input type="radio" name="optionId" value={option.id} required className="mt-1" />
            <span className="whitespace-pre-wrap">{option.text}</span>
          </label>)}
          <button className="mt-4 rounded-sm bg-primary px-5 py-3 font-medium text-primary-foreground">Valider et continuer</button>
        </form>
      </section>;
    })()}
    {complete && <section className="mt-8">
      <div className="rounded-sm border border-border bg-card p-6 md:p-8">
        <h2 className="font-serif text-3xl text-primary">Votre résultat</h2>
        <p className="mt-3 text-lg">{attempt.questions.filter((question) => question.answer?.isCorrect).length} bonne(s) réponse(s) sur {attempt.questions.length}.</p>
        <p className="mt-2 text-muted-foreground">Cette courte série indique des pistes de travail, pas un niveau définitif ni une note officielle.</p>
      </div>
      <h2 className="mt-10 font-serif text-2xl text-primary">Corrections et explications</h2>
      <ol className="mt-5 space-y-5">{attempt.questions.map((question) => {
        const selectedId = (question.answer?.value as { optionId?: string } | null)?.optionId;
        const selected = question.snapshot.options.find((option) => option.id === selectedId);
        const correct = question.snapshot.options.find((option) => option.isCorrect);
        return <li key={question.id} className="rounded-sm border border-border bg-card p-6">
          <p className="text-sm text-muted-foreground">Question {question.position} · {question.snapshot.chapter}</p>
          <h3 className="mt-3 whitespace-pre-wrap font-medium" lang={question.snapshot.language} dir={question.snapshot.language.startsWith("he") ? "rtl" : undefined}>{question.snapshot.statement}</h3>
          {question.snapshot.passage && <div className="mt-4 border-s-4 border-primary/30 ps-4" lang={question.snapshot.passage.language} dir={question.snapshot.passage.language.startsWith("he") ? "rtl" : undefined}><p className="font-medium">{question.snapshot.passage.title}</p><p className="mt-2 whitespace-pre-wrap leading-7">{question.snapshot.passage.text}</p></div>}
          <p className="mt-4">Votre réponse : <span lang={question.snapshot.language} dir={question.snapshot.language.startsWith("he") ? "rtl" : undefined}>{selected?.text ?? "Aucune"}</span> {question.answer?.isCorrect ? "✓" : "✗"}</p>
          {!question.answer?.isCorrect && <p className="mt-2">Bonne réponse : <span lang={question.snapshot.language} dir={question.snapshot.language.startsWith("he") ? "rtl" : undefined}>{correct?.text}</span></p>}
          <p className="mt-4 whitespace-pre-wrap border-t border-border pt-4 leading-7" lang={question.snapshot.language} dir={question.snapshot.language.startsWith("he") ? "rtl" : undefined}>{question.snapshot.explanation}</p>
        </li>;
      })}</ol>
      <p className="mt-8 text-muted-foreground">Créez un compte pour conserver ce résultat et poursuivre votre préparation.</p>
      <Link href={discoveryAuthUrl("/sign-up", slug)} className="mt-4 inline-block rounded-sm bg-primary px-5 py-3 font-medium text-primary-foreground">Créer un compte</Link>
    </section>}
  </main>;
}
