import Image from "next/image";
import SectionHead from "./SectionHead";
import { students } from "@/content";

/**
 * Deliberately uneven grid: two landscape frames break the rhythm of the
 * portraits, and the vertical offsets keep the row baselines from lining up
 * like a product catalogue.
 */
const layout = [
  { key: "s5", span: "lg:col-span-6", offset: "" },
  { key: "s1", span: "lg:col-span-3", offset: "lg:mt-12" },
  { key: "s2", span: "lg:col-span-3", offset: "" },
  { key: "s3", span: "lg:col-span-3", offset: "lg:mt-8" },
  { key: "s4", span: "lg:col-span-3", offset: "" },
  { key: "s6", span: "lg:col-span-6", offset: "lg:mt-14" },
  { key: "s7", span: "lg:col-span-3", offset: "" },
  { key: "s8", span: "lg:col-span-3", offset: "lg:mt-10" },
];

export default function Students() {
  const byKey = new Map(students.map((photo) => [photo.src.slice(8, -4), photo]));

  return (
    <section id="works" className="mx-auto max-w-[86rem] px-5 py-20 md:px-10 md:py-28">
      <SectionHead
        index="04"
        label="Работы учеников"
        title={
          <>
            Снято на телефон людьми, которые <em className="text-muted">шесть недель назад</em>{" "}
            снимали на автомате
          </>
        }
        lead="Кадры из чата шестого потока. Мы не отбирали лучшие — взяли подряд то, что сдавали на домашки."
      />

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:mt-16 lg:grid-cols-12">
        {layout.map((cell, index) => {
          const photo = byKey.get(cell.key);
          if (!photo) return null;
          const landscape = photo.w > photo.h;

          return (
            <figure
              key={cell.key}
              className={`reveal ${cell.span} ${cell.offset}`}
              style={{ transitionDelay: `${(index % 3) * 90}ms` }}
            >
              <div
                className={`print relative ${landscape ? "aspect-[3/2]" : "aspect-[4/5]"}`}
              >
                <Image
                  src={photo.src}
                  alt={`Работа ученика: ${photo.note}`}
                  fill
                  sizes={
                    landscape
                      ? "(min-width: 1024px) 46vw, (min-width: 640px) 46vw, 92vw"
                      : "(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
                  }
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-[0.875rem] text-ink">{photo.caption}</span>
                <span className="text-[0.8125rem] text-faint">{photo.note}</span>
              </figcaption>
            </figure>
          );
        })}

        <div className="reveal border-t border-line pt-6 sm:col-span-2 lg:col-span-6 lg:mt-10">
          <p className="serif max-w-[36ch] text-[1.35rem] leading-snug text-balance text-ink md:text-[1.6rem]">
            «Я думала, надо копить на камеру. Оказалось, надо было переставить стол ближе к окну».
          </p>
          <p className="mt-3.5 text-[0.875rem] text-muted">Марина, 12 поток</p>
        </div>
      </div>
    </section>
  );
}
