import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ContactForm from "@/components/forms/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/components/seo/schemas";

export const metadata: Metadata = {
  title: "Contact | Étude gratuite panneau solaire professionnel",
  description:
    "Contactez ENR-J Solaire pour votre projet photovoltaïque. Étude de faisabilité gratuite, réponse sous 48h. Tiers-investissement sans apport.",
  alternates: {
    canonical: "https://enr-j.com/contact",
  },
  openGraph: {
    title: "Contactez ENR-J Solaire",
    description:
      "Étude gratuite et sans engagement pour votre projet solaire professionnel. Réponse sous 48h.",
  },
};

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: COMPANY.phone, href: COMPANY.phoneHref },
  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: "Adresse", value: COMPANY.address },
  { icon: Clock, label: "Horaires", value: "Lun - Ven : 8h00 - 18h00" },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Contact", url: "/contact" }])} />
      <Breadcrumbs items={[{ label: "Contact" }]} />

      <section className="py-8 md:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Contactez-nous
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Une question ? Un projet ? Notre équipe vous répond sous 24h.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="font-medium text-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl border border-border/50 p-6 md:p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
