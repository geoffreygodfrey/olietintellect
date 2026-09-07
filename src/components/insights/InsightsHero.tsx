import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function InsightsHero() {
  return (
    <section className="border-b border-line bg-cream">
      <Container>
        <div className="max-w-4xl py-24 sm:py-32">
          <Eyebrow>Insights</Eyebrow>
          <h1 className="mt-7 font-display text-[2.5rem] font-semibold leading-[1.06] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
            Ideas worth sharing.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            Analysis and reflection from the people behind the advice. Long enough to be useful, short enough to be
            read — on business, religion, education and the social life we share.
          </p>
        </div>
      </Container>
    </section>
  );
}