import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone, MapPin, CheckCircle, Sun, Zap, Building2, Leaf, BarChart3 } from "lucide-react";
import { cities } from "@/data/cities";
import { citySolarData } from "@/data/city-solar-data";
import { COMPANY } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";
import { getLocalBusinessSchema } from "@/components/seo/schemas";
import FAQSection from "@/components/sections/FAQSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

interface PageProps {
  params: Promise<{ ville: string }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({ ville: city.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { ville } = await params;
  const city = cities.find((c) => c.slug === ville);
  if (!city) return {};

  return {
    title: `Panneau Solaire ${city.name} (${city.department}) | Devis Gratuit 0€`,
    description: `Installateur panneau solaire à ${city.name} (${city.department}). Centrale solaire professionnelle en tiers-investissement : 0€ d'investissement. Hangars agricoles, toitures industrielles, ombrières parking. Devis gratuit.`,
    alternates: {
      canonical: `https://enr-j.com/installateur-panneau-solaire/${ville}`,
    },
    openGraph: {
      title: `Panneau Solaire ${city.name} | ENR-J Solaire`,
      description: `Installateur de panneaux solaires à ${city.name}. Solution clé en main sans investissement.`,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { ville } = await params;
  const city = cities.find((c) => c.slug === ville);

  if (!city) {
    notFound();
  }

  const solar = citySolarData[city.slug];

  const services = [
    {
      title: "Hangars Agricoles",
      desc: `Construction ou rénovation de hangars photovoltaïques à ${city.name}`,
      href: "/hangars-agricoles",
    },
    {
      title: "Toitures Industrielles",
      desc: `Installation solaire sur toitures industrielles à ${city.name}`,
      href: "/toitures-industrielles",
    },
    {
      title: "Ombrières de Parking",
      desc: `Ombrières photovoltaïques pour parkings à ${city.name}`,
      href: "/ombrieres-parking",
    },
  ];

  return (
    <>
      <JsonLd data={getLocalBusinessSchema()} />

      <Breadcrumbs
        items={[
          { label: "Installateur panneau solaire" },
          { label: city.name },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-12 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            {city.department}, {city.region}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
            Installateur de panneaux solaires à{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {city.name}
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            ENR-J Solaire installe vos panneaux photovoltaïques à {city.name} et
            dans tout le département {city.department}. Tiers-investissement :
            0 € d&apos;investissement initial, maintenance incluse, garantie 30 ans.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-primary-hover transition-all hover:scale-[1.02] shadow-xl shadow-primary/25"
            >
              Devis gratuit à {city.name}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={COMPANY.phoneHref}
              className="inline-flex items-center gap-2 px-6 py-4 border-2 border-foreground/20 text-foreground font-semibold rounded-full hover:border-primary hover:text-primary transition-all"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Nos solutions solaires à {city.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-2xl border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <h3 className="font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{service.desc}</p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Données solaires locales */}
      {solar && (
        <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sun className="w-6 h-6 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center">
                Potentiel solaire à {city.name}
              </h2>
            </div>
            <p className="text-center text-muted-foreground mb-10">
              Données calculées pour {city.name} ({city.department}) — coordonnées {solar.lat}°N, {solar.lon}°E
            </p>

            {/* Row 1 — 4 cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <Sun className="w-5 h-5 text-amber-500 mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">{solar.ensoleillement.toLocaleString("fr-FR")}</p>
                <p className="text-sm font-medium text-muted-foreground">heures/an</p>
                <p className="text-xs text-muted-foreground mt-1">Ensoleillement à {city.name}</p>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <Zap className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">{solar.irradiance.toLocaleString("fr-FR")}</p>
                <p className="text-sm font-medium text-muted-foreground">kWh/m²/an</p>
                <p className="text-xs text-muted-foreground mt-1">Irradiance GHI</p>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <BarChart3 className="w-5 h-5 text-secondary mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">{solar.production100kwc}</p>
                <p className="text-sm font-medium text-muted-foreground">MWh/an</p>
                <p className="text-xs text-muted-foreground mt-1">Production 100 kWc</p>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary-hover rounded-2xl p-5 text-center shadow-md">
                <span className="text-2xl mb-1 block">💰</span>
                <p className="text-2xl md:text-3xl font-extrabold text-white mb-1">{solar.economie.toLocaleString("fr-FR")} €</p>
                <p className="text-sm font-medium text-white/80">par an</p>
                <p className="text-xs text-white/70 mt-1">Économie estimée</p>
              </div>
            </div>

            {/* Row 2 — 3 cards */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <Leaf className="w-5 h-5 text-green-600 mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">{solar.co2Evite}</p>
                <p className="text-sm font-medium text-muted-foreground">tonnes/an</p>
                <p className="text-xs text-muted-foreground mt-1">CO₂ évité</p>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-sm">
                <Building2 className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                <p className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">{solar.entreprises.toLocaleString("fr-FR")}</p>
                <p className="text-sm font-medium text-muted-foreground">entreprises</p>
                <p className="text-xs text-muted-foreground mt-1">à {city.name}</p>
              </div>
              <div className="bg-white rounded-2xl p-5 text-center shadow-sm col-span-2 md:col-span-1">
                <span className="text-lg block mb-1">🏭</span>
                <p className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">{solar.toitures.toLocaleString("fr-FR")}</p>
                <p className="text-sm font-medium text-muted-foreground">toitures</p>
                <p className="text-xs text-muted-foreground mt-1">Exploitables estimées</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-6">
              Estimations basées sur les coordonnées GPS de {city.name} et les formules PVGIS.
              Production réelle variable selon orientation, inclinaison et ombrage.
            </p>
          </div>
        </section>
      )}

      {/* Advantages */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Pourquoi choisir ENR-J à {city.name} ?
          </h2>
          <div className="space-y-4">
            {[
              `Intervention rapide à ${city.name} et dans le ${city.department}`,
              "0 € d'investissement initial : le tiers-investisseur finance l'installation",
              "Contrat de 30 ans, maintenance incluse",
              "Panneaux garantis 30 ans en performance (>80% de rendement)",
              "Installateurs certifiés RGE QualiPV",
              "Accompagnement administratif complet (Enedis, EDF OA, permis de construire)",
            ].map((adv) => (
              <div key={adv} className="flex items-start gap-3 bg-white rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground">{adv}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTABannerSection />
    </>
  );
}
