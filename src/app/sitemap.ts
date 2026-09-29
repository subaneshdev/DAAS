import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { growthPaths } from "@/content/growth";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/real-estate-marketing/",
    "/services/",
    "/locations/",
    "/contact/",
    "/privacy/",
    ...growthPaths,
    ...services.map((s) => `/services/${s.slug}/`),
  ].map((path) => ({ url: `${site.url}${path}` }));
}
