import BeforeAfter from "./BeforeAfter";
import { course } from "@/content";

/**
 * Variant A — editorial spread. Type carries the first screen; the frame
 * sits to the right as evidence, not as decoration.
 */
export default function HeroA() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-[86rem] px-5 pt-10 pb-12 md:px-10 md:pt-16 md:pb-16">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-7 lg:pt-4">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="eyebrow eyebrow-ink">{course.tagline}</span>
              <span className="hidden h-px w-10 bg-line sm:block" aria-hidden="true" />
              <span className="eyebrow eyebrow-accent">старт {course.start}</span>
            </div>

            <h1 className="display mt-7 text-[clamp(2.6rem,8.6vw,5.6rem)] text-balance md:mt-9">
              Через шесть недель вы перестанете{" "}
              <em className="text-accent">стесняться</em> своих фотографий
            </h1>

            <p className="lede mt-7 max-w-[46ch] md:mt-9">
              Курс для тех, кто снимает на телефон каждый день и каждый раз думает: «в жизни было
              красивее». Без штативов, без зеркалок и без слова «диафрагма».
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center sm:gap-5">
              <a href="#signup" className="btn">
                Занять место на потоке
              </a>
              <a href="#program" className="rule-link self-start text-[0.95rem] text-muted sm:self-auto">
                Посмотреть программу
              </a>
            </div>

            {/* Two columns while the row would wrap, one dotted line once it fits. */}
            <ul className="mt-11 grid grid-cols-2 items-start gap-x-6 gap-y-2.5 border-t border-line pt-5 text-[0.875rem] text-muted sm:flex sm:flex-wrap sm:items-center sm:gap-x-5 md:mt-14">
              {course.facts.map((fact, index) => (
                <li key={fact} className="flex items-center gap-5">
                  {index > 0 && (
                    <span className="hidden h-1 w-1 rounded-full bg-line sm:block" aria-hidden="true" />
                  )}
                  {fact}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 lg:-mt-2">
            <BeforeAfter priority sizes="(min-width: 1024px) 34vw, 92vw" />
          </div>
        </div>
      </div>

      <div className="border-y border-line bg-paper-2/60">
        <dl className="mx-auto grid max-w-[86rem] grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {course.proof.map((item) => (
            <div key={item.label} className="px-5 py-6 md:px-10 md:py-7">
              <dt className="sr-only">{item.label}</dt>
              <dd className="flex items-baseline gap-3.5">
                <span className="display numerals text-[2.4rem] leading-none text-ink md:text-[2.9rem]">
                  {item.value}
                </span>
                <span className="max-w-[16ch] text-[0.8125rem] leading-snug text-muted">
                  {item.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
