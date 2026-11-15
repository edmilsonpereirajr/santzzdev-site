import type { Metadata } from "next";
import Link from "next/link";
import ArrowIcon from "@/components/ArrowIcon";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import { EMAIL } from "@/data/links";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba quais dados a SantzzDev coleta, para que usa, como funcionam os cookies e como exercer seus direitos pela LGPD.",
  alternates: {
    canonical: "/privacidade",
  },
};

const WHATSAPP_URL = "https://wa.me/5582991501145";
const LAST_UPDATE = "14 de novembro de 2026";

export default function PrivacyPolicy() {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="SantzzDev, página inicial">
          Santzz<span>Dev</span>
          <span className="brand-dot">.</span>
        </Link>

        <Link className="header-cta" href="/">
          Voltar ao site <ArrowIcon />
        </Link>
      </header>

      <article className="legal-page">
        <p className="eyebrow">Privacidade e LGPD</p>
        <h1>Política de Privacidade</h1>
        <p className="legal-updated">Última atualização: {LAST_UPDATE}</p>

        <p>
          Esta página explica, de forma direta, quais informações são tratadas
          quando você visita o site da SantzzDev, para que servem e quais são os
          seus direitos de acordo com a Lei Geral de Proteção de Dados (Lei
          13.709/2018, a LGPD).
        </p>

        <section>
          <h2>1. Quem é o responsável</h2>
          <p>
            O responsável pelo tratamento dos dados é Edmilson Pereira dos Santos Junior,
            desenvolvedor independente por trás da SantzzDev. Para qualquer
            assunto sobre privacidade, fale comigo pelo e-mail{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> ou pelo{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            .
          </p>
        </section>

        <section>
          <h2>2. Quais dados são tratados</h2>
          <ul>
            <li>
              <strong>Dados de navegação (analíticos).</strong> Com a sua
              autorização, o Google Analytics 4 registra informações como as
              páginas visitadas, o tempo no site, o tipo de dispositivo e
              navegador e a localização aproximada. Esses dados ajudam a
              entender como o site é usado e a melhorá-lo.
            </li>
            <li>
              <strong>Métricas de acesso agregadas.</strong> O site usa o Vercel
              Analytics para contar visitas e desempenho de forma agregada, sem
              cookies de rastreamento e sem identificar você individualmente.
            </li>
            <li>
              <strong>Sua escolha de cookies.</strong> Guardamos no seu
              navegador (armazenamento local) apenas a decisão de aceitar ou
              recusar os cookies analíticos, para não perguntar de novo a cada
              visita.
            </li>
            <li>
              <strong>Mensagens pelo WhatsApp.</strong> O site não tem
              formulário. Se você clicar no botão de contato, a conversa
              acontece no WhatsApp, e os dados que você enviar (nome, telefone e
              o que escrever) ficam sob os termos do próprio WhatsApp e são
              usados por mim apenas para responder ao seu pedido.
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Cookies e como controlá-los</h2>
          <p>
            Os cookies necessários garantem o funcionamento do site. Os cookies
            analíticos do Google Analytics só são ativados se você clicar em
            &ldquo;Aceitar&rdquo; no aviso de cookies. Se você recusar, o
            Google Analytics não é carregado. Os recursos de publicidade do
            Google ficam sempre desativados.
          </p>
          <p>
            Você pode mudar de ideia quando quiser:
          </p>
          <p>
            <CookieSettingsButton />
          </p>
        </section>

        <section>
          <h2>4. Para que os dados são usados</h2>
          <ul>
            <li>Entender o uso do site e melhorar conteúdo e desempenho.</li>
            <li>Responder pedidos de orçamento e dúvidas enviados por você.</li>
            <li>Cumprir obrigações legais, quando houver.</li>
          </ul>
          <p>
            Os dados analíticos são tratados com base no seu consentimento
            (art. 7º, I, da LGPD), e o atendimento dos seus pedidos, com base na
            execução de procedimentos preliminares a um contrato (art. 7º, V).
            Não vendo dados pessoais.
          </p>
        </section>

        <section>
          <h2>5. Com quem os dados são compartilhados</h2>
          <p>
            Apenas com os serviços necessários ao funcionamento do site: Google
            (Analytics), Vercel (hospedagem e métricas agregadas) e Meta
            (WhatsApp), quando você escolhe conversar por lá. Esses serviços
            podem processar dados em servidores fora do Brasil, seguindo as
            próprias políticas de privacidade e as salvaguardas previstas na
            LGPD para transferência internacional.
          </p>
        </section>

        <section>
          <h2>6. Por quanto tempo os dados ficam guardados</h2>
          <p>
            Os dados analíticos seguem o período de retenção configurado no
            Google Analytics. Conversas de orçamento ficam guardadas pelo tempo
            necessário para atender você e, depois disso, podem ser apagadas a
            seu pedido.
          </p>
        </section>

        <section>
          <h2>7. Seus direitos</h2>
          <p>
            Pela LGPD, você pode pedir a confirmação de que tratamos seus dados,
            o acesso a eles, a correção de dados incorretos, a anonimização ou
            exclusão de dados desnecessários, a portabilidade, informações sobre
            compartilhamento e a revogação do consentimento a qualquer momento.
            Basta me chamar pelo e-mail{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a> ou pelo{" "}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            . Se achar necessário, você também pode registrar uma reclamação na
            Autoridade Nacional de Proteção de Dados (ANPD).
          </p>
        </section>

        <section>
          <h2>8. Mudanças nesta política</h2>
          <p>
            Posso atualizar esta página quando o site ou a lei mudarem. A data
            da última atualização fica sempre no topo.
          </p>
        </section>
      </article>
    </main>
  );
}
