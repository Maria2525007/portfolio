import Image from "next/image";
import { studio } from "@/content";

const facts = [
  { k: "Без наркоза", v: "Никакой седации — ни разу за 9 лет" },
  { k: "Видеоотчёт", v: "Кружок в Telegram прямо со стола" },
  { k: "Собаки и кошки", v: "Три мастера, отдельный кошачий зал" },
  { k: "Флакон", v: "7 минут от метро Дмитровская" },
];

/**
 * Variant B — photo-led. One full-bleed frame from the working table, type
 * overlaid at the foot in a sans voice: three short refusals instead of variant
 * A's single serif sentence.
 */
export default function HeroB() {
  return (
    <section className="relative isolate flex min-h-[88svh] flex-col justify-end overflow-hidden bg-pine">
      <Image
        src="/img/hero-b.jpg"
        alt="Мастер студии ВОРС подравнивает шерсть бишона ножницами на рабочем столе"
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#1a130c] via-[#1a130c]/85 to-[#1a130c]/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#1a130c]/90 via-[#1a130c]/35 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 pt-28 pb-8 sm:px-8 lg:pb-10">
        <p className="eyebrow text-marigold">
          Груминг-студия · {studio.city}, «Флакон»
        </p>

        {/* Sans, short, staccato — the opposite hand to variant A. */}
        <h1 className="mt-6 max-w-[19ch] text-[2.35rem] leading-[1.04] font-semibold tracking-[-0.03em] text-cream sm:text-[3.4rem] lg:text-[4.35rem]">
          Мы не усыпляем.
          <br />
          Не держим силой.
          <br />
          <span className="text-marigold">Не торопимся.</span>
        </h1>

        <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-cream/80 sm:text-[1.125rem]">
          Стрижка, мытьё и уход для собак и кошек. Вы видите весь процесс на
          видео — от первого знакомства до сушки, без монтажа.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#booking"
            className="btn btn-primary h-[52px] px-7 text-[1rem]"
          >
            Записаться на первый визит
          </a>
          <a
            href={studio.phoneHref}
            className="tnum btn h-[52px] px-7 text-[1rem] text-cream shadow-[inset_0_0_0_1px_rgba(251,245,234,0.45)] hover:bg-cream/10"
          >
            {studio.phone}
          </a>
        </div>
      </div>

      {/* Fact bar across the foot of the frame. */}
      <div className="relative border-t border-cream/15 bg-[#1a130c]/55 backdrop-blur-sm">
        <dl className="mx-auto grid max-w-[1240px] grid-cols-2 gap-x-6 gap-y-5 px-5 py-5 sm:px-8 lg:grid-cols-4 lg:py-6">
          {facts.map((f) => (
            <div key={f.k}>
              <dt className="eyebrow eyebrow-light">{f.k}</dt>
              <dd className="mt-2 text-[0.875rem] leading-snug text-cream/85">
                {f.v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
