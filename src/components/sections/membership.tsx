import { ArrowUpRight, Check } from "lucide-react";

import { memberships } from "@/lib/site-data";

export function Membership() {
  return (
    <section className="membership section-dark" id="membership" aria-labelledby="membership-title">
      <div className="page-shell">
        <div className="membership__top">
          <p className="section-label section-label--light reveal" data-scroll>
            Membership
          </p>
          <p className="membership__aside reveal reveal--up" data-scroll>
            Starting prices are a guide. Talk to our team to find the right way in.
          </p>
        </div>
        <h2 className="display-heading display-heading--light membership__title reveal reveal--up" data-scroll id="membership-title">
          Invest in a
          <br />
          <em>stronger</em> tomorrow.
        </h2>

        <div className="membership-options">
          {memberships.map((option, index) => (
            <article
              className={`membership-option ${option.featured ? "membership-option--featured" : ""} reveal reveal--up`}
              data-scroll
              key={option.name}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="membership-option__head">
                <span>{option.featured ? "Most considered" : `0${index + 1}`}</span>
                {option.featured && <Check size={15} strokeWidth={1.5} aria-hidden="true" />}
              </div>
              <h3>{option.name}</h3>
              <p className="membership-option__price">
                <span>From</span>
                {option.price}
              </p>
              <p className="membership-option__copy">{option.description}</p>
              <a href="tel:+917420883355" className="membership-option__link">
                Enquire <ArrowUpRight size={17} strokeWidth={1.45} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>

        <a className="membership-cta action-link action-link--light" href="tel:+917420883355">
          Join now <ArrowUpRight size={18} strokeWidth={1.45} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
