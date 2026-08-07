import Image from "next/image";
import { author } from "@/content";

export default function Author() {
  return (
    <section id="author" className="mx-auto max-w-[86rem] px-5 py-20 md:px-10 md:py-28">
      <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-14">
        <figure className="reveal lg:col-span-5">
          <div className="print relative aspect-[4/5]">
            <Image
              src="/photos/author.jpg"
              alt={`${author.name} с плёночной камерой`}
              fill
              sizes="(min-width: 1024px) 36vw, 92vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3.5 text-[0.8125rem] text-faint">
            Аня и та самая «Смена», с которой всё началось. Снято, разумеется, на телефон.
          </figcaption>
        </figure>

        <div className="reveal lg:col-span-7 lg:pt-6">
          <div className="flex items-center gap-4 border-b border-line pb-4">
            <span className="eyebrow eyebrow-accent numerals">03</span>
            <span className="eyebrow">Кто ведёт</span>
          </div>

          <h2 className="display mt-8 text-[clamp(2.4rem,6vw,4.2rem)] md:mt-10">{author.name}</h2>
          <p className="mt-3 text-[1.0625rem] text-muted">{author.role}</p>

          <div className="mt-8 space-y-5 md:mt-10">
            {author.text.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-[58ch] text-[1.0625rem] leading-relaxed text-ink-2"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-10 grid gap-x-8 gap-y-4 border-t border-line pt-7 sm:grid-cols-2">
            {author.credits.map((credit) => (
              <li key={credit} className="flex items-baseline gap-3 text-[0.9375rem] text-muted">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 -translate-y-px bg-accent"
                  aria-hidden="true"
                />
                {credit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
