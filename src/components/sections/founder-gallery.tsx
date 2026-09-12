"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Expand } from "lucide-react";

const founderImages = [
  {
    src: "/images/founder/gopal-1.png",
    alt: "Gopal Rajaram Faujdar - Founder of Muscle Engineers & IBBF National Champion",
    tag: "Championship Physique",
    caption: "Discipline, conditioning, and stage readiness — Gopal Faujdar leading by example.",
  },
  {
    src: "/images/founder/gopal-2.png",
    alt: "Gopal Faujdar in conditioning training",
    tag: "Training Routine",
    caption: "Heavy compound movements and deliberate volume: the foundational training doctrine.",
  },
  {
    src: "/images/founder/gopal-3.png",
    alt: "Gopal Faujdar physique front pose",
    tag: "National Stage",
    caption: "Representing Maharashtra at the IBBF National Championships.",
  },
  {
    src: "/images/founder/gopal-4.png",
    alt: "Gopal Faujdar back & lat spread focus",
    tag: "Hypertrophy Science",
    caption: "Sculpting symmetry, thickness, and muscular density through decades of dedication.",
  },
  {
    src: "/images/founder/gopal-5.png",
    alt: "Gopal Faujdar training on gym floor",
    tag: "Gym Culture",
    caption: "On the gym floor at Muscle Engineers: mentoring athletes and practicing what is preached.",
  },
  {
    src: "/images/founder/gopal-6.png",
    alt: "Gopal Faujdar side chest & arm development",
    tag: "Conditioning",
    caption: "Competition-ready vascularity and peak muscular definition at 83+ kg.",
  },
  {
    src: "/images/founder/gopal-7.png",
    alt: "Gopal Faujdar posing routine",
    tag: "Dedication",
    caption: "Showing up when motivation disappears: the core principle behind Muscle Engineers.",
  },
  {
    src: "/images/founder/gopal-8.png",
    alt: "Gopal Faujdar portrait in athletic wear",
    tag: "Leadership",
    caption: "Founder, entrepreneur, and athlete — shaping the fitness culture of Vasai-Virar.",
  },
];

export function FounderGallery() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const prevPhoto = () => {
    setSelectedIdx((prev) => (prev <= 0 ? founderImages.length - 1 : prev - 1));
  };

  const nextPhoto = () => {
    setSelectedIdx((prev) => (prev >= founderImages.length - 1 ? 0 : prev + 1));
  };

  const current = founderImages[selectedIdx];

  return (
    <div className="founder-gallery">
      {/* Featured Showcase */}
      <div className="founder-gallery__stage">
        <div className="founder-gallery__main-image">
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            priority
            className="founder-gallery__img"
          />
          <div className="founder-gallery__scrim" />
          <div className="founder-gallery__badge">{current.tag}</div>

          <div className="founder-gallery__caption-box">
            <p className="founder-gallery__caption">{current.caption}</p>
            <span className="founder-gallery__counter">
              {String(selectedIdx + 1).padStart(2, "0")} / {String(founderImages.length).padStart(2, "0")}
            </span>
          </div>

          <button
            type="button"
            className="founder-gallery__arrow founder-gallery__arrow--prev"
            onClick={prevPhoto}
            aria-label="Previous photo"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            type="button"
            className="founder-gallery__arrow founder-gallery__arrow--next"
            onClick={nextPhoto}
            aria-label="Next photo"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Thumbnails Row */}
      <div className="founder-gallery__thumbnails" role="tablist" aria-label="Founder photo gallery">
        {founderImages.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            role="tab"
            aria-selected={idx === selectedIdx}
            className={`founder-gallery__thumb-btn ${idx === selectedIdx ? "founder-gallery__thumb-btn--active" : ""}`}
            onClick={() => setSelectedIdx(idx)}
            aria-label={`Select photo ${idx + 1}: ${item.tag}`}
          >
            <Image
              src={item.src}
              alt=""
              width={80}
              height={105}
              className="founder-gallery__thumb-img"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
