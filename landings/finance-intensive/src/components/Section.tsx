import type { ReactNode } from "react";

/*
  Every section is announced the same way: a mono index, a rule, then the
  heading. Consistency here is what makes the page read as one printed object.
*/
export function SectionHead({
  index,
  kicker,
  title,
  intro,
  paper = false,
}: {
  index: string;
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
  paper?: boolean;
}) {
  return (
    <header className={paper ? "rule-paper pt-6" : "rule pt-6"}>
      <div className="flex items-baseline gap-4">
        <span className={`label ${paper ? "label-paper" : ""}`}>{index}</span>
        <span className={`label ${paper ? "label-paper" : "label-accent"}`}>
          {kicker}
        </span>
      </div>

      <div className="mt-8 grid gap-x-12 gap-y-6 lg:grid-cols-12">
        <h2
          className={`display col-span-full text-[clamp(1.9rem,4.4vw,3.1rem)] lg:col-span-7 ${
            paper ? "text-paper-ink" : "text-text"
          }`}
        >
          {title}
        </h2>
        {intro ? (
          <div
            className={`col-span-full max-w-[46ch] self-end text-[1.0625rem] leading-relaxed lg:col-span-5 ${
              paper ? "text-paper-muted" : "text-muted"
            }`}
          >
            {intro}
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function Shell({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1240px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}
