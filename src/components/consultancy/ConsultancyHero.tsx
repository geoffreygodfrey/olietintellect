import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function ConsultancyHero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="absolute -right-32 top-0 h-[480px] w-[480px] rounded-full bg-brass/10 blur-[130px]"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="max-w-4xl py-24 sm:py-32 lg:py-36">
          <Eyebrow tone="dark">Consultancy</Eyebrow>
          <h1 className="mt-7 font-display text-[2.5rem] font-semibold leading-[1.06] tracking-tight text-paper text-balance sm:text-5xl lg:text-6xl">
            Clear thinking for organisations that want to build.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            We help businesses and organisations make better decisions through business analysis, strategic planning,
            investment analysis and project management.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#services" size="lg" withArrow>
              Explore our services
            </ButtonLink>
            <ButtonLink href="/work-with-us" size="lg" variant="paper">
              Talk to us
            </ButtonLink>
          </div>

          <p className="mt-14 border-t border-linedark/70 pt-7 text-sm leading-relaxed text-mist">
            We work with startups, established businesses, investors and mission-driven organisations.
          </p>
        </div>
      </Container>
    </section>
  );
}