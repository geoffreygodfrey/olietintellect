import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Container } from "@/components/ui/Container";

export function CtaBand({
  eyebrow,
  title,
  lead,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div
        className="absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full bg-brass/15 blur-[120px]"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-paper text-balance sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {lead && <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist sm:text-lg">{lead}</p>}
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
            <ButtonLink href={primaryHref} size="lg" withArrow>
              {primaryLabel}
            </ButtonLink>
            {secondaryLabel && secondaryHref && (
              <ButtonLink href={secondaryHref} size="lg" variant="paper">
                {secondaryLabel}
              </ButtonLink>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}