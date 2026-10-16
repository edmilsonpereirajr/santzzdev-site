import Image from "next/image";
import ArrowIcon from "@/components/ArrowIcon";
import MobileNavigation from "./MobileNavigation";
import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siGit,
  siGithub,
  siSupabase,
} from "simple-icons";

export default function Home() {
  const technologies = [
    { name: "HTML", icon: siHtml5 },
    { name: "CSS", icon: siCss },
    { name: "JavaScript", icon: siJavascript },
    { name: "TypeScript", icon: siTypescript },
    { name: "React", icon: siReact },
    { name: "Next.js", icon: siNextdotjs },
    { name: "Tailwind CSS", icon: siTailwindcss },
    { name: "Git", icon: siGit },
    { name: "GitHub", icon: siGithub },
    { name: "Supabase", icon: siSupabase },
  ];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="SantzzDev, pÃ¡gina inicial">
          Santzz<span>Dev</span>
          <span className="brand-dot">.</span>
        </a>

        <MobileNavigation />

        <nav className="navigation" aria-label="NavegaÃ§Ã£o principal">
          <a href="#portfolio">PortfÃ³lio</a>
          <a href="#servicos">ServiÃ§os</a>
          <a href="#sobre">Sobre mim</a>
          <a href="#processo">Processo</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-cta" href="#contato">
          Vamos conversar <ArrowIcon />
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" />
            DESENVOLVIMENTO INDEPENDENTE Â· SANTZZDEV
          </p>

          <h1>
            Sites profissionais
            <br />
            para seu <span>negÃ³cio.</span>
          </h1>

          <p className="hero-description">
            ConheÃ§a projetos que demonstram como transformo ideias em soluÃ§Ãµes
            digitais, de plataformas personalizadas a lojas virtuais.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#contato">
              Solicitar um orÃ§amento <ArrowIcon />
            </a>

            <a className="button-secondary" href="#servicos">
              Conhecer os serviÃ§os <ArrowIcon direction="down" />
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            Atendimento direto. SoluÃ§Ãµes pensadas para cada projeto.
          </div>
        </div>

        <div
          className="hero-visual"
          role="img"
          aria-label="RepresentaÃ§Ã£o visual de ideias transformadas em soluÃ§Ãµes digitais"
        >
          <div className="visual-grid" />
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="visual-core">
            <span className="core-symbol">&lt;/&gt;</span>
            <span className="core-label">IDEIA EM CONSTRUÃ‡ÃƒO</span>
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
            PLANEJAR Â· DESENVOLVER Â· ENTREGAR
          </span>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span className="index-line" />
          <span>03</span>
        </div>
      </section>

      <section className="portfolio section" id="portfolio">
        <div className="section-heading">
          <p className="eyebrow">PROJETOS AUTORAIS</p>

          <h2>
            Ideias reais.
            <br />
            <span>Em construÃ§Ã£o.</span>
          </h2>

          <p className="section-description">
            ConheÃ§a projetos que estou desenvolvendo para transformar ideias
            em experiÃªncias digitais.
          </p>
        </div>

        <div className="portfolio-grid">
          <article className="portfolio-card">
            <a
              className="portfolio-screenshot"
              href="https://testesquadscope01.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar projeto: SquadScope (abre em nova aba)"
            >
              <Image
                src="/images/squadscope.png"
                alt="Captura real da plataforma SquadScope"
                width={1200}
                height={750}
                sizes="(max-width: 700px) 100vw, 50vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                loading="lazy"
              />

              <span className="portfolio-open">
                Visitar projeto <ArrowIcon />
              </span>
            </a>

            <div className="portfolio-info">
              <p className="portfolio-category">ANÃLISE Â· ESPORTS</p>
              <h3>SquadScope</h3>

              <p>
                Plataforma voltada Ã  anÃ¡lise de desempenho de equipes de Free
                Fire, com estatÃ­sticas e recursos para acompanhamento
                competitivo.
              </p>

              <span className="portfolio-status">Em desenvolvimento</span>
            </div>
          </article>

          <article className="portfolio-card">
            <a
              className="portfolio-screenshot"
              href="https://musa-criacao-digital.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar projeto: Musa CriaÃ§Ã£o Digital (abre em nova aba)"
            >
              <Image
                src="/images/musa-criacao-digital.png"
                alt="Captura real da loja Musa CriaÃ§Ã£o Digital"
                width={1200}
                height={750}
                sizes="(max-width: 700px) 100vw, 50vw"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
                loading="eager"
              />

              <span className="portfolio-open">
                Visitar projeto <ArrowIcon />
              </span>
            </a>

            <div className="portfolio-info">
              <p className="portfolio-category">
                E-COMMERCE Â· PRODUTOS DIGITAIS
              </p>

              <h3>Musa CriaÃ§Ã£o Digital</h3>

              <p>
                Loja digital desenvolvida para apresentar produtos digitais
                com identidade visual prÃ³pria e uma experiÃªncia de compra
                organizada.
              </p>

              <span className="portfolio-status">Projeto em evoluÃ§Ã£o</span>
            </div>
          </article>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="section-heading">
          <p className="eyebrow">O QUE EU FAÃ‡O</p>

          <h2>
            Tecnologia que trabalha
            <br />
            a favor do <span>seu negÃ³cio.</span>
          </h2>

          <p className="section-description">
            SoluÃ§Ãµes digitais pensadas para apresentar sua marca, conquistar
            clientes e facilitar o dia a dia.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <span className="service-number">01 / PRESENÃ‡A DIGITAL</span>

            <span className="service-icon" aria-hidden="true">
              <ArrowIcon />
            </span>

            <h3>Sites institucionais</h3>

            <p>
              Apresente sua empresa com profissionalismo, clareza e uma
              experiÃªncia que funciona em celulares e computadores.
            </p>

            <a href="#contato">
              Conversar sobre meu site <ArrowIcon />
            </a>
          </article>

          <article className="service-card">
            <span className="service-number">02 / CONVERSÃƒO</span>

            <span className="service-icon" aria-hidden="true">
              â—Ž
            </span>

            <h3>Landing pages</h3>

            <p>
              PÃ¡ginas focadas em um objetivo, com mensagem clara e caminhos
              simples para o visitante entrar em contato.
            </p>

            <a href="#contato">
              Criar minha pÃ¡gina <ArrowIcon />
            </a>
          </article>

          <article className="service-card">
            <span className="service-number">03 / SOLUÃ‡Ã•ES DIGITAIS</span>

            <span className="service-icon" aria-hidden="true">
              âŒ˜
            </span>

            <h3>Projetos personalizados</h3>

            <p>
              CatÃ¡logos digitais e funcionalidades planejadas conforme as
              necessidades e os objetivos de cada projeto.
            </p>

            <a href="#contato">
              Discutir minha ideia <ArrowIcon />
            </a>
          </article>
        </div>
      </section>

      <section className="about section" id="sobre">
        <div className="about-visual" aria-hidden="true">
          <div className="about-visual-grid" />
          <div className="about-orbit about-orbit-one" />
          <div className="about-orbit about-orbit-two" />

          <div className="about-code-card">
            <span className="about-code-label">SANTZZDEV / STUDIO</span>
            <span className="about-code-line">
              <i /> interface.tsx
            </span>
            <span className="about-code-line">
              <i /> soluÃ§Ãµes digitais
            </span>
            <div className="about-code-divider" />
            <span className="about-code-symbol">&lt;/&gt;</span>
            <span className="about-code-status">
              <i /> IDEIA TRANSFORMADA EM PROJETO
            </span>
          </div>
        </div>

        <div className="about-content">
          <p className="eyebrow">QUEM ESTÃ POR TRÃS DA SANTZZDEV</p>

          <h2>
            Desenvolvimento prÃ³ximo.
            <br />
            <span>SoluÃ§Ãµes personalizadas.</span>
          </h2>

          <p>
            Sou desenvolvedor independente e criei a SantzzDev para transformar
            ideias em projetos digitais funcionais. Trabalho diretamente com
            cada cliente para entender suas necessidades e construir soluÃ§Ãµes
            alinhadas aos seus objetivos.
          </p>

          <p>
            Meu foco Ã© unir tecnologia, organizaÃ§Ã£o e uma experiÃªncia simples
            para quem vai usar o projeto.
          </p>

          <a className="button-secondary" href="#contato">
            Vamos conversar <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="technologies section" id="tecnologias">
        <div className="section-heading">
          <p className="eyebrow">FERRAMENTAS E TECNOLOGIAS</p>

          <h2>
            Construindo com
            <br />
            <span>tecnologia.</span>
          </h2>

          <p className="section-description">
            Tecnologias que utilizo nos meus estudos e projetos de
            desenvolvimento.
          </p>
        </div>

        <div className="technology-list">
          {technologies.map((tech) => (
            <span key={tech.name}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill={`#${tech.icon.hex}`}
                aria-hidden="true"
                style={{ flexShrink: 0 }}
              >
                <path d={tech.icon.path} />
              </svg>

              {tech.name}
            </span>
          ))}
        </div>
      </section>

      <section className="process section" id="processo">
        <div className="process-intro">
          <p className="eyebrow">COMO EU TRABALHO</p>

          <h2>
            Da primeira conversa
            <br />
            ao <span>projeto no ar.</span>
          </h2>

          <p className="section-description">
            Um processo transparente, com alinhamento antes do desenvolvimento
            e atenÃ§Ã£o a cada etapa.
          </p>
        </div>

        <div className="process-list">
          <article className="process-step">
            <span>01</span>
            <div>
              <h3>Entendimento</h3>
              <p>
                ConheÃ§o sua ideia, seu pÃºblico e o que vocÃª precisa resolver.
              </p>
            </div>
          </article>

          <article className="process-step">
            <span>02</span>
            <div>
              <h3>Planejamento</h3>
              <p>
                Defino o escopo, a estrutura, o prazo e o investimento antes
                de comeÃ§ar.
              </p>
            </div>
          </article>

          <article className="process-step">
            <span>03</span>
            <div>
              <h3>Desenvolvimento</h3>
              <p>Desenvolvo a soluÃ§Ã£o e valido os detalhes com vocÃª.</p>
            </div>
          </article>

          <article className="process-step">
            <span>04</span>
            <div>
              <h3>Entrega</h3>
              <p>
                Revisamos o projeto e alinhamos os prÃ³ximos passos para
                publicaÃ§Ã£o.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="contact section" id="contato">
        <div className="contact-panel">
          <p className="eyebrow">SEU PRÃ“XIMO PASSO COMEÃ‡A AQUI</p>

          <h2>
            Vamos conversar sobre seu <span>projeto?</span>
          </h2>

          <p>
            Conte o que vocÃª precisa. Vou entender seus objetivos e conversar
            com vocÃª sobre a melhor soluÃ§Ã£o, o escopo e o orÃ§amento.
          </p>

          <a
            className="button-primary"
            href="https://wa.me/5582991501145?text=Ol%C3%A1%2C%20SantzzDev!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%0A%0ATipo%20de%20projeto%3A%0AO%20que%20preciso%3A%0AObjetivo%20do%20projeto%3A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar orÃ§amento pelo WhatsApp <ArrowIcon />
          </a>

          <small>
            Atendimento direto pelo WhatsApp para conversar sobre seu projeto.
          </small>
        </div>
      </section>

      <footer className="site-footer">
        <a
          className="brand"
          href="#"
          aria-label="SantzzDev, voltar ao inÃ­cio"
        >
          Santzz<span>Dev</span>
          <span className="brand-dot">.</span>
        </a>

        <p>Ideias que ganham forma.</p>

        <span>
          Â© {new Date().getFullYear()} SantzzDev. Todos os direitos reservados.
        </span>
      </footer>
    </main>
  );
}
