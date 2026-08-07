import Image from "next/image";
import { heroStats, studio } from "@/content";

/**
 * Variant A — type-led. The headline owns the screen, the photograph is a tall
 * arched cut-out on the right, and a working shot overlaps its corner.
 */
export default function HeroA() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* One warm bloom, pulled from the yellow of the photograph itself. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-20%] h-[560px] w-[560px] rounded-full bg-marigold/25 blur-[110px]"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 pt-10 pb-12 sm:px-8 lg:pt-16 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
          {/* ---- Type ---- */}
          <div className="lg:col-span-7">
            <p className="eyebrow">
              Груминг-студия · {studio.city}, «Флакон»
            </p>

            <h1 className="display mt-5 text-[2.6rem] sm:text-[3.6rem] lg:text-[4.6rem] xl:text-[5.1rem]">
              Стрижём собак и кошек так, чтобы они{" "}
              <span className="marker">шли сюда сами</span>
            </h1>

            <p className="mt-6 max-w-[46ch] text-[1.0625rem] leading-relaxed text-ink-soft sm:text-[1.1875rem]">
              Без наркоза и фиксации силой. Сначала знакомимся, потом стрижём —
              и присылаем видео прямо с процесса, пока вы ждёте.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#booking"
                className="btn btn-primary h-[52px] px-7 text-[1rem]"
              >
                Записаться на первый визит
              </a>
              <a
                href="#prices"
                className="btn btn-ghost h-[52px] px-7 text-[1rem]"
              >
                Цены по размеру
              </a>
            </div>

            <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-line pt-7 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.value} className="sm:border-l sm:border-line sm:first:border-l-0 sm:pl-5 sm:first:pl-0">
                  <dt className="lnum display-md text-[1.75rem] text-ink">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-[0.875rem] leading-snug text-muted">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ---- Photograph ---- */}
          <div className="relative lg:col-span-5">
            <div className="arch relative mx-auto aspect-[3/4] w-full max-w-[420px] bg-sand lg:max-w-none">
              <Image
                src="/img/hero-a.jpg"
                alt="Ши-тцу после комплексной стрижки в студии ВОРС"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover"
              />
            </div>

            {/* Working shot, overlapping the arch. The caption rides inside the
                frame so it can never collide with the stats column beside it.
                Dropped on phones, where the hero stays a single clean column. */}
            <figure className="absolute bottom-5 -left-4 hidden w-[210px] overflow-hidden rounded-2xl border-4 border-cream bg-sand sm:block lg:-left-16 lg:w-[240px]">
              <Image
                src="/img/hero-a-inset.jpg"
                alt="Мастер подравнивает шерсть на мордочке бишона ножницами"
                width={380}
                height={280}
                sizes="240px"
                className="h-[150px] w-full object-cover"
              />
              <figcaption className="tnum bg-cream px-2.5 pt-2 pb-1 text-[0.75rem] leading-snug text-muted">
                Марсик, ши-тцу · комплекс, 1 ч 50 мин
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="comb text-sand" aria-hidden="true" />
    </section>
  );
}
