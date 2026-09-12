import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Trainers", href: "/#trainers" },
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
          <Image className="footer-logo" src="/images/logo.png" alt="" width={118} height={79} />
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
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Muscle Engineers Fitness Hub</span>
        <span>Virar West, Maharashtra</span>
        <a href="#top" className="footer-back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
