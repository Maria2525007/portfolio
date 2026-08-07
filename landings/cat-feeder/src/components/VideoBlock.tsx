"use client";

import Image from "next/image";
import { useState } from "react";
import { reviewVideo } from "@/media";

const chapters: [string, string][] = [
  ["00:00", "Распаковка и что лежит в коробке"],
  ["01:05", "Сборка и первая заливка корма"],
  ["02:10", "Расписание в приложении за 90 секунд"],
  ["03:20", "Ночная съёмка и звонок коту"],
];

export function VideoBlock() {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="min-w-0 lg:col-span-8">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
          {open ? (
            <div className="absolute inset-0 grid place-items-center px-6 text-center">
              <div>
                <p className="eyebrow eyebrow-light">Плеер не подключён</p>
                <p className="mx-auto mt-4 max-w-[40ch] text-[0.9375rem] leading-relaxed text-white/75">
                  Это демонстрационная страница. Блок готов принять ролик с
                  YouTube, VK Видео или собственного хостинга — нужен только
                  идентификатор.
                </p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rule-link mt-5 text-[0.875rem] font-medium text-white"
                >
                  Вернуться к обложке
                </button>
              </div>
            </div>
          ) : (
            <>
              <Image
                src={reviewVideo}
                alt="Кот сидит на кухонном столе в светлой квартире"
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="h-full w-full object-cover opacity-85"
              />
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="group absolute inset-0 grid place-items-center"
                aria-label="Смотреть видеообзор"
              >
                <span className="grid h-[74px] w-[74px] place-items-center rounded-full bg-white/92 transition-transform duration-300 group-hover:scale-107 sm:h-[92px] sm:w-[92px]">
                  <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 text-ink" aria-hidden="true">
                    <path d="M7 4.5v15l13-7.5z" fill="currentColor" />
                  </svg>
                </span>
              </button>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/70 to-transparent p-4 sm:p-6">
                <p className="text-[0.9375rem] font-semibold text-white sm:text-[1.125rem]">
                  Обзор NOMI S2: от коробки до первого кормления
                </p>
                <span className="mono shrink-0 text-[0.75rem] text-white/70">
                  4:12
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="min-w-0 lg:col-span-4">
        <p className="eyebrow eyebrow-light">Что в ролике</p>
        <ul className="mt-5 border-t border-white/12">
          {chapters.map(([time, text]) => (
            <li
              key={time}
              className="flex items-baseline gap-4 border-b border-white/12 py-3.5"
            >
              <span className="mono shrink-0 text-[0.8125rem] text-accent-bright">
                {time}
              </span>
              <span className="min-w-0 text-[0.9375rem] text-white/80">{text}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-[38ch] text-[0.875rem] leading-relaxed text-white/50">
          Снимали дома у Паши и его бенгала Хвата. Без монтажных склеек в момент
          выдачи порции — видно, сколько на самом деле сыпется.
        </p>
      </div>
    </div>
  );
}
