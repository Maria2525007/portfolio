import SectionHead from "./SectionHead";
import { weeks } from "@/content";

export default function Program() {
  return (
    <section id="program" className="border-y border-line bg-paper-2/50">
      <div className="mx-auto max-w-[86rem] px-5 py-20 md:px-10 md:py-28">
        <SectionHead
          index="02"
          label="Программа · 6 недель"
          title={
            <>
              Каждую неделю — один навык и одна съёмка,{" "}
              <em className="text-muted">которую вы сделаете руками</em>
            </>
          }
          lead="Уроки по 18–25 минут выходят по понедельникам. Домашку сдаёте до воскресенья, разбор приходит текстом в течение двух дней."
        />

        <ol className="mt-12 md:mt-16">
          {weeks.map((week, index) => (
            <li
              key={week.n}
              className="reveal grid gap-x-10 gap-y-5 border-t border-line py-9 md:py-11 lg:grid-cols-12"
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <div className="flex items-baseline gap-4 lg:col-span-4 lg:block">
                <span className="display numerals text-[2.6rem] leading-none text-accent md:text-[3.4rem]">
                  {week.n}
                </span>
                <div className="lg:mt-4">
                  <h3 className="serif text-[1.5rem] leading-tight text-ink md:text-[1.85rem]">
                    {week.title}
                  </h3>
                  <p className="mt-1 hidden text-[0.9375rem] leading-snug text-muted lg:block">
                    {week.lead}
                  </p>
                </div>
              </div>

              <p className="text-[0.9375rem] leading-relaxed text-ink-2 lg:col-span-4">
                <span className="eyebrow mb-2.5 block">Разберём</span>
                {week.learn}
              </p>

              <p className="text-[0.9375rem] leading-relaxed text-muted lg:col-span-4">
                <span className="eyebrow eyebrow-accent mb-2.5 block">Снимете</span>
                {week.practice}
              </p>
            </li>
          ))}
        </ol>

        <p className="reveal mt-10 border-t border-line pt-6 text-[0.875rem] text-faint">
          На седьмой неделе — общий эфир с разбором финальных серий. Запись остаётся в личном
          кабинете.
        </p>
      </div>
    </section>
  );
}
