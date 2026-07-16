import { siteConfig } from "@/lib/site-config";

type CtaButtonProps = {
  className?: string;
  variant?: "solid" | "outline";
};

export function CtaButton({ className = "", variant = "solid" }: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const styles =
    variant === "solid"
      ? "bg-brand-dark text-white hover:bg-brand focus-visible:outline-brand-dark"
      : "border border-brand text-brand-dark hover:bg-brand-dark hover:text-white focus-visible:outline-brand-dark";

  return (
    <a
      href={siteConfig.ctaUrl}
      className={`${base} ${styles} ${className}`}
      aria-label={`${siteConfig.ctaLabel} - abre o portal de orçamentos`}
    >
      {siteConfig.ctaLabel}
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-4 w-4"
      >
        <path
          fillRule="evenodd"
          d="M3 10a.75.75 0 01.75-.75h10.638L11.29 6.16a.75.75 0 111.06-1.06l4.5 4.5a.75.75 0 010 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l3.098-3.09H3.75A.75.75 0 013 10z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}
