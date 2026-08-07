import Link from "next/link";
import { course } from "@/content";

const columns = [
  {
    title: "Курс",
    links: [
      { href: "#program", label: "Программа" },
      { href: "#price", label: "Тарифы" },
      { href: "#faq", label: "Вопросы" },
      { href: "#signup", label: "Записаться" },
    ],
  },
  {
    title: "Связь",
    links: [
      { href: "mailto:hi@svetlo.school", label: "hi@svetlo.school" },
      { href: "#signup", label: "Телеграм: @svetlo_school" },
      { href: "#works", label: "Работы учеников" },
    ],
  },
];

export default function Footer({ variant }: { variant: "a" | "b" }) {
  return (
    <footer className="border-t border-paper/15 bg-ink text-paper">
      <div className="mx-auto max-w-[86rem] px-5 py-14 md:px-10 md:py-16">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-5">
            <p className="serif text-[1.6rem] leading-none font-medium tracking-[0.16em] text-paper">
              {course.brand}
            </p>
            <p className="mt-5 max-w-[34ch] text-[0.9375rem] leading-relaxed text-paper/55">
              {course.tagline} для тех, у кого в кармане уже есть всё необходимое.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="lg:col-span-3">
              <p className="eyebrow eyebrow-paper">{column.title}</p>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="rule-link text-[0.9375rem] text-paper/70 hover:text-paper"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1" />
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-paper/15 pt-7 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-[0.8125rem] leading-relaxed text-paper/40">
            Демонстрационная работа для портфолио. Бренд, тексты и цены вымышленные, фотографии
            учеников — свободные снимки.
          </p>

          <Link
            href={variant === "a" ? "/hero-b" : "/"}
            className="rule-link shrink-0 text-[0.8125rem] text-paper/55 hover:text-paper"
          >
            {variant === "a"
              ? "Второй вариант первого экрана →"
              : "← Первый вариант первого экрана"}
          </Link>
        </div>
      </div>
    </footer>
  );
}
