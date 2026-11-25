import assert from "node:assert/strict";
import test from "node:test";

import { discoveryDraftSlug, drawDiscoveryQuestions, isDiscoveryBlueprintForExam, parseDiscoveryBlueprint } from "../lib/admin/discovery-blueprint.ts";

test("la structure refuse les quotas invalides et les critères en double", () => {
  const row = { domain: "VERBAL", difficulty: 2, chapterId: null, count: 2 };
  assert.deepEqual(parseDiscoveryBlueprint([row]), [row]);
  assert.equal(parseDiscoveryBlueprint([row, row]), null);
  assert.equal(parseDiscoveryBlueprint([{ ...row, count: 31 }]), null);
  assert.equal(parseDiscoveryBlueprint([{ ...row, difficulty: 6 }]), null);
});

test("le tirage respecte chaque quota et ne reprend jamais la même question", () => {
  const rows = [
    { domain: "VERBAL", difficulty: 1, chapterId: null, count: 2 },
    { domain: "QUANTITATIVE", difficulty: 3, chapterId: "math", count: 1 },
  ];
  const pool = [
    { id: "a", domain: "VERBAL", difficulty: 1, chapterId: "verbal" },
    { id: "b", domain: "VERBAL", difficulty: 1, chapterId: "verbal" },
    { id: "c", domain: "QUANTITATIVE", difficulty: 3, chapterId: "math" },
    { id: "d", domain: "QUANTITATIVE", difficulty: 3, chapterId: "other" },
  ];
  assert.deepEqual(drawDiscoveryQuestions(rows, pool, () => 0), { ids: ["a", "b", "c"], shortageRow: null });
  assert.deepEqual(drawDiscoveryQuestions([{ ...rows[0], count: 3 }], pool, () => 0), { ids: [], shortageRow: 1 });
});

test("la découverte couvre les domaines attendus de chaque examen", () => {
  const verbal = { domain: "VERBAL", difficulty: 2, chapterId: null, count: 2 };
  const quantitative = { domain: "QUANTITATIVE", difficulty: 2, chapterId: null, count: 2 };
  assert.equal(isDiscoveryBlueprintForExam("psychometriques", [verbal]), false);
  assert.equal(isDiscoveryBlueprintForExam("psychometriques", [verbal, quantitative]), true);
  assert.equal(isDiscoveryBlueprintForExam("amirnet", [verbal]), true);
  assert.equal(isDiscoveryBlueprintForExam("yaelnet", [verbal, quantitative]), false);
});

test("un groupe large ne consomme pas les questions réservées à un thème", () => {
  const rows = [
    { domain: "VERBAL", difficulty: 2, chapterId: null, count: 1 },
    { domain: "VERBAL", difficulty: 2, chapterId: "rare", count: 1 },
  ];
  const pool = [
    { id: "rare-question", domain: "VERBAL", difficulty: 2, chapterId: "rare" },
    { id: "common-question", domain: "VERBAL", difficulty: 2, chapterId: "common" },
  ];
  assert.deepEqual(drawDiscoveryQuestions(rows, pool, () => 0), {
    ids: ["common-question", "rare-question"], shortageRow: null,
  });
});

test("la même soumission conserve le même slug de brouillon", () => {
  const requestKey = "d7deb2f6-a78d-4fc3-8e63-6dc3d81a1952";
  assert.equal(discoveryDraftSlug(requestKey), `decouverte-${requestKey}`);
  assert.equal(discoveryDraftSlug(requestKey), discoveryDraftSlug(requestKey));
  assert.equal(discoveryDraftSlug("autre"), null);
});
