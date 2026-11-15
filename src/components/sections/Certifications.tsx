import ArrowIcon from "@/components/ArrowIcon";
import CertificationIcon from "@/components/CertificationIcon";
import ScrollReveal from "@/components/ScrollReveal";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
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
          {certifications.map((cert) => (
            <article className="certification-card" key={cert.title}>
              <div className="certification-card-top">
                <span className="certification-icon">
                  <CertificationIcon type={cert.icon} />
                </span>
                <span className="certification-label">{cert.label}</span>
              </div>
              <h3>{cert.title}</h3>
              <p className="certification-institution">{cert.institution}</p>
              <div className="certification-card-footer">
                <span>{cert.detail}</span>
                {cert.pdf && (
                  <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
                    Ver certificado <ArrowIcon />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
