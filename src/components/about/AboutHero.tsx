import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function AboutHero() {
  return (
    <section className="border-b border-line bg-paper">
      <Container>
        <div className="max-w-4xl py-24 sm:py-32">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-7 font-display text-[2.5rem] font-semibold leading-[1.06] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            Who we are, and why you can trust the thinking.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            Oliet Intellect is a consultancy and publishing company. We advise organisations on the decisions that
            shape their future, and we publish the knowledge that sustains good judgement — because advice that
            cannot stand public scrutiny is not advice we want to give.
          </p>
        </div>
      </Container>
    </section>
  );
}