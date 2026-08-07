import Image from "next/image";
import { speaker } from "@/content";
import { SectionHead, Shell } from "./Section";

export default function Speaker() {
  return (
    <section id="speaker" className="py-24 sm:py-32">
      <Shell>
        <SectionHead
          index="03"
          kicker="Кто ведёт"
          title={speaker.name}
          intro={<p>{speaker.role}</p>}
        />

        <div className="mt-16 grid gap-x-14 gap-y-12 lg:grid-cols-12 reveal">
          {/* --------------------------------------------------- portrait -- */}
          <figure className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full border border-line">
              <Image
                src="/speaker.jpg"
                alt={`${speaker.name}, автор и ведущий интенсива`}
                fill
                sizes="(max-width: 1023px) 100vw, 40vw"
                className="photo-ink object-cover object-top"
              />
            </div>
            <figcaption className="label mt-4">
              Санкт-Петербург, интенсив №37
            </figcaption>
          </figure>

          {/* ------------------------------------------------------- bio -- */}
          <div className="lg:col-span-7">
            {speaker.bio.map((p) => (
              <p
                key={p.slice(0, 24)}
                className="mb-6 max-w-[58ch] text-[1.0625rem] leading-relaxed text-muted"
              >
                {p}
              </p>
            ))}

            <dl className="mt-10 grid grid-cols-1 border-t border-line sm:grid-cols-3">
              {speaker.stats.map((s) => (
                <div
                  key={s.label}
                  className="border-b border-line py-5 sm:border-b-0 sm:pr-6"
                >
                  <dt className="display-num text-[2.25rem] text-accent">
                    {s.value}
                  </dt>
                  <dd className="mt-2 max-w-[22ch] text-sm leading-snug text-faint">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>

            {/*
              The trust argument is a conflict-of-interest disclosure, not a
              testimonial. It gets the accent bar because it is the reason to
              believe anything else on this page.
            */}
            <blockquote className="mt-10 border-l-2 border-accent bg-ink-2 py-6 pr-6 pl-6 sm:pl-8">
              <p className="text-[1.0625rem] leading-relaxed text-text">
                {speaker.disclosure}
              </p>
              <footer className="label mt-5">{speaker.name}</footer>
            </blockquote>
          </div>
        </div>
      </Shell>
    </section>
  );
}
