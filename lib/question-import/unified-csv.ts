import { QUANTITATIVE_CHAPTERS } from "./unified-chapters";

export type Exam = "psychometriques" | "amirnet" | "yaelnet";
export type Source = { name: string; content: string };
export type Issue = {
  file: string;
  row: number;
  field?: string;
  message: string;
};
type Origin = { file: string; row: number };
type Base = {
  exam: Exam;
  externalId: string;
  language: "fr" | "en" | "he";
  sourceStatus: "DRAFT" | "VALIDATED" | "PUBLISHED" | "ARCHIVED";
  sourceFile: string;
  sourceCreatedAt: string | null;
  sourceUpdatedAt: string | null;
};
export type Passage = Base & {
  kind: "passage";
  title: string;
  theme: string;
  text: string;
  wordCount: number;
  estimatedLines: number;
};
export type Question = Base & {
  kind: "question";
  domain: "VERBAL" | "QUANTITATIVE";
  type:
    "ANALOGY" | "VERBAL_REASONING" | "PASSAGE_COMPREHENSION" | "QUANTITATIVE";
  chapterExternalId: number;
  chapter: string;
  subTheme: string;
  difficulty: number;
  difficultyLabel: string;
  statement: string;
  choices: [string, string, string, string];
  correctChoice: number;
  explanation: string;
  passageExternalId: string | null;
  imagePath: string | null;
  imageAlt: string | null;
};
// Section and order are retained as draft exercise membership, never on Question.
export type Section = {
  exam: Exam;
  file: string;
  section: number;
  questions: { externalId: string; position: number }[];
};
export type Validation = ReturnType<typeof validateUnifiedCsv>;
export const MAX_BYTES = 4_000_000;
export const MAX_FILES = 200;
export const MAX_ROWS = 25_000;
const QUESTION_HEADERS = [
  "id_question",
  "id_chapitre",
  "chapitre",
  "sous_theme",
  "niveau_difficulte",
  "libelle_difficulte",
  "enonce",
  "choix_1",
  "choix_2",
  "choix_3",
  "choix_4",
  "bonne_reponse",
  "explication",
];
const LANGUAGE_HEADERS = [
  "id_question",
  "type_question",
  "section",
  "ordre_section",
  "niveau_difficulte",
  "sous_competence",
  "id_passage",
  "texte_passage",
  "enonce",
  "choix_1",
  "choix_2",
  "choix_3",
  "choix_4",
  "bonne_reponse",
  "explication",
];
const PASSAGE_HEADERS = [
  "id_passage",
  "titre_passage",
  "theme_passage",
  "texte_passage",
  "nombre_mots",
  "lignes_estimees",
];
const OPTIONAL = [
  "statut",
  "date_creation",
  "derniere_mise_a_jour",
  "image_path",
  "image_alt",
];
const LABELS = [
  "",
  "Très facile",
  "Facile",
  "Moyen",
  "Difficile",
  "Très difficile",
];
const LANGUAGE_TYPES = {
  sentence_completion: {
    id: 1,
    name: "Phrases à compléter",
    type: "VERBAL_REASONING",
  },
  restatement: { id: 2, name: "Reformulations", type: "VERBAL_REASONING" },
  reading_comprehension: {
    id: 3,
    name: "Compréhension de textes",
    type: "PASSAGE_COMPREHENSION",
  },
} as const;
const norm = (v: string) =>
  v
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
const SOURCE_STATUSES: Record<string, Base["sourceStatus"]> = {
  "a valider": "DRAFT", brouillon: "DRAFT", draft: "DRAFT",
  valide: "VALIDATED", validee: "VALIDATED", validated: "VALIDATED",
  publie: "PUBLISHED", publiee: "PUBLISHED", published: "PUBLISHED",
  archive: "ARCHIVED", archivee: "ARCHIVED", archived: "ARCHIVED",
};

/** Strict CSV reader: BOM, CRLF, embedded newlines, escaped quotes, comma/semicolon. */
export function parseCsv(source: string): { cells: string[]; row: number }[] {
  source = source.replace(/^\ufeff/, "");
  let quoted = false,
    commas = 0,
    semicolons = 0;
  for (let i = 0; i < source.length; i++) {
    const c = source[i];
    if (c === '"') {
      if (quoted && source[i + 1] === '"') i++;
      else quoted = !quoted;
    } else if (!quoted && /[\r\n]/.test(c)) break;
    else if (!quoted && c === ",") commas++;
    else if (!quoted && c === ";") semicolons++;
  }
  const delimiter = semicolons > commas ? ";" : ",";
  const result: { cells: string[]; row: number }[] = [];
  let cells: string[] = [],
    field = "",
    state: "start" | "plain" | "quoted" | "closed" = "start";
  let line = 1,
    startLine = 1;
  const endField = () => {
    cells.push(field);
    field = "";
    state = "start";
  };
  const endRow = () => {
    endField();
    if (cells.some((v) => v.trim())) result.push({ cells, row: startLine });
    if (result.length > MAX_ROWS + 1)
      throw new Error(`Maximum ${MAX_ROWS} lignes par fichier.`);
    cells = [];
  };
  for (let i = 0; i < source.length; i++) {
    const c = source[i];
    if (state === "quoted") {
      if (c === '"') {
        if (source[i + 1] === '"') {
          field += '"';
          i++;
        } else state = "closed";
      } else {
        field += c;
        if (c === "\n" || (c === "\r" && source[i + 1] !== "\n")) line++;
      }
    } else if (c === delimiter) endField();
    else if (c === "\r" || c === "\n") {
      endRow();
      if (c === "\r" && source[i + 1] === "\n") i++;
      line++;
      startLine = line;
    } else if (c === '"' && state === "start") state = "quoted";
    else {
      if (c === '"' || state === "closed")
        throw new Error(`Guillemets invalides à la ligne ${line}.`);
      field += c;
      state = "plain";
    }
  }
  if (state === "quoted")
    throw new Error(`Champ non refermé à partir de la ligne ${startLine}.`);
  if (field || cells.length || state === "closed") endRow();
  return result;
}

export function parseImportInput(
  value: unknown,
): { sources: Source[]; exam?: Exam; mode: "validate" | "import" } | null {
  if (!value || typeof value !== "object") return null;
  const v = value as Record<string, unknown>;
  if (
    v.exam !== undefined &&
    !["psychometriques", "amirnet", "yaelnet"].includes(String(v.exam))
  )
    return null;
  if (v.mode !== "validate" && v.mode !== "import") return null;
  if (
    !Array.isArray(v.sources) ||
    !v.sources.length ||
    v.sources.length > MAX_FILES
  )
    return null;
  const names = new Set<string>();
  let bytes = 0;
  for (const item of v.sources) {
    if (!item || typeof item !== "object") return null;
    const s = item as Source;
    if (
      typeof s.name !== "string" ||
      !/^[^\x00-\x1f\\/]{1,251}\.csv$/i.test(s.name) ||
      typeof s.content !== "string"
    )
      return null;
    if (names.has(s.name)) return null;
    names.add(s.name);
    bytes += new TextEncoder().encode(s.content).length;
    if (bytes > MAX_BYTES) return null;
  }
  return {
    sources: v.sources as Source[],
    exam: v.exam as Exam | undefined,
    mode: v.mode,
  };
}

export function validateUnifiedCsv(sources: Source[], selectedExam?: Exam) {
  const issues: Issue[] = [],
    warnings: Issue[] = [];
  const questions: Question[] = [],
    passages: Passage[] = [],
    sections = new Map<string, Section>();
  const seen = new Map<
    string,
    { record: Question | Passage; origin: Origin }
  >();
  const formats: { file: string; format: string }[] = [];
  const chapters = new Map<string, string>();
  let totalRows = 0,
    duplicateRows = 0;
  const add = (record: Question | Passage, origin: Origin) => {
    const key = `${record.exam}:${record.kind}:${record.externalId}`;
    const previous = seen.get(key);
    if (previous) {
      const comparable = (r: Question | Passage) =>
        JSON.stringify({ ...r, sourceFile: undefined });
      if (comparable(previous.record) !== comparable(record)) {
        issues.push({
          ...origin,
          field: "identifiant",
          message: `Contenu contradictoire avec ${previous.origin.file}, ligne ${previous.origin.row} (${record.externalId}).`,
        });
      } else {
        duplicateRows++;
      }
      return;
    }
    seen.set(key, { record, origin });
    if (record.kind === "question") questions.push(record);
    else passages.push(record);
  };
  const checked = parseImportInput({
    sources,
    exam: selectedExam,
    mode: "validate",
  });
  if (!checked)
    issues.push({
      file: "",
      row: 1,
      message: `Lot invalide : maximum ${MAX_FILES} CSV, 4 Mo UTF-8, noms uniques.`,
    });
  else
    for (const source of sources) {
      if (
        source.content.startsWith("PK\u0003\u0004") ||
        source.content.includes("\u0000") ||
        source.content.includes("\ufffd")
      ) {
        issues.push({
          file: source.name,
          row: 1,
          message:
            "Ce fichier n’est pas un CSV UTF-8 valide. Un classeur Numbers ou Excel doit être exporté au format CSV ; changer son extension ne suffit pas.",
        });
        continue;
      }
      let rows: ReturnType<typeof parseCsv>;
      try {
        rows = parseCsv(source.content);
      } catch (e) {
        issues.push({
          file: source.name,
          row: 1,
          message: (e as Error).message,
        });
        continue;
      }
      const headers = (rows.shift()?.cells ?? []).map((h) => h.trim());
      const hs = new Set(headers);
      const language = hs.has("type_question");
      const standalonePassage =
        hs.has("texte_passage") && !hs.has("id_question");
      const required = language
        ? LANGUAGE_HEADERS
        : standalonePassage
          ? PASSAGE_HEADERS
          : QUESTION_HEADERS;
      const allowed = new Set([
        ...required,
        ...OPTIONAL,
        ...(!language && !standalonePassage ? ["id_passage"] : []),
      ]);
      const missing = required.filter((h) => !hs.has(h));
      const unknown = headers.filter((h) => !allowed.has(h));
      if (missing.length || unknown.length || hs.size !== headers.length) {
        issues.push({
          file: source.name,
          row: 1,
          message: `En-têtes invalides. Manquants : ${missing.join(", ") || "aucun"}. Inconnus : ${unknown.join(", ") || "aucun"}. Les colonnes doivent être uniques.`,
        });
        continue;
      }
      if (!rows.length)
        issues.push({
          file: source.name,
          row: 1,
          message: "Le fichier ne contient aucune donnée.",
        });
      formats.push({
        file: source.name,
        format: language
          ? "langue"
          : standalonePassage
            ? "passages"
            : hs.has("id_passage")
              ? "questions-passages"
              : "questions",
      });
      if (hs.has("statut"))
        warnings.push({
          file: source.name,
          row: 1,
          field: "statut",
          message:
            "Statut source conservé séparément : les nouveaux contenus restent en brouillon.",
        });
      for (const { cells, row } of rows) {
        const origin = { file: source.name, row };
        if (++totalRows > MAX_ROWS) {
          issues.push({
            ...origin,
            message: `Maximum ${MAX_ROWS} lignes par lot.`,
          });
          break;
        }
        if (cells.length !== headers.length) {
          issues.push({
            ...origin,
            message: `${headers.length} colonnes attendues, ${cells.length} reçues.`,
          });
          continue;
        }
        const v = Object.fromEntries(
          headers.map((h, i) => [h, cells[i].trim()]),
        );
        const start = issues.length;
        const fail = (field: string, message: string) =>
          issues.push({ ...origin, field, message });
        const need = (field: string) => {
          if (!v[field]) fail(field, "Champ obligatoire.");
          return v[field] ?? "";
        };
        const integer = (field: string, max = 2_147_483_647) => {
          const value = Number(v[field]);
          if (
            !/^\d+$/.test(v[field] ?? "") ||
            !Number.isSafeInteger(value) ||
            value < 1 ||
            value > max
          )
            fail(field, `Entier de 1 à ${max} attendu.`);
          return value;
        };
        const externalId = need(
          standalonePassage ? "id_passage" : "id_question",
        );
        if (externalId.length > 191 || /[\u0000-\u001f]/u.test(externalId))
          fail(
            standalonePassage ? "id_passage" : "id_question",
            "Identifiant limité à 191 caractères, sans caractères de contrôle.",
          );
        if (externalId.length > 191)
          fail("identifiant", "Maximum 191 caractères.");
        const inferred = /^AMIRNET/i.test(externalId)
          ? "amirnet"
          : /^YAELNET/i.test(externalId)
            ? "yaelnet"
            : null;
        const exam = language ? (selectedExam ?? inferred) : "psychometriques";
        if (
          !exam ||
          (language &&
            (exam === "psychometriques" || (inferred && exam !== inferred))) ||
          (!language && selectedExam && selectedExam !== exam)
        ) {
          fail(
            "examen",
            "Examen absent ou incompatible avec le format et l’identifiant. Sélectionnez le bon examen.",
          );
          continue;
        }
        const date = (key: string) => {
          if (!v[key]) return null;
          const s = v[key],
            d = new Date(s.length === 10 ? `${s}T00:00:00Z` : s);
          if (
            !/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2}))?$/.test(
              s,
            ) ||
            Number.isNaN(d.getTime()) ||
            new Date(`${s.slice(0, 10)}T00:00:00Z`)
              .toISOString()
              .slice(0, 10) !== s.slice(0, 10)
          ) {
            fail(key, "Date ISO invalide.");
            return null;
          }
          return d.toISOString();
        };
        const sourceCreatedAt = date("date_creation"),
          sourceUpdatedAt = date("derniere_mise_a_jour");
        const sourceStatus = v.statut
          ? SOURCE_STATUSES[norm(v.statut).replace(/[_-]+/g, " ")]
          : "DRAFT";
        if (!sourceStatus) fail("statut", "Statut source inconnu.");
        if (
          sourceCreatedAt &&
          sourceUpdatedAt &&
          sourceUpdatedAt < sourceCreatedAt
        )
          fail("derniere_mise_a_jour", "La modification précède la création.");
        const base: Base = {
          exam,
          externalId,
          language:
            exam === "amirnet" ? "en" : exam === "yaelnet" ? "he" : "fr",
          sourceStatus: sourceStatus ?? "DRAFT",
          sourceFile: source.name,
          sourceCreatedAt,
          sourceUpdatedAt,
        };
        if (standalonePassage) {
          const record: Passage = {
            ...base,
            kind: "passage",
            title: need("titre_passage"),
            theme: need("theme_passage"),
            text: need("texte_passage"),
            wordCount: integer("nombre_mots"),
            estimatedLines: integer("lignes_estimees"),
          };
          if (issues.length === start) add(record, origin);
          continue;
        }
        const type =
          language && Object.hasOwn(LANGUAGE_TYPES, v.type_question)
            ? LANGUAGE_TYPES[v.type_question as keyof typeof LANGUAGE_TYPES]
            : undefined;
        if (language && !type)
          fail(
            "type_question",
            "Type attendu : sentence_completion, restatement ou reading_comprehension.",
          );
        const chapterExternalId = language
          ? (type?.id ?? 0)
          : integer("id_chapitre", 21);
        const chapter = language ? (type?.name ?? "") : need("chapitre");
        const isQuantitative =
          !language &&
          norm(chapter) ===
            norm(QUANTITATIVE_CHAPTERS[chapterExternalId] ?? "");
        const verbal = {
          1: "Analogies",
          2: "Compréhension et déduction",
          3: "Compréhension de textes",
        } as Record<number, string>;
        if (
          !language &&
          !isQuantitative &&
          norm(chapter) !== norm(verbal[chapterExternalId] ?? "")
        )
          fail("chapitre", "Nom et identifiant de chapitre incompatibles.");
        const domain = isQuantitative ? "QUANTITATIVE" : "VERBAL";
        const chapterKey = `${exam}:${domain}:${chapterExternalId}`;
        if (chapters.has(chapterKey) && chapters.get(chapterKey) !== chapter)
          fail(
            "chapitre",
            "Noms contradictoires pour ce chapitre dans le lot.",
          );
        chapters.set(chapterKey, chapter);
        const difficulty = integer("niveau_difficulte", 5);
        const difficultyLabel =
          v.libelle_difficulte || LABELS[difficulty] || "";
        const acceptedLabels =
          difficulty === 3
            ? ["moyen", "moyenne", "intermediaire"]
            : [norm(LABELS[difficulty] ?? "")];
        if (
          v.libelle_difficulte &&
          !acceptedLabels.includes(norm(v.libelle_difficulte))
        )
          fail(
            "libelle_difficulte",
            "Libellé incompatible avec la difficulté.",
          );
        const choices = [1, 2, 3, 4].map((i) =>
          need(`choix_${i}`),
        ) as Question["choices"];
        if (
          new Set(choices.map((s) => s.normalize("NFC").trim().toLowerCase()))
            .size !== 4
        )
          fail("choix", "Les quatre choix doivent être différents.");
        const correctChoice = integer("bonne_reponse", 4);
        const passageExternalId = v.id_passage || null;
        const isReading = language
          ? v.type_question === "reading_comprehension"
          : !isQuantitative && chapterExternalId === 3;
        if (isReading && !passageExternalId)
          fail(
            "id_passage",
            "Passage obligatoire pour une question de compréhension de texte.",
          );
        if (!isReading && (passageExternalId || v.texte_passage))
          fail("id_passage", "Passage inattendu pour ce type de question.");
        if (passageExternalId && passageExternalId.length > 191)
          fail("id_passage", "Maximum 191 caractères.");
        const imagePath = v.image_path || null,
          imageAlt = v.image_alt || null;
        if (
          imagePath &&
          (!/^[\p{L}\p{N}_./ -]+\.svg$/iu.test(imagePath) ||
            imagePath.startsWith("/") ||
            imagePath.split("/").some((s) => !s || s === "." || s === ".."))
        )
          fail(
            "image_path",
            "Chemin SVG relatif sans traversée de dossier attendu.",
          );
        if (Boolean(imagePath) !== Boolean(imageAlt))
          fail(
            "image_alt",
            "Chemin et texte alternatif à renseigner ensemble.",
          );
        const question: Question = {
          ...base,
          kind: "question",
          domain,
          type: language
            ? (type?.type ?? "VERBAL_REASONING")
            : isQuantitative
              ? "QUANTITATIVE"
              : chapterExternalId === 1
                ? "ANALOGY"
                : isReading
                  ? "PASSAGE_COMPREHENSION"
                  : "VERBAL_REASONING",
          chapterExternalId,
          chapter,
          subTheme: need(language ? "sous_competence" : "sous_theme"),
          difficulty,
          difficultyLabel,
          statement: need("enonce"),
          choices,
          correctChoice,
          explanation: need("explication"),
          passageExternalId,
          imagePath,
          imageAlt,
        };
        let section = 0,
          position = 0;
        if (language) {
          section = integer("section");
          position = integer("ordre_section");
        }
        if (issues.length !== start) continue;
        if (language && isReading) {
          const text = v.texte_passage;
          if (text)
            add(
              {
                ...base,
                externalId: passageExternalId!,
                kind: "passage",
                title: passageExternalId!,
                theme: "Compréhension de textes",
                text,
                wordCount: text.split(/\s+/u).length,
                estimatedLines: Math.max(1, Math.ceil(text.length / 80)),
              },
              origin,
            );
        }
        add(question, origin);
        if (language) {
          const key = `${exam}:${source.name}:${section}`;
          const group = sections.get(key) ?? {
            exam,
            file: source.name,
            section,
            questions: [],
          };
          if (
            group.questions.some(
              (q) => q.position === position || q.externalId === externalId,
            )
          )
            fail(
              "ordre_section",
              "Position ou question dupliquée dans la section.",
            );
          group.questions.push({ externalId, position });
          sections.set(key, group);
        }
      }
      if (totalRows > MAX_ROWS) break;
    }
  const missingPassages = [
    ...new Map(
      questions
        .filter(
          (q) =>
            q.passageExternalId &&
            !seen.has(`${q.exam}:passage:${q.passageExternalId}`),
        )
        .map((q) => [
          `${q.exam}:${q.passageExternalId}`,
          { exam: q.exam, externalId: q.passageExternalId! },
        ]),
    ).values(),
  ];
  return {
    valid: issues.length === 0,
    issues,
    warnings,
    formats,
    questions,
    passages,
    sections: [...sections.values()],
    missingPassages,
    summary: {
      files: sources.length,
      rows: totalRows,
      questions: questions.length,
      passages: passages.length,
      duplicates: duplicateRows,
    },
  };
}

export function publicValidation(v: Validation) {
  return {
    valid: v.valid,
    issues: v.issues.slice(0, 200),
    issueCount: v.issues.length,
    warnings: v.warnings,
    formats: v.formats,
    missingPassages: v.missingPassages,
    summary: v.summary,
  };
}
