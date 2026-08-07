import Link from "next/link";
import { priceRub, product } from "@/content";

const nav = [
  { href: "#how", label: "Как работает" },
  { href: "#specs", label: "Характеристики" },
  { href: "#views", label: "Ракурсы" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#delivery", label: "Доставка" },
];

export function Header({ tone = "paper" }: { tone?: "paper" | "ink" }) {
  const ink = tone === "ink";
  return (
    <header
      className={[
        "sticky top-0 z-50 border-b",
        ink
          ? "bg-ink text-white border-white/12"
          : "bg-paper/92 backdrop-blur-md border-line",
      ].join(" ")}
    >
      <div className="mx-auto flex h-16 max-w-[1340px] items-center gap-4 px-5 sm:h-[72px] sm:px-8">
        <Link href="/" className="flex shrink-0 items-baseline gap-2">
          <span
            className="display text-[1.35rem] sm:text-[1.5rem]"
            style={{ letterSpacing: "-0.02em" }}
          >
            NOMI
          </span>
          <span
            className={`mono hidden text-[10px] tracking-[0.18em] uppercase sm:inline ${
              ink ? "text-white/45" : "text-faint"
            }`}
          >
            S2
          </span>
        </Link>

        <nav className="ml-6 hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`rule-link text-[0.9rem] font-medium ${
                ink ? "text-white/75 hover:text-white" : "text-ink-soft hover:text-ink"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 sm:gap-5">
          <div className="hidden text-right leading-none sm:block">
            <div className="figure text-[1.05rem]">{priceRub(product.price)}</div>
            <div
              className={`mono mt-1 text-[10px] line-through ${
                ink ? "text-white/40" : "text-faint"
              }`}
            >
              {priceRub(product.priceOld)}
            </div>
          </div>
          <a
            href="#order"
            className="btn btn-primary h-10 px-4 text-[0.875rem] sm:h-11 sm:px-6 sm:text-[0.9375rem]"
          >
            Купить
          </a>
        </div>
      </div>
    </header>
  );
}
