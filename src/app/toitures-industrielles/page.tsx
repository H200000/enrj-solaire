import type { Metadata } from "next";
import { services } from "@/data/services";
import ServiceHeroSection from "@/components/sections/ServiceHeroSection";
import ServiceContentSection from "@/components/sections/ServiceContentSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Building2, Calculator, Leaf, ArrowRight } from "lucide-react";
import Link from "next/link";
import FAQSection from "@/components/sections/FAQSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema, getServiceSchema } from "@/components/seo/schemas";

const service = services.find((s) => s.slug === "toitures-industrielles")!;

export const metadata: Metadata = {
  title: "Toiture Industrielle Solaire | Décret Tertiaire",
  description:
    "Réduisez vos charges de 30 à 50% avec le photovoltaïque. Conformité Décret Tertiaire (-40% en 2030). Tiers-investissement sans apport.",
  alternates: {
    canonical: "https://enr-j.com/toitures-industrielles",
  },
  openGraph: {
    title: "Toiture Industrielle Solaire | ENR-J Solaire",
    description:
      "Autoconsommation ou revente EDF OA sur votre toiture industrielle. Conformité Décret Tertiaire garantie. 0€ d'investissement.",
  },
};

export default function ToituresIndustriellesPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Toitures Industrielles", url: "/toitures-industrielles" }])} />
      <JsonLd data={getServiceSchema({ name: service.title, description: service.description, url: "/toitures-industrielles" })} />
      <ServiceHeroSection
        title={service.title}
        description={service.description}
        breadcrumbLabel={service.shortTitle}
        image={service.image}
      />

      {/* Décret Tertiaire section */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
              <Building2 className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Décret Tertiaire : obligations de réduction
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le dispositif Éco Énergie Tertiaire concerne tous les bâtiments à usage
                tertiaire de plus de 1 000 m². Il impose une réduction progressive de la
                consommation énergétique par rapport à une année de référence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-center">
              <p className="text-4xl font-extrabold text-blue-700">-40%</p>
              <p className="text-sm text-blue-800 font-medium mt-1">d&apos;ici 2030</p>
              <p className="text-xs text-blue-600 mt-2">Première échéance</p>
            </div>
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-center">
              <p className="text-4xl font-extrabold text-blue-700">-50%</p>
              <p className="text-sm text-blue-800 font-medium mt-1">d&apos;ici 2040</p>
              <p className="text-xs text-blue-600 mt-2">Deuxième échéance</p>
            </div>
            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 text-center">
              <p className="text-4xl font-extrabold text-blue-700">-60%</p>
              <p className="text-sm text-blue-800 font-medium mt-1">d&apos;ici 2050</p>
              <p className="text-xs text-blue-600 mt-2">Objectif final</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            L&apos;installation de panneaux solaires en autoconsommation réduit directement
            votre consommation d&apos;énergie réseau, contribuant à atteindre ces objectifs
            sans investissement grâce au tiers-investissement.
          </p>
        </div>
      </SectionWrapper>

      {/* Calculation example */}
      <SectionWrapper background="muted">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
              <Calculator className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Exemple chiffré : usine de 3 000 m²
              </h2>
              <p className="text-muted-foreground">
                Simulation pour une toiture industrielle plate en autoconsommation.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <p className="text-2xl font-extrabold text-foreground">3 000 m²</p>
                <p className="text-xs text-muted-foreground mt-1">Surface de toiture</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-extrabold text-foreground">~450 kWc</p>
                <p className="text-xs text-muted-foreground mt-1">Puissance installée</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-extrabold text-primary">~500 MWh/an</p>
                <p className="text-xs text-muted-foreground mt-1">Production annuelle</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-extrabold text-primary">~60 000 €/an</p>
                <p className="text-xs text-muted-foreground mt-1">Économie estimée</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              * Estimation basée sur 1 112 kWh/kWc/an (Auvergne-Rhône-Alpes) et un tarif
              d&apos;électricité moyen de 0,12 €/kWh en autoconsommation. Le résultat réel
              dépend de votre consommation, orientation et conditions locales.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* RSE section */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Impact RSE et reporting extra-financier
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                L&apos;installation de panneaux solaires renforce votre bilan RSE et contribue
                directement à vos obligations de reporting extra-financier (CSRD pour les
                entreprises concernées).
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-border/50">
              <p className="font-bold text-foreground mb-1">Réduction CO₂</p>
              <p className="text-sm text-muted-foreground">
                ~450 kWc évitent l&apos;émission de ~50 tonnes de CO₂/an
                (équivalent au chauffage de 25 foyers).
              </p>
            </div>
            <div className="p-5 rounded-xl border border-border/50">
              <p className="font-bold text-foreground mb-1">Conformité CSRD</p>
              <p className="text-sm text-muted-foreground">
                Contribution mesurable aux indicateurs E1 (changement climatique)
                du reporting de durabilité européen.
              </p>
            </div>
            <div className="p-5 rounded-xl border border-border/50">
              <p className="font-bold text-foreground mb-1">Image employeur</p>
              <p className="text-sm text-muted-foreground">
                Une installation visible qui témoigne de l&apos;engagement
                environnemental de votre entreprise.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-all shadow-lg"
            >
              Étude gratuite de ma toiture
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
