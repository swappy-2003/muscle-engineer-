import Image from "next/image";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";

import { images } from "@/lib/site-data";

export function Hero() {
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
        </div>
        <div className="hero-media__wash" />
      </div>

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
            <a className="watch-link" href="#facility">
              <span className="watch-link__icon">
                <Play size={10} fill="currentColor" strokeWidth={1.5} aria-hidden="true" />
              </span>
              Watch our story
            </a>
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
