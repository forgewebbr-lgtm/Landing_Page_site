# V8 — Hero mobile refatorado para fidelidade ao modelo

## O que mudou
- Hero mobile reduzido e reestruturado para a proporção visual do modelo.
- Cenário/casal, retrato do médico, placa e conteúdo voltaram a ser camadas independentes.
- Criado `hero-mobile-scene.webp`, contendo somente ambiente + casal, sem o médico incorporado.
- O médico voltou a usar `dr-antonio-real-sem-fundo.webp` como camada independente.
- CTA passa a aparecer antes dos selos no mobile via ordem visual em CSS, sem alterar a ordem do desktop.
- Selos compactos em uma linha: Particular, Discrição e Telemedicina.
- Ícone de Telemedicina trocado para estetoscópio.
- Placa reduzida e reposicionada para ficar próxima ao modelo.
- Header mobile ganhou proporções menores, menu dourado sem caixa e alinhamento central corrigido.
- Curva inferior recebeu maior profundidade no mobile para reproduzir melhor a referência.
- Removidas as imagens mobile antigas que ficaram obsoletas com a nova composição.

## Arquivos principais alterados
- `src/components/sections/Hero.jsx`
- `src/components/sections/Hero.css`
- `src/components/ui/Icon.jsx`
- `src/styles/responsive.css`
- `src/assets/web/hero-mobile-scene.webp` (novo)

## Preservado
- Hero desktop.
- Conteúdo das demais seções.
- Tracking/WhatsApp.
- Placa e retrato desktop.
- Configuração de teste atual.

## Verificação
`node scripts/validate-config.mjs` foi executado no diretório do projeto e validou a configuração sem erros de formato. Há apenas o aviso esperado de que GTM/GA4 ainda não estão configurados.

O build não foi executado neste ambiente porque `vite@6.1.0` não está disponível no registry interno usado aqui; isso é uma limitação do ambiente de execução, não um erro apontado no código-fonte.
