import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { NewsletterForm } from "@/components/ui/NewsletterForm";

export function NewsletterBand({ title, description }: { title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
      <div className="absolute inset-0 grid-ink opacity-40" aria-hidden="true" />
      <div
        className="absolute -left-24 top-0 h-[380px] w-[380px] rounded-full bg-brass/10 blur-[120px]"
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow tone="dark">Newsletter</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-paper sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-mist">{description}</p>
          </div>
          <NewsletterForm />
        </div>
      </Container>
    </section>
  );
}