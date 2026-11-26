"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";

import { createDiscoveryDraft } from "@/app/(app)/account/admin/decouvertes/actions";
import {
  isDiscoveryBlueprintForExam,
  type DiscoveryBlueprintRow,
} from "@/lib/admin/discovery-blueprint";

type Domain = "VERBAL" | "QUANTITATIVE";
type Program = {
  slug: string;
  name: string;
  status: string;
  draftCount: number;
  chapters: {
    id: string;
    name: string;
    domain: Domain;
    courseName: string | null;
  }[];
  pool: {
    chapterId: string;
    domain: Domain;
    difficulty: number;
    count: number;
  }[];
};
type Row = {
  key: number;
  domain: Domain;
  difficulty: number;
  chapterId: string;
  count: string;
};

function startingRows(slug: string): Row[] {
  return slug === "psychometriques"
    ? [
        { key: 1, domain: "VERBAL", difficulty: 1, chapterId: "", count: "" },
        {
          key: 2,
          domain: "QUANTITATIVE",
          difficulty: 1,
          chapterId: "",
          count: "",
        },
      ]
    : [{ key: 1, domain: "VERBAL", difficulty: 1, chapterId: "", count: "" }];
}

function DrawButton({ valid }: { valid: boolean }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={!valid || pending}
      className="bg-primary px-5 py-3 font-medium text-primary-foreground disabled:opacity-50"
    >
      {pending
        ? "Tirage en cours…"
        : "Tirer les questions et créer le brouillon"}
    </button>
  );
}

export function DiscoveryBlueprintForm({
  programs,
  requestKey,
}: {
  programs: Program[];
  requestKey: string;
}) {
  const availablePrograms = programs.filter(
    (program) => program.status === "PUBLISHED",
  );
  const [exam, setExam] = useState(availablePrograms[0]?.slug ?? "");
  const [title, setTitle] = useState(
    availablePrograms[0] ? `Découverte ${availablePrograms[0].name}` : "",
  );
  const [rows, setRows] = useState<Row[]>(
    startingRows(availablePrograms[0]?.slug ?? ""),
  );
  const [nextKey, setNextKey] = useState(3);
  const [allowAnother, setAllowAnother] = useState(false);
  const program = availablePrograms.find((item) => item.slug === exam);

  function updateRow(key: number, change: Partial<Row>) {
    setRows((current) =>
      current.map((row) => (row.key === key ? { ...row, ...change } : row)),
    );
  }

  const total = rows.reduce((sum, row) => sum + (Number(row.count) || 0), 0);
  const availability = rows.map(
    (row) =>
      program?.pool
        .filter(
          (item) =>
            item.domain === row.domain &&
            item.difficulty === row.difficulty &&
            (!row.chapterId || item.chapterId === row.chapterId),
        )
        .reduce((sum, item) => sum + item.count, 0) ?? 0,
  );
  const parsedRows: DiscoveryBlueprintRow[] = rows.map(
    ({ domain, difficulty, chapterId, count }) => ({
      domain,
      difficulty,
      chapterId: chapterId || null,
      count: Number(count),
    }),
  );
  const valid = Boolean(
    program &&
    title.trim() &&
    total > 0 &&
    total <= 30 &&
    (program.draftCount === 0 || allowAnother) &&
    isDiscoveryBlueprintForExam(exam, parsedRows) &&
    rows.length <= 12 &&
    rows.every(
      (row, index) =>
        Number.isInteger(Number(row.count)) &&
        Number(row.count) >= 1 &&
        Number(row.count) <= availability[index],
    ),
  );

  return (
    <form
      action={createDiscoveryDraft}
      className="mt-8 space-y-6 border border-border bg-card p-5 sm:p-7"
    >
      <div>
        <h2 className="font-serif text-2xl text-primary">Définir la série</h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Fixez le nombre de questions par domaine, difficulté et, si besoin,
          thème. La plateforme en tire une sélection qui reste identique pour
          tous les visiteurs après publication. Seules les questions publiées
          sans figure sont disponibles dans ce lecteur.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium">
          Examen
          <select
            name="exam"
            value={exam}
            onChange={(event) => {
              const selected = availablePrograms.find(
                (item) => item.slug === event.target.value,
              );
              setExam(event.target.value);
              setTitle(selected ? `Découverte ${selected.name}` : "");
              setRows(startingRows(event.target.value));
              setNextKey(3);
              setAllowAnother(false);
            }}
            required
            className="w-full border border-border bg-background p-3"
          >
            {availablePrograms.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Titre
          <input
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
            maxLength={120}
            className="w-full border border-border bg-background p-3"
          />
        </label>
      </div>
      {!availablePrograms.length && (
        <p className="border border-border p-4 text-sm text-muted-foreground">
          Aucun examen publié n’est disponible pour composer une découverte.
        </p>
      )}
      {program && program.draftCount > 0 && (
        <div className="border border-amber-500/60 bg-amber-50 p-4 text-sm text-amber-950 dark:bg-amber-950 dark:text-amber-100">
          <p>
            {program.draftCount} brouillon(s) existent déjà pour {program.name}.
            Tu peux les relire plus bas.
          </p>
          <label className="mt-3 flex items-start gap-2">
            <input
              type="checkbox"
              name="anotherVersion"
              value="yes"
              checked={allowAnother}
              onChange={(event) => setAllowAnother(event.target.checked)}
              className="mt-1"
            />
            Créer volontairement une autre variante
          </label>
        </div>
      )}
      <div className="space-y-4">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h3 className="font-serif text-xl text-primary">
            Répartition des questions
          </h3>
          <p className="text-sm text-muted-foreground">
            {total} question(s) · maximum 30
          </p>
        </div>
        {rows.map((row, index) => (
          <fieldset key={row.key} className="border border-border p-4">
            <legend className="px-2 text-sm font-semibold">
              Groupe {index + 1}
            </legend>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <label className="grid gap-2 text-sm">
                Domaine
                <select
                  name="domain"
                  value={row.domain}
                  onChange={(event) =>
                    updateRow(row.key, {
                      domain: event.target.value as Domain,
                      chapterId: "",
                    })
                  }
                  className="w-full border border-border bg-background p-2.5"
                >
                  <option value="VERBAL">Verbal</option>
                  {exam === "psychometriques" && (
                    <option value="QUANTITATIVE">Quantitatif</option>
                  )}
                </select>
              </label>
              <label className="grid gap-2 text-sm">
                Difficulté
                <select
                  name="difficulty"
                  value={row.difficulty}
                  onChange={(event) =>
                    updateRow(row.key, {
                      difficulty: Number(event.target.value),
                    })
                  }
                  className="w-full border border-border bg-background p-2.5"
                >
                  {[1, 2, 3, 4, 5].map((level) => (
                    <option key={level} value={level}>
                      Niveau {level}
                    </option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm">
                Thème
                <select
                  name="chapterId"
                  value={row.chapterId}
                  onChange={(event) =>
                    updateRow(row.key, { chapterId: event.target.value })
                  }
                  className="w-full border border-border bg-background p-2.5"
                >
                  <option value="">Tous les thèmes</option>
                  {program?.chapters
                    .filter((chapter) => chapter.domain === row.domain)
                    .map((chapter) => (
                      <option key={chapter.id} value={chapter.id}>
                        {chapter.courseName ? `${chapter.courseName} · ` : ""}
                        {chapter.name}
                      </option>
                    ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm">
                Nombre
                <input
                  name="count"
                  type="number"
                  min={1}
                  max={30}
                  required
                  value={row.count}
                  onChange={(event) =>
                    updateRow(row.key, { count: event.target.value })
                  }
                  className="w-full border border-border bg-background p-2.5"
                />
              </label>
            </div>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm">
              <p
                className={
                  Number(row.count) > availability[index]
                    ? "text-destructive"
                    : "text-muted-foreground"
                }
              >
                {availability[index]} question(s) publiée(s) disponibles pour ce
                groupe.
              </p>
              {rows.length > 1 && (
                <button
                  type="button"
                  onClick={() =>
                    setRows((current) =>
                      current.filter((item) => item.key !== row.key),
                    )
                  }
                  className="text-destructive underline underline-offset-4"
                >
                  Retirer ce groupe
                </button>
              )}
            </div>
          </fieldset>
        ))}
        <button
          type="button"
          disabled={rows.length >= 12}
          onClick={() => {
            setRows((current) => [
              ...current,
              {
                key: nextKey,
                domain: "VERBAL",
                difficulty: 1,
                chapterId: "",
                count: "",
              },
            ]);
            setNextKey((key) => key + 1);
          }}
          className="border border-primary px-4 py-2 text-sm font-medium text-primary disabled:opacity-50"
        >
          Ajouter un groupe
        </button>
        {exam === "psychometriques" &&
          !isDiscoveryBlueprintForExam(exam, parsedRows) && (
            <p className="text-sm text-destructive">
              La découverte Psychométriques doit inclure au moins un groupe
              verbal et un groupe quantitatif.
            </p>
          )}
      </div>
      <input type="hidden" name="requestKey" value={requestKey} />
      <div className="border-t border-border pt-5">
        <p className="mb-4 text-sm font-medium text-primary">
          Composition demandée :{" "}
          {rows
            .map(
              (row, index) =>
                `groupe ${index + 1}, ${row.count || "0"} question(s) de niveau ${row.difficulty}`,
            )
            .join(" ; ")}{" "}
          · total {total}.
        </p>
        <DrawButton valid={valid} />
        <p className="mt-3 text-sm text-muted-foreground">
          La sélection reste en brouillon pour relecture. Elle ne sera visible
          des visiteurs qu’après une publication explicite.
        </p>
      </div>
    </form>
  );
}
