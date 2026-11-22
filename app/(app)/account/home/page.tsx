import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentSession } from "@/lib/auth/get-current-session";
import { publicPrograms } from "@/lib/content/catalog";
import { prisma } from "@/lib/database/prisma";

import { addStudySession, changeStudySession, saveStudyGoal } from "./actions";

export const metadata = { title: "Tableau de bord | Psychométriques" };

function dateInIsrael() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Jerusalem",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

function dayOffset(date: string, offset: number) {
  const value = new Date(`${date}T12:00:00Z`);
  value.setUTCDate(value.getUTCDate() + offset);
  return value.toISOString().slice(0, 10);
}

function readableDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("fr-FR", {
    timeZone: "UTC",
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ erreur?: string }>;
}) {
  const session = await getCurrentSession();
  if (!session) redirect("/sign-in");
  const today = dateInIsrael();
  const day = new Date(`${today}T12:00:00Z`).getUTCDay();
  const weekStart = dayOffset(today, -(day === 0 ? 6 : day - 1));
  const weekEnd = dayOffset(weekStart, 6);
  const goal = await prisma.studyGoal.findUnique({
    where: { userId: session.user.id },
  });
  const [weekSessions, nextSession] = goal
    ? await Promise.all([
        prisma.studySession.findMany({
          where: {
            goalId: goal.id,
            scheduledOn: { gte: weekStart, lte: weekEnd },
          },
          orderBy: [{ scheduledOn: "asc" }, { createdAt: "asc" }],
        }),
        prisma.studySession.findFirst({
          where: { goalId: goal.id, completedAt: null },
          orderBy: [{ scheduledOn: "asc" }, { createdAt: "asc" }],
        }),
      ])
    : [[], null];
  const completed = weekSessions.filter((item) => item.completedAt).length;
  const exam = publicPrograms.find(
    (program) => program.slug === goal?.examSlug,
  );
  const daysUntilExam = goal?.examDate
    ? Math.ceil(
        (new Date(`${goal.examDate}T12:00:00Z`).getTime() -
          new Date(`${today}T12:00:00Z`).getTime()) /
          86_400_000,
      )
    : null;
  const { erreur } = await searchParams;

  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:px-8">
      <header className="border-b border-border pb-7">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9b7a48]">
          Tableau de bord
        </p>
        <h1 className="mt-3 font-serif text-4xl text-primary sm:text-5xl">
          Mon objectif de préparation
        </h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          Votre cap, votre rythme et la prochaine séance à faire.
        </p>
      </header>

      {erreur && (
        <p
          role="alert"
          className="mt-5 border border-destructive/50 bg-destructive/5 p-4 text-base text-destructive"
        >
          {erreur === "seance"
            ? "Vérifiez la date et le titre de la séance."
            : "Vérifiez les informations de votre objectif."}
        </p>
      )}

      {!goal ? (
        <section className="mt-8 max-w-2xl" aria-labelledby="start-heading">
          <h2 id="start-heading" className="font-serif text-3xl text-primary">
            Définir mon cap
          </h2>
          <p className="mt-2 text-base leading-7 text-muted-foreground">
            Commencez par l’examen visé et un rythme réalisable. Vous pourrez
            ensuite planifier vos séances et suivre celles terminées.
          </p>
          <GoalForm />
        </section>
      ) : (
        <>
          <section
            className="mt-8 grid gap-5 md:grid-cols-[minmax(0,1.4fr)_minmax(15rem,0.6fr)]"
            aria-label="Votre objectif"
          >
            <div className="border border-primary bg-primary p-6 text-primary-foreground sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d6b476]">
                Examen visé
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
                {exam?.name ?? goal.examSlug}
              </h2>
              {goal.objective && (
                <p className="mt-3 text-base leading-7">{goal.objective}</p>
              )}
              <p className="mt-4 text-base text-primary-foreground/80">
                {goal.examDate
                  ? `Échéance : ${readableDate(goal.examDate)}`
                  : "Aucune date d’examen renseignée"}
              </p>
              <details className="mt-5">
                <summary className="cursor-pointer font-semibold underline underline-offset-4">
                  Modifier mon objectif
                </summary>
                <GoalForm goal={goal} />
              </details>
            </div>
            <div className="border border-border bg-card p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9b7a48]">
                Rythme choisi
              </p>
              <p className="mt-4 font-serif text-3xl text-primary">
                {goal.sessionsPerWeek} séance
                {goal.sessionsPerWeek > 1 ? "s" : ""} / semaine
              </p>
              <p className="mt-2 text-base text-muted-foreground">
                {goal.sessionMinutes} minutes par séance
              </p>
              {daysUntilExam !== null && daysUntilExam >= 0 && (
                <p className="mt-5 border-t border-border pt-4 text-base font-medium text-primary">
                  {daysUntilExam === 0
                    ? "Examen aujourd’hui"
                    : `Dans ${daysUntilExam} jour${daysUntilExam > 1 ? "s" : ""}`}
                </p>
              )}
            </div>
          </section>

          <section className="mt-9" aria-labelledby="next-heading">
            <h2 id="next-heading" className="font-serif text-3xl text-primary">
              Ma prochaine séance
            </h2>
            {nextSession ? (
              <div className="mt-4 flex flex-wrap items-center justify-between gap-4 border-l-4 border-[#b58b52] bg-card p-5 sm:p-6">
                <div>
                  <p className="text-sm font-semibold text-[#9b7a48]">
                    {nextSession.scheduledOn < today
                      ? `En retard · ${readableDate(nextSession.scheduledOn)}`
                      : readableDate(nextSession.scheduledOn)}
                  </p>
                  <p className="mt-2 font-serif text-2xl text-primary">
                    {nextSession.title}
                  </p>
                  <p className="mt-1 text-base text-muted-foreground">
                    {goal.sessionMinutes} minutes prévues
                  </p>
                </div>
                <form action={changeStudySession}>
                  <input type="hidden" name="id" value={nextSession.id} />
                  <input type="hidden" name="operation" value="complete" />
                  <button className="min-h-11 bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90">
                    Marquer comme faite
                  </button>
                </form>
              </div>
            ) : (
              <p className="mt-4 border border-border bg-card p-5 text-base text-muted-foreground">
                Aucune séance à venir. Ajoutez votre prochaine séance
                ci-dessous.
              </p>
            )}
          </section>

          <section className="mt-9" aria-labelledby="week-heading">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h2
                  id="week-heading"
                  className="font-serif text-3xl text-primary"
                >
                  Cette semaine
                </h2>
                <p className="mt-2 text-base text-muted-foreground">
                  {completed} séance{completed > 1 ? "s" : ""} faite
                  {completed > 1 ? "s" : ""} sur {goal.sessionsPerWeek} visée
                  {goal.sessionsPerWeek > 1 ? "s" : ""}.
                </p>
              </div>
              <p className="text-sm text-muted-foreground">
                Du {readableDate(weekStart)} au {readableDate(weekEnd)}
              </p>
            </div>
            {weekSessions.length > 0 ? (
              <ul className="mt-4 divide-y divide-border border border-border bg-card">
                {weekSessions.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-wrap items-center justify-between gap-3 p-4 sm:px-5"
                  >
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {readableDate(item.scheduledOn)}
                      </p>
                      <p className="mt-1 text-base font-medium text-primary">
                        {item.title}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span
                        className={
                          item.completedAt
                            ? "text-sm font-semibold text-primary"
                            : "text-sm text-muted-foreground"
                        }
                      >
                        {item.completedAt ? "Faite" : "À faire"}
                      </span>
                      <form action={changeStudySession}>
                        <input type="hidden" name="id" value={item.id} />
                        <input
                          type="hidden"
                          name="operation"
                          value={item.completedAt ? "reopen" : "complete"}
                        />
                        <button className="min-h-11 font-semibold text-primary underline underline-offset-4">
                          {item.completedAt ? "Rouvrir" : "Terminer"}
                        </button>
                      </form>
                      <form action={changeStudySession}>
                        <input type="hidden" name="id" value={item.id} />
                        <input type="hidden" name="operation" value="delete" />
                        <button className="min-h-11 text-sm text-muted-foreground underline underline-offset-4">
                          Supprimer
                        </button>
                      </form>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 border border-border bg-card p-5 text-base text-muted-foreground">
                Votre semaine n’est pas encore planifiée. Ajoutez une première
                séance.
              </p>
            )}
          </section>

          <section
            className="mt-9 border border-border bg-card p-6 sm:p-8"
            aria-labelledby="add-heading"
          >
            <h2 id="add-heading" className="font-serif text-2xl text-primary">
              Planifier une séance
            </h2>
            <form
              action={addStudySession}
              className="mt-5 grid gap-4 md:grid-cols-[minmax(0,1fr)_12rem_auto] md:items-end"
            >
              <label className="block text-sm font-semibold text-primary">
                Ce que je vais travailler
                <input
                  name="title"
                  required
                  maxLength={120}
                  placeholder="Ex. Revoir les pourcentages"
                  className="mt-2 min-h-11 w-full border border-border bg-background px-3 text-base font-normal text-foreground"
                />
              </label>
              <label className="block text-sm font-semibold text-primary">
                Date
                <input
                  type="date"
                  name="scheduledOn"
                  required
                  defaultValue={today}
                  className="mt-2 min-h-11 w-full border border-border bg-background px-3 text-base font-normal text-foreground"
                />
              </label>
              <button className="min-h-11 bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary/90">
                Ajouter
              </button>
            </form>
            <p className="mt-4 text-sm text-muted-foreground">
              Besoin d’un support ?{" "}
              <Link
                href="/account/lecons"
                className="font-semibold text-primary underline underline-offset-4"
              >
                Consulter mes leçons accessibles
              </Link>
            </p>
          </section>
        </>
      )}
    </main>
  );
}

function GoalForm({
  goal,
}: {
  goal?: {
    examSlug: string;
    examDate: string | null;
    objective: string | null;
    sessionsPerWeek: number;
    sessionMinutes: number;
  };
}) {
  return (
    <form
      action={saveStudyGoal}
      className={
        goal
          ? "mt-5 grid gap-4 border-t border-primary-foreground/30 pt-5"
          : "mt-6 grid gap-5 border border-border bg-card p-6 sm:p-8"
      }
    >
      <label className="block text-sm font-semibold">
        Examen
        <select
          name="examSlug"
          defaultValue={goal?.examSlug ?? "psychometriques"}
          className="mt-2 min-h-11 w-full border border-border bg-background px-3 text-base font-normal text-foreground"
        >
          {publicPrograms.map((program) => (
            <option key={program.slug} value={program.slug}>
              {program.name}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm font-semibold">
        Date de l’examen <span className="font-normal">(facultatif)</span>
        <input
          type="date"
          name="examDate"
          defaultValue={goal?.examDate ?? ""}
          className="mt-2 min-h-11 w-full border border-border bg-background px-3 text-base font-normal text-foreground"
        />
      </label>
      <label className="block text-sm font-semibold">
        Mon objectif <span className="font-normal">(facultatif)</span>
        <input
          name="objective"
          maxLength={140}
          defaultValue={goal?.objective ?? ""}
          placeholder="Ex. Être prêt pour la partie quantitative"
          className="mt-2 min-h-11 w-full border border-border bg-background px-3 text-base font-normal text-foreground"
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold">
          Séances par semaine
          <input
            type="number"
            name="sessionsPerWeek"
            min={1}
            max={7}
            required
            defaultValue={goal?.sessionsPerWeek ?? 3}
            className="mt-2 min-h-11 w-full border border-border bg-background px-3 text-base font-normal text-foreground"
          />
        </label>
        <label className="block text-sm font-semibold">
          Minutes par séance
          <input
            type="number"
            name="sessionMinutes"
            min={15}
            max={180}
            step={5}
            required
            defaultValue={goal?.sessionMinutes ?? 30}
            className="mt-2 min-h-11 w-full border border-border bg-background px-3 text-base font-normal text-foreground"
          />
        </label>
      </div>
      <button className="min-h-11 bg-[#b58b52] px-5 font-semibold text-primary hover:bg-[#d6b476]">
        {goal ? "Enregistrer les changements" : "Créer mon objectif"}
      </button>
    </form>
  );
}
