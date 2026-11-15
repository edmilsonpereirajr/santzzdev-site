export type FaqItem = { question: string; answer: string };

/**
 * Perguntas frequentes. Para adicionar uma, basta incluir um item na lista.
 * As respostas só repetem o que o site já afirma (processo, serviços e
 * "Sobre mim"); confirme antes de prometer algo novo (valores, prazos fixos,
 * suporte depois da entrega, hospedagem).
 */
export const faqItems: FaqItem[] = [
  {
    question: "Quanto custa um site?",
    answer:
      "Depende do tipo de projeto e do que ele precisa ter. Depois que você me conta a ideia, defino o orçamento com você antes de começar o desenvolvimento.",
  },
  {
    question: "Quanto tempo leva para ficar pronto?",
    answer:
      "O prazo é combinado no planejamento, de acordo com as funcionalidades e a estrutura do projeto. Se você já tem uma data em mente, informe no pedido de orçamento.",
  },
  {
    question: "Como faço para pedir um orçamento?",
    answer:
      "Responda as perguntas da seção acima e envie a mensagem pronta pelo WhatsApp. Se preferir, é só me chamar direto e contar sua ideia.",
  },
  {
    question: "Com quem eu converso durante o projeto?",
    answer:
      "Diretamente comigo, sem intermediários. Eu compartilho os avanços durante o desenvolvimento para validarmos os detalhes juntos.",
  },
  {
    question: "O site vai funcionar no celular?",
    answer:
      "Sim. Os sites são pensados para funcionar bem em celulares e computadores.",
  },
  {
    question: "Quais tecnologias você usa?",
    answer:
      "Next.js, React, TypeScript, Tailwind CSS e Supabase, entre outras ferramentas que aparecem na seção de tecnologias.",
  },
];
