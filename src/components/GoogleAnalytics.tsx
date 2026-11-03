
"use client";

import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "santzzdev-cookie-consent";
const CONSENT_EVENT = "santzzdev-consent-change";
const GA_ID = "G-LSWNH257YG";
const SCRIPT_URL = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    gaScriptLoading?: boolean;
    gaScriptLoaded?: boolean;
    [key: `ga-disable-${string}`]: boolean | undefined;
  }
}

function getConsentSnapshot() {
  return localStorage.getItem(STORAGE_KEY) === "accepted";
}

function getServerSnapshot() {
  return false;
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export default function GoogleAnalytics() {
  const consentGranted = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerSnapshot
  );

  useEffect(() => {
    if (!consentGranted) {
      window[`ga-disable-${GA_ID}`] = true;

      if (typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        });
      }

      return;
    }

    window[`ga-disable-${GA_ID}`] = false;
    window.dataLayer = window.dataLayer || [];

    window.gtag =
      window.gtag ||
      function (...args: unknown[]) {
        window.dataLayer.push(args);
      };

    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    window.gtag("js", new Date());

    window.gtag("config", GA_ID, {
      send_page_view: true,
      debug_mode: true,
    });

    if (window.gaScriptLoaded || window.gaScriptLoading) {
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${SCRIPT_URL}"]`
    );

    if (existingScript) {
      window.gaScriptLoading = true;

      existingScript.addEventListener(
        "load",
        () => {
          window.gaScriptLoaded = true;
          window.gaScriptLoading = false;
          console.info("[GA4] Script carregado.");
        },
        { once: true }
      );

      existingScript.addEventListener(
        "error",
        () => {
          window.gaScriptLoading = false;
          console.error("[GA4] Falha ao carregar o script.");
        },
        { once: true }
      );

      return;
    }

    window.gaScriptLoading = true;

    const script = document.createElement("script");
    script.async = true;
    script.src = SCRIPT_URL;

    script.onload = () => {
      window.gaScriptLoaded = true;
      window.gaScriptLoading = false;
      console.info("[GA4] Script carregado com sucesso.");
    };

    script.onerror = () => {
      window.gaScriptLoading = false;
      console.error("[GA4] Falha ao carregar o script.");
    };

    document.head.appendChild(script);
  }, [consentGranted]);

  return null;
}
