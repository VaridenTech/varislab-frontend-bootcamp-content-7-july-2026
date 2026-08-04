# Week 05 — Tailwind CSS & Cursor Workflow — Design

**Date:** 2026-08-04
**Module:** `Week_05/01_tailwind_cursor_ecommerce/`

## Problem

`Week_05/` is empty. The syllabus for สัปดาห์ที่ 5 is:

1. แปลง screenshot, wireframe หรือ requirement เป็น prompt สำหรับ UI ที่ชัดเจน
2. ใช้ Cursor Agent สร้าง UI ฉบับแรกหลังเข้าใจโครงสร้างแล้ว
3. ตรวจทานโค้ด Tailwind ที่ AI สร้างในด้านการรองรับทุกขนาดหน้าจอ, Accessibility และการดูแลรักษา
4. Refactor UI ที่ AI สร้างให้เป็น React component ที่นำกลับมาใช้ซ้ำได้

The vehicle is the reference app
[varis-lab-project-06-react-ecommerce-app](https://github.com/manjarb/varis-lab-project-06-react-ecommerce-app):
a dummyjson storefront (Home, Category, Product detail, Cart, Checkout, Order
Success) built with React 19 + TS + Vite, react-router 8 (data mode), TanStack
Query 5, react-hook-form + zod, Context + reducer cart with localStorage.

The reference app is styled with **SCSS modules**, not Tailwind. Week 05 uses it
as the **visual and functional target**: students turn its screens into prompts,
have Cursor Agent generate **Tailwind** UI, review that output, refactor it into
reusable components, and wire the same real logic — a **full app rebuild** by
the end of the week.

Decisions confirmed with the course author:

- **Scope:** full app rebuild — Tailwind UI *plus* routing, dummyjson API, cart
  and checkout logic.
- **Sample code:** lessons only. No `start/`/`finish/` folders in this repo; the
  GitHub repo above is the finished reference.
- **Depth:** ~20 lessons, Week_04 lesson format.
- **Approach:** workflow-woven — foundations first, then page-by-page builds
  where every page repeats the loop *prompt → generate → review → refactor*.

## Structure

```
Week_05/
└── 01_tailwind_cursor_ecommerce/
    ├── content/
    │   ├── 01_intro.html … 20_wrap_up.html
    │   ├── index.html          (chapter-card TOC, same markup as Week_04)
    │   ├── lesson.css          (copied unchanged from Week_04)
    │   └── images/             (screenshots of the reference app,
    │                            referenced as `images/…` like Week_04)
    └── verify_lessons.py       (adapted from Week_04)
```

### Lessons — 20 lessons in 6 chapters

| # | File | Lesson (Thai title — English) |
| --- | --- | --- |
| **บทที่ 1 — ปฐมนิเทศ (Orientation)** | | |
| 1 | `01_intro.html` | บทนำ: สัปดาห์นี้เราจะสร้างอะไร — Intro. Tour of every page of the reference app, the workflow loop, why AI code must be reviewed. |
| **บทที่ 2 — Tailwind CSS พื้นฐาน (Tailwind Fundamentals)** | | |
| 2 | `02_utility_first.html` | แนวคิด Utility-First — Utility-First CSS. What Tailwind is; honest comparison with the SCSS modules students saw in Week_04's coffee-master project. |
| 3 | `03_tailwind_setup.html` | เริ่มใช้ Tailwind v4 กับ Vite — Tailwind Setup. `@tailwindcss/vite`, `@import "tailwindcss"`, CSS-first config. |
| 4 | `04_core_utilities.html` | Utilities หลัก — Core Utilities. Spacing, typography, color, border/shadow, flex, grid. |
| 5 | `05_responsive.html` | Responsive แบบ Mobile-first — Responsive Design. Breakpoint prefixes, common layout patterns. |
| 6 | `06_states_tokens.html` | States, Design Tokens และการจัดระเบียบ — States & Tokens. hover/focus/disabled, `@theme` brand tokens, taming long class lists. |
| **บทที่ 3 — Cursor Workflow** | | |
| 7 | `07_cursor_agent.html` | รู้จัก Cursor และ Cursor Agent — Meet Cursor. Agent mode, @-context, `.cursor/rules`, model choice. |
| 8 | `08_screenshot_to_prompt.html` | จาก Screenshot สู่ Prompt — Screenshot to Prompt. Anatomy of a clear UI prompt; worked example with the Home page screenshot. *(bullet 1)* |
| **บทที่ 4 — เริ่มสร้างโปรเจกต์ (Project Kickoff)** | | |
| 9 | `09_project_setup.html` | ตั้งโครงโปรเจกต์ — Project Setup. Vite + TS + Tailwind + react-router scaffold, `app/pages/features/shared` structure mirroring the repo, project `.cursor/rules`. |
| 10 | `10_first_layout.html` | สร้าง Layout แรกด้วย Agent — First Layout. Header/Footer/MainLayout; the full loop introduced step by step. *(bullet 2)* |
| **บทที่ 5 — ตรวจทานโค้ดที่ AI สร้าง (Reviewing AI Code)** *(bullet 3, deep dives on the lesson-10 output)* | | |
| 11 | `11_review_responsive.html` | ตรวจ Responsive — Responsive Review. Fixed widths, missing breakpoints, overflow — classic Agent mistakes and how to fix them. |
| 12 | `12_review_accessibility.html` | ตรวจ Accessibility — Accessibility Review. Semantics, alt/labels, focus visibility, contrast, keyboard; axe / Lighthouse. |
| 13 | `13_review_maintainability.html` | ตรวจ Maintainability และแยก Reusable Component — Maintainability & Refactor. Duplication, magic values; extract `Button` and shared components with props/variants. *(bullet 4)* |
| **บทที่ 6 — สร้างแอปทีละหน้า (Building Page by Page)** *(each lesson repeats the loop, fast)* | | |
| 14 | `14_home_page.html` | หน้า Home — Home Page. Banner carousel (Swiper), deals + countdown, categories, feature cards. |
| 15 | `15_real_data.html` | ต่อข้อมูลจริง — Real Data. axios client, TanStack Query, loading skeletons; dummyjson products/categories. |
| 16 | `16_category_page.html` | หน้า Category — Category Page. Product grid, category menu, pagination. |
| 17 | `17_product_page.html` | หน้า Product Detail — Product Page. Image gallery + zoom, rating breakdown, reviews, add-to-cart modal. |
| 18 | `18_cart.html` | ตะกร้าสินค้า — Cart. CartContext + reducer + localStorage, cart table and summary. |
| 19 | `19_checkout.html` | Checkout และ Order Success — Checkout. react-hook-form + zod, address/delivery/payment, billing summary, success page. |
| 20 | `20_wrap_up.html` | สรุปและก้าวต่อไป — Wrap Up. Recap the workflow, diff against the reference repo, extension ideas. |

### `index.html` TOC

Same chapter-card markup as Week_04: 6 `section.chapter-card` blocks with
bilingual headings and `ol` lists using `start` offsets.

## Content conventions

- **Lesson format** identical to Week_04: `lang="th"`, meta description,
  `lesson-eyebrow` ("บทเรียน NN · ชื่อบท"), `lesson-header` with Thai `h1` and
  `lesson-original-title` in English, Thai prose with English technical terms,
  `pre > code.language-*` blocks, `lesson-navigation` footer (prev / สารบัญ /
  next).
- **The loop as a visible template.** Build lessons (10, 14–19) use recurring
  sub-sections so the cycle becomes muscle memory:
  1. 🎯 **เป้าหมาย** — target screenshot + what "done" looks like
  2. 📝 **เขียน Prompt** — a copy-able prompt block derived from the screenshot
  3. 🤖 **สิ่งที่ Agent สร้าง** — representative generated code
  4. 🔍 **ตรวจทาน** — responsive/a11y/maintainability checklist applied
  5. 🔧 **Refactor** — extract/clean into reusable components
- **Code truth source:** snippets stay aligned with the reference repo's real
  code, adapted from SCSS modules to Tailwind utilities, using the same
  libraries (react-router 8 data mode, TanStack Query 5, axios, RHF + zod,
  Swiper, react-paginate) so a finishing student lands close to the repo.
- **Prompts shown in lessons are in Thai** with English technical vocabulary,
  matching how students will actually write them.

## Images

Run the reference app locally (`npm install && npm run dev`, dummyjson is a
public API) and capture each page desktop + mobile into `images/`. These
screenshots double as the "design handoff" students convert into prompts.
Fallback if headless capture is unavailable: HTML wireframe diagrams.

## Versions

- **Tailwind CSS v4** syntax throughout (CSS-first config, `@theme`,
  `@tailwindcss/vite`).
- **Cursor** current UX: Agent mode, rules in `.cursor/rules/`, @-file context.
- App stack pinned to what the reference repo uses (React 19, Vite, TS,
  react-router 8, TanStack Query 5, zod 4, RHF 7).

## Verification

- Adapt Week_04's `verify_lessons.py` (it derives lesson numbering, links, and
  eyebrow checks from the files themselves; update any course-title constants).
- `python3 verify_lessons.py` passes before the work is considered done.
- Manual pass: open `index.html` and spot-check navigation order and images.

## Out of scope

- No quiz JSON for `extra/` (not requested).
- No `start/`/`finish/` project folders.
- No testing lessons (Vitest/MSW) — Week_04 covered testing; the wrap-up may
  point students at the reference repo's tests as further reading.
