import type { Metadata } from "next";
import SimulatorForm from "@/components/forms/SimulatorForm";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/components/seo/schemas";
import { Shield, Clock, BadgeEuro, Sun, Building2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Simulateur d'\u00c9ligibilit\u00e9 Solaire | \u00c9tude Gratuite",
  description:
    "Testez votre \u00e9ligibilit\u00e9 en 2 minutes. Votre b\u00e2timent peut-il accueillir des panneaux solaires sans investissement ? \u00c9tude gratuite et sans engagement.",
  alternates: {
    canonical: "https://enr-j.com/simulateur",
  },
  openGraph: {
    title: "Simulateur d'\u00e9ligibilit\u00e9 solaire | ENR-J Solaire",
    description:
      "V\u00e9rifiez gratuitement si votre b\u00e2timent est \u00e9ligible au tiers-investissement solaire.",
    type: "website",
    url: "https://enr-j.com/simulateur",
  },
};

const guarantees = [
  { icon: BadgeEuro, text: "\u00c9tude 100% gratuite" },
  { icon: Clock, text: "R\u00e9ponse sous 24h" },
  { icon: Shield, text: "Sans engagement" },
];

const steps = [
  { icon: Building2, title: "D\u00e9crivez votre b\u00e2timent", desc: "Type de toiture, surface disponible et localisation" },
  { icon: Sun, title: "Analyse de potentiel", desc: "Nous estimons la production solaire de votre site" },
  { icon: Zap, title: "Recevez votre \u00e9tude", desc: "Un expert vous contacte sous 24h avec votre \u00e9tude personnalis\u00e9e" },
];

export default function SimulateurPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Simulateur d'\u00e9ligibilit\u00e9", url: "/simulateur" },
        ])}
      />
      <Breadcrumbs items={[{ label: "Simulateur d'\u00e9ligibilit\u00e9" }]} />

      <section className="py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                \u00c9tude gratuite
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Simulez votre projet solaire
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                En 2 minutes, d\u00e9couvrez si votre b\u00e2timent est \u00e9ligible \u00e0 une
                installation solaire sans investissement.
              </p>

              <div className="space-y-4">
                {guarantees.map((g) => (
                  <div key={g.text} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <g.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{g.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl border border-border/50 p-6 md:p-8">
                <SimulatorForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Comment fonctionne notre simulateur solaire ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-xs font-bold text-primary mb-2">\u00c9tape {i + 1}</div>
                <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-4">Qui peut b\u00e9n\u00e9ficier du tiers-investissement solaire ?</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Le tiers-investissement solaire s&apos;adresse aux professionnels disposant d&apos;une toiture d&apos;au moins
            500 m\u00b2 : agriculteurs, industriels, logisticiens, gestionnaires de parkings et propri\u00e9taires fonciers.
            L&apos;installation est enti\u00e8rement financ\u00e9e par ENR-J, sans aucun investissement de votre part.
            Vous percevez un loyer pour votre toiture ou b\u00e9n\u00e9ficiez d&apos;une \u00e9lectricit\u00e9 \u00e0 prix r\u00e9duit pendant 30 ans.
          </p>
          <h2 className="text-2xl font-bold text-foreground mb-4">Conformit\u00e9 Loi APER et D\u00e9cret Tertiaire</h2>
          <p className="text-muted-foreground leading-relaxed">
            Notre simulateur \u00e9value \u00e9galement votre situation vis-\u00e0-vis des obligations r\u00e9glementaires :
            la Loi APER impose des ombri\u00e8res solaires sur les parkings de plus de 1 500 m\u00b2,
            et le D\u00e9cret Tertiaire exige une r\u00e9duction de 40% de la consommation \u00e9nerg\u00e9tique d&apos;ici 2030
            pour les b\u00e2timents de plus de 1 000 m\u00b2.
          </p>
        </div>
      </section>
    </>
  );
}
