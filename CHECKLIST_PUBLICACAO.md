# Checklist antes da publicação

## Obrigatório

- [ ] substituir `VITE_SITE_URL` pelo domínio HTTPS, sem barra final;
- [ ] criar e publicar o container do Google Tag Manager;
- [ ] preencher `VITE_GTM_ID`;
- [ ] configurar GA4 no GTM;
- [ ] criar conversão de clique no WhatsApp no Google Ads;
- [ ] configurar Meta Pixel somente se houver campanha Meta;
- [ ] testar aceitar, rejeitar e alterar consentimento;
- [ ] confirmar número do WhatsApp;
- [ ] confirmar CRM, RQE, telemedicina e credenciais;
- [ ] confirmar origem e autorização das avaliações;
- [ ] revisar a Política de Privacidade com responsável jurídico/LGPD;
- [ ] confirmar quem é o controlador dos dados e o canal para direitos do titular;
- [ ] executar `npm run validate:production`;
- [ ] executar `npm run build`;

## Google e SEO

- [ ] cadastrar domínio no Google Search Console;
- [ ] enviar `/sitemap.xml`;
- [ ] verificar canonical e Open Graph no domínio publicado;
- [ ] validar JSON-LD no Rich Results Test/Schema Validator;
- [ ] conferir `robots.txt`;
- [ ] verificar a imagem `/og-image.jpg` em compartilhamentos;

## Medição

- [ ] marcar `whatsapp_click` como key event no GA4;
- [ ] criar dimensões personalizadas dos parâmetros relevantes;
- [ ] testar GA4 DebugView;
- [ ] testar Tag Assistant;
- [ ] testar Google Ads Conversion Diagnostics;
- [ ] testar Meta Pixel Helper, quando aplicável;
- [ ] confirmar que nenhuma tag carrega após rejeição;

## Campanhas

- [ ] utilizar UTMs genéricas, sem informações médicas;
- [ ] padronizar códigos de campanha (`g01`, `m01`, `a01`);
- [ ] registrar internamente qual campanha corresponde a cada código;
- [ ] orientar a secretária a preservar o “Código de atendimento” da mensagem;

## Hospedagem

- [ ] confirmar aplicação de `public/_headers`;
- [ ] confirmar aplicação de `public/_redirects`;
- [ ] testar HTTPS e redirecionamento de HTTP;
- [ ] testar página no celular real;
- [ ] executar PageSpeed Insights após publicação;
