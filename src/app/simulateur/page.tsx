import type { Metadata } from "next";
import SimulatorForm from "@/components/forms/SimulatorForm";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Shield, Clock, BadgeEuro } from "lucide-react";

export const metadata: Metadata = {
  title: "Simulateur d'Éligibilité Solaire | Étude Gratuite",
  description:
    "Testez votre éligibilité en 2 minutes. Votre bâtiment peut-il accueillir des panneaux solaires sans investissement ? Étude gratuite.",
  alternates: {
    canonical: "https://enr-j.com/simulateur",
  },
  openGraph: {
    title: "Simulateur d'éligibilité solaire | ENR-J Solaire",
    description:
      "Vérifiez gratuitement si votre bâtiment est éligible au tiers-investissement solaire.",
  },
};

const guarantees = [
  { icon: BadgeEuro, text: "Étude 100% gratuite" },
  { icon: Clock, text: "Réponse sous 24h" },
  { icon: Shield, text: "Sans engagement" },
];

export default function SimulateurPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Simulateur d'éligibilité" }]} />

      <section className="py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Info */}
            <div className="lg:col-span-2">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Étude gratuite
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Simulez votre projet solaire
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                En 2 minutes, découvrez si votre bâtiment est éligible à une
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

            {/* Right: Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl border border-border/50 p-6 md:p-8">
                <SimulatorForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
