# Configuração recomendada do Google Tag Manager

## 1. Arquivo `.env`

Preencha somente:

```env
VITE_GTM_ID=GTM-XXXXXXX
```

Mantenha vazios os IDs diretos para evitar duplicidade:

```env
VITE_GA4_MEASUREMENT_ID=
VITE_GOOGLE_ADS_ID=
VITE_GOOGLE_ADS_CONVERSION_LABEL=
VITE_META_PIXEL_ID=
```

## 2. Variáveis constantes no GTM

Crie:

- `CONST - GA4 ID` → `G-XXXXXXXXXX`;
- `CONST - Google Ads ID` → `AW-XXXXXXXXX`;
- `CONST - Google Ads Label - WhatsApp` → rótulo da conversão;
- `CONST - Meta Pixel ID` → número do Pixel.

## 3. Variáveis da camada de dados

Crie variáveis do tipo **Data Layer Variable**, versão 2:

- `DLV - cta_location`;
- `DLV - campaign_code`;
- `DLV - traffic_source`;
- `DLV - traffic_medium`;
- `DLV - landing_variant`;
- `DLV - link_domain`;
- `DLV - menu_location`;
- `DLV - link_target`;
- `DLV - section_name`;
- `DLV - percent_scrolled`;
- `DLV - engagement_time_seconds`;
- `DLV - metric_name`;
- `DLV - metric_value`;
- `DLV - metric_rating`.

## 4. Google Analytics 4

### Google tag

- tipo: Google tag;
- Tag ID: `{{CONST - GA4 ID}}`;
- acionador: Initialization — All Pages;
- consentimento: exigir `analytics_storage`.

### Eventos personalizados

Crie uma tag GA4 Event:

- Measurement ID/Google tag: configuração acima;
- Event Name: `{{Event}}`;
- acionador: Custom Event com expressão regular:

```text
^(whatsapp_click|menu_click|section_view|scroll_depth|engagement_30s|web_vital)$
```

Adicione os parâmetros correspondentes às DLVs. Parâmetros sem valor podem ficar indefinidos.

No GA4, marque `whatsapp_click` como evento principal/key event.

Cadastre dimensões personalizadas para:

- `cta_location`;
- `campaign_code`;
- `landing_variant`;
- `section_name`;
- `menu_location`;
- `metric_name`;
- `metric_rating`.

Cadastre métricas personalizadas para:

- `percent_scrolled`;
- `engagement_time_seconds`;
- `metric_value`.

## 5. Google Ads

Crie no Google Ads uma conversão de site chamada, por exemplo:

```text
Clique no WhatsApp — Landing Page Urologia
```

Não atribua o valor de R$ 800,00 à conversão. O clique não comprova consulta agendada nem receita.

No GTM:

- tipo: Google Ads Conversion Tracking;
- Conversion ID: `{{CONST - Google Ads ID}}`;
- Conversion Label: `{{CONST - Google Ads Label - WhatsApp}}`;
- acionador: Custom Event `whatsapp_click`;
- consentimento adicional: `ad_storage`, `ad_user_data` e `ad_personalization`.

Adicione também uma tag **Conversion Linker** em All Pages, exigindo `ad_storage`.

## 6. Meta Pixel

Use o template oficial/comunitário confiável do Meta Pixel ou o código recomendado pela Meta.

### Pixel base

- Pixel ID: `{{CONST - Meta Pixel ID}}`;
- evento: `PageView`;
- acionador: Initialization — All Pages;
- consentimento adicional: exigir `ad_storage`.

### Conversão

- evento padrão: `Contact`;
- acionador: Custom Event `whatsapp_click`;
- consentimento adicional: exigir `ad_storage`.

Não envie parâmetros de sintomas, diagnóstico, condição médica, telefone, nome, e-mail ou texto da mensagem.

## 7. Ordem de testes

1. Abra o site em janela anônima.
2. Antes da escolha, confirme que GTM/GA/Meta não carregam.
3. Clique em “Rejeitar” e confirme que continuam bloqueados.
4. Limpe o armazenamento ou abra “Configurar cookies”.
5. Autorize medição e confira o GA4 DebugView.
6. Autorize publicidade e confira Google Ads/Meta Pixel Helper.
7. Teste cada botão e confirme `cta_location`.
8. Teste uma URL com UTMs e confirme `campaign_code`.
9. Use o Tag Assistant para verificar estados de consentimento.
