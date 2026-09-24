import assert from "node:assert/strict";
import test from "node:test";

import {
  canonicalizeFigurePath,
  validateSvgBatch,
} from "../lib/question-import/svg-contract.ts";

test("conserve le chemin à partir du dossier figures", () => {
  assert.equal(
    canonicalizeFigurePath(
      "pol-fig-08.svg",
      "geometrie/figures/ch19/pol-fig-08.svg",
    ),
    "figures/ch19/pol-fig-08.svg",
  );
});

test("accepte une figure SVG statique", () => {
  const result = validateSvgBatch([
    {
      name: "pol-fig-08.svg",
      path: "figures/ch19/pol-fig-08.svg",
      content:
        '<?xml version="1.0"?><svg xmlns="http://www.w3.org/2000/svg"><path d="M0 0L1 1" /></svg>',
    },
  ]);

  assert.equal(result.valid, true);
  assert.equal(result.figures[0].path, "figures/ch19/pol-fig-08.svg");
});

test("refuse un SVG actif", () => {
  const result = validateSvgBatch([
    {
      name: "unsafe.svg",
      path: "figures/unsafe.svg",
      content:
        '<svg xmlns="http://www.w3.org/2000/svg"><script>alert(1)</script></svg>',
    },
  ]);

  assert.equal(result.valid, false);
  assert.match(result.issues[0].message, /élément actif/);
});
