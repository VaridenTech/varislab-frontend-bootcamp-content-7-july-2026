# Week_05_06 React E-commerce + Cursor AI Course — Design

**Date:** 2026-08-10
**Status:** Approved by user (design presented and approved 2026-08-10)

## Goal

A parallel version of `Week_05_06/02_react_ecommerce_project` in which students
build the same e-commerce app, but use Cursor AI to write most of the code.
The finished app is identical to the original course's app — same reference
repo, same architecture, same dependencies, same final code. What changes is
*how the student gets there*.

The pedagogical model is **understand-first, then delegate**: every lesson keeps
its conceptual explanation intact, the student writes a spec-grade prompt, Cursor
generates, and the student reviews the output against a concrete checklist.
Designated code stays hand-typed on purpose.

**Governing rule, stated in lesson 01 and enforced in every lesson:**
AI พิมพ์แทนคุณได้ แต่คุณต้องอธิบายทุกบรรทัดได้ — ถ้าอธิบายไม่ได้ แปลว่ายังไม่ผ่านบทนี้.

## Decisions

| Question | Decision |
| --- | --- |
| Pedagogical model | Understand-first, then delegate (concept → prompt → review → self-check) |
| Lesson map | Keep all 30 original lessons in order; insert 5 new AI lessons → 35 total |
| Safeguards | No-AI zones (`✍️ ส่วนนี้พิมพ์เอง`), per-lesson review checklists, `🤔 อธิบายให้ได้` self-check questions. **Not** broken-AI-output exercises. |
| Location | New sibling folder; original `02_` untouched |
| Cursor prerequisite | **Self-contained** — re-teaches Cursor from zero; does not assume `01_tailwind_cursor_workshop` |
| Final app | Byte-identical to the original course's app. No new features, no Tailwind, same dependencies. |

## Output location

`Week_05_06/03_react_ecommerce_ai_project/content/`

Course title: **สร้างเว็บ E-commerce ด้วย React + Cursor AI**
`<title>` pattern: `<Thai lesson name> | สร้างเว็บ E-commerce ด้วย React + Cursor AI`

## Format contract

Mirrors `Week_05_06/02_react_ecommerce_project/content` exactly, except where noted.

- Thai narration; English technical terms untranslated. No `translator-note` class.
- Numbered files `01_intro.html` … `35_wrap_up.html`, plus `index.html`
  (chapter cards) and `lesson.css`.
- `lesson.css` is copied from `01_tailwind_cursor_workshop/content/lesson.css`
  (a superset of the e-commerce one — it adds `.lesson-source-code` and
  `.lesson-source-code-note`), then extended with three blockquote variants:

  ```css
  .lesson-ai-prompt   { border-inline-start-color: var(--blue); }
  .lesson-ai-review   { border-inline-start-color: var(--amber); }
  .lesson-manual      { border-inline-start-color: var(--blue-dark); }
  ```

  These are the only CSS additions. All other styling is inherited.
- Each lesson: `<html lang="th">`, `<link rel="stylesheet" href="lesson.css">`,
  `<article class="lesson">`, header with `lesson-eyebrow`
  (`บทเรียน N · <Thai chapter> (<English chapter>)`), Thai `<h1>`,
  `<p class="lesson-original-title" lang="en">English title</p>`.
- Code in `<pre><code class="language-typescript|bash|scss|json|html">` with HTML
  entities escaped. **Prompts use `class="language-text"`.**
- `<blockquote>` for tips/warnings (emoji 🚨/⚠️/💡 ok).
- Footer nav: `<nav class="lesson-navigation" aria-label="การนำทางบทเรียน">` with
  prev / index / next (`rel="prev"` / `rel="next"`).

## Per-lesson anatomy

Every build lesson (09–28, 30–33) follows this shape. Sections 5–6 are omitted
in short lessons; not every lesson has a no-AI zone.

1. **แนวคิด** — the conceptual explanation, carried over from the corresponding
   original lesson essentially unchanged. AI never touches this section; it is
   where the knowledge lives.
2. **เป้าหมายของบทนี้** — files to create, and the *contract* each must satisfy
   (what it does, what it must not do).
3. **🤖 Prompt ที่ส่งให้ Cursor** (`blockquote.lesson-ai-prompt` + `language-text`
   code block) — a real four-part prompt: บริบท / โครงสร้าง / ข้อกำหนดทางเทคนิค /
   ขอบเขต, with `@`-mentions of actual files the student already has.
4. **✅ ตรวจโค้ดที่ AI สร้าง** (`blockquote.lesson-ai-review`) — concrete checklist
   of what must be true, plus a "AI มักพลาดตรงนี้" note naming the realistic
   mistake for that spot. Followed by the reference final code so the student can
   diff their result against it.
5. **✍️ ส่วนนี้พิมพ์เอง** (`blockquote.lesson-manual`) — the designated no-AI code,
   with the reason stated in one sentence.
6. **🤔 อธิบายให้ได้** — 2–3 questions answerable only by reading the code in front
   of them. The checkpoint states explicitly: can't answer → don't move on.
7. **💡 Checkpoint** — carried over from the original lesson unchanged.

## Lesson map (35 lessons, 12 chapters)

New lessons marked ⭐. "orig N" = the corresponding lesson in
`02_react_ecommerce_project`, whose conceptual content and checkpoint are carried
over.

**1. เริ่มต้น — Welcome**
1. `01_intro.html` บทนำ — orig 01, plus: how we work with AI in this course, the
   governing rule, what the ✍️/✅/🤔 blocks mean, honest framing of what AI is
   good and bad at on a project like this.

**2. ติดตั้งโปรเจกต์ — Project Setup** (all hand-typed; no Cursor yet)
2. `02_project_scaffold.html` — orig 02.
3. `03_tooling.html` — orig 03.
4. `04_scss_foundation.html` — orig 04.
5. `05_architecture.html` — orig 05. ✍️ folder structure by hand.

**3. ⭐ ตั้งวงกับ Cursor — Setting Up Cursor**
6. ⭐ `06_cursor_setup.html` ติดตั้งและรู้จัก Cursor — self-contained: install,
   open the project, Agent vs Ask vs Tab, choosing a model, giving context with
   `@file` / `@folder`, checkpoints & restore, and the safety habit: commit
   before every prompt so every AI change is a reviewable diff.
7. ⭐ `07_cursor_rules.html` `.cursor/rules` ของโปรเจกต์นี้ — write rules that
   encode what lessons 03–05 established: feature-based structure, SCSS modules,
   TypeScript strict / no `any`, no fetching in `useEffect`, `@/` alias, naming
   conventions. Demonstrate the same prompt with and without rules.
8. ⭐ `08_prompt_and_review.html` Prompt สำหรับ codebase และวงจรตรวจงาน — the
   four-part prompt adapted from screenshots (workshop) to an existing codebase;
   the review loop: read the diff → checklist → `npm run lint` + typecheck →
   run it → ask "อธิบายได้ไหม"; when to refine vs revert.

**4. โครงแอปและเราเตอร์ — App Shell & Routing**
9. `09_react_router.html` — orig 06. ✍️ route config by hand.
10. `10_header_footer.html` — orig 07.
11. `11_providers_query_client.html` — orig 08.

**5. คอมโพเนนต์กลาง — Shared UI**
12. `12_button_input_radio.html` — orig 09. ✍️ `Button` by hand: it establishes
    the typed-props + SCSS-module pattern that AI copies for everything after.
13. `13_modal_pagination.html` — orig 10.
14. `14_display_components.html` — orig 11.

**6. ชั้นข้อมูลสินค้า — Products Data Layer**
15. `15_api_client.html` — orig 12. ✍️ the `ApiError`-normalizing interceptor.
16. `16_product_types_api.html` — orig 13.
17. `17_query_factories.html` — orig 14. ✍️ the `productKeys` factory.

**7. สร้างหน้าเพจ — Pages**
18. `18_product_list_components.html` — orig 15.
19. `19_home_page.html` — orig 16.
20. `20_category_page.html` — orig 17.
21. `21_product_page.html` — orig 18.

**8. ตะกร้าสินค้า — Cart**
22. `22_cart_store.html` — orig 19. ✍️ `cartReducer` by hand.
23. `23_add_to_cart.html` — orig 20.
24. `24_cart_page.html` — orig 21.

**9. ชำระเงิน — Checkout**
25. `25_checkout_schema.html` — orig 22. ✍️ the zod schema by hand.
26. `26_address_form.html` — orig 23.
27. `27_delivery_payment_summary.html` — orig 24.
28. `28_place_order.html` — orig 25. ✍️ the mutation → clear cart → navigate flow.

**10. ⭐ เมื่อ AI เขียนผิด — When the AI Gets It Wrong**
29. ⭐ `29_when_ai_gets_it_wrong.html` — the failure patterns this exact build
    produces, each with symptom → cause → fix: hallucinated dummyjson fields,
    outdated TanStack Query v4 syntax, mutating state in a reducer, `as any` to
    silence a type error, inline styles instead of an SCSS module, a duplicated
    component instead of reusing `shared/`, ignoring the `@/` alias. Then:
    corrective follow-up prompt vs revert-and-re-prompt vs write it yourself —
    and how to tell which situation you're in.

**11. การทดสอบ — Testing**
30. `30_test_setup.html` — orig 26.
31. `31_unit_tests.html` — orig 27. ✍️ the first test of each kind by hand.
32. `32_hook_tests.html` — orig 28.
33. `33_integration_tests.html` — orig 29. ✍️ one integration test end to end.

**12. ส่งท้าย — Wrap Up**
34. ⭐ `34_ai_code_review.html` ใช้ AI ตรวจงานตัวเอง — point Cursor at the finished
    codebase to find duplication, missing error states, accessibility gaps and
    weak tests; how to phrase a review prompt; and the limits — AI cannot tell
    you whether the product is right, only whether the code is consistent.
35. `35_wrap_up.html` — orig 30, plus: what skills the student actually walks away
    with, and how to keep learning without outsourcing the thinking.

## Source of truth

The finished app: <https://github.com/manjarb/varis-lab-project-06-react-ecommerce-app>

Clone it fresh into the session scratchpad before writing lessons. Every code
block shown as "the code you should end up with" must match the real files in
that repo. Prompts must be specific enough that a reasonable Cursor run produces
that code; where it plausibly wouldn't, the review checklist calls out the gap.

The staging table from the original course's design still applies (a file
introduced in v1 form and completed later), with lesson numbers shifted:

| File | v1 (lesson) | Completed (lesson) |
| --- | --- | --- |
| `MainLayout` | Outlet only (09) | + Header/Footer (10) |
| `Header` | no CartSummary (10) | + CartSummary badge (23) |
| `providers.tsx` | QueryClientProvider + Devtools (11) | + CartProvider (22) |
| `Product.tsx` | Add-to-Cart not wired (21) | + useCart + modal (23) |
| `eslint.config.js` | base config (03) | + `@tanstack/eslint-plugin-query` (17) |
| `main.tsx` | scaffold (02) | + main.scss (04), + skeleton.css (18) |
| `vite.config.ts` | scaffold (02) | + `@` alias (03), + `legacy.inconsistentCjsInterop` (12), + `test` block (30) |

`SwiperCarousel` is imported nowhere in the repo and stays omitted. Dependencies
are installed in the lesson that first uses them. Banner/deal images are copied
from the finished repo in lesson 19.

## Non-goals

- No changes to `Week_05_06/02_react_ecommerce_project` — it stays as the manual
  version and remains teachable on its own.
- No new app features, no Tailwind, no dependency changes.
- No broken-AI-output fix-it exercises inside build lessons (the failure patterns
  are consolidated into lesson 29 instead).
- No quiz JSON in `extra/` for this course.

## Production notes

- Build in a git worktree on its own branch — this checkout is shared with other
  sessions and foreign commits can race onto HEAD.
- Write order: `lesson.css`, `index.html`, then lessons. The five ⭐ lessons are
  original writing; the other 30 adapt an existing lesson each and must preserve
  its conceptual sections and checkpoint.
- Verification pass before commit: file inventory (35 + index + css), nav chain
  prev/next correctness across all 35, `lesson-eyebrow` numbering, escaped code
  blocks, code fidelity spot-check against the cloned repo, and a check that every
  ✍️ no-AI zone in the table above is actually present.
