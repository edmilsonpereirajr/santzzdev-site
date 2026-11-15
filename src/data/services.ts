export type Service = {
  category: string;
  /** Símbolo do cartão. Sem valor, usa o ícone de seta. */
  icon?: string;
  title: string;
  description: string;
  cta: string;
};

export const services: Service[] = [
  {
    category: "Presença digital",
    title: "Sites institucionais",
    description:
      "Apresente sua empresa com profissionalismo, clareza e uma experiência que funciona em celulares e computadores.",
    cta: "Conversar sobre meu site",
  },
  {
    category: "Páginas de conversão",
    icon: "◎",
    title: "Landing pages",
    description:
      "Páginas focadas em um objetivo, com mensagem clara e caminhos simples para o visitante entrar em contato.",
    cta: "Criar minha página",
  },
  {
    category: "Soluções digitais",
    icon: "⌘",
    title: "Projetos personalizados",
    description:
      "Catálogos digitais e funcionalidades planejadas conforme as necessidades e os objetivos de cada projeto.",
    cta: "Discutir minha ideia",
  },
];
