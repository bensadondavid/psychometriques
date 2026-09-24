import assert from "node:assert/strict";
import test from "node:test";

import {
  getExpectedHeaders,
  validateVerbalCsvBatch,
} from "../lib/question-import/psychometric-csv-contract.ts";

function csv(headers, rows) {
  return [headers, ...rows]
    .map((row) =>
      row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(","),
    )
    .join("\n");
}

const questionRow = [
  "ANA-0001",
  "1",
  "Analogies",
  "Catégorie et élément",
  "2",
  "Facile",
  "moineau : oiseau —",
  "saumon : poisson",
  "thermomètre : température",
  "gel : récoltes",
  "murmure : hurlement",
  "1",
  "Le même rapport.",
  "À valider",
  "2026-09-06",
  "2026-09-06",
  "",
  "",
];

test("valide le format analogies et le statut À valider", () => {
  const result = validateVerbalCsvBatch("analogies", [
    {
      name: "analogies.csv",
      content: csv(getExpectedHeaders("analogies"), [questionRow]),
    },
  ]);

  assert.equal(result.valid, true);
  assert.deepEqual(result.summary, {
    files: 1,
    total: 1,
    valid: 1,
    invalid: 0,
  });
});

test("refuse un fichier analogies déclaré dans le mauvais chapitre", () => {
  const wrongChapter = [...questionRow];
  wrongChapter[1] = "2";
  wrongChapter[2] = "Compréhension et déduction";
  const result = validateVerbalCsvBatch("analogies", [
    {
      name: "analogies.csv",
      content: csv(getExpectedHeaders("analogies"), [wrongChapter]),
    },
  ]);

  assert.equal(result.valid, false);
  assert.equal(result.summary.invalid, 1);
  assert.equal(
    result.issues.some((issue) => issue.field === "id_chapitre"),
    true,
  );
});

test("détecte les identifiants de passage dupliqués entre deux fichiers", () => {
  const headers = getExpectedHeaders("passages");
  const passage = [
    "VER-TXT-001",
    "La mémoire des villes",
    "Histoire",
    "Un texte suffisamment long.",
    "5",
    "1",
    "DRAFT",
    "2026-09-24",
    "2026-09-24",
  ];
  const result = validateVerbalCsvBatch("passages", [
    { name: "passages-1.csv", content: csv(headers, [passage]) },
    { name: "passages-2.csv", content: csv(headers, [passage]) },
  ]);

  assert.equal(result.valid, false);
  assert.equal(result.summary.valid, 1);
  assert.equal(result.summary.invalid, 1);
  assert.match(result.issues.at(-1).message, /déjà utilisé/);
});

test("valide une question rattachée à un passage", () => {
  const passageQuestion = [
    "VER-TXT-001-Q01",
    "VER-TXT-001",
    "3",
    "Compréhension de textes",
    "Histoire",
    "3",
    "Moyen",
    "Quelle est l’idée principale ?",
    "Réponse A",
    "Réponse B",
    "Réponse C",
    "Réponse D",
    "2",
    "La réponse B reprend la thèse.",
    "DRAFT",
    "2026-09-24",
    "2026-09-24",
    "",
    "",
  ];
  const result = validateVerbalCsvBatch("passage-questions", [
    {
      name: "questions-passages.csv",
      content: csv(getExpectedHeaders("passage-questions"), [passageQuestion]),
    },
  ]);

  assert.equal(result.valid, true);
  assert.equal(result.preview[0].detail, "VER-TXT-001 · difficulté 3");
});

test("valide une question quantitative et collecte sa figure", () => {
  const quantitativeQuestion = [
    "Q-POL-301",
    "19",
    "Quadrilatères et polygones",
    "Rectangles",
    "4",
    "Difficile",
    "Quelle est l’aire du rectangle ?",
    "48 cm²",
    "60 cm²",
    "72 cm²",
    "84 cm²",
    "2",
    "On multiplie la longueur par la largeur.",
    "Validée",
    "2026-09-24",
    "2026-09-24",
    "figures/ch19/pol-fig-02.svg",
    "Rectangle ABCD avec ses mesures.",
  ];
  const result = validateVerbalCsvBatch("quantitative", [
    {
      name: "serie-3.csv",
      content: csv(getExpectedHeaders("quantitative"), [quantitativeQuestion]),
    },
  ]);

  assert.equal(result.valid, true);
  assert.deepEqual(result.assetPaths, ["figures/ch19/pol-fig-02.svg"]);
  assert.equal(result.records[0].kind, "question");
  assert.equal(result.records[0].externalId, "Q-POL-301");
  assert.deepEqual(result.records[0].choices, [
    "48 cm²",
    "60 cm²",
    "72 cm²",
    "84 cm²",
  ]);
});
