# Relatório de implementação tecnológica

## Escopo concluído no código

### Consentimento e LGPD

- banner com aceitar, rejeitar e configurar;
- categorias necessárias, audiência e publicidade;
- preferência persistida no navegador;
- reabertura pelo rodapé;
- foco preso no diálogo e navegação por teclado;
- Consent Mode v2 com estado padrão negado;
- carregamento básico: nenhuma tag de medição/publicidade antes da decisão;
- página de Política de Privacidade.

### Mensuração

- suporte preferencial ao Google Tag Manager;
- fallback direto para GA4, Google Ads e Meta Pixel;
- eventos `whatsapp_click`, `menu_click`, `section_view`, `scroll_depth`, `engagement_30s` e `web_vital`;
- identificação da posição de cada botão do WhatsApp;
- medição de LCP, CLS e INP quando disponível;
- conversão direta do Google Ads e evento `Contact` do Meta no modo sem GTM.

### Campanhas e WhatsApp

- captura de UTMs e identificadores de clique em `sessionStorage`;
- código de origem opaco e determinístico;
- código incluído automaticamente na mensagem do WhatsApp;
- nenhuma UTM completa, sintoma ou diagnóstico colocado na mensagem;
- eventos recebem apenas parâmetros genéricos de atribuição.

### SEO

- canonical;
- Open Graph;
- Twitter Card;
- imagem social JPEG 1200 × 630;
- JSON-LD `Physician`;
- `robots.txt` e `sitemap.xml`;
- script de geração de SEO pelo domínio configurado;
- imagem mobile do Hero com 720 × 900 e aproximadamente 39 KB.

### Segurança e hospedagem

- CSP compatível com Google/Meta;
- HSTS, Referrer Policy, Permissions Policy e proteção de MIME;
- cache imutável para assets versionados;
- regras `_headers` e `_redirects` para Cloudflare Pages/Netlify.

## Arquivos principais adicionados

```text
.env
.env.example
IMPLEMENTACAO_TECNOLOGIAS.md
GTM_CONFIGURACAO.md
CHECKLIST_PUBLICACAO.md
RELATORIO_IMPLEMENTACAO.md
scripts/*
src/config/marketing.js
src/lib/*
src/components/privacy/*
src/components/tracking/*
public/_headers
public/_redirects
public/og-image.jpg
public/politica-de-privacidade.html
public/robots.txt
public/sitemap.xml
src/assets/web/hero-casal-mobile.webp
```

## Validações executadas

- sintaxe de todos os arquivos JS/JSX: aprovada com parser TypeScript;
- sintaxe dos quatro arquivos CSS: aprovada;
- resolução de importações relativas: aprovada;
- imagem Open Graph: confirmada em 1200 × 630;
- imagem mobile: confirmada em 720 × 900;
- scripts Node de SEO e validação: aprovados;
- geração de `robots.txt` e `sitemap.xml`: aprovada.

## Pendências externas ao código

O código está preparado, mas os seguintes itens dependem das contas e dados definitivos:

- domínio de produção;
- ID do Google Tag Manager;
- propriedade/ID do GA4;
- conversão e rótulo do Google Ads;
- Meta Pixel, caso seja utilizado;
- publicação e configuração das tags dentro do GTM;
- cadastro no Search Console;
- revisão jurídica da política;
- testes no domínio publicado com Tag Assistant, DebugView e Meta Pixel Helper.

## Observação sobre o build

A instalação de pacotes não foi concluída neste ambiente porque o acesso ao registro npm expirou. Por isso, a validação foi feita por análise sintática e estrutural. No computador local, execute:

```bash
npm install
npm run validate
npm run build
```
