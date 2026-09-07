import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0 grid-ink opacity-40" aria-hidden="true" />
      <Container className="relative">
        <div className="flex min-h-[60svh] flex-col items-center justify-center py-24 text-center">
          <p className="font-display text-7xl font-semibold tracking-tight text-brass sm:text-8xl">404</p>
          <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
            This page has gone to print and not come back.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-mist">
            The page you are looking for does not exist — or has moved. Let us point you somewhere useful.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/" size="lg" withArrow>
              Back home
            </ButtonLink>
            <ButtonLink href="/consultancy" size="lg" variant="paper">
              Explore consultancy
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}