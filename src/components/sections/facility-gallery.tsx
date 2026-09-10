"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Dumbbell,
  Layers,
  Flame,
  Coffee,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export type FacilityCategory = "all" | "strength" | "machines" | "cardio" | "lounge";

export interface FacilityItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  category: "strength" | "machines" | "cardio" | "lounge";
  categoryLabel: string;
  brand?: string;
  featured?: boolean;
}

const facilityItems: FacilityItem[] = [
  // Cardio & Functional
  {
    id: "main-floor",
    src: "/images/facilites/hero2.png",
    alt: "Muscle Engineers panoramic 5,000 sq ft main training floor",
    title: "Main Training Arena",
    subtitle: "Spacious 5,000+ sq. ft training floor with acoustic ceiling and open layout",
    category: "cardio",
    categoryLabel: "Main Floor",
    brand: "5,000+ Sq Ft",
    featured: true,
  },
  {
    id: "cardio-deck",
    src: "/images/facilites/SmartSelect_20260910_155146_Maps.png",
    alt: "Cardio deck with commercial treadmills and monkey bars",
    title: "Cardio Deck & Monkey Bar Rig",
    subtitle: "High-end commercial treadmills, cross trainers, and integrated monkey bar bridge",
    category: "cardio",
    categoryLabel: "Cardio",
    brand: "Commercial Line",
    featured: true,
  },
  {
    id: "heavy-bag",
    src: "/images/facilites/SmartSelect_20260910_155043_Maps.png",
    alt: "Being Strong combat training station with heavy punching bag",
    title: "Heavy Boxing Bag & Calisthenics Rig",
    subtitle: "Heavy punching bag, multi-grip pull-up handles, and plyometric steps",
    category: "cardio",
    categoryLabel: "Functional",
    brand: "Being Strong®",
  },
  {
    id: "agility-rebounder",
    src: "/images/facilites/SmartSelect_20260910_155115_Maps.png",
    alt: "Being Strong functional agility tower with medicine ball rebounder",
    title: "Agility & Rebounder Rig",
    subtitle: "Multi-station tower with integrated medicine ball trampoline and stall bars",
    category: "cardio",
    categoryLabel: "Functional",
    brand: "Being Strong®",
  },

  // Strength & Free Weights
  {
    id: "free-weights-deck",
    src: "/images/facilites/free-weights.png",
    alt: "Dumbbell racks and adjustable benches under red industrial ceiling",
    title: "Dumbbell & Free Weights Deck",
    subtitle: "Heavy commercial dumbbell racks up to 50kg with adjustable multi-angle benches",
    category: "strength",
    categoryLabel: "Free Weights",
    brand: "Heavy Iron",
    featured: true,
  },
  {
    id: "weights-squat-zone",
    src: "/images/facilites/weights-area.png",
    alt: "Olympic squat racks, plate-loaded leg press, and motivational wall art",
    title: "Squat & Power Zone",
    subtitle: "Olympic power racks, 45-degree leg press, and dedicated heavy lifting space",
    category: "strength",
    categoryLabel: "Strength",
    brand: "Olympic Grade",
  },
  {
    id: "power-rack-cage",
    src: "/images/facilites/SmartSelect_20260910_155218_Maps.png",
    alt: "Power rack with Olympic barbell and color-coded bumper plates",
    title: "Olympic Squat Station",
    subtitle: "Full power cage with safety spotters, Olympic barbell, and bumper plates",
    category: "strength",
    categoryLabel: "Strength",
    brand: "Jerai Fitness®",
  },
  {
    id: "deadlift-platform",
    src: "/images/facilites/SmartSelect_20260910_155233_Maps.png",
    alt: "Deadlift platform and power cage with motivational wall graphics",
    title: "Deadlift & Power Platform",
    subtitle: "Shock-absorbing deadlift floor and heavy squat rack with mirror alignment",
    category: "strength",
    categoryLabel: "Strength",
    brand: "Being Strong®",
  },
  {
    id: "decline-bench",
    src: "/images/facilites/SmartSelect_20260910_155023_Maps.png",
    alt: "Jerai Olympic decline bench press with barbell and weight plates",
    title: "Olympic Decline Bench Press",
    subtitle: "Competition-spec decline press with leg lockdown rollers and Olympic plates",
    category: "strength",
    categoryLabel: "Strength",
    brand: "Jerai Fitness®",
  },

  // Machines & Isolation
  {
    id: "cable-cross",
    src: "/images/facilites/SmartSelect_20260910_155205_Maps.png",
    alt: "Being Strong dual adjustable pulley cable crossover machine",
    title: "Dual Adjustable Cable Cross",
    subtitle: "Multi-angle dual pulley crossover station for chest, back, and functional rehab",
    category: "machines",
    categoryLabel: "Cables",
    brand: "Being Strong®",
    featured: true,
  },
  {
    id: "iso-lateral-row",
    src: "/images/facilites/SmartSelect_20260910_155059_Maps.png",
    alt: "Being Strong plate loaded iso-lateral high row machine",
    title: "Plate-Loaded Iso-Lateral Row",
    subtitle: "Unilateral plate-loaded back machine for deep lat engagement and posture",
    category: "machines",
    categoryLabel: "Isolation",
    brand: "Being Strong®",
  },
  {
    id: "preacher-curl",
    src: "/images/facilites/SmartSelect_20260910_155246_Maps.png",
    alt: "Being Strong ergonomic preacher arm curl machine",
    title: "Biomechanical Preacher Curl",
    subtitle: "Ergonomic bicep curl machine with precision pivot for isolated peak contraction",
    category: "machines",
    categoryLabel: "Arms",
    brand: "Being Strong®",
  },
  {
    id: "pec-fly-rear-delt",
    src: "/images/facilites/SmartSelect_20260910_155007_Maps.png",
    alt: "Jerai dual pectoral fly and rear deltoid machine",
    title: "Dual Pec Fly & Rear Delt",
    subtitle: "Independent rotating arm station for targeted chest flyes and posterior delts",
    category: "machines",
    categoryLabel: "Chest & Shoulders",
    brand: "Jerai Fitness®",
  },
  {
    id: "leg-extension-curl",
    src: "/images/facilites/SmartSelect_20260910_154952_Maps.png",
    alt: "Being Strong pin-loaded leg extension and hamstring machine",
    title: "Leg Extension & Hamstring Curl",
    subtitle: "Pin-selected quad isolation unit with contoured shin pads and range limiter",
    category: "machines",
    categoryLabel: "Legs",
    brand: "Being Strong®",
  },

  // Reception & Lounge
  {
    id: "welcome-reception",
    src: "/images/facilites/reception.png",
    alt: "Muscle Engineers front desk, reception counter and supplement lounge",
    title: "Welcome Desk & Supplement Lounge",
    subtitle: "Front desk, authentic MuscleBlaze nutrition display, and member consultation lounge",
    category: "lounge",
    categoryLabel: "Lounge",
    brand: "Nutrition & Welcome",
    featured: true,
  },
];

const categoryTabs: { key: FacilityCategory; label: string; icon: typeof Dumbbell }[] = [
  { key: "all", label: "All Zones", icon: Sparkles },
  { key: "strength", label: "Strength & Free Weights", icon: Dumbbell },
  { key: "machines", label: "Machines & Cables", icon: Layers },
  { key: "cardio", label: "Cardio & Functional", icon: Flame },
  { key: "lounge", label: "Reception & Lounge", icon: Coffee },
];

export function FacilityGallery() {
  const [activeTab, setActiveTab] = useState<FacilityCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeTab === "all"
      ? facilityItems
      : facilityItems.filter((item) => item.category === activeTab);

  const counts: Record<FacilityCategory, number> = {
    all: facilityItems.length,
    strength: facilityItems.filter((i) => i.category === "strength").length,
    machines: facilityItems.filter((i) => i.category === "machines").length,
    cardio: facilityItems.filter((i) => i.category === "cardio").length,
    lounge: facilityItems.filter((i) => i.category === "lounge").length,
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  const currentLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <div className="facility-showcase">
      {/* Category Filter Pills */}
      <div className="facility-filter-tabs" role="tablist" aria-label="Facility Categories">
        {categoryTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`facility-tab-btn ${isActive ? "facility-tab-btn--active" : ""}`}
              onClick={() => {
                setActiveTab(tab.key);
                setLightboxIndex(null);
              }}
            >
              <Icon size={14} strokeWidth={1.8} className="facility-tab-btn__icon" />
              <span>{tab.label}</span>
              <span className="facility-tab-btn__count">{counts[tab.key]}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Images */}
      <div className="facility-gallery-grid">
        {filteredItems.map((item, index) => {
          const isFeatured = item.featured && activeTab === "all";
          return (
            <div
              key={item.id}
              className={`facility-card ${isFeatured ? "facility-card--featured" : ""}`}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
              aria-label={`View ${item.title}`}
            >
              <div className="facility-card__media">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="facility-card__image"
                />
                <div className="facility-card__overlay" />

                {/* Top Badges */}
                <div className="facility-card__top">
                  <span className="facility-card__category-badge">{item.categoryLabel}</span>
                  {item.brand && (
                    <span className="facility-card__brand-badge">{item.brand}</span>
                  )}
                </div>

                {/* Expand Indicator */}
                <div className="facility-card__expand-icon">
                  <Maximize2 size={16} strokeWidth={2} />
                </div>

                {/* Bottom Content */}
                <div className="facility-card__content">
                  <span className="facility-card__index">0{index + 1}</span>
                  <h3 className="facility-card__title">{item.title}</h3>
                  <p className="facility-card__desc">{item.subtitle}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {currentLightboxItem && (
        <div
          className="facility-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={currentLightboxItem.title}
          onClick={closeLightbox}
        >
          <div className="facility-lightbox__backdrop" />

          {/* Close button */}
          <button
            type="button"
            className="facility-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close modal"
          >
            <X size={24} strokeWidth={2} />
          </button>

          {/* Prev / Next controls */}
          {filteredItems.length > 1 && (
            <>
              <button
                type="button"
                className="facility-lightbox__arrow facility-lightbox__arrow--prev"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous image"
              >
                <ChevronLeft size={28} strokeWidth={2} />
              </button>
              <button
                type="button"
                className="facility-lightbox__arrow facility-lightbox__arrow--next"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
              >
                <ChevronRight size={28} strokeWidth={2} />
              </button>
            </>
          )}

          {/* Modal Content Box */}
          <div
            className="facility-lightbox__dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="facility-lightbox__image-wrapper">
              <Image
                src={currentLightboxItem.src}
                alt={currentLightboxItem.alt}
                fill
                sizes="95vw"
                priority
                className="facility-lightbox__image"
              />
            </div>

            <div className="facility-lightbox__info">
              <div className="facility-lightbox__meta">
                <span className="facility-lightbox__category">
                  {currentLightboxItem.categoryLabel}
                </span>
                {currentLightboxItem.brand && (
                  <span className="facility-lightbox__brand">{currentLightboxItem.brand}</span>
                )}
                <span className="facility-lightbox__counter">
                  {lightboxIndex! + 1} of {filteredItems.length}
                </span>
              </div>
              <h2 className="facility-lightbox__title">{currentLightboxItem.title}</h2>
              <p className="facility-lightbox__desc">{currentLightboxItem.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
