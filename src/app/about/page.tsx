import { AboutHero } from "@/components/about/AboutHero";
import { Philosophy } from "@/components/about/Philosophy";
import { Beliefs } from "@/components/about/Beliefs";
import { Expertise } from "@/components/about/Expertise";
import { Experience } from "@/components/about/Experience";
import { TeamSection } from "@/components/about/TeamSection";
import { CtaBand } from "@/components/ui/CtaBand";
import {
  getCapabilities,
  getTeam,
  getValues,
  reviewsSeed,
} from "@/lib/content";

export const revalidate = 3600;

export default async function AboutPage() {
  const [values, capabilities, team] = await Promise.all([getValues(), getCapabilities(), getTeam()]);

  return (
    <>
      <AboutHero />
      <Philosophy />
      <Beliefs values={values} />
      <Expertise capabilities={capabilities} />
      <Experience reviews={reviewsSeed} />
      <TeamSection team={team} />
      <CtaBand
        eyebrow="Next step"
        title="Put the thinking to work."
        lead="If the way we think sounds like the way you want to work, the next move is a conversation. We will tell you honestly whether we are the right fit."
        primaryLabel="Start a Conversation"
        primaryHref="/work-with-us"
        secondaryLabel="Read our insights"
        secondaryHref="/insights"
      />
    </>
  );
}