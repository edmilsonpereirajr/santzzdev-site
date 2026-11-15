
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

    // O gtag.js exige o objeto `arguments` (e não um array) no dataLayer.
    window.gtag =
      window.gtag ||
      function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
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
        },
        { once: true }
      );

      existingScript.addEventListener(
        "error",
        () => {
          window.gaScriptLoading = false;
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
    };

    script.onerror = () => {
      window.gaScriptLoading = false;
    };

    document.head.appendChild(script);
  }, [consentGranted]);

  return null;
}
