import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contacts.email,
    telephone: siteConfig.contacts.phones[0].display,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contacts.address.street,
      addressLocality: siteConfig.contacts.address.city,
      addressCountry: "PT",
    },
    areaServed: {
      "@type": "City",
      name: siteConfig.areaServed,
    },
    priceRange: "€€",
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Construção civil e LSF (Light Steel Frame)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Remodelações e reabilitação de edifícios" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Obras gerais em Évora" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Compra e venda de imóveis" } },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
