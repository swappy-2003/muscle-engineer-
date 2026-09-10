"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<HTMLElement>("[data-scroll]").forEach((element) => element.classList.add("is-inview"));
      return;
    }
    const scroll = new LocomotiveScroll({
      lenisOptions: { duration: 1.1, smoothWheel: true },
      triggerRootMargin: "0px 0px -10%",
    });
    return () => scroll.destroy();
  }, []);
  return null;
}
