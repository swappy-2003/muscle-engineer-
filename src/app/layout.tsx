import type { Metadata } from "next";

import "./globals.css";

const description =
  "Muscle Engineers Fitness Hub is a premier 5,000+ sq ft fitness & strength center in Virar West, Maharashtra. Founded by IBBF National Champion Gopal Rajaram Faujdar. Rated 4.6★ with 180+ reviews. Offering Olympic strength equipment, cardio deck, personal training, and yoga.";

export const metadata: Metadata = {
  metadataBase: new URL("https://muscleengineer.netlify.app"),
  title: {
    default: "Muscle Engineers Fitness Hub | Best Gym in Virar West",
    template: "%s | Muscle Engineers Fitness Hub",
  },
  description,
  keywords: [
    "gym in virar west",
    "fitness center virar",
    "best gym in virar",
    "muscle engineers",
    "muscle engineers fitness hub",
    "personal training virar west",
    "gopal rajaram faujdar gym",
    "strength training vasai virar",
    "bodybuilding gym virar",
    "gym near old viva college",
    "weight loss gym virar",
    "unisex gym virar west",
  ],
  authors: [{ name: "Gopal Rajaram Faujdar" }],
  creator: "Muscle Engineers Fitness Hub",
  publisher: "Muscle Engineers Fitness Hub",
  category: "Fitness & Health",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Muscle Engineers Fitness Hub | Best Gym in Virar West",
    description,
    url: "https://muscleengineer.netlify.app",
    type: "website",
    locale: "en_IN",
    siteName: "Muscle Engineers Fitness Hub",
    images: [
      {
        url: "/images/about-hero-banner-og.jpg",
        width: 1200,
        height: 513,
        alt: "Muscle Engineers Fitness Hub - Built on Science. Driven by People.",
      },
      {
        url: "/images/facilites/hero2.png",
        width: 1920,
        height: 1080,
        alt: "Muscle Engineers Gym Training Floor in Virar West",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muscle Engineers Fitness Hub | Best Gym in Virar West",
    description,
    images: ["/images/about-hero-banner-og.jpg"],
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
  "@type": ["HealthClub", "SportsActivityLocation", "ExerciseGym"],
  name: "Muscle Engineers Fitness Hub",
  alternateName: "Muscle Engineers Gym Virar",
  description:
    "A 5,000+ sq ft fitness & strength center in Virar West, Maharashtra, founded by National Champion Gopal Rajaram Faujdar. Featuring commercial Jerai & Being Strong equipment, personal training, cardio deck, and yoga.",
  url: "https://muscleengineer.netlify.app",
  logo: "https://muscleengineer.netlify.app/images/logo.png",
  image: [
    "https://muscleengineer.netlify.app/images/about-hero-banner-og.jpg",
    "https://muscleengineer.netlify.app/images/facilites/hero2.png",
    "https://muscleengineer.netlify.app/images/facility.jpg",
  ],
  telephone: "+91 74208 83355",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Credit Card, Debit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, Kingston Court, 313, near Old Viva College, Virar West",
    addressLocality: "Vasai-Virar",
    addressRegion: "Maharashtra",
    postalCode: "401303",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 19.457572,
    longitude: 72.801428,
  },
  hasMap: "https://www.google.com/maps/place/Muscle+Engineers/@19.4575717,72.8014278,17z",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "05:30",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "08:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "180",
    reviewCount: "180",
  },
  founder: {
    "@type": "Person",
    name: "Gopal Rajaram Faujdar",
    jobTitle: "Founder & Head Coach",
    award: "National Gold Medalist — 1st Place IBBF 16th Men's Championship 2026",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Strength & Resistance Training", value: true },
    { "@type": "LocationFeatureSpecification", name: "Cardio Zone", value: true },
    { "@type": "LocationFeatureSpecification", name: "Personal Coaching", value: true },
    { "@type": "LocationFeatureSpecification", name: "Yoga & Flexibility", value: true },
    { "@type": "LocationFeatureSpecification", name: "Locker Rooms & Changing Area", value: true },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioned", value: true },
  ],
  sameAs: [
    "https://www.instagram.com/themuscleengineers/",
    "https://www.facebook.com/themuscleengineers/",
    "https://www.youtube.com/results?search_query=Muscle+Engineers+Gym+Virar",
  ],
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
