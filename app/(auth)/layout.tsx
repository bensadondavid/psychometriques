import Image from "next/image";
import Link from "next/link";

const preparations = [
  {
    index: "I",
    nom: "Psychométriques",
    sujet: "Quantitatif · Verbal · Rédaction",
  },
  { index: "II", nom: "AMIRNET", sujet: "Anglais académique" },
  { index: "III", nom: "YAEL & YAELNET", sujet: "Hébreu académique" },
] as const;

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#fef9f0] text-[#1d1c16] lg:grid lg:grid-cols-[minmax(30rem,0.9fr)_minmax(34rem,1.1fr)]">
      <section className="relative hidden min-h-screen overflow-hidden bg-[#45121d] text-white lg:flex lg:flex-col lg:justify-between">
        <div
          className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(to_right,rgba(255,222,165,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,222,165,0.08)_1px,transparent_1px)] [background-size:5rem_5rem]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-36 top-1/2 size-[30rem] -translate-y-1/2 rounded-full border border-[#d6b476]/15"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 top-1/2 size-[20rem] -translate-y-1/2 rounded-full border border-[#d6b476]/15"
          aria-hidden="true"
        />

        <header className="relative z-10 px-12 pt-10 xl:px-16 xl:pt-12">
          <Link
            href="/"
            aria-label="Retour à l’accueil"
            className="inline-flex rounded-sm bg-[#fef9f0] p-1 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffdea5]"
          >
            <Image
              src="/logo-psychos.png"
              width={48}
              height={48}
              alt="Psychometriques.fr"
              priority
            />
          </Link>
        </header>

        <div className="relative z-10 px-12 py-12 xl:px-16">
          <p className="flex items-center gap-3 text-[0.625rem] font-bold tracking-[0.28em] text-[#ffdea5] uppercase">
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            Portail de préparation
          </p>
          <h2 className="mt-6 max-w-[10ch] font-serif text-[clamp(3.5rem,5vw,5.5rem)] leading-[0.94] font-normal tracking-[-0.04em] text-[#fef9f0]">
            Trois préparations. Un seul espace.
          </h2>
          <p className="mt-7 max-w-md text-base leading-[1.75] text-[#ded9d1]">
            Retrouvez vos cours, vos exercices et vos corrections dans un cadre
            de travail calme, structuré et exigeant.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-3 border-t border-white/15">
          {preparations.map((preparation) => (
            <div
              key={preparation.nom}
              className="min-w-0 border-r border-white/15 px-5 py-7 last:border-r-0 xl:px-7"
            >
              <p className="font-mono text-xs text-[#ffdea5]">
                {preparation.index}
              </p>
              <p className="mt-3 font-serif text-xl leading-tight text-[#fef9f0]">
                {preparation.nom}
              </p>
              <p className="mt-2 text-[0.625rem] leading-4 tracking-[0.08em] text-[#ded9d1]/65 uppercase">
                {preparation.sujet}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#fef9f0]">
        <header className="relative z-10 flex h-20 items-center justify-between border-b border-[#e7e2d9] px-6 lg:hidden">
          <Link
            href="/"
            aria-label="Retour à l’accueil"
            className="inline-flex transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#45121d]"
          >
            <Image
              src="/logo-psychos.png"
              width={48}
              height={48}
              alt="Psychometriques.fr"
              priority
            />
          </Link>
          <span className="text-[0.625rem] font-bold tracking-[0.22em] text-[#45121d] uppercase">
            Espace personnel
          </span>
        </header>

        <div className="relative z-10 flex flex-1 items-center justify-center px-5 py-10 sm:px-10 lg:px-14 lg:py-14 xl:px-20">
          <div className="w-full max-w-[29rem]">
            <div className="mb-10 hidden items-center gap-3 text-[#4e5e7f] lg:flex">
              <span className="h-px w-8 bg-current" aria-hidden="true" />
              <span className="text-[0.625rem] font-bold tracking-[0.28em] uppercase">
                Portail étudiant
              </span>
            </div>
            {children}
          </div>
        </div>

        <footer className="relative z-10 hidden items-center justify-between border-t border-[#e7e2d9] px-6 py-4 text-[0.625rem] tracking-[0.18em] text-[#857374] uppercase sm:flex sm:px-10 lg:px-14 xl:px-20">
          <span>Psychométriques · AMIRNET · YAEL/YAELNET</span>
          <span className="hidden xl:inline">
            Méthode · Entraînement · Progression
          </span>
        </footer>
      </section>
    </main>
  );
}
