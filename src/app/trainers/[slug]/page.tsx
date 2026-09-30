import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Award, CheckCircle2, Dumbbell, Quote, Shield } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { BackToTop } from "@/components/back-to-top";
import { trainersData, getTrainerBySlug, getAllTrainerSlugs } from "@/lib/trainers";

/* ---------- Static params ---------- */
export function generateStaticParams() {
  return getAllTrainerSlugs().map((slug) => ({ slug }));
}

/* ---------- Dynamic metadata ---------- */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const trainer = getTrainerBySlug(slug);
  if (!trainer) return {};

  return {
    title: `${trainer.name} — ${trainer.role}`,
    description: `${trainer.name} is a ${trainer.role} at Muscle Engineers Fitness Hub in Virar West, specialising in ${trainer.specialty}. ${trainer.experience}.`,
    keywords: [
      trainer.name.toLowerCase(),
      `${trainer.name.toLowerCase()} trainer`,
      "muscle engineers trainer",
      "gym trainer virar",
      trainer.specialty.toLowerCase(),
    ],
    alternates: {
      canonical: `/trainers/${trainer.slug}`,
    },
    openGraph: {
      title: `${trainer.name} — ${trainer.role} | Muscle Engineers`,
      description: `${trainer.name} is a ${trainer.role} at Muscle Engineers Fitness Hub, specialising in ${trainer.specialty}. ${trainer.experience}.`,
      url: `https://muscleengineer.netlify.app/trainers/${trainer.slug}`,
      type: "profile",
      locale: "en_IN",
      siteName: "Muscle Engineers Fitness Hub",
      images: [
        {
          url: `https://muscleengineer.netlify.app${trainer.image}`,
          width: 800,
          height: 1000,
          alt: `${trainer.name} — ${trainer.role} at Muscle Engineers`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${trainer.name} — ${trainer.role} | Muscle Engineers`,
      description: `${trainer.name} specialises in ${trainer.specialty}. ${trainer.experience}.`,
      images: [`https://muscleengineer.netlify.app${trainer.image}`],
    },
  };
}

/* ---------- Page ---------- */
export default async function TrainerProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const trainer = getTrainerBySlug(slug);
  if (!trainer) notFound();

  const currentIndex = trainersData.findIndex((t) => t.slug === slug);
  const prevTrainer = trainersData[(currentIndex - 1 + trainersData.length) % trainersData.length];
  const nextTrainer = trainersData[(currentIndex + 1) % trainersData.length];

  const trainerSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: trainer.name,
    jobTitle: trainer.role,
    worksFor: {
      "@type": "SportsActivityLocation",
      name: "Muscle Engineers Fitness Hub",
      url: "https://muscleengineer.netlify.app",
    },
    image: `https://muscleengineer.netlify.app${trainer.image}`,
    url: `https://muscleengineer.netlify.app/trainers/${trainer.slug}`,
    knowsAbout: trainer.specialties,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(trainerSchema) }}
      />
      <ScrollReveal />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="tp-hero">
          <div className="tp-hero__media">
            <Image
              src={trainer.image}
              alt={`${trainer.name} — ${trainer.role} at Muscle Engineers`}
              fill
              sizes="100vw"
              priority
              className="tp-hero__image"
            />
          </div>
          <div className="tp-hero__overlay" />
          <div className="tp-hero__content page-shell">
            <Link href="/trainers" className="tp-hero__back">
              <ArrowLeft size={16} strokeWidth={1.6} /> All trainers
            </Link>
            <span className="tp-hero__badge reveal" data-scroll>
              {trainer.specialty}
            </span>
            <h1 className="display-heading display-heading--light tp-hero__name reveal reveal--up" data-scroll>
              {trainer.name.split(" ").map((word, i) => (
                <span key={i}>
                  {i === trainer.name.split(" ").length - 1 ? <em>{word}</em> : word}
                  {i < trainer.name.split(" ").length - 1 && <br />}
                </span>
              ))}
            </h1>
            <p className="tp-hero__role reveal reveal--up" data-scroll>
              {trainer.role} · {trainer.experience}
            </p>
          </div>
        </section>

        {/* Highlights strip */}
        <section className="tp-highlights section-dark">
          <div className="page-shell">
            <div className="tp-highlights__grid">
              {trainer.highlights.map((h) => (
                <div className="tp-highlight reveal reveal--up" data-scroll key={h.label}>
                  <span className="tp-highlight__value">{h.value}</span>
                  <span className="tp-highlight__label">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bio & details */}
        <section className="tp-about section-light" aria-labelledby="tp-about-title">
          <div className="page-shell tp-about__layout">
            {/* Left: image */}
            <div className="tp-about__portrait reveal reveal--up" data-scroll>
              <div className="tp-about__portrait-wrapper">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 800px) 100vw, 45vw"
                  className="tp-about__portrait-img"
                />
                <div className="tp-about__portrait-scrim" />
              </div>
            </div>

            {/* Right: copy */}
            <div className="tp-about__copy">
              <p className="section-label reveal" data-scroll>
                About {trainer.name.split(" ")[0]}
              </p>
              <h2 className="display-heading reveal reveal--up" data-scroll id="tp-about-title">
                The coach <em>behind</em>
                <br />
                the work.
              </h2>
              <p className="tp-about__bio reveal reveal--up" data-scroll>
                {trainer.bio}
              </p>

              {/* Philosophy quote */}
              <blockquote className="tp-quote reveal reveal--up" data-scroll>
                <Quote size={24} strokeWidth={1.2} className="tp-quote__icon" aria-hidden="true" />
                <p className="tp-quote__text">{trainer.philosophy}</p>
                <cite className="tp-quote__author">
                  — {trainer.name}
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Specialties & certifications */}
        <section className="tp-credentials section-dark" aria-labelledby="tp-credentials-title">
          <div className="page-shell">
            <div className="tp-credentials__header">
              <div>
                <p className="section-label section-label--light reveal" data-scroll>
                  Skills & credentials
                </p>
                <h2
                  className="display-heading display-heading--light reveal reveal--up"
                  data-scroll
                  id="tp-credentials-title"
                >
                  What {trainer.name.split(" ")[0]}
                  <br />
                  brings to the <em>floor.</em>
                </h2>
              </div>
            </div>

            <div className="tp-credentials__grid">
              {/* Specialties */}
              <div className="tp-cred-card reveal reveal--up" data-scroll>
                <div className="tp-cred-card__icon-wrap">
                  <Dumbbell size={22} strokeWidth={1.4} />
                </div>
                <h3 className="tp-cred-card__title">Specialisations</h3>
                <ul className="tp-cred-card__list">
                  {trainer.specialties.map((s) => (
                    <li key={s}>
                      <CheckCircle2 size={14} strokeWidth={1.8} aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Certifications */}
              <div className="tp-cred-card reveal reveal--up" data-scroll>
                <div className="tp-cred-card__icon-wrap">
                  <Award size={22} strokeWidth={1.4} />
                </div>
                <h3 className="tp-cred-card__title">Certifications</h3>
                <ul className="tp-cred-card__list">
                  {trainer.certifications.map((c) => (
                    <li key={c}>
                      <Shield size={14} strokeWidth={1.8} aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prev / Next navigation */}
        <section className="tp-nav-section section-dark">
          <div className="page-shell tp-nav__layout">
            <Link href={`/trainers/${prevTrainer.slug}`} className="tp-nav-link tp-nav-link--prev reveal reveal--up" data-scroll>
              <span className="tp-nav-link__label">
                <ArrowLeft size={14} strokeWidth={1.6} /> Previous coach
              </span>
              <span className="tp-nav-link__name">{prevTrainer.name}</span>
              <span className="tp-nav-link__role">{prevTrainer.role}</span>
            </Link>
            <Link href={`/trainers/${nextTrainer.slug}`} className="tp-nav-link tp-nav-link--next reveal reveal--up" data-scroll>
              <span className="tp-nav-link__label">
                Next coach <ArrowUpRight size={14} strokeWidth={1.6} />
              </span>
              <span className="tp-nav-link__name">{nextTrainer.name}</span>
              <span className="tp-nav-link__role">{nextTrainer.role}</span>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="tp-cta section-dark">
          <div className="page-shell tp-cta__layout">
            <div>
              <h2 className="display-heading display-heading--light reveal reveal--up" data-scroll>
                Train with <em>{trainer.name.split(" ")[0]}.</em>
              </h2>
              <p className="tp-cta__copy reveal reveal--up" data-scroll>
                Book a session, ask questions, or walk in for a trial. {trainer.name.split(" ")[0]} is ready when you are.
              </p>
            </div>
            <div className="tp-cta__actions reveal reveal--up" data-scroll>
              <a href="tel:+917420883355" className="btn btn--primary">
                Call now <ArrowUpRight size={16} strokeWidth={1.5} />
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
