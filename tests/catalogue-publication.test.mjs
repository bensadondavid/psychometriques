import assert from "node:assert/strict";
import { test } from "node:test";

import {
  canPublishQuestion, canReviewPassage, canReviewQuestion,
  questionBulkBlockReason, passageBulkBlockReason,
} from "../lib/admin/catalogue-publication.ts";

const ready = {
  statement: "Question vérifiée",
  explanation: "Explication vérifiée",
  imagePath: null,
  passageId: null,
  passage: null,
  editorialReviewedAt: new Date("2026-11-22T00:00:00Z"),
  options: [
    { text: "A", isCorrect: true }, { text: "B", isCorrect: false },
    { text: "C", isCorrect: false }, { text: "D", isCorrect: false },
  ],
};

test("la publication exige une relecture et une correction sans ambiguïté", () => {
  assert.equal(canPublishQuestion(ready, true), true);
  assert.equal(canPublishQuestion({ ...ready, editorialReviewedAt: null }, true), false);
  assert.equal(canReviewQuestion({ ...ready, options: [...ready.options, { text: "E", isCorrect: false }] }, true), false);
  assert.equal(canReviewQuestion({ ...ready, options: ready.options.map((item, index) => ({ ...item, isCorrect: index < 2 })) }, true), false);
  assert.equal(canReviewQuestion({ ...ready, options: ready.options.map((item, index) => ({ ...item, text: index === 1 ? "a" : item.text })) }, true), false);
});

test("une figure et un passage liés doivent être disponibles avant publication", () => {
  assert.equal(canReviewQuestion({ ...ready, imagePath: "figure.svg" }, false), false);
  assert.equal(canPublishQuestion({ ...ready, passageId: "passage-1", passage: { status: "DRAFT" } }, true), false);
  assert.equal(canPublishQuestion({ ...ready, passageId: "passage-1", passage: { status: "PUBLISHED" } }, true), true);
  assert.equal(canReviewPassage({ title: "Texte", text: "Contenu" }), true);
  assert.equal(canReviewPassage({ title: "Texte", text: "  " }), false);
});

test("le lot explique pourquoi une question complète n'est pas publiée", () => {
  const draft = { ...ready, status: "DRAFT", editorialReviewedAt: null };
  assert.equal(questionBulkBlockReason(draft, true, "publish"), "notReviewed");
  assert.equal(questionBulkBlockReason(draft, true, "review_publish"), null);
  assert.equal(questionBulkBlockReason({ ...draft, passageId: "p1", passage: { status: "DRAFT" } }, true, "review_publish"), "passageDraft");
  assert.equal(questionBulkBlockReason({ ...draft, options: [] }, true, "review_publish"), "incomplete");
});

test("un texte complet peut être validé et publié en une action", () => {
  const passage = { title: "Texte", text: "Contenu", status: "DRAFT", editorialReviewedAt: null };
  assert.equal(passageBulkBlockReason(passage, "publish"), "notReviewed");
  assert.equal(passageBulkBlockReason(passage, "review_publish"), null);
});
