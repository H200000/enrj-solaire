import type { Metadata } from "next";
import { services } from "@/data/services";
import ServiceHeroSection from "@/components/sections/ServiceHeroSection";
import ServiceContentSection from "@/components/sections/ServiceContentSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ArrowDown, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import FAQSection from "@/components/sections/FAQSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/components/seo/schemas";

const service = services.find((s) => s.slug === "tiers-investissement")!;

export const metadata: Metadata = {
  title: "Tiers-Investissement Solaire | Financement sans apport",
  description:
    "Tiers-investissement solaire : un investisseur finance votre installation PV. Loyer de toiture, abonnement solaire ou crédit-bail. Contrat 30 ans.",
  alternates: {
    canonical: "https://enr-j.com/tiers-investissement",
  },
  openGraph: {
    title: "Tiers-Investissement Solaire | ENR-J Solaire",
    description:
      "0€ d'investissement. Un tiers finance, installe et maintient votre centrale solaire. Trois modèles : location de toiture, abonnement solaire, crédit-bail.",
  },
};

const timeline = [
  {
    period: "Jour 1",
    title: "Signature du contrat",
    description:
      "Aucun paiement. L'investisseur finance 100% de l'installation et prend en charge toutes les démarches (permis, Enedis, EDF OA).",
  },
  {
    period: "Mois 4-6",
    title: "Installation clé en main",
    description:
      "Pose des panneaux par des équipes certifiées RGE QualiPV. Mise en service et raccordement au réseau.",
  },
  {
    period: "Années 1-30",
    title: "Exploitation & maintenance",
    description:
      "L'investisseur exploite la centrale. Vous bénéficiez d'un loyer de toiture ou d'une électricité à prix réduit. Monitoring et maintenance inclus.",
  },
  {
    period: "Fin de contrat",
    title: "Récupération ou démontage",
    description:
      "Vous récupérez l'installation gratuitement (panneaux encore performants à >80%), ou l'investisseur démonte à ses frais et remet la toiture en état.",
  },
];

const models = [
  {
    name: "Location de toiture",
    description: "L'investisseur exploite votre toiture et vous verse un loyer annuel fixe.",
    ideal: "Exploitants agricoles, propriétaires fonciers",
    avantages: [
      "Revenu passif garanti (2-4 €/m²/an)",
      "Aucune gestion de votre part",
      "Rénovation de toiture possible",
    ],
  },
  {
    name: "Abonnement solaire",
    description: "Vous achetez l'électricité produite sur votre toiture à un prix inférieur au tarif réseau.",
    ideal: "Industriels, grandes surfaces, logistique",
    avantages: [
      "Réduction de 30 à 50% de la facture",
      "Prix fixe protégé contre l'inflation",
      "Surplus revendu à EDF OA",
    ],
  },
  {
    name: "Crédit-bail",
    description: "Location avec option d'achat. Vous devenez propriétaire de l'installation avant la fin du contrat.",
    ideal: "Entreprises souhaitant devenir propriétaires",
    avantages: [
      "Option d'achat à prix résiduel",
      "Déductibilité des loyers",
      "Propriété anticipée possible",
    ],
  },
];

export default function TiersInvestissementPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Tiers-Investissement", url: "/tiers-investissement" }])} />
      <ServiceHeroSection
        title={service.title}
        description={service.description}
        breadcrumbLabel={service.shortTitle}
        image={service.image}
      />

      {/* Timeline */}
      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Comment ça fonctionne ?
          </h2>

          <div className="space-y-2">
            {timeline.map((step, index) => (
              <div key={step.period}>
                <div className="flex gap-6 items-start p-6 rounded-2xl bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-28 shrink-0">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full">
                      {step.period}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < timeline.length - 1 && (
                  <div className="flex justify-center ml-16">
                    <ArrowDown className="w-5 h-5 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-xl font-bold text-foreground mb-4 text-center">
              En résumé
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl font-extrabold text-primary">0€</p>
                <p className="text-sm text-muted-foreground mt-1">d&apos;investissement</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-secondary">30 ans</p>
                <p className="text-sm text-muted-foreground mt-1">durée de contrat</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-primary">30 ans</p>
                <p className="text-sm text-muted-foreground mt-1">garantie panneaux</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* 3 models */}
      <SectionWrapper background="muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            Trois modèles de tiers-investissement
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Selon votre profil et vos objectifs, nous vous orientons vers la formule
            la plus adaptée.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {models.map((model) => (
              <div
                key={model.name}
                className="bg-white rounded-2xl p-6 border border-border/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{model.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{model.description}</p>
                <p className="text-xs text-primary font-medium mb-4">
                  Idéal pour : {model.ideal}
                </p>
                <ul className="space-y-2">
                  {model.avantages.map((av) => (
                    <li key={av} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {av}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Comparison: own investment vs tiers-investissement */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            Investissement propre vs tiers-investissement
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
            Comparez les deux approches pour votre projet solaire.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-3 px-4 font-bold text-foreground">Critère</th>
                  <th className="text-left py-3 px-4 font-bold text-foreground">Investissement propre</th>
                  <th className="text-left py-3 px-4 font-bold text-primary">Tiers-investissement</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium">Coût initial</td>
                  <td className="py-3 px-4">
                    <span className="flex items-center gap-1">
                      <XCircle className="w-4 h-4 text-danger" />
                      80 000 - 500 000 €+
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      0 €
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium">Maintenance</td>
                  <td className="py-3 px-4">
                    <span className="flex items-center gap-1">
                      <XCircle className="w-4 h-4 text-danger" />
                      À votre charge
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Incluse (30 ans)
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium">Démarches admin.</td>
                  <td className="py-3 px-4">
                    <span className="flex items-center gap-1">
                      <XCircle className="w-4 h-4 text-danger" />
                      À votre charge
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Gérées par ENR-J
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium">Risque technique</td>
                  <td className="py-3 px-4">
                    <span className="flex items-center gap-1">
                      <XCircle className="w-4 h-4 text-danger" />
                      Porté par vous
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Porté par l&apos;investisseur
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 px-4 font-medium">Propriété</td>
                  <td className="py-3 px-4">Immédiate</td>
                  <td className="py-3 px-4">En fin de contrat (30 ans)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Revenus totaux</td>
                  <td className="py-3 px-4">Supérieurs sur 30 ans</td>
                  <td className="py-3 px-4">Inférieurs mais sans risque ni capital</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-all shadow-lg"
            >
              Simuler mon projet en tiers-investissement
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
