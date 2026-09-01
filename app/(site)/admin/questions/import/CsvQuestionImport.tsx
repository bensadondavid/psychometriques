"use client";

import { useRef, useState } from "react";

import styles from "./import.module.css";

type Issue = { row: number; field?: string; message: string };
type Preview = {
  idQuestion: string;
  chapterId: number;
  chapter: string;
  difficulty: number;
  statement: string;
  imagePath: string | null;
};
type ImportResult = {
  ok: boolean;
  message?: string;
  mode?: "validate" | "import";
  summary?: {
    total: number;
    valid: number;
    invalid: number;
    chapters: number;
    withImage: number;
  };
  preview?: Preview[];
  issues?: Issue[];
  imported?: { inserted: number; updated: number };
  expectedHeaders?: string[];
  program?: { slug: string; name: string };
};

type ProgramOption = { slug: string; name: string };

export function CsvQuestionImport({ programs }: { programs: ProgramOption[] }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [programSlug, setProgramSlug] = useState(
    programs.find((program) => program.slug === "psychometrique")?.slug ??
      programs[0]?.slug ??
      "",
  );
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<ImportResult | null>(null);
  const [busy, setBusy] = useState<"validate" | "import" | null>(null);

  async function submit(mode: "validate" | "import") {
    if (!file) return;
    setBusy(mode);
    if (mode === "validate") setResult(null);

    try {
      const body = new FormData();
      body.set("file", file);
      body.set("mode", mode);
      body.set("programSlug", programSlug);
      const response = await fetch("/api/admin/questions/import", {
        method: "POST",
        body,
      });
      const payload = (await response.json()) as ImportResult;
      setResult(payload);
    } catch {
      setResult({
        ok: false,
        message: "Impossible de joindre le serveur d’import.",
      });
    } finally {
      setBusy(null);
    }
  }

  function chooseFile(nextFile: File | null) {
    setFile(nextFile);
    setResult(null);
  }

  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>Administration · Questions</p>
        <h1>Importer un fichier CSV</h1>
        <p>
          Le fichier est d’abord contrôlé sans modifier la base. L’import
          devient disponible uniquement si toutes les lignes sont valides.
        </p>
      </section>

      <section className={styles.card}>
        <label className={styles.programField}>
          <span>Parcours de destination</span>
          <select
            value={programSlug}
            onChange={(event) => {
              setProgramSlug(event.target.value);
              setResult(null);
            }}
            disabled={busy !== null}
          >
            {programs.map((program) => (
              <option key={program.slug} value={program.slug}>
                {program.name}
              </option>
            ))}
          </select>
        </label>

        <div
          className={styles.dropzone}
          onClick={() => inputRef.current?.click()}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ")
              inputRef.current?.click();
          }}
          role="button"
          tabIndex={0}
        >
          <input
            ref={inputRef}
            className={styles.hiddenInput}
            type="file"
            accept=".csv,text/csv"
            onChange={(event) => chooseFile(event.target.files?.[0] ?? null)}
          />
          <span className={styles.fileIcon}>CSV</span>
          {file ? (
            <div>
              <strong>{file.name}</strong>
              <small>
                {(file.size / 1024).toFixed(1)} Ko · cliquer pour remplacer
              </small>
            </div>
          ) : (
            <div>
              <strong>Choisir le fichier de questions</strong>
              <small>
                Formats reconnus : 16 colonnes, ou 18 colonnes avec les images ·
                8 Mo maximum
              </small>
            </div>
          )}
        </div>

        <div className={styles.actions}>
          <button
            className={styles.secondary}
            disabled={!file || !programSlug || busy !== null}
            onClick={() => submit("validate")}
            type="button"
          >
            {busy === "validate" ? "Vérification…" : "Vérifier le fichier"}
          </button>
          <button
            className={styles.primary}
            disabled={
              !file ||
              !programSlug ||
              busy !== null ||
              !result?.ok ||
              result.mode !== "validate"
            }
            onClick={() => submit("import")}
            type="button"
          >
            {busy === "import" ? "Import en cours…" : "Importer dans la base"}
          </button>
        </div>
      </section>

      {result?.message && (
        <div className={styles.errorBanner}>{result.message}</div>
      )}

      {result?.summary && (
        <section className={styles.results} aria-live="polite">
          <div className={styles.metrics}>
            <Metric label="Lignes" value={result.summary.total} />
            <Metric
              label="Valides"
              value={result.summary.valid}
              good={result.summary.invalid === 0}
            />
            <Metric
              label="Erreurs"
              value={result.summary.invalid}
              bad={result.summary.invalid > 0}
            />
            <Metric label="Chapitres" value={result.summary.chapters} />
            <Metric label="Avec image" value={result.summary.withImage} />
          </div>

          {result.imported && (
            <div className={styles.successBanner}>
              Import {result.program ? `· ${result.program.name} ` : ""}
              terminé : <strong>{result.imported.inserted}</strong>{" "}
              question(s) ajoutée(s) et{" "}
              <strong>{result.imported.updated}</strong> mise(s) à jour.
            </div>
          )}

          {!!result.issues?.length && (
            <div className={styles.issuePanel}>
              <h2>Corrections nécessaires</h2>
              <ul>
                {result.issues.map((issue, index) => (
                  <li key={`${issue.row}-${issue.field ?? "row"}-${index}`}>
                    <strong>
                      Ligne {issue.row}
                      {issue.field ? ` · ${issue.field}` : ""}
                    </strong>
                    <span>{issue.message}</span>
                  </li>
                ))}
              </ul>
              {result.expectedHeaders && (
                <p className={styles.headersHint}>
                  En-têtes attendus :{" "}
                  <code>{result.expectedHeaders.join(",")}</code>
                </p>
              )}
            </div>
          )}

          {!!result.preview?.length && (
            <div className={styles.tableWrap}>
              <div className={styles.tableHeading}>
                <h2>Aperçu</h2>
                <span>{result.preview.length} ligne(s) valide(s)</span>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Chapitre</th>
                    <th>Niveau</th>
                    <th>Question</th>
                    <th>Image</th>
                  </tr>
                </thead>
                <tbody>
                  {result.preview.map((question) => (
                    <tr key={question.idQuestion}>
                      <td>
                        <code>{question.idQuestion}</code>
                      </td>
                      <td>
                        {question.chapterId}. {question.chapter}
                      </td>
                      <td>
                        <span className={styles.level}>
                          {question.difficulty}/5
                        </span>
                      </td>
                      <td>{question.statement}</td>
                      <td>
                        {question.imagePath ? (
                          <code>{question.imagePath}</code>
                        ) : (
                          "—"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}
    </main>
  );
}

function Metric({
  label,
  value,
  good,
  bad,
}: {
  label: string;
  value: number;
  good?: boolean;
  bad?: boolean;
}) {
  return (
    <div
      className={`${styles.metric} ${good ? styles.good : ""} ${bad ? styles.bad : ""}`}
    >
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
  );
}
