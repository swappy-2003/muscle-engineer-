import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muscle Engineers Fitness Hub",
    short_name: "Muscle Engineers",
    description:
      "Premium fitness & training center in Virar West featuring strength training, cardio, personal training, and exercise science.",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#d71920",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
