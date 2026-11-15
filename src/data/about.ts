export type AboutBlock = { title: string; text: string };

/** Textos da seção "Sobre mim". Para mudar algo, edite aqui. */
export const aboutBlocks: AboutBlock[] = [
  {
    title: "Minha história",
    text: "Comecei a programar movido pela vontade de criar minhas próprias soluções e transformar ideias em produtos digitais. Desde então, venho me aprofundando em desenvolvimento web, no frontend e no backend. Gosto de transformar problemas reais em aplicações funcionais, da arquitetura e da identidade visual até a publicação.",
  },
  {
    title: "Free Fire e tecnologia",
    text: "Além da tecnologia, sou jogador semi-profissional de Free Fire e continuo no cenário competitivo. Dessa vivência nasceu o SquadScope: percebi que equipes e treinadores precisam de ferramentas melhores para acompanhar estatísticas e analisar desempenho. Meu objetivo é unir tecnologia e experiência prática para criar soluções que tenham utilidade real.",
  },
  {
    title: "O que eu uso",
    text: "HTML, CSS, JavaScript, TypeScript, Python, Next.js e React, com Git, GitHub, Supabase, PostgreSQL e Vercel no dia a dia. Também uso inteligência artificial como apoio ao desenvolvimento, à análise e à otimização de código.",
  },
];

export type OwnProject = { name: string; description: string };

export const ownProjects: OwnProject[] = [
  {
    name: "SantzzDev",
    description: "minha marca de desenvolvimento web, para sites e soluções digitais.",
  },
  {
    name: "SquadScope",
    description:
      "análise de desempenho e gerenciamento de equipes competitivas de Free Fire, com estatísticas, rankings e relatórios.",
  },
  {
    name: "Musa Criação Digital",
    description: "comércio digital de produtos digitais.",
  },
];
