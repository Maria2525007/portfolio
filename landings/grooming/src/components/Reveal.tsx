"use client";

import { useEffect } from "react";

const WATCHDOG_MS = 1500;

/**
 * Fades `.reveal` elements in as they enter the viewport.
 *
 * The animation is opt-in: this effect adds `js-reveal` to <html>, which is what
 * hides the elements in the first place. If the observer never reports anything
 * — a hostile extension, an old engine, a bug here — the watchdog drops the
 * class and the page renders as plain, fully visible content.
 */
export default function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(".reveal"),
    );

    if (targets.length === 0 || !("IntersectionObserver" in window)) return;

    root.classList.add("js-reveal");

    let delivered = false;
    const observer = new IntersectionObserver(
      (entries) => {
        delivered = true;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    targets.forEach((el) => observer.observe(el));

    const watchdog = window.setTimeout(() => {
      if (delivered) return;
      observer.disconnect();
      root.classList.remove("js-reveal");
    }, WATCHDOG_MS);

    return () => {
      window.clearTimeout(watchdog);
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
