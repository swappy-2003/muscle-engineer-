import type { MetadataRoute } from "next";
import { getAllTrainerSlugs } from "@/lib/trainers";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://muscleengineer.netlify.app";
  const lastModified = new Date();

  const trainerPages = getAllTrainerSlugs().map((slug) => ({
    url: `${baseUrl}/trainers/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/facility`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/trainers`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...trainerPages,
  ];
}
