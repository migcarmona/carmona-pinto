const stats = [
  { value: "100%", label: "Focados na região de Évora" },
  { value: "3", label: "Áreas de negócio integradas" },
  { value: "LSF", label: "Sistema construtivo certificado" },
];

export function About() {
  return (
    <section id="sobre" className="bg-slate-50 py-24" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-600">
            Sobre Nós
          </p>
          <h2 id="about-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Uma equipa de Évora, para a região de Évora
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            A Carmona &amp; Pinto é uma empresa de construção sediada em Évora, especializada em
            construção através do sistema Light Steel Frame (LSF), remodelações e reabilitação de
            edifícios em alvenaria tradicional, e ainda na compra e venda de imóveis na região.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Trabalhamos de perto com cada cliente, do primeiro contacto ao orçamento e até à
            entrega final da obra, garantindo transparência, qualidade de execução e cumprimento
            de prazos em cada projeto.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-slate-200 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-2xl font-bold text-slate-900">{stat.value}</dd>
                <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-slate-500"
          role="img"
          aria-label="Obra de construção em Light Steel Frame da Carmona & Pinto em Évora"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" strokeWidth={1} stroke="currentColor" className="h-28 w-28 text-amber-500/40">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 21V8.25l9-6 9 6V21M3 21h18M3 21v-6.75h4.5V21M15 21v-6.75h4.5V21M9 12.75h6"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
