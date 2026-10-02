import assert from "node:assert/strict";
import test from "node:test";
import {
  readAnalyticsConsent,
  ANALYTICS_CONSENT_MAX_AGE,
} from "../lib/analytics/consent.ts";

test("analytics stays blocked without a current explicit choice", () => {
  assert.equal(readAnalyticsConsent(""), null);
  assert.equal(readAnalyticsConsent("psychometriques_analytics=v0:accepted"), null);
  assert.equal(readAnalyticsConsent("psychometriques_analytics=accepted"), null);
  assert.equal(
    readAnalyticsConsent("other=1; psychometriques_analytics=v1:rejected"),
    "rejected",
  );
  assert.equal(
    readAnalyticsConsent("other=1; psychometriques_analytics=v1:accepted"),
    "accepted",
  );
  assert.equal(ANALYTICS_CONSENT_MAX_AGE, 60 * 60 * 24 * 180);
});
