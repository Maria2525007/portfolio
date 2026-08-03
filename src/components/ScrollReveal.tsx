"use client";

import { useEffect } from "react";

/**
 * Reveals every `.reveal` element once it enters the viewport.
 * Elements are hidden by CSS, so if this never runs the page still needs to be
 * readable — `noscript` in the layout drops the hidden state.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
