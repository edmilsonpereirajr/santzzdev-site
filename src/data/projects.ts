export type Project = {
  title: string;
  category: string;
  description: string;
  status: string;
  url: string;
  image: { src: string; alt: string; width: number; height: number };
};

export const projects: Project[] = [
  {
    title: "SquadScope",
    category: "Análise para esports",
    description:
      "Plataforma de análise de desempenho para equipes de Free Fire, com estatísticas e ferramentas voltadas ao acompanhamento dos resultados e à evolução competitiva.",
    status: "Em desenvolvimento",
    url: "https://testesquadscope01.lovable.app",
    image: {
      src: "/images/squadscope.png",
      alt: "Captura real da plataforma SquadScope",
      width: 1358,
      height: 620,
    },
  },
  {
    title: "Musa Criação Digital",
    category: "Loja de produtos digitais",
    description:
      "Loja digital com identidade visual própria, criada para apresentar produtos digitais e oferecer uma experiência de navegação organizada, com foco na apresentação dos produtos e na jornada de compra.",
    status: "Projeto em evolução",
    url: "https://musa-criacao-digital.vercel.app/",
    image: {
      src: "/images/musa-criacao-digital.png",
      alt: "Captura real da loja Musa Criação Digital",
      width: 1366,
      height: 728,
    },
  },
];
