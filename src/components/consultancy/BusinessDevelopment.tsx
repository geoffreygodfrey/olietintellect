import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { DevelopmentStage } from "@/lib/types";

export function BusinessDevelopment({ stages }: { stages: DevelopmentStage[] }) {
  return (
    <section id="development" className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div
        className="absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-brass/10 blur-[130px]"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="max-w-2xl">
          <Eyebrow tone="dark">Start · Strengthen · Rebuild</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-paper text-balance sm:text-4xl">
            Wherever the business is, there&rsquo;s a next step.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {stages.map((stage, i) => (
            <div
              key={stage.title}
              className="flex flex-col border border-linedark bg-ink-soft/60 p-8 transition-colors duration-300 hover:border-brand/50 sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-[15px] font-semibold uppercase tracking-[0.28em] text-brand-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-brand" aria-hidden="true" />
              </div>
              <h3 className="card-headline mt-6 text-paper">{stage.title}</h3>
              <p className="card-subtext mt-4 text-mist">{stage.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-mist/90">
          Our work may include planning, analysis, restructuring, project management and strategic advice depending on
          the situation.
        </p>
      </Container>
    </section>
  );
}