import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ShopHero() {
  return (
    <section className="border-b border-line bg-paper">
      <Container>
        <div className="max-w-4xl py-24 sm:py-32">
          <Eyebrow>The Oliet Store</Eyebrow>
          <h1 className="mt-7 font-display text-[2.5rem] font-semibold leading-[1.06] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            Built to last, made to be used.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            Books from the Oliet Press and apparel for the people who build. We keep the range short and the quality
            serious — the way we think good businesses should do good products.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#store" size="lg" withArrow>
              Browse the store
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}