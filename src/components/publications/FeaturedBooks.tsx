import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookCover } from "@/components/ui/BookCover";
import type { Publication } from "@/lib/types";

export function FeaturedBooks({ publications }: { publications: Publication[] }) {
  const featured = publications.filter((p) => p.featured).slice(0, 2);
  const books = featured.length >= 2 ? featured : publications.slice(0, 2);

  return (
    <section className="bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Featured titles"
          title="Start with these."
          lead="Two works we reach for first — the flagship decisions title and a letter to everyone starting something real."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {books.map((book) => (
            <div key={book._id} className="group grid gap-8 sm:grid-cols-[220px_1fr] sm:items-center">
              <a href={`/publications/${book.slug}`} className="mx-auto w-full max-w-[220px]">
                <BookCover title={book.title} author={book.author} cover={book.cover} />
              </a>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
                  {book.category} · {book.format.join(" · ")}
                </p>
                <h3 className="card-headline mt-3 text-black transition-colors group-hover:text-brass">
                  <a href={`/publications/${book.slug}`}>{book.title}</a>
                </h3>
                <p className="card-subtext mt-4 text-black">{book.excerpt}</p>
                <a
                  href={`/publications/${book.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-brand"
                >
                  View title
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}