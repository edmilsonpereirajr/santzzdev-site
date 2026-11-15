import ArrowIcon from "@/components/ArrowIcon";
import ScrollReveal from "@/components/ScrollReveal";
import { services } from "@/data/services";

export default function Services() {
  return (
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
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{service.category}</span>

              <span className="service-icon" aria-hidden="true">
                {service.icon ?? <ArrowIcon />}
              </span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contato">
                {service.cta} <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
