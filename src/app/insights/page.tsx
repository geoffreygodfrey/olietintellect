import { InsightsHero } from "@/components/insights/InsightsHero";
import { InsightsExplorer } from "@/components/insights/InsightsExplorer";
import { NewsletterBand } from "@/components/insights/NewsletterBand";
import { getInsights, getSiteSettings } from "@/lib/content";

export const revalidate = 3600;

export default async function InsightsPage() {
  const [insights, settings] = await Promise.all([getInsights(), getSiteSettings()]);

  return (
    <>
      <InsightsHero />
      <InsightsExplorer insights={insights} />
      <NewsletterBand title={settings.newsletter.title} description={settings.newsletter.description} />
    </>
  );
}