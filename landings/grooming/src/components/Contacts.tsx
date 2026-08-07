import Image from "next/image";
import { studio } from "@/content";

const rows = [
  { k: "Адрес", v: studio.address, note: studio.addressNote },
  { k: "Как добраться", v: studio.metro, note: studio.parking },
  { k: "Часы работы", v: studio.hoursLine, note: studio.hoursNote },
];

export default function Contacts() {
  return (
    <section id="contacts" className="relative bg-pine">
      <div className="comb text-paper" aria-hidden="true" />

      <div className="mx-auto max-w-[1240px] px-5 pt-14 pb-16 sm:px-8 sm:pt-16 lg:pt-20 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal">
            <p className="eyebrow eyebrow-light">Контакты</p>
            <h2 className="display-md mt-4 text-[2rem] text-cream sm:text-[2.6rem] lg:text-[3rem]">
              Флакон, подъезд 4, второй этаж
            </h2>

            <dl className="mt-9 border-t border-cream/20">
              {rows.map((row) => (
                <div
                  key={row.k}
                  className="grid gap-1 border-b border-cream/20 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6"
                >
                  <dt className="eyebrow eyebrow-light pt-1">{row.k}</dt>
                  <dd>
                    <span className="block text-[1.0625rem] text-cream">
                      {row.v}
                    </span>
                    <span className="mt-0.5 block text-[0.875rem] text-cream/60">
                      {row.note}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={studio.phoneHref}
              className="tnum display-md mt-8 inline-block text-[1.875rem] text-marigold sm:text-[2.25rem]"
            >
              {studio.phone}
            </a>
            <p className="mt-1 text-[0.875rem] text-cream/60">
              Отвечаем в рабочие часы, обычно за пару минут
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={studio.telegramHref}
                className="btn h-12 px-6 text-[0.9375rem] text-cream shadow-[inset_0_0_0_1px_rgba(251,245,234,0.45)] hover:bg-cream/10"
              >
                Telegram {studio.telegram}
              </a>
              <a
                href={studio.whatsappHref}
                className="btn h-12 px-6 text-[0.9375rem] text-cream shadow-[inset_0_0_0_1px_rgba(251,245,234,0.45)] hover:bg-cream/10"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="reveal">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-pine-soft">
              <Image
                src="/img/studio.jpg"
                alt="Рабочий стол студии ВОРС: французский бульдог ждёт начала процедуры"
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
              />
            </div>
            <p className="mt-3 text-[0.875rem] text-cream/60">
              Второй зал: сюда переводим тех, кому мешает шум фена из основного.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
