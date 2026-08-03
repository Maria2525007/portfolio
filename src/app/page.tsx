import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { about, hero, process, projects, services, site } from "@/content";

const tg = `https://t.me/${site.telegram}`;
const mailto = `mailto:${site.email}`;

const nav = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const tickerItems = services.flatMap((s) => [s.title, `${s.timeline} delivery`]);

function SectionHeading({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="reveal flex items-center gap-4 border-t border-line pt-5">
      <span className="label label-accent tabular-nums">{index}</span>
      <span className="label">{eyebrow}</span>
      <span aria-hidden className="hidden h-px flex-1 bg-line sm:block" />
      <h2 className="sr-only">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ScrollReveal />

      <header className="sticky top-0 z-30 border-b border-line bg-bg/80 backdrop-blur-xl">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-5 py-4 sm:px-8"
        >
          <a href="#top" className="display text-base sm:text-lg">
            {site.name}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-rule font-mono text-xs tracking-[0.12em] text-muted uppercase transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={tg}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-accent shrink-0 bg-accent px-4 py-2 font-mono text-xs font-medium tracking-[0.12em] text-accent-ink uppercase hover:bg-accent-dim"
          >
            Hire me
          </a>
        </nav>
      </header>

      <main id="top" className="relative z-10 w-full">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="mx-auto grid max-w-[1180px] gap-12 px-5 pt-16 pb-16 sm:px-8 sm:pt-24 lg:grid-cols-12 lg:gap-10 lg:pt-28">
          <div className="lg:col-span-7">
            <p className="label reveal flex items-center gap-2.5">
              <span aria-hidden className="inline-block size-1.5 bg-accent" />
              {hero.eyebrow}
            </p>
            <h1 className="display reveal mt-7 text-[clamp(2.6rem,8.4vw,5.5rem)]">
              {hero.headlineLead}{" "}
              <span className="text-accent">{hero.headlineAccent}</span>
              {hero.headlineTail}
            </h1>
            <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-pretty text-muted">
              {hero.lede}
            </p>
            <div className="reveal mt-10 flex flex-wrap items-center gap-4">
              <a
                href={tg}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-accent bg-accent px-7 py-3.5 font-mono text-sm font-medium tracking-[0.08em] text-accent-ink uppercase hover:bg-accent-dim"
              >
                Start a project
              </a>
              <a
                href="#work"
                className="border border-line-bright px-7 py-3.5 font-mono text-sm tracking-[0.08em] text-text uppercase transition-colors hover:border-accent hover:text-accent"
              >
                See the work
              </a>
            </div>
          </div>

          <div className="reveal lg:col-span-4 lg:col-start-9">
            <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden border border-line-bright bg-surface lg:max-w-none">
              <Image
                src="/maria.jpg"
                alt={`${site.name}, ${site.role.toLowerCase()}`}
                fill
                priority
                sizes="(max-width: 1024px) 384px, 33vw"
                className="object-cover object-[30%_center] contrast-[1.08]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg from-2% via-bg/55 via-22% to-transparent to-52%"
              />
              <p className="label label-bright absolute bottom-3 left-3">
                {site.name} / {site.role}
              </p>
            </div>
          </div>
        </section>

        {/* ── Ticker ─────────────────────────────────────────────── */}
        <div
          aria-hidden
          className="overflow-hidden border-y border-line bg-surface/60 py-3.5"
        >
          <div className="ticker">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex shrink-0 items-center">
                {tickerItems.map((item, i) => (
                  <span key={`${copy}-${i}`} className="flex items-center">
                    <span className="label px-6 whitespace-nowrap">{item}</span>
                    <span className="size-1 shrink-0 bg-accent" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
          {/* ── About ────────────────────────────────────────────── */}
          <section id="about" className="scroll-mt-24 pt-20 pb-20 sm:pt-28 sm:pb-28">
            <SectionHeading index="00" eyebrow="About" title="About" />
            <div className="mt-10 grid gap-8 lg:grid-cols-12">
              <p className="reveal display-soft text-[clamp(1.5rem,3.2vw,2.25rem)] lg:col-span-6">
                {about[0]}
              </p>
              <div className="reveal space-y-5 text-base leading-relaxed text-muted lg:col-span-5 lg:col-start-8">
                <p>{about[1]}</p>
                <p>{about[2]}</p>
              </div>
            </div>
          </section>

          {/* ── Work ─────────────────────────────────────────────── */}
          <section id="work" className="scroll-mt-24 pb-20 sm:pb-28">
            <SectionHeading index="01" eyebrow="Selected work" title="Selected work" />

            <div className="mt-12 space-y-24">
              {projects.map((project) => (
                <article key={project.index} className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                  <div className="reveal lg:col-span-7">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden border border-line-bright transition-colors hover:border-accent"
                    >
                      <Image
                        src={project.image}
                        alt={project.alt}
                        width={1600}
                        height={1000}
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </a>
                  </div>

                  <div className="reveal lg:col-span-5">
                    <div className="flex items-center gap-4">
                      <span className="label label-accent tabular-nums">{project.index}</span>
                      <span className="label">
                        {project.kind} / {project.year}
                      </span>
                    </div>

                    <h3 className="display mt-4 text-[clamp(2rem,4.5vw,2.75rem)]">
                      {project.title}
                    </h3>
                    <p className="mt-2 font-mono text-xs text-faint">{project.client}</p>

                    <dl className="mt-8 space-y-6 text-[0.95rem] leading-relaxed">
                      <div>
                        <dt className="label">The problem</dt>
                        <dd className="mt-2 text-muted">{project.challenge}</dd>
                      </div>
                      <div>
                        <dt className="label">What I did</dt>
                        <dd className="mt-2 text-muted">{project.approach}</dd>
                      </div>
                      <div>
                        <dt className="label">Result</dt>
                        <dd className="mt-2 text-text">{project.outcome}</dd>
                      </div>
                    </dl>

                    <div className="mt-8 flex flex-wrap gap-6">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-rule font-mono text-xs tracking-[0.1em] text-accent uppercase"
                      >
                        View live ↗
                      </a>
                      <a
                        href={project.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-rule font-mono text-xs tracking-[0.1em] text-muted uppercase"
                      >
                        Source ↗
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* ── Services ─────────────────────────────────────────── */}
          <section id="services" className="scroll-mt-24 pb-20 sm:pb-28">
            <SectionHeading index="02" eyebrow="Services" title="Services" />

            <div className="mt-10 grid gap-px bg-line md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.index}
                  className="reveal group flex flex-col bg-bg p-7 transition-colors hover:bg-surface"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="label label-accent tabular-nums">{service.index}</span>
                    <span className="label">{service.timeline}</span>
                  </div>

                  <h3 className="display mt-6 text-[clamp(1.5rem,2.6vw,1.9rem)]">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.summary}</p>

                  <ul className="mt-7 space-y-2.5 text-sm text-muted">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden className="mt-2 size-1 shrink-0 bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-end justify-between gap-4 border-t border-line pt-5">
                    <div>
                      <p className="display text-[clamp(1.5rem,2.6vw,1.9rem)] text-accent">
                        {service.priceUsd}
                      </p>
                      <p className="mt-1 font-mono text-xs text-faint">{service.priceRub}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="reveal mt-6 font-mono text-xs text-faint">
              Fixed price agreed before the work starts — no hourly billing, no surprises.
            </p>
          </section>

          {/* ── Process ──────────────────────────────────────────── */}
          <section id="process" className="scroll-mt-24 pb-20 sm:pb-28">
            <SectionHeading index="03" eyebrow="How it works" title="How it works" />

            <ol className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((step) => (
                <li key={step.index} className="reveal">
                  <div className="flex items-center gap-3">
                    <span className="label label-accent tabular-nums">{step.index}</span>
                    <span aria-hidden className="h-px flex-1 bg-line" />
                  </div>
                  <h3 className="display mt-5 text-[clamp(1.15rem,2vw,1.4rem)]">{step.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{step.body}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* ── Contact ──────────────────────────────────────────── */}
          <section id="contact" className="scroll-mt-24 pb-24 sm:pb-32">
            <SectionHeading index="04" eyebrow="Contact" title="Contact" />

            <div className="mt-12 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="display reveal text-[clamp(2rem,5.4vw,3.5rem)]">
                  Tell me what you need built.
                  <br />
                  <span className="text-accent">I&rsquo;ll reply the same day.</span>
                </p>
                <p className="reveal mt-7 max-w-lg text-lg leading-relaxed text-muted">
                  A link, a rough idea, or a full brief — all of it works. If it isn&rsquo;t
                  something I should take on, I&rsquo;ll say so straight away.
                </p>
              </div>

              <div className="reveal lg:col-span-4 lg:col-start-9">
                <a
                  href={tg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 border-t border-line py-5 transition-colors hover:text-accent"
                >
                  <span className="label">Telegram</span>
                  <span className="font-mono text-sm">@{site.telegram}</span>
                </a>
                <a
                  href={mailto}
                  className="flex items-center justify-between gap-4 border-t border-line py-5 transition-colors hover:text-accent"
                >
                  <span className="label">Email</span>
                  <span className="font-mono text-xs break-all sm:text-sm">{site.email}</span>
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 border-y border-line py-5 transition-colors hover:text-accent"
                >
                  <span className="label">GitHub</span>
                  <span className="font-mono text-sm">Maria2525007</span>
                </a>

                <a
                  href={tg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-accent mt-8 block bg-accent px-7 py-4 text-center font-mono text-sm font-medium tracking-[0.08em] text-accent-ink uppercase hover:bg-accent-dim"
                >
                  Message me on Telegram
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="relative z-10 border-t border-line">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-5 py-8 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>Next.js — deployed on Vercel</span>
        </div>
      </footer>
    </>
  );
}
