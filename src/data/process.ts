export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Entendimento",
    description:
      "Conversamos sobre sua ideia, seu público e os objetivos que o projeto precisa alcançar.",
  },
  {
    number: "02",
    title: "Planejamento",
    description:
      "Definimos as funcionalidades, a estrutura, o prazo e o orçamento antes de iniciar o desenvolvimento.",
  },
  {
    number: "03",
    title: "Desenvolvimento",
    description:
      "Construo a solução conforme o planejamento e compartilho os avanços para validar os detalhes com você.",
  },
  {
    number: "04",
    title: "Entrega",
    description:
      "Revisamos o resultado, verificamos os pontos combinados e alinhamos a publicação do projeto.",
  },
];
