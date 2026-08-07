"use client";

import { useEffect, useState } from "react";
import { studio } from "@/content";

/**
 * Always-visible booking bar for phones.
 *
 * It steps aside once the booking form itself is on screen — a floating
 * "Записаться" button on top of the form it points at is noise, and on short
 * viewports it would sit over the submit button. Layout room is reserved by
 * padding on the footer, so the bar never covers content.
 */
export default function MobileCta() {
  const [atForm, setAtForm] = useState(false);

  useEffect(() => {
    const form = document.getElementById("booking");
    if (!form || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setAtForm(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(form);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-line bg-cream/95 backdrop-blur-md transition-transform duration-300 md:hidden ${
        atForm ? "translate-y-full" : "translate-y-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-2.5 px-4 py-3">
        <a
          href={studio.phoneHref}
          aria-label={`Позвонить ${studio.phone}`}
          className="btn btn-ghost h-12 w-12 shrink-0"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
          </svg>
        </a>
        <a href="#booking" className="btn btn-primary h-12 flex-1 text-[0.9375rem]">
          Записаться на визит
        </a>
      </div>
    </div>
  );
}
