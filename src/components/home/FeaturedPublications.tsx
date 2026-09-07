import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/CardArrow";
import { BookCover } from "@/components/ui/BookCover";
import type { Publication } from "@/lib/types";

export function FeaturedPublications({ publications }: { publications: Publication[] }) {
  const featured = publications.filter((p) => p.featured).slice(0, 4);
  const books = featured.length >= 4 ? featured : publications.slice(0, 4);

  return (
    <section className="border-b border-line bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Oliet Press"
            title="Books worth printing."
            lead="Our publishing arm produces work across business, faith, education and social life — in both digital and print formats."
          />
          <div className="flex shrink-0 flex-col items-start gap-4 sm:flex-row sm:items-center">
            <ArrowLink href="/publications">Browse all publications</ArrowLink>
            <ArrowLink href="/shop">Visit the shop</ArrowLink>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
          {books.map((book) => (
            <a key={book._id} href={`/publications/${book.slug}`} className="group">
              <BookCover title={book.title} author={book.author} cover={book.cover} />
              <div className="mt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand">
                  {book.category} · {book.format[0]}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brass">
                  {book.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}