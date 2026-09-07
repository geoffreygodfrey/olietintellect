import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PublicationsHero() {
  return (
    <section className="border-b border-line bg-paper">
      <Container>
        <div className="max-w-4xl py-24 sm:py-32">
          <Eyebrow>Oliet Press</Eyebrow>
          <h1 className="mt-7 font-display text-[2.5rem] font-semibold leading-[1.06] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            Ideas worth publishing.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            Our publishing arm produces knowledge worth keeping — books and guides on business, faith and learning,
            written by the same people who advise. In print and as e-books, with the care that craft deserves.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#catalogue" size="lg" withArrow>
              Browse the catalogue
            </ButtonLink>
            <ButtonLink href="/shop" size="lg" variant="outline">
              Visit the shop
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}