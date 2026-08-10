# Ajuste cirúrgico do Hero

## Causa principal da diferença

O layout usava `--shell: 1440px`. Em um monitor de 1920px, isso criava margens laterais de aproximadamente 240px. O modelo aprovado, porém, usa o Hero e o cabeçalho quase em largura total, com cerca de 48px de margem.

Por isso, no resultado anterior:

- o logotipo e o título começavam muito para dentro;
- o título perdia a terceira linha longa e quebrava em quatro linhas;
- o médico não chegava à borda direita;
- a placa e o médico ficavam menores;
- casal, placa e médico se concentravam no centro.

## Correções aplicadas

- Hero com largura própria de até 1824px, sem alterar as seções inferiores.
- Cabeçalho alinhado ao Hero em telas a partir de 1500px.
- Headline travada em três linhas no desktop.
- Bloco de texto ampliado para até 650px.
- Médico ampliado e encostado na borda direita.
- Card do médico com largura proporcional de 48vw, até 920px.
- Placa ampliada para 57% do card e posicionada a 34px da base.
- Gradiente recalibrado para permitir que o casal permaneça visível sem prejudicar a leitura.
- Breakpoint intermediário criado para telas de 1200 a 1499px.
- Mobile preservado para uma etapa posterior.
