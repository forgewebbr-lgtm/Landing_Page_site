# Refatoração profissional

## Objetivo

Eliminar sobrescritas acidentais e tornar o layout previsível, preservando o visual atual.

## Nova responsabilidade dos arquivos

- `src/styles/base.css`: tokens, reset e estrutura global.
- `src/styles/components.css`: cabeçalho, botões, cookies e componentes compartilhados.
- `src/styles/hero.css`: todas as regras e ajustes do Hero.
- `src/styles/sections.css`: seções abaixo do Hero.
- `src/styles/responsive.css`: somente media queries.
- `src/components/DoctorPlaque/DoctorPlaque.css`: aparência interna da placa.

## Como ajustar o Hero

Abra `src/styles/hero.css` e altere somente o painel no início de `.hero-section`.

### Casal

```css
--hero-couple-x: 52%;
--hero-couple-y: 60%;
--hero-couple-scale: 1.11;
```

### Bloco do título

```css
--hero-copy-x: 70px;
--hero-copy-y: -55px;
```

### Médico

```css
--hero-doctor-right: -48px;
--hero-doctor-bottom: 0px;
--hero-doctor-photo-height: 110%;
```

### Placa

```css
--hero-plate-left: 0px;
--hero-plate-bottom: 34px;
--hero-plate-width: 57%;
--hero-plate-scale: 1;
```

Exemplo para reduzir e mover a placa para a esquerda:

```css
--hero-plate-left: -60px;
--hero-plate-scale: .88;
```

Agora esses valores possuem um único controlador e não são sobrescritos por `responsive.css`.
