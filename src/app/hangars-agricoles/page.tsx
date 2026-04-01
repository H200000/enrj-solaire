import type { Metadata } from "next";
import { services } from "@/data/services";
import ServiceHeroSection from "@/components/sections/ServiceHeroSection";
import ServiceContentSection from "@/components/sections/ServiceContentSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Leaf, Sun, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import FAQSection from "@/components/sections/FAQSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema, getServiceSchema } from "@/components/seo/schemas";

const service = services.find((s) => s.slug === "hangars-agricoles")!;

export const metadata: Metadata = {
  title: "Hangar Agricole Photovoltaïque | Tiers-Investissement",
  description:
    "Photovoltaïque sur hangar agricole sans investissement. Loyer de toiture ou autoconsommation. Conforme agrivoltaïsme. Dès 500 m².",
  alternates: {
    canonical: "https://enr-j.com/hangars-agricoles",
  },
  openGraph: {
    title: "Hangar Agricole Solaire : 0€ d'investissement | ENR-J Solaire",
    description:
      "Valorisez votre toiture agricole avec le photovoltaïque. Loyer de toiture, autoconsommation ou revente EDF OA. Maintenance incluse 30 ans.",
  },
};

const productionTable = [
  { surface: "500 m²", puissance: "~65 kWc", production: "~72 MWh/an", revenu: "~8 400 €/an" },
  { surface: "1 000 m²", puissance: "~130 kWc", production: "~144 MWh/an", revenu: "~16 800 €/an" },
  { surface: "1 500 m²", puissance: "~200 kWc", production: "~222 MWh/an", revenu: "~25 900 €/an" },
  { surface: "2 000 m²", puissance: "~260 kWc", production: "~289 MWh/an", revenu: "~33 700 €/an" },
];

export default function HangarsAgricolesPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Hangars Agricoles", url: "/hangars-agricoles" }])} />
      <JsonLd data={getServiceSchema({ name: service.title, description: service.description, url: "/hangars-agricoles" })} />
      <ServiceHeroSection
        title={service.title}
        description={service.description}
        breadcrumbLabel={service.shortTitle}
        image={service.image}
      />

      {/* Agrivoltaïsme section */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center shrink-0">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Cadre agrivoltaïsme, Décret 2024
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Le décret relatif à l&apos;agrivoltaïsme encadre l&apos;installation de panneaux
                solaires sur les exploitations agricoles. Il garantit que l&apos;activité
                agricole reste prioritaire.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-green-50 border border-green-200">
              <p className="text-3xl font-extrabold text-green-700">40%</p>
              <p className="text-sm text-green-800 font-medium mt-1">
                Couverture maximum de la parcelle
              </p>
              <p className="text-xs text-green-600 mt-2">
                La surface couverte par les panneaux ne peut excéder 40% de la surface totale de la parcelle agricole.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-green-50 border border-green-200">
              <p className="text-3xl font-extrabold text-green-700">90%</p>
              <p className="text-sm text-green-800 font-medium mt-1">
                Rendement agricole minimum maintenu
              </p>
              <p className="text-xs text-green-600 mt-2">
                L&apos;installation doit permettre de maintenir au moins 90% du rendement agricole de la parcelle.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Production estimates table */}
      <SectionWrapper background="muted">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
              <Sun className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Estimations de production par surface
              </h2>
              <p className="text-muted-foreground">
                Basées sur une production moyenne de 1 112 kWh/kWc/an en Auvergne-Rhône-Alpes.
                Revenus estimés en revente totale EDF OA (tarif 100-500 kWc : 0,1168 €/kWh).
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-3 px-4 font-bold text-foreground">Surface toiture</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Puissance installée</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Production annuelle</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Revenu estimé</th>
                </tr>
              </thead>
              <tbody>
                {productionTable.map((row) => (
                  <tr key={row.surface} className="border-b border-border/50 hover:bg-white/80">
                    <td className="py-3 px-4 font-medium">{row.surface}</td>
                    <td className="py-3 px-4">{row.puissance}</td>
                    <td className="py-3 px-4">{row.production}</td>
                    <td className="py-3 px-4 font-semibold text-primary">{row.revenu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            * Estimations indicatives. Le revenu réel dépend de l&apos;orientation,
            de l&apos;inclinaison, de l&apos;ombrage et du tarif de rachat en vigueur au moment
            du contrat. En tiers-investissement, c&apos;est l&apos;investisseur qui perçoit les revenus
            de revente ; vous bénéficiez d&apos;un loyer de toiture ou d&apos;une électricité à prix réduit.
          </p>
        </div>
      </SectionWrapper>

      {/* Revenue models */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Deux modèles de revenus
              </h2>
              <p className="text-muted-foreground">
                Selon votre profil et vos besoins, deux options s&apos;offrent à vous.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-lg font-bold text-foreground mb-3">Location de toiture</h3>
              <p className="text-muted-foreground text-sm mb-4">
                L&apos;investisseur exploite votre toiture et vous verse un loyer annuel.
                Vous n&apos;avez rien à gérer.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  Loyer de 2 à 4 €/m²/an
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  Revenu garanti contractuellement
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                  Maintenance 100% prise en charge
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl border-2 border-secondary/20 hover:border-secondary/40 transition-colors">
              <h3 className="text-lg font-bold text-foreground mb-3">Autoconsommation (abonnement solaire)</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Vous consommez l&apos;électricité produite à un tarif inférieur au marché.
                Le surplus est revendu.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                  Réduction de 30 à 50% de la facture
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                  Prix fixe sur toute la durée du contrat
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0 mt-1.5" />
                  Protection contre la hausse des tarifs
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-all shadow-lg"
            >
              Vérifier l&apos;éligibilité de mon hangar
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
