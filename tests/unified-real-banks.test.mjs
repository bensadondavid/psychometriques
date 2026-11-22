import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";
import { validateUnifiedCsv } from "../lib/question-import/unified-csv.ts";

const root = process.env.QUESTION_BANK_ROOT;
test(
  "real CSV files validate; a renamed binary workbook is explicitly rejected",
  { skip: !root },
  () => {
    const files = [];
    function walk(path) {
      for (const e of readdirSync(path, { withFileTypes: true })) {
        const p = join(path, e.name);
        if (e.isDirectory()) walk(p);
        else if (p.endsWith(".csv")) files.push(p);
      }
    }
    for (const folder of [
      "amirnet",
      "yaelnet",
      "reflexion_quantitative",
      "reflexion_verbale",
    ])
      walk(join(root, folder));
    let rows = 0,
      workbooks = 0;
    for (const file of files) {
      const v = validateUnifiedCsv([
        { name: basename(file), content: readFileSync(file, "utf8") },
      ]);
      const bytes = readFileSync(file);
      if (bytes[0] === 80 && bytes[1] === 75) {
        assert.equal(v.valid, false);
        assert.match(v.issues[0].message, /Numbers ou Excel/);
        workbooks++;
        continue;
      }
      assert.equal(
        v.valid,
        true,
        `${file}\n${JSON.stringify(v.issues.slice(0, 10), null, 2)}`,
      );
      rows += v.summary.rows;
    }
    console.log(
      `Validated ${files.length - workbooks} CSV files, ${rows} source rows; rejected ${workbooks} renamed workbook(s).`,
    );
    assert.equal(files.length, 166);
    assert.equal(rows, 16582);
    assert.equal(workbooks, 1);
  },
);

test(
  "quantitative chapter files and their two compilations merge without conflicts",
  { skip: !root },
  () => {
    const directory = join(root, "reflexion_quantitative", "serie-1");
    const sources = readdirSync(directory)
      .filter((name) => /questions-(?:ch0[1-4]-|psychometrique-)/.test(name))
      .map((name) => ({
        name,
        content: readFileSync(join(directory, name), "utf8"),
      }));
    const v = validateUnifiedCsv(sources);
    assert.equal(v.valid, true, JSON.stringify(v.issues.slice(0, 5)));
    assert.equal(v.questions.length, 500);
    assert.equal(v.summary.duplicates, 900);
  },
);
