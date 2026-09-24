"use client";

import { useState, type InputHTMLAttributes } from "react";
import {
  BookOpenText,
  Braces,
  Database,
  FileCheck2,
  FileQuestion,
  FileText,
  ImageIcon,
  LoaderCircle,
  Upload,
} from "lucide-react";

import {
  getExpectedHeaders,
  validateVerbalCsvBatch,
  type QuestionImportKind,
  type VerbalCsvValidation,
} from "@/lib/question-import/psychometric-csv-contract";
import {
  canonicalizeFigurePath,
  validateSvgBatch,
  type SvgIssue,
} from "@/lib/question-import/svg-contract";

type ImportDefinition = {
  kind: QuestionImportKind;
  title: string;
  description: string;
  fileHint: string;
  multiple: boolean;
  domain: "Réflexion verbale" | "Réflexion quantitative";
  icon: typeof FileText;
};

const VERBAL_IMPORTS: ImportDefinition[] = [
  {
    kind: "analogies",
    title: "Analogies",
    description: "Questions autonomes du chapitre 1 avec quatre propositions.",
    fileHint: "analogies-*.csv",
    multiple: false,
    domain: "Réflexion verbale",
    icon: Braces,
  },
  {
    kind: "comprehension-deduction",
    title: "Compréhension et déduction",
    description: "Questions autonomes du chapitre 2, sans texte associé.",
    fileHint: "questions-reflexion-verbale-*.csv",
    multiple: false,
    domain: "Réflexion verbale",
    icon: FileQuestion,
  },
  {
    kind: "passages",
    title: "Passages",
    description: "Textes sources importés par lots avant leurs questions.",
    fileHint: "passages-verbal-*.csv",
    multiple: true,
    domain: "Réflexion verbale",
    icon: BookOpenText,
  },
  {
    kind: "passage-questions",
    title: "Questions sur passages",
    description:
      "Questions du chapitre 3 reliées par leur identifiant de passage.",
    fileHint: "questions-verbal-passages-*.csv",
    multiple: true,
    domain: "Réflexion verbale",
    icon: FileText,
  },
];

const QUANTITATIVE_IMPORT: ImportDefinition = {
  kind: "quantitative",
  title: "Questions quantitatives",
  description:
    "Importe uniquement les questions des 21 chapitres. Les figures se chargent séparément.",
  fileHint: "serie-*.csv",
  multiple: true,
  domain: "Réflexion quantitative",
  icon: Braces,
};

type Feedback = { tone: "success" | "error"; message: string } | null;
type CardState = {
  files: File[];
  validating: boolean;
  importing: boolean;
  result: VerbalCsvValidation | null;
  feedback: Feedback;
};

const EMPTY_STATE: CardState = {
  files: [],
  validating: false,
  importing: false,
  result: null,
  feedback: null,
};

async function readCsvFiles(files: File[]) {
  return Promise.all(
    files.map(async (file) => ({
      name: file.name,
      content: await file.text(),
    })),
  );
}

function ImportCard({ definition }: { definition: ImportDefinition }) {
  const [state, setState] = useState<CardState>(EMPTY_STATE);
  const Icon = definition.icon;
  const inputId = `question-import-${definition.kind}`;

  function selectFiles(files: FileList | null) {
    setState({ ...EMPTY_STATE, files: files ? Array.from(files) : [] });
  }

  async function validateFiles() {
    if (state.files.length === 0) return;
    setState((current) => ({
      ...current,
      validating: true,
      result: null,
      feedback: null,
    }));
    try {
      const result = validateVerbalCsvBatch(
        definition.kind,
        await readCsvFiles(state.files),
      );
      setState((current) => ({ ...current, validating: false, result }));
    } catch {
      setState((current) => ({
        ...current,
        validating: false,
        feedback: {
          tone: "error",
          message: "Impossible de lire le fichier sélectionné.",
        },
      }));
    }
  }

  async function importFiles() {
    if (!state.result?.valid || state.importing) return;
    setState((current) => ({ ...current, importing: true, feedback: null }));
    try {
      const response = await fetch("/api/admin/question-import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: definition.kind,
          sources: await readCsvFiles(state.files),
        }),
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        message?: string;
        imported?: number;
        created?: number;
        updated?: number;
      };
      if (!response.ok || !payload.ok)
        throw new Error(payload.message || "L’import a échoué.");
      setState((current) => ({
        ...current,
        importing: false,
        feedback: {
          tone: "success",
          message: `${payload.imported ?? 0} élément(s) importé(s) : ${payload.created ?? 0} créé(s), ${payload.updated ?? 0} mis à jour.`,
        },
      }));
    } catch (error) {
      setState((current) => ({
        ...current,
        importing: false,
        feedback: {
          tone: "error",
          message:
            error instanceof Error ? error.message : "L’import a échoué.",
        },
      }));
    }
  }

  return (
    <article className="flex min-h-[30rem] flex-col border border-border bg-card p-5 shadow-[0_20px_55px_-45px_rgba(69,18,29,0.45)] sm:p-6">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9b7a48]">
            {definition.domain}
          </p>
          <h2 className="mt-2 font-serif text-2xl text-primary">
            {definition.title}
          </h2>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#f5f0e7] text-primary">
          <Icon aria-hidden="true" className="size-5" />
        </span>
      </div>
      <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">
        {definition.description}
      </p>

      <div className="mt-5 border border-dashed border-[#cbbd9f] bg-[#fcfaf5] p-4">
        <label htmlFor={inputId} className="block cursor-pointer">
          <span className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Upload aria-hidden="true" className="size-4" />
            {definition.multiple
              ? "Choisir un ou plusieurs CSV"
              : "Choisir le CSV"}
          </span>
          <span className="mt-1 block text-xs text-muted-foreground">
            Format attendu : {definition.fileHint}
          </span>
        </label>
        <input
          id={inputId}
          type="file"
          accept=".csv,text/csv"
          multiple={definition.multiple}
          onChange={(event) => selectFiles(event.target.files)}
          className="mt-4 block w-full text-xs text-muted-foreground file:mr-3 file:border-0 file:bg-primary file:px-3 file:py-2 file:text-xs file:font-semibold file:text-primary-foreground hover:file:bg-primary/90"
        />
      </div>
      <FileList files={state.files} emptyLabel="Aucun fichier sélectionné." />

      <ActionButton
        onClick={validateFiles}
        disabled={
          state.files.length === 0 || state.validating || state.importing
        }
        loading={state.validating}
        label="Valider avant import"
        loadingLabel="Validation…"
        icon="validate"
      />
      {state.result ? <ValidationResult result={state.result} /> : null}
      {state.result?.valid ? (
        <ActionButton
          onClick={importFiles}
          disabled={state.importing}
          loading={state.importing}
          label="Importer en base"
          loadingLabel="Import en base…"
          icon="database"
          secondary
        />
      ) : null}
      <FeedbackMessage feedback={state.feedback} />

      <details className="mt-auto pt-5 text-xs text-muted-foreground">
        <summary className="cursor-pointer font-medium text-foreground">
          Voir les {getExpectedHeaders(definition.kind).length} colonnes
          attendues
        </summary>
        <p className="mt-2 break-words leading-5">
          {getExpectedHeaders(definition.kind).join(", ")}
        </p>
      </details>
    </article>
  );
}

function ActionButton({
  onClick,
  disabled,
  loading,
  label,
  loadingLabel,
  icon,
  secondary = false,
}: {
  onClick: () => void;
  disabled: boolean;
  loading: boolean;
  label: string;
  loadingLabel: string;
  icon: "validate" | "database";
  secondary?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`mt-3 inline-flex min-h-10 items-center justify-center gap-2 px-4 py-2 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 ${secondary ? "border border-primary bg-white text-primary hover:bg-[#f5f0e7]" : "bg-primary text-primary-foreground hover:opacity-90"}`}
    >
      {loading ? (
        <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
      ) : icon === "database" ? (
        <Database aria-hidden="true" className="size-4" />
      ) : (
        <FileCheck2 aria-hidden="true" className="size-4" />
      )}
      {loading ? loadingLabel : label}
    </button>
  );
}

function ValidationResult({ result }: { result: VerbalCsvValidation }) {
  return (
    <div
      className={`mt-5 border p-4 ${result.valid ? "border-emerald-700/25 bg-emerald-50 text-emerald-950" : "border-destructive/25 bg-destructive/5 text-foreground"}`}
      aria-live="polite"
    >
      <p className="text-sm font-semibold">
        {result.valid ? "Lot prêt pour l’import" : "Corrections nécessaires"}
      </p>
      <p className="mt-1 text-xs leading-5">
        {result.summary.valid.toLocaleString("fr-FR")} ligne(s) valide(s) sur{" "}
        {result.summary.total.toLocaleString("fr-FR")} dans{" "}
        {result.summary.files} fichier(s).
      </p>
      {result.assetPaths.length > 0 ? (
        <p className="mt-2 text-xs leading-5">
          {result.assetPaths.length.toLocaleString("fr-FR")} chemin(s) de figure
          référencé(s). Les SVG s’importent séparément et ne bloquent pas les
          questions.
        </p>
      ) : null}
      {result.issues.length > 0 ? <IssueList issues={result.issues} /> : null}
      {result.preview.length > 0 ? (
        <div className="mt-3 border-t border-current/10 pt-3">
          <p className="text-xs font-semibold uppercase tracking-[0.14em]">
            Aperçu
          </p>
          <ul className="mt-2 space-y-2 text-xs">
            {result.preview.slice(0, 3).map((record) => (
              <li key={record.id} className="min-w-0">
                <span className="font-semibold">{record.id}</span>
                <span className="block truncate">{record.label}</span>
                <span className="block truncate opacity-70">
                  {record.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function IssueList({
  issues,
}: {
  issues: Array<{
    file: string;
    row?: number;
    field?: string;
    message: string;
  }>;
}) {
  return (
    <ul className="mt-3 max-h-36 space-y-2 overflow-auto border-t border-current/10 pt-3 text-xs leading-5">
      {issues.slice(0, 50).map((issue, index) => (
        <li
          key={`${issue.file}-${issue.row ?? 0}-${issue.field ?? "row"}-${index}`}
        >
          <span className="font-semibold">
            {issue.file || "Fichier"}
            {issue.row ? `, ligne ${issue.row}` : ""}
          </span>
          {issue.field ? ` · ${issue.field}` : ""} : {issue.message}
        </li>
      ))}
      {issues.length > 50 ? (
        <li className="font-semibold">
          {issues.length - 50} autre(s) erreur(s).
        </li>
      ) : null}
    </ul>
  );
}

function FileList({
  files,
  emptyLabel,
}: {
  files: File[];
  emptyLabel: string;
}) {
  return (
    <div className="mt-4 min-h-14 text-xs text-muted-foreground">
      {files.length > 0 ? (
        <ul className="space-y-1" aria-label="Fichiers sélectionnés">
          {files.slice(0, 8).map((file) => (
            <li
              key={`${file.webkitRelativePath}-${file.name}-${file.lastModified}`}
              className="truncate"
            >
              {file.webkitRelativePath || file.name} ·{" "}
              {(file.size / 1024).toLocaleString("fr-FR", {
                maximumFractionDigits: 1,
              })}{" "}
              Ko
            </li>
          ))}
          {files.length > 8 ? (
            <li>{files.length - 8} autre(s) fichier(s).</li>
          ) : null}
        </ul>
      ) : (
        <p>{emptyLabel}</p>
      )}
    </div>
  );
}

function FeedbackMessage({ feedback }: { feedback: Feedback }) {
  if (!feedback) return null;
  return (
    <p
      className={`mt-3 border p-3 text-xs leading-5 ${feedback.tone === "success" ? "border-emerald-700/25 bg-emerald-50 text-emerald-950" : "border-destructive/25 bg-destructive/5 text-destructive"}`}
      role={feedback.tone === "error" ? "alert" : "status"}
    >
      {feedback.message}
    </p>
  );
}

type FigureState = {
  files: File[];
  validating: boolean;
  importing: boolean;
  issues: SvgIssue[];
  validated: boolean;
  feedback: Feedback;
};
const EMPTY_FIGURE_STATE: FigureState = {
  files: [],
  validating: false,
  importing: false,
  issues: [],
  validated: false,
  feedback: null,
};
const DIRECTORY_INPUT_PROPS = {
  webkitdirectory: "",
  directory: "",
} as InputHTMLAttributes<HTMLInputElement>;

async function readSvgFiles(files: File[]) {
  return Promise.all(
    files.map(async (file) => ({
      name: file.name,
      path: canonicalizeFigurePath(file.name, file.webkitRelativePath),
      content: await file.text(),
    })),
  );
}

function FigureImportCard() {
  const [state, setState] = useState<FigureState>(EMPTY_FIGURE_STATE);
  function selectFiles(files: FileList | null) {
    setState({
      ...EMPTY_FIGURE_STATE,
      files: files
        ? Array.from(files).filter((file) => /\.svg$/i.test(file.name))
        : [],
    });
  }
  async function validateFiles() {
    if (state.files.length === 0) return;
    setState((current) => ({ ...current, validating: true, feedback: null }));
    const validation = validateSvgBatch(await readSvgFiles(state.files));
    setState((current) => ({
      ...current,
      validating: false,
      issues: validation.issues,
      validated: validation.valid,
    }));
  }
  async function importFiles() {
    if (!state.validated || state.importing) return;
    setState((current) => ({ ...current, importing: true, feedback: null }));
    try {
      const response = await fetch("/api/admin/question-import/figures", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ figures: await readSvgFiles(state.files) }),
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        message?: string;
        imported?: number;
        created?: number;
        updated?: number;
      };
      if (!response.ok || !payload.ok)
        throw new Error(payload.message || "L’import a échoué.");
      setState((current) => ({
        ...current,
        importing: false,
        feedback: {
          tone: "success",
          message: `${payload.imported ?? 0} figure(s) importée(s) : ${payload.created ?? 0} créée(s), ${payload.updated ?? 0} mise(s) à jour.`,
        },
      }));
    } catch (error) {
      setState((current) => ({
        ...current,
        importing: false,
        feedback: {
          tone: "error",
          message:
            error instanceof Error ? error.message : "L’import a échoué.",
        },
      }));
    }
  }
  return (
    <article className="flex min-h-[30rem] flex-col border border-border bg-card p-5 shadow-[0_20px_55px_-45px_rgba(69,18,29,0.45)] sm:p-6">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9b7a48]">
            Ressources séparées
          </p>
          <h2 className="mt-2 font-serif text-2xl text-primary">
            Figures SVG quantitatives
          </h2>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#f5f0e7] text-primary">
          <ImageIcon aria-hidden="true" className="size-5" />
        </span>
      </div>
      <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">
        Importe les figures indépendamment. Choisissez le dossier pour conserver
        les chemins du type figures/ch19/pol-fig-08.svg.
      </p>
      <div className="mt-5 border border-dashed border-[#cbbd9f] bg-[#fcfaf5] p-4">
        <label
          htmlFor="figure-folder-import"
          className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-primary"
        >
          <Upload aria-hidden="true" className="size-4" />
          Choisir le dossier de figures
        </label>
        <input
          {...DIRECTORY_INPUT_PROPS}
          id="figure-folder-import"
          type="file"
          accept=".svg,image/svg+xml"
          multiple
          onChange={(event) => selectFiles(event.target.files)}
          className="mt-4 block w-full text-xs text-muted-foreground file:mr-3 file:border-0 file:bg-primary file:px-3 file:py-2 file:text-xs file:font-semibold file:text-primary-foreground hover:file:bg-primary/90"
        />
        <p className="mt-3 text-xs leading-5 text-muted-foreground">
          Les fichiers SVG sont enregistrés séparément des questions.
        </p>
      </div>
      <FileList files={state.files} emptyLabel="Aucune figure sélectionnée." />
      <ActionButton
        onClick={validateFiles}
        disabled={
          state.files.length === 0 || state.validating || state.importing
        }
        loading={state.validating}
        label="Valider les SVG"
        loadingLabel="Validation…"
        icon="validate"
      />
      {state.validated ? (
        <p className="mt-4 border border-emerald-700/25 bg-emerald-50 p-4 text-sm font-semibold text-emerald-950">
          {state.files.length.toLocaleString("fr-FR")} figure(s) prête(s) pour
          l’import.
        </p>
      ) : null}
      {state.issues.length > 0 ? <IssueList issues={state.issues} /> : null}
      {state.validated ? (
        <ActionButton
          onClick={importFiles}
          disabled={state.importing}
          loading={state.importing}
          label="Importer les figures en base"
          loadingLabel="Import en base…"
          icon="database"
          secondary
        />
      ) : null}
      <FeedbackMessage feedback={state.feedback} />
    </article>
  );
}

export function QuestionImportPanel() {
  return (
    <div className="mt-8">
      <section aria-labelledby="verbal-import-title">
        <div className="flex items-end justify-between gap-6 border-b border-border pb-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9b7a48]">
              Types reconnus
            </p>
            <h2
              id="verbal-import-title"
              className="mt-2 font-serif text-3xl text-primary"
            >
              Importer la réflexion verbale
            </h2>
          </div>
          <p className="hidden max-w-sm text-right text-xs leading-5 text-muted-foreground md:block">
            Chaque lot est validé dans le navigateur puis à nouveau par le
            serveur avant l’écriture transactionnelle.
          </p>
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          {VERBAL_IMPORTS.map((definition) => (
            <ImportCard key={definition.kind} definition={definition} />
          ))}
        </div>
      </section>
      <section aria-labelledby="quantitative-import-title" className="mt-12">
        <div className="border-b border-border pb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9b7a48]">
            Deux imports indépendants
          </p>
          <h2
            id="quantitative-import-title"
            className="mt-2 font-serif text-3xl text-primary"
          >
            Réflexion quantitative
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
            Les questions CSV et les figures SVG sont importées séparément. Vous
            pouvez les charger dans l’ordre que vous voulez.
          </p>
        </div>
        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <ImportCard definition={QUANTITATIVE_IMPORT} />
          <FigureImportCard />
        </div>
      </section>
    </div>
  );
}
