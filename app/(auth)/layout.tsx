import Link from "next/link";
import { AcademicMark } from "@/components/brand/academic-mark";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[#f5f0e7] text-[#211b18] lg:grid lg:grid-cols-[minmax(430px,0.9fr)_minmax(520px,1.1fr)]">
      <section className="auth-academic-panel relative hidden min-h-screen overflow-hidden bg-[#45121d] text-[#fbf6ec] lg:flex lg:flex-col lg:justify-between">
        <div className="relative z-10 px-12 pt-10 xl:px-16 xl:pt-12">
          <Link href="/" aria-label="Retour à l'accueil" className="transition-opacity hover:opacity-80">
            <AcademicMark />
          </Link>
        </div>

        <div className="relative z-10 px-12 xl:px-16">
          <div className="mb-7 flex items-center gap-3 text-[#d6b476]">
            <span className="h-px w-10 bg-current" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em]">Excellence & méthode</span>
          </div>
          <h2 className="max-w-[650px] font-serif text-[clamp(3.25rem,5vw,5.8rem)] leading-[0.9] tracking-[-0.035em]">
            L&apos;ambition se prépare.
          </h2>
          <p className="mt-8 max-w-md text-base leading-7 text-[#f4e9d7]/70">
            Un parcours exigeant et structuré pour transformer chaque heure de travail en progrès mesurable.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-2 border-t border-[#f4e9d7]/15">
          <div className="px-12 py-8 xl:px-16">
            <p className="font-serif text-3xl text-[#f8f0e2]">4 programmes</p>
            <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#f4e9d7]/45">Un même espace</p>
          </div>
          <div className="border-l border-[#f4e9d7]/15 px-12 py-8 xl:px-16">
            <p className="font-serif text-3xl text-[#f8f0e2]">Aleph → Vav</p>
            <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#f4e9d7]/45">Parcours Oulpan</p>
          </div>
        </div>
      </section>

      <section className="auth-paper-panel relative flex min-h-screen flex-col overflow-hidden bg-[#f5f0e7]">
        <header className="relative z-10 border-b border-[#d6b476]/30 bg-[#45121d] px-5 py-4 text-[#fbf6ec] sm:px-8 lg:hidden">
          <Link href="/" aria-label="Retour à l'accueil" className="inline-flex transition-opacity hover:opacity-80">
            <AcademicMark compact />
          </Link>
        </header>

        <div className="relative z-10 flex flex-1 items-center justify-center px-5 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14 xl:px-20">
          <div className="w-full max-w-[430px]">
            <div className="mb-10 hidden items-center gap-3 text-[#7b7065] lg:flex">
              <span className="h-px w-8 bg-[#a89984]" />
              <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em]">Portail étudiant</span>
            </div>
            {children}
          </div>
        </div>

        <footer className="relative z-10 hidden items-center justify-between border-t border-[#cbbfae]/50 px-6 py-4 text-[0.62rem] uppercase tracking-[0.18em] text-[#8a7e71] sm:flex sm:px-10 lg:px-14 xl:px-20">
          <span>Examens et apprentissage de l&apos;hébreu</span>
          <span className="hidden sm:inline">Rigueur · Confiance · Réussite</span>
        </footer>
      </section>
    </main>
  );
}
