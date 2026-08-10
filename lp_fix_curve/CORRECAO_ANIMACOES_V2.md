# Correção das animações — versão 2

## Problema corrigido

A versão anterior podia parecer estática porque:

1. os movimentos tinham distância pequena e eram difíceis de perceber;
2. elementos já visíveis podiam mudar de estado antes de o navegador pintar o estado inicial;
3. `prefers-reduced-motion` removia completamente as animações;
4. o observador compartilhado tornava o diagnóstico mais difícil em desenvolvimento com React StrictMode.

## Alterações

- `Reveal.jsx` agora usa um observador isolado e seguro por elemento;
- elementos já presentes na tela aguardam dois `requestAnimationFrame` antes de aparecer;
- distância padrão aumentada de 22 px para 34 px;
- duração padrão aumentada para 820 ms;
- `threshold` reduzido para ativar a animação com mais consistência;
- fallback de rolagem incluído para navegadores sem `IntersectionObserver`;
- conteúdo permanece visível se o JavaScript falhar;
- modo de movimento reduzido preserva uma entrada curta por opacidade;
- cada elemento recebe `data-reveal-state="hidden|visible"` para facilitar o diagnóstico.

## Arquivos principais

- `index.html`
- `src/main.jsx`
- `src/components/ui/Reveal.jsx`
- `src/styles/animations.css`

## Como testar corretamente

1. Extraia o ZIP inteiro em uma pasta nova.
2. Execute `npm install`.
3. Execute `ABRIR_PROJETO_ATUAL.bat` ou `npm run dev -- --force --port 5174`.
4. Abra `http://localhost:5174`.
5. Pressione `Ctrl + F5` uma vez para limpar o cache da página.
6. Role devagar a partir da seção “Sinais que merecem atenção”.

Não teste a correção em uma aba antiga, em outro servidor local ou no endereço do Cloudflare antes de publicar o novo build.
