"use client";

import { useEffect } from "react";

/**
 * Marks <html> as reveal-capable and fades `.reveal` blocks in on scroll.
 * The class is added from JS on purpose: without it the CSS leaves every
 * block visible, so a failed hydration never hides the page.
 */
export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (targets.length === 0) return;

    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.06 },
    );

    for (const target of targets) observer.observe(target);

    return () => {
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
