export type QuestionStatusValue = "DRAFT" | "VALIDATED" | "ARCHIVED";

export type CsvQuestion = {
  idQuestion: string;
  chapterId: number;
  chapter: string;
  subTheme: string;
  difficulty: number;
  difficultyLabel: string;
  choices: [string, string, string, string];
  statement: string;
  correctChoice: number;
  explanation: string;
  status: QuestionStatusValue;
  sourceCreatedAt: Date;
  sourceUpdatedAt: Date;
  imagePath: string | null;
  imageAlt: string | null;
};

export type CsvIssue = {
  row: number;
  field?: string;
  message: string;
};

const HEADER_ALIASES = [
  ["id_question"],
  ["chapitre_id", "id_chapitre"],
  ["chapitre", "nom_chapitre"],
  ["sous_theme"],
  ["niveau_difficulte", "difficulte"],
  ["libelle_difficulte", "difficulte_libelle"],
  ["enonce", "question"],
  ["choix_1", "reponse_1"],
  ["choix_2", "reponse_2"],
  ["choix_3", "reponse_3"],
  ["choix_4", "reponse_4"],
  ["bonne_reponse"],
  ["explication"],
  ["statut"],
  ["date_creation", "cree_le", "created_at"],
  ["derniere_mise_a_jour", "date_modification", "modifie_le", "updated_at"],
] as const;

const IMAGE_HEADERS = [["image_path"], ["image_alt"]] as const;
const EXPECTED_HEADERS = HEADER_ALIASES.map(([header]) => header);

const DIFFICULTY_LABELS: Record<number, string[]> = {
  1: ["tres facile"],
  2: ["facile"],
  3: ["moyen", "moyenne", "intermediaire"],
  4: ["difficile"],
  5: ["tres difficile"],
};

const STATUS_ALIASES: Record<string, QuestionStatusValue> = {
  draft: "DRAFT",
  brouillon: "DRAFT",
  validated: "VALIDATED",
  valide: "VALIDATED",
  validee: "VALIDATED",
  archived: "ARCHIVED",
  archive: "ARCHIVED",
  archivee: "ARCHIVED",
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase();
}

function detectDelimiter(source: string) {
  let quoted = false;
  let commas = 0;
  let semicolons = 0;

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    if (character === '"') {
      if (quoted && source[index + 1] === '"') index += 1;
      else quoted = !quoted;
    } else if (!quoted && (character === "\n" || character === "\r")) {
      break;
    } else if (!quoted && character === ",") commas += 1;
    else if (!quoted && character === ";") semicolons += 1;
  }

  return semicolons > commas ? ";" : ",";
}

function parseCsv(source: string, delimiter: string) {
  const records: string[][] = [];
  let record: string[] = [];
  let field = "";
  let quoted = false;

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];

    if (quoted) {
      if (character === '"' && source[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (character === '"') {
        quoted = false;
      } else {
        field += character;
      }
      continue;
    }

    if (character === '"' && field.length === 0) quoted = true;
    else if (character === delimiter) {
      record.push(field);
      field = "";
    } else if (character === "\n" || character === "\r") {
      if (character === "\r" && source[index + 1] === "\n") index += 1;
      record.push(field);
      records.push(record);
      record = [];
      field = "";
    } else field += character;
  }

  if (quoted) throw new Error("Un champ entre guillemets n’est pas refermé.");
  if (field.length > 0 || record.length > 0) {
    record.push(field);
    records.push(record);
  }

  return records.filter((row) => row.some((cell) => cell.trim() !== ""));
}

function parseInteger(value: string) {
  if (!/^\d+$/.test(value.trim())) return null;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) ? parsed : null;
}

function parseDate(value: string) {
  const trimmed = value.trim();
  if (!/^\d{4}-\d{2}-\d{2}(?:[T ][0-9:.+-]+Z?)?$/.test(trimmed)) return null;
  const [year, month, day] = trimmed.slice(0, 10).split("-").map(Number);
  const calendarDate = new Date(Date.UTC(year, month - 1, day));
  if (
    calendarDate.getUTCFullYear() !== year ||
    calendarDate.getUTCMonth() !== month - 1 ||
    calendarDate.getUTCDate() !== day
  )
    return null;
  const parsed = new Date(
    trimmed.length === 10 ? `${trimmed}T00:00:00.000Z` : trimmed,
  );
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function validateHeaders(headers: string[], issues: CsvIssue[]) {
  const aliases =
    headers.length === 18
      ? [...HEADER_ALIASES, ...IMAGE_HEADERS]
      : HEADER_ALIASES;
  if (headers.length !== 16 && headers.length !== 18) {
    issues.push({
      row: 1,
      field: "en-têtes",
      message: `16 colonnes sont attendues, ou 18 avec image_path et image_alt (reçu : ${headers.length}).`,
    });
    return false;
  }

  let valid = true;
  aliases.forEach((accepted, index) => {
    const header = normalize(headers[index] ?? "").replace(/^\ufeff/, "");
    if (!(accepted as readonly string[]).includes(header)) {
      valid = false;
      issues.push({
        row: 1,
        field: `colonne ${index + 1}`,
        message: `En-tête « ${headers[index] ?? ""} » invalide ; « ${accepted[0]} » est attendu.`,
      });
    }
  });
  return valid;
}

function required(
  cells: string[],
  index: number,
  row: number,
  field: string,
  issues: CsvIssue[],
) {
  const value = (cells[index] ?? "").trim();
  if (!value) issues.push({ row, field, message: "Ce champ est obligatoire." });
  return value;
}

export function validateQuestionsCsv(source: string) {
  const issues: CsvIssue[] = [];
  let records: string[][];

  try {
    records = parseCsv(source.replace(/^\ufeff/, ""), detectDelimiter(source));
  } catch (error) {
    issues.push({
      row: 1,
      message: error instanceof Error ? error.message : "Le CSV est illisible.",
    });
    records = [];
  }

  const headers = records[0] ?? [];
  const dataRecords = records.slice(1);
  const headersValid = validateHeaders(headers, issues);
  const expectedColumns = headers.length === 18 ? 18 : 16;
  const rows: CsvQuestion[] = [];
  const invalidRows = new Set<number>();
  const seenIds = new Map<string, number>();
  const chapterNames = new Map<number, string>();

  dataRecords.forEach((cells, index) => {
    const row = index + 2;
    const issueCount = issues.length;

    if (cells.length !== expectedColumns) {
      issues.push({
        row,
        message: `${expectedColumns} colonnes sont attendues (reçu : ${cells.length}).`,
      });
      invalidRows.add(row);
      return;
    }

    const idQuestion = required(cells, 0, row, "id_question", issues);
    const chapterIdValue = required(cells, 1, row, "chapitre_id", issues);
    const chapter = required(cells, 2, row, "chapitre", issues);
    const subTheme = required(cells, 3, row, "sous_theme", issues);
    const difficultyValue = required(cells, 4, row, "difficulte", issues);
    const difficultyLabel = required(
      cells,
      5,
      row,
      "libelle_difficulte",
      issues,
    );
    const statement = required(cells, 6, row, "enonce", issues);
    const choices = [
      required(cells, 7, row, "reponse_1", issues),
      required(cells, 8, row, "reponse_2", issues),
      required(cells, 9, row, "reponse_3", issues),
      required(cells, 10, row, "reponse_4", issues),
    ] as [string, string, string, string];
    const correctChoiceValue = required(
      cells,
      11,
      row,
      "bonne_reponse",
      issues,
    );
    const explanation = required(cells, 12, row, "explication", issues);
    const statusSource = required(cells, 13, row, "statut", issues);
    const statusValue = STATUS_ALIASES[normalize(statusSource)] ?? null;
    const sourceCreatedAtValue = required(
      cells,
      14,
      row,
      "date_creation",
      issues,
    );
    const sourceUpdatedAtValue = required(
      cells,
      15,
      row,
      "date_modification",
      issues,
    );
    const imagePath =
      expectedColumns === 18 ? (cells[16] ?? "").trim() || null : null;
    const imageAlt =
      expectedColumns === 18 ? (cells[17] ?? "").trim() || null : null;

    const chapterId = parseInteger(chapterIdValue);
    const difficulty = parseInteger(difficultyValue);
    const correctChoice = parseInteger(correctChoiceValue);
    const sourceCreatedAt = parseDate(sourceCreatedAtValue);
    const sourceUpdatedAt = parseDate(sourceUpdatedAtValue);

    if (idQuestion && seenIds.has(idQuestion)) {
      issues.push({
        row,
        field: "id_question",
        message: `Identifiant déjà utilisé à la ligne ${seenIds.get(idQuestion)}.`,
      });
    } else if (idQuestion) seenIds.set(idQuestion, row);

    if (idQuestion.length > 191)
      issues.push({
        row,
        field: "id_question",
        message: "L’identifiant dépasse 191 caractères.",
      });
    if (chapterId === null || chapterId < 1)
      issues.push({
        row,
        field: "chapitre_id",
        message: "Un entier positif est attendu.",
      });
    if (difficulty === null || difficulty < 1 || difficulty > 5)
      issues.push({
        row,
        field: "difficulte",
        message: "La difficulté doit être comprise entre 1 et 5.",
      });
    else if (
      !DIFFICULTY_LABELS[difficulty].includes(normalize(difficultyLabel))
    ) {
      issues.push({
        row,
        field: "libelle_difficulte",
        message: `Le libellé ne correspond pas à la difficulté ${difficulty}.`,
      });
    }
    if (new Set(choices.map(normalize)).size !== 4)
      issues.push({
        row,
        field: "reponses",
        message: "Les quatre réponses doivent être différentes.",
      });
    if (correctChoice === null || correctChoice < 1 || correctChoice > 4)
      issues.push({
        row,
        field: "bonne_reponse",
        message: "Une valeur comprise entre 1 et 4 est attendue.",
      });
    if (!statusValue) {
      issues.push({
        row,
        field: "statut",
        message:
          "Valeurs acceptées : Brouillon, Validée, Archivée, DRAFT, VALIDATED ou ARCHIVED.",
      });
    }
    if (!sourceCreatedAt)
      issues.push({
        row,
        field: "date_creation",
        message: "Date ISO invalide (ex. 2026-08-29 ou date-heure ISO).",
      });
    if (!sourceUpdatedAt)
      issues.push({
        row,
        field: "date_modification",
        message: "Date ISO invalide (ex. 2026-08-29 ou date-heure ISO).",
      });
    if (
      sourceCreatedAt &&
      sourceUpdatedAt &&
      sourceUpdatedAt < sourceCreatedAt
    ) {
      issues.push({
        row,
        field: "date_modification",
        message: "La date de modification précède la date de création.",
      });
    }
    if (
      imagePath &&
      (/^(?:[a-z]+:|\/|\\)/i.test(imagePath) ||
        imagePath.split("/").includes("..") ||
        !/\.svg$/i.test(imagePath))
    ) {
      issues.push({
        row,
        field: "image_path",
        message:
          "Un chemin SVG relatif est attendu (ex. figures/ch17/ang-fig-01.svg).",
      });
    }
    if (Boolean(imagePath) !== Boolean(imageAlt)) {
      issues.push({
        row,
        field: imagePath ? "image_alt" : "image_path",
        message:
          "Le chemin et le texte alternatif doivent être renseignés ensemble.",
      });
    }

    if (chapterId !== null && chapter) {
      const existingName = chapterNames.get(chapterId);
      if (existingName && normalize(existingName) !== normalize(chapter)) {
        issues.push({
          row,
          field: "chapitre",
          message: `Le chapitre ${chapterId} porte déjà le nom « ${existingName} » dans ce fichier.`,
        });
      } else chapterNames.set(chapterId, chapter);
    }

    if (issues.length > issueCount) {
      invalidRows.add(row);
      return;
    }

    rows.push({
      idQuestion,
      chapterId: chapterId!,
      chapter,
      subTheme,
      difficulty: difficulty!,
      difficultyLabel,
      statement,
      choices,
      correctChoice: correctChoice!,
      explanation,
      status: statusValue!,
      sourceCreatedAt: sourceCreatedAt!,
      sourceUpdatedAt: sourceUpdatedAt!,
      imagePath,
      imageAlt,
    });
  });

  if (dataRecords.length === 0)
    issues.push({ row: 1, message: "Le fichier ne contient aucune question." });

  const valid = headersValid && issues.length === 0;
  const chapters = new Set(rows.map((question) => question.chapterId));
  return {
    valid,
    rows,
    issues,
    preview: rows.map(
      ({
        idQuestion,
        chapterId,
        chapter,
        difficulty,
        statement,
        imagePath,
      }) => ({
        idQuestion,
        chapterId,
        chapter,
        difficulty,
        statement,
        imagePath,
      }),
    ),
    summary: {
      total: dataRecords.length,
      valid: rows.length,
      invalid: headersValid ? invalidRows.size : dataRecords.length,
      chapters: chapters.size,
      withImage: rows.filter((question) => question.imagePath !== null).length,
    },
    expectedHeaders: [
      ...EXPECTED_HEADERS,
      ...(headers.length === 18 ? ["image_path", "image_alt"] : []),
    ],
  };
}
