const reasons = [
  {
    title: "Conhecimento local",
    description:
      "Sediados em Évora, conhecemos as especificidades da região: clima, tipologias de construção e requisitos camarários.",
  },
  {
    title: "Sistema LSF eficiente",
    description:
      "O Light Steel Frame permite obras mais rápidas, com excelente isolamento térmico e acústico e menor impacto ambiental.",
  },
  {
    title: "Orçamento sem compromisso",
    description:
      "Analisamos o seu projeto e apresentamos um orçamento claro e detalhado, sem custos nem obrigações.",
  },
  {
    title: "Acompanhamento completo",
    description:
      "Do primeiro contacto à entrega da obra, ou da angariação à escritura, acompanhamos todo o processo lado a lado consigo.",
  },
];

export function WhyUs() {
  return (
    <section className="bg-white py-24" aria-labelledby="whyus-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
            Porquê Escolher-nos
          </p>
          <h2 id="whyus-heading" className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Compromisso com a qualidade em cada projeto
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div key={reason.title} className="flex gap-5">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-charcoal-dark text-sm font-bold text-brand">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-charcoal">{reason.title}</h3>
                <p className="mt-2 text-slate-600">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
