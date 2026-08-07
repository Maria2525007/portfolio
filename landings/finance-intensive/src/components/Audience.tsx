import { audience } from "@/content";
import { SectionHead, Shell } from "./Section";

/*
  Three portraits as numbered ledger entries rather than three identical cards:
  the index sits in its own column, the rule runs edge to edge, and the last
  line names the actual problem in accent.
*/
export default function Audience() {
  return (
    <section id="audience" className="py-24 sm:py-32">
      <Shell>
        <SectionHead
          index="01"
          kicker="Для кого"
          title={<>В одном из трёх вы себя узнаете</>}
          intro={
            <p>
              Интенсив рассчитан на людей 28–45 лет, у которых с доходом всё в
              порядке, а с системой — нет. Если ни один портрет не про вас,
              лучше не покупать билет.
            </p>
          }
        />

        <div className="mt-16 border-b border-line reveal">
          {audience.map((a) => (
            <article
              key={a.index}
              className="ledger-row grid gap-x-10 gap-y-4 py-9 lg:grid-cols-12"
            >
              <div className="flex items-baseline gap-4 lg:col-span-1 lg:block">
                {/* Ordinals are real text, so they carry AA contrast, not --line-2. */}
                <span className="display-num text-3xl text-faint lg:text-4xl">
                  {a.index}
                </span>
              </div>

              <h3 className="display text-[clamp(1.15rem,2.2vw,1.6rem)] text-text lg:col-span-6">
                {a.title}
              </h3>

              <div className="lg:col-span-5">
                <p className="text-[1.0625rem] leading-relaxed text-muted">
                  {a.body}
                </p>
                <p className="label label-accent mt-5">{a.marker}</p>
              </div>
            </article>
          ))}
        </div>
      </Shell>
    </section>
  );
}
