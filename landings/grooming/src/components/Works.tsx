import Image from "next/image";
import { works } from "@/content";

function Frame({
  src,
  label,
  alt,
}: {
  src: string;
  label: string;
  alt: string;
}) {
  return (
    <div className="relative aspect-[4/5] bg-sand-deep">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 45vw, 300px"
        className="object-cover"
      />
      <span className="eyebrow absolute top-2.5 left-2.5 rounded-full bg-cream/95 px-2.5 py-1.5 text-ink">
        {label}
      </span>
    </div>
  );
}

export default function Works() {
  return (
    <section id="works" className="bg-sand py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
        <div className="reveal flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <div className="max-w-[46ch]">
            <p className="eyebrow">До и после</p>
            <h2 className="display-md mt-4 text-[2rem] sm:text-[2.6rem] lg:text-[3rem]">
              Восемь визитов подряд, без отбора удачных
            </h2>
          </div>
          <p className="max-w-[38ch] text-[0.9375rem] leading-relaxed text-ink-soft">
            Снимаем каждого на один и тот же телефон, при одном свете, до и
            после. Время в подписи — сколько на самом деле занял визит.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-7 gap-y-10 md:grid-cols-2">
          {works.map((work) => (
            <li key={work.pet} className="reveal">
              <div className="grid grid-cols-2 gap-[3px] overflow-hidden rounded-2xl bg-cream p-[3px]">
                <Frame
                  src={work.before}
                  label="До"
                  alt={`${work.pet} до груминга`}
                />
                <Frame
                  src={work.after}
                  label="После"
                  alt={`${work.pet} после груминга`}
                />
              </div>
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <p className="display-md text-[1.0625rem] text-ink">
                  {work.pet}
                </p>
                <p className="tnum text-[0.8125rem] text-muted">{work.time}</p>
              </div>
              <p className="text-[0.875rem] text-ink-soft">{work.service}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
