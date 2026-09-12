"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { label: "About", href: "/about" },
  { label: "Trainers", href: "/#trainers" },
  { label: "Programs", href: "/#programs" },
  { label: "Facility", href: "/facility" },
  { label: "Transformations", href: "/#transformations" },
  { label: "Membership", href: "/#membership" },
  { label: "Contact", href: "/#contact" },
];

function InstagramIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon({ size = 17 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function BrandLockup() {
  return (
    <span className="brand-lockup" aria-label="Muscle Engineers Fitness Hub">
      <Image className="brand-logo" src="/images/logo.png" alt="" width={118} height={79} priority />
      <span className="brand-wordmark">
        <span>Muscle Engineers</span>
        <span>Fitness Hub</span>
      </span>
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link className="brand-link" href="/" aria-label="Muscle Engineers - Back to home" onClick={close}>
            <BrandLockup />
          </Link>

          <div className="desktop-nav" aria-label="Primary links">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <div className="nav-socials" aria-label="Social links">
              <a
                className="nav-social-link"
                href="https://www.instagram.com/themuscleengineers/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                className="nav-social-link"
                href="https://www.youtube.com/results?search_query=Muscle+Engineers+Gym+Virar"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <YoutubeIcon size={18} />
              </a>
              <a
                className="nav-social-link"
                href="https://www.facebook.com/themuscleengineers/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon size={17} />
              </a>
            </div>

            <Link className="nav-join" href="/#membership">
              Join now <ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" />
            </Link>
          </div>

          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={23} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </nav>
      </header>

      <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} id="mobile-navigation">
        <div className="mobile-menu__top">
          <Link href="/" onClick={close} style={{ textDecoration: "none", color: "inherit" }}>
            <BrandLockup />
          </Link>
          <span>Est. in Virar West</span>
        </div>
        <div className="mobile-menu__links">
          {navigation.map((item, index) => (
            <Link href={item.href} key={item.href} onClick={close}>
              <span>0{index + 1}</span>
              {item.label}
              <ArrowUpRight size={20} strokeWidth={1.4} aria-hidden="true" />
            </Link>
          ))}
        </div>
        <div className="mobile-menu__bottom">
          <a href="tel:+917420883355" onClick={close}>
            +91 74208 83355
          </a>
          <div className="mobile-menu__socials">
            <a
              href="https://www.instagram.com/themuscleengineers/"
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              Instagram ↗
            </a>
            <a
              href="https://www.youtube.com/results?search_query=Muscle+Engineers+Gym+Virar"
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              YouTube ↗
            </a>
            <a
              href="https://www.facebook.com/themuscleengineers/"
              target="_blank"
              rel="noreferrer"
              onClick={close}
            >
              Facebook ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
