import Image from "next/image";
import ArrowIcon from "@/components/ArrowIcon";
import ScrollReveal from "@/components/ScrollReveal";
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
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
          {projects.map((project) => (
            <article className="portfolio-card" key={project.title}>
              <a
                className="portfolio-screenshot"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar projeto: ${project.title} (abre em nova aba)`}
              >
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={project.image.width}
                  height={project.image.height}
                  sizes="(max-width: 600px) 100vw, 50vw"
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
                <p className="portfolio-category">{project.category}</p>
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <span className="portfolio-status">{project.status}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
