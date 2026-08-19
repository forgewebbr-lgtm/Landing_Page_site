# Configuração recomendada no Google Tag Manager

## 1. Variável de ambiente

Use somente o ID do contêiner:

```env
VITE_GTM_ID=GTM-XXXXXXX
```

Não preencha os IDs diretos no `.env` quando o GTM estiver ativo.

## 2. Google Analytics 4

Dentro do GTM:

1. crie/configure a Google tag ligada ao fluxo Web do GA4;
2. configure a tag para respeitar o Consent Mode;
3. crie tags de evento GA4 para os eventos abaixo usando gatilho de Evento Personalizado com o mesmo nome:
   - `whatsapp_click`
   - `menu_click`
   - `section_view`
   - `scroll_depth`
   - `engaged_30s`
   - `web_vital`
4. encaminhe os parâmetros úteis do `dataLayer` como parâmetros de evento.

O evento mais importante para resultado comercial é `whatsapp_click`. No GA4, marque esse evento como evento principal/key event quando a propriedade estiver configurada.

## 3. Google Ads

Crie uma tag de conversão acionada pelo Evento Personalizado `whatsapp_click` e configure os consentimentos de publicidade exigidos pela tag.

## 4. Meta Pixel

Se o Meta Pixel for administrado pelo GTM, crie a tag dentro do contêiner e dispare o evento de contato a partir de `whatsapp_click`, respeitando a categoria de publicidade.

## 5. Teste

Antes de publicar a campanha:

- use Preview/Tag Assistant do GTM;
- teste primeiro com “Rejeitar não essenciais”;
- confirme que tags opcionais não disparam;
- aceite Analytics e confirme os eventos de audiência;
- aceite Marketing e confirme as conversões;
- teste pelo menos dois CTAs diferentes e confira `cta_location`.
