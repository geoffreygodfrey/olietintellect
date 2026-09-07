import {
  approachQuery,
  capabilitiesQuery,
  caseStudiesQuery,
  developmentStagesQuery,
  faqsQuery,
  insightBySlugQuery,
  insightsQuery,
  productBySlugQuery,
  productsQuery,
  publicationBySlugQuery,
  publicationsQuery,
  serviceGroupsQuery,
  servicesQuery,
  siteSettingsQuery,
  teamQuery,
  valuesQuery,
} from "@/lib/sanity/queries";
import { getClient } from "@/lib/sanity/client";
import {
  approachAgendaSeed,
  approachSeed,
  capabilitiesSeed,
  caseStudiesSeed,
  developmentStagesSeed,
  engagementSeed,
  faqsSeed,
  insightsSeed,
  productsSeed,
  publicationsSeed,
  reviewsSeed,
  serviceGroupsSeed,
  servicesSeed,
  siteSettingsSeed,
  teamSeed,
  valuesSeed,
} from "@/lib/content/seed";
import type {
  ApproachStep,
  Capability,
  CaseStudy,
  DevelopmentStage,
  Faq,
  Insight,
  Product,
  Publication,
  Service,
  ServiceGroup,
  SiteSettings,
  TeamMember,
  Value,
} from "@/lib/types";

async function fetchOr<T>(query: string, fallback: T, params: Record<string, unknown> = {}): Promise<T> {
  const client = getClient();
  if (!client) return fallback;
  try {
    const result = await client.fetch<T>(query, params);
    return result ?? fallback;
  } catch {
    return fallback;
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return fetchOr(siteSettingsQuery, siteSettingsSeed);
}

export async function getServices(): Promise<Service[]> {
  return fetchOr(servicesQuery, servicesSeed);
}

export async function getServiceGroups(): Promise<ServiceGroup[]> {
  return fetchOr(serviceGroupsQuery, serviceGroupsSeed);
}

export async function getDevelopmentStages(): Promise<DevelopmentStage[]> {
  return fetchOr(developmentStagesQuery, developmentStagesSeed);
}

export async function getApproach(): Promise<ApproachStep[]> {
  return fetchOr(approachQuery, approachSeed);
}

export async function getPublications(): Promise<Publication[]> {
  return fetchOr(publicationsQuery, publicationsSeed);
}

export async function getPublicationBySlug(slug: string): Promise<Publication | null> {
  return fetchOr<Publication | null>(publicationBySlugQuery, publicationsSeed.find((p) => p.slug === slug) ?? null, { slug });
}

export async function getInsights(): Promise<Insight[]> {
  return fetchOr(insightsQuery, insightsSeed);
}

export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  return fetchOr<Insight | null>(insightBySlugQuery, insightsSeed.find((i) => i.slug === slug) ?? null, { slug });
}

export async function getProducts(): Promise<Product[]> {
  return fetchOr(productsQuery, productsSeed);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return fetchOr<Product | null>(productBySlugQuery, productsSeed.find((p) => p.slug === slug) ?? null, { slug });
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  return fetchOr(caseStudiesQuery, caseStudiesSeed);
}

export async function getFaqs(): Promise<Faq[]> {
  return fetchOr(faqsQuery, faqsSeed);
}

export async function getTeam(): Promise<TeamMember[]> {
  return fetchOr(teamQuery, teamSeed);
}

export async function getValues(): Promise<Value[]> {
  return fetchOr(valuesQuery, valuesSeed);
}

export async function getCapabilities(): Promise<Capability[]> {
  return fetchOr(capabilitiesQuery, capabilitiesSeed);
}

export { approachAgendaSeed, engagementSeed, reviewsSeed, teamSeed };