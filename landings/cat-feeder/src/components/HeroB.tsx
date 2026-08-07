import Image from "next/image";
import { FeederDrawing } from "@/components/FeederDrawing";
import { priceRub, product } from "@/content";
import { emptyBowl } from "@/media";

const tag = [
  {
    k: "Бункер",
    v: "4 л",
    n: "18 дней еды для одного кота",
  },
  {
    k: "Кормлений",
    v: "до 6",
    n: "порция 10–100 г, шаг 5 г",
  },
  {
    k: "Камера",
    v: "1080p",
    n: "ночная съёмка, угол 145°",
  },
];

export function HeroB() {
  return (
    <section className="border-b border-line">
      {/* ---- poster ---- */}
      <div className="relative min-h-[560px] w-full overflow-hidden bg-ink sm:min-h-[620px] lg:min-h-[76vh]">
        <Image
          src={emptyBowl}
          alt="Трёхцветная кошка сидит у почти пустой миски"
          placeholder="blur"
          priority
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
        />
        {/* warm scrim, heavier on the left where the type sits */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, rgba(16,11,8,0.92) 0%, rgba(16,11,8,0.78) 34%, rgba(16,11,8,0.24) 62%, rgba(16,11,8,0.10) 100%)",
          }}
        />

        <div className="relative mx-auto flex min-h-[560px] w-full max-w-[1340px] flex-col justify-end px-5 py-12 sm:min-h-[620px] sm:px-8 sm:py-16 lg:min-h-[76vh]">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-8">
              <p className="eyebrow eyebrow-light">
                <span className="text-accent-bright">NOMI S2</span>
                <span className="mx-2 text-white/25">/</span>
                автокормушка с камерой
              </p>

              <h1 className="display mt-7 text-[3.4rem] text-white sm:text-[5.2rem] lg:text-[6.6rem]">
                Он поест
                <br />
                без вас
                <span className="text-accent-bright">.</span>
              </h1>

              <p className="mt-8 max-w-[44ch] text-[1.0625rem] leading-relaxed text-white/70 sm:text-[1.1875rem]">
                Шесть кормлений в сутки по вашему расписанию. Камера снимает
                каждое и присылает десятисекундный ролик в телефон — вы видите,
                что миска полная, а кот пришёл.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href="#order"
                  className="btn btn-primary h-[58px] px-8 text-[1.0625rem]"
                >
                  Купить за {priceRub(product.price)}
                </a>
                <a
                  href="#how"
                  className="btn h-[58px] border-white/30 px-7 text-[1rem] text-white hover:border-white hover:bg-white/10"
                >
                  Как это работает
                </a>
              </div>
            </div>

            {/* drawing, knocked out of the photo */}
            <div className="hidden min-w-0 lg:col-span-4 lg:block">
              <FeederDrawing
                view="front"
                className="ml-auto h-[46vh] max-h-[440px] w-auto text-white/85"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---- shelf price tag ---- */}
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1340px] px-5 sm:px-8">
          <div className="grid gap-px bg-line lg:grid-cols-12">
            <div className="min-w-0 bg-white py-8 lg:col-span-4 lg:pr-10">
              <p className="mono text-[0.6875rem] tracking-[0.14em] text-faint uppercase">
                Цена сегодня
              </p>
              <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
                <span className="figure text-[3rem] text-accent sm:text-[3.6rem]">
                  {priceRub(product.price)}
                </span>
                <span className="mono pb-2 text-[0.875rem] text-faint line-through">
                  {priceRub(product.priceOld)}
                </span>
              </div>
              <p className="mono mt-3 text-[0.75rem] text-ink-soft">
                −22% до {product.discountUntil} · рассрочка 2 082 ₽ / мес.
              </p>
            </div>

            {tag.map((t) => (
              <div
                key={t.k}
                className="min-w-0 bg-white py-8 lg:col-span-2 lg:px-6"
              >
                <p className="mono text-[0.6875rem] tracking-[0.14em] text-faint uppercase">
                  {t.k}
                </p>
                <p className="figure mt-3 text-[2rem] sm:text-[2.3rem]">{t.v}</p>
                <p className="mt-3 max-w-[24ch] text-[0.8125rem] leading-snug text-muted">
                  {t.n}
                </p>
              </div>
            ))}

            <div className="flex min-w-0 flex-col justify-center bg-white py-8 lg:col-span-2 lg:pl-6">
              <a
                href="#order"
                className="btn btn-primary h-[54px] w-full px-6 text-[1rem]"
              >
                Купить
              </a>
              <p className="mono mt-3 text-center text-[0.6875rem] text-faint">
                оплата при получении
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
