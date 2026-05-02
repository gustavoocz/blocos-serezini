import "./style.css";

type ThreeModule = typeof import("three");

type Stat = {
  value: string;
  label: string;
};

type Product = {
  id: string;
  name: string;
  description: string;
  specs: Array<[string, string]>;
  icon: string;
  cardPhoto?: ProductPhoto;
  modelKind: "vedacao" | "estrutural" | "canaleta";
  variants: ProductVariant[];
};

type ProductVariant = {
  label: string;
  widthCm: number;
  dimensions: string;
  photos?: ProductPhoto[];
};

type ProductPhoto = {
  src: string;
  alt: string;
  label: string;
  position?: string;
};

type ProductCardSlide = {
  src: string;
  alt: string;
  label: string;
  variantIndex: number;
  position?: string;
};

type MobileProductView = "photos" | "viewer";

type ConcreteTextureKit = {
  map: import("three").CanvasTexture;
  roughnessMap: import("three").CanvasTexture;
  bumpMap: import("three").CanvasTexture;
};

type Highlight = {
  title: string;
  description: string;
};

type CalculatorWall = {
  label: string;
  length: number;
  height: number;
  openings: number;
  grossArea: number;
  netArea: number;
};

type CalculatorResult = {
  walls: CalculatorWall[];
  waste: number;
  grossArea: number;
  openings: number;
  netArea: number;
  quantity: number;
};

type CalculatorQuoteOption = {
  product: string;
  label: string;
  dimensions: string;
};

type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

const stats: Stat[] = [
  { value: "ES", label: "atendimento em Cachoeiro e região" },
  { value: "3", label: "linhas principais para pronta cotação" },
  { value: "ABNT", label: "referências técnicas nas especificações" },
  { value: "Zap", label: "orçamento direto pelo WhatsApp" },
];
const blocksPerSquareMeter = 12.5;
const calculatorQuoteOptions: CalculatorQuoteOption[] = [
  { product: "Bloco de Vedação", label: "Vedação 9", dimensions: "9x19x39 cm" },
  { product: "Bloco de Vedação", label: "Vedação 14", dimensions: "14x19x39 cm" },
  { product: "Bloco de Vedação", label: "Vedação 19", dimensions: "19x19x39 cm" },
  { product: "Bloco Estrutural", label: "Estrutural 12", dimensions: "12x19x39 cm" },
  { product: "Bloco Estrutural", label: "Estrutural 14", dimensions: "14x19x39 cm" },
  { product: "Bloco Estrutural", label: "Estrutural 19", dimensions: "19x19x39 cm" },
  { product: "Canaleta", label: "Canaleta 14", dimensions: "14x19x39 cm" },
  { product: "Canaleta", label: "Canaleta 19", dimensions: "19x19x39 cm" },
];

const productPhotos = {
  vedacao9Close: "/photos/products/bloco-vedacao-9-close.jpeg",
  vedacao9Chao: "/photos/products/bloco-vedacao-9-chao.jpeg",
  vedacao14Close: "/photos/products/bloco-vedacao-14-close.jpeg",
  vedacao14Chao: "/photos/products/bloco-vedacao-14-chao.jpeg",
  vedacao19Close: "/photos/products/bloco-vedacao-19-close.jpeg",
  vedacao19Chao: "/photos/products/bloco-vedacao-19-chao.jpeg",
  estrutural12Close: "/photos/products/bloco-estrutural-12-close.jpeg",
  estrutural19Close: "/photos/products/bloco-estrutural-19-close.jpeg",
  estrutural19Chao: "/photos/products/bloco-estrutural-19-chao.jpeg",
};

const products: Product[] = [
  {
    id: "01",
    name: "Bloco de Vedação",
    description:
      "Para paredes de fechamento e divisórias. Disponível nas medidas mais usadas em obra.",
    specs: [
      ["Normas", "NBR 6136 / NBR 15270"],
      ["Resistência", "≥ 3 MPa"],
      ["Dimensões", "9x19x39 / 14x19x39 / 19x19x39 cm"],
      ["Aplicação", "Vedações e fechamentos"],
    ],
    icon: blockIcon("flat"),
    cardPhoto: {
      src: productPhotos.vedacao14Close,
      alt: "Bloco de vedação 14 cm segurado na mão",
      label: "Foto real do bloco 14 cm",
      position: "center 50%",
    },
    modelKind: "vedacao",
    variants: [
      {
        label: "9 cm",
        widthCm: 9,
        dimensions: "9x19x39 cm",
        photos: [
          {
            src: productPhotos.vedacao9Close,
            alt: "Close do bloco de vedação 9 cm",
            label: "Close do produto",
            position: "center 52%",
          },
          {
            src: productPhotos.vedacao9Chao,
            alt: "Blocos de vedação 9 cm apoiados no chão",
            label: "Blocos no pátio",
            position: "center 50%",
          },
        ],
      },
      {
        label: "14 cm",
        widthCm: 14,
        dimensions: "14x19x39 cm",
        photos: [
          {
            src: productPhotos.vedacao14Close,
            alt: "Close do bloco de vedação 14 cm",
            label: "Close do produto",
            position: "center 50%",
          },
          {
            src: productPhotos.vedacao14Chao,
            alt: "Blocos de vedação 14 cm apoiados no chão",
            label: "Blocos no pátio",
            position: "center 50%",
          },
        ],
      },
      {
        label: "19 cm",
        widthCm: 19,
        dimensions: "19x19x39 cm",
        photos: [
          {
            src: productPhotos.vedacao19Close,
            alt: "Close do bloco de vedação 19 cm",
            label: "Close do produto",
            position: "center 52%",
          },
          {
            src: productPhotos.vedacao19Chao,
            alt: "Blocos de vedação 19 cm apoiados no chão",
            label: "Blocos no pátio",
            position: "center 50%",
          },
        ],
      },
    ],
  },
  {
    id: "02",
    name: "Bloco Estrutural",
    description:
      "Para alvenaria estrutural, conforme projeto. Medidas de 12, 14 e 19 cm.",
    specs: [
      ["Normas", "NBR 6136 / NBR 16868"],
      ["Resistência", "4,5 MPa a 8 MPa"],
      ["Dimensões", "12x19x39 / 14x19x39 / 19x19x39 cm"],
      ["Aplicação", "Sistemas estruturais"],
    ],
    icon: blockIcon("structural"),
    modelKind: "estrutural",
    variants: [
      {
        label: "12 cm",
        widthCm: 12,
        dimensions: "12x19x39 cm",
        photos: [
          {
            src: productPhotos.estrutural12Close,
            alt: "Close do bloco estrutural 12 cm",
            label: "Close do produto",
            position: "center 52%",
          },
        ],
      },
      { label: "14 cm", widthCm: 14, dimensions: "14x19x39 cm" },
      {
        label: "19 cm",
        widthCm: 19,
        dimensions: "19x19x39 cm",
        photos: [
          {
            src: productPhotos.estrutural19Close,
            alt: "Close do bloco estrutural 19 cm",
            label: "Close do produto",
            position: "center 52%",
          },
          {
            src: productPhotos.estrutural19Chao,
            alt: "Blocos estruturais 19 cm apoiados no chão",
            label: "Blocos no pátio",
            position: "center 50%",
          },
        ],
      },
    ],
  },
  {
    id: "03",
    name: "Canaleta",
    description:
      "Para cintas, vergas, contravergas e amarrações. Compatível com a modulação dos blocos.",
    specs: [
      ["Formato", "Canaleta"],
      ["Dimensões", "14x19x39 / 19x19x39 cm"],
      ["Uso", "Cintas, vergas e contravergas"],
      ["Aplicação", "Complemento da alvenaria"],
    ],
    icon: blockIcon("stack"),
    modelKind: "canaleta",
    variants: [
      { label: "14 cm", widthCm: 14, dimensions: "14x19x39 cm" },
      { label: "19 cm", widthCm: 19, dimensions: "19x19x39 cm" },
    ],
  },
];

const factoryAddress = "R. José Dias Lobato, 155 - Otton Marins, Cachoeiro de Itapemirim - ES, 29301-816";
const googleMapsUrl = "https://share.google/WKNEyn6HIj3eceY6j";
const factoryPhotos = {
  patio: "/photos/patio-fabrica.jpeg",
  fachada: "/photos/fachada-fabrica.jpeg",
  caminhao: "/photos/caminhao-entrega.jpeg",
};
const routeSections: Record<string, string> = {
  "/": "hero",
  "/sobre": "sobre",
  "/produtos": "produtos",
  "/calculadora": "calculadora",
  "/diferenciais": "diferenciais",
  "/contato": "contato",
};

const contactItems: ContactItem[] = [
  {
    label: "Localização",
    value: factoryAddress,
    href: googleMapsUrl,
  },
  {
    label: "Telefone / WhatsApp",
    value: "(28) 99982-2728",
    href: "https://wa.me/5528999822728",
  },
  {
    label: "E-mail",
    value: "blocosserezini@gmail.com",
    href: "mailto:blocosserezini@gmail.com",
  },
  {
    label: "Instagram",
    value: "@blocosserezini",
    href: "https://www.instagram.com/blocosserezini/",
  },
  {
    label: "Atendimento",
    value: "Segunda a sexta: 7h às 17h | Sábado: 7h às 11h",
  },
];

const highlights: Highlight[] = [
  {
    title: "Desde 1995",
    description:
      "A fábrica começou com o avô da família, conhecido em Cachoeiro como Zé do Bloco.",
  },
  {
    title: "Família Serezini",
    description:
      "O sobrenome virou marca e segue presente no atendimento, na produção e na rotina da empresa.",
  },
  {
    title: "Mesmo lugar",
    description:
      "A empresa nasceu e continua no mesmo ponto em Cachoeiro de Itapemirim.",
  },
  {
    title: "Todo tipo de obra",
    description:
      "Atendimento para construtoras, lojas, profissionais da obra e clientes finais.",
  },
];

const differentials: Highlight[] = [
  {
    title: "Produto certo",
    description:
      "Você informa a aplicação e recebe orientação para escolher a medida adequada.",
  },
  {
    title: "Menos espera",
    description:
      "Cotação e retorno pelo WhatsApp, sem formulário longo ou troca de mensagens perdida.",
  },
  {
    title: "Linha completa",
    description:
      "Vedação, estrutural e canaleta no mesmo atendimento.",
  },
  {
    title: "Prazo combinado",
    description:
      "Entrega alinhada antes do fechamento para evitar surpresa no canteiro.",
  },
];

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Elemento #app não encontrado.");
}

app.innerHTML = `
  <div class="relative isolate overflow-hidden">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10"></div>
    <div class="pointer-events-none absolute inset-0 opacity-35 ghost-grid"></div>

    <header id="topo" class="sticky top-0 z-50 border-b border-transparent bg-surface/80 backdrop-blur transition-colors duration-300">
      <div class="shell flex items-center justify-between py-4">
        <a href="/" class="flex items-center gap-3">
          <img src="/brand/logo.png" alt="Blocos Serezini" class="h-12 w-auto object-contain sm:h-14" />
        </a>

        <button
          type="button"
          id="menu-toggle"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-expanded="false"
          aria-controls="primary-nav"
          aria-label="Abrir navegação"
        >
          <span class="sr-only">Abrir menu</span>
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <nav
          id="primary-nav"
          class="absolute left-5 right-5 top-[calc(100%+0.75rem)] hidden rounded-[1.75rem] border border-white/10 bg-panel/95 p-5 shadow-[var(--shadow-frame)] lg:static lg:flex lg:items-center lg:gap-10 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
        >
          <div class="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
            ${[
                { href: "/sobre", label: "Sobre" },
                { href: "/produtos", label: "Produtos" },
                { href: "/calculadora", label: "Calculadora" },
                { href: "/diferenciais", label: "Diferenciais" },
                { href: "/contato", label: "Contato" },
              ]
              .map(
                (item) => `
                  <a
                    href="${item.href}"
                    data-nav-link
                    class="text-sm font-semibold uppercase tracking-[0.22em] text-muted transition hover:text-white"
                  >
                    ${item.label}
                  </a>
                `,
              )
              .join("")}
          </div>
          <a
            href="/contato"
            data-nav-link
            class="mt-5 inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent-soft lg:mt-0"
          >
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>

    <main>
      <section id="hero" class="shell grid min-h-screen items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
        <div class="relative z-10 max-w-3xl">
          <p class="section-kicker reveal" data-reveal>Blocos de concreto no Espírito Santo</p>
          <h1 class="section-title reveal max-w-3xl text-[4.3rem] sm:text-[5.8rem] lg:text-[7.6rem]" data-reveal>
            Blocos para obra com <span class="text-accent">entrega combinada</span>
          </h1>
          <p class="section-copy reveal mt-6 max-w-xl text-lg sm:text-xl" data-reveal>
            Blocos de vedação, blocos estruturais e canaletas para construtoras, lojas de material e obras em geral.
          </p>

          <div class="reveal mt-10 flex flex-col gap-4 sm:flex-row" data-reveal>
            <a href="/produtos" class="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent-soft">
              Ver medidas
            </a>
            <a href="/contato" class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/30 hover:bg-white/10">
              Pedir orçamento
            </a>
          </div>

          <dl class="mt-14 grid border-y border-white/10 sm:grid-cols-2 xl:grid-cols-4">
            ${stats
              .map(
                (stat, index) => `
                  <div class="reveal border-b border-white/10 py-5 sm:px-5 ${index % 2 === 0 ? "sm:border-r" : ""} ${index < 2 ? "sm:border-b" : "sm:border-b-0"} ${index < 3 ? "xl:border-r" : ""} xl:border-b-0" data-reveal>
                    <dt class="font-display text-5xl leading-none tracking-[0.06em] text-accent">${stat.value}</dt>
                    <dd class="mt-2 max-w-[12rem] text-sm leading-5 text-muted">${stat.label}</dd>
                  </div>
                `,
              )
              .join("")}
          </dl>
        </div>

        <div class="relative reveal" data-reveal>
          <div class="relative overflow-hidden border-l border-white/10 pl-5 lg:pl-8">
            <div class="relative h-[30rem] overflow-hidden sm:h-[34rem] lg:h-[42rem]">
              <img
                src="${factoryPhotos.patio}"
                width="1200"
                height="1600"
                alt="Pátio da Blocos Serezini com blocos de concreto organizados"
                class="h-full w-full object-cover"
                style="object-position: center 72%;"
                decoding="async"
                fetchpriority="high"
              />
              <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,21,26,0.08)_0%,rgba(17,21,26,0.18)_42%,rgba(17,21,26,0.92)_100%)]"></div>
              <div class="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <p class="text-xs font-semibold uppercase tracking-[0.28em] text-accent-soft">Foto real da fábrica</p>
                <p class="mt-2 font-display text-5xl tracking-[0.08em] text-white">Pátio de produção</p>
                <p class="mt-3 max-w-md text-base leading-7 text-copy/80">Produto no chão, equipe perto e carregamento combinado antes da entrega.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" class="shell scroll-mt-24 py-20 lg:py-28">
        <div class="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div class="reveal lg:sticky lg:top-28" data-reveal>
            <p class="section-kicker">Nossa história</p>
            <h2 class="section-title max-w-2xl">Uma fábrica de família, no mesmo endereço.</h2>

            <div class="mt-8 space-y-6">
              <p class="section-copy">
                A Blocos Serezini começou em 1995, em Cachoeiro de Itapemirim, fundada pelo avô da família, conhecido na cidade como Zé do Bloco.
              </p>
              <p class="section-copy">
                A produção passou para a próxima geração sem perder a rotina de atendimento direto. O cliente fala com quem conhece o bloco, a medida e a entrega.
              </p>
              <p class="section-copy">
                O sobrenome virou marca porque o trabalho continuou no mesmo lugar: fabricar bloco de concreto para obras da região, com orientação simples e prazo combinado.
              </p>
            </div>
          </div>

          <div class="reveal" data-reveal>
            <div class="relative overflow-hidden border-y border-white/10 py-6">
              <img
                src="${factoryPhotos.fachada}"
                width="1600"
                height="1200"
                alt="Entrada da fábrica Blocos Serezini em Cachoeiro de Itapemirim"
                class="h-[24rem] w-full object-cover sm:h-[32rem]"
                style="object-position: center 55%;"
                loading="lazy"
                decoding="async"
              />
              <div class="mt-6 grid gap-0 border-t border-white/10">
                ${highlights
                  .map(
                    (item, index) => `
                      <article class="grid gap-3 border-b border-white/10 py-5 sm:grid-cols-[7rem_1fr]">
                        <p class="font-display text-4xl leading-none tracking-[0.06em] text-accent">${String(index + 1).padStart(2, "0")}</p>
                        <div>
                          <h3 class="text-lg font-semibold text-white">${item.title}</h3>
                          <p class="mt-2 text-sm leading-6 text-muted">${item.description}</p>
                        </div>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="produtos" class="shell scroll-mt-24 py-14 lg:py-28">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div class="reveal" data-reveal>
            <p class="section-kicker">Linha de produtos</p>
            <h2 class="section-title max-w-3xl">Escolha o bloco e peça orçamento.</h2>
          </div>
          <p class="section-copy reveal max-w-md text-sm leading-6 lg:uppercase lg:tracking-[0.16em]" data-reveal>
            No celular, toque no produto para ver fotos, medidas e 3D. Se já souber a medida, peça orçamento direto.
          </p>
        </div>

        <div class="mt-8 grid border-y border-white/10 lg:mt-12">
          ${products
            .map(
              (product) => `
                <article class="reveal group relative overflow-hidden border-b border-white/10 py-5 last:border-b-0 lg:py-7" data-reveal>
                  <div class="absolute right-5 top-4 hidden font-display text-5xl leading-none tracking-[0.08em] text-white/6 lg:block">${product.id}</div>
                  <div class="grid grid-cols-[6.75rem_1fr] gap-4 lg:grid-cols-[17rem_1fr] lg:items-center lg:gap-8">
                    ${productCardMedia(product)}
                    <div class="min-w-0">
                      <div class="hidden h-12 w-12 items-center justify-center rounded-[1rem] border border-accent/25 bg-accent/10 text-accent-soft lg:inline-flex">
                        ${product.icon}
                      </div>
                      <h3 class="font-display text-3xl tracking-[0.06em] text-white lg:mt-5">${product.name}</h3>
                      <p class="mt-2 text-sm leading-6 text-muted lg:mt-4">${product.description}</p>
                      ${productCardDetails(product)}
                      <div class="mt-4 flex flex-col gap-2 sm:flex-row lg:mt-6">
                        <button
                          type="button"
                          data-product-trigger="${product.id}"
                          data-product-variant="0"
                          class="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-accent-soft"
                        >
                          Ver produto
                          <span aria-hidden="true">→</span>
                        </button>
                        <button
                          type="button"
                          data-product-trigger="${product.id}"
                          data-product-variant="0"
                          data-product-quote
                          class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:border-accent/40 hover:bg-accent/10"
                        >
                          Orçar
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="shell hidden pb-20 lg:block lg:pb-28">
        <div class="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div class="reveal" data-reveal>
            <p class="section-kicker">Fotos reais</p>
            <h2 class="section-title max-w-3xl">Produção real, carregamento visível e endereço conhecido.</h2>
          </div>
          <p class="section-copy reveal max-w-xl" data-reveal>
            Pátio, carga e acesso da fábrica aparecem como parte da compra: o cliente vê de onde vem o bloco antes de fechar o pedido.
          </p>
        </div>

        <div class="mt-12 grid gap-6 border-y border-white/10 py-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div class="reveal" data-reveal>
            <img
              src="${factoryPhotos.patio}"
              alt="Pátio de produção da Blocos Serezini"
              class="h-[34rem] w-full object-cover"
              style="object-position: center 72%;"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="reveal grid gap-6" data-reveal>
            <img
              src="${factoryPhotos.caminhao}"
              alt="Caminhão carregado com blocos de concreto"
              class="h-64 w-full object-cover"
              style="object-position: center 58%;"
              loading="lazy"
              decoding="async"
            />
            <div class="border-t border-white/10 pt-6">
              <p class="text-xs font-semibold uppercase tracking-[0.28em] text-accent-soft">Rotina de fábrica</p>
              <h3 class="mt-4 font-display text-5xl tracking-[0.06em] text-white">Bloco produzido, separado e carregado.</h3>
              <p class="mt-4 text-base leading-7 text-muted">
                Da fabricação ao caminhão, o atendimento combina quantidade, medida e entrega para reduzir surpresa no canteiro.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="calculadora" class="shell scroll-mt-24 py-20 lg:py-28">
        <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div class="reveal" data-reveal>
            <p class="section-kicker">Calculadora de blocos</p>
            <h2 class="section-title max-w-2xl">Calcule uma estimativa antes de pedir orçamento.</h2>
            <p class="section-copy mt-6">
              Adicione uma ou mais paredes e veja uma quantidade aproximada de blocos. O cálculo considera bloco 39x19 cm com junta de 1 cm.
            </p>
          </div>

          <div class="frame reveal p-6 sm:p-8 lg:p-10" data-reveal>
            <form id="block-calculator-form" class="grid gap-6">
              <div class="order-3 grid gap-4 rounded-lg border border-white/10 bg-white/[0.03] p-4 sm:grid-cols-3 sm:p-5">
                <div>
                  <p class="text-xs uppercase tracking-[0.18em] text-muted">Área líquida</p>
                  <p id="calculator-area" class="mt-1 font-display text-4xl tracking-[0.06em] text-white">0 m²</p>
                </div>
                <div>
                  <p class="text-xs uppercase tracking-[0.18em] text-muted">Blocos</p>
                  <p id="calculator-quantity" class="mt-1 font-display text-5xl tracking-[0.06em] text-accent">0</p>
                </div>
                <div>
                  <p class="text-xs uppercase tracking-[0.18em] text-muted">Base</p>
                  <p id="calculator-rate" class="mt-1 font-display text-4xl tracking-[0.06em] text-white">12,5/m²</p>
                </div>
              </div>

              <div class="order-1 grid gap-3">
                <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p class="text-xs uppercase tracking-[0.28em] text-accent-soft">Paredes / trechos</p>
                  <button
                    type="button"
                    id="calculator-add-wall"
                    class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:border-accent/40 hover:bg-accent/10"
                  >
                    Adicionar parede
                  </button>
                </div>
                <div id="calculator-walls" class="grid gap-4">
                  ${calculatorWallRow(1, "10", "2.8", "0")}
                </div>
              </div>

              <div class="order-2 grid gap-5 sm:grid-cols-2">
                ${calculatorInputField("calculator-waste", "Perda", "%", "0")}
              </div>

              <p id="calculator-note" class="order-4 text-sm leading-6 text-muted">
                Estimativa para blocos 39x19 cm, com base em 12,5 blocos por m². A medida da largura pode ser confirmada no orçamento.
              </p>

              <div class="order-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  id="calculator-quote"
                  class="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent-soft"
                >
                  Escolher medida para orçamento
                </button>
                <a
                  href="/contato"
                  class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/25 hover:bg-white/[0.08]"
                >
                  Ir para contato
                </a>
              </div>

              <div id="calculator-quote-options" class="order-6 hidden border-t border-white/10 pt-5">
                <p class="text-xs font-semibold uppercase tracking-[0.24em] text-accent-soft">Escolha a medida do orçamento</p>
                <div class="mt-4 grid gap-2 sm:grid-cols-2">
                  ${calculatorQuoteOptions
                    .map(
                      (option) => `
                        <button
                          type="button"
                          data-calculator-quote-option
                          data-product="${option.product}"
                          data-label="${option.label}"
                          data-dimensions="${option.dimensions}"
                          class="flex items-center justify-between gap-3 border border-white/10 bg-white/[0.03] px-4 py-3 text-left transition hover:border-accent/50 hover:bg-accent/10"
                        >
                          <span class="text-sm font-semibold text-white">${option.label}</span>
                          <span class="text-xs uppercase tracking-[0.14em] text-muted">${option.dimensions}</span>
                        </button>
                      `,
                    )
                    .join("")}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="diferenciais" class="shell scroll-mt-24 py-20 lg:py-28">
        <div class="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div class="reveal" data-reveal>
            <p class="section-kicker">Como funciona</p>
            <h2 class="section-title max-w-xl">Menos dúvida no pedido. Menos atraso na obra.</h2>
            <p class="section-copy mt-6">
              A compra de bloco precisa ser simples: medida correta, quantidade alinhada e entrega combinada.
            </p>
            <a href="/contato" class="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent-soft">
              Pedir orçamento
            </a>
          </div>

          <div class="reveal border-y border-white/10" data-reveal>
            ${differentials
              .map(
                (item, index) => `
                  <article class="grid gap-4 border-b border-white/10 py-6 last:border-b-0 sm:grid-cols-[5rem_1fr]">
                    <p class="font-display text-5xl leading-none tracking-[0.06em] text-accent-soft">0${index + 1}</p>
                    <div>
                      <h3 class="font-display text-4xl tracking-[0.06em] text-white">${item.title}</h3>
                      <p class="mt-2 max-w-xl text-base leading-7 text-muted">${item.description}</p>
                    </div>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section id="contato" class="shell scroll-mt-24 py-20 lg:py-28">
        <div class="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div class="reveal border-y border-white/10 py-8 sm:py-10" data-reveal>
            <p class="section-kicker">Fale com a equipe</p>
            <h2 class="section-title max-w-xl">Passe sua lista de blocos pelo WhatsApp.</h2>
            <p class="section-copy mt-6">
              Preencha produto, quantidade estimada e local de entrega. A mensagem já sai pronta para atendimento.
            </p>

            <div class="mt-8 overflow-hidden">
              <img
                src="${factoryPhotos.fachada}"
                width="1600"
                height="1200"
                alt="Entrada da fábrica Blocos Serezini em Cachoeiro de Itapemirim"
                class="h-64 w-full object-cover"
                style="object-position: center 55%;"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div class="mt-10 space-y-6">
              ${contactItems
                .map(
                  ({ label, value, href }) => `
                    <div class="border-b border-white/10 pb-4">
                      <p class="text-xs uppercase tracking-[0.28em] text-accent-soft">${label}</p>
                      ${
                        href
                          ? `<a href="${href}" target="_blank" rel="noreferrer" class="mt-2 inline-flex text-base text-copy/85 transition hover:text-accent-soft">${value}</a>`
                          : `<p class="mt-2 text-base text-copy/85">${value}</p>`
                      }
                    </div>
                  `,
                )
                .join("")}
            </div>
          </div>

          <div class="frame reveal p-8 sm:p-10" data-reveal>
            <form id="contact-form" class="grid scroll-mt-24 gap-5">
              <div class="grid gap-5 sm:grid-cols-2">
                ${inputField("name", "Nome", "Seu nome completo")}
                ${inputField("phone", "Telefone / WhatsApp", "(28) 99982-2728", "tel")}
              </div>

              ${inputField("email", "E-mail", "seu@email.com", "email")}

              <label class="grid gap-2 text-sm uppercase tracking-[0.2em] text-muted">
                <span>Produto de interesse</span>
                <select
                  name="product"
                  class="rounded-[1.25rem] border border-white/10 bg-surface px-4 py-4 text-base normal-case tracking-normal text-white outline-none transition focus:border-accent"
                >
                  <option value="">Selecione um produto</option>
                  <option>Bloco de Vedação</option>
                  <option>Bloco Estrutural</option>
                  <option>Canaleta</option>
                  <option>Múltiplos produtos</option>
                </select>
              </label>

              <label class="grid gap-2 text-sm uppercase tracking-[0.2em] text-muted">
                <span>Mensagem</span>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Ex.: 1.000 blocos 14x19x39 para entrega em Cachoeiro."
                  class="rounded-[1.25rem] border border-white/10 bg-surface px-4 py-4 text-base normal-case tracking-normal text-white outline-none transition focus:border-accent"
                ></textarea>
              </label>

              <div class="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  class="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent-soft"
                >
                  Enviar no WhatsApp
                </button>
                <p id="form-feedback" class="text-sm text-muted" aria-live="polite"></p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>

    <div id="product-modal" class="fixed inset-0 z-[120] hidden">
      <div data-modal-backdrop class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div class="relative flex min-h-full items-center justify-center p-4 sm:p-6">
        <div class="frame relative z-10 max-h-[92vh] w-full max-w-6xl overflow-hidden">
          <button
            type="button"
            id="product-modal-close"
            class="absolute right-5 top-5 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-surface/80 text-white transition hover:border-white/25 hover:bg-white/10"
            aria-label="Fechar visualização 3D"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>

          <div class="grid max-h-[92vh] overflow-y-auto lg:grid-cols-[1.15fr_0.85fr]">
            <div id="product-viewer-panel" class="relative order-2 border-t border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,118,90,0.16),_transparent_35%),linear-gradient(180deg,#151a20_0%,#11151a_100%)] p-4 sm:p-8 lg:order-none lg:block lg:border-r lg:border-t-0">
              <div class="mb-4 flex items-center justify-between gap-4">
                <div class="hidden lg:block">
                  <p id="modal-kicker" class="text-xs uppercase tracking-[0.28em] text-accent-soft">Medidas do produto</p>
                  <h3 id="modal-title" class="mt-3 font-display text-4xl tracking-[0.08em] text-white sm:text-5xl"></h3>
                </div>
                <div class="lg:hidden">
                  <p class="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">Visualização</p>
                  <p id="modal-mobile-media-label" class="mt-1 text-sm font-medium text-white"></p>
                </div>
                <span class="hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-muted lg:inline-flex">
                  3D interativo
                </span>
                <button
                  type="button"
                  id="mobile-media-toggle"
                  class="hidden rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:border-accent/40 hover:bg-accent/10 lg:hidden"
                >
                  Ver fotos reais
                </button>
              </div>

              <div id="product-viewer" class="h-72 rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.10),_transparent_35%),linear-gradient(180deg,#0e1318_0%,#121820_100%)] shadow-[var(--shadow-frame)] sm:h-[30rem] lg:h-[24rem] lg:rounded-[1.8rem]"></div>
              <div id="modal-mobile-photos" class="hidden lg:hidden"></div>

              <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p id="modal-media-help" class="text-sm text-muted">Arraste para girar. O modelo muda conforme a medida selecionada.</p>
                <div id="modal-variant-meta" class="text-xs uppercase tracking-[0.22em] text-accent-soft"></div>
              </div>

              <a
                id="modal-mobile-cta"
                href="/contato"
                class="mt-5 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:bg-accent-soft lg:hidden"
              >
                Pedir orçamento
              </a>
            </div>

            <div class="order-1 p-4 pb-0 sm:p-8 lg:order-none lg:p-10">
              <div class="mb-4 pr-12 lg:hidden">
                <p id="modal-mobile-kicker" class="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-soft">Produto</p>
                <h3 id="modal-mobile-title" class="mt-2 font-display text-2xl tracking-[0.06em] text-white"></h3>
              </div>

              <p id="modal-description" class="section-copy max-w-none text-sm leading-6 sm:text-base lg:text-lg"></p>

              <div class="mt-5 pb-5 lg:mt-8 lg:pb-0">
                <p class="text-xs uppercase tracking-[0.28em] text-accent-soft">Escolha a medida</p>
                <div id="modal-variants" class="mt-4 flex flex-wrap gap-3"></div>
              </div>

              <div id="modal-photos" class="mt-5 hidden lg:mt-8"></div>

              <dl id="modal-specs" class="mt-8 hidden space-y-3 text-sm lg:block"></dl>

              <div class="mt-8 hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5 lg:block">
                <p class="text-xs uppercase tracking-[0.28em] text-accent-soft">Antes do orçamento</p>
                <p class="mt-3 text-sm leading-7 text-muted">
                  Use o modelo 3D para conferir formato, vazados e proporção antes de pedir preço.
                </p>
              </div>

              <div class="mt-8 hidden flex-col gap-3 lg:flex lg:flex-row">
                <a
                  id="modal-cta"
                  href="/contato"
                  class="inline-flex items-center justify-center rounded-full bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent-soft"
                >
                  Pedir orçamento deste modelo
                </a>
                <button
                  type="button"
                  id="modal-close-secondary"
                  class="hidden items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/25 hover:bg-white/[0.08] sm:inline-flex"
                >
                  Continuar navegando
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="border-t border-white/10 bg-panel/80">
      <div class="shell py-12 lg:py-16">
        <div class="grid gap-10 md:grid-cols-2 xl:grid-cols-[0.75fr_0.9fr_1fr_1.2fr_0.8fr]">
          <div>
            <p class="font-display text-3xl tracking-[0.08em] text-white">Páginas</p>
            <nav class="mt-6 grid gap-3 text-sm text-muted">
              ${[
                { href: "/", label: "Home" },
                { href: "/sobre", label: "Sobre" },
                { href: "/produtos", label: "Produtos" },
                { href: "/calculadora", label: "Calculadora" },
                { href: "/diferenciais", label: "Diferenciais" },
                { href: "/contato", label: "Contato" },
              ]
                .map(
                  (item) => `
                    <a href="${item.href}" class="transition hover:text-accent-soft">${item.label}</a>
                  `,
                )
                .join("")}
            </nav>
          </div>

          <div>
            <p class="font-display text-3xl tracking-[0.08em] text-white">Produtos</p>
            <nav class="mt-6 grid gap-3 text-sm text-muted">
              ${products
                .map(
                  (product) => `
                    <a href="/produtos" class="transition hover:text-accent-soft">${product.name}</a>
                  `,
                )
                .join("")}
            </nav>
          </div>

          <div>
            <p class="font-display text-3xl tracking-[0.08em] text-white">Contato</p>
            <div class="mt-6 grid gap-3 text-sm text-muted">
              <a href="https://wa.me/5528999822728" target="_blank" rel="noreferrer" class="transition hover:text-accent-soft">(28) 99982-2728</a>
              <a href="mailto:blocosserezini@gmail.com" class="break-words transition hover:text-accent-soft">blocosserezini@gmail.com</a>
              <p>Segunda a sexta: 7h às 17h</p>
              <p>Sábado: 7h às 11h</p>
            </div>
          </div>

          <div>
            <p class="font-display text-3xl tracking-[0.08em] text-white">Onde nos encontrar</p>
            <div class="mt-6 text-sm leading-7 text-muted">
              <p class="font-semibold text-white">Fábrica</p>
              <p class="mt-1 max-w-xs">${factoryAddress}</p>
              <a
                href="${googleMapsUrl}"
                target="_blank"
                rel="noreferrer"
                class="mt-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:border-accent/60 hover:text-accent-soft"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>

          <div>
            <p class="font-display text-3xl tracking-[0.08em] text-white">Redes sociais</p>
            <div class="mt-6 flex gap-3">
              <a
                href="https://www.instagram.com/blocosserezini/"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir Instagram"
                class="grid h-12 w-12 place-items-center rounded-[1rem] bg-accent text-white transition hover:bg-accent-soft"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3.5" />
                  <path stroke-linecap="round" d="M16.8 7.2h.01" />
                </svg>
              </a>
              <a
                href="https://wa.me/5528999822728"
                target="_blank"
                rel="noreferrer"
                aria-label="Abrir WhatsApp"
                class="grid h-12 w-12 place-items-center rounded-[1rem] bg-accent text-white transition hover:bg-accent-soft"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.47 14.38c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.18.2-.35.22-.65.08-.29-.15-1.25-.47-2.38-1.48-.89-.78-1.49-1.76-1.66-2.06-.17-.29-.01-.45.13-.6.13-.14.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
                  <path d="M12.06 21.8h-.01a9.94 9.94 0 0 1-5.04-1.38l-.36-.22-3.73.98.99-3.64-.24-.37A9.9 9.9 0 0 1 2.15 11.9c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.44 9.9-9.89 9.9Zm8.4-18.29A11.82 11.82 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.09.54 4.14 1.59 5.94L.05 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.55 0 11.89-5.33 11.89-11.89a11.8 11.8 0 0 0-3.49-8.4Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div class="mt-12 border-t border-white/10 pt-8">
          <button
            type="button"
            id="back-to-top"
            class="mx-auto flex items-center gap-3 rounded-full border border-accent/70 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent hover:text-white"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="m12 19 0-14M6 11l6-6 6 6" />
            </svg>
            Voltar ao topo
          </button>
        </div>

        <div class="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <img src="/brand/logo.png" alt="Blocos Serezini" class="h-14 w-auto object-contain" />
          <p class="text-sm text-muted">© <span id="year"></span> Blocos Serezini. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>

    <a
      href="https://wa.me/5528999822728"
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir WhatsApp"
      class="fixed bottom-5 right-5 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition hover:scale-105"
    >
      <svg class="h-7 w-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.47 14.38c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.67.15-.2.29-.77.96-.94 1.16-.18.2-.35.22-.65.08-.29-.15-1.25-.47-2.38-1.48-.89-.78-1.49-1.76-1.66-2.06-.17-.29-.01-.45.13-.6.13-.14.3-.35.45-.52.15-.17.2-.29.3-.49.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.79.37-.27.29-1.04 1.02-1.04 2.49 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35Z" />
        <path d="M12.06 21.8h-.01a9.94 9.94 0 0 1-5.04-1.38l-.36-.22-3.73.98.99-3.64-.24-.37A9.9 9.9 0 0 1 2.15 11.9c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.46-4.44 9.9-9.89 9.9Zm8.4-18.29A11.82 11.82 0 0 0 12.06 0C5.5 0 .16 5.34.16 11.9c0 2.09.54 4.14 1.59 5.94L.05 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.55 0 11.89-5.33 11.89-11.89a11.8 11.8 0 0 0-3.49-8.4Z" />
      </svg>
    </a>
  </div>
`;

const header = document.querySelector<HTMLElement>("header");
const menuToggle = document.querySelector<HTMLButtonElement>("#menu-toggle");
const nav = document.querySelector<HTMLElement>("#primary-nav");
const navLinks = document.querySelectorAll<HTMLElement>("[data-nav-link]");
const productMap = new Map(products.map((product) => [product.id, product]));
const productButtons = document.querySelectorAll<HTMLButtonElement>("[data-product-trigger]");
const productCarousels = document.querySelectorAll<HTMLElement>("[data-product-carousel]");
const productModal = document.querySelector<HTMLDivElement>("#product-modal");
const productModalBackdrop = document.querySelector<HTMLDivElement>("[data-modal-backdrop]");
const productModalClose = document.querySelector<HTMLButtonElement>("#product-modal-close");
const productModalCloseSecondary = document.querySelector<HTMLButtonElement>("#modal-close-secondary");
const modalKicker = document.querySelector<HTMLParagraphElement>("#modal-kicker");
const modalTitle = document.querySelector<HTMLHeadingElement>("#modal-title");
const modalMobileKicker = document.querySelector<HTMLParagraphElement>("#modal-mobile-kicker");
const modalMobileTitle = document.querySelector<HTMLHeadingElement>("#modal-mobile-title");
const modalMobileMediaLabel = document.querySelector<HTMLParagraphElement>("#modal-mobile-media-label");
const modalDescription = document.querySelector<HTMLParagraphElement>("#modal-description");
const modalPhotos = document.querySelector<HTMLDivElement>("#modal-photos");
const modalMobilePhotos = document.querySelector<HTMLDivElement>("#modal-mobile-photos");
const modalSpecs = document.querySelector<HTMLDListElement>("#modal-specs");
const modalVariants = document.querySelector<HTMLDivElement>("#modal-variants");
const modalVariantMeta = document.querySelector<HTMLDivElement>("#modal-variant-meta");
const modalMediaHelp = document.querySelector<HTMLParagraphElement>("#modal-media-help");
const modalCta = document.querySelector<HTMLAnchorElement>("#modal-cta");
const modalMobileCta = document.querySelector<HTMLAnchorElement>("#modal-mobile-cta");
const productViewerPanel = document.querySelector<HTMLDivElement>("#product-viewer-panel");
const mobileMediaToggle = document.querySelector<HTMLButtonElement>("#mobile-media-toggle");
const viewerHost = document.querySelector<HTMLDivElement>("#product-viewer");
const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
const calculatorForm = document.querySelector<HTMLFormElement>("#block-calculator-form");
const calculatorWalls = document.querySelector<HTMLDivElement>("#calculator-walls");
const calculatorAddWall = document.querySelector<HTMLButtonElement>("#calculator-add-wall");
const calculatorArea = document.querySelector<HTMLParagraphElement>("#calculator-area");
const calculatorQuantity = document.querySelector<HTMLParagraphElement>("#calculator-quantity");
const calculatorRate = document.querySelector<HTMLParagraphElement>("#calculator-rate");
const calculatorQuote = document.querySelector<HTMLButtonElement>("#calculator-quote");
const calculatorQuoteOptionsPanel = document.querySelector<HTMLDivElement>("#calculator-quote-options");
const form = document.querySelector<HTMLFormElement>("#contact-form");
const formFeedback = document.querySelector<HTMLParagraphElement>("#form-feedback");
const productField = document.querySelector<HTMLSelectElement>('select[name="product"]');
const messageField = document.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
const year = document.querySelector<HTMLSpanElement>("#year");
const backToTop = document.querySelector<HTMLButtonElement>("#back-to-top");

let activeProduct: Product | null = null;
let activeVariantIndex = 0;
let THREERef: ThreeModule | null = null;
let concreteTextureKit: ConcreteTextureKit | null = null;
let renderer: import("three").WebGLRenderer | null = null;
let scene: import("three").Scene | null = null;
let camera: import("three").PerspectiveCamera | null = null;
let blockGroup: import("three").Group | null = null;
let renderFrame = 0;
let isDragging = false;
let dragOrigin = { x: 0, y: 0 };
let targetRotation = { x: -0.38, y: 0.72 };
let autoSpinVelocity = 0.0035;
let cameraDistance = 7.2;
let calculatorWallCount = 1;
let mobileProductView: MobileProductView = "photos";

year!.textContent = new Date().getFullYear().toString();

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

backToTop?.addEventListener("click", () => {
  navigateToRoute("/");
});

document.addEventListener("click", (event) => {
  if (!(event instanceof MouseEvent) || event.defaultPrevented || event.button !== 0) {
    return;
  }

  if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return;
  }

  const target = event.target as HTMLElement | null;
  const link = target?.closest<HTMLAnchorElement>("a[href]");

  if (!link || (link.target && link.target !== "_self") || link.hasAttribute("download")) {
    return;
  }

  const url = new URL(link.href, window.location.href);

  if (url.origin !== window.location.origin || !getRouteSection(url.pathname)) {
    return;
  }

  event.preventDefault();
  navigateToRoute(url.pathname);
});

window.addEventListener("popstate", () => {
  scrollToRoute(window.location.pathname);
});

requestAnimationFrame(() => {
  scrollToRoute(window.location.pathname, "auto");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 },
);

revealElements.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.transitionDelay = `${Math.min(index * 55, 220)}ms`;
  observer.observe(element);
});

productCarousels.forEach(setupProductCarousel);

window.addEventListener("scroll", () => {
  if (!header) {
    return;
  }

  header.classList.toggle("border-white/10", window.scrollY > 18);
});

menuToggle?.addEventListener("click", () => {
  const isHidden = nav?.classList.toggle("hidden");
  menuToggle.setAttribute("aria-expanded", String(!isHidden));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 1024) {
      nav?.classList.add("hidden");
      menuToggle?.setAttribute("aria-expanded", "false");
    }
  });
});

calculatorForm?.addEventListener("submit", (event) => {
  event.preventDefault();
});

calculatorForm?.addEventListener("input", updateBlockCalculator);
calculatorForm?.addEventListener("change", updateBlockCalculator);

calculatorAddWall?.addEventListener("click", () => {
  if (!calculatorWalls) {
    return;
  }

  calculatorWallCount += 1;
  calculatorWalls.insertAdjacentHTML("beforeend", calculatorWallRow(calculatorWallCount, "", "", "0"));
  syncCalculatorWallLabels();
  updateBlockCalculator();
});

calculatorWalls?.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const removeButton = target.closest<HTMLButtonElement>("[data-remove-wall]");

  if (!removeButton) {
    return;
  }

  const rows = calculatorWalls.querySelectorAll<HTMLElement>("[data-calculator-wall]");

  if (rows.length <= 1) {
    return;
  }

  removeButton.closest<HTMLElement>("[data-calculator-wall]")?.remove();
  syncCalculatorWallLabels();
  updateBlockCalculator();
});

calculatorQuote?.addEventListener("click", () => {
  const result = updateBlockCalculator();

  if (!result) {
    return;
  }

  calculatorQuoteOptionsPanel?.classList.remove("hidden");
  calculatorQuoteOptionsPanel?.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

calculatorQuoteOptionsPanel?.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const button = target.closest<HTMLButtonElement>("[data-calculator-quote-option]");

  if (!button) {
    return;
  }

  const result = updateBlockCalculator();

  if (!result) {
    return;
  }

  const product = button.dataset.product || "";
  const label = button.dataset.label || product;
  const dimensions = button.dataset.dimensions || "";

  if (productField) {
    productField.value = product;
  }

  if (messageField) {
    messageField.value = [
      `Olá, gostaria de orçamento para ${label} ${dimensions}.`,
      `Quantidade estimada pela calculadora: aproximadamente ${result.quantity} blocos.`,
      `Cálculo base: bloco 39x19 cm, ${formatDecimal(blocksPerSquareMeter)} blocos por m².`,
      `Paredes calculadas: ${result.walls.length}.`,
      `Área bruta: ${formatDecimal(result.grossArea)} m².`,
      `Aberturas: ${formatDecimal(result.openings)} m².`,
      `Área líquida total: ${formatDecimal(result.netArea)} m².`,
      `Perda considerada: ${formatDecimal(result.waste)}%.`,
      "",
      ...result.walls.map(
        (wall) =>
          `${wall.label}: ${formatDecimal(wall.length)} m x ${formatDecimal(wall.height)} m, aberturas ${formatDecimal(
            wall.openings,
          )} m², área líquida ${formatDecimal(wall.netArea)} m².`,
      ),
    ].join("\n");
  }

  navigateToRoute("/contato");
});

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productTrigger;

    if (!productId) {
      return;
    }

    if (button.hasAttribute("data-product-quote")) {
      prepareProductQuote(productId, Number(button.dataset.productVariant || 0));
      return;
    }

    openProductModal(productId, Number(button.dataset.productVariant || 0));
  });
});

modalVariants?.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  const button = target.closest<HTMLButtonElement>("[data-variant-index]");

  if (!button || !activeProduct) {
    return;
  }

  activeVariantIndex = Number(button.dataset.variantIndex || 0);
  renderModalContent();
  renderActiveProductModel();
});

mobileMediaToggle?.addEventListener("click", () => {
  setMobileProductView(mobileProductView === "viewer" ? "photos" : "viewer");
});

modalCta?.addEventListener("click", handleModalQuoteClick);
modalMobileCta?.addEventListener("click", handleModalQuoteClick);

function handleModalQuoteClick(event: Event): void {
  event.preventDefault();

  if (!activeProduct) {
    return;
  }

  prepareProductQuote(activeProduct.id, activeVariantIndex, false);
  closeProductModal();
  navigateToRoute("/contato");
}

productModalBackdrop?.addEventListener("click", closeProductModal);
productModalClose?.addEventListener("click", closeProductModal);
productModalCloseSecondary?.addEventListener("click", closeProductModal);

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && productModal && !productModal.classList.contains("hidden")) {
    closeProductModal();
  }
});

window.addEventListener("resize", () => {
  if (!productModal?.classList.contains("hidden")) {
    applyMobileProductView();

    if (isDesktopViewport()) {
      void initializeProductViewer();
      return;
    }

    setViewerSize();
  }
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const phone = String(data.get("phone") || "").trim();
  const email = String(data.get("email") || "").trim();
  const product = String(data.get("product") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !phone) {
    if (formFeedback) {
      formFeedback.textContent = "Preencha pelo menos nome e telefone para continuar.";
    }
    return;
  }

  const lines = [
    "Olá, Blocos Serezini.",
    "",
    "Quero orçamento para blocos:",
    `Nome: ${name}`,
    `Telefone: ${phone}`,
    email ? `E-mail: ${email}` : "",
    product ? `Produto: ${product}` : "",
    message ? `Mensagem: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  window.open(`https://wa.me/5528999822728?text=${encodeURIComponent(lines)}`, "_blank", "noopener,noreferrer");

  if (formFeedback) {
    formFeedback.textContent = "Mensagem pronta. Abrimos o WhatsApp em uma nova aba.";
  }
});

syncCalculatorWallLabels();
updateBlockCalculator();

function normalizeRoutePath(pathname: string): string {
  const normalized = pathname.replace(/\/+$/, "");
  return normalized || "/";
}

function getRouteSection(pathname: string): string | null {
  return routeSections[normalizeRoutePath(pathname)] ?? null;
}

function navigateToRoute(pathname: string, behavior: ScrollBehavior = "smooth"): void {
  const normalizedPath = normalizeRoutePath(pathname);

  if (normalizeRoutePath(window.location.pathname) !== normalizedPath) {
    window.history.pushState({}, "", normalizedPath);
  }

  scrollToRoute(normalizedPath, behavior);
}

function scrollToRoute(pathname: string, behavior: ScrollBehavior = "smooth"): boolean {
  const sectionId = getRouteSection(pathname);

  if (!sectionId) {
    return false;
  }

  if (sectionId === "hero") {
    window.scrollTo({ top: 0, behavior });
    return true;
  }

  const section = document.getElementById(sectionId);

  if (!section) {
    return false;
  }

  const target = sectionId === "contato" && !isDesktopViewport() ? form ?? section : section;
  target.scrollIntoView({ behavior, block: "start" });
  return true;
}

function setupProductCarousel(carousel: HTMLElement): void {
  const slides = Array.from(carousel.querySelectorAll<HTMLImageElement>("[data-carousel-slide]"));

  if (slides.length <= 1) {
    return;
  }

  let activeIndex = 0;
  let timer = 0;

  const activate = (nextIndex: number) => {
    activeIndex = (nextIndex + slides.length) % slides.length;
    const activeSlide = slides[activeIndex];
    const label = carousel.querySelector<HTMLElement>("[data-carousel-label]");
    const dots = carousel.querySelectorAll<HTMLElement>("[data-carousel-dot]");
    const productButtons = carousel.closest("article")?.querySelectorAll<HTMLButtonElement>("[data-product-trigger]");

    slides.forEach((slide, index) => {
      slide.classList.toggle("opacity-100", index === activeIndex);
      slide.classList.toggle("opacity-0", index !== activeIndex);
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("bg-accent-soft", index === activeIndex);
      dot.classList.toggle("bg-white/25", index !== activeIndex);
    });

    if (label) {
      label.textContent = activeSlide.dataset.slideLabel || "";
    }

    productButtons?.forEach((button) => {
      button.dataset.productVariant = activeSlide.dataset.variantIndex || "0";
    });
  };

  const start = () => {
    window.clearInterval(timer);
    timer = window.setInterval(() => activate(activeIndex + 1), 3800);
  };

  carousel.addEventListener("mouseenter", () => window.clearInterval(timer));
  carousel.addEventListener("mouseleave", start);

  activate(0);
  start();
}

function updateBlockCalculator(): CalculatorResult | null {
  if (!calculatorForm) {
    return null;
  }

  const data = new FormData(calculatorForm);
  const waste = clamp(readCalculatorNumber(data, "calculator-waste", 10), 0, 30);
  const walls = readCalculatorWalls();
  const grossArea = walls.reduce((sum, wall) => sum + wall.grossArea, 0);
  const openings = walls.reduce((sum, wall) => sum + wall.openings, 0);
  const netArea = walls.reduce((sum, wall) => sum + wall.netArea, 0);
  const quantity = Math.ceil(netArea * blocksPerSquareMeter * (1 + waste / 100));

  if (calculatorArea) {
    calculatorArea.textContent = `${formatDecimal(netArea)} m²`;
  }

  if (calculatorQuantity) {
    calculatorQuantity.textContent = quantity.toLocaleString("pt-BR");
  }

  if (calculatorRate) {
    calculatorRate.textContent = `${formatDecimal(blocksPerSquareMeter)}/m²`;
  }

  return {
    walls,
    waste,
    grossArea,
    openings,
    netArea,
    quantity,
  };
}

function readCalculatorWalls(): CalculatorWall[] {
  if (!calculatorWalls) {
    return [];
  }

  return Array.from(calculatorWalls.querySelectorAll<HTMLElement>("[data-calculator-wall]")).map((row, index) => {
    const length = readElementNumber(row, "[data-wall-length]", 0);
    const height = readElementNumber(row, "[data-wall-height]", 0);
    const grossArea = Math.max(length * height, 0);
    const openings = clamp(readElementNumber(row, "[data-wall-openings]", 0), 0, grossArea);
    const netArea = Math.max(grossArea - openings, 0);

    return {
      label: `Parede ${index + 1}`,
      length,
      height,
      openings,
      grossArea,
      netArea,
    };
  });
}

function readElementNumber(root: HTMLElement, selector: string, fallback: number): number {
  const input = root.querySelector<HTMLInputElement>(selector);
  const raw = String(input?.value ?? "").replace(",", ".").trim();
  const value = Number(raw);
  return Number.isFinite(value) ? value : fallback;
}

function readCalculatorNumber(data: FormData, name: string, fallback: number): number {
  const raw = String(data.get(name) ?? "").replace(",", ".").trim();
  const value = Number(raw);
  return Number.isFinite(value) ? value : fallback;
}

function syncCalculatorWallLabels(): void {
  if (!calculatorWalls) {
    return;
  }

  const rows = Array.from(calculatorWalls.querySelectorAll<HTMLElement>("[data-calculator-wall]"));

  rows.forEach((row, index) => {
    const title = row.querySelector<HTMLElement>("[data-wall-title]");
    const removeButton = row.querySelector<HTMLButtonElement>("[data-remove-wall]");

    if (title) {
      title.textContent = `Parede ${index + 1}`;
    }

    if (removeButton) {
      removeButton.disabled = rows.length <= 1;
      removeButton.classList.toggle("opacity-40", rows.length <= 1);
      removeButton.classList.toggle("cursor-not-allowed", rows.length <= 1);
    }
  });
}

function formatDecimal(value: number): string {
  return value.toLocaleString("pt-BR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: Number.isInteger(value) ? 0 : 1,
  });
}

function openProductModal(productId: string, variantIndex = 0): void {
  const product = productMap.get(productId);

  if (!product || !productModal) {
    return;
  }

  activeProduct = product;
  activeVariantIndex = clamp(variantIndex, 0, product.variants.length - 1);
  targetRotation = { x: -0.38, y: 0.72 };
  cameraDistance = 7.2;
  autoSpinVelocity = 0.0035;
  isDragging = false;
  productModal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  resetMobileProductViewer();
  renderModalContent();

  if (isDesktopViewport() || mobileProductView === "viewer") {
    requestAnimationFrame(() => {
      void initializeProductViewer();
    });
  }
}

function prepareProductQuote(productId: string, variantIndex = 0, scroll = true): void {
  const product = productMap.get(productId);

  if (!product) {
    return;
  }

  const variant = product.variants[clamp(variantIndex, 0, product.variants.length - 1)];

  if (productField) {
    productField.value = product.name;
  }

  if (messageField) {
    messageField.value = `Olá, gostaria de um orçamento para ${product.name} na medida ${variant.dimensions}.`;
  }

  if (scroll) {
    navigateToRoute("/contato");
  }
}

function closeProductModal(): void {
  if (!productModal) {
    return;
  }

  productModal.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
  isDragging = false;
  stopRenderLoop();
}

function resetMobileProductViewer(): void {
  if (isDesktopViewport()) {
    return;
  }

  mobileProductView = activeVariantHasPhotos() ? "photos" : "viewer";
  applyMobileProductView();
}

function isDesktopViewport(): boolean {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function activeVariantHasPhotos(): boolean {
  return Boolean(activeProduct?.variants[activeVariantIndex]?.photos?.length);
}

function setMobileProductView(view: MobileProductView): void {
  if (isDesktopViewport()) {
    return;
  }

  mobileProductView = activeVariantHasPhotos() ? view : "viewer";
  applyMobileProductView();

  if (mobileProductView === "viewer") {
    requestAnimationFrame(() => {
      void initializeProductViewer();
    });
    return;
  }

  isDragging = false;
  stopRenderLoop();
}

function applyMobileProductView(): void {
  if (isDesktopViewport()) {
    productViewerPanel?.classList.remove("hidden");
    viewerHost?.classList.remove("hidden");
    modalMobilePhotos?.classList.add("hidden");
    mobileMediaToggle?.classList.add("hidden");
    if (modalMediaHelp) {
      modalMediaHelp.textContent = "Arraste para girar. O modelo muda conforme a medida selecionada.";
    }
    return;
  }

  const hasPhotos = activeVariantHasPhotos();
  const showViewer = mobileProductView === "viewer" || !hasPhotos;

  productViewerPanel?.classList.remove("hidden");
  viewerHost?.classList.toggle("hidden", !showViewer);
  modalMobilePhotos?.classList.toggle("hidden", showViewer || !hasPhotos);
  mobileMediaToggle?.classList.toggle("hidden", !hasPhotos);

  if (mobileMediaToggle) {
    mobileMediaToggle.textContent = showViewer ? "Ver fotos reais" : "Ver 3D interativo";
  }

  if (modalMobileMediaLabel) {
    modalMobileMediaLabel.textContent = showViewer ? "Modelo 3D interativo" : "Fotos reais do produto";
  }

  if (modalMediaHelp) {
    modalMediaHelp.textContent = showViewer
      ? "Arraste para girar. O modelo muda conforme a medida selecionada."
      : "Arraste para o lado para ver as fotos desta medida.";
  }
}

function renderModalContent(): void {
  if (!activeProduct) {
    return;
  }

  const variant = activeProduct.variants[activeVariantIndex];
  const variantPhotos = variant.photos ?? [];
  const specs = activeProduct.specs.map(([label, value]) =>
    label === "Dimensões" ? [label, variant.dimensions] : [label, value],
  );

  if (modalKicker) {
    modalKicker.textContent = `${activeProduct.name} em visualização técnica`;
  }

  if (modalTitle) {
    modalTitle.textContent = activeProduct.name;
  }

  if (modalMobileKicker) {
    modalMobileKicker.textContent = variant.label;
  }

  if (modalMobileTitle) {
    modalMobileTitle.textContent = activeProduct.name;
  }

  if (modalDescription) {
    modalDescription.textContent = activeProduct.description;
  }

  if (modalPhotos) {
    modalPhotos.classList.toggle("lg:block", variantPhotos.length > 0);
    modalPhotos.innerHTML = variantPhotos.length ? renderVariantPhotos(variantPhotos, "desktop") : "";
  }

  if (modalMobilePhotos) {
    modalMobilePhotos.innerHTML = variantPhotos.length ? renderVariantPhotos(variantPhotos, "mobile") : "";
  }

  if (modalVariantMeta) {
    modalVariantMeta.textContent = variantPhotos.length
      ? `${variant.dimensions} · fotos reais + 3D`
      : `${variant.dimensions} · arraste para girar`;
  }

  if (modalVariants) {
    modalVariants.innerHTML = activeProduct.variants
      .map(
        (item, index) => `
          <button
            type="button"
            data-variant-index="${index}"
            class="rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition sm:px-4 sm:py-3 sm:text-sm sm:tracking-[0.18em] ${
              index === activeVariantIndex
                ? "border-accent bg-accent text-white"
                : "border-white/10 bg-white/[0.03] text-white hover:border-white/25 hover:bg-white/[0.08]"
            }"
          >
            ${item.label}
          </button>
        `,
      )
      .join("");
  }

  if (modalSpecs) {
    modalSpecs.innerHTML = specs
      .map(
        ([label, value]) => `
          <div class="flex items-start justify-between gap-5 border-b border-white/8 pb-3">
            <dt class="uppercase tracking-[0.16em] text-muted">${label}</dt>
            <dd class="text-right font-medium text-white">${value}</dd>
          </div>
        `,
      )
      .join("");
  }

  if (modalCta) {
    modalCta.textContent = `Pedir orçamento de ${activeProduct.name}`;
  }
  applyMobileProductView();
}

function renderVariantPhotos(photos: ProductPhoto[], layout: "mobile" | "desktop"): string {
  const isMobile = layout === "mobile";
  const listClass = isMobile
    ? "mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1"
    : "mt-3 flex gap-3 overflow-x-auto pb-1 sm:mt-4 sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0";
  const figureClass = isMobile
    ? "min-w-full snap-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.03]"
    : "min-w-[11rem] overflow-hidden rounded-[1.1rem] border border-white/10 bg-white/[0.03] sm:min-w-0 sm:rounded-[1.25rem]";
  const imageClass = isMobile ? "h-72 w-full object-cover sm:h-[30rem]" : "h-32 w-full object-cover sm:h-52";

  return `
    <div>
      <p class="text-xs uppercase tracking-[0.28em] text-accent-soft">Fotos reais desta medida</p>
      <div class="${listClass}">
        ${photos
          .map(
            (photo) => `
              <figure class="${figureClass}">
                <img
                  src="${photo.src}"
                  alt="${photo.alt}"
                  class="${imageClass}"
                  style="object-position: ${photo.position ?? "center"};"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption class="px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted sm:px-4 sm:py-3 sm:text-xs sm:tracking-[0.18em]">${photo.label}</figcaption>
              </figure>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

async function initializeProductViewer(): Promise<void> {
  await ensureViewer();
  setViewerSize();
  renderActiveProductModel();
  startRenderLoop();
}

async function ensureViewer(): Promise<void> {
  if (!viewerHost) {
    return;
  }

  THREERef ??= await import("three");
  const THREE = THREERef;

  if (!renderer) {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.className = "h-full w-full cursor-grab active:cursor-grabbing";
    renderer.domElement.style.touchAction = "none";
    viewerHost.append(renderer.domElement);

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.35);
    const mainLight = new THREE.DirectionalLight(0xffffff, 1.8);
    mainLight.position.set(6, 7, 6);
    const rimLight = new THREE.DirectionalLight(0xff7a5c, 1.1);
    rimLight.position.set(-4, 3, -5);
    const fillLight = new THREE.HemisphereLight(0xffffff, 0x1a1f27, 0.8);

    const pedestal = new THREE.Mesh(
      new THREE.CylinderGeometry(2.6, 3, 0.18, 48),
      new THREE.MeshStandardMaterial({
        color: 0x202733,
        roughness: 0.92,
        metalness: 0.04,
      }),
    );

    pedestal.position.y = -1.48;
    scene.add(ambientLight, mainLight, rimLight, fillLight, pedestal);

    renderer.domElement.addEventListener("pointerdown", (event) => {
      isDragging = true;
      autoSpinVelocity = 0;
      dragOrigin = { x: event.clientX, y: event.clientY };
      renderer?.domElement.setPointerCapture(event.pointerId);
    });

    renderer.domElement.addEventListener("pointermove", (event) => {
      if (!isDragging) {
        return;
      }

      const deltaX = event.clientX - dragOrigin.x;
      const deltaY = event.clientY - dragOrigin.y;

      targetRotation.y += deltaX * 0.012;
      targetRotation.x = clamp(targetRotation.x + deltaY * 0.008, -0.95, 0.18);
      dragOrigin = { x: event.clientX, y: event.clientY };
    });

    renderer.domElement.addEventListener("pointerup", () => {
      isDragging = false;
      autoSpinVelocity = 0.0035;
    });

    renderer.domElement.addEventListener("pointerleave", () => {
      isDragging = false;
      autoSpinVelocity = 0.0035;
    });

    renderer.domElement.addEventListener(
      "wheel",
      (event) => {
        event.preventDefault();
        cameraDistance = clamp(cameraDistance + event.deltaY * 0.003, 5.7, 9.4);
        updateCamera();
      },
      { passive: false },
    );
  }

  updateCamera();
}

function setViewerSize(): void {
  if (!viewerHost || !renderer || !camera) {
    return;
  }

  const width = viewerHost.clientWidth;
  const height = viewerHost.clientHeight;

  if (!width || !height) {
    return;
  }

  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function updateCamera(): void {
  if (!camera) {
    return;
  }

  camera.position.set(cameraDistance, cameraDistance * 0.62, cameraDistance);
  camera.lookAt(0, 0, 0);
}

function startRenderLoop(): void {
  if (!renderer || !scene || !camera || renderFrame) {
    return;
  }

  const tick = () => {
    if (!renderer || !scene || !camera) {
      return;
    }

    renderFrame = window.requestAnimationFrame(tick);

    if (blockGroup) {
      if (!isDragging) {
        targetRotation.y += autoSpinVelocity;
      }

      blockGroup.rotation.x += (targetRotation.x - blockGroup.rotation.x) * 0.08;
      blockGroup.rotation.y += (targetRotation.y - blockGroup.rotation.y) * 0.08;
    }

    renderer.render(scene, camera);
  };

  tick();
}

function stopRenderLoop(): void {
  if (!renderFrame) {
    return;
  }

  window.cancelAnimationFrame(renderFrame);
  renderFrame = 0;
}

function renderActiveProductModel(): void {
  if (!activeProduct || !scene || !THREERef) {
    return;
  }

  const variant = activeProduct.variants[activeVariantIndex];

  if (blockGroup) {
    scene.remove(blockGroup);
    disposeGroup(blockGroup);
  }

  blockGroup = buildProductModel(activeProduct.modelKind, variant.widthCm);
  blockGroup.rotation.set(targetRotation.x, targetRotation.y, 0);
  scene.add(blockGroup);
}

function buildProductModel(kind: Product["modelKind"], widthCm: number): import("three").Group {
  const THREE = THREERef;

  if (!THREE) {
    throw new Error("Three.js não foi carregado.");
  }

  const group = new THREE.Group();
  const textures = getConcreteTextureKit();
  const material = new THREE.MeshStandardMaterial({
    color: 0xd3d0c8,
    roughness: 0.98,
    metalness: 0.02,
    map: textures.map,
    roughnessMap: textures.roughnessMap,
    bumpMap: textures.bumpMap,
    bumpScale: 0.035,
  });
  const edgeMaterial = new THREE.LineBasicMaterial({
    color: 0x757b84,
    transparent: true,
    opacity: 0.28,
  });

  const length = 3.9;
  const height = 1.9;
  const depth = widthCm / 10;
  const profile = getBlockProfile(kind, widthCm);
  const openingCount = getBlockOpeningCount(kind, widthCm);

  if (kind === "canaleta") {
    buildCanaleta(group, material, edgeMaterial, { length, height, depth, profile });
  } else {
    buildHollowBlock(group, material, edgeMaterial, {
      length,
      height,
      depth,
      structural: kind === "estrutural",
      openingCount,
      profile,
    });
  }

  return group;
}

function buildHollowBlock(
  group: import("three").Group,
  material: import("three").MeshStandardMaterial,
  edgeMaterial: import("three").LineBasicMaterial,
  options: {
    length: number;
    height: number;
    depth: number;
    structural: boolean;
    openingCount: number;
    profile: ReturnType<typeof getBlockProfile>;
  },
): void {
  const { length, height, depth, structural, openingCount, profile } = options;
  const { shell, end, web, baseThickness } = profile;
  const innerDepth = Math.max(depth - shell * 2, 0.2);
  const wallHeight = Math.max(height - baseThickness, 0.3);
  const wallCenterY = structural ? 0 : baseThickness / 2;
  const clearLength = Math.max(length - end * 2, 0.8);

  if (!structural && baseThickness > 0) {
    addBlockPart(group, material, edgeMaterial, [length, baseThickness, depth], [0, -height / 2 + baseThickness / 2, 0]);
  }

  addBlockPart(group, material, edgeMaterial, [length, wallHeight, shell], [0, wallCenterY, depth / 2 - shell / 2]);
  addBlockPart(group, material, edgeMaterial, [length, wallHeight, shell], [0, wallCenterY, -depth / 2 + shell / 2]);
  addBlockPart(group, material, edgeMaterial, [end, wallHeight, innerDepth], [-length / 2 + end / 2, wallCenterY, 0]);
  addBlockPart(group, material, edgeMaterial, [end, wallHeight, innerDepth], [length / 2 - end / 2, wallCenterY, 0]);

  for (let index = 1; index < openingCount; index += 1) {
    const x = -clearLength / 2 + (clearLength / openingCount) * index;
    addBlockPart(group, material, edgeMaterial, [web, wallHeight, innerDepth], [x, wallCenterY, 0]);
  }
}

function buildCanaleta(
  group: import("three").Group,
  material: import("three").MeshStandardMaterial,
  edgeMaterial: import("three").LineBasicMaterial,
  options: {
    length: number;
    height: number;
    depth: number;
    profile: ReturnType<typeof getBlockProfile>;
  },
): void {
  const THREE = THREERef;

  if (!THREE) {
    return;
  }

  const { length, height, depth, profile } = options;
  const { shell, baseThickness } = profile;
  const outerHalf = depth / 2;
  const innerHalf = Math.max(outerHalf - shell, 0.18);
  const bottomY = -height / 2;
  const topY = height / 2;
  const innerRadius = Math.min(innerHalf * 0.98, (height - baseThickness) * 0.42);
  const arcBottomY = bottomY + baseThickness;
  const arcCenterY = arcBottomY + innerRadius;

  const shape = new THREE.Shape();
  shape.moveTo(-outerHalf, bottomY);
  shape.lineTo(outerHalf, bottomY);
  shape.lineTo(outerHalf, topY);
  shape.lineTo(innerHalf, topY);
  shape.lineTo(innerHalf, arcCenterY);
  shape.absarc(0, arcCenterY, innerRadius, 0, Math.PI, true);
  shape.lineTo(-innerHalf, topY);
  shape.lineTo(-outerHalf, topY);
  shape.closePath();

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: length,
    bevelEnabled: false,
    curveSegments: 28,
  });

  geometry.rotateY(Math.PI / 2);
  geometry.center();

  const mesh = new THREE.Mesh(geometry, material.clone());
  group.add(mesh);

  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry, 28), edgeMaterial.clone());
  group.add(edges);
}

function addBlockPart(
  group: import("three").Group,
  material: import("three").MeshStandardMaterial,
  edgeMaterial: import("three").LineBasicMaterial,
  size: [number, number, number],
  position: [number, number, number],
): void {
  const THREE = THREERef;

  if (!THREE) {
    return;
  }

  const geometry = new THREE.BoxGeometry(...size);
  const mesh = new THREE.Mesh(geometry, material.clone());
  mesh.position.set(...position);
  group.add(mesh);

  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geometry), edgeMaterial.clone());
  edges.position.copy(mesh.position);
  group.add(edges);
}

function getBlockProfile(kind: Product["modelKind"], widthCm: number): {
  shell: number;
  end: number;
  web: number;
  baseThickness: number;
  topLip: number;
  channelRadius: number;
} {
  if (kind === "vedacao") {
    const byWidth: Record<number, { shell: number; end: number; web: number; baseThickness: number; topLip: number }> = {
      9: { shell: 0.16, end: 0.28, web: 0.18, baseThickness: 0.22, topLip: 0.08 },
      14: { shell: 0.18, end: 0.32, web: 0.22, baseThickness: 0.24, topLip: 0.09 },
      19: { shell: 0.22, end: 0.36, web: 0.26, baseThickness: 0.28, topLip: 0.1 },
    };

    const profile = byWidth[widthCm] ?? byWidth[14];
    return { ...profile, channelRadius: 0 };
  }

  if (kind === "estrutural") {
    const byWidth: Record<number, { shell: number; end: number; web: number; baseThickness: number; topLip: number }> = {
      12: { shell: 0.19, end: 0.36, web: 0.26, baseThickness: 0, topLip: 0.1 },
      14: { shell: 0.21, end: 0.38, web: 0.3, baseThickness: 0, topLip: 0.1 },
      19: { shell: 0.24, end: 0.42, web: 0.34, baseThickness: 0, topLip: 0.12 },
    };

    const profile = byWidth[widthCm] ?? byWidth[14];
    return { ...profile, channelRadius: 0 };
  }

  const byWidth: Record<number, { shell: number; end: number; web: number; baseThickness: number; topLip: number; channelRadius: number }> = {
    14: { shell: 0.18, end: 0, web: 0, baseThickness: 0.18, topLip: 0.08, channelRadius: 0.34 },
    19: { shell: 0.22, end: 0, web: 0, baseThickness: 0.2, topLip: 0.1, channelRadius: 0.48 },
  };

  return byWidth[widthCm] ?? byWidth[14];
}

function getBlockOpeningCount(kind: Product["modelKind"], widthCm: number): number {
  if (kind === "vedacao" && (widthCm === 9 || widthCm === 14)) {
    return 3;
  }

  if (kind === "estrutural" && widthCm === 12) {
    return 3;
  }

  return 2;
}

function getConcreteTextureKit(): ConcreteTextureKit {
  const THREE = THREERef;

  if (!THREE) {
    throw new Error("Three.js não foi carregado.");
  }

  if (concreteTextureKit) {
    return concreteTextureKit;
  }

  const size = 256;
  const baseCanvas = document.createElement("canvas");
  baseCanvas.width = size;
  baseCanvas.height = size;
  const baseCtx = baseCanvas.getContext("2d");

  const roughCanvas = document.createElement("canvas");
  roughCanvas.width = size;
  roughCanvas.height = size;
  const roughCtx = roughCanvas.getContext("2d");

  const bumpCanvas = document.createElement("canvas");
  bumpCanvas.width = size;
  bumpCanvas.height = size;
  const bumpCtx = bumpCanvas.getContext("2d");

  if (!baseCtx || !roughCtx || !bumpCtx) {
    throw new Error("Não foi possível gerar a textura de concreto.");
  }

  baseCtx.fillStyle = "#d3d0c8";
  baseCtx.fillRect(0, 0, size, size);
  roughCtx.fillStyle = "#d9d9d9";
  roughCtx.fillRect(0, 0, size, size);
  bumpCtx.fillStyle = "#767676";
  bumpCtx.fillRect(0, 0, size, size);

  for (let index = 0; index < 2400; index += 1) {
    const x = Math.random() * size;
    const y = Math.random() * size;
    const grain = Math.random() * 10 + 3;
    const alpha = Math.random() * 0.12 + 0.03;

    baseCtx.fillStyle = `rgba(${145 + Math.random() * 40}, ${145 + Math.random() * 40}, ${145 + Math.random() * 40}, ${alpha})`;
    baseCtx.beginPath();
    baseCtx.arc(x, y, grain * 0.35, 0, Math.PI * 2);
    baseCtx.fill();

    roughCtx.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.18 + 0.04})`;
    roughCtx.beginPath();
    roughCtx.arc(x, y, grain * 0.32, 0, Math.PI * 2);
    roughCtx.fill();

    bumpCtx.fillStyle = `rgba(255,255,255,${Math.random() * 0.18})`;
    bumpCtx.beginPath();
    bumpCtx.arc(x, y, grain * 0.26, 0, Math.PI * 2);
    bumpCtx.fill();
  }

  for (let line = 0; line < 18; line += 1) {
    const y = (line / 18) * size + Math.random() * 4;
    baseCtx.fillStyle = "rgba(255,255,255,0.018)";
    baseCtx.fillRect(0, y, size, 1.5);
    bumpCtx.fillStyle = "rgba(0,0,0,0.06)";
    bumpCtx.fillRect(0, y, size, 1);
  }

  const map = new THREE.CanvasTexture(baseCanvas);
  const roughnessMap = new THREE.CanvasTexture(roughCanvas);
  const bumpMap = new THREE.CanvasTexture(bumpCanvas);

  [map, roughnessMap, bumpMap].forEach((texture) => {
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1.8, 1.2);
  });

  concreteTextureKit = { map, roughnessMap, bumpMap };
  return concreteTextureKit;
}

function disposeGroup(group: import("three").Group): void {
  const THREE = THREERef;

  if (!THREE) {
    return;
  }

  const disposedMaterials = new Set<import("three").Material>();
  const disposedGeometries = new Set<import("three").BufferGeometry>();

  group.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (!disposedGeometries.has(child.geometry)) {
        child.geometry.dispose();
        disposedGeometries.add(child.geometry);
      }

      if (Array.isArray(child.material)) {
        child.material.forEach((material) => {
          if (!disposedMaterials.has(material)) {
            material.dispose();
            disposedMaterials.add(material);
          }
        });
      } else {
        if (!disposedMaterials.has(child.material)) {
          child.material.dispose();
          disposedMaterials.add(child.material);
        }
      }
    }

    if (child instanceof THREE.LineSegments) {
      if (!disposedGeometries.has(child.geometry)) {
        child.geometry.dispose();
        disposedGeometries.add(child.geometry);
      }

      if (Array.isArray(child.material)) {
        child.material.forEach((material) => {
          if (!disposedMaterials.has(material)) {
            material.dispose();
            disposedMaterials.add(material);
          }
        });
      } else {
        if (!disposedMaterials.has(child.material)) {
          child.material.dispose();
          disposedMaterials.add(child.material);
        }
      }
    }
  });
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function productCardMedia(product: Product): string {
  const slides = getProductCardSlides(product);

  if (slides.length > 1) {
    const firstSlide = slides[0];

    return `
      <div class="overflow-hidden border border-white/10 bg-white/[0.03] lg:rounded-[1.25rem]" data-product-carousel>
        <div class="relative h-36 overflow-hidden lg:h-52">
          ${slides
            .map(
              (slide, index) => `
                <img
                  src="${slide.src}"
                  alt="${slide.alt}"
                  class="absolute inset-0 h-full w-full object-cover transition duration-700 ${
                    index === 0 ? "opacity-100" : "opacity-0"
                  }"
                  style="object-position: ${slide.position ?? "center"};"
                  data-carousel-slide
                  data-variant-index="${slide.variantIndex}"
                  data-slide-label="${slide.label}"
                  loading="lazy"
                  decoding="async"
                />
              `,
            )
            .join("")}
        </div>
        <div class="grid gap-3 border-t border-white/10 px-3 py-3 lg:px-4">
          <p class="break-words text-sm font-semibold leading-5 text-accent-soft sm:font-display sm:text-2xl sm:tracking-[0.06em]" data-carousel-label>${firstSlide.label}</p>
          <div class="flex gap-2" aria-hidden="true">
            ${slides
              .map(
                (_, index) => `
                  <span
                    class="h-2 w-2 rounded-full transition ${index === 0 ? "bg-accent-soft" : "bg-white/25"}"
                    data-carousel-dot
                  ></span>
                `,
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  if (product.cardPhoto) {
    return `
      <div class="h-36 overflow-hidden border border-white/10 bg-white/[0.03] lg:h-52 lg:rounded-[1.25rem]">
        <img
          src="${product.cardPhoto.src}"
          alt="${product.cardPhoto.alt}"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          style="object-position: ${product.cardPhoto.position ?? "center"};"
          loading="lazy"
          decoding="async"
        />
      </div>
    `;
  }

  return "";
}

function productCardDetails(product: Product): string {
  const dimensions = product.specs.find(([label]) => label === "Dimensões")?.[1];
  const use = product.specs.find(([label]) => label === "Aplicação" || label === "Uso")?.[1];
  const details = [
    dimensions ? ["Medidas", dimensions] : null,
    use ? ["Uso", use] : null,
  ].filter(Boolean) as Array<[string, string]>;

  if (!details.length) {
    return "";
  }

  return `
    <dl class="mt-3 hidden border-t border-white/10 text-sm lg:grid lg:mt-5">
      ${details
        .map(
          ([label, value]) => `
            <div class="grid gap-2 border-b border-white/10 py-3 sm:grid-cols-[5.5rem_1fr]">
              <dt class="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-accent-soft">${label}</dt>
              <dd class="text-sm leading-5 text-white">${value}</dd>
            </div>
          `,
        )
        .join("")}
    </dl>
  `;
}

function getProductCardSlides(product: Product): ProductCardSlide[] {
  return product.variants.flatMap((variant, variantIndex) => {
    const photo = variant.photos?.[0];

    if (!photo) {
      return [];
    }

    return [
      {
        src: photo.src,
        alt: photo.alt,
        label: getProductCardSlideLabel(product.name, variant.label),
        variantIndex,
        position: photo.position,
      },
    ];
  });
}

function getProductCardSlideLabel(productName: string, variantLabel: string): string {
  const size = variantLabel.replace(/\s+/g, "");

  if (productName === "Bloco de Vedação") {
    return `Vedação ${size}`;
  }

  if (productName === "Bloco Estrutural") {
    return `Estrutural ${size}`;
  }

  return `${productName} ${size}`;
}

function inputField(name: string, label: string, placeholder: string, type = "text"): string {
  return `
    <label class="grid gap-2 text-sm uppercase tracking-[0.2em] text-muted">
      <span>${label}</span>
      <input
        type="${type}"
        name="${name}"
        placeholder="${placeholder}"
        class="rounded-[1.25rem] border border-white/10 bg-surface px-4 py-4 text-base normal-case tracking-normal text-white outline-none transition focus:border-accent"
      />
    </label>
  `;
}

function calculatorInputField(name: string, label: string, suffix: string, value: string): string {
  return `
    <label class="grid gap-2 text-sm uppercase tracking-[0.2em] text-muted">
      <span>${label}</span>
      <span class="flex overflow-hidden rounded-[1.25rem] border border-white/10 bg-surface transition focus-within:border-accent">
        <input
          type="number"
          name="${name}"
          value="${value}"
          min="0"
          step="0.1"
          class="min-w-0 flex-1 bg-transparent px-4 py-4 text-base normal-case tracking-normal text-white outline-none"
        />
        <span class="grid min-w-14 place-items-center border-l border-white/10 px-4 text-sm text-muted">${suffix}</span>
      </span>
    </label>
  `;
}

function calculatorWallRow(index: number, length: string, height: string, openings: string): string {
  return `
    <div data-calculator-wall class="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
      <div class="mb-4 flex items-center justify-between gap-3">
        <p data-wall-title class="text-xs uppercase tracking-[0.24em] text-muted">Parede ${index}</p>
        <button
          type="button"
          data-remove-wall
          class="rounded-full border border-white/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted transition hover:border-accent/40 hover:text-white"
        >
          Remover
        </button>
      </div>
      <div class="grid gap-4 md:grid-cols-3">
        ${calculatorWallInput("Comprimento", "m", length, "data-wall-length")}
        ${calculatorWallInput("Altura", "m", height, "data-wall-height")}
        ${calculatorWallInput("Portas e janelas", "m²", openings, "data-wall-openings")}
      </div>
    </div>
  `;
}

function calculatorWallInput(label: string, suffix: string, value: string, attribute: string): string {
  return `
    <label class="grid gap-2 text-sm uppercase tracking-[0.18em] text-muted">
      <span>${label}</span>
      <span class="flex overflow-hidden rounded-[1.1rem] border border-white/10 bg-surface transition focus-within:border-accent">
        <input
          type="number"
          ${attribute}
          value="${value}"
          min="0"
          step="0.1"
          class="min-w-0 flex-1 bg-transparent px-4 py-3 text-base normal-case tracking-normal text-white outline-none"
        />
        <span class="grid min-w-12 place-items-center border-l border-white/10 px-3 text-sm text-muted">${suffix}</span>
      </span>
    </label>
  `;
}

function blockIcon(kind: "flat" | "structural" | "stack"): string {
  if (kind === "flat") {
    return `
      <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
        <rect x="3.5" y="7.5" width="17" height="9" rx="1.5"></rect>
        <path d="M7 7.5V5.5h10v2"></path>
      </svg>
    `;
  }

  if (kind === "structural") {
    return `
      <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
        <rect x="3.5" y="6.5" width="17" height="11" rx="1.5"></rect>
        <path d="M12 6.5v11M9 3.5h6v3"></path>
      </svg>
    `;
  }

  return `
    <svg class="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true">
      <path d="M5 10.5h14v4H5z"></path>
      <path d="M8 5.5h8v4H8zM8 14.5h8v4H8z"></path>
    </svg>
  `;
}
