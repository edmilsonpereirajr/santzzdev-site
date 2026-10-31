"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ArrowIcon from "@/components/ArrowIcon";

const links = [
  { href: "#portfolio", label: "Portfólio", number: "01" },
  { href: "#servicos", label: "Serviços", number: "02" },
  { href: "#sobre", label: "Sobre mim", number: "03" },
  { href: "#processo", label: "Processo", number: "04" },
  { href: "#contato", label: "Contato", number: "05" },
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const getFocusableElements = () =>
      Array.from(
        menu.querySelectorAll<HTMLElement>(
          'a[href], button:not(:disabled), [tabindex]:not([tabindex="-1"])'
        )
      );

    getFocusableElements()[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") return;

      const elements = getFocusableElements();
      const first = elements[0];
      const last = elements[elements.length - 1];

      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeMenu]);

  return (
    <div className="mobile-navigation">
      <button
        ref={toggleRef}
        className={`mobile-menu-toggle${isOpen ? " is-open" : ""}`}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <>
          <button
            className="mobile-menu-backdrop"
            type="button"
            aria-label="Fechar menu"
            onClick={closeMenu}
          />

          <nav
            ref={menuRef}
            id="mobile-menu"
            className="mobile-menu-panel"
            aria-label="Navegação para celular"
          >
            <div className="mobile-menu-heading">
              <div>
                <span className="mobile-menu-eyebrow">
                  SANTZZDEV / MENU
                </span>
                <p>Explore o site</p>
              </div>

              <button
                className="mobile-menu-close"
                type="button"
                aria-label="Fechar menu"
                onClick={closeMenu}
              >
                ×
              </button>
            </div>

            <div className="mobile-menu-links">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                >
                  <span className="mobile-menu-number">
                    {link.number}
                  </span>

                  <span className="mobile-menu-label">
                    {link.label}
                  </span>

                  <span className="mobile-menu-arrow">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>

            <div className="mobile-menu-footer">
              <span className="mobile-menu-status" />
              Disponível para novos projetos
            </div>
          </nav>
        </>
      )}
    </div>
  );
}