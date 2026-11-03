
"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

type Consent = "accepted" | "rejected" | "unset" | "loading";

const STORAGE_KEY = "santzzdev-cookie-consent";
const CONSENT_EVENT = "santzzdev-consent-change";
const OPEN_SETTINGS_EVENT = "santzzdev-open-cookie-settings";

function getConsentSnapshot(): Consent {
  const saved = localStorage.getItem(STORAGE_KEY);

  if (saved === "accepted" || saved === "rejected") {
    return saved;
  }

  return "unset";
}

function getServerSnapshot(): Consent {
  return "loading";
}

function subscribeToConsent(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

export default function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerSnapshot
  );

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    function openSettings() {
      setAnalyticsEnabled(
        localStorage.getItem(STORAGE_KEY) === "accepted"
      );
      setSettingsOpen(true);
    }

    window.addEventListener(OPEN_SETTINGS_EVENT, openSettings);

    return () => {
      window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings);
    };
  }, []);

  function saveConsent(value: "accepted" | "rejected") {
    localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new Event(CONSENT_EVENT));
    setAnalyticsEnabled(value === "accepted");
    setSettingsOpen(false);
  }

  const panelVisible = consent === "unset" || settingsOpen;

  return (
    <>
      {panelVisible && (
        <div
          className="cookie-banner"
          role="dialog"
          aria-label="Preferências de cookies"
          aria-modal="false"
        >
          <div className="cookie-content">
            <div>
              <span className="cookie-label">
                SANTZZDEV · PRIVACIDADE
              </span>

              <h2>Você escolhe sua privacidade.</h2>

              <p>
                Utilizamos cookies necessários para o funcionamento
                do site. Com sua autorização, também utilizamos
                ferramentas analíticas para entender como os
                visitantes navegam.
              </p>

              <a href="/privacidade">
                Política de Privacidade
              </a>
            </div>

            <div className="cookie-actions">
              <button onClick={() => saveConsent("accepted")}>
                Aceitar
              </button>

              <button onClick={() => saveConsent("rejected")}>
                Recusar
              </button>

              <button
                onClick={() => setSettingsOpen(!settingsOpen)}
                aria-expanded={settingsOpen}
              >
                {settingsOpen ? "Fechar" : "Personalizar"}
              </button>
            </div>

            {settingsOpen && (
              <div className="cookie-preferences">
                <p>
                  <strong>Cookies necessários</strong>
                  <br />
                  Sempre ativos para garantir o funcionamento do site.
                </p>

                <label>
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(event) =>
                      setAnalyticsEnabled(event.target.checked)
                    }
                  />

                  <span>
                    <strong>Cookies analíticos</strong>
                    <br />
                    Permitir o uso do Google Analytics para análise
                    de visitas.
                  </span>
                </label>

                <button
                  onClick={() =>
                    saveConsent(
                      analyticsEnabled ? "accepted" : "rejected"
                    )
                  }
                >
                  Salvar preferências
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
