# Animações de interação — versão 4

## Contexto

As versões anteriores (V2 e V3) resolveram a **entrada** dos elementos na tela
(`Reveal.jsx` + `animations.css`). Esta versão adiciona a camada que faltava:
**interação e permanência** — o que acontece quando o elemento já está visível
e o usuário passa o mouse, ou quando um pequeno detalhe merece destaque extra
além do fade-in padrão.

Nenhuma biblioteca foi adicionada. Tudo continua em CSS puro + um pequeno
efeito de scroll em JavaScript, seguindo o mesmo estilo do projeto.

## Efeitos adicionados

- **Cards com hover (Benefícios, Especialista, Consulta, Ambiente,
  Avaliações)**: leve elevação (`translateY`) e, nos cards com ícone, um
  pequeno giro/escala no ícone ao passar o mouse.
- **Ambiente (Comfort)**: zoom sutil na foto do card ao passar o mouse,
  com `overflow: hidden` para conter o efeito.
- **Consulta (Process)**: o número da etapa agora aparece com um pequeno
  "pop" logo depois que o próprio cartão termina de entrar, reforçando a
  sequência 1 → 2 → 3 → 4 já sugerida pela linha que se desenha.
- **Avaliações (Reviews)**: as cinco estrelas entram em sequência com um
  pequeno "pop" escalonado, em vez de aparecerem todas juntas.
- **Títulos com múltiplas linhas (`TextLines`)**: fora dos cartões que
  reconstroem frases contínuas (onde o texto precisa fluir normalmente),
  cada linha de um título agora sobe em cascata, com um pequeno atraso
  entre uma linha e a próxima.
- **Botão dourado principal**: brilho sutil atravessando o botão ao
  passar o mouse.
- **Hero**: parallax discreto nas camadas de luz (`hero-lighting--lamp`
  e `--couple`) ao rolar a página. A foto do casal, a placa e a
  composição aprovada em `AJUSTE_HERO_CIRURGICO.md` não foram tocadas —
  só as camadas de luz, que já eram puramente decorativas.

## Compatibilidade

- Todos os efeitos novos respeitam `prefers-reduced-motion: reduce`.
- O parallax do Hero é desativado via JavaScript quando o usuário prefere
  menos movimento, e também tem um reforço em CSS para garantir isso.
- O truque de "frase contínua" nos cartões (`display: inline` nos
  fragmentos de texto) foi preservado com `!important` para não conflitar
  com a nova cascata de linhas.

## Arquivos alterados

- `src/styles/sections.css`
- `src/styles/animations.css`
- `src/styles/components.css`
- `src/components/sections/Hero.jsx`
- `src/components/sections/Hero.css`

## Build

Testado com `npm install && npm run build` — build concluído sem erros
(71 módulos transformados).
