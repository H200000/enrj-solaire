import Link from "next/link";
import Image from "next/image";
import { articles } from "@/data/blog/articles";

interface RelatedArticlesProps {
  currentSlug: string;
  category: string;
}

export default function RelatedArticles({ currentSlug, category }: RelatedArticlesProps) {
  const related = articles
    .filter((a) => a.slug !== currentSlug)
    .filter((a) => a.category === category)
    .slice(0, 3);

  if (related.length < 3) {
    const others = articles
      .filter((a) => a.slug !== currentSlug && !related.find((r) => r.slug === a.slug))
      .slice(0, 3 - related.length);
    related.push(...others);
  }

  if (related.length === 0) return null;

  return (
    <section className="mt-16 pt-8 border-t border-border">
      <h2 className="text-2xl font-bold text-foreground mb-6">Articles similaires</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group block rounded-xl border border-border hover:border-primary/30 overflow-hidden transition-all"
          >
            <div className="relative h-40 overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                sizes="(max-width: 768px) 100vw, 33vw"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <span className="text-xs font-medium text-primary">{article.category}</span>
              <h3 className="text-sm font-semibold text-foreground mt-1 line-clamp-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
