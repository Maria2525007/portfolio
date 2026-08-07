import Link from "next/link";
import { course } from "@/content";

const links = [
  { href: "#program", label: "Программа" },
  { href: "#author", label: "Автор" },
  { href: "#works", label: "Работы" },
  { href: "#price", label: "Стоимость" },
];

export default function Masthead({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  const paper = tone === "paper";

  return (
    <header
      className={
        paper
          ? "absolute inset-x-0 top-0 z-40 text-paper"
          : "sticky top-0 z-40 border-b border-line/70 bg-paper/85 backdrop-blur-md"
      }
    >
      <div className="mx-auto flex max-w-[86rem] items-center gap-6 px-5 py-4 md:px-10 md:py-5">
        <Link href="/" className="flex items-baseline gap-2.5">
          <span
            className="serif text-[1.4rem] leading-none font-medium tracking-[0.16em]"
            style={{ letterSpacing: "0.16em" }}
          >
            {course.brand}
          </span>
          <span className={paper ? "eyebrow eyebrow-paper hidden sm:inline" : "eyebrow hidden sm:inline"}>
            {course.streamNo}
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-8 text-[0.9rem] lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={paper ? "rule-link text-paper/80 hover:text-paper" : "rule-link text-muted hover:text-ink"}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#signup"
          className={
            paper
              ? "btn ml-auto px-5 py-3 text-[0.8125rem] lg:ml-0"
              : "btn ml-auto px-5 py-3 text-[0.8125rem] lg:ml-0"
          }
        >
          Записаться
        </a>
      </div>
    </header>
  );
}
