import assert from "node:assert/strict";
import test from "node:test";

import { parseDiscoverySnapshot, publicDiscoveryQuestion } from "../lib/discovery/snapshot.ts";
import { discoveryReturnUrl, parseDiscoveryReturn } from "../lib/discovery/return-url.ts";

const snapshot = {
  statement: "Quelle réponse ?", explanation: "Explication privée", language: "fr", chapter: "Nombres",
  passage: null,
  options: [
    { id: "a", text: "A", isCorrect: false },
    { id: "b", text: "B", isCorrect: true },
    { id: "c", text: "C", isCorrect: false },
    { id: "d", text: "D", isCorrect: false },
  ],
};

test("la question publique ne révèle ni la correction ni l'explication", () => {
  const question = publicDiscoveryQuestion(parseDiscoverySnapshot(snapshot));
  assert.equal("explanation" in question, false);
  assert.equal(question.options.some((option) => "isCorrect" in option), false);
  assert.equal(question.options.length, 4);
});

test("un instantané sans unique réponse correcte est refusé", () => {
  assert.equal(parseDiscoverySnapshot({ ...snapshot, options: snapshot.options.map((option) => ({ ...option, isCorrect: false })) }), null);
});

test("le retour après inscription accepte uniquement un examen connu", () => {
  assert.equal(parseDiscoveryReturn("amirnet"), "amirnet");
  assert.equal(discoveryReturnUrl("amirnet"), "/account/decouverte?examen=amirnet");
  assert.equal(parseDiscoveryReturn("//example.com"), null);
});
