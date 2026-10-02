export const ANALYTICS_CONSENT_COOKIE = "psychometriques_analytics";
export const ANALYTICS_CONSENT_MAX_AGE = 60 * 60 * 24 * 180;

export type AnalyticsConsent = "accepted" | "rejected" | null;

export function readAnalyticsConsent(cookieHeader: string): AnalyticsConsent {
  const entry = cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${ANALYTICS_CONSENT_COOKIE}=`));

  const value = entry?.slice(ANALYTICS_CONSENT_COOKIE.length + 1);
  if (value === "v1:accepted") return "accepted";
  if (value === "v1:rejected") return "rejected";
  return null;
}
