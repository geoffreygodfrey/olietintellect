import { Hero } from "@/components/home/Hero";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { ConsultancyFeature } from "@/components/home/ConsultancyFeature";
import { FeaturedPublications } from "@/components/home/FeaturedPublications";
import { FeaturedInsights } from "@/components/home/FeaturedInsights";
import { CtaBand } from "@/components/ui/CtaBand";
import {
  getApproach,
  getInsights,
  getPublications,
  getServiceGroups,
  getServices,
  getSiteSettings,
} from "@/lib/content";

export const revalidate = 3600;

export default async function HomePage() {
  const [settings, serviceGroups, services, approach, publications, insights] = await Promise.all([
    getSiteSettings(),
    getServiceGroups(),
    getServices(),
    getApproach(),
    getPublications(),
    getInsights(),
  ]);

  return (
    <>
      <Hero settings={settings} />
      <WhatWeDo groups={serviceGroups} />
      <ConsultancyFeature services={services} steps={approach} />
      <FeaturedPublications publications={publications} />
      <FeaturedInsights insights={insights} />
      <CtaBand
        eyebrow="Work with us"
        title="Have a business challenge, project or idea?"
        lead="Tell us where you are, where you want to go, and what you're trying to solve. Let's see how we can help."
        primaryLabel="Start a Conversation"
        primaryHref="/work-with-us"
      />
    </>
  );
}