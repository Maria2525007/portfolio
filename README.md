# Portfolio — daysnotweeks

My freelance site: [daysnotweeks.vercel.app](https://daysnotweeks.vercel.app). One
scrolling page — work, services, process, contact — content-driven from a single
`src/content.ts` file rather than scattered across components.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4. No CMS, no database —
all copy and case-study data lives in `content.ts`.

## Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          # assembles the page from content.ts
│   └── globals.css
├── components/
│   └── ScrollReveal.tsx  # scroll-triggered section reveals
└── content.ts             # site copy, services, pricing, case studies
```

## Case studies

Currently live: **Time League** for Raketa watch manufactory (via agency) — a
dark, cosmic single-page site for a private collectors' club, hand-written HTML/CSS,
no framework. See [raketa](https://github.com/Maria2525007/raketa).

Four more cases (cat-feeder, grooming, photo-course, finance-intensive) are in
progress of being added.

## Services offered

Landing page, Telegram bot, or a small multi-page site/web app — pricing and delivery
timelines are defined in `content.ts` under `services`.

## Running it

```bash
npm install
npm run dev
```
