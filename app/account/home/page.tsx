import { BrainCircuit } from 'lucide-react'
import { redirect } from 'next/navigation'

import { getCurrentSession } from '@/lib/auth/get-current-session'

export default async function HomePage() {
  const session = await getCurrentSession()
  if (!session) redirect('/login')

  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-12 pt-3 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-3xl bg-primary px-6 py-10 text-primary-foreground sm:px-10 sm:py-12">
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm font-semibold text-primary-foreground/70">
            Préparation psychométrique en français
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">
            Bonjour, {session.user.name}
          </h1>
          <p className="mt-4 text-primary-foreground/80 sm:text-lg">
            La base de l’ancien projet est maintenant nettoyée. Nous
            construirons ici chaque fonctionnalité de la plateforme, étape par
            étape.
          </p>
        </div>
        <BrainCircuit className="absolute -bottom-10 -right-8 size-64 text-white/10" />
      </section>

      <section className="mt-6 rounded-2xl border border-dashed bg-card px-6 py-14 text-center">
        <BrainCircuit className="mx-auto size-10 text-primary" />
        <h2 className="mt-4 text-xl font-bold">Projet prêt à construire</h2>
        <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
          L’authentification, le compte utilisateur et la structure Next.js sont
          conservés. Aucun modèle psychométrique n’est encore ajouté.
        </p>
      </section>
    </main>
  )
}
