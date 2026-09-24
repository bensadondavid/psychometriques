import Link from "next/link";

import { MarketingHeader } from "@/components/marketing/marketing-header";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="site-shell flex min-h-screen flex-col">
      <MarketingHeader />
      <div className="flex-1">{children}</div>
      <footer className="border-t border-primary-foreground/10 bg-[#2f0d15] px-4 py-12 text-primary-foreground sm:px-6">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="mt-6 max-w-md text-sm leading-6 text-primary-foreground/55">
              Une plateforme francophone pour préparer les examens
              psychométriques, AMIR et YAEL.
            </p>
          </div>
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-accent">
              Se préparer
            </p>
            <div className="mt-5 grid gap-3 text-sm text-primary-foreground/65">
              <Link
                href="/formations/psychometriques"
                className="hover:text-white"
              >
                Psychométrique
              </Link>
              <Link href="/formations/amir" className="hover:text-white">
                AMIR
              </Link>
              <Link href="/formations/yael" className="hover:text-white">
                YAEL
              </Link>
              <Link href="/oulpan" className="hover:text-white">
                Oulpan
              </Link>
            </div>
          </div>
          <div>
            <p className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-accent">
              La plateforme
            </p>
            <div className="mt-5 grid gap-3 text-sm text-primary-foreground/65">
              <Link href="/entreprises" className="hover:text-white">
                Partenariats
              </Link>
              <Link href="/sign-in" className="hover:text-white">
                Espace personnel
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col gap-2 border-t border-primary-foreground/12 pt-5 text-xs text-primary-foreground/35 sm:flex-row sm:justify-between">
          <p>Nom de marque provisoire.</p>
          <p>Plateforme en cours de construction.</p>
        </div>
      </footer>
    </div>
  );
}
