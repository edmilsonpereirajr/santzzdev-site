
"use client";

import { useState } from "react";

const links = [
  { href: "#portfolio", label: "Portfólio" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#processo", label: "Processo" },
  { href: "#contato", label: "Contato" },
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-navigation">
      <button
        className="mobile-menu-toggle"
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
        <nav
          id="mobile-menu"
          className="mobile-menu-panel"
          aria-label="Navegação para celular"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
