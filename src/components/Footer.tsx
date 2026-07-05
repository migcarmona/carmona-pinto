import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const { phones, email, address } = siteConfig.contacts;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-3">
        <div>
          <p className="flex items-center gap-2 text-lg font-bold text-white">
            <Image src="/logo-icon-white.png" alt="" width={28} height={28} className="h-7 w-7" />
            {siteConfig.name}
          </p>
          <p className="mt-2 text-sm">
            Construção em LSF, remodelações, reabilitação e imóveis em Évora.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-200">Navegação</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#servicos" className="hover:text-brand-400">Serviços</a></li>
            <li><a href="#sobre" className="hover:text-brand-400">Sobre Nós</a></li>
            <li><a href="#processo" className="hover:text-brand-400">Como Funciona</a></li>
            <li><a href="#contactos" className="hover:text-brand-400">Contactos</a></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-200">Contactos</p>
          <ul className="mt-3 space-y-2 text-sm">
            {phones.map((phone) => (
              <li key={phone.href}>
                <a href={phone.href} className="hover:text-brand-400">{phone.display}</a>
              </li>
            ))}
            <li><a href={`mailto:${email}`} className="hover:text-brand-400">{email}</a></li>
            <li>{address.full}</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-slate-800 px-6 pt-6 text-xs">
        © {year} {siteConfig.legalName}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
