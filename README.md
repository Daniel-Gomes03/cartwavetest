# Cartwave — Landing (teste técnico front-end)

Landing page alinhada à interface pública da Cartwave: hero com dashboard, produtos e soluções, “por que escolher”, estatísticas, CTA em gradiente e rodapé.

## Como rodar

Requisitos: Node.js 20+ (recomendado).

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Build de produção:

```bash
npm run build
npm start
```

## Tecnologias

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Estrutura

```
src/
├── app/
│   ├── about/              → /about
│   ├── landing/            → seções da home (Hero, produtos, CTA, etc.)
│   │   └── components/     → cards e blocos só da landing
│   ├── solutions/          → /solutions
│   ├── styles/             → globals.css
│   ├── terms/              → /terms
│   ├── layout.tsx          → shell (Header, Footer, fontes)
│   └── page.tsx            → home; reexporta a landing
├── assets/                 → imagens estáticas (logo, ícones, redes)
├── components/
│   ├── Footer/
│   ├── Header/
│   └── ui/                 → componentes reutilizáveis (BrandLogo, LinkButton, …)
├── constants/              → textos e dados de seções
├── hooks/
└── lib/                    → chamadas utilitárias (ex.: newsletter)
```

## Decisões técnicas adotadas

- **Next.js (App Router) + TypeScript** — rotas em `src/app`, layout raiz com `Header`/`Footer` compartilhados e fonte via `next/font` (Roboto) para performance e LCP previsível.
- **Tailwind CSS 4** — estilização utilitária, tema em `globals.css` e componentes sem CSS-modules adicionais onde o layout já é declarativo.
- **Conteúdo em constantes** — textos e listas de produtos/razões centralizados em `src/constants`, facilitando revisão e eventual troca por CMS ou i18n.
- **`next/dynamic` na landing** — `ProductsSection` e `WhyCartwaveSection` carregados sob demanda para reduzir o bundle inicial da home sem desativar SSR.
- **Header como Client Component** — menu mobile com estado, `Escape`, foco inicial no painel e “tab trap” simples entre primeiro e último elemento focável.
- **Âncoras na home** — seções com `id` alinhados ao menu (`#produtos`, `#why-cartwave`, `#contato`) e `scroll-mt-*` onde faz sentido, para compensar o header fixo ao rolar.
- **Qualidade de código** — Jest + Testing Library (`npm test`), ESLint com `eslint-config-next` + `eslint-config-prettier`, Prettier (`npm run format` / `format:check`).

## Pontos de melhoria caso tivesse mais tempo

- **Navegação entre rotas e âncoras** — links `#…` funcionam na home; em outras páginas faria sentido usar `/<hash>` ou lógica explícita “voltar à home + scroll” para o mesmo item de menu.
- **Testes** — ampliar cobertura (páginas `app`, seções da landing, contratos da API da newsletter).
- **SEO e metadados** — `metadata` por rota (`about`, `solutions`, `terms`).
- **Imagens e mídia** — revisão sistemática de `sizes` e formatos (WebP/AVIF) onde houver PNG.
- **Observabilidade da newsletter** — fila/retry, rate limit e mensagens de erro mais específicas com uma API disponível.

## Observações sobre responsividade e adaptação mobile

- **Breakpoints** — o layout usa principalmente `sm:` e `md:` do Tailwind: exemplo, navegação horizontal a partir de `md`, CTAs do header agrupados a partir de `sm`, menu hambúrguer abaixo de `md`.
- **Header** — sticky com fundo semitransparente e blur; no mobile o painel desliza sob o header com borda superior, links em coluna e fechamento ao tocar em item ou ao pressionar `Escape`.
- **Grids** — seções de cards (produtos, motivos, highlights) passam de uma coluna no estreito para 2–3 colunas conforme o breakpoint, evitando scroll horizontal.
- **Espaçamento** — `container` + `px-11` em vários blocos (alinhado ao layout de referência).
- **Touch** — botões e alvos de toque do menu e CTAs usam áreas confortáveis (`py`, ícones `w-6 h-6` no toggle).
- **Teclado** — foco gerenciado ao abrir o menu mobile melhora uso sem mouse; em uma evolução, um pacote de “focus trap” ou `dialog` semântico (`role="dialog"`) deixaria o padrão ainda mais explícito para leitores de tela.

## Adaptação para React Native

- **O que reaproveitar com pouco ou nenhum ajuste** — `src/constants` (dados e cópias), a lógica de validação de e-mail e o fluxo da newsletter em `src/lib/newsletter` (fetch), e hooks “puros” como `useAlert` desde que não dependam de DOM (`document`, `window`).

- **Stack sugerida** — [Expo](https://expo.dev/) + TypeScript acelera fontes, assets e build; navegação com [React Navigation](https://reactnavigation.org/) (stack para `About` / `Solutions` / `Terms` e uma rota “Home” longa ou tabs se fizer sentido no produto).

- **Substituição de UI** — trocar `div`/`section`/`a` por `View`, `Text`, `ScrollView` ou `FlatList`, `Pressable`/`TouchableOpacity`. Tailwind não existe no RN nativo: equivalentes comuns são **NativeWind** (utilitários próximos ao Tailwind), **Tamagui** ou **StyleSheet** + tokens (cores e espaçamentos espelhando `globals.css`).

- **Imagens** — `next/image` vira [`expo-image`](https://docs.expo.dev/versions/latest/sdk/image/) (cache, transição) ou `Image` do core, com assets em `assets/` já compatíveis.

- **Navegação e links externos** — âncoras `#produtos` viram `scrollTo` em ref do `ScrollView`, `scrollToLocation` em `SectionList`, ou bibliotecas como `react-native-scroll-into-view`. WhatsApp, login e e-mail usam `Linking.openURL` com as mesmas URLs de `links.constants`.

- **Header e rodapé** — header fixo com `position: 'absolute'`/`sticky` (plataformas variam) ou `stickyHeaderIndices` no `FlatList`; menu “hambúrguer” pode ser `Modal`, drawer do React Navigation ou painel animado com `react-native-reanimated`. Footer com formulário reutiliza a mesma chamada à API; teclado coberto pelo conteúdo exige `KeyboardAvoidingView` / `android:windowSoftInputMode`.

- **O que não leva direto** — App Router, `layout.tsx`, SEO com `metadata`, hidratação e `suppressHydrationWarning`; testes de componente seguem com Jest + **React Native Testing Library**.

## Deploy

[https://cartwavetest.vercel.app/](https://cartwavetest.vercel.app/) 
