import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Clock, ArrowLeft, User } from "lucide-react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTABannerSection from "@/components/sections/CTABannerSection";
import JsonLd from "@/components/seo/JsonLd";
import { getArticleSchema } from "@/components/seo/schemas";
import { articles } from "@/data/blog/articles";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt.slice(0, 155),
    alternates: {
      canonical: `https://enr-j.com/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      images: article.image ? [{ url: article.image }] : undefined,
    },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <JsonLd
        data={getArticleSchema({
          title: article.title,
          description: article.excerpt,
          url: `https://enr-j.com/blog/${slug}`,
          datePublished: article.date,
          author: article.author,
        })}
      />
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: article.title },
        ]}
      />

      <article className="py-8 md:py-16 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au blog
          </Link>

          {/* Hero Image */}
          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          {/* Header */}
          <header className="mb-8">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {article.author}
              </span>
              <span>
                {new Date(article.date).toLocaleDateString("fr-FR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground">
            {article.content.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-foreground mt-8 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={i} className="text-xl font-bold text-foreground mt-6 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter((l) => l.startsWith("- "));
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 text-muted-foreground my-4">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.match(/^\d+\./)) {
                const items = paragraph.split("\n").filter((l) => l.match(/^\d+\./));
                return (
                  <ol key={i} className="list-decimal pl-6 space-y-2 text-muted-foreground my-4">
                    {items.map((item, j) => (
                      <li key={j}>{item.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "$1")}</li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={i} className="text-muted-foreground leading-relaxed my-4">
                  {paragraph.replace(/\*\*(.*?)\*\*/g, "$1")}
                </p>
              );
            })}
          </div>
        </div>
      </article>

      <CTABannerSection />
    </>
  );
}
