import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { projectId, dataset } from "@/lib/sanity/client";

const builder = imageUrlBuilder({
  projectId: projectId || "",
  dataset,
});

export type ImageSource = SanityImageSource | string | null | undefined;

export function imageUrl(source: ImageSource, width = 1200): string | null {
  if (!source || !projectId) return null;
  if (typeof source === "string") return source;
  return builder.image(source).auto("format").fit("max").width(width).toString();
}