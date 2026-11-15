"use client";

import { useState } from "react";
import ArrowIcon from "@/components/ArrowIcon";
import ScrollReveal from "@/components/ScrollReveal";
import {
  buildQuoteMessage,
  deadlines,
  extras,
  goals,
  projectTypes,
  whatsappLink,
  type QuoteOption,
} from "@/data/quote";

function toggle(list: string[], id: string) {
  return list.includes(id) ? list.filter((item) => item !== id) : [...list, id];
}

type ChoiceGroupProps = {
  number: string;
  legend: string;
  name: string;
  options: QuoteOption[];
  multiple?: boolean;
  selected: string[];
  onChange: (id: string) => void;
};

function ChoiceGroup({
  number,
  legend,
  name,
  options,
  multiple = false,
  selected,
  onChange,
}: ChoiceGroupProps) {
  return (
    <fieldset className="quote-group">
      <legend>
        <span className="quote-step">{number}</span>
        {legend}
        {multiple && <small>pode escolher mais de uma</small>}
      </legend>

      <div className="quote-options">
        {options.map((option) => (
          <label className="quote-option" key={option.id}>
            <input
              type={multiple ? "checkbox" : "radio"}
              name={name}
              value={option.id}
              checked={selected.includes(option.id)}
              onChange={() => onChange(option.id)}
            />
            <span>
              <strong>{option.label}</strong>
              {option.hint && <small>{option.hint}</small>}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function Quote() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [deadline, setDeadline] = useState("");
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [details, setDetails] = useState("");
  const [copied, setCopied] = useState(false);

  const message = buildQuoteMessage({
    name,
    type,
    goals: selectedGoals,
    deadline,
    extras: selectedExtras,
    details,
  });

  const ready = type !== "";

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <ScrollReveal>
      <section className="quote section" id="orcamento">
        <div className="section-heading">
          <p className="eyebrow">Monte seu pedido</p>

          <h2>
            Conte o que você precisa.
            <br />
            <span>Eu respondo no WhatsApp.</span>
          </h2>

          <p className="section-description">
            Responda em menos de um minuto. A mensagem fica pronta e você só
            envia. Não pede valores nem dados pessoais além do que você
            escrever.
          </p>
        </div>

        <div className="quote-layout">
          <form
            className="quote-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <ChoiceGroup
              number="01"
              legend="Que tipo de projeto você quer?"
              name="tipo"
              options={projectTypes}
              selected={type ? [type] : []}
              onChange={setType}
            />

            <ChoiceGroup
              number="02"
              legend="Qual o objetivo?"
              name="objetivo"
              options={goals}
              multiple
              selected={selectedGoals}
              onChange={(id) => setSelectedGoals((list) => toggle(list, id))}
            />

            <ChoiceGroup
              number="03"
              legend="Para quando você precisa?"
              name="prazo"
              options={deadlines}
              selected={deadline ? [deadline] : []}
              onChange={setDeadline}
            />

            <ChoiceGroup
              number="04"
              legend="Precisa de mais alguma coisa?"
              name="extras"
              options={extras}
              multiple
              selected={selectedExtras}
              onChange={(id) => setSelectedExtras((list) => toggle(list, id))}
            />

            <div className="quote-fields">
              <label>
                <span>Seu nome (opcional)</span>
                <input
                  type="text"
                  value={name}
                  maxLength={60}
                  autoComplete="given-name"
                  onChange={(event) => setName(event.target.value)}
                />
              </label>

              <label>
                <span>Quer contar mais? (opcional)</span>
                <textarea
                  rows={3}
                  value={details}
                  maxLength={400}
                  onChange={(event) => setDetails(event.target.value)}
                />
              </label>
            </div>
          </form>

          <aside className="quote-summary" aria-labelledby="quote-summary-title">
            <p className="eyebrow" id="quote-summary-title">
              Sua mensagem
            </p>

            <pre className="quote-preview" aria-live="polite">
              {message}
            </pre>

            {ready ? (
              <a
                className="button-primary"
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enviar pelo WhatsApp <ArrowIcon />
              </a>
            ) : (
              <span className="button-primary is-disabled" aria-disabled="true">
                Escolha o tipo de projeto
              </span>
            )}

            <button
              className="button-secondary"
              type="button"
              onClick={copyMessage}
            >
              {copied ? "Mensagem copiada" : "Copiar mensagem"}
            </button>

            <small>
              O WhatsApp abre com o texto pronto. Você revisa antes de enviar.
            </small>
          </aside>
        </div>
      </section>
    </ScrollReveal>
  );
}
