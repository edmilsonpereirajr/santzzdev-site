# SantzzDev

Site de apresentação e captação de orçamentos da SantzzDev (desenvolvimento web independente).

Site no ar: https://santzzdev.vercel.app

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS 4 + CSS próprio em `src/app/globals.css`
- Hospedagem na Vercel (com Vercel Analytics)
- Google Analytics 4, carregado só após o consentimento de cookies

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run lint
```

## Estrutura

```
src/app/page.tsx            Página inicial
src/app/privacidade/        Política de Privacidade (LGPD)
src/app/layout.tsx          Metadados, SEO, fontes e dados estruturados
src/app/sitemap.ts          Sitemap
src/app/robots.ts           robots.txt
src/components/             Cookies, Analytics, animações e ícones
public/images/              Logo e prints dos projetos
public/certificados/        PDFs dos certificados
```

## Observações

- O domínio oficial é `santzzdev.vercel.app`; `santzzdev-site.vercel.app`
  redireciona para ele (`next.config.ts`).
- `public/googlea6f02e6f89a9fc93.html` é a verificação do Google Search
  Console. Não apague.
