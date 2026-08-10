# Landing Page — Dr. Antonio Flávio Rodrigues

Landing page médica em React + Vite, com rastreamento baseado em consentimento, atribuição de campanhas, SEO técnico e configuração de segurança para hospedagem estática.

## Executar localmente

```bash
npm install
npm run dev
```

## Configuração inicial

1. Copie e preencha o arquivo `.env`.
2. Defina o domínio definitivo em `VITE_SITE_URL`.
3. Use preferencialmente `VITE_GTM_ID` e configure GA4, Google Ads e Meta dentro do GTM.
4. Execute a validação:

```bash
npm run validate
```

A validação rígida, indicada antes da publicação, é:

```bash
npm run validate:production
```

## Gerar versão de produção

```bash
npm run build
```

Antes do build, o projeto gera automaticamente `robots.txt` e `sitemap.xml` usando o domínio configurado.

## Tecnologias implantadas

- Consent Mode v2 em modo básico;
- banner com aceitar, rejeitar e configurar categorias;
- Google Tag Manager com carregamento após consentimento;
- fallback direto para GA4, Google Ads e Meta Pixel;
- captura de UTMs e identificadores de clique;
- código opaco de campanha na mensagem do WhatsApp;
- eventos de CTA, menu, seções, rolagem e engajamento;
- medição de LCP, CLS e INP quando suportada pelo navegador;
- canonical, Open Graph, Twitter Card e JSON-LD;
- `robots.txt`, `sitemap.xml` e imagem social 1200 × 630;
- política de privacidade e controle para reabrir preferências;
- cabeçalhos de segurança e cache para Cloudflare Pages/Netlify;
- redirecionamento de SPA para hospedagem estática.

## Estrutura principal

```text
src/
├── assets/web/
├── components/
│   ├── layout/
│   ├── privacy/
│   ├── sections/
│   ├── tracking/
│   └── ui/
├── config/
│   ├── marketing.js
│   └── site.js
├── lib/
│   ├── campaign.js
│   ├── consent.js
│   ├── tracking.js
│   └── webVitals.js
├── pages/Home.jsx
└── styles/

public/
├── _headers
├── _redirects
├── og-image.jpg
├── politica-de-privacidade.html
├── robots.txt
└── sitemap.xml

scripts/
├── env-utils.mjs
├── generate-seo.mjs
└── validate-config.mjs
```

## Documentação operacional

- `IMPLEMENTACAO_TECNOLOGIAS.md`: arquitetura e eventos implantados;
- `GTM_CONFIGURACAO.md`: configuração exata recomendada no Google Tag Manager;
- `CHECKLIST_PUBLICACAO.md`: pendências antes de colocar a página no ar;
- `RELATORIO_LIMPEZA.md`: limpeza estrutural anterior.

## Antes de publicar

Confirme número do WhatsApp, CRM, RQE, credenciais, telemedicina, avaliações, controlador de dados e texto jurídico. Depoimentos devem ser reais e utilizados com a autorização necessária.
