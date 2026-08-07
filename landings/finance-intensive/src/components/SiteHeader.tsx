import Link from "next/link";
import { event } from "@/content";

export default function SiteHeader({ variant }: { variant: "a" | "b" }) {
  return (
    <header className="relative z-20 border-b border-line">
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-baseline gap-3">
          <span className="display text-xl tracking-[0.14em] text-text">
            {event.brand}
          </span>
          <span className="label hidden sm:inline">интенсив</span>
        </Link>

        <div className="flex items-center gap-6">
          <span className="label hidden md:inline">
            {event.city} · {event.dateLong}
          </span>
          <a href="#order" className="label label-accent link-rule">
            Забрать место
          </a>
          {/* Cross-link between the two hero studies, kept out of the way. */}
          <Link
            href={variant === "a" ? "/hero-b" : "/"}
            className="label hidden lg:inline link-rule"
          >
            {variant === "a" ? "вариант B" : "вариант A"}
          </Link>
        </div>
      </div>
    </header>
  );
}
