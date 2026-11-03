import Image from "next/image";
import ArrowIcon from "@/components/ArrowIcon";
import CertificationIcon from "@/components/CertificationIcon";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import MobileNavigation from "./MobileNavigation";
import ScrollReveal from "@/components/ScrollReveal";

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
        <a className="brand" href="#" aria-label="SantzzDev, página inicial">
          Santzz<span>Dev</span>
          <span className="brand-dot">.</span>
        </a>

        <MobileNavigation />

        <nav className="navigation" aria-label="Navegação principal">
          <a href="#portfolio">Portfólio</a>
          <a href="#servicos">Serviços</a>
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

      <ScrollReveal>
        <section className="portfolio section" id="portfolio">
          <div className="section-heading">
            <p className="eyebrow">Projetos em desenvolvimento</p>

            <h2>
              Ideias reais.
              <br />
              <span>Em construção.</span>
            </h2>

            <p className="section-description">
              Conheça projetos que estou desenvolvendo para transformar ideias
              em experiências digitais.
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
                  sizes="(max-width: 600px) 100vw, 50vw"
                  unoptimized
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
                <p className="portfolio-category">Análise para esports</p>
                <h3>SquadScope</h3>

                <p>
                  Plataforma de análise de desempenho para equipes de Free Fire, com estatísticas e ferramentas 
                  voltadas ao acompanhamento dos resultados e à evolução competitiva.
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
                aria-label="Visitar projeto: Musa Criação Digital (abre em nova aba)"
              >
                <Image
                  src="/images/musa-criacao-digital.png"
                  alt="Captura real da loja Musa Criação Digital"
                  width={1366}
                  height={728}
                  sizes="(max-width: 600px) 100vw, 50vw"
                  unoptimized
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
                <p className="portfolio-category">
                  Loja de produtos digitais
                </p>

                <h3>Musa Criação Digital</h3>

                <p>
                  Loja digital com identidade visual própria, criada para apresentar produtos digitais e oferecer uma 
                  experiência de navegação organizada, com foco na apresentação dos produtos e na jornada de compra.
                </p>

                <span className="portfolio-status">Projeto em evolução</span>
              </div>
            </article>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="certifications section" id="certificacoes">
          <div className="section-heading">
            <p className="eyebrow">Formação contínua</p>
            <h2>
              Formação e <span>certificações.</span>
            </h2>
            <p className="section-description">
              Aprendizado contínuo em tecnologia e desenvolvimento.
            </p>
          </div>

          <div className="certifications-grid">
            <article className="certification-card">
              <div className="certification-card-top">
                <span className="certification-icon">
                 <CertificationIcon type="web" />
              </span>
                <span className="certification-label">Desenvolvimento web</span>
              </div>
              <h3>Introduction to Front-End Development</h3>
              <p className="certification-institution">Meta</p>
              <div className="certification-card-footer">
                <span>Curso concluído</span>
              </div>
            </article>

            <article className="certification-card">
              <div className="certification-card-top">
                <span className="certification-icon">
                  <CertificationIcon type="programming" />
                </span>
                <span className="certification-label">Programação</span>
              </div>
              <h3>Python</h3>
              <p className="certification-institution">Santander Open Academy</p>
              <div className="certification-card-footer">
                <span>8 horas</span>
                <a href="/certificados/822_ctt.edmilsonpereirajr@gmail.com.pdf" target="_blank" rel="noopener noreferrer">
                  Ver certificado <ArrowIcon />
                </a>
              </div>
            </article>

            <article className="certification-card">
              <div className="certification-card-top">
                <span className="certification-icon">
                  <CertificationIcon type="data" />
                </span>
                <span className="certification-label">Análise de dados</span>
              </div>
              <h3>Análise de Dados e Inteligência de Negócios</h3>
              <p className="certification-institution">Gran Faculdade</p>
              <div className="certification-card-footer">
                <span>30 horas</span>
                <a href="/certificados/certificado-curso-livre_10511777065615.pdf" target="_blank" rel="noopener noreferrer">
                  Ver certificado <ArrowIcon />
                </a>
              </div>
            </article>

            <article className="certification-card">
              <div className="certification-card-top">
                <span className="certification-icon">
                  <CertificationIcon type="security" />
              </span>
                <span className="certification-label">Cibersegurança</span>
              </div>
              <h3>Fundamentos de Segurança Cibernética</h3>
              <p className="certification-institution">IBM</p>
              <div className="certification-card-footer">
                <span>Certificação</span>
                <a href="/certificados/4114_ctt.edmilsonpereirajr@gmail.com.pdf" target="_blank" rel="noopener noreferrer">
                  Ver certificado <ArrowIcon />
                </a>
              </div>
            </article>

            <article className="certification-card">
              <div className="certification-card-top">
                <span className="certification-icon">
                  <CertificationIcon type="computer-science" />
                </span>
                <span className="certification-label">Ciência da computação</span>
              </div>
              <h3>Ciência da Computação de Harvard no Brasil</h3>
              <p className="certification-institution">Certificado de formação</p>
              <div className="certification-card-footer">
                <span>Formação</span>
                <a href="/certificados/Certificado_Edmilson%20Pereira%20dos%20Santos%20Junior.pdf" target="_blank" rel="noopener noreferrer">
                  Ver certificado <ArrowIcon />
                </a>
              </div>
            </article>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="services section" id="servicos">
          <div className="section-heading">
            <p className="eyebrow">Serviços</p>

            <h2>
              Tecnologia que trabalha
              <br />
              a favor do <span>seu negócio.</span>
            </h2>

            <p className="section-description">
              Desenvolvo páginas e soluções digitais para apresentar sua marca,
              explicar sua oferta e facilitar o contato com seus clientes.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <span className="service-number">Presença digital</span>

              <span className="service-icon" aria-hidden="true">
                <ArrowIcon />
              </span>

              <h3>Sites institucionais</h3>

              <p>
                Apresente sua empresa com profissionalismo, clareza e uma
                experiência que funciona em celulares e computadores.
              </p>

              <a href="#contato">
                Conversar sobre meu site <ArrowIcon />
              </a>
            </article>

            <article className="service-card">
              <span className="service-number">Páginas de conversão</span>

              <span className="service-icon" aria-hidden="true">
                ◎
              </span>

              <h3>Landing pages</h3>

              <p>
                Páginas focadas em um objetivo, com mensagem clara e caminhos
                simples para o visitante entrar em contato.
              </p>

              <a href="#contato">
                Criar minha página <ArrowIcon />
              </a>
            </article>

            <article className="service-card">
              <span className="service-number">Soluções digitais</span>

              <span className="service-icon" aria-hidden="true">
                ⌘
              </span>

              <h3>Projetos personalizados</h3>

              <p>
                Catálogos digitais e funcionalidades planejadas conforme as
                necessidades e os objetivos de cada projeto.
              </p>

              <a href="#contato">
                Discutir minha ideia <ArrowIcon />
              </a>
            </article>
          </div>
        </section>
      </ScrollReveal>

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

      <ScrollReveal>
        <section className="technologies section" id="tecnologias">
          <div className="section-heading">
            <p className="eyebrow">Ferramentas e tecnologias</p>

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
      </ScrollReveal>

      <ScrollReveal>
        <section className="process section" id="processo">
          <div className="process-intro">
            <p className="eyebrow">Como eu trabalho</p>

            <h2>
              Da primeira conversa
              <br />
              ao <span>projeto no ar.</span>
            </h2>

            <p className="section-description">
              Um processo transparente, com alinhamento antes do desenvolvimento
              e atenção a cada etapa.
            </p>
          </div>

          <div className="process-list">
            <article className="process-step">
              <span>01</span>
              <div>
                <h3>Entendimento</h3>
                <p>
                  Conversamos sobre sua ideia, seu público e os objetivos que o projeto precisa alcançar.
                </p>
              </div>
            </article>

            <article className="process-step">
              <span>02</span>
              <div>
                <h3>Planejamento</h3>
                <p>
                  Definimos as funcionalidades, a estrutura, o prazo e o orçamento antes de iniciar o desenvolvimento.
                </p>
              </div>
            </article>

            <article className="process-step">
              <span>03</span>
              <div>
                <h3>Desenvolvimento</h3>
                <p>Construo a solução conforme o planejamento e compartilho os avanços para validar os detalhes com você.</p>
              </div>
            </article>

            <article className="process-step">
              <span>04</span>
              <div>
                <h3>Entrega</h3>
                <p>
                  Revisamos o resultado, verificamos os pontos combinados e alinhamos a publicação do projeto.
                </p>
              </div>
            </article>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="contact section" id="contato">
          <div className="contact-panel">
            <p className="eyebrow">Vamos conversar sobre seu projeto</p>

            <h2>
              Vamos conversar sobre seu <span>projeto?</span>
            </h2>

            <p>
                Me conte sobre sua ideia, o que seu negócio precisa e quais são
                seus objetivos. Vamos conversar sobre a solução mais adequada,
                as etapas do projeto e o orçamento.
            </p>

            <a
              className="button-primary"
              href="https://wa.me/5582991501145?text=Ol%C3%A1%2C%20SantzzDev!%20Vim%20pelo%20site%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.%0A%0ATipo%20de%20projeto%3A%0AO%20que%20preciso%3A%0AObjetivo%20do%20projeto%3A"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orçamento pelo WhatsApp <ArrowIcon />
            </a>

            <small>
              Converse diretamente comigo pelo WhatsApp, sem intermediários.
            </small>
          </div>
        </section>
      </ScrollReveal>

      <footer className="site-footer">
        <a
          className="brand"
          href="#"
          aria-label="SantzzDev, voltar ao início"
        >
          Santzz<span>Dev</span>
          <span className="brand-dot">.</span>
        </a>

        <p>Ideias que ganham forma.</p>
            <nav aria-label="Navegação do rodapé">
             <a href="#portfolio">Portfólio</a>
              <a href="#servicos">Serviços</a>
           <a href="#sobre">Sobre mim</a>
          <a href="#contato">Contato</a>
      </nav>
            <CookieSettingsButton />
        <span>
          © {new Date().getFullYear()} SantzzDev. Todos os direitos reservados.
        </span>
      </footer>
    </main>
  );
}