import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Phone,
  Sparkles,
  UserCheck,
  Zap,
  Clock,
  Heart,
} from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTABannerSection from "@/components/sections/CTABannerSection";
import { equipe } from "@/data/equipe";
import { COMPANY } from "@/lib/constants";
import JsonLd from "@/components/seo/JsonLd";
import { getBreadcrumbSchema } from "@/components/seo/schemas";

export const metadata: Metadata = {
  title: "Notre Équipe | Les visages derrière vos projets solaires",
  description:
    "Découvrez l'équipe ENR'J : des chargés de projet énergétique et experts dédiés qui vous accompagnent de l'étude de faisabilité au raccordement de votre installation solaire.",
  alternates: {
    canonical: "https://enr-j.com/equipe",
  },
  openGraph: {
    title: "L'équipe ENR'J Solaire",
    description:
      "Des professionnels passionnés par la transition énergétique. Chaque projet est suivi par un interlocuteur dédié.",
  },
};

export default function EquipePage() {
  const ceo = equipe.find((m) => m.role === "CEO & Fondateur")!;
  const chargesDeProjet = equipe.filter((m) =>
    m.role.includes("hargé")
  );
  const experts = equipe.filter((m) => m.role.includes("xpert"));
  const mascotte = equipe.find((m) => m.role === "Happiness Officer");

  const advantages = [
    {
      icon: UserCheck,
      title: "Un seul contact",
      description:
        "Un chef de projet dédié qui connaît votre dossier du début à la fin.",
    },
    {
      icon: Zap,
      title: "Expertise technique",
      description:
        "Dimensionnement solaire, démarches Enedis, dossiers EDF OA et réglementation.",
    },
    {
      icon: Clock,
      title: "Réactivité",
      description:
        "Réponse sous 48h, suivi en temps réel et rapport mensuel de production.",
    },
  ];

  return (
    <>
      <JsonLd data={getBreadcrumbSchema([{ name: "Notre équipe", url: "/equipe" }])} />
      <Breadcrumbs items={[{ label: "Notre équipe" }]} />

      {/* Hero */}
      <SectionWrapper background="gradient">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <Users className="w-4 h-4" />
            {equipe.length} collaborateurs dédiés
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight animate-fade-in-up animation-delay-100">
            Les visages derrière{" "}
            <span className="text-primary">vos projets solaires</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            Chez {COMPANY.name}, chaque projet est suivi par un interlocuteur
            dédié. Notre équipe vous accompagne de A à Z.
          </p>
        </div>
      </SectionWrapper>

      {/* CEO Feature */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto">
          <div className="relative flex flex-col md:flex-row items-center gap-10 bg-gradient-to-br from-primary/5 via-white to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/10 shadow-xl shadow-primary/5 animate-fade-in-up">
            <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
              Fondateur
            </div>
            <div className="relative w-44 h-44 md:w-56 md:h-56 rounded-2xl overflow-hidden shrink-0 shadow-2xl ring-4 ring-primary/10 bg-muted">
              <Image
                src={ceo.image}
                alt={ceo.name}
                fill
                className="object-cover"
                sizes="224px"
                priority
              />
            </div>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-1">
                {ceo.name}
              </h2>
              <p className="text-primary font-semibold mb-4">{ceo.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {ceo.anecdote}
              </p>
              <a
                href={COMPANY.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary font-semibold rounded-full hover:bg-primary/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Chargés de projet */}
      <SectionWrapper background="muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              Vos interlocuteurs terrain
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Chargés de projet énergétique
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Ils vous accompagnent du premier rendez-vous au raccordement de
              votre installation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {chargesDeProjet.map((member, i) => (
              <div
                key={member.name}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="bg-white rounded-2xl p-4 shadow-md border border-border/30 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-primary/20 transition-all duration-300">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <h3 className="font-bold text-foreground text-sm md:text-base">
                    {member.name}
                  </h3>
                  <p className="text-xs text-primary font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                    {member.anecdote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Experts */}
      <SectionWrapper background="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Pôle expertise
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Experts énergétiques
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Dimensionnement, réglementation, financement : ils maîtrisent
              chaque aspect technique de votre projet.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 md:gap-6 max-w-4xl mx-auto">
            {experts.map((member, i) => (
              <div
                key={member.name}
                className="group animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="bg-gradient-to-b from-white to-muted/30 rounded-2xl p-4 shadow-md border border-border/30 group-hover:shadow-xl group-hover:-translate-y-2 group-hover:border-secondary/20 transition-all duration-300">
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="font-bold text-foreground text-sm md:text-base">
                    {member.name}
                  </h3>
                  <p className="text-xs text-secondary font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                    {member.anecdote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Mascotte Tina */}
      {mascotte && (
        <SectionWrapper background="muted">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-border/30 text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-50 text-pink-500 rounded-full text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                Membre très important
              </div>
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-pink-100 shadow-xl bg-muted">
                <Image
                  src={mascotte.image}
                  alt={mascotte.name}
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-1">
                {mascotte.name}
              </h3>
              <p className="text-pink-500 font-semibold mb-4">
                {mascotte.role}
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                {mascotte.anecdote}
              </p>
            </div>
          </div>
        </SectionWrapper>
      )}

      {/* Advantages */}
      <SectionWrapper background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">
            Un interlocuteur unique pour votre projet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advantages.map((item, i) => (
              <div
                key={item.title}
                className="group bg-muted/50 rounded-2xl p-6 border border-border/30 hover:border-primary/20 hover:shadow-lg transition-all duration-300 text-left animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/simulateur"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-primary-hover hover:gap-3 transition-all duration-300 shadow-lg shadow-primary/25"
            >
              Parler à l&apos;équipe
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <CTABannerSection />
    </>
  );
}
