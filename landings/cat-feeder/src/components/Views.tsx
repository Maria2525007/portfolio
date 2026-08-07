"use client";

import { useState } from "react";
import { FeederDrawing, type View } from "@/components/FeederDrawing";
import { views } from "@/content";

export function Views() {
  const [active, setActive] = useState<View>("front");
  const current = views.find((v) => v.id === active) ?? views[0];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
      {/* drawing */}
      <div className="min-w-0 lg:col-span-7">
        <div className="blueprint relative overflow-hidden border border-line bg-white">
          <div className="mono absolute top-4 left-4 z-10 text-[10px] tracking-[0.16em] text-faint uppercase">
            NOMI S2 · {current.label}
          </div>
          <div className="mono absolute right-4 bottom-4 z-10 text-[10px] tracking-[0.16em] text-faint">
            1 : 4
          </div>
          <FeederDrawing
            view={active}
            className="mx-auto block h-auto w-full max-w-[380px] py-8 text-ink"
          />
        </div>
        <p className="mt-4 max-w-[46ch] text-[0.9375rem] leading-relaxed text-muted">
          {current.caption}
        </p>
      </div>

      {/* index */}
      <div className="min-w-0 lg:col-span-5">
        <p className="eyebrow eyebrow-accent">Пять ракурсов</p>
        <h3 className="display-md mt-3 text-[1.6rem] sm:text-[2rem]">
          Чертёж, а не рендер
        </h3>
        <p className="mt-3 max-w-[42ch] text-[0.9375rem] leading-relaxed text-muted">
          Мы показываем конструкцию так, как она есть в документации: размеры,
          узлы, порты. Ретуши здесь нет.
        </p>

        <ul className="mt-7 border-t border-line">
          {views.map((v) => {
            const on = v.id === active;
            return (
              <li key={v.id}>
                <button
                  type="button"
                  onClick={() => setActive(v.id as View)}
                  aria-pressed={on}
                  className={`flex w-full items-center gap-4 border-b border-line py-3 text-left transition-colors ${
                    on ? "bg-accent-wash" : "hover:bg-cream/60"
                  }`}
                >
                  <span
                    className={`grid h-14 w-12 shrink-0 place-items-center border ${
                      on ? "border-accent/35 bg-white" : "border-line bg-white"
                    }`}
                  >
                    <FeederDrawing
                      view={v.id as View}
                      className={`h-11 w-auto ${on ? "text-accent" : "text-line-strong"}`}
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className={`block text-[0.9375rem] font-semibold ${
                        on ? "text-accent" : "text-ink"
                      }`}
                    >
                      {v.label}
                    </span>
                    <span className="mono block text-[10px] tracking-[0.14em] text-faint uppercase">
                      вид {String(views.indexOf(v) + 1).padStart(2, "0")} / 05
                    </span>
                  </span>
                  <span
                    className={`mono shrink-0 pr-1 text-[11px] ${
                      on ? "text-accent" : "text-line-strong"
                    }`}
                  >
                    →
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
