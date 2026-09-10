import { ArrowUpRight, Clock3, MapPin, Phone } from "lucide-react";

import { site } from "@/lib/site-data";

const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=19.45757168182716%2C72.80142777515738";

export function Location() {
  return (
    <section className="location section-light" id="location" aria-labelledby="location-title">
      <div className="page-shell location__layout">
        <div className="location__intro">
          <p className="section-label reveal" data-scroll>
            Visit the hub
          </p>
          <h2 className="display-heading reveal reveal--up" data-scroll id="location-title">
            Find us in
            <br />
            <em>Virar West.</em>
          </h2>
          <a className="action-link location__directions" href={directionsUrl} target="_blank" rel="noreferrer">
            Get directions <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
          </a>
        </div>

        <div className="location__details reveal reveal--up" data-scroll id="contact">
          <div className="location-detail">
            <MapPin size={19} strokeWidth={1.35} aria-hidden="true" />
            <div>
              <p className="location-detail__label">Address</p>
              <address>
                {site.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
            </div>
          </div>
          <div className="location-detail">
            <Phone size={19} strokeWidth={1.35} aria-hidden="true" />
            <div>
              <p className="location-detail__label">Call</p>
              <a href={site.phoneHref}>{site.phone}</a>
            </div>
          </div>
          <div className="location-detail">
            <Clock3 size={19} strokeWidth={1.35} aria-hidden="true" />
            <div>
              <p className="location-detail__label">Hours</p>
              <p>
                Mon–Sat: 5:30 AM – 11:00 PM
                <br />
                Sun: 8:00 AM – 8:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-shell location__map reveal reveal--clip" data-scroll>
        <iframe
          title="Muscle Engineers Fitness Hub location in Virar West"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3761.953497013742!2d72.80142777515738!3d19.45757168182716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7aa284baaaaab%3A0x862aefe61be6500c!2sMuscle%20Engineers!5e0!3m2!1sen!2sin!4v1789034610806!5m2!1sen!2sin"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
