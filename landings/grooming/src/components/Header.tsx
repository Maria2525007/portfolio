import Link from "next/link";
import Wordmark from "./Wordmark";
import { nav, studio } from "@/content";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center gap-6 px-5 sm:px-8 lg:h-[72px]">
        <Link href="/" aria-label={`${studio.name} — на главную`}>
          <Wordmark />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rule-link text-[0.875rem] text-ink-soft hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href={studio.phoneHref}
            className="tnum hidden text-[0.9375rem] font-medium text-ink sm:block"
          >
            {studio.phone}
          </a>
          <a
            href="#booking"
            className="btn btn-primary h-10 px-4 text-[0.875rem] sm:px-5"
          >
            Записаться
          </a>
        </div>
      </div>
    </header>
  );
}
