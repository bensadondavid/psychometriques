import Link from "next/link";
import { randomUUID } from "node:crypto";
import { DiscoveryBlueprintForm } from "@/components/admin/discovery-blueprint-form";
import { prisma } from "@/lib/database/prisma";
import {
  publishDiscovery,
  trashDiscoveryDraft,
  withdrawDiscovery,
} from "./actions";

const exams = ["psychometriques", "amirnet", "yaelnet"] as const;
type Props = {
  searchParams: Promise<{
    erreur?: string;
    cree?: string;
    publie?: string;
    retire?: string;
    corbeille?: string;
  }>;
};

export default async function AdminDiscoveriesPage({ searchParams }: Props) {
  const [params, programs] = await Promise.all([
    searchParams,
    prisma.program.findMany({
      where: { slug: { in: [...exams] } },
      orderBy: { sortOrder: "asc" },
      select: {
        id: true,
        slug: true,
        name: true,
        status: true,
        _count: {
          select: {
            exercises: { where: { kind: "DISCOVERY", status: "DRAFT" } },
          },
        },
        exercises: {
          where: { kind: "DISCOVERY", status: { in: ["DRAFT", "PUBLISHED"] } },
          orderBy: { createdAt: "desc" },
          take: 20,
          select: {
            id: true,
            title: true,
            instructions: true,
            status: true,
            questions: {
              orderBy: { position: "asc" },
              select: {
                id: true,
                position: true,
                question: {
                  select: {
                    id: true,
                    statement: true,
                    status: true,
                    domain: true,
                    difficulty: true,
                    chapter: { select: { name: true } },
                  },
                },
              },
            },
          },
        },
      },
    }),
  ]);
  const programIds = programs.map((program) => program.id);
  const [chapters, poolCounts, publishedSeries] = await Promise.all([
    prisma.questionChapter.findMany({
      where: { programId: { in: programIds } },
      orderBy: [{ domain: "asc" }, { sortOrder: "asc" }, { name: "asc" }],
      select: {
        id: true,
        programId: true,
        name: true,
        domain: true,
        course: { select: { name: true } },
      },
    }),
    prisma.question.groupBy({
      by: ["programId", "chapterId", "domain", "difficulty"],
      where: {
        programId: { in: programIds },
        status: "PUBLISHED",
        imagePath: null,
        OR: [{ passageId: null }, { passage: { status: "PUBLISHED" } }],
      },
      _count: { _all: true },
    }),
    prisma.exercise.findMany({
      where: {
        programId: { in: programIds },
        kind: "DISCOVERY",
        status: "PUBLISHED",
      },
      select: { programId: true },
    }),
  ]);
  const publishedProgramIds = new Set(
    publishedSeries.map((series) => series.programId),
  );
  const composerPrograms = programs.map((program) => ({
    slug: program.slug,
    name: program.name,
    status: program.status,
    draftCount: program._count.exercises,
    chapters: chapters
      .filter((chapter) => chapter.programId === program.id)
      .map((chapter) => ({
        id: chapter.id,
        name: chapter.name,
        domain: chapter.domain,
        courseName: chapter.course?.name ?? null,
      })),
    pool: poolCounts
      .filter((item) => item.programId === program.id)
      .map((item) => ({
        chapterId: item.chapterId,
        domain: item.domain,
        difficulty: item.difficulty,
        count: item._count._all,
      })),
  }));
  const shortage = params.erreur?.match(/^manque-(\d{1,2})$/);
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Link
        href="/account/admin/catalogue?onglet=series"
        className="text-sm text-primary underline"
      >
        Retour au catalogue
      </Link>
      <h1 className="mt-8 font-serif text-4xl text-primary">
        Séries découvertes
      </h1>
      <p className="mt-3 leading-7 text-muted-foreground">
        Définissez la répartition souhaitée. La plateforme tire des questions
        publiées selon ces critères, puis conserve cette sélection fixe pour
        tous les visiteurs.
      </p>
      {params.erreur && (
        <p
          role="alert"
          className="mt-6 border border-destructive p-4 text-destructive"
        >
          Action refusée :{" "}
          {shortage
            ? `le groupe ${shortage[1]} ne contient pas assez de questions disponibles après les autres tirages.`
            : params.erreur === "brouillon-existant"
              ? "un brouillon existe déjà pour cet examen. Relisez-le ci-dessous ou choisissez explicitement de créer une autre variante."
              : params.erreur === "structure"
                ? "la structure doit couvrir le verbal et le quantitatif pour les Psychométriques, ou seulement la langue pour AMIRNET et YAELNET."
                : params.erreur === "questions"
                  ? "une question tirée a changé ou n’est pas complète. Réessayez après vérification du catalogue."
                  : params.erreur === "deja-publie"
                    ? "la série publiée a changé pendant cette opération. Rechargez la page puis réessayez."
                    : "vérifiez le programme et les critères."}
        </p>
      )}
      {(params.cree || params.publie || params.retire || params.corbeille) && (
        <p
          role="status"
          className="mt-6 border border-emerald-600 p-4 text-emerald-700"
        >
          {params.corbeille
            ? "Brouillon placé dans la corbeille."
            : params.retire
              ? "Série retirée."
              : params.publie
                ? "Série publiée."
                : params.cree === "existant"
                  ? "Ce brouillon avait déjà été créé pour cette soumission."
                  : "Brouillon créé."}
        </p>
      )}
      <DiscoveryBlueprintForm
        programs={composerPrograms}
        requestKey={randomUUID()}
      />
      <div className="mt-10 space-y-7">
        {programs.map((program) => (
          <section key={program.id} className="border-t border-border pt-6">
            <h2 className="font-serif text-2xl text-primary">{program.name}</h2>
            {!program.exercises.length && (
              <p className="mt-3 text-muted-foreground">
                Aucune série découverte.
              </p>
            )}
            <ul className="mt-3 space-y-3">
              {program.exercises.map((series) => (
                <li
                  key={series.id}
                  className="border border-border bg-card p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">{series.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {series.questions.length} questions ·{" "}
                        {series.status === "PUBLISHED"
                          ? "Publiée"
                          : series.status === "DRAFT"
                            ? "Brouillon"
                            : "Retirée"}
                      </p>
                    </div>
                    {series.status === "DRAFT" && (
                      <div className="flex flex-wrap items-start gap-3">
                        <form action={publishDiscovery}>
                          <input type="hidden" name="id" value={series.id} />
                          {publishedProgramIds.has(program.id) && (
                            <input
                              type="hidden"
                              name="replacePublished"
                              value="yes"
                            />
                          )}
                          <button className="border border-primary px-4 py-2 text-sm font-medium text-primary">
                            {publishedProgramIds.has(program.id)
                              ? "Remplacer la série publiée après relecture"
                              : "Publier après relecture"}
                          </button>
                        </form>
                        <details className="text-sm">
                          <summary className="cursor-pointer px-2 py-2 text-destructive underline underline-offset-4">
                            Mettre à la corbeille
                          </summary>
                          <form
                            action={trashDiscoveryDraft}
                            className="mt-2 border border-destructive/40 p-3"
                          >
                            <input type="hidden" name="id" value={series.id} />
                            <p className="mb-3 max-w-xs text-muted-foreground">
                              Ce brouillon quittera la liste active. La série
                              publiée et les questions restent disponibles.
                            </p>
                            <button className="border border-destructive px-3 py-2 font-medium text-destructive">
                              Confirmer la mise à la corbeille
                            </button>
                          </form>
                        </details>
                      </div>
                    )}
                    {series.status === "PUBLISHED" && (
                      <div className="flex gap-4">
                        <Link
                          href={`/examens/${program.slug}/decouverte`}
                          className="text-sm text-primary underline"
                        >
                          Voir
                        </Link>
                        <form action={withdrawDiscovery}>
                          <input type="hidden" name="id" value={series.id} />
                          <button className="text-sm text-destructive underline">
                            Retirer
                          </button>
                        </form>
                      </div>
                    )}
                  </div>
                  {series.instructions && (
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Structure : {series.instructions}
                    </p>
                  )}
                  <details className="mt-4 border-t border-border pt-3">
                    <summary className="cursor-pointer text-sm font-medium text-primary">
                      Voir les questions tirées, dans l’ordre
                    </summary>
                    <ol className="mt-3 space-y-3">
                      {series.questions.map(({ id, position, question }) => (
                        <li
                          key={id}
                          className="border border-border bg-background p-3 text-sm"
                        >
                          <p className="text-muted-foreground">
                            {position}.{" "}
                            {question.domain === "VERBAL"
                              ? "Verbal"
                              : "Quantitatif"}{" "}
                            · difficulté {question.difficulty} ·{" "}
                            {question.chapter.name} ·{" "}
                            {question.status === "PUBLISHED"
                              ? "Publiée"
                              : "Retirée de la banque"}
                          </p>
                          <p className="mt-2 line-clamp-3 whitespace-pre-wrap">
                            {question.statement}
                          </p>
                          <Link
                            href={`/account/admin/catalogue/questions/${question.id}`}
                            className="mt-2 inline-block text-primary underline"
                          >
                            Relire la fiche complète
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </details>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
}
