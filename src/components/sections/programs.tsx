import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const programs = [
  {
    title: "Strength\ntraining",
    eyebrow: "01 / Build capacity",
    image: { src: "/images/programs/strength-training.png", alt: "Heavy dumbbell rack for strength training" },
    className: "program-card--feature",
    position: "center",
  },
  {
    title: "Weight\nloss",
    eyebrow: "02 / Move with intent",
    image: { src: "/images/programs/weight-loss.png", alt: "Athlete training with battle ropes" },
    className: "program-card--standard",
    position: "center",
  },
  {
    title: "Nutrition",
    eyebrow: "03 / Eat for the work",
    image: { src: "/images/programs/nutrition.png", alt: "Balanced high-protein meal for training" },
    className: "program-card--standard",
    position: "center",
  },
  {
    title: "Cardio",
    eyebrow: "04 / Build endurance",
    image: { src: "/images/programs/cardio.png", alt: "Athlete training on an air bike" },
    className: "program-card--standard",
    position: "center",
  },
  {
    title: "CrossFit",
    eyebrow: "05 / Train with power",
    image: { src: "/images/programs/crossfit.png", alt: "Athlete doing a kettlebell swing" },
    className: "program-card--standard",
    position: "center",
  },
  {
    title: "Personal\ntraining",
    eyebrow: "06 / Built around you",
    image: { src: "/images/programs/personal-training.png", alt: "Personal trainer coaching a client" },
    className: "program-card--wide",
    position: "25% center",
  },
];

export function Programs() {
  return (
    <section className="programs section-dark" id="programs" aria-labelledby="programs-title">
      <div className="page-shell">
        <div className="programs__heading-row">
          <p className="section-label section-label--light reveal" data-scroll>
            What we build
          </p>
          <p className="programs__intro reveal reveal--up" data-scroll>
            Clear training paths, tuned to the work you want to do.
          </p>
        </div>
        <h2 className="display-heading display-heading--light programs__title reveal reveal--up" data-scroll id="programs-title">
          Tailored for
          <br />
          <em>your</em> goals.
        </h2>

        <div className="program-grid">
          {programs.map((program, index) => (
            <a
              href="#membership"
              className={`program-card ${program.className} reveal reveal--clip`}
              data-scroll
              key={program.title}
              style={{ transitionDelay: `${Math.min(index, 2) * 70}ms` }}
            >
              <Image
                src={program.image.src}
                alt={program.image.alt}
                fill
                sizes={index === 0 || program.className === "program-card--wide" ? "(max-width: 800px) 100vw, 50vw" : "(max-width: 800px) 50vw, 25vw"}
                className="program-card__image"
                style={{ objectPosition: program.position }}
              />
              <span className="program-card__scrim" />
              <span className="program-card__meta">{program.eyebrow}</span>
              <span className="program-card__title">
                {program.title.split("\n").map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </span>
              <span className="program-card__arrow" aria-hidden="true">
                <ArrowUpRight size={21} strokeWidth={1.3} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
