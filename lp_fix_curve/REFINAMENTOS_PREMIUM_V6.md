# Refinamentos premium V6

Esta versão usa integralmente a estrutura do arquivo **Lading_Page_Dr. antonio(21).zip**.
Nenhuma seção, imagem, texto, card, configuração de marketing ou arquivo de publicação foi removido.

## Movimento

- O gatilho de entrada foi deslocado para aproximadamente 76% da altura visível da tela.
- A margem inferior do `IntersectionObserver` passou para `-24%`, evitando animações concluídas antes da área de leitura.
- A curva brusca `cubic-bezier(.22, 1, .36, 1)` foi substituída por `cubic-bezier(.45, 0, .25, 1)`.
- A duração padrão passou para 1320 ms.
- O deslocamento padrão foi reduzido para 18 px.
- O blur foi removido dos textos.
- Imagens importantes usam 1380–1520 ms e escala inicial de 0.992.
- A linha da seção “Como é a consulta” é desenhada em 1550 ms.
- Estrelas e números das etapas perderam giro e efeito de mola.
- Foi adicionada a classe `reveal--settled`, que separa a animação de entrada do hover dos cards.

## Ritmo vertical

O espaçamento foi aumentado somente onde havia alta densidade de informação:

- sinais;
- especialista;
- processo da consulta;
- ambiente e recursos;
- avaliações;
- CTA final.

A faixa de benefícios continua mais compacta para preservar o ritmo da landing page.

## Interações preservadas e suavizadas

- elevação dos cards;
- zoom das imagens do ambiente;
- hover dos ícones;
- brilho dos botões;
- parallax do hero.

O parallax foi reduzido para um máximo de 14 px, mantendo profundidade sem deslocamento perceptível demais.

## Validação

Execute no projeto:

```bash
npm install
npm run validate
npm run dev
```

Depois abra o endereço informado pelo Vite e use `Ctrl + F5`.
