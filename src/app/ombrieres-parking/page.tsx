import type { Metadata } from "next";
import { services } from "@/data/services";
import ServiceHeroSection from "@/components/sections/ServiceHeroSection";
import ServiceContentSection from "@/components/sections/ServiceContentSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { AlertTriangle, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import FAQSection from "@/components/sections/FAQSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema, getServiceSchema } from "@/components/seo/schemas";

const service = services.find((s) => s.slug === "ombrieres-parking")!;

export const metadata: Metadata = {
  title: "Ombrières de Parking Solaires | Loi APER 2026/2028",
  description:
    "Loi APER : parkings ≥1 500 m² doivent installer des ombrières PV. Échéance 2026/2028. Amende jusqu'à 40 000 €/an. Solution sans apport.",
  alternates: {
    canonical: "https://enr-j.com/ombrieres-parking",
  },
  openGraph: {
    title: "Ombrières Parking : Conformité Loi APER | ENR-J Solaire",
    description:
      "Mise en conformité Loi APER sans investissement. Ombrières photovoltaïques + bornes IRVE.",
  },
};

export default function OmbrieresPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Ombrières de Parking", url: "/ombrieres-parking" }])} />
      <JsonLd data={getServiceSchema({ name: service.title, description: service.description, url: "/ombrieres-parking" })} />
      <ServiceHeroSection
        title={service.title}
        description={service.description}
        breadcrumbLabel={service.shortTitle}
        image={service.image}
      />

      {/* Loi APER — CORRECTED banner */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-warning/10 border-2 border-warning/30 rounded-2xl p-6 md:p-8">
            <div className="flex gap-4 items-start mb-6">
              <AlertTriangle className="w-8 h-8 text-warning shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Obligation légale : Loi APER
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  La loi d&apos;Accélération de la Production d&apos;Énergies Renouvelables
                  (APER) impose aux parkings extérieurs existants de s&apos;équiper en
                  ombrières photovoltaïques ou en végétalisation. Les seuils sont
                  basés sur la <strong>surface au sol</strong> du parking.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white rounded-xl p-5 border border-danger/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-danger" />
                  <p className="font-bold text-foreground">≥ 10 000 m² de surface</p>
                </div>
                <p className="text-2xl font-extrabold text-danger mb-1">
                  1er juillet 2026
                </p>
                <p className="text-sm text-muted-foreground">
                  Amende : jusqu&apos;à <strong>40 000 €/an</strong> en cas de non-conformité
                </p>
              </div>
              <div className="bg-white rounded-xl p-5 border border-warning/20">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full bg-warning" />
                  <p className="font-bold text-foreground">1 500 à 10 000 m²</p>
                </div>
                <p className="text-2xl font-extrabold text-warning mb-1">
                  1er juillet 2028
                </p>
                <p className="text-sm text-muted-foreground">
                  Amende : jusqu&apos;à <strong>20 000 €/an</strong> en cas de non-conformité
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-5 border border-border/50">
              <p className="font-bold text-foreground mb-2">
                Couverture minimum exigée : 50% de la surface du parking
              </p>
              <p className="text-sm text-muted-foreground">
                Au moins la moitié de la surface de votre parking doit être couverte
                par des ombrières intégrant un procédé de production d&apos;énergies
                renouvelables, ou par des dispositifs de végétalisation. Des dérogations
                existent pour les contraintes techniques, architecturales ou de sécurité.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Timeline réglementaire */}
      <SectionWrapper background="muted">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Votre parking est-il concerné ?
              </h2>
              <p className="text-muted-foreground">
                Vérifiez vos obligations en fonction de la surface de votre parking.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-border/50">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                <div className="w-16 text-center shrink-0">
                  <p className="text-xs text-muted-foreground">Surface</p>
                  <p className="font-bold text-foreground">&lt; 1 500 m²</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    Pas d&apos;obligation au titre de la Loi APER. L&apos;installation reste
                    possible volontairement.
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full shrink-0">
                  Non concerné
                </span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-warning/5 border border-warning/20">
                <div className="w-16 text-center shrink-0">
                  <p className="text-xs text-muted-foreground">Surface</p>
                  <p className="font-bold text-foreground">1 500 -<br/>10 000 m²</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground font-medium">
                    Couverture 50% obligatoire avant le <strong>1er juillet 2028</strong>.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Amende : 20 000 €/an
                  </p>
                </div>
                <span className="px-3 py-1 bg-warning/10 text-warning text-xs font-medium rounded-full shrink-0">
                  2028
                </span>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-danger/5 border border-danger/20">
                <div className="w-16 text-center shrink-0">
                  <p className="text-xs text-muted-foreground">Surface</p>
                  <p className="font-bold text-foreground">≥ 10 000 m²</p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground font-medium">
                    Couverture 50% obligatoire avant le <strong>1er juillet 2026</strong>.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Amende : 40 000 €/an
                  </p>
                </div>
                <span className="px-3 py-1 bg-danger/10 text-danger text-xs font-medium rounded-full shrink-0">
                  2026
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-all shadow-lg"
            >
              Vérifier mes obligations Loi APER
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <ServiceContentSection service={service} />
      <FAQSection />
      <CTABannerSection />
    </>
  );
}
