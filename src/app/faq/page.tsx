import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HelpCircle, Building2, Sun, Euro, FileText, Wrench } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Accordion from "@/components/ui/Accordion";
import CTABannerSection from "@/components/sections/CTABannerSection";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema, getFAQSchema } from "@/components/seo/schemas";

export const metadata: Metadata = {
  title: "FAQ | Questions fréquentes sur le solaire professionnel",
  description:
    "Retrouvez les réponses à toutes vos questions sur le tiers-investissement solaire, la Loi APER, le Décret Tertiaire, les aides, la maintenance et l'installation de panneaux photovoltaïques pour professionnels.",
  alternates: {
    canonical: "https://enr-j.com/faq",
  },
  openGraph: {
    title: "FAQ solaire professionnel | ENR'J",
    description:
      "Tiers-investissement, Loi APER, Décret Tertiaire, aides, maintenance : toutes les réponses à vos questions sur le solaire pour entreprises.",
  },
};

const faqCategories = [
  {
    title: "Tiers-investissement",
    icon: Euro,
    color: "primary",
    items: [
      {
        question: "Qu'est-ce que le tiers-investissement solaire ?",
        answer:
          "Le tiers-investissement est un modèle où un investisseur externe finance, installe et exploite une centrale photovoltaïque sur votre bâtiment. Vous n'avez rien à payer : ni l'installation, ni la maintenance. En échange, vous bénéficiez d'un loyer pour votre toiture ou d'une électricité à prix réduit. Le contrat dure généralement 30 ans. À son terme, vous pouvez récupérer l'installation ou la faire démonter à nos frais.",
      },
      {
        question: "Que se passe-t-il en fin de contrat ?",
        answer:
          "À l'issue du contrat de tiers-investissement (30 ans), deux options s'offrent à vous : soit vous récupérez l'installation gratuitement et devenez propriétaire de la centrale solaire, soit nous procédons au démontage à nos frais et remettons votre toiture en état. Si vous conservez l'installation, les panneaux ont encore une durée de vie de 10 à 15 ans avec un rendement supérieur à 80% de la puissance initiale.",
      },
      {
        question: "Comment est calculé le loyer de toiture ?",
        answer:
          "Le loyer de toiture dépend de la surface disponible, de l'ensoleillement de votre zone géographique, de l'orientation et de l'inclinaison de la toiture. En moyenne, il se situe entre 2 et 4 €/m²/an. Le montant est fixé dès la signature et revalorisé annuellement selon un indice défini au contrat.",
      },
      {
        question: "Quels revenus puis-je espérer de mon hangar solaire ?",
        answer:
          "Les revenus dépendent de votre surface de toiture et du modèle choisi. En location de toiture (tiers-investissement), vous percevez un loyer annuel de l'ordre de 2 à 4 €/m²/an. En autoconsommation, vous réduisez votre facture de 30 à 50%. En revente totale EDF OA, les tarifs sont garantis pendant 20 ans.",
      },
    ],
  },
  {
    title: "Éligibilité et installation",
    icon: Building2,
    color: "secondary",
    items: [
      {
        question: "Mon exploitation agricole est-elle éligible ?",
        answer:
          "Votre exploitation est éligible si vous disposez d'une toiture (existante ou à construire) d'au moins 500 m² avec une orientation favorable (sud, sud-est ou sud-ouest). La charpente doit pouvoir supporter le poids des panneaux (~15 kg/m²). Nous réalisons un diagnostic gratuit pour vérifier l'éligibilité.",
      },
      {
        question: "Mon bâtiment est-il compatible (amiante, orientation, structure) ?",
        answer:
          "Un diagnostic gratuit permet de vérifier la compatibilité de votre bâtiment. Les critères principaux sont : l'absence d'amiante dans la toiture, une orientation entre sud-est et sud-ouest, une inclinaison de 15 à 35 degrés (les toitures plates sont compatibles avec des systèmes inclinés), et une structure portante capable de supporter 15 à 20 kg/m2 supplémentaires.",
      },
      {
        question: "Mon activité sera-t-elle perturbée pendant l'installation ?",
        answer:
          "Non. Nos équipes sont habituées à intervenir sur des sites en activité. La pose se fait par l'extérieur, depuis la toiture. Pour un hangar agricole ou une toiture industrielle, l'installation prend 2 à 6 semaines selon la surface. Les ombrières de parking sont montées par phases pour maintenir l'accès au stationnement.",
      },
      {
        question: "Quelle est la durée du processus, de l'étude au raccordement ?",
        answer:
          "Le processus complet prend en moyenne 6 à 12 mois. L'étude de faisabilité dure 2 à 4 semaines, les démarches administratives (Enedis, mairie, EDF OA) 3 à 6 mois, et l'installation 2 à 6 semaines. Nous gérons l'intégralité des démarches administratives pour vous.",
      },
    ],
  },
  {
    title: "Réglementation",
    icon: FileText,
    color: "primary",
    items: [
      {
        question: "Quelles sont les obligations de la Loi APER pour les parkings ?",
        answer:
          "La loi APER impose aux parkings extérieurs existants de s'équiper en ombrières photovoltaïques ou en végétalisation. Les parkings de 10 000 m2 et plus doivent être conformes avant le 1er juillet 2026. Ceux de 1 500 à 10 000 m2 ont jusqu'au 1er juillet 2028. La couverture minimum exigée est de 50%. En cas de non-conformité, l'amende peut atteindre 40 000 euros par an.",
      },
      {
        question: "Comment le Décret Tertiaire impacte-t-il mon entreprise ?",
        answer:
          "Le Décret Tertiaire concerne tous les bâtiments à usage tertiaire de plus de 1 000 m2. Il impose une réduction progressive de la consommation énergétique : -40% d'ici 2030, -50% d'ici 2040, et -60% d'ici 2050. L'installation de panneaux solaires en autoconsommation est l'un des leviers les plus efficaces pour atteindre ces objectifs.",
      },
      {
        question: "Comment déclarer les revenus issus de mon installation solaire ?",
        answer:
          "Pour les exploitants agricoles, les revenus de la revente d'électricité sont généralement déclarés en bénéfices agricoles (BA) si la puissance est inférieure à 100 kWc. Au-delà, ils relèvent des BIC. Le loyer de toiture est déclaré en revenus fonciers. Nous vous recommandons de consulter votre comptable pour adapter la déclaration à votre situation fiscale.",
      },
    ],
  },
  {
    title: "Aides et financement",
    icon: Sun,
    color: "secondary",
    items: [
      {
        question: "Quelles aides existent pour le solaire professionnel ?",
        answer:
          "Plusieurs dispositifs d'aide existent en 2026. La prime à l'autoconsommation est versée sur 5 ans : 80 euros/kWc pour les installations de 9 kWc ou moins, 140 euros/kWc pour 9-36 kWc, et 70 euros/kWc pour 36-100 kWc. Le tarif de rachat EDF OA est garanti pendant 20 ans. Certaines régions proposent des aides complémentaires.",
      },
      {
        question: "Le tiers-investissement est-il vraiment à 0 euro ?",
        answer:
          "Oui. Dans le modèle de tiers-investissement, l'investisseur prend en charge 100% du financement : études, matériel, installation, raccordement et maintenance pendant 30 ans. Vous ne déboursez rien. L'investisseur se rémunère sur la vente d'électricité produite par l'installation.",
      },
      {
        question: "Quelle est la différence entre autoconsommation et revente totale ?",
        answer:
          "En autoconsommation, vous consommez directement l'électricité produite par vos panneaux, ce qui réduit votre facture de 30 à 50%. Le surplus est revendu à EDF. En revente totale, toute la production est vendue à EDF OA à un tarif garanti pendant 20 ans. Le choix dépend de votre profil de consommation et de vos objectifs.",
      },
    ],
  },
  {
    title: "Maintenance et garanties",
    icon: Wrench,
    color: "primary",
    items: [
      {
        question: "Qui prend en charge la maintenance ?",
        answer:
          "Dans le cadre du tiers-investissement, toute la maintenance est incluse pendant la durée du contrat (30 ans). Cela comprend le monitoring en temps réel, le nettoyage des panneaux, le remplacement des onduleurs si nécessaire, et les interventions correctives. Notre équipe technique intervient sous 48h ouvrées en cas d'anomalie.",
      },
      {
        question: "Quelles sont les garanties sur les panneaux solaires ?",
        answer:
          "Les panneaux bénéficient d'une garantie produit de 12 à 15 ans et d'une garantie de performance de 30 ans (rendement supérieur à 80% à 30 ans). Les onduleurs sont garantis 10 à 20 ans. La structure de montage est garantie 20 ans contre la corrosion. L'ensemble est couvert par notre assurance décennale.",
      },
      {
        question: "Comment suivre la production de mon installation ?",
        answer:
          "Chaque installation est équipée d'un système de monitoring en temps réel accessible depuis une application web ou mobile. Vous pouvez consulter la production instantanée, les historiques journaliers, mensuels et annuels, ainsi que les économies réalisées. Notre équipe surveille également les performances et vous alerte en cas d'anomalie.",
      },
    ],
  },
];

const allFaqItems = faqCategories.flatMap((cat) => cat.items);

export default function FAQPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "FAQ", url: "/faq" }])} />
      <JsonLd data={getFAQSchema(allFaqItems)} />
      <Breadcrumbs items={[{ label: "FAQ" }]} />

      {/* Hero */}
      <SectionWrapper background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            {allFaqItems.length} questions
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Questions fréquentes sur le{" "}
            <span className="text-primary">solaire professionnel</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tiers-investissement, Loi APER, Décret Tertiaire, aides, maintenance :
            retrouvez les réponses à toutes vos questions.
          </p>
        </div>
      </SectionWrapper>

      {/* FAQ Categories */}
      {faqCategories.map((category, catIndex) => (
        <SectionWrapper
          key={category.title}
          background={catIndex % 2 === 0 ? "white" : "muted"}
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                category.color === "primary" ? "bg-primary/10" : "bg-secondary/10"
              }`}>
                <category.icon className={`w-5 h-5 ${
                  category.color === "primary" ? "text-primary" : "text-secondary"
                }`} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {category.title}
              </h2>
            </div>
            <Accordion items={category.items} />
          </div>
        </SectionWrapper>
      ))}

      {/* CTA */}
      <SectionWrapper background="white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Vous n&apos;avez pas trouvé votre réponse ?
          </h2>
          <p className="text-muted-foreground mb-8">
            Notre équipe est disponible pour répondre à toutes vos questions
            et réaliser une étude gratuite de votre projet.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-primary-hover hover:gap-3 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Tester mon éligibilité
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary text-lg font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <CTABannerSection />
    </>
  );
}
