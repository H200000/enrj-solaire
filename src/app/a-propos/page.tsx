import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Award,
  Target,
  Heart,
  ShieldCheck,
  Wrench,
  MapPin,
  Calendar,
  Building2,
  ArrowRight,
  CheckCircle,
  Zap,
  TrendingUp,
  Trophy,
  Handshake,
} from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionWrapper from "@/components/ui/SectionWrapper";
import StatsSection from "@/components/sections/StatsSection";
import CTABannerSection from "@/components/sections/CTABannerSection";
import { COMPANY, DISTINCTIONS } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/components/seo/schemas";

export const metadata: Metadata = {
  title: "À propos | Tiers-investissement solaire pour professionnels",
  description:
    "ENR'J : panneaux photovoltaïques pour professionnels en tiers-investissement. Certifié RGE QualiPV, maintenance incluse 30 ans.",
  alternates: {
    canonical: "https://enr-j.com/a-propos",
  },
  openGraph: {
    title: "À propos d'ENR'J",
    description:
      "Tiers-investissement solaire pour agriculteurs, industriels et gestionnaires fonciers. Certifié RGE QualiPV.",
  },
};

const values = [
  {
    icon: Target,
    title: "Expertise technique",
    description:
      "Équipes certifiées RGE QualiPV 500. Sélection rigoureuse des panneaux, onduleurs et structures de montage pour garantir performance et durabilité sur 30 ans minimum.",
  },
  {
    icon: Heart,
    title: "Accompagnement complet",
    description:
      "De l'étude de faisabilité au raccordement Enedis, en passant par le permis de construire et le dossier EDF OA. Nous gérons chaque étape, chaque démarche.",
  },
  {
    icon: Users,
    title: "Interlocuteur dédié",
    description:
      "Un chef de projet unique vous accompagne tout au long de votre projet. Un seul numéro à appeler, une seule personne qui connaît votre dossier.",
  },
  {
    icon: Award,
    title: "Maintenance garantie",
    description:
      "Monitoring en temps réel, nettoyage, remplacement onduleurs. Maintenance incluse pendant toute la durée du contrat (30 ans).",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Création d'ENR'J",
    description:
      "Fondation de la société à Toulouse par Louis Hunsinger. Spécialisation initiale en rénovation énergétique et pose de systèmes d'énergie renouvelable.",
  },
  {
    year: "2022",
    title: "Croissance et transfert",
    description:
      "Forte croissance avec un chiffre d'affaires de 1,6M€. Transfert du siège social à Paris (18 Avenue Mac-Mahon, 75017). Augmentation du capital à 20 000 €.",
  },
  {
    year: "2023",
    title: "Certification RGE QualiPV",
    description:
      "Obtention de la certification RGE QualiPV 500, condition indispensable pour accéder aux aides publiques et au tarif de rachat EDF OA.",
  },
  {
    year: "2024-2026",
    title: "Spécialisation tiers-investissement",
    description:
      "Développement de l'offre de tiers-investissement solaire pour professionnels. Hangars agricoles, toitures industrielles et ombrières de parking.",
  },
];

const certifications = [
  {
    icon: ShieldCheck,
    name: "RGE QualiPV 500",
    description:
      "Reconnu Garant de l'Environnement. Qualification obligatoire pour installer des systèmes photovoltaïques éligibles aux aides de l'État et au tarif de rachat EDF OA.",
  },
  {
    icon: Building2,
    name: "Inscrit au RCS de Paris",
    description:
      "Société par actions simplifiée unipersonnelle (SASU) immatriculée au Registre du Commerce et des Sociétés de Paris depuis le 29 octobre 2019.",
  },
  {
    icon: Wrench,
    name: "Assurance décennale",
    description:
      "Couverture par une assurance responsabilité civile décennale, garantissant la solidité et la conformité de nos installations pendant 10 ans après réception.",
  },
];

const keyFigures = [
  { value: "2019", label: "Année de création" },
  { value: "20+", label: "Collaborateurs" },
  { value: "5M€", label: "CA réalisé (2025)" },
];

export default function AProposPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "À propos", url: "/a-propos" }])} />
      <Breadcrumbs items={[{ label: "À propos" }]} />

      {/* Hero */}
      <SectionWrapper background="gradient">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Qui sommes-nous ?
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
              Votre partenaire solaire en{" "}
              <span className="text-primary">tiers-investissement</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {COMPANY.name} accompagne les agriculteurs, industriels et gestionnaires
              fonciers dans l&apos;installation de centrales photovoltaïques{" "}
              <strong className="text-foreground">sans investissement initial</strong>.
              Notre modèle de tiers-investissement permet à chaque professionnel
              d&apos;accéder au solaire en toute sérénité.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/simulateur"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-all shadow-lg shadow-primary/25"
              >
                Vérifier mon éligibilité
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all"
              >
                Nous contacter
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/toiture-industrielle.jpg"
                alt="Installation photovoltaïque ENR'J"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-xl border border-border/50 p-4 md:p-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Certifié RGE</p>
                  <p className="text-xs text-muted-foreground">QualiPV 500</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Key figures */}
      <section className="py-12 bg-white border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {keyFigures.map((fig) => (
              <div key={fig.label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                  {fig.value}
                </p>
                <p className="text-sm text-muted-foreground">{fig.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              Notre histoire
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              De la rénovation énergétique au solaire professionnel
            </h2>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed text-lg mb-12">
            <p>
              {COMPANY.name} est née en <strong className="text-foreground">2019</strong> d&apos;une
              conviction forte : les professionnels veulent valoriser leur patrimoine
              bâti avec le solaire, mais le coût d&apos;investissement, souvent supérieur
              à 100 000 €, reste un frein majeur. Le tiers-investissement résout
              cette équation : un investisseur externe finance l&apos;installation, et
              vous bénéficiez d&apos;un loyer de toiture ou d&apos;une électricité à
              prix réduit.
            </p>
            <p>
              Fondée par <strong className="text-foreground">Louis Hunsinger</strong>,
              la société s&apos;est d&apos;abord spécialisée dans les travaux de rénovation
              énergétique et la pose de systèmes d&apos;énergie renouvelable. Après une
              croissance rapide (<strong className="text-foreground">1,6 million d&apos;euros
              de chiffre d&apos;affaires</strong> en 2021 et un résultat net de 456 000 €),
              la société a élargi son offre vers le photovoltaïque professionnel à grande
              échelle, en tiers-investissement.
            </p>
            <p>
              Aujourd&apos;hui basée au <strong className="text-foreground">18 Avenue
              Mac-Mahon à Paris (75017)</strong>, {COMPANY.name} intervient sur
              l&apos;ensemble du territoire français. Notre équipe d&apos;ingénieurs
              dimensionne chaque projet (orientation, surface, structure portante,
              raccordement), et nos installateurs certifiés RGE QualiPV assurent une
              pose conforme aux normes en vigueur.
            </p>
            <p>
              Le marché solaire français connaît une croissance exceptionnelle, porté
              par la hausse du prix de l&apos;électricité, les obligations réglementaires
              (Loi APER, Décret Tertiaire) et la volonté des entreprises d&apos;améliorer
              leur bilan carbone. Notre rôle est de rendre cette transition{" "}
              <strong className="text-foreground">simple et sans risque</strong> pour vous.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-secondary/30 to-primary/30 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone) => (
                <div key={milestone.year} className="flex gap-6 items-start">
                  <div className="relative shrink-0 hidden md:block">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
                      <Calendar className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 bg-muted/50 rounded-2xl p-6 hover:bg-muted transition-colors">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <StatsSection />

      {/* Certifications */}
      <SectionWrapper background="white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Certifications & garanties
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Des garanties concrètes pour votre projet
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nos certifications attestent de notre compétence et vous donnent accès
              aux aides publiques et au tarif de rachat EDF OA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="relative p-7 rounded-2xl bg-gradient-to-br from-muted/50 to-white border border-border/50 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-5">
                  <cert.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Distinctions & Partenariats */}
      <SectionWrapper background="muted">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Distinctions & partenariats
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Reconnu pour notre innovation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Notre engagement dans la transition énergétique est reconnu par des prix
              et des partenariats avec des institutions de premier plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative p-7 rounded-2xl bg-white border border-border/50 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-yellow-50 flex items-center justify-center mb-5">
                <Trophy className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {DISTINCTIONS[0].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {DISTINCTIONS[0].description}
              </p>
            </div>

            <div className="relative p-7 rounded-2xl bg-white border border-border/50 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-50 flex items-center justify-center mb-5">
                <Handshake className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {DISTINCTIONS[1].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {DISTINCTIONS[1].description}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Nos engagements */}
      <SectionWrapper background="white">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
            Nos engagements
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
            Ce qui guide notre action au quotidien
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chaque projet est unique. Nous mettons notre expertise au service
            de votre transition énergétique avec rigueur et transparence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-white shadow-lg shadow-primary/5 flex items-center justify-center mb-4 border border-border/50">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Nos solutions — résumé */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Notre expertise
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">
              Trois marchés, une seule mission
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous intervenons sur les trois segments du solaire professionnel
              en tiers-investissement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Hangars agricoles",
                text: "Valorisez votre toiture dès 500 m². Loyer de toiture ou autoconsommation, conforme au cadre agrivoltaïsme.",
                href: "/hangars-agricoles",
              },
              {
                icon: Building2,
                title: "Toitures industrielles",
                text: "Réduisez vos charges de 30 à 50%. Conformité Décret Tertiaire (-40% en 2030). Autoconsommation ou revente.",
                href: "/toitures-industrielles",
              },
              {
                icon: TrendingUp,
                title: "Ombrières de parking",
                text: "Obligation Loi APER dès 1 500 m². Échéance 2026/2028. Amende évitée : jusqu'à 40 000 €/an.",
                href: "/ombrieres-parking",
              },
            ].map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group p-6 rounded-2xl bg-muted/50 border border-border/50 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {solution.text}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all">
                  En savoir plus
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Zone d'intervention */}
      <SectionWrapper background="muted">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Zone d&apos;intervention
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Nous intervenons partout en France
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Depuis notre siège parisien, nous déployons nos équipes sur l&apos;ensemble
                du territoire français. Nos installateurs certifiés RGE QualiPV
                interviennent dans toutes les régions pour des projets à partir de 500 m²
                de toiture.
              </p>
              <ul className="space-y-3">
                {[
                  "Île-de-France et Grand Paris",
                  "Auvergne-Rhône-Alpes",
                  "Occitanie et Nouvelle-Aquitaine",
                  "Bretagne, Normandie, Grand Est",
                  "PACA, Hauts-de-France, et toutes régions",
                ].map((region) => (
                  <li
                    key={region}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{region}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-border/50 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Siège social</h3>
                  <p className="text-sm text-muted-foreground">{COMPANY.address}</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Forme juridique</span>
                  <span className="font-medium text-foreground">SASU</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">SIREN</span>
                  <span className="font-medium text-foreground">{COMPANY.siren}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Effectif</span>
                  <span className="font-medium text-foreground">20+ collaborateurs</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-muted-foreground">Certification</span>
                  <span className="font-medium text-primary">RGE QualiPV 500</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTABannerSection />
    </>
  );
}
