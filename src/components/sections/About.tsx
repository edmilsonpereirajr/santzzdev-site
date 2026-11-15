import ArrowIcon from "@/components/ArrowIcon";
import ScrollReveal from "@/components/ScrollReveal";
import {
  siNextdotjs,
  siReact,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

export default function About() {
  return (
    <ScrollReveal>
      <section className="about section" id="sobre">
        <div className="about-visual" aria-hidden="true">
          <div className="about-visual-grid" />
          <div className="about-orbit about-orbit-one" />
          <div className="about-orbit about-orbit-two" />

          <div className="about-code-card about-terminal">
            <div className="about-terminal-header">
              <div className="about-terminal-dots">
                <i />
                <i />
                <i />
              </div>

              <span>SantzzDev / Dev</span>

              <span className="about-terminal-status">
                <i /> Em desenvolvimento
              </span>
            </div>

            <div className="about-terminal-body">
              <span className="about-terminal-prompt">
                <i>~</i> whoami
              </span>

              <h3>SantzzDev</h3>
              <p>Desenvolvimento independente</p>

              <div className="about-code-divider" />

              <span className="about-terminal-prompt">
                <i>~</i> tech-stack
              </span>

              <div className="about-tech-logos">
                <svg viewBox="0 0 24 24">
                  <path fill="currentColor" d={siNextdotjs.path} />
                </svg>

                <svg viewBox="0 0 24 24">
                  <path fill={`#${siReact.hex}`} d={siReact.path} />
                </svg>

                <svg viewBox="0 0 24 24">
                  <path
                    fill={`#${siTypescript.hex}`}
                    d={siTypescript.path}
                  />
                </svg>

                <svg viewBox="0 0 24 24">
                  <path
                    fill={`#${siTailwindcss.hex}`}
                    d={siTailwindcss.path}
                  />
                </svg>
              </div>

              <div className="about-code-divider" />

              <span className="about-terminal-availability">
                <i /> Disponível para novos projetos
              </span>
            </div>
          </div>
        </div>

        <div className="about-content">
    <p className="eyebrow">Quem está por trás da SantzzDev</p>

    <h2>
    Quem conversa com você
    <br />
    <span>é quem desenvolve.</span>
    </h2>

    <p className="about-description">
    Meu nome é Edmilson. Sou desenvolvedor independente e criei a
    SantzzDev para desenvolver projetos digitais.
    </p>

    <p className="about-description">
    Desenvolvo sites e soluções digitais com atenção à estrutura,
    à experiência de navegação e às necessidades de cada projeto.
    Também estudo e aplico tecnologias como Next.js, React,
    TypeScript e Supabase nos meus projetos.
    </p>

    <p className="about-description">
    Durante o projeto, você conversa diretamente comigo sobre o
    planejamento, o desenvolvimento e os ajustes necessários.
    </p>

    <div className="about-highlight">
    <span className="about-highlight-line" />
    <p>
    Contato direto. Planejamento claro.
    <span> Desenvolvimento alinhado ao seu projeto.</span>
    </p>
    </div>

    <a className="button-secondary" href="#contato">
    Vamos conversar <ArrowIcon />
    </a>
    </div>
      </section>
    </ScrollReveal>
  );
}
