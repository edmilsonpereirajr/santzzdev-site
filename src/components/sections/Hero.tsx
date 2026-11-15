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
          Conheça projetos que estou desenvolvendo, incluindo uma plataforma
          de análise para esports e uma loja de produtos digitais.
        </p>

        <div className="hero-actions">
          <a className="button-primary" href="#contato">
            Solicitar um orçamento <ArrowIcon />
          </a>

          <a className="button-secondary" href="#servicos">
            Conhecer os Serviços <ArrowIcon direction="down" />
          </a>
        </div>

        <div className="hero-note">
          <span className="note-line" />
          Atendimento direto. Soluções pensadas para cada projeto.
        </div>
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
