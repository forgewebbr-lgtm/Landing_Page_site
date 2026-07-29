# Implementação tecnológica da landing page

## 1. Arquitetura

A página utiliza consentimento básico: nenhuma tag externa de Analytics ou publicidade é carregada antes de uma decisão do visitante.

```text
Visitante
  ↓
Banner de consentimento
  ├─ rejeita → nenhuma tag externa de medição é carregada
  └─ autoriza → GTM ou fallback direto é carregado
                    ↓
            GA4 / Google Ads / Meta
```

O GTM é a opção preferencial. Quando `VITE_GTM_ID` é válido, os IDs diretos de GA4, Google Ads e Meta são ignorados para impedir eventos duplicados.

## 2. Categorias de consentimento

- `necessary`: sempre ativa; guarda a escolha no `localStorage`;
- `analytics`: libera medição de comportamento e Core Web Vitals;
- `marketing`: libera atribuição publicitária e eventos de conversão.

Sinais Google enviados:

- `analytics_storage`;
- `ad_storage`;
- `ad_user_data`;
- `ad_personalization`;
- `functionality_storage`;
- `security_storage`.

## 3. Atribuição de campanha

A página captura na sessão:

- `utm_source`;
- `utm_medium`;
- `utm_campaign`;
- `utm_content`;
- `utm_id`;
- `gclid`, `gbraid`, `wbraid` e `fbclid`.

Os nomes completos de campanha não são colocados na mensagem do WhatsApp. Um código opaco é calculado, por exemplo:

```text
GGL-3F8A2C
META-71B9D0
WEB-15E4AA
```

A mensagem recebe somente:

```text
Código de atendimento: GGL-3F8A2C
```

Use nomes genéricos nas campanhas, como `g01`, `m02` e `criativo_a`. Não use sintomas, diagnósticos, nome de paciente, telefone ou qualquer informação de saúde em URLs e UTMs.

## 4. Eventos implantados

| Evento | Parâmetros principais | Finalidade |
|---|---|---|
| `whatsapp_click` | `cta_location`, `campaign_code`, `traffic_source` | Conversão principal |
| `menu_click` | `menu_location`, `link_target` | Navegação |
| `section_view` | `section_name` | Seções realmente visualizadas |
| `scroll_depth` | `percent_scrolled` | 25%, 50%, 75% e 90% |
| `engagement_30s` | `engagement_time_seconds` | Permanência mínima |
| `web_vital` | `metric_name`, `metric_value`, `metric_rating` | LCP, CLS e INP |

Posições de CTA:

- `header`;
- `hero`;
- `doctor`;
- `mobile_menu`;
- `final_cta`.

## 5. WhatsApp

A landing page mede o clique, mas não consegue confirmar automaticamente:

- envio da mensagem;
- conversa iniciada;
- agendamento;
- comparecimento;
- pagamento.

Essas etapas pertencem à futura camada comercial/CRM.

## 6. SEO

Foram implantados:

- title e description;
- canonical;
- Open Graph e Twitter Card;
- imagem social 1200 × 630;
- JSON-LD `Physician`;
- `robots.txt`;
- `sitemap.xml`;
- geração automática de SEO durante o build.

## 7. Segurança

O arquivo `public/_headers` inclui:

- HSTS;
- Content Security Policy;
- `X-Content-Type-Options`;
- `Referrer-Policy`;
- `Permissions-Policy`;
- `X-Frame-Options`;
- cache longo para assets versionados.

O formato `_headers` é aplicado automaticamente por Cloudflare Pages e Netlify. Em outro provedor, replique os mesmos cabeçalhos na configuração da hospedagem.

## 8. Privacidade

A página não possui formulário e não coleta diretamente diagnóstico, sintomas ou histórico médico. A política está em:

```text
/politica-de-privacidade.html
```

O texto deve passar por revisão jurídica antes da publicação definitiva, especialmente para confirmar o controlador, canal de privacidade e práticas reais do consultório.
