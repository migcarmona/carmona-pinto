import { CtaButton } from "@/components/CtaButton";

const steps = [
  {
    title: "Contacto",
    description: "Entra em contacto connosco e conta-nos o seu projeto de construção, remodelação ou imóvel.",
  },
  {
    title: "Visita e Orçamento",
    description: "Visitamos o local, avaliamos as necessidades e apresentamos um orçamento gratuito e detalhado.",
  },
  {
    title: "Execução",
    description: "A nossa equipa executa a obra com rigor, mantendo-o informado em cada fase do processo.",
  },
  {
    title: "Entrega",
    description: "Entregamos o projeto concluído, dentro do prazo combinado e com a qualidade acordada.",
  },
];

export function Process() {
  return (
    <section id="processo" className="bg-slate-950 py-24 text-white" aria-labelledby="process-heading">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">
            Como Funciona
          </p>
          <h2 id="process-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Do primeiro contacto à entrega da obra
          </h2>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6">
              <span className="text-4xl font-bold text-brand-400/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </section>
  );
}
