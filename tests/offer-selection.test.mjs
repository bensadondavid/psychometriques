import assert from "node:assert/strict";
import test from "node:test";

import {
  getAuthUrl,
  getPostAuthDestination,
  parseSelectableOffer,
} from "../lib/offers/selection.ts";

test("conserve une clé d'offre connue", () => {
  assert.equal(parseSelectableOffer("psychometriques"), "psychometriques");
  assert.equal(parseSelectableOffer("langues"), "langues");
});

test("ignore une clé inconnue ou ambiguë", () => {
  assert.equal(parseSelectableOffer("inconnue"), null);
  assert.equal(parseSelectableOffer("__proto__"), null);
  assert.equal(parseSelectableOffer(["amirnet", "yaelnet"]), null);
});

test("construit une destination interne sûre après authentification", () => {
  assert.equal(
    getPostAuthDestination("psychometriques"),
    "/account/abonnement?offer=psychometriques",
  );
  assert.equal(getPostAuthDestination("https://example.com"), "/account/home");
});

test("transmet l'offre entre inscription et connexion", () => {
  assert.equal(getAuthUrl("/sign-in", "complet"), "/sign-in?offer=complet");
  assert.equal(getAuthUrl("/sign-up", null), "/sign-up");
});
