# Relatório — V5 Tracking e Consentimento

## Escopo

A V5 foi feita sobre o ZIP com imagens WebP enviado após a aprovação da V4 de CSS. Nenhum arquivo CSS ou asset visual foi alterado.

## Alterações principais

1. **Atribuição sem armazenamento antes do consentimento**
   - UTMs e identificadores de clique são lidos da URL e mantidos em memória.
   - `sessionStorage` só é habilitado quando Analytics ou Marketing é autorizado.
   - Ao revogar as categorias opcionais, o armazenamento da campanha é removido.

2. **Consent Mode**
   - estado padrão negado para Analytics e publicidade;
   - atualização após a escolha do visitante;
   - `personalization_storage` explicitamente negado, pois a landing page não usa personalização de conteúdo.

3. **Eventos padronizados**
   - `whatsapp_click`
   - `menu_click`
   - `section_view`
   - `scroll_depth`
   - `engaged_30s`
   - `web_vital`

4. **Atribuição comum nos eventos**
   - `campaign_code`
   - `traffic_source`
   - `traffic_medium`
   - `traffic_campaign`
   - `traffic_content`
   - `landing_variant`
   - `landing_path`

5. **Produção**
   - `npm run validate` continua aceitando ambiente de desenvolvimento sem GTM/GA4 e exibe aviso.
   - `npm run validate:production` agora falha se GTM/GA4 estiver ausente.
   - Google Ads direto sem Conversion Label também bloqueia a validação rígida.
   - novo comando `npm run build:production` valida a configuração antes do build.

6. **Política de privacidade**
   - texto de armazenamento da campanha alinhado ao comportamento real;
   - data de atualização alterada para 18 de agosto de 2026.

## Verificações realizadas

- sintaxe dos módulos JS/MJS modificados: OK;
- validação normal: OK, com aviso esperado de GTM/GA4 ausente;
- validação rígida: bloqueio esperado enquanto os IDs não forem configurados;
- teste isolado de atribuição: nenhum `sessionStorage` antes do consentimento;
- persistência após consentimento: OK;
- remoção ao revogar: OK;
- sanitização de parâmetros de campanha: OK;
- imports relativos ausentes: 0;
- comparação de CSS e assets com o ZIP recebido: **0 arquivos alterados**.

## Observação

O build Vite completo não foi executado neste ambiente porque as dependências do projeto não estavam instaladas e a instalação pelo npm não ficou disponível no sandbox. A validação de sintaxe e os testes isolados de tracking passaram.
