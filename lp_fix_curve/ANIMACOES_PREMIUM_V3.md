# Animações premium — versão 3

## Ajustes aplicados

- Disparo mais tardio: `threshold: 0.18`.
- Margem inferior do observador: `-12%`.
- Linha de gatilho visual: `76%` da altura da tela.
- Atraso-base global: `130ms`.
- Duração padrão: `940ms`.
- Movimento vertical padrão: `32px`.
- Blur inicial sutil: `4px` no desktop e `2.5px` no mobile.
- Cards preservam seus atrasos individuais, somados ao atraso-base.
- Imagens principais usam duração entre `980ms` e `1080ms`.
- Linha da seção de consulta é desenhada em `1200ms`.
- Execução única e suporte a `prefers-reduced-motion` preservados.

## Arquivos principais

- `src/components/ui/Reveal.jsx`
- `src/styles/animations.css`

## Seções com duração específica atualizada

- `src/components/sections/Process.jsx`
- `src/components/sections/Comfort.jsx`
- `src/components/sections/Doctor.jsx`
