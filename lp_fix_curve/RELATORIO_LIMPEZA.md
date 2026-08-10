# Relatório de limpeza do projeto

## Resultado

A landing page foi reorganizada sem mudança intencional no design ou no conteúdo comercial.

## Removido

- `Footer.jsx`, que não era renderizado e não possuía CSS correspondente;
- `ScrollReveal.jsx`, que não era importado por nenhum componente;
- 3 imagens sem uso;
- 4 ícones SVG sem uso;
- 6 variáveis CSS sem referência;
- documentos históricos de rodadas anteriores;
- regras responsivas que repetiam o mesmo valor da regra principal.

## Corrigido

- `1pix` para `1px` na borda da faixa de benefícios;
- nome completo e especialidade centralizados em `src/config/site.js`;
- cabeçalho retirado de dentro do elemento `<main>`;
- menu mobile fecha com `Escape` e ao retornar para o desktop;
- menu mobile fechado não recebe cliques ou foco;
- dimensões, prioridade e carregamento tardio das imagens;
- carregamento das fontes pelo `<head>` em vez de `@import` no CSS.

## Nova organização do CSS

- `src/styles/base.css`
- `src/styles/components.css`
- `src/styles/sections.css`
- `src/styles/responsive.css`

A ordem original das regras foi preservada para reduzir o risco de alterações visuais.

## Validações realizadas

- sintaxe JS/JSX: aprovada;
- sintaxe dos arquivos CSS: aprovada;
- importações relativas: todas encontradas;
- variáveis CSS: todas definidas;
- imagens sem uso: nenhuma;
- referências aos arquivos removidos: nenhuma.

O build de produção deve ser executado localmente com `npm install` e `npm run build`. O ambiente de revisão não conseguiu acessar o registro de pacotes para instalar o Vite.
