import ScrollReveal from "@/components/ScrollReveal";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
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
          {processSteps.map((step) => (
            <article className="process-step" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
