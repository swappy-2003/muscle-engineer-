"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Dumbbell, HeartPulse, Target } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const coachingFocus = [
  { icon: Dumbbell, title: "Strength coaching", copy: "Build sound movement patterns and real capacity." },
  { icon: Target, title: "Goal-led plans", copy: "Training that follows where you want to go." },
  { icon: HeartPulse, title: "Sustainable support", copy: "Guidance that works with your life, not against it." },
];

const trainersData = [
  {
    name: "Roshan Mandre",
    role: "Head Strength Coach",
    specialty: "Hypertrophy & Powerlifting",
    experience: "8+ Years Experience",
    image: "/images/trainers/roshan-mandre.png",
  },
  {
    name: "Suresh Tumbade",
    role: "Senior Fitness Coach",
    specialty: "Functional Movement & Conditioning",
    experience: "7+ Years Experience",
    image: "/images/trainers/suresh-tumbade.png",
  },
  {
    name: "Suraj Sharma",
    role: "Physique & Transformation Specialist",
    specialty: "Body Recomposition & Fat Loss",
    experience: "6+ Years Experience",
    image: "/images/trainers/suraj-sharma.png",
  },
  {
    name: "Sudhir Mankar",
    role: "Strength & Mobility Coach",
    specialty: "Biomechanics & Injury Prevention",
    experience: "6+ Years Experience",
    image: "/images/trainers/sudhir-mankar.png",
  },
  {
    name: "Sagar Salawat",
    role: "Athletic Performance Coach",
    specialty: "Endurance & Explosive Power",
    experience: "5+ Years Experience",
    image: "/images/trainers/sagar-salawat.png",
  },
  {
    name: "Manish Pawar",
    role: "Personal Transformation Coach",
    specialty: "Custom Training & Lifestyle Coaching",
    experience: "5+ Years Experience",
    image: "/images/trainers/manish-pawar.png",
  },
];

const extendedTrainers = [...trainersData, ...trainersData, ...trainersData];
const N = trainersData.length;

export function Trainers() {
  const [currentIndex, setCurrentIndex] = useState(N);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const isAnimating = useRef(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const currentIndexRef = useRef(currentIndex);
  currentIndexRef.current = currentIndex;

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);

    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    animationTimeoutRef.current = setTimeout(() => {
      isAnimating.current = false;
    }, 700);
  }, []);

  const prevSlide = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);

    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    animationTimeoutRef.current = setTimeout(() => {
      isAnimating.current = false;
    }, 700);
  }, []);

  const goToSlide = useCallback((targetRealIndex: number) => {
    if (isAnimating.current) return;
    const currentReal = currentIndexRef.current % N;
    if (targetRealIndex === currentReal) return;

    let diff = targetRealIndex - currentReal;
    if (diff > N / 2) {
      diff -= N;
    } else if (diff < -N / 2) {
      diff += N;
    }

    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + diff);

    if (animationTimeoutRef.current) clearTimeout(animationTimeoutRef.current);
    animationTimeoutRef.current = setTimeout(() => {
      isAnimating.current = false;
    }, 700);
  }, []);

  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }

    const current = currentIndexRef.current;
    if (current >= N * 2) {
      setIsTransitioning(false);
      setCurrentIndex(current - N);
    } else if (current < N) {
      setIsTransitioning(false);
      setCurrentIndex(current + N);
    } else {
      isAnimating.current = false;
    }
  };

  useEffect(() => {
    if (!isTransitioning) {
      const frame1 = requestAnimationFrame(() => {
        const frame2 = requestAnimationFrame(() => {
          setIsTransitioning(true);
          isAnimating.current = false;
        });
        return () => cancelAnimationFrame(frame2);
      });
      return () => cancelAnimationFrame(frame1);
    }
  }, [isTransitioning]);

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  // Auto-play timer (4.5s)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setIsPaused(false);
  };

  const activeRealIndex = currentIndex % N;

  return (
    <section className="trainers section-light" id="trainers" aria-labelledby="trainers-title">
      <div className="page-shell trainers__layout">
        <div className="trainers__copy">
          <p className="section-label reveal" data-scroll>
            Meet the team
          </p>
          <h2 className="display-heading reveal reveal--up" data-scroll id="trainers-title">
            Coached with
            <br />
            intent. Built
            <br />
            for <em>you.</em>
          </h2>
          <p className="trainers__body reveal reveal--up" data-scroll>
            Our coaches bring attention, structure and accountability to every session—whether you are beginning again or pushing further.
          </p>
          <a className="action-link trainers__cta reveal reveal--up" data-scroll href="tel:+917420883355">
            Speak to a coach <ArrowUpRight size={17} strokeWidth={1.4} aria-hidden="true" />
          </a>
        </div>

        <div
          className="trainers__slider-wrapper reveal reveal--up"
          data-scroll
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="trainers__slider-header">
            <span className="trainers__slider-counter">
              {String(activeRealIndex + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
            </span>
            <div className="trainers__slider-nav">
              <button
                type="button"
                className="trainers__slider-btn"
                onClick={prevSlide}
                aria-label="Previous coach"
              >
                <ArrowLeft size={16} strokeWidth={2} />
              </button>
              <button
                type="button"
                className="trainers__slider-btn"
                onClick={nextSlide}
                aria-label="Next coach"
              >
                <ArrowRight size={16} strokeWidth={2} />
              </button>
            </div>
          </div>

          <div
            className="trainers__slider-viewport"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="trainers__slider-track"
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: isMobile
                  ? `translateX(calc(-${currentIndex} * (100% + 12px)))`
                  : `translateX(calc(-${currentIndex} * (50% + 8px)))`,
                transition: isTransitioning
                  ? "transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1)"
                  : "none",
              }}
            >
              {extendedTrainers.map((trainer, index) => (
                <article className="trainer-card" key={`${trainer.name}-${index}`}>
                  <Image
                    src={trainer.image}
                    alt={`${trainer.name} - ${trainer.role} at Muscle Engineers`}
                    fill
                    sizes="(max-width: 800px) 100vw, 25vw"
                    className="trainer-card__image"
                  />
                  <div className="trainer-card__scrim" />
                  <div className="trainer-card__content">
                    <span className="trainer-card__badge">{trainer.specialty}</span>
                    <h3 className="trainer-card__name">{trainer.name}</h3>
                    <p className="trainer-card__role">{trainer.role}</p>
                    <span className="trainer-card__meta">{trainer.experience}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="trainers__slider-dots">
            {trainersData.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`trainers__slider-dot ${idx === activeRealIndex ? "trainers__slider-dot--active" : ""}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to coach ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="page-shell trainers__focus">
        {coachingFocus.map(({ icon: Icon, title, copy }) => (
          <article className="trainer-focus reveal reveal--up" data-scroll key={title}>
            <Icon size={20} strokeWidth={1.3} aria-hidden="true" />
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
