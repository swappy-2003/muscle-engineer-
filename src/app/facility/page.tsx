import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { BackToTop } from "@/components/back-to-top";

import { FacilityGallery } from "@/components/sections/facility-gallery";

export const metadata: Metadata = {
  title: "Our Facility | Muscle Engineers Fitness Hub",
  description:
    "Take a tour of Muscle Engineers Fitness Hub — 5,000+ sq ft premium training facility in Virar West featuring Olympic squat stations, Jerai & Being Strong machines, cardio deck, boxing rig, and supplement lounge.",
};

const highlights = [
  { number: "5,000+", label: "Sq ft training space" },
  { number: "100+", label: "Pieces of equipment" },
  { number: "15+", label: "Dedicated zones & bays" },
  { number: "3rd", label: "Floor with open view" },
];

export default function FacilityPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="facility-page-hero">
          <div className="facility-page-hero__media">
            <Image
              src="/images/facilites/hero2.png"
              alt="Muscle Engineers training floor panoramic view"
              fill
              sizes="100vw"
              priority
              className="facility-page-hero__image"
            />
          </div>
          <div className="facility-page-hero__overlay" />
          <div className="facility-page-hero__content page-shell">
            <Link href="/" className="facility-page-hero__back">
              <ArrowLeft size={16} strokeWidth={1.6} /> Back to home
            </Link>
            <p className="section-label section-label--light reveal" data-scroll>
              The facility
            </p>
            <h1 className="display-heading display-heading--light reveal reveal--up" data-scroll>
              Where <em>iron</em>
              <br />
              meets intent.
            </h1>
            <p className="facility-page-hero__sub reveal reveal--up" data-scroll>
              5,000+ sq ft of purpose-built training space in Virar West — equipped for
              strength, conditioned for focus. Explore every zone below.
            </p>
          </div>
        </section>

        {/* Highlights strip */}
        <section className="facility-page-highlights section-dark">
          <div className="page-shell">
            <div className="facility-page-highlights__grid">
              {highlights.map((h) => (
                <div className="facility-page-highlight reveal reveal--up" data-scroll key={h.label}>
                  <span className="facility-page-highlight__number">{h.number}</span>
                  <span className="facility-page-highlight__label">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categorized Showcase Gallery */}
        <section className="facility-page-gallery section-dark" aria-labelledby="gallery-title">
          <div className="page-shell">
            <div className="facility-page-gallery__header">
              <div>
                <p className="section-label section-label--light reveal" data-scroll>
                  Explore every corner
                </p>
                <h2
                  className="display-heading display-heading--light facility-page-gallery__title reveal reveal--up"
                  data-scroll
                  id="gallery-title"
                >
                  Built for the <em>work.</em>
                </h2>
              </div>
              <p className="facility-page-gallery__subtitle reveal reveal--up" data-scroll>
                Filter by department to see our Olympic platforms, isolation machinery, cardio deck, functional rigs, and supplement reception.
              </p>
            </div>

            <FacilityGallery />
          </div>
        </section>

        {/* CTA banner */}
        <section className="facility-page-cta section-dark">
          <div className="page-shell facility-page-cta__layout">
            <div>
              <h2 className="display-heading display-heading--light reveal reveal--up" data-scroll>
                Ready to <em>train?</em>
              </h2>
              <p className="facility-page-cta__copy reveal reveal--up" data-scroll>
                Come see the space for yourself. Walk in, try a session, feel the difference.
              </p>
            </div>
            <div className="facility-page-cta__actions reveal reveal--up" data-scroll>
              <Link href="/#membership" className="btn btn--primary">
                View membership <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
              <Link href="/#contact" className="action-link action-link--light">
                Get directions <ArrowUpRight size={16} strokeWidth={1.4} />
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
