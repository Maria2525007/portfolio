import { event, schedule } from "@/content";
import { SectionHead, Shell } from "./Section";

/*
  The one full-bleed inversion on the page: the timetable is printed on bone
  paper, the way a real programme handout would be. Breaks are set in a lighter
  weight so the working blocks stand out at a glance.

  Layout is a CSS grid that collapses to a single column under `lg` — no table
  element, so nothing can force a minimum width on a 390px screen.
*/
export default function Schedule() {
  return (
    <section id="schedule" className="bg-paper py-24 text-paper-ink sm:py-32">
      <Shell>
        <SectionHead
          paper
          index="02"
          kicker="Программа дня"
          title={
            <>
              {event.time} <span className="text-accent-paper">·</span> шесть
              часов работы
            </>
          }
          intro={
            <p>
              Четыре блока и финальный разбор. Между ними — два кофе-брейка и
              обед, всё включено в билет. Ни одного блока «про мотивацию»:
              каждый заканчивается заполненной страницей в вашем блокноте.
            </p>
          }
        />

        <ol className="mt-16 border-b border-paper-line">
          {schedule.map((row) => {
            const isBreak = row.kind === "break";
            return (
              <li
                key={row.from}
                className="ledger-row-paper grid gap-x-8 gap-y-3 py-6 lg:grid-cols-12 lg:py-7"
              >
                {/* ------------------------------------------------ time -- */}
                <div className="flex items-baseline gap-3 lg:col-span-2 lg:block">
                  <span
                    className={`display-num text-2xl lg:text-[2rem] ${
                      isBreak ? "text-paper-faint" : "text-paper-ink"
                    }`}
                  >
                    {row.from}
                  </span>
                  <span className="num text-xs tracking-wide text-paper-faint lg:mt-2 lg:block">
                    до {row.to} · {row.dur}
                  </span>
                </div>

                {/* ----------------------------------------------- label -- */}
                <div className="lg:col-span-2">
                  {isBreak ? (
                    <span className="label label-paper">перерыв</span>
                  ) : (
                    <span
                      className="label"
                      style={{ color: "var(--accent-paper)" }}
                    >
                      {row.num}
                    </span>
                  )}
                </div>

                {/* --------------------------------------------- content -- */}
                <div className="lg:col-span-8">
                  <h3
                    className={`text-[1.15rem] leading-snug lg:text-[1.3rem] ${
                      isBreak
                        ? "text-paper-muted"
                        : "display text-paper-ink lg:text-[1.45rem]"
                    }`}
                  >
                    {row.title}
                  </h3>
                  {row.body ? (
                    <p className="mt-3 max-w-[68ch] text-[0.9875rem] leading-relaxed text-paper-muted">
                      {row.body}
                    </p>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mt-10 max-w-[62ch] text-[0.9375rem] leading-relaxed text-paper-muted">
          Тайминг может сдвинуться на 10–15 минут: если зал застревает на
          вопросе, мы его дорабатываем, а не гоним по слайдам. Закончим не
          позже 17:30 в любом случае.
        </p>
      </Shell>
    </section>
  );
}
