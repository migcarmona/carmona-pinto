import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrcamentoForm } from "@/components/OrcamentoForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pedir Orçamento",
  description:
    "Peça já o seu orçamento gratuito de construção, remodelação, reabilitação ou obras em Évora. Preencha o formulário e anexe os seus projetos.",
  alternates: {
    canonical: "/orcamento",
  },
};

export default function OrcamentoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-charcoal-dark py-16 text-white sm:py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">
              {siteConfig.name}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Peça o seu Orçamento
            </h1>
            <p className="mt-4 text-lg text-slate-300">
              Preencha o formulário com os dados da sua obra. Se já tiver projetos ou plantas,
              pode anexá-los diretamente aqui. Respondemos o mais rápido possível.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
              <OrcamentoForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
