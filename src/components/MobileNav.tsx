"use client";

import { useState } from "react";
import { CtaButton } from "@/components/CtaButton";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre Nós" },
  { href: "#processo", label: "Como Funciona" },
  { href: "#contactos", label: "Contactos" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="inline-flex items-center justify-center rounded-md p-2 text-slate-100 hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-400"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
          {open ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
          )}
        </svg>
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-full border-t border-slate-800 bg-slate-950 px-6 py-6 shadow-lg"
        >
          <nav aria-label="Menu principal (telemóvel)">
            <ul className="flex flex-col gap-4 text-base font-medium text-slate-200">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)} className="block py-1 hover:text-brand-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <CtaButton className="mt-6 w-full" />
        </div>
      )}
    </div>
  );
}
