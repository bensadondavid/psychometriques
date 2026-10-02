"use client";

import posthog from "posthog-js";
import { readAnalyticsConsent } from "./consent";

let initialized = false;

function stripUrlParameters(value: unknown) {
  if (typeof value !== "string") return value;
  try {
    const url = new URL(value, location.origin);
    return `${url.origin}${url.pathname}`;
  } catch {
    return undefined;
  }
}

function hasConsent() {
  return (
    typeof document !== "undefined" &&
    readAnalyticsConsent(document.cookie) === "accepted"
  );
}

export function startAnalytics() {
  if (!hasConsent()) return false;
  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
  if (!token || !host) return false;

  if (!initialized) {
    posthog.init(token, {
      api_host: host,
      defaults: "2026-01-30",
      opt_out_capturing_by_default: true,
      opt_out_persistence_by_default: true,
      capture_pageview: false,
      autocapture: false,
      capture_exceptions: false,
      disable_session_recording: true,
      before_send: (event) => {
        if (!event) return event;
        for (const key of [
          "$current_url",
          "$referrer",
          "$initial_referrer",
          "$initial_current_url",
        ]) {
          if (key in event.properties) {
            event.properties[key] = stripUrlParameters(event.properties[key]);
          }
        }
        return event;
      },
      debug: process.env.NODE_ENV === "development",
    });
    initialized = true;
  }

  posthog.opt_in_capturing({ captureEventName: false });
  return true;
}

export function stopAnalytics() {
  if (!initialized) return;
  posthog.reset(true);
  posthog.opt_out_capturing();
}

export function captureAnalyticsEvent(
  event: string,
  properties?: Record<string, string | number | boolean>,
) {
  if (initialized && hasConsent()) posthog.capture(event, properties);
}

export function identifyAnalyticsUser(userId: string) {
  if (initialized && hasConsent()) posthog.identify(userId);
}

export function resetAnalyticsIdentity() {
  if (!initialized || !hasConsent()) return;
  posthog.reset(true);
  posthog.opt_in_capturing({ captureEventName: false });
}
