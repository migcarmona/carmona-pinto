import { CtaButton } from "@/components/CtaButton";
import { MobileNav } from "@/components/MobileNav";
import { siteConfig } from "@/lib/site-config";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#contactos", label: "Contactos" },
];

export function Header() {
  return (
    <header className="relative z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#topo" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-amber-500 text-slate-950">
            CP
          </span>
          {siteConfig.name}
        </a>

        <nav aria-label="Menu principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-amber-400">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <CtaButton />
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
