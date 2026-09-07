import { PublicationsHero } from "@/components/publications/PublicationsHero";
import { FeaturedBooks } from "@/components/publications/FeaturedBooks";
import { BookExplorer } from "@/components/publications/BookExplorer";
import { PublishingCta } from "@/components/publications/PublishingCta";
import { CtaBand } from "@/components/ui/CtaBand";
import { getPublications } from "@/lib/content";

export const revalidate = 3600;

export default async function PublicationsPage() {
  const publications = await getPublications();

  return (
    <>
      <PublicationsHero />
      <FeaturedBooks publications={publications} />
      <BookExplorer publications={publications} />
      <PublishingCta />
      <CtaBand
        eyebrow="Shop"
        title="Take a book home."
        lead="Deliveries for print and instant downloads for e-books. The shop also carries apparel for the people who build."
        primaryLabel="Visit the shop"
        primaryHref="/shop"
      />
    </>
  );
}