import { CtaButton } from "@/components/CtaButton";

const services = [
  {
    title: "Construção em LSF",
    description:
      "Construção de moradias e edifícios em Light Steel Frame: um sistema construtivo mais rápido, sustentável e eficiente, com excelente desempenho térmico e acústico, ideal para o clima de Évora.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 21V8.25l9-6 9 6V21M3 21h18M3 21v-6.75h4.5V21M15 21v-6.75h4.5V21M9 12.75h6"
      />
    ),
  },
  {
    title: "Remodelações e Reabilitação",
    description:
      "Remodelação e reabilitação de casas e edifícios em alvenaria tradicional, respeitando a traça original quando aplicável e modernizando espaços com materiais de qualidade.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
      />
    ),
  },
  {
    title: "Compra e Venda de Imóveis",
    description:
      "Apoio na compra e venda de imóveis na região de Évora, desde a angariação e avaliação até ao acompanhamento de todo o processo, com o conhecimento técnico de uma equipa de construção.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    ),
  },
];

export function Services() {
  return (
    <section id="servicos" className="bg-white py-24" aria-labelledby="services-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-dark">
            Os Nossos Serviços
          </p>
          <h2 id="services-heading" className="mt-3 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Soluções completas em construção e imobiliário
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Da construção de raiz à reabilitação de imóveis existentes, e ainda apoio na compra e
            venda: a Carmona &amp; Pinto acompanha todo o processo em Évora e região.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-slate-200 bg-slate-50 p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand/10 text-brand-dark">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
                  {service.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-charcoal">{service.title}</h3>
              <p className="mt-3 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
