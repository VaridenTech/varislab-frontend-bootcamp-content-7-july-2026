# Tailwind CSS & Cursor Workflow Workshop Lessons — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Author the 16 Thai HTML lessons of `Week_05_06/01_tailwind_cursor_workshop/` that teach students to rebuild the Purity UI Dashboard with Tailwind CSS v4 using the Cursor Agent workflow (prompt → generate → review → refactor).

**Architecture:** Static HTML lesson set in Week_04's exact format — numbered lesson files + `index.html` TOC + shared `lesson.css` + self-deriving `verify_lessons.py`. No app code ships in this repo; lessons embed the canonical code snippets. The 4 provided screenshots are the "design handoff" artifacts, copied into `content/images/`.

**Tech Stack (taught in lessons):** React 19 + TypeScript + Vite, Tailwind CSS v4 (`@tailwindcss/vite`, CSS-first config, `@theme`), react-router (data mode, page switching only), Cursor (Agent mode, `.cursor/rules`, image attachments).

**Spec:** `docs/superpowers/specs/2026-08-08-tailwind-cursor-workshop-design.md`

## Global Constraints

- Every lesson file: `lang="th"`, Thai prose with English technical terms untranslated (component, props, utility, breakpoint…), Week_04 markup conventions exactly (see Lesson Template below).
- `<title>` suffix for every lesson: `| Tailwind CSS และ Cursor Workflow`.
- Eyebrow format: `บทเรียน NN · <Thai chapter name>` — NN must match the 2-digit filename prefix (verify checks this).
- Nav chain: lesson 01 has **no** `rel="prev"` link; lesson 16 has **no** `rel="next"` link; all others link to the adjacent files in the Canonical Lesson Table (verify checks the chain).
- `lesson.css` is copied from Week_04 **unchanged**. Images live in `content/images/` and are referenced as `images/<name>.png`.
- Tailwind syntax is **v4 only**: `npm install tailwindcss @tailwindcss/vite`, `@import "tailwindcss"`, `@theme` tokens. Never show `tailwind.config.js`, `npx tailwindcss init`, or `@tailwind base` (v3 idioms).
- **No companion repo links** — lessons are self-contained; snippets in lessons are the canonical reference.
- Commit messages: `content: <what>`, each ending with the `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>` trailer.
- After every task: run `python3 Week_05_06/01_tailwind_cursor_workshop/verify_lessons.py`. Until the final task the ONLY acceptable failures are `broken link -> NN_…`, `rel=next`, or `index.html: missing […]` messages that reference **not-yet-written** lesson files. Any eyebrow mismatch, out-of-order index entry, or broken link to an existing file must be fixed before committing.

## Reference Facts (single source of truth for all tasks)

**Design handoff:** Figma community file (students open it read-only):
`https://www.figma.com/design/TvhgVvFBvybHh6BUyEvZRl/Purity-UI-Dashboard---Chakra-UI-Dashboard--Community-?m=auto&t=m8fTN5gy77i21j0s-1`

**Screens / images** (copied in Task 1 from `Week_05_06/01_tailwind_cursor_workshop/screenshot/`):

| Image | Source | Screen contents |
| --- | --- | --- |
| `images/dashboard.png` | `01.png` | Sidebar (logo "PURITY UI DASHBOARD"; menu Dashboard/Tables/Billing/RTL; section "ACCOUNT PAGES" with Profile/Sign In/Sign Up; teal "Need help?" card with DOCUMENTATION button) · navbar (breadcrumb "Pages / Dashboard", search box, Sign In, settings + bell icons) · 4 stat cards (Today's Money $53,000 **+55%**, Today's Users 2,300 **+5%**, New Clients +3,052 **−14%**, Total Sales $173,000 **+8%**; teal icon tiles) · 2 promo cards ("Built by developers — Purity UI Dashboard" with chakra logo panel; "Work with the Rockets" photo card) · "Active Users" card (dark navy rounded panel with white bar chart; (+23) than last week; Users 32,984 / Clicks 2,42m / Sales 2,400$ / Items 320 mini-stats) · "Sales overview" card ((+5) more in 2021; teal/gray area line chart, Jan–Dec) · "Projects" table (30 done this month; columns COMPANIES/MEMBERS/BUDGET/COMPLETION; rows Chakra Soft UI Version $14,000 60%, Add Progress Track $3,000 10%, Fix Platform Errors Not set 100%, Launch our Mobile App $32,000 100%, Add the New Pricing Page $400 25%, Redesign New Online Shop $7,600 40%; avatar stacks; teal progress bars) · "Orders overview" timeline (+30% this month; entries like "$2400, Design changes — 22 DEC 7:20 PM", "New order #4219423 — 21 DEC 11:21 PM" with colored dot icons) |
| `images/tables.png` | `02.png` | "Authors Table" (columns AUTHOR/FUNCTION/STATUS/EMPLOYED + Edit; 6 rows e.g. Esthera Jackson esthera@simmmple.com, Manager/Organization, **Online** green badge, 14/06/21; Alexa Liras, Programmer/Developer, **Offline** gray badge…) · "Projects" table (columns COMPANIES/BUDGET/STATUS/COMPLETION; statuses Working/Canceled/Done; teal progress bars; kebab menu) |
| `images/profile.png` | `03.png` | Teal wave hero · overlapping profile header card (avatar, Esthera Jackson, esthera@simmmple.com, tab buttons OVERVIEW/TEAMS/PROJECTS) · 3-column: Platform Settings (toggle list: "Email me when someone follows me"…), Profile Information (bio, Full Name/Mobile/Email/Location, social icons), Conversations (avatar + name + snippet + REPLY) · Projects grid (photo cards Project #1 Modern / #2 Scandinavian / #3 Minimalist, VIEW ALL buttons, avatar stacks, "Create a New Project" dashed card) |
| `images/signup.png` | `04.png` | Teal wave hero with centered navbar (logo, DASHBOARD/PROFILE/SIGN UP/SIGN IN links, white "Free Download" pill) · "Welcome!" heading + subtitle · white card "Register with" (Facebook/Apple/Google icon buttons, "or", Name/Email/Password fields, "Remember me" toggle, teal SIGN UP button, "Already have an account? Sign in") |

**Project identity:** app name **"Purity Dashboard"**, scaffold folder `purity-dashboard`. Routes: `/` → DashboardPage, `/tables` → TablesPage, `/profile` → ProfilePage (capstone exercise, not built in lessons), `/signup` → SignUpPage (rendered **outside** DashboardLayout — it has its own centered navbar). Folder structure (simpler than the e-commerce course — this is a UI workshop):

```
src/
  app/         # router.tsx, layouts/DashboardLayout.tsx
  pages/       # DashboardPage.tsx, TablesPage.tsx, SignUpPage.tsx (ProfilePage = exercise)
  components/  # shared UI: Sidebar, Navbar, and from lesson 15: Button, StatCard, NavItem, StatusBadge, ProgressBar
  data/        # mock data files (stats.ts, projects.ts, orders.ts, authors.ts)
```

**Design tokens** (lesson 05 reads these off the Figma file; state that they are approximations):

```css
@import "tailwindcss";

@theme {
  --color-primary: #4fd1c5;
  --color-primary-dark: #38b2ac;
  --color-ink: #2d3748;
  --color-muted: #a0aec0;
  --color-surface: #f8f9fa;
  --color-success: #48bb78;
  --color-danger: #e53e3e;
}
```

**Prompt anatomy** (defined in lesson 07, reused by every 📝 section): **บริบท** (what app, what stack) / **โครงสร้าง** (screen regions top→bottom with real content) / **ข้อกำหนดทางเทคนิค** (Tailwind only, mobile-first, semantic HTML, component split) / **ขอบเขต** (what NOT to do yet).

**Planted defects** — lesson 09's Agent output ships with exactly these four, logged as TODOs there and hunted in chapter 5 (keep names/classes consistent):

1. Content wrapper `<div className="w-[1440px] mx-auto">` — horizontal scroll below 1440px → lesson 12 fixes to `mx-auto w-full max-w-[1440px] px-4 md:px-6`.
2. Sidebar hidden on mobile (`hidden lg:flex`) with no way in → lesson 12 builds the drawer (hamburger + overlay).
3. Sidebar menu items rendered as `<div onClick={...}>` — not focusable → lesson 13 converts to `NavLink`.
4. No `focus-visible:` styles anywhere → lesson 13 adds `focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none`.

**Components produced by lesson 15** (canonical names/props later text refers to): `Button` (`variant?: "primary" | "outline" | "ghost"`, variant-map pattern, extends `ButtonHTMLAttributes`), `StatCard` (`label, value, delta?, deltaTone?: "up" | "down", icon: ReactNode`), `NavItem` (`to, icon, label` — wraps `NavLink`, active = white card + teal icon tile), `StatusBadge` (`tone: "success" | "muted"`, children), `ProgressBar` (`value: number` 0–100, `aria` attributes baked in).

**Module root for this plan:** `WK=Week_05_06/01_tailwind_cursor_workshop` (all paths relative to repo root).

## Canonical Lesson Table

| NN | File | Thai title (h1 + nav text) | English (`lesson-original-title`) | Chapter (eyebrow text) |
| --- | --- | --- | --- | --- |
| 01 | `01_intro.html` | บทนำ: Workshop นี้เราจะสร้างอะไร | Intro | เริ่มต้น (Getting Started) |
| 02 | `02_setup.html` | ติดตั้งโปรเจกต์และ Cursor | Project & Cursor Setup | เริ่มต้น (Getting Started) |
| 03 | `03_utility_first.html` | Utility-First และ Utilities หลัก | Utility-First & Core Utilities | Tailwind CSS พื้นฐาน (Tailwind Essentials) |
| 04 | `04_responsive_states.html` | Responsive และ States | Responsive & States | Tailwind CSS พื้นฐาน (Tailwind Essentials) |
| 05 | `05_theme_tokens.html` | Design Tokens ด้วย @theme | Design Tokens | Tailwind CSS พื้นฐาน (Tailwind Essentials) |
| 06 | `06_reading_ui.html` | อ่านโครงสร้าง UI จาก Screenshot | Reading a UI | จาก Screenshot สู่ Prompt (Screenshot to Prompt) |
| 07 | `07_prompt_anatomy.html` | เขียน UI Prompt ที่ชัดเจน | Prompt Anatomy | จาก Screenshot สู่ Prompt (Screenshot to Prompt) |
| 08 | `08_figma_handoff.html` | ใช้ Figma ประกอบ Prompt | Working from Figma | จาก Screenshot สู่ Prompt (Screenshot to Prompt) |
| 09 | `09_app_shell.html` | App Shell: Sidebar และ Navbar | The App Shell | สร้าง UI ด้วย Cursor Agent (Building with the Agent) |
| 10 | `10_dashboard_page.html` | หน้า Dashboard | The Dashboard Page | สร้าง UI ด้วย Cursor Agent (Building with the Agent) |
| 11 | `11_tables_signup.html` | หน้า Tables และ Sign Up | Tables & Sign Up Pages | สร้าง UI ด้วย Cursor Agent (Building with the Agent) |
| 12 | `12_review_responsive.html` | ตรวจ Responsive ของโค้ดจาก AI | Responsive Review | ตรวจโค้ดที่ AI สร้าง (Reviewing AI Code) |
| 13 | `13_review_accessibility.html` | ตรวจ Accessibility | Accessibility Review | ตรวจโค้ดที่ AI สร้าง (Reviewing AI Code) |
| 14 | `14_review_maintainability.html` | ตรวจ Maintainability | Maintainability Review | ตรวจโค้ดที่ AI สร้าง (Reviewing AI Code) |
| 15 | `15_refactor_components.html` | แยกเป็น Reusable Components | Extracting Components | Refactor เป็น Component (Refactor to Components) |
| 16 | `16_wrap_up.html` | สรุปและก้าวต่อไป | Wrap Up | Refactor เป็น Component (Refactor to Components) |

## Lesson Template (use verbatim, fill the ⟨placeholders⟩)

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="⟨Thai one-line description⟩" />
    <title>⟨Thai short title⟩ | Tailwind CSS และ Cursor Workflow</title>
    <link rel="stylesheet" href="lesson.css" />
  </head>
  <body>
    <main>
      <article class="lesson">
        <header class="lesson-header">
          <p class="lesson-eyebrow">บทเรียน ⟨NN⟩ · ⟨chapter⟩</p>
          <h1>⟨Thai lesson title⟩</h1>
          <p class="lesson-original-title" lang="en">⟨English title⟩</p>
        </header>

        ⟨lesson body: h2/h3 sections, p, ul, pre>code.language-*, img⟩

        <nav class="lesson-navigation" aria-label="การนำทางบทเรียน">
          <a href="⟨prev file⟩" rel="prev">ก่อนหน้า: ⟨prev Thai title⟩</a>
          <a href="index.html">สารบัญบทเรียน</a>
          <a href="⟨next file⟩" rel="next">ถัดไป: ⟨next Thai title⟩</a>
        </nav>
      </article>
    </main>
  </body>
</html>
```

Code blocks use `<pre><code class="language-bash|css|tsx|typescript|html|text">` with HTML-escaped `<`, `>`, `&`. Images: `<img src="images/⟨name⟩.png" alt="⟨Thai description⟩" />`.

**The Loop template** — build lessons (09, 10, 11) structure their body with these recurring `h2` sections, in this order:

1. `🎯 เป้าหมาย` — target screenshot + bullet list of what "done" means
2. `📝 เขียน Prompt` — a complete Thai prompt in a `pre` block the student can paste into the Agent (with the screenshot attached)
3. `🤖 สิ่งที่ Agent สร้าง` — representative generated code (the interesting parts, not every file)
4. `🔍 ตรวจทาน` — quick pass in chapter 4 ("log suspicions" — full review is chapter 5); in later mentions apply the chapter-5 checklists
5. `🔧 Refactor` — in chapter 4: commit only, noting refactors come in chapter 6

---

### Task 1: Scaffold the module (dirs, lesson.css, verify script, images, full TOC)

**Files:**
- Create: `$WK/content/index.html`
- Create: `$WK/content/lesson.css` (copy)
- Create: `$WK/verify_lessons.py` (copy)
- Create: `$WK/content/images/{dashboard,tables,profile,signup}.png` (copies)

**Interfaces:**
- Produces: the TOC every lesson links back to as `index.html`, the verify script every later task runs, and the image filenames lessons embed. Lesson filenames/titles in the TOC are the Canonical Lesson Table — later tasks must match it exactly.

- [ ] **Step 1: Copy the shared assets**

```bash
mkdir -p Week_05_06/01_tailwind_cursor_workshop/content/images
cp Week_04/02_complete_intro_to_react/content/lesson.css Week_05_06/01_tailwind_cursor_workshop/content/lesson.css
cp Week_04/02_complete_intro_to_react/verify_lessons.py Week_05_06/01_tailwind_cursor_workshop/verify_lessons.py
cp Week_05_06/01_tailwind_cursor_workshop/screenshot/01.png Week_05_06/01_tailwind_cursor_workshop/content/images/dashboard.png
cp Week_05_06/01_tailwind_cursor_workshop/screenshot/02.png Week_05_06/01_tailwind_cursor_workshop/content/images/tables.png
cp Week_05_06/01_tailwind_cursor_workshop/screenshot/03.png Week_05_06/01_tailwind_cursor_workshop/content/images/profile.png
cp Week_05_06/01_tailwind_cursor_workshop/screenshot/04.png Week_05_06/01_tailwind_cursor_workshop/content/images/signup.png
```

`verify_lessons.py` is fully self-deriving (no course-title constants) — copy unchanged.

- [ ] **Step 2: Write `content/index.html`**

Use exactly this content (titles from the Canonical Lesson Table):

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="สารบัญ" />
    <title>Tailwind CSS และ Cursor Workflow: สารบัญบทเรียนภาษาไทย</title>
    <link rel="stylesheet" href="lesson.css" />
  </head>
  <body>
    <main>
      <header class="course-header">
        <h1>Tailwind CSS &amp; Cursor Workflow</h1>
        <p>สร้าง Admin Dashboard จากดีไซน์จริง ด้วย Tailwind CSS v4 และ Cursor Agent</p>
      </header>

      <blockquote class="lesson-source-code">
        <strong>ดีไซน์ต้นแบบของ workshop</strong> — Purity UI Dashboard (Figma Community):
        <a href="https://www.figma.com/design/TvhgVvFBvybHh6BUyEvZRl/Purity-UI-Dashboard---Chakra-UI-Dashboard--Community-?m=auto&amp;t=m8fTN5gy77i21j0s-1" target="_blank" rel="noreferrer">เปิดไฟล์ Figma</a>
      </blockquote>

      <div class="chapter-list">
        <section class="chapter-card">
          <h2>1. เริ่มต้น — Getting Started</h2>
          <ol>
            <li><a href="01_intro.html">บทนำ: Workshop นี้เราจะสร้างอะไร — Intro</a></li>
            <li><a href="02_setup.html">ติดตั้งโปรเจกต์และ Cursor — Project &amp; Cursor Setup</a></li>
          </ol>
        </section>

        <section class="chapter-card">
          <h2>2. Tailwind CSS พื้นฐาน — Tailwind Essentials</h2>
          <ol start="3">
            <li><a href="03_utility_first.html">Utility-First และ Utilities หลัก — Utility-First &amp; Core Utilities</a></li>
            <li><a href="04_responsive_states.html">Responsive และ States — Responsive &amp; States</a></li>
            <li><a href="05_theme_tokens.html">Design Tokens ด้วย @theme — Design Tokens</a></li>
          </ol>
        </section>

        <section class="chapter-card">
          <h2>3. จาก Screenshot สู่ Prompt — Screenshot to Prompt</h2>
          <ol start="6">
            <li><a href="06_reading_ui.html">อ่านโครงสร้าง UI จาก Screenshot — Reading a UI</a></li>
            <li><a href="07_prompt_anatomy.html">เขียน UI Prompt ที่ชัดเจน — Prompt Anatomy</a></li>
            <li><a href="08_figma_handoff.html">ใช้ Figma ประกอบ Prompt — Working from Figma</a></li>
          </ol>
        </section>

        <section class="chapter-card">
          <h2>4. สร้าง UI ด้วย Cursor Agent — Building with the Agent</h2>
          <ol start="9">
            <li><a href="09_app_shell.html">App Shell: Sidebar และ Navbar — The App Shell</a></li>
            <li><a href="10_dashboard_page.html">หน้า Dashboard — The Dashboard Page</a></li>
            <li><a href="11_tables_signup.html">หน้า Tables และ Sign Up — Tables &amp; Sign Up Pages</a></li>
          </ol>
        </section>

        <section class="chapter-card">
          <h2>5. ตรวจโค้ดที่ AI สร้าง — Reviewing AI Code</h2>
          <ol start="12">
            <li><a href="12_review_responsive.html">ตรวจ Responsive ของโค้ดจาก AI — Responsive Review</a></li>
            <li><a href="13_review_accessibility.html">ตรวจ Accessibility — Accessibility Review</a></li>
            <li><a href="14_review_maintainability.html">ตรวจ Maintainability — Maintainability Review</a></li>
          </ol>
        </section>

        <section class="chapter-card">
          <h2>6. Refactor เป็น Component — Refactor to Components</h2>
          <ol start="15">
            <li><a href="15_refactor_components.html">แยกเป็น Reusable Components — Extracting Components</a></li>
            <li><a href="16_wrap_up.html">สรุปและก้าวต่อไป — Wrap Up</a></li>
          </ol>
        </section>
      </div>
    </main>
  </body>
</html>
```

- [ ] **Step 3: Run verify**

Run: `python3 Week_05_06/01_tailwind_cursor_workshop/verify_lessons.py`
Expected: `FAIL: no lesson files found` (exit 1) — correct at this stage; the script needs at least one lesson. Nothing else to fix.

- [ ] **Step 4: Commit**

```bash
git add Week_05_06/01_tailwind_cursor_workshop
git commit -m "content: scaffold Tailwind & Cursor workshop module (TOC, css, verify, images)"
```

---

### Task 2: Chapter 1 — lessons 01–02 (intro, setup)

**Files:**
- Create: `$WK/content/01_intro.html`, `$WK/content/02_setup.html`

**Interfaces:**
- Consumes: images from Task 1; titles/nav chain from the Canonical Lesson Table.
- Produces: the scaffold project (`purity-dashboard`) and `.cursor/rules/project.mdc` that every later lesson assumes; the workflow-loop vocabulary (prompt → generate → review → refactor) referenced throughout.

- [ ] **Step 1: Write `01_intro.html`**

Sections: (1) **เราจะสร้างอะไร** — embed all four images (`dashboard.png`, `tables.png`, `profile.png`, `signup.png`) each with a one-paragraph tour of what's on the screen (use the Reference Facts screen contents); state the vehicle: ดีไซน์จริงจาก Figma Community ชื่อ Purity UI Dashboard — ต้นฉบับสร้างด้วย Chakra UI แต่เราจะสร้างเวอร์ชันของเราเองด้วย Tailwind CSS. (2) **ทักษะทั้งสี่ของ workshop** — the four syllabus skills verbatim as a list (ถอด screenshot/wireframe/requirement เป็น prompt ที่ชัดเจน / ใช้ Cursor Agent สร้าง UI ฉบับแรก / ตรวจโค้ด Tailwind ที่ AI สร้าง ทั้ง responsive, accessibility, maintainability / refactor เป็น React component ที่ใช้ซ้ำได้). (3) **The workflow loop** — prompt → generate → review → refactor as the recurring cycle; state plainly: โค้ดจาก AI คือฉบับร่าง คนที่รับผิดชอบโค้ดที่ ship คือเรา — ทักษะ review จึงสำคัญพอ ๆ กับทักษะ prompt. (4) **ต่างจากคอร์ส E-commerce อย่างไร** — one short paragraph: another Week 05–06 course builds a storefront by hand with SCSS; this workshop is about *directing an AI* and the UI genre is an admin dashboard (tables, stat cards, forms). (5) **เตรียมเครื่องมือ** — Cursor installed (cursor.com — free tier พอสำหรับ workshop นี้), Node ≥ 22, the Figma link from `url.md` (เปิดดูได้ ไม่ต้องมี license). (6) **แผนที่คอร์ส** — one line per chapter (6 chapters).

- [ ] **Step 2: Write `02_setup.html`**

Sections: (1) **สร้างโปรเจกต์** — students run these themselves (โครงโปรเจกต์เราตั้งเอง ไม่ปล่อยให้ AI เดา):

```bash
npm create vite@latest purity-dashboard -- --template react-ts
cd purity-dashboard
npm install
npm install tailwindcss @tailwindcss/vite react-router
```

(2) **ต่อ Tailwind v4 เข้า Vite**:

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

```css
/* src/index.css */
@import "tailwindcss";
```

Callout: Tailwind v4 ตั้งค่าเป็น CSS (`@theme` — บทเรียน 05) — **ไม่มี** `tailwind.config.js` และ**ไม่ต้อง** `npx tailwindcss init`; ถ้าเจอบทความสอนแบบนั้นแปลว่าเป็น v3 เก่า. Prove it works: replace `App.tsx` body with `<h1 className="p-8 text-3xl font-bold text-teal-500">Purity Dashboard</h1>`, run `npm run dev`. (3) **โครงโฟลเดอร์** — create `src/app/`, `src/pages/`, `src/components/`, `src/data/` with one-line responsibilities (from Reference Facts). (4) **รู้จัก Cursor** — a VS Code fork with AI built in; import VS Code settings on first run; the three ways to use AI and when: **Tab** (autocomplete), **Inline Edit** (Cmd+K, จุดเดียว), **Agent panel** (Cmd+I) — the star of this workshop: multi-file edits, runs commands, reads the project; Agent vs Ask mode (Ask = ถามให้อธิบาย ไม่แตะไฟล์); giving context with `@Files`/`@Folders` and **attaching images** (ลาก screenshot ลงช่องแชทได้เลย — หัวใจของบทที่ 3). (5) **Project rules** — `.cursor/rules/` directory, `.mdc` with frontmatter; write the real rules file (full code block):

```text
---
description: Purity Dashboard — React + Tailwind conventions
alwaysApply: true
---

- React 19 + TypeScript + Vite; styling ด้วย Tailwind CSS v4 utilities เท่านั้น ห้ามสร้างไฟล์ .css/.scss เพิ่ม
- โครงสร้าง: src/app (router, layouts), src/pages (component ต่อ route), src/components (UI ที่ใช้ซ้ำ), src/data (mock data)
- Component เป็น function component + TypeScript, ไฟล์ละหนึ่ง component, ตั้งชื่อ PascalCase.tsx
- Mobile-first: class ไม่มี prefix คือมือถือ แล้วขยายด้วย md:/lg:/xl:
- ใช้ semantic HTML (aside, nav, header, main, table) และ SVG inline สำหรับไอคอน
- รูปทุกรูปมี alt; ปุ่ม/ลิงก์เป็น <button>/<a> จริง และมี focus-visible state
```

ชี้ให้เห็นว่า rules คือการ "สอน Agent ครั้งเดียว ใช้ได้ทุก prompt" — และแอบสังเกตว่ากติกาสองข้อสุดท้ายจะถูก Agent ละเมิดให้เราเห็นจริงในบทที่ 4–5. (6) **วินัยการใช้ Agent** — อ่าน diff ทุกไฟล์ก่อน Accept, ใช้ checkpoint/restore เมื่อหลงทาง, งานเล็ก ๆ ทีละงาน; callout: Cursor UI เปลี่ยนเร็ว — ชื่อปุ่ม/แถบอาจต่างจากในบทเรียน แต่แนวคิด (agent, context, rules, review) คงเดิม. (7) commit scaffold ด้วย git (นิสัยจาก Week 04: commit เล็ก บ่อย).

- [ ] **Step 3: Verify + commit**

Run: `python3 $WK/verify_lessons.py` — failures may reference only `03_…`–`16_…` (missing links / rel=next on lesson 02).

```bash
git add Week_05_06/01_tailwind_cursor_workshop/content
git commit -m "content: add workshop lessons 01-02 (intro, project & Cursor setup)"
```

---

### Task 3: Chapter 2 — lessons 03–05 (Tailwind essentials)

**Files:**
- Create: `$WK/content/03_utility_first.html`, `$WK/content/04_responsive_states.html`, `$WK/content/05_theme_tokens.html`

**Interfaces:**
- Consumes: scaffold project from lesson 02.
- Produces: concepts later lessons reference by number — utility vocabulary (L03), responsive prefixes + state variants (L04), `@theme` tokens `--color-primary: #4fd1c5` et al. and class-ordering convention (L05). The stat-card markup built in L03 reappears in L10/L15.

- [ ] **Step 1: Write `03_utility_first.html`**

Sections: (1) **จาก SCSS สู่ Utility** — recap Week 04 styling (a `.module.scss` per component), then the same button in Tailwind:

```html
<button class="rounded-xl bg-teal-400 px-4 py-2 font-bold text-white hover:bg-teal-500">
  SIGN UP
</button>
```

one class = one declaration; you compose design in the markup. (2) **"แต่ HTML มันรกไม่ใช่เหรอ?"** — address honestly: locality, no naming fatigue, no dead CSS, built-in constraints (spacing/color scales) vs the real cost (long class strings — คำตอบอยู่บทเรียน 15: แยกเป็น component ไม่ใช่แยก stylesheet); why it's not inline styles (responsive prefixes, states, tokens ทำใน `style=""` ไม่ได้); why this matters for the AI workflow (โค้ดที่ Agent สร้างอ่านจบในไฟล์เดียว review ใน diff ง่าย). (3) **Utilities หลัก — สร้าง stat card หนึ่งใบ** — teach by building the "Today's Money" card from `dashboard.png` incrementally (embed the image once at top of this section); build steps each with a code block and short utility→CSS explanations: spacing (`p-4` = `padding: 1rem`, the 4-per-rem scale, `gap-*`), typography (`text-sm/lg/xl`, `font-bold`, `text-gray-400`), colors & surfaces (`bg-white`, `text-teal-400`, opacity modifier `bg-black/50`), borders & shadows (`rounded-2xl`, `shadow-sm`), flex (`flex items-center justify-between`), sizing (`w-full`, `size-12`). Finished card (~20 lines):

```html
<div class="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
  <div>
    <p class="text-sm font-medium text-gray-400">Today's Money</p>
    <p class="text-xl font-bold text-gray-700">
      $53,000
      <span class="text-sm font-bold text-green-500">+55%</span>
    </p>
  </div>
  <div class="flex size-12 items-center justify-center rounded-xl bg-teal-400">
    <svg class="size-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 7.5V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1.5h-6a3 3 0 0 1 0-6h6ZM15 12a1.5 1.5 0 0 0 0 3h6v-3h-6Z" />
    </svg>
  </div>
</div>
```

(4) **คู่มือที่ควรเปิดคู่กันเสมอ** — tailwindcss.com docs search + Tailwind CSS IntelliSense extension ใช้ใน Cursor ได้ (hover เห็น CSS จริง).

- [ ] **Step 2: Write `04_responsive_states.html`**

Sections: (1) **Mobile-first** — unprefixed = ทุกขนาดจอ, prefix = ตั้งแต่ breakpoint นั้นขึ้นไป; the trap: `sm:` ≠ "on small screens"; breakpoint table sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536. (2) **Patterns จากหน้า Dashboard** (tie to `dashboard.png`): stat cards `grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4`; two-panel charts row `grid gap-6 lg:grid-cols-2`; sidebar `hidden lg:flex` (มือถือซ่อนไว้ก่อน — บทเรียน 12 จะทำ drawer); content container `mx-auto w-full max-w-[1440px] px-4 md:px-6`. (3) **States** — `hover:`, `focus-visible:` (+ ทำไมไม่ใช้ `focus:` เฉย ๆ — mouse click ก็ติด), `active:`, `disabled:`, `group`/`group-hover:` with the promo-card example (รูปซูมเมื่อ hover การ์ด: `group` บนการ์ด + `group-hover:scale-105` บนรูป). (4) **ทดสอบ** — DevTools device toolbar, ลากความกว้างช้า ๆ ดูจุดที่ layout เปลี่ยน; rule of thumb: ออกแบบมือถือก่อน แล้วเติม prefix ขยายขึ้น.

- [ ] **Step 3: Write `05_theme_tokens.html`**

Sections: (1) **ทำไมต้องมี token** — สีเขียวมิ้นต์ของ Purity โผล่ทุกหน้า ถ้าพิมพ์ `bg-teal-400` กระจายทั่ว แล้ววันหนึ่ง brand เปลี่ยนสี ต้องไล่แก้ทุกไฟล์. (2) **อ่านค่าจาก Figma** — open the Figma file, select the teal icon tile / heading text / muted label, read fills; state the approximations we standardize on (the Design tokens block from Reference Facts, full code) — ค่าเหล่านี้อ่านจากไฟล์ Figma โดยประมาณ ใช้ชุดนี้ตลอด workshop. (3) **ใช้งาน** — `bg-primary hover:bg-primary-dark`, `text-ink`, `text-muted`, `bg-surface`, `text-success`, `text-danger`; restyle lesson 03's stat card with tokens (show the diff-style before/after of the changed classes). (4) **จัดระเบียบ class ยาว ๆ** — recommended ordering (layout → sizing → spacing → typography → color → border/shadow → states); `prettier-plugin-tailwindcss` sorts automatically (`npm install -D prettier prettier-plugin-tailwindcss` + `.prettierrc` with `"plugins": ["prettier-plugin-tailwindcss"]`); (5) **ทำไมไม่ใช้ @apply ทุกที่** — you'd rebuild class-naming hell; the Tailwind answer to reuse is React components (บทเรียน 15). (6) Mini-exercise: เพิ่ม token `--color-ink-dark: #1a202c` แล้วใช้กับพื้นหลังการ์ด Active Users (เฉลยในบทเรียน 10).

- [ ] **Step 4: Verify + commit**

Run: `python3 $WK/verify_lessons.py` — failures may reference only `06_…`–`16_…`.

```bash
git add Week_05_06/01_tailwind_cursor_workshop/content
git commit -m "content: add workshop lessons 03-05 (utility-first, responsive & states, design tokens)"
```

---

### Task 4: Chapter 3 — lessons 06–08 (screenshot → prompt)

**Files:**
- Create: `$WK/content/06_reading_ui.html`, `$WK/content/07_prompt_anatomy.html`, `$WK/content/08_figma_handoff.html`

**Interfaces:**
- Consumes: Task 1 images; token names from L05.
- Produces: the prompt anatomy (บริบท/โครงสร้าง/ข้อกำหนดทางเทคนิค/ขอบเขต) and the **app-shell prompt** that lesson 09 pastes verbatim; the region-decomposition method L10/L11 reuse.

- [ ] **Step 1: Write `06_reading_ui.html`**

Sections: (1) **ก่อน prompt ต้องอ่านให้ออก** — สั่งงานสิ่งที่ตัวเองยังไม่เข้าใจไม่ได้; the goal: มองภาพแล้วเห็นเป็น "โครงสร้าง + pattern" ไม่ใช่ pixel. (2) **แบ่งเป็น region** — embed `dashboard.png`; walk the decomposition top-down as a nested list: root = sidebar ซ้าย (คงที่) + คอลัมน์ขวา (navbar + เนื้อหา); เนื้อหา = 4 แถว (stat cards / promo cards / charts / table + timeline); แต่ละแถวคือ grid กี่คอลัมน์ ยุบเหลือกี่คอลัมน์บนมือถือ (คาดเดาอย่างมีหลักการ — ดีไซน์ให้มาแค่ desktop, การตัดสินใจ responsive เป็นของเรา และต้องเขียนลง prompt). (3) **หา pattern ที่ซ้ำ** — การ์ดขาว `rounded-2xl bg-white shadow-sm` คือหน่วยพื้นฐานของทั้งดีไซน์; stat card ×4 ต่างกันแค่ข้อมูล; ตารางสองหน้าตาเดียวกัน; progress bar โผล่ทั้ง Dashboard และ Tables — สังเกตไว้ตั้งแต่ตอนอ่าน แล้วชื่อพวกนี้จะกลายเป็นชื่อ component ในบทเรียน 15. (4) **อ่านระบบ spacing / typography / สี** — ช่องไฟระหว่างการ์ดคงที่ (~24px → `gap-6`), หัวการ์ดตัวหนา `text-ink`, ป้ายรอง `text-muted text-sm`, สีหลักเขียวมิ้นต์ = token `primary` ของเรา. (5) **แบบฝึก** — ให้ทำ decomposition เดียวกันกับ `tables.png` เป็น bullet list ของตัวเอง (เก็บไว้ใช้บทเรียน 11); เฉลยย่อท้ายบท (Authors table + Projects table, คอลัมน์อะไรบ้าง, badge/progress bar อยู่ตรงไหน).

- [ ] **Step 2: Write `07_prompt_anatomy.html`**

Sections: (1) **Prompt คลุมเครือได้ UI มั่ว** — show the bad prompt (`"ทำหน้า admin dashboard สวย ๆ ให้หน่อย"`) and list what the Agent must guess (สี? layout? กี่คอลัมน์? ข้อมูลอะไร? tech อะไร?) — ผลคือได้ dashboard สุ่มหนึ่งอันที่ไม่ใช่ของเรา. (2) **กายวิภาคสี่ส่วน** — **บริบท** (แอปอะไร stack อะไร มีอะไรอยู่แล้ว) / **โครงสร้าง** (region บนลงล่าง พร้อมเนื้อหาจริงจาก screenshot) / **ข้อกำหนดทางเทคนิค** (Tailwind เท่านั้น, mobile-first, semantic HTML, แยกไฟล์อะไรบ้าง) / **ขอบเขต** (สิ่งที่ยังไม่ต้องทำ) — อธิบายว่าแต่ละส่วนตัดการเดาของ Agent คนละแบบ; แนบ screenshot ไปกับ prompt เสมอ (รูปสื่อ pixel, ข้อความสื่อโครงสร้างและกติกา — ใช้คู่กัน). (3) **Worked example — app shell** — embed `dashboard.png`, then derive this full prompt from it step by step (this exact prompt reappears in lesson 09):

```text
สร้าง app shell ของเว็บ admin dashboard "Purity Dashboard" ตาม screenshot ที่แนบมา
(สนใจเฉพาะ sidebar ด้านซ้ายกับแถบบนของพื้นที่เนื้อหา)

บริบท: โปรเจกต์ React + TypeScript + Vite ติดตั้ง Tailwind CSS v4 และ react-router แล้ว
มี design tokens: primary (เขียวมิ้นต์), primary-dark, ink, muted, surface, success, danger

โครงสร้าง:
- Sidebar ซ้าย กว้างราว 260px พื้นหลังสีเดียวกับพื้นหลังหน้า (surface):
  - โลโก้ข้อความ "PURITY UI DASHBOARD" ด้านบน คั่นด้วยเส้นบาง ๆ
  - เมนูหลัก: Dashboard, Tables, Billing, RTL — แต่ละรายการมีไอคอนในกล่องสี่เหลี่ยมมุมโค้ง
  - หัวข้อตัวพิมพ์เล็ก "ACCOUNT PAGES" ตามด้วย Profile, Sign In, Sign Up
  - รายการที่ active: การ์ดพื้นขาว เงาอ่อน ไอคอนพื้นเขียวมิ้นต์ตัวอักษรขาว
  - รายการปกติ: ตัวอักษร muted ไอคอนพื้นขาวตัวอักษรเขียวมิ้นต์
  - ล่างสุด: การ์ดพื้นเขียวมิ้นต์ "Need help? Please check our docs" พร้อมปุ่มขาว DOCUMENTATION
- Navbar บนของพื้นที่เนื้อหา: breadcrumb "Pages / Dashboard" กับชื่อหน้าตัวหนา ด้านซ้าย,
  ช่องค้นหา placeholder "Type here...", ลิงก์ Sign In, ไอคอน settings และกระดิ่ง ด้านขวา
- พื้นที่เนื้อหา: ว่างไว้ก่อน ใส่ <Outlet /> ของ react-router

ข้อกำหนดทางเทคนิค:
- ใช้ Tailwind utilities เท่านั้น ห้ามสร้างไฟล์ .css เพิ่ม
- Mobile-first: จอเล็กซ่อน sidebar ไว้ก่อนได้ (จะทำ drawer ภายหลัง)
- ใช้ semantic HTML: aside สำหรับ sidebar, nav, header, main; ไอคอนเป็น SVG inline
- แยกไฟล์: src/app/layouts/DashboardLayout.tsx, src/components/Sidebar.tsx, src/components/Navbar.tsx
- src/app/router.tsx: createBrowserRouter ให้ DashboardLayout เป็น layout route
  และมีหน้า Dashboard ว่าง ๆ ที่ path "/" ; ครอบ RouterProvider ใน main.tsx

ขอบเขต: ยังไม่ต้องสร้างเนื้อหาหน้า Dashboard จริง ยังไม่ต้องมี state ใด ๆ
และยังไม่ต้องทำหน้าอื่น
```

Walk through which part of the screenshot each โครงสร้าง bullet came from (ผลของบทเรียน 06). (4) **Wireframe และ requirement ข้อความล้วน** — the same anatomy works: wireframe หยาบ ๆ บนกระดาษถ่ายรูปแนบได้เลย (โครงสร้างชัดอยู่แล้ว เติมสี/ระยะเอง); requirement ที่เป็นข้อความ ("หน้า list ผู้ใช้ กรองตามสถานะได้") = เราเขียนส่วน "โครงสร้าง" เองจากจินตนาการที่คุยกับทีม — prompt ยังมีสี่ส่วนเหมือนเดิม. (5) **Checklist ก่อนกดส่ง** — มีทั้งสี่ส่วนไหม, โครงสร้างไล่บนลงล่างพร้อมเนื้อหาจริงไหม, บอกไฟล์ที่อยากได้ไหม, บอกสิ่งที่ยังไม่ทำไหม, แนบรูปแล้วหรือยัง.

- [ ] **Step 3: Write `08_figma_handoff.html`**

Sections: (1) **Screenshot บอกไม่หมด** — ตัวเลขเป๊ะ ๆ (สี ระยะ รัศมีมุม ฟอนต์) เดาจากภาพได้แค่ประมาณ; เมื่อมีไฟล์ Figma ให้เปิดควบคู่. (2) **เปิดไฟล์ Purity UI** — the Figma link (from `url.md`); duplicate to drafts เพื่อกดเล่นได้เต็มที่; select a layer → Design panel อ่าน fill/text style/corner radius; Dev Mode ถ้ามีให้เปิด (แสดง CSS โดยตรง) แต่ Design panel ก็พอ. (3) **สิ่งที่ควรลอกจาก Figma ลง prompt/token** — brand colors (ตรงกับ token บทเรียน 05 — ชี้ว่าค่าที่เราใช้มาจากตรงนี้), ฟอนต์ (Purity ใช้ Helvetica — เราใช้ font-sans ของระบบแทน ก็ระบุใน prompt ได้), corner radius การ์ด (~16px → `rounded-2xl`), ระยะห่างการ์ด (~24px → `gap-6`). (4) **Export assets** — เลือก layer รูป (เช่น รูปทีมในการ์ด "Work with the Rockets") → Export PNG → วางใน `public/`; ไอคอนเลือก Export SVG แล้ววางเป็น inline SVG ใน component; รูป avatar ใน workshop เราใช้ placeholder จาก `https://i.pravatar.cc/150?img=<n>` แทนได้. (5) **เมื่อไหร่ screenshot พอ / เมื่อไหร่ต้องเปิด Figma** — screenshot พอสำหรับโครงสร้างและ layout; เปิด Figma เมื่อจะตั้ง token, เมื่อระยะ/สีต้องเป๊ะ, เมื่อต้อง export asset; อย่าเสียเวลา inspect ทุก pixel — Agent เก่งเรื่องถอดภาพอยู่แล้ว หน้าที่เราคือคุมค่าที่เป็น "ระบบ" (token, spacing scale) ให้ตรง. (6) **แบบฝึก** — เขียน prompt สี่ส่วนสำหรับหน้า Sign Up (`signup.png`) ด้วยตัวเอง โดยอ่านค่าประกอบจาก Figma; เก็บไว้เทียบกับ prompt เฉลยในบทเรียน 11.

- [ ] **Step 4: Verify + commit**

Run: `python3 $WK/verify_lessons.py` — failures may reference only `09_…`–`16_…`.

```bash
git add Week_05_06/01_tailwind_cursor_workshop/content
git commit -m "content: add workshop lessons 06-08 (reading UI, prompt anatomy, Figma handoff)"
```

---

### Task 5: Chapter 4 — lessons 09–11 (building with the Agent)

**Files:**
- Create: `$WK/content/09_app_shell.html`, `$WK/content/10_dashboard_page.html`, `$WK/content/11_tables_signup.html`

**Interfaces:**
- Consumes: app-shell prompt (L07, verbatim), prompt anatomy, tokens (L05), rules file (L02).
- Produces: the generated codebase chapter 5 reviews — including the four **planted defects** from Reference Facts (exact classes/markup below); mock-data file names (`src/data/*.ts`); routes `/`, `/tables`, `/signup`.

- [ ] **Step 1: Write `09_app_shell.html`** — first full run of the Loop template

🎯 เป้าหมาย: embed `dashboard.png`; done = sidebar + navbar + empty content area, route `/` แสดงผลใน `<Outlet />`, ทุกอย่างตรง screenshot บนจอ desktop. 📝 เขียน Prompt: paste the lesson-07 prompt verbatim (บอกว่าเราเขียนเสร็จแล้วในบทเรียน 07 — คัดลอกมาใช้ได้เลย พร้อมแนบ `dashboard.png`); walkthrough of running the Agent: attach image, paste, watch it plan → create files → อ่าน diff ทีละไฟล์ก่อน Accept. 🤖 สิ่งที่ Agent สร้าง: show `DashboardLayout.tsx` (correct):

```tsx
// src/app/layouts/DashboardLayout.tsx
import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <div className="lg:pl-[280px]">
        <div className="w-[1440px] mx-auto">
          <Navbar />
          <main className="px-6 pb-10">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
```

and a representative `Sidebar.tsx` excerpt (~35 lines) whose menu items are the planted pattern:

```tsx
// src/components/Sidebar.tsx (ส่วนหนึ่ง)
const menu = [
  { label: "Dashboard", icon: HomeIcon },
  { label: "Tables", icon: TableIcon },
  { label: "Billing", icon: CardIcon },
  { label: "RTL", icon: RtlIcon },
];

<aside className="fixed inset-y-0 left-0 hidden w-[260px] flex-col px-6 py-8 lg:flex">
  <p className="border-b border-gray-200 pb-6 text-sm font-bold tracking-wide text-ink">
    PURITY UI DASHBOARD
  </p>
  <nav className="mt-6 space-y-2">
    {menu.map((item) => (
      <div
        key={item.label}
        onClick={() => console.log(item.label)}
        className="flex cursor-pointer items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-muted hover:bg-white"
      >
        <span className="flex size-8 items-center justify-center rounded-xl bg-white text-primary">
          <item.icon />
        </span>
        {item.label}
      </div>
    ))}
  </nav>
</aside>
```

Say explicitly: หน้าตาบนจอใหญ่ตรง screenshot เป๊ะ ใช้งานได้ — แต่โค้ดนี้มีของซ่อนอยู่อย่างน้อย 4 จุด บทที่ 5 จะพาไล่จับทีละตัว (อย่าเพิ่งแก้ตอนนี้). 🔍 ตรวจทาน (รอบเร็ว): run dev, ดูบนจอใหญ่ ✓; ลองย่อหน้าต่าง → มี scrollbar แนวนอนโผล่ (จาก `w-[1440px]`) และ sidebar หายไปเฉย ๆ บนมือถือ; ลองกด Tab → โฟกัสไม่เข้าเมนู sidebar เลย และมองไม่เห็นว่าโฟกัสอยู่ไหน; log ทั้งสี่ข้อเป็น TODO list (TODO เหล่านี้คือ **planted defects 1–4** ใน Reference Facts — เขียนให้ตรง). 🔧 Refactor: ยังไม่ทำ (บทที่ 5–6 ทำเต็ม ๆ) — แต่ commit ไว้ก่อน. Close: router.tsx snippet:

```tsx
// src/app/router.tsx
import { createBrowserRouter } from "react-router";
import DashboardLayout from "./layouts/DashboardLayout";
import DashboardPage from "../pages/DashboardPage";

export const router = createBrowserRouter([
  {
    element: <DashboardLayout />,
    children: [{ path: "/", element: <DashboardPage /> }],
  },
]);
```

- [ ] **Step 2: Write `10_dashboard_page.html`** — Loop lesson

🎯 เป้าหมาย: embed `dashboard.png` again; done = 4 stat cards, 2 promo cards, Active Users card (dark panel + static bars), Sales overview card (placeholder chart), Projects table, Orders timeline — mock data in `src/data/`. Callout ก่อนเริ่ม: กราฟจริง (chart library) อยู่นอกขอบเขต workshop — เราสร้าง "การ์ดกราฟ" ที่หน้าตาเหมือนดีไซน์ด้วย div/SVG นิ่ง ๆ พอ (บอกใน prompt ชัด ๆ). 📝 เขียน Prompt: full four-part prompt (derive quickly — นักเรียนฝึกวิธีคิดมาแล้ว): บริบท = shell จากบทเรียน 09 มีแล้ว + tokens; โครงสร้าง = 4 แถวตาม decomposition บทเรียน 06 พร้อมเนื้อหาจริง (ตัวเลข stat ทั้ง 4, ชื่อโปรเจกต์ในตาราง 6 แถว, orders 6 รายการ — ยกจาก Reference Facts ให้ครบ); ข้อกำหนด = mock data แยกไฟล์ใน `src/data/` (`stats.ts`, `projects.ts`, `orders.ts`), กราฟเป็น placeholder นิ่ง, ตารางเป็น `<table>` จริง; ขอบเขต = ยังไม่ทำหน้าอื่น ไม่ใช้ chart library. 🤖 สิ่งที่ Agent สร้าง: show 2 representative excerpts — (a) the stat-cards row where the Agent duplicated the whole card markup 4 times inline (~30 lines, mirroring lesson 03's card with different data — นี่คืออาหารของบทเรียน 14 เรื่อง duplication); (b) the Active Users dark card:

```tsx
<div className="rounded-2xl bg-white p-4 shadow-sm">
  <div className="rounded-2xl bg-gradient-to-b from-ink to-[#1a202c] p-6">
    <div className="flex h-40 items-end justify-around gap-2">
      {[45, 70, 30, 60, 100, 55, 90, 40, 50].map((h, i) => (
        <div
          key={i}
          className="w-2 rounded-full bg-white"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  </div>
  <p className="mt-4 font-bold text-ink">Active Users</p>
  <p className="text-sm text-muted">
    <span className="font-bold text-success">(+23)</span> than last week
  </p>
</div>
```

(เฉลย mini-exercise บทเรียน 05: ใช้ token `ink`/`ink-dark` กับ gradient ได้) plus a short Projects-table excerpt (thead + one row with avatar stack `-space-x-2`, progress bar div pair). 🔍 ตรวจทาน (รอบเร็ว): จอใหญ่ตรงดีไซน์; ย่อจอ → stat cards ยุบตาม (`md:grid-cols-2 xl:grid-cols-4` ✓ — Agent ทำถูกเพราะ rules + prompt สั่ง mobile-first) แต่ **ตาราง Projects ล้นจอมือถือ** — TODO ข้อใหม่ (บทเรียน 12 แก้ด้วย `overflow-x-auto`); duplication ของ stat card — TODO (บทเรียน 14). 🔧 Refactor: commit; note the growing TODO list is normal — วินัยคือจดไว้แล้วเคลียร์เป็นรอบ ไม่ใช่แก้กลางทางจนงานหลักไม่เสร็จ.

- [ ] **Step 3: Write `11_tables_signup.html`** — Loop lesson ×2 (faster)

Intro: ลูปเดิม วิ่งเร็วขึ้น — สองหน้าในบทเดียว เพราะเครื่องมือครบแล้ว. **Part 1 — Tables.** 🎯: embed `tables.png`; done = route `/tables`, Authors table (6 แถวจาก Reference Facts), Projects table (progress bar + status), เพิ่มเมนู Tables ใน sidebar ให้ไปหน้านี้ได้. 📝: model-answer prompt (นักเรียนควรลองเขียนเองก่อนจาก decomposition แบบฝึกบทเรียน 06 แล้วค่อยเทียบ) — mock data `src/data/authors.ts` (`{ name, email, avatar, role, dept, online: boolean, employed }`), avatar ใช้ pravatar placeholder. 🤖: excerpt ของแถว Authors หนึ่งแถว (~20 lines): avatar `img size-10 rounded-xl`, ชื่อ+อีเมล stack, status badge:

```tsx
<span
  className={
    author.online
      ? "rounded-lg bg-success px-3 py-1 text-xs font-bold text-white"
      : "rounded-lg bg-gray-100 px-3 py-1 text-xs font-bold text-muted"
  }
>
  {author.online ? "Online" : "Offline"}
</span>
```

(ternary ใน className — เก็บเป็นอาหารบทเรียน 14/15 เรื่อง StatusBadge). **Part 2 — Sign Up.** 🎯: embed `signup.png`; done = route `/signup` **นอก** DashboardLayout (หน้านี้มี navbar กลางของตัวเอง ไม่มี sidebar); hero ไล่เขียว, การ์ดฟอร์มลอยทับ hero, social buttons, ฟอร์ม 3 ช่อง + toggle + ปุ่ม SIGN UP. 📝: prompt เฉลยของแบบฝึกบทเรียน 08 (four parts; ระบุ hero `bg-gradient-to-r from-primary to-primary-dark` + รูป wave จาก Figma ถ้า export มา หรือ gradient เปล่าก็ได้; การ์ด `-mt-24` ลอยทับ; ฟอร์มยังไม่ต้อง validate — UI เท่านั้น); router update: `{ path: "/signup", element: <SignUpPage /> }` เป็น route พี่น้องของ DashboardLayout (show the 5-line router diff). 🤖: excerpt ฟอร์ม (label + input `rounded-xl border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none` — Agent ใช้ `focus:` ไม่ใช่ `focus-visible:` กับ input ซึ่ง**ถูกแล้ว**สำหรับ text input — เกร็ดไว้คุยบทเรียน 13) และ toggle "Remember me" ที่ Agent ทำด้วย `<div>` + state — จดเป็น TODO (บทเรียน 13: toggle ต้องเป็น checkbox จริง). 🔍: จอเล็ก การ์ด Sign Up ตกขอบ? เช็ค `px-4` บน container ✓; Tab ผ่านฟอร์มได้ แต่ social buttons ไม่มี `aria-label` (ไอคอนล้วน) — TODO. 🔧: commit. Close: สรุปสถานะ — 3 หน้าเสร็จ (Dashboard, Tables, Sign Up), TODO list สะสม ~7 ข้อ, หน้า Profile ยังไม่แตะ (เป็นโจทย์ใหญ่ท้าย workshop), ต่อไปคือการ review อย่างเป็นระบบ.

- [ ] **Step 4: Verify + commit**

Run: `python3 $WK/verify_lessons.py` — failures may reference only `12_…`–`16_…`.

```bash
git add Week_05_06/01_tailwind_cursor_workshop/content
git commit -m "content: add workshop lessons 09-11 (app shell, dashboard page, tables & sign up)"
```

---

### Task 6: Chapter 5 — lessons 12–14 (the three review lenses)

**Files:**
- Create: `$WK/content/12_review_responsive.html`, `$WK/content/13_review_accessibility.html`, `$WK/content/14_review_maintainability.html`

**Interfaces:**
- Consumes: the four planted defects + accumulated TODOs from lessons 09–11 (fixed wrapper, sidebar no mobile path, div menu items, no focus styles, table overflow, div-toggle, icon buttons no aria-label, stat-card duplication, badge ternary).
- Produces: the three checklists lessons 15–16 reference ("checklist บทเรียน 12/13/14"); the mobile drawer pattern; the groundwork lesson 15 refactors.

- [ ] **Step 1: Write `12_review_responsive.html`**

Sections: (1) **ทำไม Agent ส่งงาน desktop-only** — มัน optimize ให้ตรง screenshot ที่เราแนบ (เราแนบรูป desktop มันก็ตอบ desktop); ความรับผิดชอบเรื่องจอเล็กเป็นของเรา ตั้งแต่ตอนเขียน prompt (ข้อกำหนด mobile-first) ถึงตอน review. (2) **ล่า defect #1 — `w-[1440px]`**: reproduce ที่ 390px ใน device toolbar เห็น scrollbar แนวนอน; fix เป็น `mx-auto w-full max-w-[1440px] px-4 md:px-6` (อธิบาย: `max-w` ยอมหด, `w-[…]` ตายตัว); สั่งแก้ผ่าน Agent ได้ — prompt สั้น ชี้ไฟล์ ชี้ปัญหา ชี้วิธีแก้ (`ใน DashboardLayout.tsx เปลี่ยน w-[1440px] mx-auto เป็น mx-auto w-full max-w-[1440px] px-4 md:px-6 เพราะจอเล็กเกิด horizontal scroll`) — แล้ว**อ่าน diff**. (3) **Checklist ตรวจ Responsive** (styled `ul` — บทหลังอ้างว่า "checklist บทเรียน 12"): ทดสอบที่ 390 / 768 / 1024 / 1440 ทุกครั้ง; grep หา `w-[`/`h-[` เลขตายตัว → เปลี่ยนเป็น `max-w-*`/`w-full`; ทุก grid มีลำดับคอลัมน์มือถือ→desktop; ตารางกว้างต้องอยู่ใน `overflow-x-auto`; รูปมี `object-cover` + aspect ratio; ข้อความยาวมี `truncate`/`line-clamp-*`; ไม่มี horizontal scroll ที่ความกว้างไหนเลย; ของที่ `hidden` บนมือถือต้องมีทางเข้าถึงอื่น. (4) **ล่า defect #2 — sidebar หายบนมือถือ**: build the drawer (full code ~45 lines): `useState` `open` in DashboardLayout, hamburger button in Navbar (visible `lg:hidden`, `aria-expanded={open}`, `aria-label="เปิดเมนู"`), Sidebar becomes `fixed inset-y-0 left-0 z-40 w-[260px] -translate-x-full transition-transform lg:translate-x-0 ${open ? "translate-x-0" : ""}` + overlay `<button aria-label="ปิดเมนู" className="fixed inset-0 z-30 bg-black/50 lg:hidden" onClick={close} />`; ปิดเมื่อกดลิงก์. (5) **แก้ตารางล้น** (TODO จากบทเรียน 10/11): ครอบทั้งสองตารางด้วย `<div className="overflow-x-auto">` — ตารางข้อมูลบนมือถือ scroll แนวนอนภายในการ์ดได้ เป็น pattern มาตรฐาน. (6) ปิดท้าย: ไล่ checklist ทั้งสามหน้า จด ✓/✗ — เหลือ ✗ ฝั่ง a11y กับ maintainability ไปบทถัดไป.

- [ ] **Step 2: Write `13_review_accessibility.html`**

Sections: (1) **จุดที่ AI พังแบบเงียบที่สุด** — หน้าตาถูกทุก pixel แต่ใช้คีย์บอร์ดไม่ได้ / screen reader อ่านไม่รู้เรื่อง; ไม่มี error ใน console — ต้อง**ทดสอบเป็น** ถึงจะเห็น. (2) **ล่า defect #3 — เมนู sidebar เป็น `<div onClick>`**: กด Tab แล้วโฟกัสข้ามเมนูไปเลย เพราะ div ไม่อยู่ใน tab order; แก้เป็น `NavLink` ของ react-router (show before/after, ~20 lines):

```tsx
import { NavLink } from "react-router";

<NavLink
  to={item.to}
  className={({ isActive }) =>
    `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold ` +
    (isActive
      ? "bg-white text-ink shadow-sm"
      : "text-muted hover:bg-white")
  }
>
```

(active state ได้ฟรีจาก `isActive` — ก่อนหน้านี้ hardcode); เพิ่ม `to` ลง menu data (`{ label: "Dashboard", to: "/" }, { label: "Tables", to: "/tables" }`…). (3) **ล่า defect #4 — มองไม่เห็นโฟกัส**: add `focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none` ให้ NavLink/ปุ่ม/ลิงก์ทุกตัว; อธิบาย `focus-visible` vs `focus` (input ใช้ `focus:` ได้เพราะพิมพ์ = โฟกัสตั้งใจเสมอ — เกร็ดจากบทเรียน 11). (4) **Checklist ตรวจ Accessibility**: heading ไล่ระดับ (h1 เดียวต่อหน้า); landmark ครบ (`aside nav header main`); `alt` ทุกรูป (avatar ใช้ชื่อคน, รูปตกแต่ง `alt=""`); ปุ่มไอคอนล้วนมี `aria-label` (แก้ TODO: social buttons หน้า Sign Up, กระดิ่ง/settings ใน Navbar, kebab menu ในตาราง); ตาราง: `<th scope="col">` ทุกหัวคอลัมน์ + `<caption class="sr-only">`; ฟอร์ม: ทุก input มี `<label htmlFor>`; toggle ต้องเป็น `<input type="checkbox">` จริง (แก้ TODO จากบทเรียน 11 — show the accessible toggle, ~15 lines: `peer sr-only` checkbox + track `peer-checked:bg-primary` + thumb `peer-checked:translate-x-5`, ทั้งหมดใน `<label>`); interactive = `<button>`/`<a>` เท่านั้น; contrast — กับดักของดีไซน์นี้เอง: ตัวหนังสือขาวบนพื้นเขียวมิ้นต์ `#4fd1c5` ได้ contrast ~2:1 ไม่ผ่าน WCAG AA (คำนวณให้ดูด้วย WebAIM contrast checker) → ทางเลือก: ใช้ `text-ink` บนพื้น primary สำหรับข้อความสำคัญ หรือยอมรับเป็น decorative + มีข้อความซ้ำที่อ่านได้; ทดลอง Tab ให้ครบทุกหน้า. (5) **เครื่องมือ** — Lighthouse accessibility audit + axe DevTools: รันกับหน้า Dashboard อ่าน finding จริงหนึ่งข้อ (เช่น image-alt); เพิ่มกติกา a11y ลง `.cursor/rules` แล้วสั่ง Agent self-audit (`ตรวจไฟล์นี้ตาม checklist accessibility ต่อไปนี้ แล้วรายงานสิ่งที่ผิดพร้อมวิธีแก้ อย่าเพิ่งแก้`) — เครื่องมือ + AI ช่วย**หา** แต่คน**ตัดสิน**.

- [ ] **Step 3: Write `14_review_maintainability.html`**

Sections: (1) **กลิ่นของโค้ด AI** — Agent ทำงานเป็นครั้ง ๆ ไม่จำของเดิม: การ์ดหน้าตาเดียวกันถูกเขียน class ยาว ๆ ซ้ำ 4 ที่ (stat cards บทเรียน 10), ternary ยัดใน className (badge บทเรียน 11), เลข arbitrary โผล่กลางทาง (`w-[260px]`, `max-w-[1440px]` — บางตัวจงใจ บางตัวควรเป็น token/scale), ชื่อ generic (`Card2`, `Section`). Show the stat-cards duplication block as the "before" (~25 lines, 2 of the 4 cards). (2) **กติกาหลัก**: เห็น class string ซ้ำ ≥ 2 ที่ = แยก **component** ไม่ใช่แยก CSS (นี่คือคำตอบของ Tailwind เรื่อง reuse — ต่อจากบทเรียน 03/05); DRY ที่ระดับ JSX ไม่ใช่ระดับ stylesheet. (3) **Checklist ตรวจ Maintainability**: class ซ้ำ → component; เลข `[...]` ที่ไม่ใช่ค่าตั้งใจ → token หรือ scale ปกติ (`w-[260px]` sidebar = ตั้งใจ ✓, `mt-[13px]` = กลิ่น ✗); ternary ซ้อนใน className → variant map (บทเรียน 15); component เกิน ~150 บรรทัด → แตกไฟล์; ชื่อ generic → ตั้งตาม domain (StatCard ไม่ใช่ Card2); mock data ปนใน component → แยกไป `src/data/`; ไอคอน SVG ก้อนเดียวกัน copy หลายที่ → แยกไฟล์ icon. (4) **ไล่ checklist กับโค้ดเรา** — ตาราง ✓/✗ ของทั้งสามหน้า: จุดที่เจอ = stat card ×4, badge ternary, toggle duplicated (SignUp + Platform Settings ในอนาคต), progress bar ×2 (Dashboard + Tables), ปุ่ม 3 หน้าตา (DOCUMENTATION, SIGN UP, VIEW ALL) ที่จริงคือปุ่มเดียว 3 variant. (5) ปิดท้าย: รายการนี้คือใบสั่งงานของบทเรียน 15 — เราจะให้ Agent ช่วย refactor แบบมีเรากำกับ.

- [ ] **Step 4: Verify + commit**

Run: `python3 $WK/verify_lessons.py` — failures may reference only `15_…`–`16_…`.

```bash
git add Week_05_06/01_tailwind_cursor_workshop/content
git commit -m "content: add workshop lessons 12-14 (responsive, accessibility, maintainability reviews)"
```

---

### Task 7: Chapter 6 — lessons 15–16 (refactor, wrap-up) + full verification pass

**Files:**
- Create: `$WK/content/15_refactor_components.html`, `$WK/content/16_wrap_up.html`

**Interfaces:**
- Consumes: the maintainability worklist from lesson 14; component names/props from Reference Facts.
- Produces: complete lesson set; lesson 16 has no `rel="next"`.

- [ ] **Step 1: Write `15_refactor_components.html`**

Sections: (1) **หลักการออกแบบ props** — component ที่ดีรับ "ข้อมูล" ไม่ใช่ "คลาส"; ถามสามข้อก่อนแยก: ใช้ที่ไหนบ้าง / อะไรคือสิ่งที่ต่างกันในแต่ละที่ (นั่นคือ props) / อะไรคงที่ (นั่นคือโค้ดใน component). (2) **Button — variant map pattern** (the canonical full code):

```tsx
// src/components/Button.tsx
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
  ghost: "text-muted hover:bg-gray-100",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-xs font-bold tracking-wide uppercase transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      {...rest}
    />
  );
}
```

walk through: variant map object > nested ternaries, spread rest props (`onClick`, `type`, `disabled` ผ่านฟรี), `className` escape hatch, focus/disabled baked in once; map to the three ปุ่มในดีไซน์ (SIGN UP = primary, DOCUMENTATION = ขาวบนการ์ดเขียว — ใช้ `className` เสริม, VIEW ALL = outline). (3) **StatCard** (full code ~30 lines):

```tsx
// src/components/StatCard.tsx
import { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string;
  delta?: string;
  deltaTone?: "up" | "down";
  icon: ReactNode;
}

export default function StatCard({
  label,
  value,
  delta,
  deltaTone = "up",
  icon,
}: StatCardProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
      <div>
        <p className="text-sm font-medium text-muted">{label}</p>
        <p className="text-xl font-bold text-ink">
          {value}{" "}
          {delta && (
            <span
              className={`text-sm font-bold ${
                deltaTone === "up" ? "text-success" : "text-danger"
              }`}
            >
              {delta}
            </span>
          )}
        </p>
      </div>
      <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-white">
        {icon}
      </div>
    </div>
  );
}
```

usage: `stats.map((s) => <StatCard key={s.label} {...s} />)` — หน้า Dashboard สั้นลง ~80 บรรทัด. (4) **StatusBadge + ProgressBar** (full code, ~15 lines each): `StatusBadge({ tone, children })` with `Record<"success" | "muted", string>` map (kills the lesson-11 ternary — และรองรับ Working/Done/Canceled ของตาราง Projects); `ProgressBar({ value })` = label `text-primary text-sm font-bold {value}%` + track `h-1 rounded-full bg-gray-200` + fill `style={{ width: `${value}%` }}` + `role="progressbar" aria-valuenow={value} aria-valuemin={0} aria-valuemax={100}` (a11y ติดมากับ component ฟรีทุกที่ที่ใช้ — ประโยชน์ที่แท้จริงของการ refactor). (5) **NavItem** — extract from lesson 13's NavLink markup (`{ to, icon, label }`, full code ~25 lines); sidebar เหลือ `menu.map((m) => <NavItem key={m.to} {...m} />)`. (6) **สั่ง refactor ผ่าน Agent อย่างมีกำกับ** — one worked prompt (`แยก stat card ที่ซ้ำ 4 ที่ใน DashboardPage.tsx เป็น src/components/StatCard.tsx ตาม interface นี้: …วาง interface… ห้ามเปลี่ยนหน้าตา UI`), then: อ่าน diff, รัน dev เทียบตาต่อตา (visual regression ด้วยตา), เช็คว่า props interface ตรงที่เราออกแบบ ไม่ใช่ที่ Agent เดา; ทำทีละ component — งานเล็ก review ง่าย. (7) ปิดท้าย: ไล่ checklist บทเรียน 14 อีกรอบ — ทุกข้อควรเขียว.

- [ ] **Step 2: Write `16_wrap_up.html`**

Sections: (1) **ยินดีด้วย + สิ่งที่สร้าง** — 3 หน้า (Dashboard, Tables, Sign Up) + app shell + ชุด component (Button, StatCard, NavItem, StatusBadge, ProgressBar) — restate routes in a small table. (2) **ทักษะทั้งสี่ ↔ บทเรียน** — map each syllabus skill to lessons (skill 1 → บทเรียน 06–08, skill 2 → 09–11, skill 3 → 12–14, skill 4 → 15) — ย้ำว่าลูป prompt → generate → review → refactor คือของจริงที่ใช้กับทุก UI ไม่ใช่แค่ workshop นี้. (3) **โจทย์ใหญ่: หน้า Profile** — the capstone: embed `profile.png`; ทำครบลูปด้วยตัวเอง: decomposition (บทเรียน 06) → prompt สี่ส่วน (07, อ่านค่าจาก Figma ตาม 08) → generate (09) → checklist ทั้งสาม (12–14) → refactor (15 — hint: Platform Settings ใช้ toggle จากบทเรียน 13, การ์ดโปรเจกต์คล้าย promo card, tab OVERVIEW/TEAMS/PROJECTS เป็นโอกาสสร้าง component `TabButton`); ระบุจุดยาก: hero ทับการ์ด (`-mt-16`), grid 3 คอลัมน์ยุบเป็น 1. (4) **ไอเดียต่อยอด** — หน้า Billing/RTL จาก Figma, dark mode ด้วย `dark:` variants, กราฟจริงด้วย chart library, ต่อ API จริง (เชื่อมกลับคอร์ส e-commerce Week 05–06 เรื่อง TanStack Query), deploy ตาม Week 04 บทเรียน 35. (5) **ส่งท้าย AI workflow** — ยิ่ง AI generate เก่งขึ้น ทักษะที่แพงขึ้นคือการอ่านดีไซน์แตก เขียนความต้องการชัด และ review เป็น — สามอย่างนี้คือสิ่งที่ฝึกไปตลอด workshop; อย่ากลัวที่จะให้ AI ทำงานเยอะ แต่อย่า ship สิ่งที่อ่านไม่เข้าใจ.

- [ ] **Step 3: Full verify — must pass clean**

Run: `python3 Week_05_06/01_tailwind_cursor_workshop/verify_lessons.py`
Expected: `16 lessons checked, 0 problem(s).` exit 0. Fix anything it reports.

- [ ] **Step 4: Manual spot-check + consistency greps**

Open `content/index.html` in a browser: chapter cards render, click 01 → 02 via nav links, images display in lessons 01, 06, 09. Skim lesson 10 for the 5 Loop sections in order. Then:

```bash
cd Week_05_06/01_tailwind_cursor_workshop/content
grep -l "tailwind.config" *.html && echo "FAIL: v3 config mentioned"
grep -l "@tailwind base" *.html && echo "FAIL: v3 directives"
grep -L 'lang="th"' *.html | grep -v '^$' && echo "FAIL: missing lang=th"
grep -c 'Tailwind CSS และ Cursor Workflow</title>' [0-9]*.html | grep -v ':1$' && echo "FAIL: title suffix"
```

Expected: no `FAIL` lines (greps find nothing).

- [ ] **Step 5: Commit**

```bash
git add Week_05_06/01_tailwind_cursor_workshop/content
git commit -m "content: add workshop lessons 15-16 (refactor to components, wrap up)"
```
