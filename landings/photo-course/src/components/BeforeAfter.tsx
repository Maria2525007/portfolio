"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  className?: string;
  priority?: boolean;
  /** Rendered width hint for next/image. */
  sizes?: string;
};

/**
 * Same frame twice. The range input is the control surface — stretched over
 * the whole print at zero opacity — which buys pointer, touch and keyboard
 * handling from the platform instead of reimplementing all three.
 */
export default function BeforeAfter({ className = "", priority = false, sizes }: Props) {
  const [split, setSplit] = useState(52);

  return (
    <figure className={className}>
      <div className="print relative aspect-[4/5] w-full select-none">
        <Image
          src="/photos/hero-before.jpg"
          alt="Кадр, снятый на автомате: плоский, серый, без света"
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />

        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
          aria-hidden="true"
        >
          <Image
            src="/photos/hero-after.jpg"
            alt=""
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover"
          />
        </div>

        <span
          className="eyebrow eyebrow-paper absolute top-4 left-4 bg-ink/45 px-2 py-1.5 backdrop-blur-[2px]"
          aria-hidden="true"
        >
          После
        </span>
        <span
          className="eyebrow eyebrow-paper absolute top-4 right-4 bg-ink/45 px-2 py-1.5 backdrop-blur-[2px]"
          aria-hidden="true"
        >
          До
        </span>

        {/* Divider + grip. Purely decorative; the input below drives it. */}
        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-paper/85"
          style={{ left: `${split}%` }}
          aria-hidden="true"
        >
          <div className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-[0_2px_14px_rgba(27,22,19,0.28)]">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none" aria-hidden="true">
              <path
                d="M5.2 1 1 5.5 5.2 10M11.8 1 16 5.5 11.8 10"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={split}
          onChange={(event) => setSplit(Number(event.target.value))}
          aria-label="Сдвиньте, чтобы сравнить кадр до и после обработки"
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>

      <figcaption className="mt-3.5 flex items-baseline gap-3 text-[0.8125rem] leading-relaxed text-muted">
        <span className="eyebrow eyebrow-accent shrink-0 pt-0.5">Тяните</span>
        <span>
          Один и тот же кадр. Справа — как его увидел телефон, слева — то, чему учим на первой
          неделе.
        </span>
      </figcaption>
    </figure>
  );
}
