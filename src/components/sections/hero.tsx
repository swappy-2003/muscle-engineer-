"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { images } from "@/lib/site-data";

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isRevealed, setIsRevealed] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 800;
      setIsMobile(mobile);
      if (mobile) {
        const alreadySeen = typeof window !== "undefined" && sessionStorage.getItem("hero_intro_seen") === "true";
        const hasHash = typeof window !== "undefined" && Boolean(window.location.hash);

        if (alreadySeen || hasHash) {
          setIsRevealed(true);
          document.body.classList.remove("mobile-intro-active");
          try {
            sessionStorage.setItem("hero_intro_seen", "true");
          } catch {}
        } else {
          setIsRevealed(false);
          document.body.classList.add("mobile-intro-active");
        }
      } else {
        setIsRevealed(true);
        document.body.classList.remove("mobile-intro-active");
      }
    };

    checkMobile();

    const onHashChange = () => {
      if (window.location.hash) {
        handleReveal();
      }
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      document.body.classList.remove("mobile-intro-active");
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const handleReveal = () => {
    setIsRevealed(true);
    document.body.classList.remove("mobile-intro-active");
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem("hero_intro_seen", "true");
      } catch {}
    }
    // Ensure video loops smoothly as ambient background after reveal
    if (videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
      videoRef.current.play().catch(() => {});
    }
    window.dispatchEvent(new Event("resize"));
  };

  const toggleSound = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  useEffect(() => {
    if (isMobile && !isRevealed && videoRef.current) {
      const video = videoRef.current;
      video.muted = true;
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // If browser policy blocks autoplay, reveal immediately
          handleReveal();
        });
      }
    }
  }, [isMobile, isRevealed]);

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-media" aria-hidden="true">
        <div className="hero-media__inner" data-scroll data-scroll-speed="-0.18">
          <Image
            src={images.hero.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-media__image"
          />
          <video
            ref={videoRef}
            src="/images/Video-2542_1.mp4"
            className="hero-media__mobile-video"
            playsInline
            autoPlay
            muted={isMuted}
            loop={isRevealed}
            onEnded={handleReveal}
            preload="auto"
          />
        </div>
        <div className="hero-media__wash" />
      </div>

      {isMobile && !isRevealed && (
        <div
          className="hero-mobile-intro-overlay"
          onClick={handleReveal}
          onTouchEnd={handleReveal}
          role="button"
          tabIndex={0}
          aria-label="Tap screen to enter site"
        >
          <button
            type="button"
            className="hero-mobile-sound-btn"
            onClick={toggleSound}
            onTouchEnd={toggleSound}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span>{isMuted ? "Unmute" : "Sound On"}</span>
          </button>

          <div className="hero-mobile-skip-hint">
            <span>Tap screen to skip</span>
          </div>
        </div>
      )}

      <div className="hero-content page-shell">
        <p className="hero-kicker load-reveal load-reveal--1">The culture of exercise science</p>
        <h1 className="hero-title" id="hero-title">
          <span className="load-reveal load-reveal--2">A stronger</span>
          <span className="load-reveal load-reveal--3">
            <em>You</em> lives here.
          </span>
        </h1>
        <div className="hero-detail load-reveal load-reveal--4">
          <p>
            More than a gym.
            <br />
            A place to build a stronger, healthier version of yourself.
          </p>
          <div className="hero-actions">
            <a className="action-link action-link--light" href="#membership">
              Start your journey <ArrowUpRight size={17} strokeWidth={1.45} aria-hidden="true" />
            </a>
            <Link className="watch-link" href="/about">
              <span className="watch-link__icon">
                <Play size={10} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
              </span>
              Our story &amp; founder
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-bottom page-shell load-reveal load-reveal--5">
        <span className="hero-signature">
          <Image className="hero-logo" src="/images/logo.png" alt="" width={118} height={79} />
          <span>
            Muscle Engineers
            <br />
            Fitness Hub
          </span>
        </span>
        <a className="scroll-cue" href="#about">
          Scroll <ArrowDown size={15} strokeWidth={1.35} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
