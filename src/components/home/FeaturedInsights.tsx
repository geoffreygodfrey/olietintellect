import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/CardArrow";
import { formatDate } from "@/lib/utils";
import type { Insight } from "@/lib/types";

export function FeaturedInsights({ insights }: { insights: Insight[] }) {
  const featured = insights.filter((i) => i.featured).slice(0, 3);
  const articles = featured.length >= 3 ? featured : insights.slice(0, 3);

  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Insights"
            title="Ideas worth sharing."
            lead="Perspectives from the people behind our work — on business, faith, education and society."
          />
          <ArrowLink href="/insights" className="shrink-0">
            Read all insights
          </ArrowLink>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article._id}
              href={`/insights/${article.slug}`}
              className="group flex flex-col border border-line bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/70 hover:shadow-[0_24px_50px_-24px_rgb(11_19_32/0.3)]"
            >
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                <span>{categoryLabel(article.category)}</span>
                <span className="text-slate">{article.readTime}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand">
                {article.title}
              </h3>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate">{article.excerpt}</p>
              <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
                <span className="text-xs text-slate">{formatDate(article.publishedAt)}</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-brand">
                  Read
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

function categoryLabel(category: Insight["category"]) {
  return category.replace("-", " ");
}