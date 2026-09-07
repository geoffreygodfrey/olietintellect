import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { TeamMember } from "@/lib/types";

const practice = [
  "Strategy & decision-making",
  "Investment & financial analysis",
  "Business setup & restructuring",
  "Publishing & editorial",
  "Project & delivery management",
  "Education & training",
];

export function TeamSection({ team }: { team: TeamMember[] }) {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Founder & team</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink text-balance sm:text-4xl">
            Senior people do the work. Personalities are secondary.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate sm:text-lg">
            We keep our practice deliberately small and senior. Engagements are led personally by our core team, who
            combine practitioner experience in business, analysis and publishing — and follow their work through to the
            end.
          </p>
        </div>

        {team.length > 0 ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member._id} className="border border-line bg-cream p-8">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-ink font-display text-lg font-semibold text-brand-soft">
                    {member.name.charAt(0) || "O"}
                  </span>
                  <div>
                    <h3 className="card-headline text-black">{member.name}</h3>
                    <p className="text-sm text-brand">{member.role}</p>
                  </div>
                </div>
                <p className="card-subtext mt-5 text-black">{member.bio}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-14 border border-line bg-cream p-8 sm:p-10">
            <Eyebrow>The practice today</Eyebrow>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {practice.map((item) => (
                <div key={item} className="flex items-center gap-3 border-t border-line pt-3">
                  <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" aria-hidden="true" />
                  <span className="text-sm font-medium text-ink">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-slate">
              Meet the people behind the advice on your first conversation. We will introduce you to the exact
              individuals who will do your work — before you commit to anything.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}