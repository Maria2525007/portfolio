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
    <div className="reveal flex items-baseline gap-5 border-t border-rule pt-5">
      <span className="eyebrow shrink-0 tabular-nums">{index}</span>
      <span className="eyebrow shrink-0">{eyebrow}</span>
      <span aria-hidden className="hidden h-px flex-1 bg-rule sm:block" />
      <h2 className="sr-only">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ScrollReveal />

      <header className="sticky top-0 z-30 border-b border-rule/70 bg-paper/85 backdrop-blur-md">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-5 py-4 sm:px-8"
        >
          <a href="#top" className="display text-xl leading-none sm:text-2xl">
            {site.name}
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-rule text-sm text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={tg}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 border border-accent px-4 py-2 text-xs font-medium tracking-[0.14em] text-accent uppercase transition-colors hover:bg-accent hover:text-paper"
          >
            Telegram
          </a>
        </nav>
      </header>

      <main id="top" className="relative z-10 mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        {/* ── Hero ───────────────────────────────────────────────── */}
        <section className="grid gap-12 pt-16 pb-20 sm:pt-24 lg:grid-cols-12 lg:gap-10 lg:pt-32 lg:pb-32">
          <div className="lg:col-span-7">
            <p className="eyebrow reveal">{hero.eyebrow}</p>
            <h1 className="display reveal mt-7 text-[clamp(2.75rem,9vw,5.75rem)]">
              {hero.headlineLead}{" "}
              <em className="text-accent italic">{hero.headlineAccent}</em>
              {hero.headlineTail}
            </h1>
            <p className="reveal mt-8 max-w-xl text-lg leading-relaxed text-pretty text-ink-muted">
              {hero.lede}
            </p>
            <div className="reveal mt-10 flex flex-wrap items-center gap-4">
              <a
                href={tg}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent px-7 py-3.5 text-sm font-medium tracking-[0.1em] text-paper uppercase transition-colors hover:bg-accent-soft"
              >
                Start a project
              </a>
              <a
                href="#work"
                className="link-rule py-3.5 text-sm font-medium tracking-[0.1em] text-ink uppercase"
              >
                See the work
              </a>
            </div>
          </div>

          <div className="reveal lg:col-span-4 lg:col-start-9">
            <div className="relative aspect-4/5 w-full max-w-sm overflow-hidden border border-rule lg:max-w-none">
              <Image
                src="/maria.jpg"
                alt={`${site.name}, ${site.role.toLowerCase()}`}
                fill
                priority
                sizes="(max-width: 1024px) 384px, 33vw"
                className="object-cover object-[30%_center] contrast-[1.04] saturate-[0.85]"
              />
            </div>
            <p className="eyebrow mt-4">
              {site.name} — {site.role}
            </p>
          </div>
        </section>

        {/* ── About ──────────────────────────────────────────────── */}
        <section id="about" className="scroll-mt-24 pb-20 sm:pb-28">
          <SectionHeading index="00" eyebrow="About" title="About" />
          <div className="mt-10 grid gap-8 lg:grid-cols-12">
            <p className="reveal display text-[clamp(1.6rem,3.4vw,2.4rem)] lg:col-span-6">
              {about[0]}
            </p>
            <div className="reveal space-y-5 text-base leading-relaxed text-ink-muted lg:col-span-5 lg:col-start-8">
              <p>{about[1]}</p>
              <p>{about[2]}</p>
            </div>
          </div>
        </section>

        {/* ── Work ───────────────────────────────────────────────── */}
        <section id="work" className="scroll-mt-24 pb-20 sm:pb-28">
          <SectionHeading index="01" eyebrow="Selected work" title="Selected work" />

          <div className="mt-12 space-y-24 sm:space-y-32">
            {projects.map((project) => (
              <article key={project.index} className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="reveal lg:col-span-7">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden border border-rule"
                  >
                    <Image
                      src={project.image}
                      alt={project.alt}
                      width={1600}
                      height={1000}
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </a>
                </div>

                <div className="reveal lg:col-span-5">
                  <div className="flex items-baseline gap-4">
                    <span className="eyebrow tabular-nums">{project.index}</span>
                    <span className="eyebrow">
                      {project.kind} — {project.year}
                    </span>
                  </div>

                  <h3 className="display mt-4 text-[clamp(2rem,4.5vw,3rem)]">{project.title}</h3>
                  <p className="mt-2 text-sm text-ink-faint">{project.client}</p>

                  <dl className="mt-8 space-y-6 text-[0.95rem] leading-relaxed">
                    <div>
                      <dt className="eyebrow">The problem</dt>
                      <dd className="mt-2 text-ink-muted">{project.challenge}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">What I did</dt>
                      <dd className="mt-2 text-ink-muted">{project.approach}</dd>
                    </div>
                    <div>
                      <dt className="eyebrow">Result</dt>
                      <dd className="mt-2 text-ink">{project.outcome}</dd>
                    </div>
                  </dl>

                  <div className="mt-8 flex flex-wrap gap-6">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-rule text-sm font-medium tracking-[0.08em] text-accent uppercase"
                    >
                      View live ↗
                    </a>
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-rule text-sm font-medium tracking-[0.08em] text-ink-muted uppercase"
                    >
                      Source ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Services ───────────────────────────────────────────── */}
        <section id="services" className="scroll-mt-24 pb-20 sm:pb-28">
          <SectionHeading index="02" eyebrow="Services" title="Services" />

          <div className="mt-4">
            {services.map((service) => (
              <article
                key={service.index}
                className="reveal grid gap-6 border-b border-rule py-10 lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-4">
                    <span className="eyebrow tabular-nums">{service.index}</span>
                    <h3 className="display text-[clamp(1.75rem,3.6vw,2.5rem)]">{service.title}</h3>
                  </div>
                  <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-ink-muted">
                    {service.summary}
                  </p>
                </div>

                <ul className="space-y-2.5 text-[0.95rem] text-ink-muted lg:col-span-5">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="lg:col-span-3 lg:text-right">
                  <p className="display text-[clamp(1.6rem,3vw,2.1rem)] whitespace-nowrap">
                    {service.priceUsd}
                  </p>
                  <p className="mt-1 text-sm text-ink-faint">{service.priceRub}</p>
                  <p className="eyebrow mt-4">Delivered in {service.timeline}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="reveal mt-6 text-sm text-ink-faint">
            Fixed price agreed before the work starts — no hourly billing, no surprises.
          </p>
        </section>

        {/* ── Process ────────────────────────────────────────────── */}
        <section id="process" className="scroll-mt-24 pb-20 sm:pb-28">
          <SectionHeading index="03" eyebrow="How it works" title="How it works" />

          <ol className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <li key={step.index} className="reveal border-t border-rule pt-5">
                <span className="eyebrow tabular-nums">{step.index}</span>
                <h3 className="display mt-4 text-[clamp(1.35rem,2.4vw,1.75rem)]">{step.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ── Contact ────────────────────────────────────────────── */}
        <section id="contact" className="scroll-mt-24 pb-24 sm:pb-32">
          <SectionHeading index="04" eyebrow="Contact" title="Contact" />

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="display reveal text-[clamp(2.25rem,6vw,4rem)]">
                Tell me what you need built.
                <br />
                <em className="text-accent italic">I&rsquo;ll reply the same day.</em>
              </p>
              <p className="reveal mt-7 max-w-lg text-lg leading-relaxed text-ink-muted">
                A link, a rough idea, or a full brief — all of it works. If it isn&rsquo;t something
                I should take on, I&rsquo;ll say so straight away.
              </p>
            </div>

            <div className="reveal lg:col-span-4 lg:col-start-9">
              <a
                href={tg}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline justify-between gap-4 border-t border-rule py-5 transition-colors hover:text-accent"
              >
                <span className="eyebrow">Telegram</span>
                <span className="text-lg">@{site.telegram}</span>
              </a>
              <a
                href={mailto}
                className="flex items-baseline justify-between gap-4 border-t border-rule py-5 transition-colors hover:text-accent"
              >
                <span className="eyebrow">Email</span>
                <span className="text-sm break-all sm:text-base">{site.email}</span>
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline justify-between gap-4 border-y border-rule py-5 transition-colors hover:text-accent"
              >
                <span className="eyebrow">GitHub</span>
                <span className="text-lg">Maria2525007</span>
              </a>

              <a
                href={tg}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block bg-accent px-7 py-4 text-center text-sm font-medium tracking-[0.1em] text-paper uppercase transition-colors hover:bg-accent-soft"
              >
                Message me on Telegram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-rule">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-3 px-5 py-8 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>Built with Next.js — deployed on Vercel</span>
        </div>
      </footer>
    </>
  );
}
