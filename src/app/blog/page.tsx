import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import Card from "@/components/ui/Card";
import { articles } from "@/data/blog/articles";

export const metadata: Metadata = {
  title: "Blog | Guides solaire professionnel et réglementation",
  description:
    "Guides solaire professionnel : Loi APER, Décret Tertiaire, tiers-investissement, tarifs EDF OA 2026. Conseils pour agriculteurs et industriels.",
  alternates: {
    canonical: "https://enr-j.com/blog",
  },
  openGraph: {
    title: "Blog ENR-J Solaire",
    description:
      "Guides pratiques et actualités sur le solaire professionnel, la réglementation et les aides.",
  },
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <section className="py-8 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Blog ENR-J Solaire
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guides pratiques, actualités et conseils pour votre transition
              solaire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Card key={article.slug} className="flex flex-col">
                <div className="relative w-full h-44 rounded-xl mb-4 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                <h2 className="font-bold text-foreground mb-2 line-clamp-2">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:gap-2 transition-all"
                  >
                    Lire
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
