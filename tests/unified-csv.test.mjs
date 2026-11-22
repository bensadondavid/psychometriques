import assert from "node:assert/strict";
import { test } from "node:test";
import {
  parseCsv,
  parseImportInput,
  validateUnifiedCsv,
} from "../lib/question-import/unified-csv.ts";
import { createUnifiedImportHandler } from "../lib/question-import/unified-api.ts";

const headers = [
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
const row = [
  "AMIRNET-SC-001",
  "sentence_completion",
  "1",
  "1",
  "2",
  "vocabulaire",
  "",
  "",
  "Complete ____.",
  "A",
  "B",
  "C",
  "D",
  "2",
  "Because B.",
];
const csv = (rows, h = headers, sep = ",") =>
  [h, ...rows]
    .map((r) => r.map((v) => `"${String(v).replaceAll('"', '""')}"`).join(sep))
    .join("\r\n");
const sources = (r = [row], h = headers) => [
  { name: "amirnet-01.csv", content: csv(r, h) },
];

test("BOM, semicolons, multiline fields and escaped quotes preserve physical line numbers", () => {
  assert.deepEqual(parseCsv('\ufeffa;b\r\n"one\r\ntwo";"x""y"\r\nlast;z'), [
    { cells: ["a", "b"], row: 1 },
    { cells: ["one\r\ntwo", 'x"y'], row: 2 },
    { cells: ["last", "z"], row: 4 },
  ]);
  for (const input of ['a,b\n"x"z,y', 'a,b\nx"z,y', 'a,b\n"x,y'])
    assert.throws(() => parseCsv(input));
});
test("language format with or without status normalizes identically", () => {
  const a = validateUnifiedCsv(sources());
  const b = validateUnifiedCsv(
    sources([[...row, "A_VALIDER"]], [...headers, "statut"]),
  );
  assert.equal(a.valid, true);
  assert.equal(b.valid, true);
  assert.deepEqual(a.questions, b.questions);
  assert.equal(a.questions[0].language, "en");
  assert.equal(a.questions[0].chapter, "Phrases à compléter");
  const approvedSource = validateUnifiedCsv(
    sources([[...row, "VALIDE"]], [...headers, "statut"]),
  );
  assert.equal(approvedSource.valid, true);
  assert.equal(approvedSource.questions[0].sourceStatus, "VALIDATED");
  assert.equal(
    validateUnifiedCsv(sources([[...row, "inconnu"]], [...headers, "statut"])).valid,
    false,
  );
});
test("headers may be reordered but duplicate and unknown columns fail", () => {
  assert.equal(
    validateUnifiedCsv(sources([[...row].reverse()], [...headers].reverse()))
      .valid,
    true,
  );
  assert.equal(
    validateUnifiedCsv(sources([[...row, "x"]], [...headers, "surprise"]))
      .valid,
    false,
  );
  assert.equal(
    validateUnifiedCsv(sources([[...row, "x"]], [...headers, "id_question"]))
      .valid,
    false,
  );
});
test("identical questions deduplicate; conflicts and duplicate section positions block", () => {
  const secondFile = { ...sources()[0], name: "amirnet-02.csv" };
  const v = validateUnifiedCsv([...sources(), secondFile]);
  assert.equal(v.valid, true);
  assert.equal(v.questions.length, 1);
  assert.equal(v.summary.duplicates, 1);
  const changed = [...row];
  changed[8] = "Another question";
  assert.equal(
    validateUnifiedCsv([
      ...sources(),
      { name: "amirnet-02.csv", content: csv([changed]) },
    ]).valid,
    false,
  );
  const other = [...row];
  other[0] = "AMIRNET-SC-002";
  assert.equal(validateUnifiedCsv(sources([row, other])).valid, false);
});
test("exam mismatch, incorrect answers and difficulty, empty or duplicate choices fail", () => {
  assert.equal(validateUnifiedCsv(sources(), "yaelnet").valid, false);
  for (const [index, value] of [
    [4, "0"],
    [4, "6"],
    [13, "5"],
    [9, ""],
    [9, "B"],
    [1, "unsupported"],
    [1, "__proto__"],
    [1, "constructor"],
  ]) {
    const r = [...row];
    r[index] = value;
    assert.equal(
      validateUnifiedCsv(sources([r])).valid,
      false,
      `${index}: ${value}`,
    );
  }
});
test("reading passages deduplicate and conflicting text fails", () => {
  const r = [...row];
  r[0] = "YAELNET01-RC-001";
  r[1] = "reading_comprehension";
  r[6] = "P1";
  r[7] = "טקסט לדוגמה";
  const other = [...r];
  other[0] = "YAELNET01-RC-002";
  other[3] = "2";
  const v = validateUnifiedCsv(sources([r, other]));
  assert.equal(v.valid, true);
  assert.equal(v.passages.length, 1);
  assert.equal(v.questions[0].language, "he");
  other[7] = "טקסט שונה";
  assert.equal(validateUnifiedCsv(sources([r, other])).valid, false);
  r[7] = "";
  assert.deepEqual(validateUnifiedCsv(sources([r])).missingPassages, [
    { exam: "yaelnet", externalId: "P1" },
  ]);
});
test("bad batch envelopes are rejected before parsing", () => {
  assert.equal(
    parseImportInput({ sources: sources(), mode: "validate" })?.mode,
    "validate",
  );
  for (const v of [
    { sources: [], mode: "import" },
    { sources: sources(), mode: "oops" },
    { sources: [...sources(), ...sources()], mode: "import" },
    { sources: [{ name: "../evil.csv", content: "a" }], mode: "import" },
  ])
    assert.equal(parseImportInput(v), null);
});

const request = (body, extra = {}) =>
  new Request("https://example.test/api/admin/question-import/unified", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      origin: "https://example.test",
      ...extra,
    },
    body: JSON.stringify(body),
  });
test("API authenticates, checks origin and validates raw CSV on every import", async () => {
  let writes = 0;
  const handler = createUnifiedImportHandler({
    authorize: async () => ({ ok: true }),
    checkPassages: async () => [],
    persist: async () => {
      writes++;
      return { created: 1 };
    },
  });
  const input = {
    sources: sources(),
    mode: "import",
    valid: true,
    questions: [{ externalId: "forged" }],
  };
  const r = [...row];
  r[13] = "9";
  assert.equal(
    (await handler(request({ ...input, sources: sources([r]) }))).status,
    422,
  );
  assert.equal(writes, 0);
  assert.equal(
    (await handler(request(input, { origin: "https://other.test" }))).status,
    403,
  );
  assert.equal(writes, 0);
  assert.equal(
    (await handler(request({ ...input, mode: "validate" }))).status,
    200,
  );
  assert.equal(writes, 0);
  assert.equal((await handler(request(input))).status, 200);
  assert.equal(writes, 1);
  const unauthorized = createUnifiedImportHandler({
    authorize: async () => ({ ok: false, status: 401, message: "Login" }),
    checkPassages: async () => {
      throw Error("must not read");
    },
    persist: async () => {
      throw Error("must not write");
    },
  });
  assert.equal((await unauthorized(request(input))).status, 401);
});
test("API refuses missing passages, oversized and malformed requests", async () => {
  let writes = 0;
  const handler = createUnifiedImportHandler({
    authorize: async () => ({ ok: true }),
    checkPassages: async () => [{ exam: "psychometriques", externalId: "P1" }],
    persist: async () => {
      writes++;
    },
  });
  assert.equal(
    (await handler(request({ sources: sources(), mode: "import" }))).status,
    422,
  );
  assert.equal(
    (
      await handler(
        request(
          { sources: sources(), mode: "import" },
          { "content-length": "9000000" },
        ),
      )
    ).status,
    413,
  );
  assert.equal(
    (
      await handler(
        new Request("https://example.test/api", {
          method: "POST",
          headers: {
            origin: "https://example.test",
            "content-type": "application/json",
          },
          body: "{",
        }),
      )
    ).status,
    400,
  );
  assert.equal(writes, 0);
});

test("binary workbooks renamed csv are rejected with an actionable message", () => {
  const v = validateUnifiedCsv([
    { name: "amirnet.csv", content: "PK\u0003\u0004\u0000fake" },
  ]);
  assert.equal(v.valid, false);
  assert.match(v.issues[0].message, /Numbers ou Excel/);
});

test("API enforces streaming body size even without Content-Length", async () => {
  let writes = 0;
  const handler = createUnifiedImportHandler({
    authorize: async () => ({ ok: true }),
    checkPassages: async () => [],
    persist: async () => {
      writes++;
    },
  });
  const request = new Request("https://example.test/api", {
    method: "POST",
    headers: {
      origin: "https://example.test",
      "content-type": "application/json",
    },
    body: " ".repeat(8_000_001),
  });
  assert.equal((await handler(request)).status, 413);
  assert.equal(writes, 0);
});
