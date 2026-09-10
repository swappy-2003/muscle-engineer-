import { Apple, FlaskConical, Gauge, UsersRound } from "lucide-react";

const principles = [
  {
    icon: FlaskConical,
    title: "Science based training",
    copy: "Structured programs for real results.",
  },
  {
    icon: Apple,
    title: "Nutrition guidance",
    copy: "Fuel your goals the right way.",
  },
  {
    icon: UsersRound,
    title: "Expert coaches",
    copy: "Learn from experienced trainers.",
  },
  {
    icon: Gauge,
    title: "For all levels",
    copy: "Beginners to advanced.",
  },
];

export function Philosophy() {
  return (
    <section className="philosophy section-light" id="about" aria-labelledby="philosophy-title">
      <div className="page-shell philosophy__grid">
        <div className="philosophy__intro">
          <p className="section-label reveal" data-scroll>
            Why Muscle Engineers
          </p>
          <h2 className="display-heading reveal reveal--up" data-scroll id="philosophy-title">
            Built on
            <br />
            <em>Science.</em>
            <br />
            Driven by
            <br />
            People.
          </h2>
          <p className="philosophy__body reveal reveal--up" data-scroll>
            Structured training, expert guidance and a community that pushes you to become more.
          </p>
        </div>

        <div className="principles" aria-label="Our approach">
          {principles.map(({ icon: Icon, title, copy }, index) => (
            <article className="principle reveal reveal--up" data-scroll key={title} style={{ transitionDelay: `${index * 70}ms` }}>
              <Icon size={20} strokeWidth={1.35} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
