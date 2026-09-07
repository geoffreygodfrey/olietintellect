import { CtaBand } from "@/components/ui/CtaBand";
import { ConsultancyHero } from "@/components/consultancy/ConsultancyHero";
import { Services } from "@/components/consultancy/Services";
import { BusinessDevelopment } from "@/components/consultancy/BusinessDevelopment";
import { Approach } from "@/components/consultancy/Approach";
import { FaqSection } from "@/components/consultancy/FaqSection";
import { getApproach, getDevelopmentStages, getFaqs, getServices } from "@/lib/content";

export const revalidate = 3600;

export default async function ConsultancyPage() {
  const [services, stages, approach, faqs] = await Promise.all([
    getServices(),
    getDevelopmentStages(),
    getApproach(),
    getFaqs(),
  ]);

  return (
    <>
      <ConsultancyHero />
      <Services services={services} />
      <BusinessDevelopment stages={stages} />
      <Approach steps={approach} />
      <FaqSection faqs={faqs} />
      <CtaBand
        eyebrow="Next step"
        title="Let's look at the business honestly."
        lead="Tell us where you are, what you're trying to achieve, and what's getting in the way."
        primaryLabel="Start a Conversation"
        primaryHref="/work-with-us"
      />
    </>
  );
}