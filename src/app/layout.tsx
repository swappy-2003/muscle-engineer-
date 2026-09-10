import type { Metadata } from "next";

import "./globals.css";

const description =
  "Muscle Engineers Fitness Hub is a fitness and training center in Virar West offering strength training, personal training, nutrition guidance and fitness programs for all levels.";

export const metadata: Metadata = {
  metadataBase: new URL("https://muscle-engineers.example.com"),
  title: "Muscle Engineers Fitness Hub | Gym in Virar West",
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muscle Engineers Fitness Hub | Gym in Virar West",
    description,
    type: "website",
    locale: "en_IN",
    siteName: "Muscle Engineers Fitness Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muscle Engineers Fitness Hub | Gym in Virar West",
    description,
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "any" },
      { url: "/icon.png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: "Muscle Engineers Fitness Hub",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, Kingston Court, 313, near Old Viva College, Virar West",
    addressLocality: "Vasai-Virar",
    addressRegion: "Maharashtra",
    postalCode: "401303",
    addressCountry: "IN",
  },
  telephone: "+91 74208 83355",
  openingHours: ["Mo-Sa 05:30-23:00", "Su 08:00-20:00"],
  sameAs: ["https://www.instagram.com/themuscleengineers/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
