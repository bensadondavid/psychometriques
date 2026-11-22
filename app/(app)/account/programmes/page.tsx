import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth/get-current-session";
import { getAccessiblePrograms } from "@/lib/auth/has-program-access";

export const metadata = { title: "Mes programmes | Psychométriques" };

export default async function AccountProgramsPage() {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");
  const programs = await getAccessiblePrograms(session.user.id);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9b7a48]">
          Votre apprentissage
        </p>
        <h1 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
          Mes programmes
        </h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          Accédez aux parcours associés à votre compte.
        </p>
      </header>
      {programs.length ? (
        <section
          className="mt-9 grid gap-4 md:grid-cols-2"
          aria-label="Programmes accessibles"
        >
          {programs.map((program) => (
            <Link
              href={`/account/programmes/${program.slug}`}
              key={program.id}
              className="group flex min-h-44 flex-col justify-between border border-border bg-card p-6 transition-colors hover:border-primary/50 hover:bg-muted/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <div className="flex items-center gap-3 text-[#9b7a48]">
                <BookOpen className="size-5" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Programme
                </span>
              </div>
              <div className="mt-8 flex items-end justify-between gap-4">
                <h2 className="font-serif text-3xl text-primary">
                  {program.name}
                </h2>
                <ArrowRight
                  className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </section>
      ) : (
        <div className="mt-9 border border-border bg-card p-6 sm:p-8">
          <p className="font-serif text-2xl text-primary">
            Aucun programme actif
          </p>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            Aucun accès à un programme n’est actuellement associé à votre
            compte.
          </p>
        </div>
      )}
    </main>
  );
}
