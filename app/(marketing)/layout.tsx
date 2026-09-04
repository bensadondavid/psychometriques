import { Menu } from "lucide-react";
import Link from "next/link";

import { AcademicMark } from "@/components/brand/academic-mark";
import { Button } from "@/components/ui/button";

const navigation = [
  { href: "/formations", label: "Formations" },
  { href: "/formations/psychometriques", label: "Psychométrique" },
  { href: "/oulpan", label: "Oulpan" },
] as const;

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="site-shell flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-primary transition-opacity hover:opacity-70"
            aria-label="Accueil"
          >
            <AcademicMark compact />
          </Link>
          <nav
            aria-label="Navigation principale"
            className="hidden items-center gap-7 text-[0.78rem] font-semibold lg:flex"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-primary/60"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="lg" className="h-10 px-4">
              <Link href="/sign-in">Se connecter</Link>
            </Button>
          </nav>
          <details className="group relative lg:hidden">
            <summary
              className="grid size-11 cursor-pointer list-none place-items-center border border-border bg-card text-primary [&::-webkit-details-marker]:hidden"
              aria-label="Ouvrir le menu"
            >
              <Menu className="size-5" />
            </summary>
            <nav
              aria-label="Navigation mobile"
              className="absolute right-0 top-14 w-[min(20rem,calc(100vw-2rem))] border border-border bg-background p-3 shadow-2xl"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border-b border-border/70 px-3 py-3.5 text-sm font-semibold last:border-b-0"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-3 h-11 w-full">
                <Link href="/sign-in">Se connecter</Link>
              </Button>
            </nav>
          </details>
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="border-t border-primary-foreground/10 bg-[#2f0d15] px-4 py-12 text-primary-foreground sm:px-6">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <AcademicMark compact />
            <p className="mt-6 max-w-md text-sm leading-6 text-primary-foreground/55">
              Une plateforme francophone pour préparer les examens
              psychométriques, AMIR et YAEL, et apprendre l’hébreu du niveau
              Aleph au niveau Vav.
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
