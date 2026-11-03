
"use client";

export default function CookieSettingsButton() {
  function openCookieSettings() {
    window.dispatchEvent(
      new Event("santzzdev-open-cookie-settings")
    );
  }

  return (
    <button
      type="button"
      className="footer-cookie-settings"
      onClick={openCookieSettings}
    >
      Preferências de cookies
    </button>
  );
}
