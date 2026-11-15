import ArrowIcon from "@/components/ArrowIcon";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  return (
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
  );
}
