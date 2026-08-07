import Image from "next/image";
import { FeederDrawing } from "@/components/FeederDrawing";
import { priceRub, product } from "@/content";
import { heroEating } from "@/media";

const trust = [
  ["24 мес.", "гарантия"],
  ["1–3 дня", "доставка"],
  ["14 дней", "на возврат"],
];

export function HeroA() {
  return (
    <section className="grain relative overflow-hidden border-b border-line">
      <div className="mx-auto w-full max-w-[1340px] px-5 pt-12 pb-20 sm:px-8 sm:pt-16 sm:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* ---- copy ---- */}
          <div className="min-w-0 lg:col-span-6 lg:pr-8">
            <p className="eyebrow">
              <span className="eyebrow-accent">NOMI S2</span>
              <span className="mx-2 text-line-strong">/</span>
              автокормушка с камерой 1080p
            </p>

            <h1 className="display mt-6 text-[2.5rem] sm:text-[3.4rem] lg:text-[3.9rem]">
              Уехали на выходные.
              <br />
              Кот об этом не&nbsp;узнал
              <span className="text-accent">.</span>
            </h1>

            <p className="mt-7 max-w-[46ch] text-[1.0625rem] leading-relaxed text-ink-soft sm:text-[1.125rem]">
              Кормушка сама выдаёт порцию по расписанию и снимает каждое
              кормление. Бункер на четыре литра — это восемнадцать дней еды для
              одного кота.
            </p>

            {/* price */}
            <div className="mt-10 flex flex-wrap items-end gap-x-5 gap-y-3">
              <span className="figure text-[3.2rem] sm:text-[4rem]">
                {priceRub(product.price)}
              </span>
              <span className="mono pb-2 text-[0.9375rem] text-faint line-through">
                {priceRub(product.priceOld)}
              </span>
              <span className="mono mb-2 bg-accent px-2.5 py-1.5 text-[0.6875rem] tracking-[0.1em] text-white uppercase">
                −22% до {product.discountUntil}
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#order"
                className="btn btn-primary h-[58px] px-8 text-[1.0625rem]"
              >
                Купить за {priceRub(product.price)}
              </a>
              <a href="#how" className="btn btn-ghost h-[58px] px-7 text-[1rem]">
                Как это работает
              </a>
            </div>

            <dl className="mt-12 grid max-w-[520px] grid-cols-3 gap-px border-y border-line bg-line">
              {trust.map(([v, l]) => (
                <div key={l} className="min-w-0 bg-paper py-4">
                  <dt className="figure text-[1.35rem] sm:text-[1.5rem]">{v}</dt>
                  <dd className="mono mt-2 text-[0.6875rem] tracking-[0.12em] text-faint uppercase">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* ---- product ---- */}
          <div className="relative min-w-0 lg:col-span-6">
            <div className="blueprint relative aspect-[5/6] w-full border border-line bg-white sm:aspect-[4/5]">
              <div className="mono absolute top-5 left-5 text-[0.6875rem] tracking-[0.16em] text-faint uppercase">
                {product.sku} · вид спереди
              </div>
              <FeederDrawing
                view="front"
                className="absolute inset-0 mx-auto h-full w-auto max-w-full px-6 py-12 text-ink"
              />

              {/* pinned annotations */}
              <div className="absolute top-[28%] right-4 hidden items-center gap-3 sm:flex">
                <span className="h-px w-10 bg-line-strong" />
                <span className="mono bg-white px-2 py-1 text-[0.6875rem] text-accent">
                  камера 1080p
                </span>
              </div>
              <div className="absolute bottom-[16%] left-4 hidden items-center gap-3 sm:flex">
                <span className="mono bg-white px-2 py-1 text-[0.6875rem] text-accent">
                  сталь 304
                </span>
                <span className="h-px w-10 bg-line-strong" />
              </div>
            </div>

            {/* photo card, overlapping the panel */}
            <figure className="mt-5 w-full sm:absolute sm:-bottom-10 sm:-left-5 sm:mt-0 sm:w-[44%] lg:-left-10">
              <div className="relative aspect-[4/5] w-full overflow-hidden border-4 border-paper bg-cream sm:border-8">
                <Image
                  src={heroEating}
                  alt="Рыжий кот ест сухой корм из миски"
                  placeholder="blur"
                  priority
                  sizes="(max-width: 640px) 92vw, 26vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mono mt-3 text-[0.6875rem] tracking-[0.1em] text-faint uppercase sm:mt-2">
                кормление 09:00 · порция 25 г
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
