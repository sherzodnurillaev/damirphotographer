import type { MetadataRoute } from "next";

const baseUrl = "https://damirregistan.com";

const locales = ["ru", "en", "uz"];

const pages = [
  "",
  "/portfolio",
  "/services",
  "/reviews",
  "/contacts",
];

const serviceCategories = [
  "meeting",
  "lovestory",
  "family",
  "national",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const mainPages = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
    }))
  );

  const servicePages = locales.flatMap((locale) =>
    serviceCategories.map((category) => ({
      url: `${baseUrl}/${locale}/services/${category}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }))
  );

  return [...mainPages, ...servicePages];
}