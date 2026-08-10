# Animações implementadas

## Sistema principal

- Componente reutilizável: `src/components/ui/Reveal.jsx`
- Estilos globais: `src/styles/animations.css`
- Um único `IntersectionObserver` compartilhado entre todos os elementos.
- Cada animação é executada apenas uma vez.
- Compatibilidade com `prefers-reduced-motion` e impressão.

## Efeitos aplicados

- Hero: entrada inicial de título, texto, diferenciais, botão e médico.
- Sinais: título e itens em sequência.
- Bloco emocional: título, texto e destaque.
- Benefícios: cards em sequência.
- Especialista: foto, título, credenciais e CTA.
- Consulta: linha progressiva e etapas numeradas.
- Ambiente: cards com leve aproximação.
- Avaliações: nota e depoimentos em sequência.
- CTA final: título, diferenciais, botão e assinatura.

## Validações realizadas

- Configuração do projeto validada com `npm run validate`.
- Sintaxe JSX/JavaScript validada em 28 arquivos.
- Importações locais verificadas.
- Sintaxe CSS verificada em todos os arquivos.

## Build

O ambiente de edição não disponibilizou o pacote Vite 6.1.0 no registro interno. Para gerar o build localmente:

```bash
npm install
npm run build
```

## Correção V2

A ativação foi reforçada com pintura inicial em dois frames, observador isolado por elemento, fallback de rolagem, movimentos mais perceptíveis e estado de diagnóstico `data-reveal-state`. Consulte `CORRECAO_ANIMACOES_V2.md`.
