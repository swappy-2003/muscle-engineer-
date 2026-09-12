import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Award, CheckCircle2, Dumbbell, Flame, Heart, MapPin, Shield, Star, Trophy, Users, Zap } from "lucide-react";

import { ScrollReveal } from "@/components/scroll-reveal";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsappCta } from "@/components/whatsapp-cta";
import { BackToTop } from "@/components/back-to-top";
import { FounderGallery } from "@/components/sections/founder-gallery";

export const metadata: Metadata = {
  title: "About Us & Founder Gopal Faujdar | Muscle Engineers Fitness Hub",
  description:
    "Discover the story of Muscle Engineers Fitness Hub in Virar West — established 2017, 4.6★ rated with 180+ reviews. Founded by competitive bodybuilder and IBBF National Champion Gopal Rajaram Faujdar. Strength training, cardio, personal training, yoga & more.",
};

const aboutHighlights = [
  { number: "9+", label: "Years of Training" },
  { number: "4.6★", label: "Member Rating" },
  { number: "180+", label: "Public Reviews" },
  { number: "2017", label: "Established" },
  { number: "🥇", label: "National Champion 2026" },
  { number: "5,000+", label: "Sq Ft Training Space" },
];

const gymServices = [
  {
    icon: "dumbbell",
    title: "Strength & Resistance Training",
    desc: "Commercial-grade Jerai and Being Strong equipment, Olympic platforms, and free-weight stations for serious strength development.",
  },
  {
    icon: "zap",
    title: "Cardio Zone",
    desc: "Dedicated cardio deck with treadmills, cross-trainers, and functional conditioning equipment for endurance and fat loss.",
  },
  {
    icon: "users",
    title: "Personal Training",
    desc: "One-on-one coaching from certified trainers who tailor programs to your body type, goals, and schedule.",
  },
  {
    icon: "heart",
    title: "Nutrition Support",
    desc: "Practical, sustainable nutrition guidance to complement your training — no fad diets, just science-backed advice.",
  },
  {
    icon: "flame",
    title: "Yoga & Flexibility",
    desc: "Dedicated yoga sessions for mobility, recovery, and mental focus — essential for injury prevention and overall well-being.",
  },
  {
    icon: "shield",
    title: "Locker & Amenities",
    desc: "Secure locker facility, clean changing rooms, and a welcoming environment where you can focus entirely on your workout.",
  },
];

const achievements = [
  {
    year: "2026",
    medal: "🥇",
    result: "1st Place — National Champion",
    event: "IBBF 16th Men's Junior/Masters Championship",
    category: "Masters 50–60 Years, Above 80 kg",
    weight: "83.30 kg",
    representing: "Maharashtra",
    badge: "National Gold Medalist",
    highlight:
      "Captured the gold medal on the national stage, showcasing peerless conditioning, symmetry, and championship readiness.",
  },
  {
    year: "2024",
    medal: "🥉",
    result: "3rd Place — National Bronze",
    event: "14th Junior/Masters/Divyang National Championship",
    category: "Masters 40–49 Years, Above 80 kg",
    weight: "83.40 kg",
    representing: "Maharashtra",
    badge: "National Podium",
    highlight:
      "Secured 3rd place representing Maharashtra against India's most elite heavyweight masters athletes.",
  },
];

const philosophyPillars = [
  {
    number: "01",
    title: "Intent Over Ego",
    copy: "Every exercise, weight, and movement is selected with biomechanical purpose. We engineer capacity and injury resistance, not reckless numbers.",
  },
  {
    number: "02",
    title: "Discipline Outlasts Motivation",
    copy: "Motivation is a fleeting spark; discipline is the enduring engine. We train our members to show up when energy is low and progress feels subtle.",
  },
  {
    number: "03",
    title: "Exercise Science & Recovery",
    copy: "Hypertrophy and athletic conditioning are rooted in scientific overload, proper joint alignment, intelligent nutrition, and dedicated recovery.",
  },
  {
    number: "04",
    title: "An Inclusive Iron Sanctuary",
    copy: "Whether someone is stepping into a gym for the very first time or an athlete is preparing for the competitive stage, everyone trains with equal respect.",
  },
];

const milestones = [
  {
    year: "2017",
    title: "The Inception",
    desc: "Gopal Rajaram Faujdar establishes Muscle Engineers in Virar West with a mission to bring true exercise science, discipline, and high-standard equipment to the community.",
  },
  {
    year: "2018",
    title: "Early Recognition",
    desc: "The gym gains early traction in the Virar fitness community. A Fitternity walkthrough video showcases the facility, drawing new members from across Vasai-Virar.",
  },
  {
    year: "2020",
    title: "Facility Expansion",
    desc: "Scaled up to 5,000+ square feet across multiple floors at Kingston Court, near Old Viva College. Added commercial Jerai and Being Strong machinery, Olympic platforms, and a functional cardio deck.",
  },
  {
    year: "2023",
    title: "Community Milestone",
    desc: "Crosses 150+ public reviews with a consistent 4.6★ rating. Personal training, nutrition support, and yoga classes are added to the offerings.",
  },
  {
    year: "2024",
    title: "National Podium",
    desc: "Founder Gopal Faujdar secures 3rd place (Bronze) in the Above 80 kg Masters category at the 14th IBBF National Championship, putting Muscle Engineers on the national bodybuilding map.",
  },
  {
    year: "2026",
    title: "National Championship Gold",
    desc: "Achieves 1st Place (Gold Medal) at the IBBF 16th Men's National Championship. 180+ public reviews and growing — the gym's ethos is validated: led by a founder who lives the discipline every day.",
  },
];

export default function AboutPage() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero__media">
            <Image
              src="/images/about-hero-banner.png"
              alt="Muscle Engineers - Built from the passion to build strength"
              fill
              sizes="100vw"
              priority
              className="about-hero__image"
            />
          </div>
          <div className="about-hero__overlay" />
          <div className="about-hero__content page-shell">
            <Link href="/" className="facility-page-hero__back">
              <ArrowLeft size={16} strokeWidth={1.6} /> Back to home
            </Link>
            <p className="section-label section-label--light reveal" data-scroll>
              Our Story • Estd. 2017 • Virar West, Maharashtra
            </p>
            <h1 className="display-heading display-heading--light reveal reveal--up" data-scroll>
              Built by a <em>competitor.</em>
              <br />
              Built for people who want to become <em>stronger.</em>
            </h1>
            <p className="about-hero__sub reveal reveal--up" data-scroll>
              Established in 2017, Muscle Engineers has grown alongside the fitness community
              of Virar — from a single floor of iron to a 5,000+ sq ft training hub trusted by
              180+ reviewed members and led by a national champion.
            </p>
          </div>
        </section>

        {/* Highlights Strip */}
        <section className="about-highlights section-dark">
          <div className="page-shell">
            <div className="about-highlights__grid">
              {aboutHighlights.map((h) => (
                <div className="about-highlight reveal reveal--up" data-scroll key={h.label}>
                  <span className="about-highlight__number">{h.number}</span>
                  <span className="about-highlight__label">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Gym Story Section */}
        <section className="about-gym-story section-light" id="our-story">
          <div className="page-shell">
            <div className="about-gym-story__header">
              <div>
                <p className="section-label reveal" data-scroll>
                  The Muscle Engineers Story
                </p>
                <h2 className="display-heading reveal reveal--up" data-scroll>
                  More than a gym — <em>a training culture.</em>
                </h2>
              </div>
              <p className="about-gym-story__subtitle reveal reveal--up" data-scroll>
                What started as a single-floor training space in Virar West has evolved into one of
                the most trusted fitness communities in Vasai-Virar, with a 4.6★ rating across 180+ public reviews.
              </p>
            </div>

            <div className="about-gym-story__content reveal reveal--up" data-scroll>
              <div className="about-gym-story__text">
                <p>
                  Muscle Engineers was founded in 2017 with a simple idea — build a place where
                  people can train seriously, develop discipline, and become stronger. Not a franchise.
                  Not a chain. A gym built by someone who lives the sport.
                </p>
                <p>
                  Located at Kingston Court, near Old Viva College in Virar West, the facility has
                  grown to over 5,000 square feet across multiple floors — equipped with commercial-grade
                  Jerai and Being Strong machinery, Olympic platforms, a dedicated cardio deck, and
                  spaces for yoga and personal training.
                </p>
                <p>
                  Years later, that philosophy continues to be lived by its founder,{" "}
                  <strong>Gopal Rajaram Faujdar</strong>, who remains active in competitive bodybuilding
                  — capturing a National Gold Medal at the IBBF 16th Men&apos;s Championship in 2026.
                  That&apos;s significantly more credible than generic fitness marketing.
                </p>
              </div>

              <div className="about-gym-story__trust">
                <div className="trust-badge">
                  <Star size={20} strokeWidth={1.5} />
                  <div>
                    <span className="trust-badge__value">4.6 / 5</span>
                    <span className="trust-badge__label">Average Rating</span>
                  </div>
                </div>
                <div className="trust-badge">
                  <Users size={20} strokeWidth={1.5} />
                  <div>
                    <span className="trust-badge__value">180+</span>
                    <span className="trust-badge__label">Public Reviews</span>
                  </div>
                </div>
                <div className="trust-badge">
                  <MapPin size={20} strokeWidth={1.5} />
                  <div>
                    <span className="trust-badge__value">Virar West</span>
                    <span className="trust-badge__label">Vasai-Virar, Maharashtra</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="about-services section-dark" id="services">
          <div className="page-shell">
            <div className="about-services__header">
              <div>
                <p className="section-label section-label--light reveal" data-scroll>
                  What We Offer
                </p>
                <h2 className="display-heading display-heading--light reveal reveal--up" data-scroll>
                  Everything you need to <em>train seriously.</em>
                </h2>
              </div>
              <p className="about-services__subtitle reveal reveal--up" data-scroll>
                From heavy iron to guided yoga, nutrition coaching to personal training —
                Muscle Engineers is designed for complete athletic development.
              </p>
            </div>

            <div className="about-services__grid">
              {gymServices.map((s) => {
                const IconComponent = s.icon === "dumbbell" ? Dumbbell : s.icon === "zap" ? Zap : s.icon === "users" ? Users : s.icon === "heart" ? Heart : s.icon === "flame" ? Flame : Shield;
                return (
                  <article className="service-card reveal reveal--up" data-scroll key={s.title}>
                    <div className="service-card__icon">
                      <IconComponent size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className="service-card__title">{s.title}</h3>
                    <p className="service-card__desc">{s.desc}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Founder Story Section */}
        <section className="about-founder section-dark" id="founder">
          <div className="page-shell about-founder__layout">
            {/* Left: Interactive Founder Gallery */}
            <div className="about-founder__visual reveal reveal--clip" data-scroll>
              <FounderGallery />
            </div>

            {/* Right: Narrative Story */}
            <div className="about-founder__copy">
              <span className="section-label section-label--light reveal" data-scroll>
                Founder Profile
              </span>
              <h2 className="display-heading display-heading--light reveal reveal--up" data-scroll>
                Gopal Rajaram <em>Faujdar</em>
              </h2>
              <p className="about-founder__tagline reveal reveal--up" data-scroll>
                Founder & Fitness Entrepreneur, Muscle Engineers Fitness Hub
              </p>

              <div className="about-founder__text reveal reveal--up" data-scroll>
                <p>
                  At the heart of Muscle Engineers is <strong>Gopal Rajaram Faujdar</strong>, a fitness
                  entrepreneur and competitive bodybuilder whose personal journey in the sport has
                  defined the soul and standard of the gym.
                </p>
                <p>
                  Established in 2017 in Virar West, Gopal set out to create more than just a place to
                  work out. His vision was to engineer an environment where everyday individuals could
                  develop authentic strength, transform their physique, build unshakeable confidence,
                  and adopt fitness as a lifelong discipline.
                </p>
                <p>
                  His commitment extends far beyond the gym floor. Representing Maharashtra on the
                  national bodybuilding stage, Gopal competes in the Masters heavyweight category at the
                  highest level of the sport. His relentless pursuit of excellence ensures that Muscle
                  Engineers is led not by a distant proprietor, but by an athlete who actively lives the
                  discipline he asks of every member.
                </p>
              </div>

              {/* Pull-Quote Card */}
              <blockquote className="about-quote reveal reveal--up" data-scroll>
                <p className="about-quote__text">
                  “Discipline builds strength, consistency builds results, and fitness builds a better
                  life. Show up when motivation disappears, stay consistent when progress feels slow,
                  and constantly challenge yourself to become stronger.”
                </p>
                <cite className="about-quote__author">
                  — Gopal Rajaram Faujdar, <span>Founder</span>
                </cite>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Verified Championship Record */}
        <section className="about-achievements section-dark" id="achievements">
          <div className="page-shell">
            <div className="about-achievements__header">
              <div>
                <p className="section-label section-label--light reveal" data-scroll>
                  Verified National Record
                </p>
                <h2 className="display-heading display-heading--light reveal reveal--up" data-scroll>
                  Walking the talk on the <em>national stage.</em>
                </h2>
              </div>
              <p className="about-achievements__subtitle reveal reveal--up" data-scroll>
                Official competitive bodybuilding records published by the Indian Body Building
                Federation (IBBF), representing the State of Maharashtra.
              </p>
            </div>

            <div className="about-achievements__grid">
              {achievements.map((item) => (
                <article className="achievement-card reveal reveal--up" data-scroll key={item.year}>
                  <div className="achievement-card__top">
                    <span className="achievement-card__year">{item.year}</span>
                    <span className="achievement-card__badge">{item.badge}</span>
                  </div>

                  <div className="achievement-card__result-row">
                    <span className="achievement-card__medal" aria-hidden="true">
                      {item.medal}
                    </span>
                    <div>
                      <h3 className="achievement-card__result">{item.result}</h3>
                      <p className="achievement-card__event">{item.event}</p>
                    </div>
                  </div>

                  <div className="achievement-card__meta-grid">
                    <div className="achievement-card__meta-item">
                      <span className="meta-label">Category</span>
                      <span className="meta-val">{item.category}</span>
                    </div>
                    <div className="achievement-card__meta-item">
                      <span className="meta-label">Competition Weight</span>
                      <span className="meta-val">{item.weight}</span>
                    </div>
                    <div className="achievement-card__meta-item">
                      <span className="meta-label">Representing</span>
                      <span className="meta-val">{item.representing}</span>
                    </div>
                  </div>

                  <p className="achievement-card__highlight">{item.highlight}</p>
                </article>
              ))}
            </div>

            {/* Trajectory Banner */}
            <div className="about-trajectory reveal reveal--up" data-scroll>
              <div className="about-trajectory__icon">
                <Trophy size={28} strokeWidth={1.5} />
              </div>
              <div className="about-trajectory__content">
                <h3>The 2024 ➔ 2026 Championship Progression</h3>
                <p>
                  From Bronze (3rd Place) in 2024 to National Gold (1st Place) in 2026. This journey
                  embodies the foundation of Muscle Engineers: zero complacency, meticulous
                  conditioning, and proof that with unwavering consistency, you can elevate your peak
                  at any stage of life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Pillars */}
        <section className="about-pillars section-light" id="philosophy">
          <div className="page-shell">
            <div className="about-pillars__header">
              <div>
                <p className="section-label reveal" data-scroll>
                  The Muscle Engineers Doctrine
                </p>
                <h2 className="display-heading reveal reveal--up" data-scroll>
                  Our four pillars of <em>strength.</em>
                </h2>
              </div>
              <p className="about-pillars__subtitle reveal reveal--up" data-scroll>
                Every piece of equipment, coaching program, and community standard in our facility is
                guided by these four core commitments.
              </p>
            </div>

            <div className="about-pillars__grid">
              {philosophyPillars.map((p) => (
                <article className="pillar-card reveal reveal--up" data-scroll key={p.number}>
                  <span className="pillar-card__num">{p.number}</span>
                  <h3 className="pillar-card__title">{p.title}</h3>
                  <p className="pillar-card__copy">{p.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline: 2017 to Present */}
        <section className="about-timeline section-dark" id="timeline">
          <div className="page-shell">
            <div className="about-timeline__header">
              <p className="section-label section-label--light reveal" data-scroll>
                The Evolution
              </p>
              <h2 className="display-heading display-heading--light reveal reveal--up" data-scroll>
                From vision to <em>benchmark.</em>
              </h2>
            </div>

            <div className="about-timeline__track">
              {milestones.map((m, idx) => (
                <div className="timeline-item reveal reveal--up" data-scroll key={m.year}>
                  <div className="timeline-item__year-wrap">
                    <span className="timeline-item__year">{m.year}</span>
                    <div className="timeline-item__dot" />
                  </div>
                  <div className="timeline-item__content">
                    <h3 className="timeline-item__title">{m.title}</h3>
                    <p className="timeline-item__desc">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="facility-page-cta section-dark">
          <div className="page-shell facility-page-cta__layout">
            <div>
              <p className="section-label section-label--light reveal" data-scroll>
                Experience The Culture
              </p>
              <h2 className="display-heading display-heading--light reveal reveal--up" data-scroll>
                Train with <em>purpose.</em>
                <br />
                Build with <em>discipline.</em>
              </h2>
              <p className="facility-page-cta__copy reveal reveal--up" data-scroll>
                Step into Muscle Engineers Fitness Hub in Virar West and experience a facility
                steeped in real training intent, championship standards, and community support.
              </p>
            </div>
            <div className="facility-page-cta__actions reveal reveal--up" data-scroll>
              <Link href="/facility" className="btn btn--primary">
                Explore The Facility <ArrowUpRight size={16} strokeWidth={1.5} />
              </Link>
              <Link href="/#membership" className="action-link action-link--light">
                Membership Plans <ArrowUpRight size={16} strokeWidth={1.4} />
              </Link>
              <a href="tel:+917420883355" className="action-link action-link--light">
                Speak to a Coach <ArrowUpRight size={16} strokeWidth={1.4} />
              </a>
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
