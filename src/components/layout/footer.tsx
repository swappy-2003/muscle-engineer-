import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Trainers", href: "/trainers" },
  { label: "Programs", href: "/#programs" },
  { label: "Facility", href: "/facility" },
  { label: "Membership", href: "/#membership" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link className="footer-brand" href="/" aria-label="Muscle Engineers - Back to home">
          <Image className="footer-logo" src="/images/logo.png" alt="Muscle Engineers Fitness Hub logo" width={118} height={79} />
          <span>
            Muscle Engineers
            <br />
            Fitness Hub
          </span>
        </Link>
        <p className="footer-manifesto">
          Engineer your body.
          <br />
          Build your life.
        </p>
      </div>

      <div className="footer-grid">
        <div>
          <p className="footer-label">Visit</p>
          <address>
            3rd Floor, Kingston Court, 313,
            <br />
            near Old Viva College, Virar West,
            <br />
            Vasai-Virar, Maharashtra 401303
          </address>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-label">Follow</p>
          <ul>
            <li>
              <a href="https://www.instagram.com/themuscleengineers/" target="_blank" rel="noreferrer">
                Instagram <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/results?search_query=Muscle+Engineers+Gym+Virar" target="_blank" rel="noreferrer">
                YouTube <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/themuscleengineers/" target="_blank" rel="noreferrer">
                Facebook <ArrowUpRight size={13} strokeWidth={1.5} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer-label">Speak to us</p>
          <a className="footer-phone" href="tel:+917420883355">
            +91 74208 83355
          </a>
          <a className="footer-phone" href="tel:+917420882277">
            +91 74208 82277
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Muscle Engineers Fitness Hub</span>

        <a
          href="https://99labs.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Built with love by 99Labs"
          className="footer-capsule"
        >
          <span>Built with</span>
          <svg
            className="footer-capsule__heart"
            viewBox="0 0 24 24"
            fill="#ff4b72"
            stroke="#ff4b72"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="13"
            height="13"
            aria-hidden="true"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span>by</span>
          <span className="footer-capsule__brand">99Labs</span>
        </a>

        <div className="footer-bottom__meta">
          <span>Virar West, Maharashtra</span>
          <a href="#top" className="footer-back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
