
export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#" aria-label="SantzzDev, página inicial">
          Santzz<span>Dev</span>
          <span className="brand-dot">.</span>
        </a>

        <nav className="navigation" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#processo">Processo</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className="header-cta" href="#contato">
          Vamos conversar <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            <span className="status-dot" />
            DESENVOLVIMENTO WEB · SANTZZDEV
          </p>

          <h1>
            Sua ideia,
            <br />
            nossa <span>solução.</span>
          </h1>

          <p className="hero-description">
            Criamos experiências digitais modernas para transformar ideias
            em oportunidades. Seu negócio merece uma presença digital à altura.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#contato">
              Começar um projeto <span aria-hidden="true">↗</span>
            </a>
            <a className="button-secondary" href="#servicos">
              Conhecer serviços <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="hero-note">
            <span className="note-line" />
            Design cuidadoso. Código de qualidade. Foco no seu negócio.
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Ilustração abstrata de tecnologia"
        >
          <div className="visual-grid" />
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="visual-core">
            <span className="core-symbol">&lt;/&gt;</span>
            <span className="core-label">IDEIAS EM CÓDIGO</span>
          </div>

          <div className="floating-card card-top">
            <span className="card-indicator" />
            <span>Experiências digitais</span>
          </div>

          <div className="floating-card card-bottom">
            <span className="code-mark">{"{ }"}</span>
            <span>
              <strong>Feito para você</strong>
              <small>Soluções sob medida</small>
            </span>
          </div>

          <span className="visual-caption">
            CRIATIVIDADE + TECNOLOGIA
          </span>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <span className="index-line" />
          <span>03</span>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="section-heading">
          <p className="eyebrow">O QUE FAZEMOS</p>
          <h2>
            Tecnologia que trabalha
            <br />
            a favor do <span>seu negócio.</span>
          </h2>
          <p className="section-description">
            Soluções digitais pensadas para apresentar sua marca,
            conquistar clientes e facilitar o dia a dia.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <span className="service-number">01 / PRESENÇA DIGITAL</span>
            <span className="service-icon" aria-hidden="true">↗</span>
            <h3>Sites institucionais</h3>
            <p>
              Apresente sua empresa com profissionalismo, clareza e uma
              experiência que funciona em celulares e computadores.
            </p>
            <a href="#contato">
              Conversar sobre meu site <span>↗</span>
            </a>
          </article>

          <article className="service-card">
            <span className="service-number">02 / CONVERSÃO</span>
            <span className="service-icon" aria-hidden="true">◎</span>
            <h3>Landing pages</h3>
            <p>
              Páginas focadas em um objetivo, com mensagem clara e caminhos
              simples para o visitante entrar em contato.
            </p>
            <a href="#contato">
              Criar minha página <span>↗</span>
            </a>
          </article>

          <article className="service-card">
            <span className="service-number">03 / SOLUÇÕES DIGITAIS</span>
            <span className="service-icon" aria-hidden="true">⌘</span>
            <h3>Projetos personalizados</h3>
            <p>
              Catálogos digitais e funcionalidades planejadas conforme
              as necessidades e os objetivos de cada projeto.
            </p>
            <a href="#contato">
              Discutir uma ideia <span>↗</span>
            </a>
          </article>
        </div>
      </section>

      <section className="process section" id="processo">
        <div className="process-intro">
          <p className="eyebrow">COMO TRABALHAMOS</p>
          <h2>
            Do primeiro papo
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
                Conhecemos sua ideia, seu público e o que você precisa resolver.
              </p>
            </div>
          </article>

          <article className="process-step">
            <span>02</span>
            <div>
              <h3>Planejamento</h3>
              <p>
                Definimos escopo, estrutura, prazo e investimento antes de começar.
              </p>
            </div>
          </article>

          <article className="process-step">
            <span>03</span>
            <div>
              <h3>Desenvolvimento</h3>
              <p>
                Construímos a solução e validamos os detalhes com você.
              </p>
            </div>
          </article>

          <article className="process-step">
            <span>04</span>
            <div>
              <h3>Entrega</h3>
              <p>
                Revisamos o projeto e orientamos os próximos passos para publicação.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="contact section" id="contato">
        <div className="contact-panel">
          <p className="eyebrow">SEU PRÓXIMO PASSO COMEÇA AQUI</p>
          <h2>
            Vamos tirar sua
            <br />
            ideia do <span>papel?</span>
          </h2>
          <p>
            Conta pra gente o que você está planejando. Vamos conversar
            sobre a solução mais adequada para o seu projeto.
          </p>
         

<a
  className="button-primary"
  href="https://wa.me/5582991501145?text=Ol%C3%A1%2C%20SantzzDev!%20Gostaria%20de%20conversar%20sobre%20um%20projeto."
  target="_blank"
  rel="noopener noreferrer"
>
  Falar pelo WhatsApp <span aria-hidden="true">↗</span>
</a>


          <small>
             Atendimento direto pelo WhatsApp para conversar sobre seu projeto.
          </small>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand" href="#" aria-label="SantzzDev, voltar ao início">
          Santzz<span>Dev</span>
          <span className="brand-dot">.</span>
        </a>
        <p>Sua ideia, nossa solução.</p>
        <span>
          © {new Date().getFullYear()} SantzzDev. Todos os direitos reservados.
        </span>
      </footer>
    </main>
  );
}