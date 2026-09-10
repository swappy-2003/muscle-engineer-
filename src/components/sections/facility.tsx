import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const gallery = [
  { image: { src: "/images/facilites/reception.png", alt: "Muscle Engineers reception desk and supplement lounge" }, className: "facility-gallery__item--one", position: "center" },
  { image: { src: "/images/facilites/free-weights.png", alt: "Free weights area with dumbbell racks and red ceiling" }, className: "facility-gallery__item--two", position: "center" },
  { image: { src: "/images/facilites/hero2.png", alt: "Muscle Engineers main training floor" }, className: "facility-gallery__item--three", position: "center" },
];

export function Facility() {
  return (
    <section className="facility section-dark" id="facility" aria-labelledby="facility-title">
      <div className="facility__feature">
        <div className="facility__feature-image" data-scroll data-scroll-speed="-0.1">
          <Image
            src="/images/facilites/weights-area.png"
            alt="Strength training zone with squat racks and wall art"
            fill
            sizes="100vw"
            className="facility__image"
          />
        </div>
        <div className="facility__feature-overlay" />
        <div className="facility__feature-copy page-shell">
          <p className="section-label section-label--light reveal" data-scroll>
            The facility
          </p>
          <h2 className="display-heading display-heading--light reveal reveal--up" data-scroll id="facility-title">
            The space
            <br />
            where work
            <br />
            becomes <em>progress.</em>
          </h2>
          <Link href="/facility" className="action-link action-link--light facility__tour-link reveal reveal--up" data-scroll>
            View full facility <ArrowUpRight size={18} strokeWidth={1.4} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="facility-gallery page-shell" aria-label="Facility gallery">
        {gallery.map(({ image, className, position }, index) => (
          <figure className={`facility-gallery__item ${className} reveal reveal--clip`} data-scroll key={`${image.src}-${index}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 767px) 80vw, 33vw"
              className="facility__image"
              style={{ objectPosition: position }}
            />
            <figcaption>0{index + 1}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

