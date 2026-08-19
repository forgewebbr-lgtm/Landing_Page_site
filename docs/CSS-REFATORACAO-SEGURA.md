# Refatoração CSS segura — etapa 1

Objetivo: reduzir dívida técnica sem alterar o visual atual.

## O que foi alterado

- Apenas `src/styles/responsive.css` foi limpo nesta etapa.
- Foram removidas regras ligadas a classes antigas que não existem mais no JSX atual:
  - `signals-grid`
  - `signals-list`
  - `signal-item`
  - `section-kicker`
  - `emotional-copy`
  - `emotional-note`
  - `credentials-grid`
  - `credential-card`
  - `doctor-portrait-integrated`
  - `comfort-grid`
- Também foram removidas ocorrências anteriores de regras 100% idênticas quando uma ocorrência igual permanece mais abaixo no mesmo breakpoint.
- Nenhum valor de uma regra ativa do layout atual foi recalculado ou redesenhado.

## Segurança

- Backup exato do arquivo anterior em `docs/css-backup/responsive-before-safe-cleanup.css`.
- `responsive.css` antes: 3.199 linhas.
- `responsive.css` depois: 3.054 linhas.
- Redução: 145 linhas (4,53%).
- Validação sintática CSS: 0 erros.

## O que NÃO foi feito nesta etapa

Não foram consolidados os blocos V8/V9/V10 que ainda alteram classes ativas do Hero ou de outras seções. Essa parte exige validação visual por breakpoint antes de remover sobrescritas, para evitar regressão de layout.
