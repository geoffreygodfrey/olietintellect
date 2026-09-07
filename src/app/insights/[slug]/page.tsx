import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PortableText } from "@/components/ui/PortableText";
import { NewsletterBand } from "@/components/insights/NewsletterBand";
import { formatDate } from "@/lib/utils";
import { getInsightBySlug, getInsights, getSiteSettings } from "@/lib/content";

export const revalidate = 3600;

export function generateStaticParams() {
  return getInsights().then((insights) => insights.map((i) => ({ slug: i.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getInsightBySlug(slug);
  if (!article) return { title: "Insight not found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [article, settings] = await Promise.all([getInsightBySlug(slug), getSiteSettings()]);
  if (!article) notFound();

  return (
    <>
      <article className="border-b border-line bg-paper">
        <Container>
          <div className="mx-auto max-w-3xl py-20 sm:py-28">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All insights
            </Link>

            <p className="mt-10 text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
              {article.category.replace("-", " ")}
            </p>
            <h1 className="mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-tight text-ink text-balance sm:text-4xl lg:text-[2.75rem]">
              {article.title}
            </h1>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-line py-5 text-sm text-slate">
              <span className="font-medium text-body">{article.author}</span>
              <span className="h-3 w-px bg-line" aria-hidden="true" />
              <span>{formatDate(article.publishedAt)}</span>
              <span className="h-3 w-px bg-line" aria-hidden="true" />
              <span>{article.readTime}</span>
            </div>

            <p className="mt-8 font-display text-xl font-medium leading-relaxed text-body/90 sm:text-2xl">
              {article.excerpt}
            </p>

            <div className="mt-10">
              <PortableText blocks={article.body} />
            </div>
          </div>
        </Container>
      </article>

      <NewsletterBand title={settings.newsletter.title} description={settings.newsletter.description} />
    </>
  );
}