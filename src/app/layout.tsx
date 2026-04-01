import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import JsonLd from "@/components/seo/JsonLd";
import { getOrganizationSchema } from "@/components/seo/schemas";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://enr-j.com"),
  title: {
    default: "ENR-J Solaire | Panneaux Solaires Professionnels : 0€ d'Investissement",
    template: "%s | ENR-J Solaire",
  },
  description:
    "Centrale solaire professionnelle en tiers-investissement. Panneau solaire entreprise financé à 100%, maintenance incluse 30 ans. Loi APER, Décret Tertiaire. Devis gratuit.",
  keywords:
    "centrale solaire professionnelle, panneau solaire professionnel, panneau solaire entreprise, installation panneau solaire, photovoltaïque entreprise, hangar agricole solaire, ombrière parking solaire, tiers investissement solaire, financement panneau solaire, panneau solaire 0 euro, Loi APER, Décret Tertiaire, devis panneau solaire, loyer toiture solaire, rentabilité panneau solaire",
  openGraph: {
    title: "ENR-J Solaire | Votre toiture produit de l'énergie. Sans investir un euro.",
    description:
      "Nous finançons et installons vos panneaux solaires. Loyer de toiture ou autoconsommation. Maintenance incluse 30 ans.",
    type: "website",
    locale: "fr_FR",
    siteName: "ENR-J Solaire",
    url: "https://enr-j.com",
    images: [
      {
        url: "/images/logo-enrj.png",
        width: 800,
        height: 400,
        alt: "ENR'J Solaire - Panneaux solaires professionnels",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENR-J Solaire | Panneaux Solaires Professionnels",
    description:
      "Tiers-investissement solaire pour professionnels. 0€ d'investissement, maintenance incluse.",
    images: ["/images/logo-enrj.png"],
  },
  other: {
    "theme-color": "#93C191",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  alternates: {
    canonical: "https://enr-j.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${outfit.variable} ${inter.variable} antialiased`}>
        <GoogleAnalytics />
        <JsonLd data={getOrganizationSchema()} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
