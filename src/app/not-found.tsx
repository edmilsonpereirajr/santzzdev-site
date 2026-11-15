import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="SantzzDev, página inicial">
          Santzz<span>Dev</span>
          <span className="brand-dot">.</span>
        </Link>
      </header>

      <section className="not-found">
        <p className="eyebrow">Erro 404</p>
        <h1>
          Essa página
          <br />
          <span>não existe.</span>
        </h1>
        <p>
          O endereço pode ter mudado ou ter sido digitado errado. Volte para o
          início ou me chame para falar do seu projeto.
        </p>

        <div className="not-found-actions">
          <Link className="button-primary" href="/">
            Voltar ao início <ArrowIcon />
          </Link>
          <Link className="button-secondary" href="/#orcamento">
            Montar meu orçamento <ArrowIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}
