import { ArrowLeft, Timer } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth/get-current-session";
import { getAccessiblePrograms } from "@/lib/auth/has-program-access";

export const metadata = { title: "Tests | Psychométriques" };

export default async function TestsPage({
  searchParams,
}: {
  searchParams: Promise<{ programme?: string | string[] }>;
}) {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");

  const requestedSlug = (await searchParams).programme;
  const program = requestedSlug
    ? (await getAccessiblePrograms(session.user.id)).find(
        (item) => item.slug === requestedSlug,
      )
    : null;
  if (requestedSlug && !program) notFound();

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      {program && (
        <Link
          href={`/account/programmes/${program.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> {program.name}
        </Link>
      )}
      <div className="mt-8 border border-border bg-card p-7 sm:p-10">
        <Timer className="size-8 text-[#9b7a48]" aria-hidden="true" />
        <h1 className="mt-5 font-serif text-4xl text-primary">
          Tests{program ? ` · ${program.name}` : ""}
        </h1>
        <p className="mt-4 leading-7 text-muted-foreground">
          Aucun test n’est disponible pour le moment.
        </p>
      </div>
    </main>
  );
}
