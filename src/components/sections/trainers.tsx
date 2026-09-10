import Image from "next/image";
import { ArrowUpRight, Dumbbell, HeartPulse, Target } from "lucide-react";

const coachingFocus = [
  { icon: Dumbbell, title: "Strength coaching", copy: "Build sound movement patterns and real capacity." },
  { icon: Target, title: "Goal-led plans", copy: "Training that follows where you want to go." },
  { icon: HeartPulse, title: "Sustainable support", copy: "Guidance that works with your life, not against it." },
];

export function Trainers() {
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

        <div className="trainers__visual reveal reveal--clip" data-scroll>
          <Image
            src="/images/training.jpg"
            alt="Coach-led strength training at Muscle Engineers"
            fill
            sizes="(max-width: 800px) 100vw, 45vw"
            className="trainers__image"
          />
          <span className="trainers__caption">Training is personal.</span>
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
