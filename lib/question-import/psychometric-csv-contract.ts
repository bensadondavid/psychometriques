export type QuestionImportKind =
  | "analogies"
  | "comprehension-deduction"
  | "passages"
  | "passage-questions"
  | "quantitative";

export type VerbalCsvSource = {
  name: string;
  content: string;
};

export type VerbalCsvIssue = {
  file: string;
  row: number;
  field?: string;
  message: string;
};

export type VerbalCsvPreview = {
  id: string;
  label: string;
  detail: string;
  file: string;
};

export type QuestionCsvRecord = {
  kind: "question";
  externalId: string;
  passageExternalId: string | null;
  chapterExternalId: number;
  chapter: string;
  subTheme: string;
  difficulty: number;
  difficultyLabel: string;
  statement: string;
  choices: [string, string, string, string];
  correctChoice: number;
  explanation: string;
  status: "DRAFT" | "VALIDATED" | "PUBLISHED" | "ARCHIVED";
  sourceCreatedAt: string;
  sourceUpdatedAt: string;
  sourceFile: string;
  imagePath: string | null;
  imageAlt: string | null;
};

export type PassageCsvRecord = {
  kind: "passage";
  externalId: string;
  title: string;
  theme: string;
  text: string;
  wordCount: number;
  estimatedLines: number;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  sourceCreatedAt: string;
  sourceUpdatedAt: string;
  sourceFile: string;
};

export type PsychometricCsvRecord = QuestionCsvRecord | PassageCsvRecord;

export type VerbalCsvValidation = {
  valid: boolean;
  issues: VerbalCsvIssue[];
  preview: VerbalCsvPreview[];
  recordIds: string[];
  assetPaths: string[];
  records: PsychometricCsvRecord[];
  summary: {
    files: number;
    total: number;
    valid: number;
    invalid: number;
  };
};

type QuestionKind = Exclude<QuestionImportKind, "passages">;
type VerbalQuestionKind = Exclude<QuestionKind, "quantitative">;

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
  "statut",
  "date_creation",
  "derniere_mise_a_jour",
  "image_path",
  "image_alt",
] as const;

const PASSAGE_QUESTION_HEADERS = [
  "id_question",
  "id_passage",
  ...QUESTION_HEADERS.slice(1),
] as const;

const PASSAGE_HEADERS = [
  "id_passage",
  "titre_passage",
  "theme_passage",
  "texte_passage",
  "nombre_mots",
  "lignes_estimees",
  "statut",
  "date_creation",
  "derniere_mise_a_jour",
] as const;

const VERBAL_QUESTION_KIND_RULES: Record<
  VerbalQuestionKind,
  { chapterId: number; chapter: string }
> = {
  analogies: { chapterId: 1, chapter: "Analogies" },
  "comprehension-deduction": {
    chapterId: 2,
    chapter: "Compréhension et déduction",
  },
  "passage-questions": {
    chapterId: 3,
    chapter: "Compréhension de textes",
  },
};

const QUANTITATIVE_CHAPTERS: Record<number, string> = {
  1: "Nombres",
  2: "Divisibilité",
  3: "Fractions",
  4: "Pourcentages",
  5: "Ratios et proportions",
  6: "Moyennes",
  7: "Puissances et racines",
  8: "Expressions algébriques",
  9: "Équations et inégalités",
  10: "Problèmes algébriques",
  11: "Vitesse, distance et temps",
  12: "Travail et débits",
  13: "Suites et régularités",
  14: "Combinatoire",
  15: "Probabilités",
  16: "Lecture de tableaux et données",
  17: "Angles et droites",
  18: "Triangles",
  19: "Quadrilatères et polygones",
  20: "Cercles",
  21: "Géométrie dans l’espace et repérage",
};

const DIFFICULTY_LABELS: Record<number, string[]> = {
  1: ["tres facile"],
  2: ["facile"],
  3: ["moyen", "moyenne", "intermediaire"],
  4: ["difficile"],
  5: ["tres difficile"],
};

const QUESTION_STATUS_ALIASES: Record<string, QuestionCsvRecord["status"]> = {
  "a valider": "DRAFT",
  archive: "ARCHIVED",
  archivee: "ARCHIVED",
  archived: "ARCHIVED",
  brouillon: "DRAFT",
  draft: "DRAFT",
  publie: "PUBLISHED",
  publiee: "PUBLISHED",
  published: "PUBLISHED",
  valide: "VALIDATED",
  validee: "VALIDATED",
  validated: "VALIDATED",
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
      } else if (character === '"') quoted = false;
      else field += character;
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

function parsePositiveInteger(value: string) {
  if (!/^\d+$/.test(value.trim())) return null;
  const parsed = Number(value);
  return Number.isSafeInteger(parsed) && parsed > 0 ? parsed : null;
}

function isIsoDate(value: string) {
  const trimmed = value.trim();
  if (!/^\d{4}-\d{2}-\d{2}(?:[T ][0-9:.+-]+Z?)?$/.test(trimmed)) return false;
  const [year, month, day] = trimmed.slice(0, 10).split("-").map(Number);
  const calendarDate = new Date(Date.UTC(year, month - 1, day));
  const parsed = new Date(
    trimmed.length === 10 ? `${trimmed}T00:00:00.000Z` : trimmed,
  );
  return (
    calendarDate.getUTCFullYear() === year &&
    calendarDate.getUTCMonth() === month - 1 &&
    calendarDate.getUTCDate() === day &&
    !Number.isNaN(parsed.getTime())
  );
}

function required(
  cells: string[],
  index: number,
  file: string,
  row: number,
  field: string,
  issues: VerbalCsvIssue[],
) {
  const value = (cells[index] ?? "").trim();
  if (!value)
    issues.push({ file, row, field, message: "Ce champ est obligatoire." });
  return value;
}

function validateHeaders(
  actual: string[],
  expected: readonly string[],
  file: string,
  issues: VerbalCsvIssue[],
) {
  if (actual.length !== expected.length) {
    issues.push({
      file,
      row: 1,
      field: "en-têtes",
      message: `${expected.length} colonnes sont attendues (reçu : ${actual.length}).`,
    });
    return false;
  }

  let valid = true;
  expected.forEach((header, index) => {
    const received = normalize(actual[index] ?? "").replace(/^\ufeff/, "");
    if (received !== header) {
      valid = false;
      issues.push({
        file,
        row: 1,
        field: `colonne ${index + 1}`,
        message: `En-tête « ${actual[index] ?? ""} » invalide ; « ${header} » est attendu.`,
      });
    }
  });
  return valid;
}

function validateStatus(
  value: string,
  file: string,
  row: number,
  issues: VerbalCsvIssue[],
) {
  if (!QUESTION_STATUS_ALIASES[normalize(value)]) {
    issues.push({
      file,
      row,
      field: "statut",
      message:
        "Statut inconnu. Utilisez À valider, Validée, Publiée, Archivée ou leur équivalent anglais.",
    });
  }
}

function getQuestionStatus(value: string): QuestionCsvRecord["status"] {
  return QUESTION_STATUS_ALIASES[normalize(value)] ?? "DRAFT";
}

function getPassageStatus(value: string): PassageCsvRecord["status"] {
  const status = getQuestionStatus(value);
  return status === "VALIDATED" ? "DRAFT" : status;
}

function validateDates(
  createdAt: string,
  updatedAt: string,
  file: string,
  row: number,
  issues: VerbalCsvIssue[],
) {
  if (!isIsoDate(createdAt)) {
    issues.push({
      file,
      row,
      field: "date_creation",
      message: "Date ISO invalide.",
    });
  }
  if (!isIsoDate(updatedAt)) {
    issues.push({
      file,
      row,
      field: "derniere_mise_a_jour",
      message: "Date ISO invalide.",
    });
  }
  if (isIsoDate(createdAt) && isIsoDate(updatedAt) && updatedAt < createdAt) {
    issues.push({
      file,
      row,
      field: "derniere_mise_a_jour",
      message: "La mise à jour précède la création.",
    });
  }
}

function validateImage(
  imagePath: string,
  imageAlt: string,
  file: string,
  row: number,
  issues: VerbalCsvIssue[],
) {
  if (
    imagePath &&
    (/^(?:[a-z]+:|\/|\\)/i.test(imagePath) ||
      imagePath.split("/").includes("..") ||
      !/\.svg$/i.test(imagePath))
  ) {
    issues.push({
      file,
      row,
      field: "image_path",
      message: "Un chemin SVG relatif est attendu.",
    });
  }
  if (Boolean(imagePath) !== Boolean(imageAlt)) {
    issues.push({
      file,
      row,
      field: imagePath ? "image_alt" : "image_path",
      message:
        "Le chemin et le texte alternatif doivent être renseignés ensemble.",
    });
  }
}

function validateQuestionRow(
  kind: QuestionKind,
  cells: string[],
  file: string,
  row: number,
  issues: VerbalCsvIssue[],
) {
  const passageOffset = kind === "passage-questions" ? 1 : 0;
  const idQuestion = required(cells, 0, file, row, "id_question", issues);
  const idPassage =
    kind === "passage-questions"
      ? required(cells, 1, file, row, "id_passage", issues)
      : null;
  const chapterIdValue = required(
    cells,
    1 + passageOffset,
    file,
    row,
    "id_chapitre",
    issues,
  );
  const chapter = required(
    cells,
    2 + passageOffset,
    file,
    row,
    "chapitre",
    issues,
  );
  const subTheme = required(
    cells,
    3 + passageOffset,
    file,
    row,
    "sous_theme",
    issues,
  );
  const difficultyValue = required(
    cells,
    4 + passageOffset,
    file,
    row,
    "niveau_difficulte",
    issues,
  );
  const difficultyLabel = required(
    cells,
    5 + passageOffset,
    file,
    row,
    "libelle_difficulte",
    issues,
  );
  const statement = required(
    cells,
    6 + passageOffset,
    file,
    row,
    "enonce",
    issues,
  );
  const choices = [7, 8, 9, 10].map((index) =>
    required(
      cells,
      index + passageOffset,
      file,
      row,
      `choix_${index - 6}`,
      issues,
    ),
  ) as [string, string, string, string];
  const correctChoiceValue = required(
    cells,
    11 + passageOffset,
    file,
    row,
    "bonne_reponse",
    issues,
  );
  const explanation = required(
    cells,
    12 + passageOffset,
    file,
    row,
    "explication",
    issues,
  );
  const status = required(
    cells,
    13 + passageOffset,
    file,
    row,
    "statut",
    issues,
  );
  const createdAt = required(
    cells,
    14 + passageOffset,
    file,
    row,
    "date_creation",
    issues,
  );
  const updatedAt = required(
    cells,
    15 + passageOffset,
    file,
    row,
    "derniere_mise_a_jour",
    issues,
  );
  const imagePath = (cells[16 + passageOffset] ?? "").trim();
  const imageAlt = (cells[17 + passageOffset] ?? "").trim();
  const chapterId = parsePositiveInteger(chapterIdValue);
  const difficulty = parsePositiveInteger(difficultyValue);
  const correctChoice = parsePositiveInteger(correctChoiceValue);
  const expectedChapter =
    kind === "quantitative"
      ? chapterId === null
        ? null
        : (QUANTITATIVE_CHAPTERS[chapterId] ?? null)
      : VERBAL_QUESTION_KIND_RULES[kind].chapter;
  const expectedChapterId =
    kind === "quantitative"
      ? chapterId
      : VERBAL_QUESTION_KIND_RULES[kind].chapterId;

  if (idQuestion.length > 191) {
    issues.push({
      file,
      row,
      field: "id_question",
      message: "L’identifiant dépasse 191 caractères.",
    });
  }
  if (chapterId === null || expectedChapter === null) {
    issues.push({
      file,
      row,
      field: "id_chapitre",
      message:
        kind === "quantitative"
          ? "Le chapitre doit être compris entre 1 et 21."
          : `Le chapitre ${expectedChapterId} est attendu pour ce type d’import.`,
    });
  } else if (chapterId !== expectedChapterId) {
    issues.push({
      file,
      row,
      field: "id_chapitre",
      message: `Le chapitre ${expectedChapterId} est attendu pour ce type d’import.`,
    });
  }
  if (expectedChapter && normalize(chapter) !== normalize(expectedChapter)) {
    issues.push({
      file,
      row,
      field: "chapitre",
      message: `Le chapitre « ${expectedChapter} » est attendu pour l’identifiant ${chapterIdValue}.`,
    });
  }
  if (difficulty === null || difficulty > 5) {
    issues.push({
      file,
      row,
      field: "niveau_difficulte",
      message: "La difficulté doit être comprise entre 1 et 5.",
    });
  } else if (
    !DIFFICULTY_LABELS[difficulty].includes(normalize(difficultyLabel))
  ) {
    issues.push({
      file,
      row,
      field: "libelle_difficulte",
      message: `Le libellé ne correspond pas à la difficulté ${difficulty}.`,
    });
  }
  if (choices.every(Boolean) && new Set(choices.map(normalize)).size !== 4) {
    issues.push({
      file,
      row,
      field: "choix",
      message: "Les quatre réponses doivent être différentes.",
    });
  }
  if (correctChoice === null || correctChoice > 4) {
    issues.push({
      file,
      row,
      field: "bonne_reponse",
      message: "Une valeur comprise entre 1 et 4 est attendue.",
    });
  }
  validateStatus(status, file, row, issues);
  validateDates(createdAt, updatedAt, file, row, issues);
  validateImage(imagePath, imageAlt, file, row, issues);

  return {
    id: idQuestion,
    label: statement,
    detail: idPassage
      ? `${idPassage} · difficulté ${difficultyValue}`
      : `${chapter} · difficulté ${difficultyValue}`,
    assetPath: imagePath || null,
    record: {
      kind: "question" as const,
      externalId: idQuestion,
      passageExternalId: idPassage,
      chapterExternalId: chapterId!,
      chapter,
      subTheme,
      difficulty: difficulty!,
      difficultyLabel,
      statement,
      choices,
      correctChoice: correctChoice!,
      explanation,
      status: getQuestionStatus(status),
      sourceCreatedAt: createdAt,
      sourceUpdatedAt: updatedAt,
      sourceFile: file,
      imagePath: imagePath || null,
      imageAlt: imageAlt || null,
    } satisfies QuestionCsvRecord,
  };
}

function validatePassageRow(
  cells: string[],
  file: string,
  row: number,
  issues: VerbalCsvIssue[],
) {
  const idPassage = required(cells, 0, file, row, "id_passage", issues);
  const title = required(cells, 1, file, row, "titre_passage", issues);
  const theme = required(cells, 2, file, row, "theme_passage", issues);
  const text = required(cells, 3, file, row, "texte_passage", issues);
  const wordCount = required(cells, 4, file, row, "nombre_mots", issues);
  const estimatedLines = required(
    cells,
    5,
    file,
    row,
    "lignes_estimees",
    issues,
  );
  const status = required(cells, 6, file, row, "statut", issues);
  const createdAt = required(cells, 7, file, row, "date_creation", issues);
  const updatedAt = required(
    cells,
    8,
    file,
    row,
    "derniere_mise_a_jour",
    issues,
  );

  if (idPassage.length > 191) {
    issues.push({
      file,
      row,
      field: "id_passage",
      message: "L’identifiant dépasse 191 caractères.",
    });
  }
  if (parsePositiveInteger(wordCount) === null) {
    issues.push({
      file,
      row,
      field: "nombre_mots",
      message: "Un entier positif est attendu.",
    });
  }
  if (parsePositiveInteger(estimatedLines) === null) {
    issues.push({
      file,
      row,
      field: "lignes_estimees",
      message: "Un entier positif est attendu.",
    });
  }
  validateStatus(status, file, row, issues);
  validateDates(createdAt, updatedAt, file, row, issues);

  return {
    id: idPassage,
    label: title,
    detail: theme,
    record: {
      kind: "passage" as const,
      externalId: idPassage,
      title,
      theme,
      text,
      wordCount: parsePositiveInteger(wordCount)!,
      estimatedLines: parsePositiveInteger(estimatedLines)!,
      status: getPassageStatus(status),
      sourceCreatedAt: createdAt,
      sourceUpdatedAt: updatedAt,
      sourceFile: file,
    } satisfies PassageCsvRecord,
  };
}

export function getExpectedHeaders(kind: QuestionImportKind) {
  if (kind === "passages") return [...PASSAGE_HEADERS];
  if (kind === "passage-questions") return [...PASSAGE_QUESTION_HEADERS];
  return [...QUESTION_HEADERS];
}

export function validateVerbalCsvBatch(
  kind: QuestionImportKind,
  sources: VerbalCsvSource[],
): VerbalCsvValidation {
  const issues: VerbalCsvIssue[] = [];
  const preview: VerbalCsvPreview[] = [];
  const recordIds: string[] = [];
  const assetPaths = new Set<string>();
  const validatedRecords: PsychometricCsvRecord[] = [];
  const seenIds = new Map<string, { file: string; row: number }>();
  const expectedHeaders = getExpectedHeaders(kind);
  let total = 0;
  let validRows = 0;
  let invalidRows = 0;

  for (const source of sources) {
    let records: string[][];
    try {
      records = parseCsv(
        source.content.replace(/^\ufeff/, ""),
        detectDelimiter(source.content),
      );
    } catch (error) {
      issues.push({
        file: source.name,
        row: 1,
        message:
          error instanceof Error ? error.message : "Le CSV est illisible.",
      });
      continue;
    }

    const headersValid = validateHeaders(
      records[0] ?? [],
      expectedHeaders,
      source.name,
      issues,
    );
    const rows = records.slice(1);
    total += rows.length;

    if (rows.length === 0) {
      issues.push({
        file: source.name,
        row: 1,
        message: "Le fichier ne contient aucune donnée.",
      });
      continue;
    }
    if (!headersValid) {
      invalidRows += rows.length;
      continue;
    }

    rows.forEach((cells, index) => {
      const row = index + 2;
      const issueCount = issues.length;
      if (cells.length !== expectedHeaders.length) {
        issues.push({
          file: source.name,
          row,
          message: `${expectedHeaders.length} colonnes sont attendues (reçu : ${cells.length}).`,
        });
        invalidRows += 1;
        return;
      }

      const candidate =
        kind === "passages"
          ? validatePassageRow(cells, source.name, row, issues)
          : validateQuestionRow(kind, cells, source.name, row, issues);
      const duplicate = seenIds.get(candidate.id);
      if (candidate.id && duplicate) {
        issues.push({
          file: source.name,
          row,
          field: kind === "passages" ? "id_passage" : "id_question",
          message: `Identifiant déjà utilisé dans ${duplicate.file}, ligne ${duplicate.row}.`,
        });
      } else if (candidate.id) {
        seenIds.set(candidate.id, { file: source.name, row });
      }

      if (issues.length > issueCount) {
        invalidRows += 1;
        return;
      }

      validRows += 1;
      recordIds.push(candidate.id);
      validatedRecords.push(candidate.record);
      if (
        "assetPath" in candidate &&
        typeof candidate.assetPath === "string" &&
        candidate.assetPath
      ) {
        assetPaths.add(candidate.assetPath);
      }
      if (preview.length < 6) {
        preview.push({
          id: candidate.id,
          label: candidate.label,
          detail: candidate.detail,
          file: source.name,
        });
      }
    });
  }

  if (sources.length === 0) {
    issues.push({
      file: "",
      row: 1,
      message: "Sélectionnez au moins un fichier CSV.",
    });
  }

  return {
    valid: sources.length > 0 && issues.length === 0,
    issues,
    preview,
    recordIds,
    assetPaths: [...assetPaths],
    records: validatedRecords,
    summary: {
      files: sources.length,
      total,
      valid: validRows,
      invalid: invalidRows,
    },
  };
}
