import Image from "next/image";
import ArrowIcon from "@/components/ArrowIcon";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">
          <span className="status-dot" />
          Desenvolvimento independente · SantzzDev
        </p>

        <h1>
          Sites profissionais
          <br />
          para seu <span>negócio.</span>
        </h1>

        <p className="hero-description">
          Crio sites, landing pages e projetos sob medida para apresentar sua
          marca e facilitar o contato com seus clientes. Você fala direto
          comigo, do planejamento à publicação.
        </p>

        <div className="hero-actions">
          <a className="button-primary" href="#orcamento">
            Montar meu orçamento <ArrowIcon />
          </a>

          <a className="button-secondary" href="#servicos">
            Conhecer os Serviços <ArrowIcon direction="down" />
          </a>
        </div>

        <ul className="hero-proof">
          <li>Você fala direto comigo</li>
          <li>Orçamento pelo WhatsApp</li>
          <li>Funciona no celular e no computador</li>
        </ul>
      </div>

      <div
        className="hero-visual"
        role="img"
        aria-label="Representação visual de ideias transformadas em soluções digitais"
      >
        <div className="visual-grid" />
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />

        <div className="visual-core">
          <Image
            src="/images/logo-santzzdev-transparente.svg"
          alt="Logo SantzzDev"
          width={150}
          height={150}
          className="core-logo"
        />
          <span className="core-label">Sob Medida</span>
        </div>

        <div className="floating-card card-top">
          <span className="card-indicator" />
          <span>Projeto personalizado</span>
        </div>

        <div className="floating-card card-bottom">
          <span className="code-mark">{"{ }"}</span>
          <span>
            <strong>Do seu jeito</strong>
            <small>Desenvolvimento sob medida</small>
          </span>
        </div>

        <span className="visual-caption">
          Planejar · desenvolver · entregar
        </span>
      </div>
    </section>
  );
}
