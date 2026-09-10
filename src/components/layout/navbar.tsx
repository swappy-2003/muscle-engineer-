"use client";

import { ArrowUpRight, Camera, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Trainers", href: "#trainers" },
  { label: "Programs", href: "#programs" },
  { label: "Facility", href: "/facility" },
  { label: "Transformations", href: "#transformations" },
  { label: "Membership", href: "#membership" },
  { label: "Contact", href: "#contact" },
];

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
          <a className="brand-link" href="#top" aria-label="Back to top" onClick={close}>
            <BrandLockup />
          </a>

          <div className="desktop-nav" aria-label="Primary links">
            {navigation.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a
              className="instagram-link"
              href="https://www.instagram.com/themuscleengineers/"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Muscle Engineers on Instagram"
            >
              <Camera size={17} strokeWidth={1.6} aria-hidden="true" />
            </a>
            <a className="nav-join" href="#membership">
              Join now <ArrowUpRight size={15} strokeWidth={1.7} aria-hidden="true" />
            </a>
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
          <BrandLockup />
          <span>Est. in Virar West</span>
        </div>
        <div className="mobile-menu__links">
          {navigation.map((item, index) => (
            <a href={item.href} key={item.href} onClick={close}>
              <span>0{index + 1}</span>
              {item.label}
              <ArrowUpRight size={20} strokeWidth={1.4} aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mobile-menu__bottom">
          <a href="tel:+917420883355" onClick={close}>
            +91 74208 83355
          </a>
          <a
            href="https://www.instagram.com/themuscleengineers/"
            target="_blank"
            rel="noreferrer"
            onClick={close}
          >
            Instagram ↗
          </a>
        </div>
      </div>
    </>
  );
}
