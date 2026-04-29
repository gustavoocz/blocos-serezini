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
  modelKind: "vedacao" | "estrutural" | "canaleta";
  variants: ProductVariant[];
};

type ProductVariant = {
  label: string;
  widthCm: number;
  dimensions: string;
};

type ConcreteTextureKit = {
  map: import("three").CanvasTexture;
  roughnessMap: import("three").CanvasTexture;
  bumpMap: import("three").CanvasTexture;
};

type Step = {
  id: string;
  title: string;
  description: string;
};

type Highlight = {
  title: string;
  description: string;
};

type ContactItem = {
  label: string;
  value: string;
  href?: string;
};

const stats: Stat[] = [
  { value: "20+", label: "anos atendendo obras no mercado capixaba" },
  { value: "10K+", label: "pedidos entregues com logística própria" },
  { value: "100%", label: "linhas alinhadas às normas ABNT aplicáveis" },
  { value: "ES", label: "cobertura de entrega em todo o Espírito Santo" },
];

const products: Product[] = [
  {
    id: "01",
    name: "Bloco de Vedação",
    description:
      "Bloco para alvenaria não estrutural com precisão dimensional, montagem limpa e opções de espessura para diferentes necessidades de fechamento.",
    specs: [
      ["Normas", "NBR 6136 / NBR 15270"],
      ["Resistência", "≥ 3 MPa"],
      ["Dimensões", "9x19x39 / 14x19x39 / 19x19x39 cm"],
      ["Aplicação", "Vedações e fechamentos"],
    ],
    icon: blockIcon("flat"),
    modelKind: "vedacao",
    variants: [
      { label: "9 cm", widthCm: 9, dimensions: "9x19x39 cm" },
      { label: "14 cm", widthCm: 14, dimensions: "14x19x39 cm" },
      { label: "19 cm", widthCm: 19, dimensions: "19x19x39 cm" },
    ],
  },
  {
    id: "02",
    name: "Bloco Estrutural",
    description:
      "Linha pensada para alvenaria estrutural, com resistência maior, racionalização do canteiro e redução de desperdício na execução.",
    specs: [
      ["Normas", "NBR 6136 / NBR 16868"],
      ["Resistência", "4,5 MPa a 8 MPa"],
      ["Dimensões", "12x19x39 / 14x19x39 / 19x19x39 cm"],
      ["Aplicação", "Sistemas estruturais"],
    ],
    icon: blockIcon("structural"),
    modelKind: "estrutural",
    variants: [
      { label: "12 cm", widthCm: 12, dimensions: "12x19x39 cm" },
      { label: "14 cm", widthCm: 14, dimensions: "14x19x39 cm" },
      { label: "19 cm", widthCm: 19, dimensions: "19x19x39 cm" },
    ],
  },
  {
    id: "03",
    name: "Canaleta",
    description:
      "Peça complementar para cintas, vergas, contravergas e detalhes de amarração, mantendo compatibilidade com a paginação da alvenaria.",
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

const contactItems: ContactItem[] = [
  {
    label: "Localização",
    value: "Cachoeiro de Itapemirim, Espírito Santo",
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
    value: "Segunda a sexta: 7h às 17h | Sábado: 7h às 12h",
  },
];

const steps: Step[] = [
  {
    id: "01",
    title: "Matéria-prima controlada",
    description:
      "Agregados, cimento e aditivos são selecionados para manter consistência de traço e previsibilidade na resistência final.",
  },
  {
    id: "02",
    title: "Dosagem e mistura",
    description:
      "O lote é calibrado com repetibilidade industrial para reduzir variação dimensional e garantir uniformidade de produção.",
  },
  {
    id: "03",
    title: "Prensagem e cura",
    description:
      "A vibrocompactação e a cura controlada estabilizam a peça antes da liberação, preservando desempenho e acabamento.",
  },
  {
    id: "04",
    title: "Inspeção e entrega",
    description:
      "As peças passam por conferência técnica e seguem para a obra com programação logística alinhada ao cronograma do cliente.",
  },
];

const highlights: Highlight[] = [
  {
    title: "Qualidade rastreável",
    description:
      "Padronização de lote, controle dimensional e foco em desempenho real de obra.",
  },
  {
    title: "Atendimento técnico",
    description:
      "A equipe ajuda a especificar a peça certa conforme o tipo de aplicação e o volume do projeto.",
  },
  {
    title: "Operação pronta para escala",
    description:
      "A estrutura atende desde pequenas reformas até empreendimentos com demanda contínua.",
  },
  {
    title: "Entrega sem improviso",
    description:
      "Programação logística para reduzir atraso, retrabalho e ruptura de abastecimento no canteiro.",
  },
];

const differentials: Highlight[] = [
  {
    title: "Conformidade técnica",
    description:
      "Linha produzida com foco em normas, repetibilidade e segurança de aplicação.",
  },
  {
    title: "Capacidade industrial",
    description:
      "Processo produtivo desenhado para manter ritmo, estoque e consistência de fornecimento.",
  },
  {
    title: "Suporte comercial direto",
    description:
      "Contato ágil para orçamento, reposição, dúvidas de especificação e programação de entrega.",
  },
  {
    title: "Custo total mais previsível",
    description:
      "Menos improviso no canteiro significa menos perda, menos retrabalho e mais controle de cronograma.",
  },
];

const app = document.querySelector<HTMLDivElement>("#app");

if (!app) {
  throw new Error("Elemento #app não encontrado.");
}

app.innerHTML = `
  <div class="relative isolate overflow-hidden">
    <div class="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(circle_at_top_right,_rgba(255,118,90,0.20),_transparent_42%)]"></div>
    <div class="pointer-events-none absolute inset-0 opacity-35 ghost-grid"></div>

    <header id="topo" class="sticky top-0 z-50 border-b border-transparent bg-surface/80 backdrop-blur transition-colors duration-300">
      <div class="shell flex items-center justify-between py-4">
        <a href="#hero" class="flex items-center gap-3">
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
            ${["sobre", "produtos", "processo", "diferenciais", "contato"]
              .map(
                (item) => `
                  <a
                    href="#${item}"
                    data-nav-link
                    class="text-sm font-semibold uppercase tracking-[0.22em] text-muted transition hover:text-white"
                  >
                    ${capitalize(item)}
                  </a>
                `,
              )
              .join("")}
          </div>
          <a
            href="#contato"
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
          <p class="section-kicker reveal" data-reveal>Fábrica de artefatos de concreto</p>
          <h1 class="section-title reveal max-w-3xl text-[4.8rem] sm:text-[6.2rem] lg:text-[8.5rem]" data-reveal>
            Construção com <span class="text-accent">ritmo industrial</span>
          </h1>
          <p class="section-copy reveal mt-6 max-w-xl text-lg sm:text-xl" data-reveal>
            Blocos de vedação, alvenaria estrutural e peças complementares para obras que exigem resistência, padronização e entrega confiável.
          </p>

          <div class="reveal mt-10 flex flex-col gap-4 sm:flex-row" data-reveal>
            <a href="#produtos" class="inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent-soft">
              Ver linha de produtos
            </a>
            <a href="#contato" class="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/30 hover:bg-white/10">
              Falar com a equipe
            </a>
          </div>

          <dl class="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-white/8 bg-white/6 shadow-[var(--shadow-frame)] sm:grid-cols-2 xl:grid-cols-4">
            ${stats
              .map(
                (stat) => `
                  <div class="reveal bg-panel/95 p-6" data-reveal>
                    <dt class="font-display text-5xl leading-none tracking-[0.08em] text-accent">${stat.value}</dt>
                    <dd class="mt-2 text-sm uppercase tracking-[0.14em] text-muted">${stat.label}</dd>
                  </div>
                `,
              )
              .join("")}
          </dl>
        </div>

        <div class="relative reveal" data-reveal>
          <div class="frame relative overflow-hidden px-7 py-8 sm:px-10 sm:py-12">
            <div class="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-accent/30 blur-3xl"></div>
            <div class="absolute inset-0 bg-[linear-gradient(135deg,_rgba(255,255,255,0.04),_transparent_45%,_rgba(255,118,90,0.08))]"></div>
            <div class="relative">
              <div class="mb-10 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div class="flex items-center gap-4">
                  <div class="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-2 shadow-[var(--shadow-glow)]">
                    <img src="/brand/logo.png" alt="Blocos Serezini" class="h-16 w-auto max-w-[11rem] object-contain sm:h-20 sm:max-w-[13rem]" />
                  </div>
                  <div>
                    <p class="text-xs uppercase tracking-[0.28em] text-accent-soft">Linha industrial</p>
                    <p class="mt-2 font-display text-4xl tracking-[0.14em] text-white">BLOCOS SEREZINI</p>
                  </div>
                </div>
                <div class="text-right">
                  <p class="text-xs uppercase tracking-[0.24em] text-muted">Base</p>
                  <p class="mt-2 font-display text-3xl tracking-[0.1em] text-outline">ES</p>
                </div>
              </div>

              <div class="grid gap-4 sm:grid-cols-2">
                ${[
                  "Vedação",
                  "Estrutural",
                  "Canaletas",
                  "Sob medida",
                ]
                  .map(
                    (item, index) => `
                      <article class="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                        <p class="text-xs uppercase tracking-[0.28em] text-muted">0${index + 1}</p>
                        <h2 class="mt-8 font-display text-3xl tracking-[0.08em] text-white">${item}</h2>
                      </article>
                    `,
                  )
                  .join("")}
              </div>

              <div class="mt-8 rounded-[1.75rem] border border-accent/25 bg-accent/10 p-6">
                <p class="text-xs uppercase tracking-[0.28em] text-accent-soft">Compromisso de obra</p>
                <p class="mt-4 max-w-md text-base leading-7 text-copy/85">
                  Fornecimento com padrão repetível, leitura rápida do portfólio e contato comercial direto para orçamento e logística.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" class="shell py-20 lg:py-28">
        <div class="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div class="reveal" data-reveal>
            <p class="section-kicker">Quem somos</p>
            <h2 class="section-title max-w-2xl">Uma operação pensada para obra, não para improviso.</h2>
          </div>

          <div class="reveal space-y-6" data-reveal>
            <p class="section-copy">
              A Blocos Serezini atua no fornecimento de artefatos de concreto para obras que exigem previsibilidade de desempenho, padrão dimensional e logística alinhada ao cronograma.
            </p>
            <p class="section-copy">
              A operação combina produção industrial, leitura técnica das necessidades do cliente e atendimento direto para orientar a melhor solução entre vedação, estrutura e peças complementares.
            </p>
          </div>
        </div>

        <div class="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div class="frame reveal p-8 sm:p-10" data-reveal>
            <div class="grid gap-4 sm:grid-cols-2">
              ${highlights
                .map(
                  (item) => `
                    <article class="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                      <p class="text-xs uppercase tracking-[0.28em] text-accent-soft">Ponto forte</p>
                      <h3 class="mt-5 font-display text-3xl tracking-[0.06em] text-white">${item.title}</h3>
                      <p class="mt-3 text-sm leading-6 text-muted">${item.description}</p>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </div>

          <aside class="frame reveal flex flex-col justify-between gap-10 overflow-hidden p-8 sm:p-10" data-reveal>
            <div>
              <p class="text-xs uppercase tracking-[0.28em] text-accent-soft">Compromisso Serezini</p>
              <h3 class="mt-4 font-display text-5xl tracking-[0.08em] text-white">Base forte para cada entrega</h3>
            </div>
            <ul class="space-y-4 text-sm uppercase tracking-[0.2em] text-muted">
              <li class="flex items-center justify-between border-b border-white/10 pb-3"><span>Controle de qualidade</span><strong class="font-semibold text-white">ativo</strong></li>
              <li class="flex items-center justify-between border-b border-white/10 pb-3"><span>Atendimento técnico</span><strong class="font-semibold text-white">direto</strong></li>
              <li class="flex items-center justify-between border-b border-white/10 pb-3"><span>Programação logística</span><strong class="font-semibold text-white">ajustada</strong></li>
              <li class="flex items-center justify-between"><span>Fornecimento recorrente</span><strong class="font-semibold text-white">pronto</strong></li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="produtos" class="shell py-20 lg:py-28">
        <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div class="reveal" data-reveal>
            <p class="section-kicker">Linha de produtos</p>
            <h2 class="section-title max-w-3xl">Portfólio organizado para leitura rápida do especificador.</h2>
          </div>
          <p class="section-copy reveal max-w-md text-sm uppercase tracking-[0.16em]" data-reveal>
            A seleção abaixo resume aplicação, faixa de uso e parâmetros técnicos principais para facilitar especificação e orçamento.
          </p>
        </div>

        <div class="mt-12 grid gap-6 xl:grid-cols-3">
          ${products
            .map(
              (product) => `
                <article class="frame reveal group relative overflow-hidden p-8" data-reveal>
                  <div class="absolute right-6 top-5 font-display text-6xl leading-none tracking-[0.08em] text-white/6">${product.id}</div>
                  <div class="inline-flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-accent/25 bg-accent/10 text-accent-soft">
                    ${product.icon}
                  </div>
                  <h3 class="mt-8 font-display text-4xl tracking-[0.08em] text-white">${product.name}</h3>
                  <p class="mt-4 text-base leading-7 text-muted">${product.description}</p>
                  <dl class="mt-8 space-y-3 text-sm">
                    ${product.specs
                      .map(
                        ([label, value]) => `
                          <div class="flex items-start justify-between gap-5 border-b border-white/8 pb-3">
                            <dt class="uppercase tracking-[0.16em] text-muted">${label}</dt>
                            <dd class="text-right font-medium text-white">${value}</dd>
                          </div>
                        `,
                      )
                      .join("")}
                  </dl>
                  <button
                    type="button"
                    data-product-trigger="${product.id}"
                    class="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:border-accent/40 hover:bg-accent/10"
                  >
                    Ver modelo 3D
                    <span class="text-accent-soft">→</span>
                  </button>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>

      <section id="processo" class="py-20 lg:py-28">
        <div class="shell">
          <div class="frame overflow-hidden">
            <div class="grid gap-10 px-6 py-10 sm:px-8 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-14">
              <div class="reveal" data-reveal>
                <p class="section-kicker">Como trabalhamos</p>
                <h2 class="section-title max-w-xl">Produção com sequência técnica clara.</h2>
                <p class="section-copy mt-6">
                  Da escolha dos insumos ao despacho para a obra, cada etapa é organizada para sustentar qualidade constante e entrega sem improviso.
                </p>
              </div>

              <div class="grid gap-5 sm:grid-cols-2">
                ${steps
                  .map(
                    (step) => `
                      <article class="reveal rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6" data-reveal>
                        <div class="flex items-center gap-4">
                          <div class="grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-accent/15 font-display text-3xl tracking-[0.08em] text-white">
                            ${step.id}
                          </div>
                          <h3 class="font-display text-3xl tracking-[0.08em] text-white">${step.title}</h3>
                        </div>
                        <p class="mt-5 text-sm leading-7 text-muted">${step.description}</p>
                      </article>
                    `,
                  )
                  .join("")}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="diferenciais" class="shell py-20 lg:py-28">
        <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div class="reveal" data-reveal>
            <p class="section-kicker">Por que Serezini</p>
            <h2 class="section-title max-w-xl">Parceria sólida para obras que não podem parar.</h2>
            <p class="section-copy mt-6">
              A escolha do fornecedor impacta custo, prazo e execução. Por isso a Serezini trabalha com padrão industrial, resposta comercial ágil e foco em continuidade de abastecimento.
            </p>
            <a href="#contato" class="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent-soft">
              Solicitar contato
            </a>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            ${differentials
              .map(
                (item, index) => `
                  <article class="frame reveal p-6" data-reveal>
                    <p class="text-xs uppercase tracking-[0.28em] text-accent-soft">Diferencial 0${index + 1}</p>
                    <h3 class="mt-5 font-display text-3xl tracking-[0.06em] text-white">${item.title}</h3>
                    <p class="mt-3 text-sm leading-7 text-muted">${item.description}</p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>
      </section>

      <section id="contato" class="shell py-20 lg:py-28">
        <div class="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div class="frame reveal p-8 sm:p-10" data-reveal>
            <p class="section-kicker">Fale com a equipe</p>
            <h2 class="section-title max-w-xl">Peça um orçamento direto com a equipe.</h2>
            <p class="section-copy mt-6">
              Preencha os dados principais e envie a solicitação pelo WhatsApp. Assim o atendimento recebe a demanda com contexto suficiente para responder com mais rapidez.
            </p>

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
            <form id="contact-form" class="grid gap-5">
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
                  placeholder="Descreva quantidade estimada, prazo e local de entrega."
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
            <div class="relative border-b border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,118,90,0.16),_transparent_35%),linear-gradient(180deg,#151a20_0%,#11151a_100%)] p-5 sm:p-8 lg:border-b-0 lg:border-r">
              <div class="mb-4 flex items-center justify-between gap-4">
                <div>
                  <p id="modal-kicker" class="text-xs uppercase tracking-[0.28em] text-accent-soft">Catálogo técnico</p>
                  <h3 id="modal-title" class="mt-3 font-display text-4xl tracking-[0.08em] text-white sm:text-5xl"></h3>
                </div>
                <span class="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-muted">
                  3D interativo
                </span>
              </div>

              <div id="product-viewer" class="h-[24rem] rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.10),_transparent_35%),linear-gradient(180deg,#0e1318_0%,#121820_100%)] shadow-[var(--shadow-frame)] sm:h-[30rem]"></div>

              <div class="mt-4 flex flex-wrap items-center justify-between gap-3">
                <p class="text-sm text-muted">Arraste para girar. O modelo muda conforme a medida selecionada.</p>
                <div id="modal-variant-meta" class="text-xs uppercase tracking-[0.22em] text-accent-soft"></div>
              </div>
            </div>

            <div class="p-6 sm:p-8 lg:p-10">
              <p id="modal-description" class="section-copy max-w-none"></p>

              <div class="mt-8">
                <p class="text-xs uppercase tracking-[0.28em] text-accent-soft">Escolha a medida</p>
                <div id="modal-variants" class="mt-4 flex flex-wrap gap-3"></div>
              </div>

              <dl id="modal-specs" class="mt-8 space-y-3 text-sm"></dl>

              <div class="mt-8 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
                <p class="text-xs uppercase tracking-[0.28em] text-accent-soft">Leitura visual</p>
                <p class="mt-3 text-sm leading-7 text-muted">
                  A visualização é uma representação técnica do bloco para ajudar na leitura de forma, vazados e proporção antes do orçamento.
                </p>
              </div>

              <div class="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  id="modal-cta"
                  href="#contato"
                  class="inline-flex items-center justify-center rounded-full bg-accent px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-accent-soft"
                >
                  Solicitar este modelo
                </a>
                <button
                  type="button"
                  id="modal-close-secondary"
                  class="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.03] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-white/25 hover:bg-white/[0.08]"
                >
                  Continuar navegando
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <footer class="shell border-t border-white/10 py-8">
      <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex items-center gap-3">
          <img src="/brand/logo.png" alt="Blocos Serezini" class="h-14 w-auto object-contain" />
        </div>
        <p class="text-sm text-muted">© <span id="year"></span> Blocos Serezini. Todos os direitos reservados.</p>
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
const productModal = document.querySelector<HTMLDivElement>("#product-modal");
const productModalBackdrop = document.querySelector<HTMLDivElement>("[data-modal-backdrop]");
const productModalClose = document.querySelector<HTMLButtonElement>("#product-modal-close");
const productModalCloseSecondary = document.querySelector<HTMLButtonElement>("#modal-close-secondary");
const modalKicker = document.querySelector<HTMLParagraphElement>("#modal-kicker");
const modalTitle = document.querySelector<HTMLHeadingElement>("#modal-title");
const modalDescription = document.querySelector<HTMLParagraphElement>("#modal-description");
const modalSpecs = document.querySelector<HTMLDListElement>("#modal-specs");
const modalVariants = document.querySelector<HTMLDivElement>("#modal-variants");
const modalVariantMeta = document.querySelector<HTMLDivElement>("#modal-variant-meta");
const modalCta = document.querySelector<HTMLAnchorElement>("#modal-cta");
const viewerHost = document.querySelector<HTMLDivElement>("#product-viewer");
const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");
const form = document.querySelector<HTMLFormElement>("#contact-form");
const formFeedback = document.querySelector<HTMLParagraphElement>("#form-feedback");
const productField = document.querySelector<HTMLSelectElement>('select[name="product"]');
const messageField = document.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
const year = document.querySelector<HTMLSpanElement>("#year");

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

year!.textContent = new Date().getFullYear().toString();

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

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productTrigger;

    if (!productId) {
      return;
    }

    openProductModal(productId);
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

modalCta?.addEventListener("click", (event) => {
  event.preventDefault();

  if (!activeProduct) {
    return;
  }

  const variant = activeProduct.variants[activeVariantIndex];

  if (productField) {
    productField.value = activeProduct.name;
  }

  if (messageField) {
    messageField.value = `Olá, gostaria de um orçamento para ${activeProduct.name} na medida ${variant.dimensions}.`;
  }

  closeProductModal();
  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
});

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
    "Quero solicitar um orçamento com os dados abaixo:",
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

function openProductModal(productId: string): void {
  const product = productMap.get(productId);

  if (!product || !productModal) {
    return;
  }

  activeProduct = product;
  activeVariantIndex = 0;
  targetRotation = { x: -0.38, y: 0.72 };
  cameraDistance = 7.2;
  autoSpinVelocity = 0.0035;
  isDragging = false;
  productModal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
  renderModalContent();

  requestAnimationFrame(() => {
    void initializeProductViewer();
  });
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

function renderModalContent(): void {
  if (!activeProduct) {
    return;
  }

  const variant = activeProduct.variants[activeVariantIndex];
  const specs = activeProduct.specs.map(([label, value]) =>
    label === "Dimensões" ? [label, variant.dimensions] : [label, value],
  );

  if (modalKicker) {
    modalKicker.textContent = `${activeProduct.name} em visualização técnica`;
  }

  if (modalTitle) {
    modalTitle.textContent = activeProduct.name;
  }

  if (modalDescription) {
    modalDescription.textContent = activeProduct.description;
  }

  if (modalVariantMeta) {
    modalVariantMeta.textContent = `${variant.dimensions} · arraste para girar`;
  }

  if (modalVariants) {
    modalVariants.innerHTML = activeProduct.variants
      .map(
        (item, index) => `
          <button
            type="button"
            data-variant-index="${index}"
            class="rounded-full border px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition ${
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
    modalCta.textContent = `Solicitar ${activeProduct.name}`;
  }
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

  if (kind === "canaleta") {
    buildCanaleta(group, material, edgeMaterial, { length, height, depth, profile });
  } else {
    buildHollowBlock(group, material, edgeMaterial, {
      length,
      height,
      depth,
      structural: kind === "estrutural",
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
    profile: ReturnType<typeof getBlockProfile>;
  },
): void {
  const { length, height, depth, structural, profile } = options;
  const { shell, end, web, baseThickness } = profile;
  const innerDepth = Math.max(depth - shell * 2, 0.2);
  const wallHeight = Math.max(height - baseThickness, 0.3);
  const wallCenterY = structural ? 0 : baseThickness / 2;

  if (!structural && baseThickness > 0) {
    addBlockPart(group, material, edgeMaterial, [length, baseThickness, depth], [0, -height / 2 + baseThickness / 2, 0]);
  }

  addBlockPart(group, material, edgeMaterial, [length, wallHeight, shell], [0, wallCenterY, depth / 2 - shell / 2]);
  addBlockPart(group, material, edgeMaterial, [length, wallHeight, shell], [0, wallCenterY, -depth / 2 + shell / 2]);
  addBlockPart(group, material, edgeMaterial, [end, wallHeight, innerDepth], [-length / 2 + end / 2, wallCenterY, 0]);
  addBlockPart(group, material, edgeMaterial, [end, wallHeight, innerDepth], [length / 2 - end / 2, wallCenterY, 0]);
  addBlockPart(group, material, edgeMaterial, [web, wallHeight, innerDepth], [0, wallCenterY, 0]);
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

function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
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
