export const WHATSAPP_NUMBER = "5582991501145";

export type QuoteOption = { id: string; label: string; hint?: string };

/** Pergunta 1: escolha única. */
export const projectTypes: QuoteOption[] = [
  {
    id: "site",
    label: "Site institucional",
    hint: "Apresentar minha empresa",
  },
  {
    id: "landing",
    label: "Landing page",
    hint: "Uma página focada em um objetivo",
  },
  {
    id: "custom",
    label: "Projeto personalizado",
    hint: "Catálogo ou funcionalidades sob medida",
  },
  {
    id: "unsure",
    label: "Ainda não sei",
    hint: "Quero ajuda para decidir",
  },
];

/** Pergunta 2: múltipla escolha. */
export const goals: QuoteOption[] = [
  { id: "present", label: "Apresentar minha empresa" },
  { id: "leads", label: "Receber contatos e orçamentos" },
  { id: "sell", label: "Vender produtos ou serviços" },
  { id: "portfolio", label: "Mostrar meu portfólio" },
  { id: "organize", label: "Organizar informações para clientes" },
];

/** Pergunta 3: escolha única. */
export const deadlines: QuoteOption[] = [
  { id: "asap", label: "O quanto antes" },
  { id: "month", label: "Em até 1 mês" },
  { id: "flexible", label: "Sem pressa" },
  { id: "talk", label: "A combinar" },
];

/** Pergunta 4: múltipla escolha. */
export const extras: QuoteOption[] = [
  { id: "brand", label: "Já tenho logo e identidade visual" },
  { id: "copy", label: "Preciso de ajuda com os textos" },
  { id: "domain", label: "Preciso de ajuda com domínio e hospedagem" },
  { id: "whatsapp", label: "Quero botão de WhatsApp no site" },
];

type QuoteAnswers = {
  name: string;
  type: string;
  goals: string[];
  deadline: string;
  extras: string[];
  details: string;
};

function labels(options: QuoteOption[], ids: string[]) {
  return options.filter((o) => ids.includes(o.id)).map((o) => o.label);
}

/** Monta o texto da mensagem; linhas sem resposta são omitidas. */
export function buildQuoteMessage(a: QuoteAnswers) {
  const type = labels(projectTypes, [a.type])[0];
  const deadline = labels(deadlines, [a.deadline])[0];
  const goalList = labels(goals, a.goals);
  const extraList = labels(extras, a.extras);

  const lines = [
    "Olá, SantzzDev! Vim pelo site e gostaria de solicitar um orçamento.",
    "",
    a.name.trim() && `Nome: ${a.name.trim()}`,
    type && `Tipo de projeto: ${type}`,
    goalList.length > 0 && `Objetivo: ${goalList.join(", ")}`,
    deadline && `Prazo desejado: ${deadline}`,
    extraList.length > 0 && `Também preciso: ${extraList.join("; ")}`,
    a.details.trim() && `Detalhes: ${a.details.trim()}`,
  ];

  return lines.filter((l) => l !== false && l !== undefined).join("\n");
}

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
