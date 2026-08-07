import Image from "next/image";
import { course } from "@/content";

/**
 * Variant B — cinematic. The photograph is the whole first screen; the
 * headline is a ladder of unequal lines hung off a hairline in the gutter.
 */
export default function HeroB() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink">
      <Image
        src="/photos/hero-b.jpg"
        alt="Полосы вечернего света на деревянном полу и силуэт человека у окна"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-[62%_38%]"
      />

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(20,12,6,0.94) 0%, rgba(20,12,6,0.72) 26%, rgba(20,12,6,0.12) 58%, rgba(20,12,6,0.34) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Prints pinned to the wall: the same frame before and after. */}
      <div className="absolute top-28 right-10 hidden w-[19rem] xl:block">
        <div className="relative">
          <div className="print absolute -top-3 -left-24 w-40 rotate-[-5deg] bg-paper p-2 shadow-[0_18px_40px_rgba(10,6,3,0.45)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/photos/hero-before.jpg"
                alt="Тот же кадр на автомате — плоский и серый"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
            <p className="eyebrow mt-2 pb-0.5 text-center">До</p>
          </div>

          <div className="print ml-16 w-48 rotate-[3deg] bg-paper p-2 shadow-[0_22px_50px_rgba(10,6,3,0.5)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/photos/hero-after.jpg"
                alt="Тот же кадр после первой недели курса — тёплый и объёмный"
                fill
                sizes="192px"
                className="object-cover"
              />
            </div>
            <p className="eyebrow eyebrow-accent mt-2 pb-0.5 text-center">После</p>
          </div>
        </div>
      </div>

      {/* Gutter label, reading bottom to top. */}
      <span
        className="eyebrow eyebrow-paper absolute bottom-32 left-6 hidden lg:block"
        // `sideways` keeps digits lying with the Cyrillic; the default `mixed`
        // stands "№14" upright and the glyphs collide.
        style={{
          writingMode: "vertical-rl",
          textOrientation: "sideways",
          transform: "rotate(180deg)",
        }}
      >
        {course.streamNo} · старт {course.start}
      </span>

      <div className="relative mx-auto w-full max-w-[86rem] px-5 pt-40 pb-12 md:px-10 md:pb-16 lg:pl-24">
        <div className="max-w-[54rem] border-l border-paper/30 pl-5 md:pl-8">
          <p className="eyebrow eyebrow-paper">{course.tagline} · для начинающих</p>

          <h1 className="mt-6 text-paper">
            <span className="display block text-[clamp(1.9rem,5vw,3.1rem)] text-paper/75">
              Свет уже есть
            </span>
            <span className="display block text-[clamp(2.9rem,9.4vw,6.4rem)] italic">
              в вашей кухне,
            </span>
            <span className="display block text-[clamp(2.5rem,7.6vw,5.2rem)]">
              во дворе и в метро
            </span>
          </h1>

          <p className="mt-7 max-w-[44ch] text-[1.0625rem] leading-relaxed text-paper/75 md:text-[1.1875rem]">
            Шесть недель — и вы начнёте его замечать. Двенадцать видеоуроков, шесть домашних работ и
            куратор, который читает каждую.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-7">
            <a href="#signup" className="btn self-start sm:self-auto">
              Занять место на потоке
            </a>
            <p className="text-[0.875rem] text-paper/60">
              940 выпускников · возврат 14 дней без вопросов
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
