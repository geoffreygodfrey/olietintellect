import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { SiteSettings } from "@/lib/types";

export function Hero({ settings }: { settings: SiteSettings }) {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        className="absolute -left-40 top-0 h-[560px] w-[560px] rounded-full bg-brass/10 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 top-1/3 h-[380px] w-[380px] rounded-full bg-brass/10 blur-[120px]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="flex min-h-[calc(100svh-72px)] flex-col justify-center py-24 sm:py-32">
          <Eyebrow tone="dark">The Intellect Veins</Eyebrow>

          <h1 className="mt-7 max-w-4xl font-display text-[2.6rem] font-semibold leading-[1.1] text-paper text-balance sm:text-6xl lg:text-[67px] lg:leading-[77px]">
            {settings.heroTitle}
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">
            {settings.heroLead}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/work-with-us" size="lg" withArrow>
              Work With Us
            </ButtonLink>
            <ButtonLink href="/publications" size="lg" variant="paper">
              Explore Our Books
            </ButtonLink>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block" aria-hidden="true">
        <ArrowDown className="h-4 w-4 animate-bounce text-mist/60" />
      </div>
    </section>
  );
}