import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import OffersSection from "@/components/sections/OffersSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import JsonLd from "@/components/seo/JsonLd";
import { getFAQSchema, getLocalBusinessSchema } from "@/components/seo/schemas";
import { faqItems } from "@/data/faq";

export const metadata: Metadata = {
  title: "ENR-J Solaire | Centrale Solaire Professionnelle : 0€ d'Investissement",
  description:
    "Centrale solaire professionnelle en tiers-investissement. Installation panneau solaire entreprise financée à 100%, maintenance incluse 30 ans. Loi APER, Décret Tertiaire. Devis gratuit.",
  alternates: {
    canonical: "https://enr-j.com",
  },
  openGraph: {
    title: "Centrale solaire professionnelle | Panneau solaire entreprise 0€",
    description:
      "Installation de centrale solaire professionnelle sans investissement. Panneau solaire entreprise, hangar agricole, toiture industrielle, ombrière parking.",
    url: "https://enr-j.com",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd data={getFAQSchema(faqItems)} />
      <JsonLd data={getLocalBusinessSchema()} />
      <HeroSection />
      <HowItWorksSection />
      <OffersSection />
      <StatsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTABannerSection />
    </>
  );
}
