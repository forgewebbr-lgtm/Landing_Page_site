# V7 — Correção de estabilidade no zoom

Esta versão mantém a identidade e a estrutura visual da V6. O trabalho foi concentrado em impedir saltos, compressões e cortes quando o navegador usa zoom ou quando a largura da janela diminui.

## Alterações principais

- posição da copy do Hero agora é contínua entre 1200 e telas largas;
- placa do médico não troca mais de 280 px para cerca de 420 px ao cruzar 1200 px;
- largura e posição da placa usam `clamp()` e variáveis fluidas;
- médico reduz proporcionalmente conforme a largura disponível;
- título do Hero pode quebrar com segurança em larguras intermediárias;
- botão do Hero não força largura mínima maior que o espaço disponível;
- menu compacto passa a funcionar abaixo de 1100 px;
- grids densos reorganizam em 4, 2 ou 1 coluna conforme a largura;
- seções de médico, consulta, avaliações e CTA empilham antes de colidir;
- overflow continua protegido, mas não é usado para esconder erros estruturais;
- marcador interno atualizado para versão 7.

## Faixas verificadas

A composição foi planejada para permanecer estável nas larguras equivalentes aos zooms mais comuns de um monitor Full HD: 1920, 1536, 1280, 1097, 960 e larguras menores.
