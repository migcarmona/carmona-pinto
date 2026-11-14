import Image from "next/image";
import { CtaButton } from "@/components/CtaButton";

const highlights = [
  "Construção em LSF (Light Steel Frame)",
  "Remodelações e reabilitação de edifícios",
  "Compra e venda de imóveis",
  "Orçamento gratuito e sem compromisso",
];

export function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-charcoal-dark text-white"
      aria-labelledby="hero-heading"
    >
      <Image
        src="/lsf-evora.webp"
        alt="Obra de construção em Light Steel Frame (LSF) da Carmona & Pinto em Évora"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-charcoal-dark via-charcoal-dark/90 to-charcoal-dark/50"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(32,162,164,0.22),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(71,82,79,0.35),transparent_40%)]"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">
          Construção &amp; Imobiliário em Évora
        </p>
        <h1
          id="hero-heading"
          className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Construção em LSF, Remodelações e Reabilitação de Imóveis em Évora
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          A Carmona &amp; Pinto é uma empresa de construção sediada em Évora, especializada no
          sistema construtivo Light Steel Frame (LSF), em remodelações e reabilitações em
          alvenaria, e na compra e venda de imóveis. Rigor, qualidade e prazos cumpridos, do
          projeto à chave na mão.
        </p>

        <ul className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <CtaButton />
          <a
            href="#servicos"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-slate-200 transition-colors hover:border-brand hover:text-white"
          >
            Ver Serviços
          </a>
        </div>
      </div>
    </section>
  );
}
