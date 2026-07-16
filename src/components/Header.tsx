import Image from "next/image";
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
    <header className="relative z-50 border-b border-white/10 bg-charcoal-dark/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#topo" aria-label={siteConfig.name}>
          <Image
            src="/logo-white.png"
            alt={`${siteConfig.name} - Imobiliário e Construção`}
            width={1193}
            height={685}
            priority
            className="h-10 w-auto"
          />
        </a>

        <nav aria-label="Menu principal" className="hidden md:block">
          <ul className="flex items-center gap-8 text-sm font-medium text-slate-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-brand">
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
