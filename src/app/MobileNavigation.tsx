"use client";

import { useEffect, useRef, useState } from "react";
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
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

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
            onClick={() => setIsOpen(false)}
          />

          <nav
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
                onClick={() => setIsOpen(false)}
              >
                ×
              </button>
            </div>

            <div className="mobile-menu-links">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  ref={
                    link.href === "#portfolio"
                      ? firstLinkRef
                      : undefined
                  }
                  onClick={() => setIsOpen(false)}
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