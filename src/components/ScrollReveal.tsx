"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Revela a seção com um fade ao rolar a página.
 *
 * O conteúdo é visível por padrão (HTML do servidor, sem JavaScript, leitores
 * de tela e buscadores enxergam tudo). Só depois que o componente monta no
 * navegador é que as seções ainda fora da tela recebem a classe
 * `reveal-pending`, que as esconde até entrarem na viewport.
 */
export default function ScrollReveal({
  children,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      return;
    }

    // Já está na tela (topo da página ou link com #âncora): não esconde.
    if (element.getBoundingClientRect().top < window.innerHeight) {
      return;
    }

    element.classList.add("reveal-pending");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.remove("reveal-pending");
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      element.classList.remove("reveal-pending");
    };
  }, []);

  return (
    <div ref={ref} className={`${className} scroll-reveal`.trim()}>
      {children}
    </div>
  );
}
