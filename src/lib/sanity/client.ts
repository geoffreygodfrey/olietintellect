import { createClient, type ClientConfig } from "@sanity/client";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-09-06";
export const token = process.env.SANITY_API_TOKEN;

export const sanityConfig: Partial<ClientConfig> = {
  projectId: projectId || undefined,
  dataset,
  apiVersion,
  useCdn: true,
};

export function getClient(): ReturnType<typeof createClient> | null {
  if (!projectId) return null;
  return createClient({
    ...sanityConfig,
    token,
    useCdn: Boolean(token) ? false : true,
  });
}

export function sanityConfigured() {
  return Boolean(projectId);
}