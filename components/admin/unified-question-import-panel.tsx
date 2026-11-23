"use client";

import { useState } from "react";
import type { Exam } from "@/lib/question-import/unified-csv";
import {
  publicValidation,
  validateUnifiedCsv,
} from "@/lib/question-import/unified-csv";

type Validation = ReturnType<typeof publicValidation>;

export function UnifiedQuestionImportPanel() {
  const [files, setFiles] = useState<File[]>([]);
  const [exam, setExam] = useState<Exam | "">("");
  const [validation, setValidation] = useState<Validation | null>(null);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [serverValidated, setServerValidated] = useState(false);

  function reset() {
    setValidation(null);
    setServerValidated(false);
    setMessage("");
  }

  async function submit(mode: "validate" | "import") {
    if (busy || !files.length || (mode === "import" && !serverValidated))
      return;
    setBusy(true);
    setMessage("");
    try {
      if (
        files.length > 200 ||
        files.reduce((n, f) => n + f.size, 0) > 4_000_000
      )
        throw new Error("Sélectionnez au maximum 200 CSV et 4 Mo par lot.");
      const sources = await Promise.all(
        files.map(async (file) => {
          const bytes = await file.arrayBuffer();
          const signature = new Uint8Array(
            bytes,
            0,
            Math.min(bytes.byteLength, 4),
          );
          if (signature[0] === 80 && signature[1] === 75)
            throw new Error(
              `${file.name} est un classeur Numbers/Excel, pas un CSV. Exportez-le au format CSV UTF-8.`,
            );
          try {
            return {
              name: file.name,
              content: new TextDecoder("utf-8", { fatal: true }).decode(bytes),
            };
          } catch {
            throw new Error(
              `${file.name} : encodage invalide. Exportez-le au format CSV UTF-8.`,
            );
          }
        }),
      );
      const local = validateUnifiedCsv(sources, exam || undefined);
      setValidation(publicValidation(local));
      if (!local.valid) {
        setServerValidated(false);
        return;
      }
      const response = await fetch("/api/admin/question-import/unified", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sources, exam: exam || undefined, mode }),
      });
      const payload = await response.json();
      if (payload.validation) setValidation(payload.validation as Validation);
      if (!response.ok || !payload.ok) {
        setServerValidated(false);
        throw new Error(payload.message || "L’import a échoué.");
      }
      setServerValidated(mode === "validate");
      if (mode === "validate")
        setMessage("Validation serveur réussie. Vous pouvez importer ce lot.");
      else
        setMessage(
          `Import terminé : ${payload.result.created} questions créées, ${payload.result.updated} modifiées, ${payload.result.unchanged} inchangées, ${payload.result.passages} passages traités.`,
        );
    } catch (e) {
      setMessage(
        e instanceof Error ? e.message : "Impossible de lire les fichiers.",
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <section
      className="space-y-5 rounded-xl border p-6"
      aria-labelledby="unified-import-title"
    >
      <h2 id="unified-import-title" className="text-xl font-semibold">
        Importer des questions et des textes
      </h2>
      <p>
        Psychométriques, AMIRNET et YAELNET : sélectionnez vos CSV ensemble. Les
        formats sont reconnus automatiquement. Les nouveaux contenus restent en
        brouillon.
      </p>
      <label className="block">
        Examen
        <select
          disabled={busy}
          value={exam}
          onChange={(e) => {
            setExam(e.target.value as Exam | "");
            reset();
          }}
          className="ml-3 rounded border p-2"
        >
          <option value="">Détection automatique — lot mixte autorisé</option>
          <option value="psychometriques">Psychométriques</option>
          <option value="amirnet">AMIRNET</option>
          <option value="yaelnet">YAELNET</option>
        </select>
      </label>
      <div>
        <p className="text-sm font-semibold">Fichiers CSV — 200 fichiers et 4 Mo maximum par lot</p>
        <label className="mt-3 inline-block cursor-pointer">
        <input
          className="peer sr-only"
          type="file"
          accept=".csv,text/csv"
          multiple
          disabled={busy}
          onChange={(e) => {
            setFiles(Array.from(e.target.files ?? []));
            reset();
          }}
        />
          <span className="inline-flex min-h-11 items-center rounded-md border border-primary bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-primary peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
            Choisir des fichiers CSV
          </span>
        </label>
        <p className="mt-2 text-sm text-muted-foreground" role="status">{files.length} fichier(s) sélectionné(s).</p>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          disabled={busy || !files.length}
          onClick={() => void submit("validate")}
          className="rounded border px-4 py-2 disabled:opacity-50"
        >
          {busy ? "Traitement…" : "Vérifier le lot"}
        </button>
        <button
          type="button"
          disabled={busy || !serverValidated}
          onClick={() => void submit("import")}
          className="rounded bg-primary px-4 py-2 text-primary-foreground disabled:opacity-50"
        >
          Importer
        </button>
      </div>
      {validation && (
        <div className="space-y-3">
          <p>
            {validation.summary.rows} lignes · {validation.summary.questions}{" "}
            questions uniques · {validation.summary.passages} passages ·{" "}
            {validation.summary.duplicates} répétitions identiques fusionnées.
          </p>
          {validation.formats.length > 0 && (
            <details>
              <summary>Formats détectés</summary>
              <ul>
                {validation.formats.map((f) => (
                  <li key={f.file}>
                    {f.file} : {f.format}
                  </li>
                ))}
              </ul>
            </details>
          )}
          {validation.warnings.length > 0 && (
            <p>
              Le statut indiqué dans le CSV est conservé comme information
              source. L’import ne publie aucun nouveau contenu.
            </p>
          )}
          {validation.issues.length > 0 && (
            <div role="alert">
              <p>
                {validation.issueCount} erreur(s), premières erreurs affichées :
              </p>
              <ul className="list-disc pl-5">
                {validation.issues.map((e, i) => (
                  <li key={i}>
                    {e.file}, ligne {e.row}
                    {e.field ? `, ${e.field}` : ""} : {e.message}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {validation.missingPassages.length > 0 && (
            <div>
              <p>Textes à fournir dans le lot ou déjà présents en base :</p>
              <ul>
                {validation.missingPassages.slice(0, 30).map((p) => (
                  <li key={`${p.exam}:${p.externalId}`}>
                    {p.exam} : {p.externalId}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
      {message && (
        <p role="status" aria-live="polite">
          {message}
        </p>
      )}
    </section>
  );
}
