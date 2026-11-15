export type Certification = {
  icon: "web" | "programming" | "data" | "security" | "computer-science";
  label: string;
  title: string;
  institution: string;
  /** Texto do rodapé do cartão (carga horária, tipo, etc.). */
  detail: string;
  /** PDF em /public. Sem valor, o link "Ver certificado" não aparece. */
  pdf?: string;
};

export const certifications: Certification[] = [
  {
    icon: "web",
    label: "Desenvolvimento web",
    title: "Introduction to Front-End Development",
    institution: "Meta",
    detail: "Curso concluído",
  },
  {
    icon: "programming",
    label: "Programação",
    title: "Python",
    institution: "Santander Open Academy",
    detail: "8 horas",
    pdf: "/certificados/python-santander-open-academy.pdf",
  },
  {
    icon: "data",
    label: "Análise de dados",
    title: "Análise de Dados e Inteligência de Negócios",
    institution: "Gran Faculdade",
    detail: "30 horas",
    pdf: "/certificados/analise-dados-bi-gran-faculdade.pdf",
  },
  {
    icon: "security",
    label: "Cibersegurança",
    title: "Fundamentos de Segurança Cibernética",
    institution: "IBM",
    detail: "Certificação",
    pdf: "/certificados/seguranca-cibernetica-ibm.pdf",
  },
  {
    icon: "computer-science",
    label: "Ciência da computação",
    title: "Ciência da Computação de Harvard no Brasil",
    institution: "Certificado de formação",
    detail: "Formação",
    pdf: "/certificados/ciencia-computacao-harvard-brasil.pdf",
  },
];
