# Week 05–06 — Tailwind CSS & Cursor Workflow Workshop — Design

**Date:** 2026-08-08
**Module:** `Week_05_06/01_tailwind_cursor_workshop/`
**Supersedes:** `2026-08-04-week05-tailwind-cursor-design.md` (that design used the
e-commerce reference app as the vehicle; the e-commerce build since became its own
course, `Week_05_06/02_react_ecommerce_project`. This workshop keeps the same four
syllabus skills but switches the vehicle to the Purity UI Dashboard.)

## Problem

The Week 05–06 syllabus item "Tailwind CSS & Cursor Workflow" teaches four skills:

1. ถอด screenshot, wireframe หรือ requirement ออกมาเป็น prompt สำหรับ UI ที่ชัดเจน
2. ใช้ Cursor Agent สร้าง UI ฉบับแรก หลังเข้าใจโครงสร้างแล้ว
3. ตรวจโค้ด Tailwind ที่ AI สร้าง ทั้งการรองรับทุกขนาดหน้าจอ, Accessibility และการดูแลรักษา
4. Refactor UI ที่ AI สร้างให้เป็น React component ที่นำกลับมาใช้ซ้ำได้

**Vehicle:** the Purity UI Dashboard (Creative Tim & Simmmple), a Figma community
file the students receive as their "design handoff":
`https://www.figma.com/design/TvhgVvFBvybHh6BUyEvZRl/Purity-UI-Dashboard---Chakra-UI-Dashboard--Community-`

Four screens (screenshots in `Week_05_06/01_tailwind_cursor_workshop/screenshot/`):

| File | Screen | Contents |
| --- | --- | --- |
| `01.png` | Dashboard | Sidebar, top navbar with breadcrumb + search, 4 stat cards (Today's Money $53,000 +55%, Today's Users 2,300 +5%, New Clients +3,052 −14%, Total Sales $173,000 +8%), 2 promo cards, Active Users bar-chart card, Sales overview line-chart card, Projects table (companies/members/budget/completion), Orders overview timeline |
| `02.png` | Tables | Authors table (avatar, name/email, function, Online/Offline status badge, employed date, Edit) and Projects table (completion progress bars, status) |
| `03.png` | Profile | Teal wave hero, profile header card with tabs (Overview/Teams/Projects), Platform Settings toggles, Profile Information, Conversations list, project cards grid |
| `04.png` | Sign Up | Teal wave hero with centered navbar, "Welcome!" heading, register card (social buttons Facebook/Apple/Google, Name/Email/Password fields, Remember-me toggle, SIGN UP button) |

Students rebuild these screens with **Vite + React + TypeScript + Tailwind CSS v4**,
driving **Cursor Agent** through the recurring loop **prompt → generate → review →
refactor**. The dashboard is a genuinely different UI genre from the Week 05–06
e-commerce storefront (admin shell, data tables, stat cards, forms), so the two
courses complement rather than repeat each other.

Decisions confirmed with the course author (2026-08-08):

- **Depth:** ~16 lessons in 6 chapters, Week_04 lesson format.
- **Tailwind base:** teach essentials first (students arrive from the Week 04 React
  course and have not used Tailwind).
- **Sample code:** lessons only, self-contained — **no companion repo links**
  (students generate their own code with Cursor; snippets in lessons are the
  canonical reference).
- **Stack:** Vite + React + TS + **Tailwind v4** (CSS-first config, `@theme`,
  `@tailwindcss/vite`).

## Structure

```
Week_05_06/
└── 01_tailwind_cursor_workshop/
    ├── url.md                  (Figma link — existing)
    ├── screenshot/             (design handoff originals 01–04.png — existing)
    ├── content/
    │   ├── 01_intro.html … 16_wrap_up.html
    │   ├── index.html          (chapter-card TOC, same markup as Week_04)
    │   ├── lesson.css          (copied unchanged from Week_04)
    │   └── images/
    │       ├── dashboard.png   (copy of screenshot/01.png)
    │       ├── tables.png      (copy of screenshot/02.png)
    │       ├── profile.png     (copy of screenshot/03.png)
    │       └── signup.png      (copy of screenshot/04.png)
    └── verify_lessons.py       (copied unchanged from Week_04 — self-deriving)
```

### Lessons — 16 lessons in 6 chapters

| # | File | Lesson (Thai title — English) |
| --- | --- | --- |
| **บทที่ 1 — เริ่มต้น (Getting Started)** | | |
| 1 | `01_intro.html` | บทนำ: Workshop นี้เราจะสร้างอะไร — Intro. Tour of the 4 screens, the four skills, the workflow loop, why AI output is a first draft the engineer owns. |
| 2 | `02_setup.html` | ติดตั้งโปรเจกต์และ Cursor — Project & Cursor Setup. Vite + React + TS scaffold, Tailwind v4 wiring, Cursor tour (Tab / Inline Edit / Agent, @-context, image attach), `.cursor/rules/project.mdc`. |
| **บทที่ 2 — Tailwind CSS พื้นฐาน (Tailwind Essentials)** | | |
| 3 | `03_utility_first.html` | Utility-First และ Utilities หลัก — Utility-First & Core Utilities. The mindset (vs the SCSS modules students used in Week 04), spacing/typography/color/border/shadow/flex/grid/sizing taught by building one stat card. |
| 4 | `04_responsive_states.html` | Responsive และ States — Responsive & States. Mobile-first breakpoints, `hover:`/`focus-visible:`/`disabled:`/`group-hover:`, testing in DevTools. |
| 5 | `05_theme_tokens.html` | Design Tokens ด้วย @theme — Design Tokens. Extract the Purity palette from Figma into `@theme` (teal primary, ink navy, muted gray, surface), fonts, taming class order with prettier-plugin-tailwindcss. |
| **บทที่ 3 — จาก Screenshot สู่ Prompt (Screenshot to Prompt)** | | |
| 6 | `06_reading_ui.html` | อ่านโครงสร้าง UI จาก Screenshot — Reading a UI. Decompose the Dashboard screenshot: regions, layout grid, spacing rhythm, typography scale, recurring patterns (card, badge, table row). *(skill 1)* |
| 7 | `07_prompt_anatomy.html` | เขียน UI Prompt ที่ชัดเจน — Prompt Anatomy. Bad prompt vs the four-part anatomy (บริบท / โครงสร้าง / ข้อกำหนดทางเทคนิค / ขอบเขต); worked full prompt for the app shell. *(skill 1)* |
| 8 | `08_figma_handoff.html` | ใช้ Figma ประกอบ Prompt — Working from Figma. Inspect exact values (colors, spacing, radii, fonts) in the community file, export assets, when the screenshot is enough vs when to open Figma; wireframes and text-only requirements use the same anatomy. *(skill 1)* |
| **บทที่ 4 — สร้าง UI ด้วย Cursor Agent (Building with the Agent)** | | |
| 9 | `09_app_shell.html` | App Shell: Sidebar และ Navbar — The App Shell. First full loop: prompt from lesson 07, generate sidebar + navbar + content area with react-router; output carries planted defects (fixed width, div-buttons, no focus styles) logged as TODOs. *(skill 2)* |
| 10 | `10_dashboard_page.html` | หน้า Dashboard — The Dashboard Page. Stat cards, promo cards, chart placeholder cards, Projects table, Orders timeline; mock data in files. *(skill 2)* |
| 11 | `11_tables_signup.html` | หน้า Tables และ Sign Up — Tables & Sign Up Pages. The loop runs twice, faster; status badges, progress bars, auth hero + form card. Profile page is deferred as the capstone exercise. *(skill 2)* |
| **บทที่ 5 — ตรวจโค้ดที่ AI สร้าง (Reviewing AI Code)** | | |
| 12 | `12_review_responsive.html` | ตรวจ Responsive — Responsive Review. Checklist; hunt the planted fixed width; sidebar becomes a mobile drawer; tables get `overflow-x-auto`. *(skill 3)* |
| 13 | `13_review_accessibility.html` | ตรวจ Accessibility — Accessibility Review. Checklist; hunt the planted div-buttons + missing focus styles; teal-on-white contrast trap; table semantics (`th scope`), toggle switches need real inputs; Lighthouse/axe. *(skill 3)* |
| 14 | `14_review_maintainability.html` | ตรวจ Maintainability — Maintainability Review. Class-string duplication, arbitrary `[...]` values vs tokens, nested ternaries in className, generic names; checklist. *(skill 3)* |
| **บทที่ 6 — Refactor เป็น Component (Refactor to Components)** | | |
| 15 | `15_refactor_components.html` | แยกเป็น Reusable Components — Extracting Components. StatCard, NavItem, Button (variant-map pattern), StatusBadge, ProgressBar; props design; Agent-assisted refactor with diff review. *(skill 4)* |
| 16 | `16_wrap_up.html` | สรุปและก้าวต่อไป — Wrap Up. Recap the loop + three review lenses; capstone: build the Profile page solo with the full workflow; extension ideas. |

### `index.html` TOC

Same chapter-card markup as Week_04: 6 `section.chapter-card` blocks with bilingual
headings and `ol` lists using `start` offsets.

## Content conventions

- **Lesson format** identical to Week_04: `lang="th"`, meta description,
  `lesson-eyebrow` (`บทเรียน NN · <Thai chapter name>`), `lesson-header` with Thai
  `h1` and `lesson-original-title` in English, Thai prose with English technical
  terms untranslated, `pre > code.language-*` blocks, `lesson-navigation` footer
  (prev / สารบัญ / next; lesson 01 has no prev, lesson 16 no next).
- **`<title>` suffix:** `| Tailwind CSS และ Cursor Workflow`.
- **The loop as a visible template.** Build lessons (09, 10, 11) use recurring `h2`
  sections: 🎯 เป้าหมาย → 📝 เขียน Prompt → 🤖 สิ่งที่ Agent สร้าง → 🔍 ตรวจทาน →
  🔧 Refactor. In chapter 4 the 🔍/🔧 steps stay shallow ("log suspicions"), because
  chapters 5–6 do them in full — the planted defects from lesson 09 are the review
  chapter's teaching material.
- **Prompts shown in lessons are in Thai** with English technical vocabulary, in
  copy-able `pre` blocks.
- **Design tokens** (approximate values read from the Figma file / screenshots,
  stated as such in lesson 05):
  `--color-primary: #4fd1c5`, `--color-primary-dark: #38b2ac`,
  `--color-ink: #2d3748`, `--color-muted: #a0aec0`, `--color-surface: #f8f9fa`,
  `--color-success: #48bb78`, `--color-danger: #e53e3e`.
- **Project identity:** app name "Purity Dashboard"; routes `/` (Dashboard),
  `/tables`, `/profile`, `/signup`; folder structure `src/app` (router, layout),
  `src/pages`, `src/components` (shared UI) — simpler than the e-commerce course's
  feature folders because this is a UI workshop, not a full app.
- **Charts are placeholder cards** (static bars/SVG) — charting libraries are out
  of scope; the lesson says so explicitly.

## Versions

- **Tailwind CSS v4 only**: `npm install tailwindcss @tailwindcss/vite`,
  `@import "tailwindcss"`, `@theme`. Never show `tailwind.config.js`,
  `npx tailwindcss init`, or `@tailwind base` (v3 idioms).
- **Cursor** current UX: Agent mode, rules in `.cursor/rules/`, @-file context,
  image attachments; note in lesson 02 that Cursor's UI changes fast but the
  concepts (agent, context, rules, review) are stable.
- React 19 + TypeScript + Vite; react-router (data mode) only for page switching.

## Verification

- Copy Week_04's self-deriving `verify_lessons.py` unchanged;
  `python3 Week_05_06/01_tailwind_cursor_workshop/verify_lessons.py` passes before
  the work is considered done.
- Manual pass: open `index.html`, spot-check chapter order, nav chain, images.

## Out of scope

- No quiz JSON for `extra/` (not requested).
- No companion repo, no `start/`/`finish/` folders.
- No charting library, no real API, no auth logic (Sign Up is UI only).
- No testing lessons — Week 04 covered testing.
- RTL page and Billing page of the Figma file are not covered (not in the
  screenshot set).
