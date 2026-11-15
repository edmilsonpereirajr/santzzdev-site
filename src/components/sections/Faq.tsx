import ScrollReveal from "@/components/ScrollReveal";
import { faqItems } from "@/data/faq";

export default function Faq() {
  return (
    <ScrollReveal>
      <section className="faq section" id="duvidas">
        <div className="faq-intro">
          <p className="eyebrow">Dúvidas frequentes</p>

          <h2>
            Antes de começar,
            <br />
            <span>tire suas dúvidas.</span>
          </h2>

          <p className="section-description">
            O que as pessoas mais perguntam antes de pedir um orçamento. Não
            achou a sua? Me chame no WhatsApp.
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>
                <span>{item.question}</span>
                <i aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
