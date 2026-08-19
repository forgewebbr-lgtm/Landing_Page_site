# Tracking V5 — arquitetura de medição

Esta versão preserva o layout e altera somente tracking, atribuição e validação de produção.

## Estratégia de consentimento

- O estado padrão do Google é definido como negado para Analytics e publicidade antes de qualquer tag opcional.
- GTM, GA4, Google Ads e Meta Pixel só são carregados após uma escolha que autorize a categoria correspondente.
- Os parâmetros UTM/GCLID/FBCLID podem ser lidos da URL para formar o código de atendimento, mas ficam somente em memória antes do consentimento.
- `sessionStorage` para origem da campanha só é habilitado quando Analytics ou Marketing é autorizado.
- Se o visitante revogar as categorias opcionais, o armazenamento de campanha da sessão é removido.

## Eventos da landing page

| Evento | Finalidade | Principais parâmetros |
|---|---|---|
| `whatsapp_click` | Conversão principal | `cta_location`, `link_domain`, atribuição |
| `menu_click` | Uso da navegação | `menu_location`, `link_target`, atribuição |
| `section_view` | Seção realmente visualizada | `section_name`, atribuição |
| `scroll_depth` | Profundidade de leitura | `percent_scrolled`, atribuição |
| `engaged_30s` | Permanência mínima de 30 s | `engagement_time_seconds`, atribuição |
| `web_vital` | Qualidade técnica | `metric_name`, `metric_value`, `metric_rating`, atribuição |

Atribuição comum enviada aos eventos:

- `campaign_code`
- `traffic_source`
- `traffic_medium`
- `traffic_campaign`
- `traffic_content`
- `landing_variant`
- `landing_path`

## Duas formas de configuração

### Recomendada: Google Tag Manager

Preencha apenas:

```env
VITE_GTM_ID=GTM-XXXXXXX
```

Os IDs diretos de GA4/Google Ads/Meta devem permanecer vazios. Configure as tags dentro do GTM e use os eventos personalizados do `dataLayer` como gatilhos.

### Fallback sem GTM

Deixe `VITE_GTM_ID` vazio e use os IDs diretos necessários:

```env
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GOOGLE_ADS_ID=AW-000000000
VITE_GOOGLE_ADS_CONVERSION_LABEL=SEU_LABEL
VITE_META_PIXEL_ID=000000000000000
```

Nesse modo:

- GA4 recebe os eventos de audiência quando Analytics é autorizado;
- o clique `whatsapp_click` pode disparar conversão do Google Ads quando Marketing é autorizado;
- o Meta Pixel dispara `Contact` no clique do WhatsApp quando Marketing é autorizado.

## Validação antes da publicação

Durante desenvolvimento:

```bash
npm run validate
```

Antes de publicar:

```bash
npm run validate:production
```

ou, para validar e gerar o build em uma única etapa:

```bash
npm run build:production
```

A validação rígida falha quando não há GTM/GA4 configurado ou quando Google Ads direto está sem o Conversion Label.
