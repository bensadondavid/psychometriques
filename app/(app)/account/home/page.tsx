import { ArrowRight, BookOpen, BrainCircuit } from 'lucide-react'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import { getCurrentSession } from '@/lib/auth/get-current-session'

export default async function HomePage() {
  const session = await getCurrentSession()
  if (!session) redirect('/sign-in')

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-12 pt-6 sm:px-6 sm:pt-10 lg:px-8">
      <section className="relative overflow-hidden border border-primary bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-14">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-7 flex items-center gap-3 text-[#d6b476]"><span className="h-px w-9 bg-current" /><p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em]">Votre parcours</p></div>
          <h1 className="font-serif text-4xl leading-[0.95] tracking-[-0.03em] sm:text-6xl">
            Bonjour, {session.user.name}
          </h1>
          <p className="mt-6 max-w-xl leading-7 text-primary-foreground/70 sm:text-lg">
            Votre espace de préparation en français, conçu pour progresser avec méthode et constance.
          </p>
        </div>
        <BrainCircuit className="absolute -bottom-10 -right-8 size-64 text-[#d6b476]/10" />
      </section>

      <section className="mt-6 grid border border-border bg-card sm:grid-cols-[1fr_auto]">
        <div className="flex items-start gap-5 p-6 sm:p-8">
          <div className="grid size-11 shrink-0 place-items-center rounded-full border border-primary/25 text-primary"><BookOpen className="size-5" /></div>
          <div><p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#9b7a48]">Premier programme</p><h2 className="mt-2 font-serif text-2xl">Psychométriques</h2><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">Le parcours est en préparation. Vous pouvez déjà découvrir le catalogue de la plateforme.</p></div>
        </div>
        <div className="flex items-center border-t border-border px-6 py-5 sm:border-l sm:border-t-0"><Link href="/account/programmes" className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline">Voir les programmes <ArrowRight className="size-4" /></Link></div>
      </section>
    </main>
  )
}
