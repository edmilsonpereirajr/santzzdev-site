import Image from "next/image";
import ArrowIcon from "@/components/ArrowIcon";
import ScrollReveal from "@/components/ScrollReveal";
import { aboutBlocks, ownProjects } from "@/data/about";

export default function About() {
  return (
    <ScrollReveal>
      <section className="about section" id="sobre">
        <figure className="about-photo">
          <Image
            src="/images/edmilson.jpg"
            alt="Edmilson, desenvolvedor da SantzzDev, pensativo em frente ao computador"
            width={960}
            height={1200}
            sizes="(max-width: 900px) 100vw, 40vw"
            loading="lazy"
          />

          <figcaption>
            <strong>Edmilson</strong>
            <span>Desenvolvedor web · SantzzDev</span>
            <em>
              <i aria-hidden="true" /> Jogador semi-profissional de Free Fire
            </em>
          </figcaption>
        </figure>

        <div className="about-content">
          <p className="eyebrow">Sobre mim</p>

          <h2>
            Do competitivo
            <br />
            ao <span>código.</span>
          </h2>

          <p className="about-description">
            Sou o Edmilson, desenvolvedor independente por trás da SantzzDev.
            Quando você pede um projeto, é comigo que você conversa, do começo
            ao fim.
          </p>

          {aboutBlocks.map((block) => (
            <div className="about-block" key={block.title}>
              <h3>{block.title}</h3>
              <p>{block.text}</p>
            </div>
          ))}

          <div className="about-block">
            <h3>Projetos próprios</h3>
            <ul className="about-projects">
              {ownProjects.map((project) => (
                <li key={project.name}>
                  <strong>{project.name}</strong>: {project.description}
                </li>
              ))}
            </ul>
          </div>

          <div className="about-actions">
            <a className="button-primary" href="#orcamento">
              Pedir um orçamento <ArrowIcon />
            </a>
            <a className="button-secondary" href="#portfolio">
              Ver os projetos <ArrowIcon direction="down" />
            </a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}
