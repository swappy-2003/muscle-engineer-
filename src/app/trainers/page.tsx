import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { BackToTop } from "@/components/back-to-top";
import { trainersData } from "@/lib/trainers";

export const metadata: Metadata = {
  title: "Our Trainers | Muscle Engineers Fitness Hub Virar",
  description:
    "Meet the coaching team at Muscle Engineers Fitness Hub in Virar West. 6 certified trainers specialising in strength coaching, hypertrophy, body recomposition, mobility, athletic performance, and personal transformation.",
  keywords: [
    "gym trainers virar west",
    "personal trainer virar",
    "fitness coach vasai virar",
    "strength coach virar",
    "muscle engineers trainers",
    "certified gym trainer virar",
    "best fitness trainers virar",
  ],
  alternates: {
    canonical: "/trainers",
  },
  openGraph: {
    title: "Our Trainers | Muscle Engineers Fitness Hub Virar",
    description:
      "Meet the coaching team at Muscle Engineers Fitness Hub — 6 certified trainers with combined 37+ years of experience in strength, conditioning, physique, and lifestyle coaching.",
    url: "https://muscleengineer.netlify.app/trainers",
    type: "website",
    locale: "en_IN",
    siteName: "Muscle Engineers Fitness Hub",
    images: [
      {
        url: "/images/trainers/roshan-mandre.png",
        width: 800,
        height: 1000,
        alt: "Muscle Engineers Coaching Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Trainers | Muscle Engineers Fitness Hub Virar",
    description:
      "Meet the coaching team at Muscle Engineers Fitness Hub — 6 certified trainers with combined 37+ years of experience.",
    images: ["/images/trainers/roshan-mandre.png"],
  },
};

const teamStats = [
  { value: "37+", label: "Combined years of experience" },
  { value: "6", label: "Certified coaches" },
  { value: "2,000+", label: "Clients coached" },
  { value: "18+", label: "Specialisations covered" },
];

export default function TrainersPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="trainers-page-hero">
          <div className="trainers-page-hero__media">
            <Image
              src="/images/trainers/roshan-mandre.png"
              alt="Muscle Engineers coaching team"
              fill
              sizes="100vw"
              priority
              className="trainers-page-hero__image"
            />
          </div>
          <div className="trainers-page-hero__overlay" />
          <div className="trainers-page-hero__content page-shell">
            <Link href="/" className="trainers-page-hero__back">
              <ArrowLeft size={16} strokeWidth={1.6} /> Back to home
            </Link>
            <p className="section-label section-label--light reveal" data-scroll>
              The coaching team
            </p>
            <h1 className="display-heading display-heading--light reveal reveal--up" data-scroll>
              Built to <em>coach.</em>
              <br />
              Driven to lead.
            </h1>
            <p className="trainers-page-hero__sub reveal reveal--up" data-scroll>
              Six certified coaches with distinct specialisations, united by a single
              standard — helping you train with purpose, progress with structure,
              and transform for good.
            </p>
          </div>
        </section>

        {/* Stats strip */}
        <section className="trainers-page-stats section-dark">
          <div className="page-shell">
            <div className="trainers-page-stats__grid">
              {teamStats.map((s) => (
                <div className="trainers-page-stat reveal reveal--up" data-scroll key={s.label}>
                  <span className="trainers-page-stat__value">{s.value}</span>
                  <span className="trainers-page-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roster grid */}
        <section className="trainers-page-roster section-dark" aria-labelledby="roster-title">
          <div className="page-shell">
            <div className="trainers-page-roster__header">
              <div>
                <p className="section-label section-label--light reveal" data-scroll>
                  Meet every coach
                </p>
                <h2
                  className="display-heading display-heading--light reveal reveal--up"
                  data-scroll
                  id="roster-title"
                >
                  Your team on the <em>floor.</em>
                </h2>
              </div>
              <p className="trainers-page-roster__subtitle reveal reveal--up" data-scroll>
                Each coach brings a unique skillset. Tap on a profile to explore their
                background, certifications, and coaching philosophy.
              </p>
            </div>

            <div className="trainers-page-grid">
              {trainersData.map((trainer, idx) => (
                <Link
                  href={`/trainers/${trainer.slug}`}
                  className="trainers-page-card reveal reveal--up"
                  data-scroll
                  key={trainer.slug}
                >
                  <div className="trainers-page-card__media">
                    <Image
                      src={trainer.image}
                      alt={`${trainer.name} — ${trainer.role} at Muscle Engineers`}
                      fill
                      sizes="(max-width: 800px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      className="trainers-page-card__image"
                    />
                    <div className="trainers-page-card__overlay" />
                    <span className="trainers-page-card__index">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div className="trainers-page-card__expand">
                      <ArrowUpRight size={18} strokeWidth={1.8} />
                    </div>
                  </div>
                  <div className="trainers-page-card__info">
                    <span className="trainers-page-card__specialty">{trainer.specialty}</span>
                    <h3 className="trainers-page-card__name">{trainer.name}</h3>
                    <p className="trainers-page-card__role">{trainer.role}</p>
                    <span className="trainers-page-card__exp">{trainer.experience}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="trainers-page-cta section-dark">
          <div className="page-shell trainers-page-cta__layout">
            <div>
              <h2 className="display-heading display-heading--light reveal reveal--up" data-scroll>
                Ready to start <em>training?</em>
              </h2>
              <p className="trainers-page-cta__copy reveal reveal--up" data-scroll>
                Speak directly with a coach. Walk in, try a session, and feel the
                difference purposeful coaching makes.
              </p>
            </div>
            <div className="trainers-page-cta__actions reveal reveal--up" data-scroll>
              <a href="tel:+917420883355" className="btn btn--primary">
                Speak to a coach <ArrowUpRight size={16} strokeWidth={1.5} />
              </a>
              <Link href="/#membership" className="action-link action-link--light">
                View membership <ArrowUpRight size={16} strokeWidth={1.4} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
      <WhatsappCta />
    </>
  );
}
