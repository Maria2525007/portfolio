"use client";

import { useEffect } from "react";

/*
  Adds the reveal class to <html> only once we know the observer works, so a
  failure here leaves the page fully visible instead of blank.
*/
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    root.classList.add("js-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    for (const el of document.querySelectorAll(".reveal")) observer.observe(el);

    return () => {
      observer.disconnect();
      root.classList.remove("js-reveal");
    };
  }, []);

  return null;
}
