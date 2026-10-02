"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { authClient } from "@/lib/auth/auth-client";
import {
  ANALYTICS_CONSENT_COOKIE,
  ANALYTICS_CONSENT_MAX_AGE,
  readAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/analytics/consent";
import {
  captureAnalyticsEvent,
  identifyAnalyticsUser,
  resetAnalyticsIdentity,
  startAnalytics,
  stopAnalytics,
} from "@/lib/analytics/posthog-client";

function saveConsent(value: Exclude<AnalyticsConsent, null>) {
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${ANALYTICS_CONSENT_COOKIE}=v1:${value}; Path=/; Max-Age=${ANALYTICS_CONSENT_MAX_AGE}; SameSite=Lax${secure}`;
}

export function AnalyticsConsentManager() {
  const [choice, setChoice] = useState<AnalyticsConsent | "loading">("loading");
  const [settingsOpen, setSettingsOpen] = useState(false);
  const identifiedUserId = useRef<string | null>(null);
  const pathname = usePathname();
  const session = authClient.useSession();
  const userId = session.data?.user?.id;

  useEffect(() => {
    const syncChoice = () => {
      const current = readAnalyticsConsent(document.cookie);
      setChoice(current);
      if (current !== "accepted") stopAnalytics();
    };
    syncChoice();
    window.addEventListener("focus", syncChoice);
    return () => window.removeEventListener("focus", syncChoice);
  }, []);

  useEffect(() => {
    if (choice !== "accepted") return;
    if (startAnalytics()) captureAnalyticsEvent("$pageview");
  }, [choice, pathname]);

  useEffect(() => {
    if (choice !== "accepted" || session.isPending) return;
    if (!userId) {
      if (identifiedUserId.current) resetAnalyticsIdentity();
      identifiedUserId.current = null;
      return;
    }
    if (identifiedUserId.current !== userId) {
      if (identifiedUserId.current) resetAnalyticsIdentity();
      identifyAnalyticsUser(userId);
      identifiedUserId.current = userId;
    }
  }, [choice, session.isPending, userId]);

  function choose(value: Exclude<AnalyticsConsent, null>) {
    saveConsent(value);
    if (value === "rejected") {
      stopAnalytics();
      identifiedUserId.current = null;
    }
    setChoice(value);
    setSettingsOpen(false);
  }

  if (choice === "loading") return null;

  return (
    <>
      {(choice === null || settingsOpen) && (
        <section
          aria-label="Choix des cookies"
          className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl border border-[#bba99b] bg-[#fffaf2] p-5 text-[#2a211d] shadow-xl sm:bottom-6 sm:p-7"
        >
          <p className="text-xs font-semibold tracking-[0.18em] text-[#7a2b3d] uppercase">
            Votre choix
          </p>
          <h2 className="mt-2 font-serif text-2xl">Gestion des cookies</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed">
            Nous utilisons des cookies facultatifs pour mesurer la fréquentation
            et améliorer le site. Vous pouvez les accepter ou les refuser sans
            modifier votre accès, puis changer d’avis à tout moment.
          </p>
          {choice !== null && (
            <p className="mt-2 text-xs text-[#6c5a52]">
              Choix actuel : {choice === "accepted" ? "accepté" : "refusé"}.
            </p>
          )}
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => choose("rejected")}
              className="min-w-32 border border-[#45121d] px-5 py-2.5 text-sm font-medium text-[#45121d] transition-colors hover:bg-[#f4e9df] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45121d]"
            >
              Refuser
            </button>
            <button
              type="button"
              onClick={() => choose("accepted")}
              className="min-w-32 border border-[#45121d] px-5 py-2.5 text-sm font-medium text-[#45121d] transition-colors hover:bg-[#f4e9df] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45121d]"
            >
              Accepter
            </button>
            {choice !== null && (
              <button
                type="button"
                onClick={() => setSettingsOpen(false)}
                className="px-3 py-2.5 text-sm text-[#5b4b45] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45121d]"
              >
                Fermer
              </button>
            )}
          </div>
        </section>
      )}
      {choice !== null && !settingsOpen && (
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          className="fixed bottom-3 left-3 z-[99] border border-[#bba99b] bg-[#fffaf2] px-3 py-1.5 text-xs text-[#45121d] shadow-sm transition-colors hover:bg-[#f4e9df] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#45121d]"
        >
          Gestion des cookies
        </button>
      )}
    </>
  );
}
