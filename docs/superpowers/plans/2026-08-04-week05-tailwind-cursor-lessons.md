# Week 05 — Tailwind CSS & Cursor Workflow Lessons — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Author the 20 Thai HTML lessons of `Week_05/01_tailwind_cursor_ecommerce/` that teach students to rebuild the reference e-commerce app with Tailwind CSS using the Cursor Agent workflow (prompt → generate → review → refactor).

**Architecture:** Static HTML lesson set in Week_04's exact format — numbered lesson files + `index.html` TOC + shared `lesson.css` + self-deriving `verify_lessons.py`. No app code ships in this repo; lessons embed code snippets kept faithful to the reference repo, adapted from SCSS modules to Tailwind v4 utilities. Screenshots of the running reference app are the "design handoff" artifacts.

**Tech Stack (taught in lessons):** React 19 + TypeScript + Vite, Tailwind CSS v4 (`@tailwindcss/vite`, CSS-first config), react-router 8 (data mode), TanStack Query 5, axios, react-hook-form 7 + zod 4, Swiper, react-paginate, Cursor (Agent mode, `.cursor/rules`).

**Spec:** `docs/superpowers/specs/2026-08-04-week05-tailwind-cursor-design.md`

## Global Constraints

- Every lesson file: `lang="th"`, Thai prose with English technical terms untranslated (component, props, utility, breakpoint…), Week_04 markup conventions exactly (see Lesson Template below).
- `<title>` suffix for every lesson: `| Tailwind CSS และ Cursor Workflow`.
- Eyebrow format: `บทเรียน NN · <Thai chapter name>` — NN must match the 2-digit filename prefix (verify checks this).
- Nav chain: lesson 01 has **no** `rel="prev"` link; lesson 20 has **no** `rel="next"` link; all others link to the adjacent files in the Canonical Lesson Table below (verify checks the chain).
- `lesson.css` is copied from Week_04 **unchanged**. Images live in `content/images/` and are referenced as `images/<name>.png`.
- Tailwind syntax is **v4 only**: `npm install tailwindcss @tailwindcss/vite`, `@import "tailwindcss"`, `@theme` tokens. Never show `tailwind.config.js`, `npx tailwindcss init`, or `@tailwind base` (v3 idioms).
- Code snippets must stay faithful to the reference repo (routes, types, endpoints, names in Reference Facts below) except styling, which becomes Tailwind utilities.
- Commit messages: `content: <what>` (matches repo history), each ending with the `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>` trailer.
- After every task: run `python3 Week_05/01_tailwind_cursor_ecommerce/verify_lessons.py`. Until Task 9 the ONLY acceptable failures are `broken link -> NN_…`, `rel=next`, or `index.html: missing […]` messages that reference **not-yet-written** lesson files. Any eyebrow mismatch, out-of-order index entry, or broken link to an existing file must be fixed before committing.

## Reference Facts (single source of truth for all tasks)

**Reference repo:** https://github.com/manjarb/varis-lab-project-06-react-ecommerce-app — clone it once to a temp dir, call it `$REF` in commands:

```bash
export REF=/tmp/week05-ref-app   # any scratch location works; reuse across tasks
git clone --depth 1 https://github.com/manjarb/varis-lab-project-06-react-ecommerce-app "$REF"
```

**App identity:** store name **"My Store"**, primary brand color **`#0d6efd`**, accent orange `#ffa200`, danger red `#ff4136`, text `#212529`, light grey surfaces `#f5f5f5`/`#f8f8f8` (from `$REF/src/styles/_variables.scss`).

**Routes** (`$REF/src/app/router.tsx`, react-router 8 `createBrowserRouter`, all children of `MainLayout` with `errorElement: <RouteErrorFallback />`):

| Path | Page |
| --- | --- |
| `/` | Home |
| `/categories` | Category |
| `/products/:id` | Product |
| `/cart` | Cart |
| `/checkout` | Checkout |
| `/order/success` | OrderSuccess |

**API — dummyjson** (base URL from `.env`: `VITE_API_BASE_URL=https://dummyjson.com`):

| Endpoint | Returns |
| --- | --- |
| `GET /products?limit&skip` | `{ products: Product[], total, skip, limit }` |
| `GET /products/categories` | `Category[]` — `{ slug, name, url }` |
| `GET /products/category/:slug?limit&skip` | same shape as `/products` |
| `GET /products/:id` | `Product` |
| `POST /carts/add` | mock order placement, returns `{ id }` |

**Key types** (`$REF/src/features/products/types.ts`): `Product` has `id, title, description, category, price, discountPercentage?, rating, stock, brand, reviews: ProductReview[], images: string[], thumbnail`. `ProductReview` has `rating, comment, date, reviewerName`. Cart item (`$REF/src/features/cart/store/CartContext.tsx`): `{ id, title, price, quantity, image, originalPrice }`. Cart localStorage key: `"ecommerce-cart:v1"`.

**Checkout constants** (`$REF/src/features/checkout/consts.ts`): delivery — Standard 5.99 (5–7 Days), Express 15.99 (1–2 Days); payment — Cash on Delivery, Bank Transfer.

**Module root for this plan:** `WK=Week_05/01_tailwind_cursor_ecommerce` (all paths below relative to repo root).

## Canonical Lesson Table

| NN | File | Thai title (h1 + nav text) | English (`lesson-original-title`) | Chapter (eyebrow text) |
| --- | --- | --- | --- | --- |
| 01 | `01_intro.html` | บทนำ: สัปดาห์นี้เราจะสร้างอะไร | Intro | ปฐมนิเทศ (Orientation) |
| 02 | `02_utility_first.html` | แนวคิด Utility-First | Utility-First CSS | Tailwind CSS พื้นฐาน (Tailwind Fundamentals) |
| 03 | `03_tailwind_setup.html` | เริ่มใช้ Tailwind v4 กับ Vite | Tailwind Setup | Tailwind CSS พื้นฐาน (Tailwind Fundamentals) |
| 04 | `04_core_utilities.html` | Utilities หลักที่ใช้บ่อย | Core Utilities | Tailwind CSS พื้นฐาน (Tailwind Fundamentals) |
| 05 | `05_responsive.html` | Responsive แบบ Mobile-first | Responsive Design | Tailwind CSS พื้นฐาน (Tailwind Fundamentals) |
| 06 | `06_states_tokens.html` | States, Design Tokens และการจัดระเบียบ Class | States & Design Tokens | Tailwind CSS พื้นฐาน (Tailwind Fundamentals) |
| 07 | `07_cursor_agent.html` | รู้จัก Cursor และ Cursor Agent | Meet Cursor | Cursor Workflow |
| 08 | `08_screenshot_to_prompt.html` | จาก Screenshot สู่ Prompt | Screenshot to Prompt | Cursor Workflow |
| 09 | `09_project_setup.html` | ตั้งโครงโปรเจกต์ E-commerce | Project Setup | เริ่มสร้างโปรเจกต์ (Project Kickoff) |
| 10 | `10_first_layout.html` | สร้าง Layout แรกด้วย Agent | First Layout with the Agent | เริ่มสร้างโปรเจกต์ (Project Kickoff) |
| 11 | `11_review_responsive.html` | ตรวจ Responsive ของโค้ดจาก AI | Reviewing Responsiveness | ตรวจทานโค้ดที่ AI สร้าง (Reviewing AI Code) |
| 12 | `12_review_accessibility.html` | ตรวจ Accessibility | Reviewing Accessibility | ตรวจทานโค้ดที่ AI สร้าง (Reviewing AI Code) |
| 13 | `13_review_maintainability.html` | ตรวจ Maintainability และแยก Reusable Component | Maintainability & Refactoring | ตรวจทานโค้ดที่ AI สร้าง (Reviewing AI Code) |
| 14 | `14_home_page.html` | หน้า Home | The Home Page | สร้างแอปทีละหน้า (Building Page by Page) |
| 15 | `15_real_data.html` | ต่อข้อมูลจริงด้วย TanStack Query | Real Data with TanStack Query | สร้างแอปทีละหน้า (Building Page by Page) |
| 16 | `16_category_page.html` | หน้า Category และ Pagination | Category Page & Pagination | สร้างแอปทีละหน้า (Building Page by Page) |
| 17 | `17_product_page.html` | หน้า Product Detail | Product Detail Page | สร้างแอปทีละหน้า (Building Page by Page) |
| 18 | `18_cart.html` | ระบบตะกร้าสินค้า | The Shopping Cart | สร้างแอปทีละหน้า (Building Page by Page) |
| 19 | `19_checkout.html` | Checkout และ Order Success | Checkout & Order Success | สร้างแอปทีละหน้า (Building Page by Page) |
| 20 | `20_wrap_up.html` | สรุปและก้าวต่อไป | Wrap Up | สร้างแอปทีละหน้า (Building Page by Page) |

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

Code blocks use `<pre><code class="language-bash|css|tsx|typescript|html|jsx">` with HTML-escaped `<`, `>`, `&`. Images: `<img src="images/⟨name⟩.png" alt="⟨Thai description⟩" />`.

**The Loop template** — build lessons (10, 14, 16, 17, 18, 19) structure their body with these recurring `h2` sections, in this order:

1. `🎯 เป้าหมาย` — target screenshot(s) + bullet list of what "done" means
2. `📝 เขียน Prompt` — a complete Thai prompt in a `pre` block the student can paste into the Agent
3. `🤖 สิ่งที่ Agent สร้าง` — representative generated code (the interesting parts, not every file)
4. `🔍 ตรวจทาน` — apply the review checklists from lessons 11–13 to that output; show at least one real defect and its fix
5. `🔧 Refactor` — extract/rename into the reusable components + final code

---

### Task 1: Scaffold the module (dirs, lesson.css, verify script, full TOC)

**Files:**
- Create: `Week_05/01_tailwind_cursor_ecommerce/content/index.html`
- Create: `Week_05/01_tailwind_cursor_ecommerce/content/lesson.css` (copy)
- Create: `Week_05/01_tailwind_cursor_ecommerce/verify_lessons.py` (copy)
- Create: `Week_05/01_tailwind_cursor_ecommerce/content/images/` (created by Task 2's screenshots; no `.gitkeep` needed)

**Interfaces:**
- Produces: the TOC every lesson links back to as `index.html`, and the verify script every later task runs. Lesson filenames/titles in the TOC are the Canonical Lesson Table — later tasks must match it exactly.

- [ ] **Step 1: Copy the shared assets**

```bash
mkdir -p Week_05/01_tailwind_cursor_ecommerce/content
cp Week_04/02_complete_intro_to_react/content/lesson.css Week_05/01_tailwind_cursor_ecommerce/content/lesson.css
cp Week_04/02_complete_intro_to_react/verify_lessons.py Week_05/01_tailwind_cursor_ecommerce/verify_lessons.py
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
        <p>สร้างเว็บ E-commerce จริงทั้งเว็บ ด้วย Tailwind CSS และ Cursor Agent</p>
      </header>

      <div class="chapter-list">
        <section class="chapter-card">
          <h2>1. ปฐมนิเทศ — Orientation</h2>
          <ol>
            <li><a href="01_intro.html">บทนำ: สัปดาห์นี้เราจะสร้างอะไร — Intro</a></li>
          </ol>
        </section>

        <section class="chapter-card">
          <h2>2. Tailwind CSS พื้นฐาน — Tailwind Fundamentals</h2>
          <ol start="2">
            <li><a href="02_utility_first.html">แนวคิด Utility-First — Utility-First CSS</a></li>
            <li><a href="03_tailwind_setup.html">เริ่มใช้ Tailwind v4 กับ Vite — Tailwind Setup</a></li>
            <li><a href="04_core_utilities.html">Utilities หลักที่ใช้บ่อย — Core Utilities</a></li>
            <li><a href="05_responsive.html">Responsive แบบ Mobile-first — Responsive Design</a></li>
            <li><a href="06_states_tokens.html">States, Design Tokens และการจัดระเบียบ Class — States &amp; Design Tokens</a></li>
          </ol>
        </section>

        <section class="chapter-card">
          <h2>3. Cursor Workflow — Cursor Workflow</h2>
          <ol start="7">
            <li><a href="07_cursor_agent.html">รู้จัก Cursor และ Cursor Agent — Meet Cursor</a></li>
            <li><a href="08_screenshot_to_prompt.html">จาก Screenshot สู่ Prompt — Screenshot to Prompt</a></li>
          </ol>
        </section>

        <section class="chapter-card">
          <h2>4. เริ่มสร้างโปรเจกต์ — Project Kickoff</h2>
          <ol start="9">
            <li><a href="09_project_setup.html">ตั้งโครงโปรเจกต์ E-commerce — Project Setup</a></li>
            <li><a href="10_first_layout.html">สร้าง Layout แรกด้วย Agent — First Layout with the Agent</a></li>
          </ol>
        </section>

        <section class="chapter-card">
          <h2>5. ตรวจทานโค้ดที่ AI สร้าง — Reviewing AI Code</h2>
          <ol start="11">
            <li><a href="11_review_responsive.html">ตรวจ Responsive ของโค้ดจาก AI — Reviewing Responsiveness</a></li>
            <li><a href="12_review_accessibility.html">ตรวจ Accessibility — Reviewing Accessibility</a></li>
            <li><a href="13_review_maintainability.html">ตรวจ Maintainability และแยก Reusable Component — Maintainability &amp; Refactoring</a></li>
          </ol>
        </section>

        <section class="chapter-card">
          <h2>6. สร้างแอปทีละหน้า — Building Page by Page</h2>
          <ol start="14">
            <li><a href="14_home_page.html">หน้า Home — The Home Page</a></li>
            <li><a href="15_real_data.html">ต่อข้อมูลจริงด้วย TanStack Query — Real Data with TanStack Query</a></li>
            <li><a href="16_category_page.html">หน้า Category และ Pagination — Category Page &amp; Pagination</a></li>
            <li><a href="17_product_page.html">หน้า Product Detail — Product Detail Page</a></li>
            <li><a href="18_cart.html">ระบบตะกร้าสินค้า — The Shopping Cart</a></li>
            <li><a href="19_checkout.html">Checkout และ Order Success — Checkout &amp; Order Success</a></li>
            <li><a href="20_wrap_up.html">สรุปและก้าวต่อไป — Wrap Up</a></li>
          </ol>
        </section>
      </div>
    </main>
  </body>
</html>
```

- [ ] **Step 3: Run verify**

Run: `python3 Week_05/01_tailwind_cursor_ecommerce/verify_lessons.py`
Expected: `FAIL: no lesson files found` (exit 1) — correct at this stage; the script needs at least one lesson. Nothing else to fix.

- [ ] **Step 4: Commit**

```bash
git add Week_05/01_tailwind_cursor_ecommerce
git commit -m "content: scaffold Week 05 Tailwind & Cursor module (TOC, css, verify)"
```

---

### Task 2: Capture reference-app screenshots

**Files:**
- Create: `Week_05/01_tailwind_cursor_ecommerce/content/images/{home,category,product,cart,checkout,order_success}_{desktop,mobile}.png` (12 files)

**Interfaces:**
- Produces: image filenames used by lessons 01, 08, 10, 14, 16, 17, 18, 19 exactly as listed above.

- [ ] **Step 1: Clone and start the reference app**

```bash
export REF=/tmp/week05-ref-app
git clone --depth 1 https://github.com/manjarb/varis-lab-project-06-react-ecommerce-app "$REF"
cd "$REF" && npm install    # engines wants Node >=22.22; an EBADENGINE *warning* on 22.12 is fine, vite 8 runs
npm run dev -- --port 5199 --strictPort &   # keep running; note the PID
until curl -sf http://localhost:5199 >/dev/null; do sleep 1; done
```

- [ ] **Step 2: Install Playwright in the clone and write the capture script**

```bash
cd "$REF" && npm i -D playwright && npx playwright install chromium
```

Write `$REF/capture.mjs`:

```js
import { chromium } from "playwright";

const BASE = "http://localhost:5199";
const OUT = process.argv[2] ?? ".";

// Seed the cart with two real products so /cart and /checkout look populated.
const res = await fetch("https://dummyjson.com/products?limit=2");
const { products } = await res.json();
const seededCart = {
  items: products.map((p, i) => ({
    id: p.id,
    title: p.title,
    price: p.price,
    quantity: i + 1,
    image: p.thumbnail,
    originalPrice: p.price,
  })),
};

const pages = [
  { path: "/", name: "home", seed: false },
  { path: "/categories", name: "category", seed: false },
  { path: "/products/1", name: "product", seed: false },
  { path: "/cart", name: "cart", seed: true },
  { path: "/checkout", name: "checkout", seed: true },
  { path: "/order/success", name: "order_success", seed: false },
];
const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

const browser = await chromium.launch();
for (const vp of viewports) {
  const context = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
  });
  for (const p of pages) {
    const page = await context.newPage();
    if (p.seed) {
      await page.addInitScript((cart) => {
        localStorage.setItem("ecommerce-cart:v1", JSON.stringify(cart));
      }, seededCart);
    }
    await page.goto(BASE + p.path, { waitUntil: "networkidle" });
    await page.waitForTimeout(1500); // let images/carousel settle
    await page.screenshot({
      path: `${OUT}/${p.name}_${vp.name}.png`,
      fullPage: true,
    });
    await page.close();
  }
  await context.close();
}
await browser.close();
console.log("done");
```

- [ ] **Step 3: Capture into the repo**

```bash
mkdir -p <repo>/Week_05/01_tailwind_cursor_ecommerce/content/images
cd "$REF" && node capture.mjs <repo>/Week_05/01_tailwind_cursor_ecommerce/content/images
```

Expected: prints `done`; 12 PNGs exist. Open `home_desktop.png` and `cart_desktop.png` and confirm they show a rendered storefront (products visible, cart non-empty) — not a blank/error page. Then kill the dev server.

- [ ] **Step 4: Commit**

```bash
git add Week_05/01_tailwind_cursor_ecommerce/content/images
git commit -m "content: add Week 05 reference app screenshots"
```

---

### Task 3: Chapter 1–2 — lessons 01–06 (orientation + Tailwind fundamentals)

**Files:**
- Create: `$WK/content/01_intro.html` … `$WK/content/06_states_tokens.html`

**Interfaces:**
- Consumes: images from Task 2; titles/nav chain from the Canonical Lesson Table.
- Produces: the concepts later lessons reference by lesson number ("เหมือนที่เห็นในบทเรียน 05") — responsive prefixes (L05), `@theme` tokens `--color-primary: #0d6efd` (L06), class-ordering convention (L06).

Write each lesson with the Lesson Template. Per-lesson content:

- [ ] **Step 1: Write `01_intro.html`**

Sections: (1) what we build — walk through all six pages with `<img>` of `home_desktop.png`, `category_desktop.png`, `product_desktop.png`, `cart_desktop.png`, `checkout_desktop.png`; name the features (browse by category, product detail + reviews, cart with localStorage, mock checkout). (2) สิ่งที่จะได้เรียน — the four syllabus skills verbatim as a list (แปลง screenshot เป็น prompt / ใช้ Cursor Agent สร้าง UI / ตรวจทานโค้ด Tailwind / refactor เป็น component). (3) the workflow loop — explain prompt → generate → review → refactor as the week's recurring cycle; state plainly that AI output is a first draft, the student is the engineer responsible for what ships. (4) เตรียมเครื่องมือ — Cursor installed (cursor.com, free tier is enough), Node ≥ 22, the reference repo URL as the finished target. (5) course map — one line per chapter.

- [ ] **Step 2: Write `02_utility_first.html`**

Sections: (1) recap how Week_04's coffee project styled things (SCSS modules — a `.module.scss` file per component) with a real, small example; (2) the same button in Tailwind:

```html
<button class="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700">
  Add to Cart
</button>
```

(3) what utility-first means — one class = one CSS declaration; you compose design in the markup; (4) "แต่ HTML มันรกไม่ใช่เหรอ?" — address the objection honestly: locality (สไตล์อยู่ที่เดียวกับ markup), no naming fatigue, no dead CSS, constraints (spacing/color scales) vs the real cost (long class strings — previewing lesson 13's answer: extract components, not stylesheets); (5) why it's not inline styles — responsive prefixes, states, design tokens are impossible in `style=""`; (6) why this matters for AI workflow — Agent output with Tailwind is self-contained per file, easy to review in a diff.

- [ ] **Step 3: Write `03_tailwind_setup.html`**

Sections: (1) create a scratch project to learn in (คนละตัวกับโปรเจกต์จริงที่จะเริ่มบทที่ 9):

```bash
npm create vite@latest tailwind-playground -- --template react-ts
cd tailwind-playground
npm install
npm install tailwindcss @tailwindcss/vite
```

(2) register the plugin:

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

(3) one line of CSS:

```css
/* src/index.css */
@import "tailwindcss";
```

(4) callout: Tailwind v4 มี config เป็น CSS (`@theme`) — ไม่มี `tailwind.config.js` และไม่ต้อง `npx tailwindcss init`; ถ้าเจอบทความสอนแบบนั้นคือ v3 เก่า. (5) prove it works — replace `App.tsx` with a centered card using utilities, run `npm run dev`; (6) editor setup — Tailwind CSS IntelliSense extension works in Cursor (VS Code fork), hover shows the generated CSS.

- [ ] **Step 4: Write `04_core_utilities.html`**

Teach by building one product card incrementally (use dummyjson product #1's real title/price so it foreshadows the app). Sections, each a build step with a code block and a short "utility → CSS" table in prose: (1) spacing — `p-4` = `padding: 1rem`, the 4-per-rem scale, `m-*`, `gap-*`, `space-y-*`; (2) typography — `text-sm/base/lg/xl…`, `font-medium/semibold/bold`, `text-gray-600`, `line-clamp-2`; (3) colors & surfaces — `bg-white`, `bg-gray-50`, `text-blue-600`, opacity modifier `bg-black/50`; (4) borders & shadows — `rounded-lg`, `border`, `border-gray-200`, `shadow-sm`; (5) flexbox — `flex items-center justify-between gap-2`; (6) grid — `grid grid-cols-4 gap-4`; (7) sizing — `w-full`, `max-w-7xl mx-auto`, `aspect-square object-cover` for the product image. End with the finished card (~25 lines) and a pointer to tailwindcss.com docs search (คู่มือที่ควรเปิดคู่กันเสมอ).

- [ ] **Step 5: Write `05_responsive.html`**

Sections: (1) mobile-first principle — unprefixed = ทุกขนาดจอ, prefix = ตั้งแต่ breakpoint นั้นขึ้นไป; the trap `sm:` ≠ "on small screens"; (2) breakpoint table sm 640 / md 768 / lg 1024 / xl 1280 / 2xl 1536; (3) three worked patterns tied to the app's screenshots (`home_desktop.png` + `home_mobile.png` side by side): product grid `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`, nav links `hidden md:flex` (มือถือซ่อนไว้ก่อน — บทเรียน 11 จะกลับมาทำ hamburger), page container `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`; (4) testing — DevTools device toolbar, resize slowly and watch each breakpoint fire; (5) rule of thumb: ออกแบบ mobile ก่อน แล้วค่อยเติม prefix ขยายขึ้น.

- [ ] **Step 6: Write `06_states_tokens.html`**

Sections: (1) states — `hover:`, `focus-visible:` (+ ทำไมไม่ใช้ `focus:` เฉย ๆ), `active:`, `disabled:`, `group`/`group-hover:` with a card-image-zoom example; (2) design tokens with `@theme` — define the app's brand:

```css
@import "tailwindcss";

@theme {
  --color-primary: #0d6efd;
  --color-primary-dark: #0b5ed7;
  --color-accent: #ffa200;
  --color-danger: #ff4136;
}
```

then `bg-primary hover:bg-primary-dark text-white` works everywhere — ค่าจริงมาจาก `_variables.scss` ของแอปต้นแบบ; (3) taming class soup — recommended ordering (layout → sizing → spacing → typography → color → border/shadow → states), `prettier-plugin-tailwindcss` sorts automatically; (4) why not `@apply` everywhere — you'd rebuild CSS-class-naming hell; the Tailwind answer to reuse is React components (บทเรียน 13); (5) mini-exercise: restyle lesson 04's card with the new `primary` token.

- [ ] **Step 7: Verify + commit**

Run: `python3 $WK/verify_lessons.py`
Expected: failures reference only files `07_…`–`20_…` (missing links / rel=next on lesson 06). Fix anything else.

```bash
git add Week_05/01_tailwind_cursor_ecommerce/content
git commit -m "content: add Week 05 lessons 01-06 (orientation, Tailwind fundamentals)"
```

---

### Task 4: Chapter 3 — lessons 07–08 (Cursor workflow)

**Files:**
- Create: `$WK/content/07_cursor_agent.html`, `$WK/content/08_screenshot_to_prompt.html`

**Interfaces:**
- Consumes: Task 2 images (`home_desktop.png`).
- Produces: the prompt template structure (บริบท/โครงสร้าง/ข้อกำหนด/ขอบเขต) that lessons 10 and 14–19 reuse in every 📝 เขียน Prompt section.

- [ ] **Step 1: Write `07_cursor_agent.html`**

Sections: (1) what Cursor is — a VS Code fork with AI built in; import VS Code settings/extensions on first run; (2) the three ways to use AI, when to use which: **Tab** (autocomplete while typing), **Inline Edit** (Cmd+K, แก้โค้ดที่เลือกอยู่จุดเดียว), **Agent panel** (Cmd+I) — the star of this week: multi-file edit, runs commands, reads your project; (3) Agent vs Ask mode — Ask = ถามให้อธิบาย ไม่แตะไฟล์, Agent = ลงมือแก้; (4) giving context with `@` — @Files, @Folders, and attaching images (ลาก screenshot ลงในช่องแชทได้เลย — หัวใจของบทถัดไป); (5) project rules — `.cursor/rules/` directory, `.mdc` files with frontmatter (`alwaysApply: true` or `globs:`); one small example rule file and the promise that lesson 09 writes the real one; (6) discipline: อ่าน diff ทุกไฟล์ก่อนกด Accept, ใช้ checkpoint/restore เมื่อ Agent พาไปผิดทาง, งานเล็ก ๆ ทีละงานดีกว่าสั่งใหญ่ทีเดียว; (7) callout: หน้าตา UI ของ Cursor เปลี่ยนเร็ว — ชื่อปุ่มอาจต่างไป แต่แนวคิด (agent, context, rules, review) คงเดิม.

- [ ] **Step 2: Write `08_screenshot_to_prompt.html`**

Sections: (1) ทำไม prompt คลุมเครือถึงได้ UI มั่ว — show a bad prompt (`"ทำหน้าเว็บขายของให้หน่อย สวย ๆ"`) and list what the Agent must guess (layout? columns? breakpoints? tech?); (2) the four-part prompt anatomy — **บริบท** (what app, what stack), **โครงสร้าง** (regions of the screen, top→bottom, with real content), **ข้อกำหนดทางเทคนิค** (Tailwind only, mobile-first, semantic HTML, component split), **ขอบเขต** (what NOT to do yet — no API, no routing); (3) worked example — embed `home_desktop.png`, then derive this full prompt from it step by step:

```
สร้างหน้า Home ของเว็บ e-commerce "My Store" ตาม screenshot ที่แนบมา

บริบท: โปรเจกต์ React + TypeScript + Vite ที่ติดตั้ง Tailwind CSS v4 แล้ว

โครงสร้างจากบนลงล่าง:
- Header: โลโก้ข้อความ "My Store" ซ้าย, เมนู Home / Products ตรงกลาง, ไอคอนตะกร้าพร้อม badge จำนวนสินค้าด้านขวา
- Banner carousel เต็มความกว้าง สูงประมาณ 400px มีปุ่ม prev/next
- แถว feature cards 5 ใบ: Free Shipping, Support 24/7, ...(ไอคอน + หัวข้อ + คำอธิบายสั้น)
- Section "Deals of the Day" มี countdown timer และสินค้าลดราคา 4 ชิ้น
- Section สินค้าตามหมวด: เมนูหมวดหมู่ด้านซ้าย, grid สินค้า 12 ชิ้นด้านขวา (การ์ด: รูป, ชื่อ, ราคา, ราคาก่อนลดขีดฆ่า)
- Footer: ลิงก์ 3 คอลัมน์ + ข้อความลิขสิทธิ์

ข้อกำหนดทางเทคนิค:
- ใช้ Tailwind utilities เท่านั้น ห้ามสร้างไฟล์ .css/.scss เพิ่ม
- Mobile-first: มือถือ 2 คอลัมน์, md ขึ้นไป 3, lg ขึ้นไป 4 คอลัมน์
- ใช้ semantic HTML (header, nav, main, section, footer) และใส่ alt ทุกรูป
- แยกเป็น component: Header, Banner, FeatureCard, ProductCard, Footer

ขอบเขต: ใช้ mock data ในไฟล์ไปก่อน ยังไม่ต้องต่อ API และยังไม่ต้องทำ routing
```

(4) เทคนิคเพิ่มเติม — แนบรูป mobile + desktop คู่กันเมื่ออยากได้ responsive ตรงดีไซน์, wireframe หยาบ ๆ บนกระดาษก็ใช้เป็น input ได้, requirement ที่เป็นข้อความล้วนก็แปลงด้วยโครงเดียวกัน (เขียน "โครงสร้าง" เอง); (5) exercise: ให้นักเรียนเขียน prompt สำหรับ `category_desktop.png` ด้วยโครงสี่ส่วน แล้วเก็บไว้ใช้ในบทเรียน 16.

- [ ] **Step 3: Verify + commit**

Run: `python3 $WK/verify_lessons.py` — failures may reference only `09_…`–`20_…`.

```bash
git add Week_05/01_tailwind_cursor_ecommerce/content
git commit -m "content: add Week 05 lessons 07-08 (Cursor agent, screenshot-to-prompt)"
```

---

### Task 5: Chapter 4 — lessons 09–10 (project kickoff, first layout via the loop)

**Files:**
- Create: `$WK/content/09_project_setup.html`, `$WK/content/10_first_layout.html`

**Interfaces:**
- Consumes: prompt anatomy from lesson 08; images `home_desktop.png`, `home_mobile.png`.
- Produces: the real project (`my-store`) all remaining lessons build on; folder structure `app/ pages/ features/ shared/`; `.cursor/rules/project.mdc`; `MainLayout`/`Header`/`Footer` components lessons 11–14 review and reuse.

- [ ] **Step 1: Write `09_project_setup.html`**

Sections: (1) scaffold — students run these themselves (โครงโปรเจกต์เราตั้งเอง ไม่ปล่อยให้ AI เดา):

```bash
npm create vite@latest my-store -- --template react-ts
cd my-store
npm install
npm install tailwindcss @tailwindcss/vite react-router @tanstack/react-query axios
npm install react-hook-form zod @hookform/resolvers swiper react-paginate
```

(2) Tailwind wiring exactly as lesson 03 + the `@theme` block from lesson 06 in `src/index.css`; (3) path alias:

```typescript
// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
});
```

plus `"baseUrl": ".", "paths": { "@/*": ["./src/*"] }` in `tsconfig.app.json` `compilerOptions`; (4) folder structure — the reference repo's real layout with one-line responsibilities:

```
src/
  app/        # router, providers, layout — โครงของแอป
  pages/      # component บาง ๆ หนึ่งไฟล์ต่อ route
  features/   # products, cart, checkout — แต่ละ feature มี api, queries, components ของตัวเอง
  shared/     # UI กลาง (Button, Modal), api client, utils, hooks
```

explain the rule "pages บาง features หนา" — logic อยู่ใน features ไม่ใช่ใน pages; (5) write `.cursor/rules/project.mdc` (full file in a code block):

```
---
description: My Store — React e-commerce conventions
alwaysApply: true
---

- React 19 + TypeScript + Vite; styling ด้วย Tailwind CSS v4 utilities เท่านั้น ห้ามสร้างไฟล์ .css/.scss ใหม่
- โครงสร้าง: app/ (router, providers), pages/ (route components บาง ๆ), features/<name>/ (api, queries, components), shared/ (UI กลาง, utils, hooks)
- Component เป็น function component + TypeScript, ตั้งชื่อไฟล์ PascalCase.tsx ในโฟลเดอร์ชื่อเดียวกัน
- ใช้ react-router แบบ data mode (createBrowserRouter) และ TanStack Query v5 (queryOptions pattern) สำหรับ server state
- Mobile-first: class ไม่มี prefix สำหรับมือถือ แล้วขยายด้วย sm:/md:/lg:
- รูปทุกรูปต้องมี alt; ปุ่ม/ลิงก์ต้องเป็น <button>/<a> จริง และมี focus-visible state
- import ภายในโปรเจกต์ใช้ alias @/ เสมอ
```

— ชี้ให้เห็นว่า rules คือการ "สอน Agent ครั้งเดียว ใช้ได้ทุก prompt"; (6) commit the scaffold with git (นิสัยจาก Week_04: commit เล็ก บ่อย).

- [ ] **Step 2: Write `10_first_layout.html`** — first full run of the Loop template

🎯 เป้าหมาย: Header (โลโก้ "My Store", เมนู Home/Products, ไอคอนตะกร้า + badge), Footer, `MainLayout` ที่มี `<Outlet />`; embed `home_desktop.png` cropped mentally to header/footer (reference the full screenshot, ให้นักเรียนโฟกัสบน-ล่าง). 📝 เขียน Prompt: full Thai prompt per lesson-08 anatomy asking for `MainLayout` + `Header` + `Footer` in `src/app/layouts/` and `src/shared/components/`, wired with react-router:

```
สร้างโครง layout ของแอปตาม screenshot ที่แนบ (ดูเฉพาะส่วน header และ footer)

บริบท: โปรเจกต์ my-store ตามโครงสร้างใน rules มี react-router ติดตั้งแล้ว

งาน:
- src/app/router.tsx: createBrowserRouter มี MainLayout เป็น layout route และหน้า Home ว่าง ๆ ที่ path "/"
- src/main.tsx: ครอบด้วย RouterProvider
- MainLayout: Header บน, <Outlet /> ตรงกลาง (main ที่ดันความสูงเต็มจอ), Footer ล่าง
- Header: โลโก้ข้อความ "My Store" (ลิงก์กลับ "/"), nav มีลิงก์ Home และ Products, ไอคอนตะกร้า SVG พร้อม badge ตัวเลข 0 ด้านขวา
- Footer: 3 คอลัมน์ลิงก์ (Shop, Support, About) และแถวลิขสิทธิ์

ข้อกำหนด: Tailwind เท่านั้น, mobile-first, semantic HTML, focus-visible ทุกลิงก์
ขอบเขต: ยังไม่ต้องทำหน้าอื่น ยังไม่ต้องมี state ตะกร้าจริง
```

🤖 สิ่งที่ Agent สร้าง: show a realistic `MainLayout.tsx` + `Header.tsx` (~40 lines total) — the MainLayout correct:

```tsx
// src/app/layouts/MainLayout/MainLayout.tsx
import { Outlet } from "react-router";
import Header from "@/shared/components/Header/Header";
import Footer from "@/shared/components/Footer/Footer";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
```

and a Header that works but carries three planted defects the review chapter will catch: `w-[1200px]` fixed width on the inner div, nav rendered as clickable `<div>`s, no focus styles. Say explicitly: โค้ดหน้าตาดี ใช้งานได้บนจอใหญ่ — แต่มีของซ่อนอยู่ บทที่ 5 จะพาไล่จับทีละตัว. 🔍 ตรวจทาน: quick pass only — run dev, click around, resize once to see the fixed-width overflow; log the three suspicions in a TODO list. 🔧 Refactor: none yet (บทที่ 5 ทำเรื่องนี้เต็ม ๆ) — but do commit. End: router.tsx snippet with the single `/` route matching the Reference Facts routes table shape.

- [ ] **Step 3: Verify + commit**

Run: `python3 $WK/verify_lessons.py` — failures may reference only `11_…`–`20_…`.

```bash
git add Week_05/01_tailwind_cursor_ecommerce/content
git commit -m "content: add Week 05 lessons 09-10 (project setup, first layout)"
```

---

### Task 6: Chapter 5 — lessons 11–13 (the three review lenses)

**Files:**
- Create: `$WK/content/11_review_responsive.html`, `$WK/content/12_review_accessibility.html`, `$WK/content/13_review_maintainability.html`

**Interfaces:**
- Consumes: the three planted defects from lesson 10's Header (fixed width, div-buttons, no focus styles).
- Produces: the three checklists (responsive / a11y / maintainability) lessons 14–19 apply in every 🔍 ตรวจทาน section; the `Button` component (`shared/components/Button/Button.tsx`, `variant: "primary" | "outline" | "ghost"`) used by lessons 14, 17, 18, 19.

- [ ] **Step 1: Write `11_review_responsive.html`**

Sections: (1) why the Agent ships desktop-only UI — it optimizes for the screenshot you gave it (คุณแนบรูป desktop มันก็ตอบ desktop); (2) hunt defect #1 from lesson 10 — `w-[1200px]`: reproduce the horizontal scrollbar at 390px in device toolbar, fix to `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8`; (3) the checklist (a styled `ul` — later lessons reference "checklist บท 11"): ทดสอบที่ 390 / 768 / 1024 / 1440 ทุกครั้ง; หา `w-[...px]`/`h-[...px]` เลขตายตัว → เปลี่ยนเป็น `max-w-*` + `w-full`; ทุก grid ต้องมีลำดับคอลัมน์ mobile→desktop; รูปทุกรูป `object-cover` + `aspect-*`; ข้อความยาวมี `truncate`/`line-clamp-*`; ไม่มี `overflow-x` ที่หน้าไหน; ของที่ `hidden` บนมือถือ ต้องมีทางเข้าถึงอื่น; (4) apply the last item — the nav is `hidden md:flex` with no mobile path: build the hamburger menu with `useState` + a slide-down panel (full code, ~30 lines, `aria-expanded` on the toggle); (5) วิธีสั่งแก้ด้วย Agent — prompt สั้น ชี้ไฟล์ ชี้ปัญหา ชี้วิธีแก้ที่ต้องการ (one example prompt), แล้วอ่าน diff.

- [ ] **Step 2: Write `12_review_accessibility.html`**

Sections: (1) why a11y is where AI code fails silently — หน้าตาถูกทุกพิกเซล แต่ใช้คีย์บอร์ดไม่ได้/screen reader อ่านไม่รู้เรื่อง; (2) hunt defects #2–#3 from lesson 10 — nav เป็น `<div onClick>`: ใช้ Tab แล้วโฟกัสไม่เข้า → เปลี่ยนเป็น `<Link>`/`<button>` จริง; ไม่มี focus style → `focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none`; (3) the checklist: heading ไล่ระดับ (h1 เดียวต่อหน้า ไม่กระโดด); landmark ครบ (`header nav main footer`); `alt` ทุกรูป (รูปตกแต่งใช้ `alt=""`); ปุ่มไอคอนล้วนมี `aria-label`; input ทุกช่องมี `<label htmlFor>`; interactive = `<button>`/`<a>` เท่านั้น; contrast ผ่าน (กับดักคลาสสิก: `text-gray-400` บนพื้นขาว); ทดลอง Tab ให้ครบทุกหน้า; modal ต้อง trap focus + ปิดด้วย Esc (react-modal จัดการให้ — จะใช้บทเรียน 17); (4) tools — Lighthouse accessibility audit และ axe DevTools: run on the layout, read one real finding; (5) เพิ่มกติกาเข้า rules ไฟล์ แล้วให้ Agent self-audit ด้วย prompt "ตรวจ accessibility ของไฟล์นี้ตาม checklist ..." — ย้ำว่าเครื่องมือ + AI ช่วยหา แต่คนตัดสิน.

- [ ] **Step 3: Write `13_review_maintainability.html`**

Sections: (1) the smell — Agent ทำงานเป็นครั้ง ๆ ไม่จำของเดิม: ปุ่มหน้าตาเดียวกันถูกเขียน class ยาว ๆ ซ้ำ 4 ที่, ค่า arbitrary `w-[347px]`, ternary ซ้อนใน className; show a realistic before block; (2) กติกา: เห็น class string ซ้ำ ≥ 2 ที่ = แยก component ไม่ใช่แยก CSS (นี่คือคำตอบของ Tailwind เรื่อง reuse — ต่อจากบทเรียน 02/06); (3) build `shared/components/Button/Button.tsx` (full code — the canonical version every later lesson imports):

```tsx
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  outline: "border border-primary text-primary hover:bg-primary/10",
  ghost: "text-gray-600 hover:bg-gray-100",
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
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 font-medium transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      {...rest}
    />
  );
}
```

walk through the pattern: variant map object > nested ternaries, spread rest props, `className` escape hatch, disabled/focus baked in once; (4) the checklist: class ซ้ำ → component; เลข arbitrary `[...]` → token หรือ scale ปกติ; ternary ซ้อนใน className → variant map; component เกิน ~150 บรรทัด → แตกไฟล์; ชื่อ generic (`Card2`, `NewSection`) → ตั้งชื่อตาม domain; ทุกอย่างที่ import ข้าม feature ต้องอยู่ shared/; (5) สั่ง refactor ด้วย Agent — prompt example "แยกปุ่มที่ซ้ำใน Header/Footer ออกเป็น shared/components/Button ตาม variant pattern ..." + อ่าน diff แล้วเช็คว่า UI ไม่เปลี่ยน (visual regression ด้วยตาใน dev server); (6) close the chapter: ตอนนี้มีครบสามเลนส์ — ทุกหน้าที่เหลือในสัปดาห์นี้จะวนลูป prompt → generate → ตรวจสามเลนส์ → refactor จนเป็นนิสัย.

- [ ] **Step 4: Verify + commit**

Run: `python3 $WK/verify_lessons.py` — failures may reference only `14_…`–`20_…`.

```bash
git add Week_05/01_tailwind_cursor_ecommerce/content
git commit -m "content: add Week 05 lessons 11-13 (responsive, a11y, maintainability reviews)"
```

---

### Task 7: Chapter 6a — lessons 14–16 (Home, real data, Category)

**Files:**
- Create: `$WK/content/14_home_page.html`, `$WK/content/15_real_data.html`, `$WK/content/16_category_page.html`

**Interfaces:**
- Consumes: Loop template; checklists (L11–13); `Button` (L13); prompt anatomy (L08); images `home_*.png`, `category_*.png`.
- Produces: `ProductCard` component (props: `product: Product`, `onClick`); `apiClient`, `productQueries` (`list`, `byCategory`, `categories`, `detail`) that lessons 16–17 consume; `Product`/`Category` types.

- [ ] **Step 1: Write `14_home_page.html`** — Loop lesson

🎯 เป้าหมาย: embed `home_desktop.png` + `home_mobile.png`; done = banner carousel, 5 feature cards, deals + countdown, category products grid — mock data. Note: banner images มาจาก reference repo `public/images/banners/01-03.png` (ให้ดาวน์โหลดจาก GitHub repo มาใส่ `public/images/banners/`). 📝 เขียน Prompt: reuse the lesson-08 Home prompt verbatim (ชี้กลับไปว่าเราเขียนไว้แล้ว — คัดลอกมาใช้ได้เลย) plus one addition: `ใช้ Swiper (ติดตั้งแล้ว) สำหรับ banner carousel และใช้ component Button ที่มีอยู่ใน shared/components`. 🤖 สิ่งที่ Agent สร้าง: show two representative components — `FeatureCard` (~15 lines, icon + title + description props) and `ProductCard`:

```tsx
// src/features/products/components/ProductCard/ProductCard.tsx
import { Product } from "@/features/products/types";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const originalPrice =
    product.discountPercentage != null
      ? product.price / (1 - product.discountPercentage / 100)
      : null;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group rounded-lg border border-gray-200 bg-white p-3 text-left transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <img
        src={product.thumbnail}
        alt={product.title}
        className="aspect-square w-full rounded-md object-cover"
      />
      <h3 className="mt-2 line-clamp-2 text-sm font-medium text-gray-900">
        {product.title}
      </h3>
      <p className="mt-1 flex items-baseline gap-2">
        <span className="font-semibold text-primary">${product.price}</span>
        {originalPrice && (
          <span className="text-xs text-gray-400 line-through">
            ${originalPrice.toFixed(2)}
          </span>
        )}
      </p>
    </button>
  );
}
```

plus the Swiper banner (`Swiper`/`SwiperSlide` import from `swiper/react`, `swiper/css` import, `navigation` module) ~20 lines. Mock data: a `const MOCK_PRODUCTS: Product[]` file with 4 items and the `Product` interface (subset fields used so far — full type arrives in lesson 15). 🔍 ตรวจทาน: run all three checklists; find and fix a real defect per lens (responsive: deals grid missing mobile columns; a11y: carousel prev/next buttons ไม่มี `aria-label`; maintainability: Agent เขียนการ์ดสินค้าซ้ำใน deals และ grid → ทั้งสองจุดต้องใช้ `ProductCard` เดียว). 🔧 Refactor: consolidate to `ProductCard`, move `CountdownTimer` to `shared/components` (logic: `useEffect` + `setInterval` นับถอยหลังถึง target date — ~25 lines full code), commit.

- [ ] **Step 2: Write `15_real_data.html`** — wiring lesson (partial loop: no screenshot; the design ไม่เปลี่ยน แค่ข้อมูลจริง)

Sections: (1) dummyjson intro + endpoints table from Reference Facts; `.env` with `VITE_API_BASE_URL=https://dummyjson.com`; (2) shared api client (full code — the reference repo's `client.ts`: axios instance + `ApiError` class + response interceptor; explain interceptor = แปลง error ทุกตัวให้เป็นรูปแบบเดียว); (3) `features/products/types.ts` — the full `Product`, `ProductReview`, `Category`, `FetchProductsResponse` interfaces from Reference Facts; (4) `features/products/api.ts` — `getProducts({ page, limit })` with `skip = (page - 1) * limit`, `getProductsByCategory`, `getCategories`, `getProduct` (full code, matches reference); (5) query factory — `features/products/queries.ts` with `productKeys` + `productQueries` using `queryOptions` (full code, matches reference incl. `staleTime` on categories and `keepPreviousData` on byCategory — อธิบายทั้งสองตัวเลือกสั้น ๆ); (6) providers — `QueryClientProvider` in `app/providers.tsx`, wrap in `main.tsx`; (7) use in Home — replace mocks with `useQuery(productQueries.list({ limit: 5 }))` + `useQuery(productQueries.categories())`; loading skeleton ด้วย Tailwind `animate-pulse` (code: grid ของกล่องเทา `aspect-square` + แถบข้อความ — note: repo ต้นแบบใช้ react-loading-skeleton, เราใช้ animate-pulse เพื่ออยู่ในโลก Tailwind); error state ด้วย `ErrorMessage` component เล็ก ๆ; (8) ให้ Agent ช่วยตรงไหน — งาน mechanical (เขียน interface จาก JSON ตัวอย่าง: วาง response ลงแชทแล้วสั่ง "เขียน TypeScript interface"), แต่โครง api/queries เราออกแบบเองตาม pattern.

- [ ] **Step 3: Write `16_category_page.html`** — Loop lesson

🎯 เป้าหมาย: embed `category_desktop.png` + `category_mobile.png`; done = route `/categories`, category menu (active state), product grid 20 ชิ้น, pagination. 📝 เขียน Prompt: นำ prompt ที่นักเรียนเขียนเองตอนท้ายบทเรียน 08 มาปรับ — show the model answer (four-part, mentions: `ใช้ productQueries.byCategory และ productQueries.categories ที่มีอยู่`, `ใช้ react-paginate`, `ProductCard ที่มีอยู่`, keep state `page`/`selectedCategory` in the page component). 🤖 สิ่งที่ Agent สร้าง: `Category.tsx` page (~50 lines: two `useQuery` calls, `useState` for page + category, `useProductRoute().goToProductDetails` on card click — introduce the `useProductRoute` hook here, full code ~20 lines from Reference Facts, in `shared/hooks/`); `CategoryMenu` with active item styling (`aria-current="true"` + `bg-primary/10 text-primary font-medium`); react-paginate styled via its `className` props with Tailwind classes (show the exact props block — pageClassName, activeClassName, previousClassName ฯลฯ). 🔍 ตรวจทาน: responsive — menu becomes horizontal scroll strip on mobile (`flex overflow-x-auto lg:flex-col`); a11y — pagination ต้องเป็น `<nav aria-label="Pagination">`, react-paginate renders real links ✓, เช็ค `aria-current`; maintainability — total pages calc `Math.ceil(total / limit)` ต้องอยู่ util (`shared/utils/pagination.utils.ts` — `calculateOffset(page, limit)` + `calculateTotalPages(total, limit)`, full 6-line code). 🔧 Refactor: add route to `router.tsx` (show updated routes array — now matches Reference Facts table for `/` and `/categories`), commit. Callout on `keepPreviousData`: เปลี่ยนหน้าแล้ว grid เก่าค้างไว้แทน spinner กระพริบ.

- [ ] **Step 4: Verify + commit**

Run: `python3 $WK/verify_lessons.py` — failures may reference only `17_…`–`20_…`.

```bash
git add Week_05/01_tailwind_cursor_ecommerce/content
git commit -m "content: add Week 05 lessons 14-16 (home, real data, category)"
```

---

### Task 8: Chapter 6b — lessons 17–19 (Product detail, Cart, Checkout)

**Files:**
- Create: `$WK/content/17_product_page.html`, `$WK/content/18_cart.html`, `$WK/content/19_checkout.html`

**Interfaces:**
- Consumes: `productQueries.detail` (L15), `Button` (L13), `useProductRoute` (L16), checklists (L11–13), images `product_*.png`, `cart_*.png`, `checkout_*.png`, `order_success_desktop.png`.
- Produces: `useCart()` hook + `CartItem` type (L18) consumed by L19; complete routes table.

- [ ] **Step 1: Write `17_product_page.html`** — Loop lesson

🎯 เป้าหมาย: embed `product_desktop.png` + `product_mobile.png`; done = route `/products/:id`, image gallery (main + thumbnail strip), title/brand/rating/price/stock, add-to-cart with quantity, rating breakdown bars, review cards. 📝 เขียน Prompt: full four-part prompt (mentions `useParams` id → `useQuery(productQueries.detail(id))`, react-modal for the added-to-cart confirmation, `Button`/`ProductCard` reuse, star rating from `product.rating`, reviews from `product.reviews`). 🤖 สิ่งที่ Agent สร้าง: show `ProductImageGallery` (~30 lines: `useState` selected index, main `img` + thumbnail `button` strip, selected thumb gets `ring-2 ring-primary`) and `StarReview` (~15 lines: 5 ดาว SVG, เต็ม/ว่างตาม `rating`, `aria-label` บอกคะแนน). Mention `RatingBreakdown` (bar per star level: `reviews.filter(r => r.rating === n).length / reviews.length` width via inline style percentage) and `ReviewCard` briefly with a short snippet. Modal: react-modal `Modal.setAppElement("#root")`, `isOpen` state, content = added product + ปุ่ม "ไปที่ตะกร้า" / "เลือกซื้อต่อ" (ตะกร้ายังไม่มีจริง — ปุ่มยิง `console.log` ไว้ก่อน แล้วบทเรียน 18 มาต่อ). 🔍 ตรวจทาน: responsive — gallery stacks (`grid gap-8 lg:grid-cols-2`); a11y — thumbnail buttons ต้องมี `aria-label="ดูรูปที่ N"`, modal focus trap + Esc (react-modal ให้ฟรี — ทดสอบจริงด้วยคีย์บอร์ด), heading ไล่ระดับ; maintainability — star SVG ถูก copy 10 ที่ → `StarIcon` เดียว + loop. 🔧 Refactor: add `/products/:id` route, commit.

- [ ] **Step 2: Write `18_cart.html`** — Loop lesson (state-heavy: Context + reducer recap from Week_04 บทเรียน 17)

🎯 เป้าหมาย: embed `cart_desktop.png` + `cart_mobile.png`; done = global cart state, persist localStorage, header badge นับจริง, cart page (table: รูป/ชื่อ/ราคา/ปุ่ม +−/ลบ, summary กล่องขวา), modal จากบทเรียน 17 ต่อเข้าตะกร้าจริง. โครง state เราออกแบบเอง (สำคัญเกินกว่าจะให้ AI เดา) — Agent ช่วยส่วน UI. Sections: (1) design the store — `features/cart/store/CartContext.tsx`: `CartItem { id, title, price, quantity, image, originalPrice }`, `CartState { items }`, `CartActionTypes` enum (`ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, CLEAR_CART`); (2) `cartReducer.ts` — full code (the reference repo's reducer verbatim: ADD merges quantity when id exists, REMOVE filters, UPDATE maps, CLEAR empties); (3) `cartStorage.ts` — full code (key `"ecommerce-cart:v1"`, `loadCartState` with try/JSON-parse/shape-check, `saveCartState` with try; อธิบายทำไมต้อง try ทั้งสองทาง); (4) `CartProvider.tsx` — `useReducer(cartReducer, undefined, loadCartState)` lazy init + `useEffect` save on change + memoized actions (`addToCart, removeFromCart, updateQuantity, clearCart`) — full code ~40 lines; `useCart.ts` hook with the throw-outside-provider guard (5 lines, reference-repo verbatim); wrap in `providers.tsx`. 📝 เขียน Prompt (UI only): CartTable + CartSummary + Cart page against the screenshot, `ใช้ useCart() ที่มีอยู่`, mobile: table ยุบเป็น card ต่อแถว. 🤖 สิ่งที่ Agent สร้าง: representative `CartTable` row markup (~25 lines) with quantity `Button variant="outline"` +/− and remove button. 🔍 ตรวจทาน: responsive — `hidden md:table` + mobile card list (or grid rows) ตามที่ prompt ขอ; a11y — ปุ่ม +/− มี `aria-label` ("เพิ่มจำนวน <ชื่อสินค้า>"), ราคาเป็นข้อความจริงไม่ใช่รูป; maintainability — เงินต้อง format ที่เดียว: `shared/utils/price.utils.ts` → `formatPrice(n): string` (full 3-line code, ใช้ `toFixed(2)` + `$`). 🔧 Refactor: header badge ต่อ `useCart` (`items.reduce((s, i) => s + i.quantity, 0)`), lesson-17 modal ปุ่มต่อ `addToCart` + navigate, add `/cart` route, commit.

- [ ] **Step 3: Write `19_checkout.html`** — Loop lesson (forms recap from Week_04 บทเรียน 22/32)

🎯 เป้าหมาย: embed `checkout_desktop.png` + `order_success_desktop.png`; done = `/checkout` (address form, delivery options, payment options, order summary + billing), กด Place Order → POST `/carts/add` → clear cart → `/order/success`. Sections: (1) schema first (เราเขียนเอง — validation คือ contract):

```typescript
// src/features/checkout/schema.ts
import { z } from "zod";

export const checkoutAddressSchema = z.object({
  address: z.string().min(1, "Address is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .pipe(z.email("Enter a valid email address")),
  phone: z.string().min(1, "Phone number is required"),
});

export type CheckoutAddressFormData = z.infer<typeof checkoutAddressSchema>;
```

(zod 4: `z.email()` แยกเป็น validator เอง — ต่างจากบทความเก่า ๆ ที่ใช้ `.email()`); (2) `consts.ts` delivery/payment options — full code from Reference Facts; (3) `api.ts` `placeOrder(payload): Promise<{ id: number }>` POST `/carts/add` (full code); (4) the form — `useForm<CheckoutAddressFormData>({ resolver: zodResolver(checkoutAddressSchema) })`, `register`, `handleSubmit`, `formState.errors`; Input component pattern: label + input + `<p className="text-sm text-danger">` error, `aria-invalid` เมื่อ error; (5) 📝 เขียน Prompt for the page UI (two-column: ฟอร์ม+options ซ้าย, sticky summary ขวา, `ใช้ useCart / Button / formatPrice ที่มีอยู่`, RadioInput การ์ดเลือก delivery/payment ที่เป็น `<label>` ครอบ `<input type="radio">` จริง); (6) 🤖 แสดง RadioInput option card (~15 lines: `peer` + `peer-checked:border-primary peer-checked:bg-primary/5`); (7) billing summary — `subtotal = items.reduce`, `shipping = ราคา delivery ที่เลือก`, `total` (useMemo, code ~10 lines); (8) mutation — `useMutation({ mutationFn: placeOrder..., onSuccess: () => { clearCart(); navigate("/order/success"); } })`, ปุ่ม disabled ระหว่าง `isPending`; (9) 🔍 ตรวจทาน: a11y เต็ม ๆ กับฟอร์ม (ทุก input มี label จริง, error ติด `aria-invalid`, radio เลือกได้ด้วยคีย์บอร์ด, ปุ่ม disabled อ่านรู้เรื่อง), responsive: summary ย้ายขึ้นบนบนมือถือ (`flex flex-col-reverse lg:grid lg:grid-cols-3`), maintainability: options เป็น data ใน consts ไม่ hardcode ใน JSX; (10) 🔧 OrderSuccess page (เรียบ ๆ: ไอคอนเช็ค, ขอบคุณ, ปุ่มกลับหน้าแรก — ~15 lines) + routes ครบทั้ง 6 ตาม Reference Facts, commit. ปิดท้าย: แอปครบทุกหน้าแล้ว 🎉

- [ ] **Step 4: Verify + commit**

Run: `python3 $WK/verify_lessons.py` — failures may reference only `20_wrap_up.html`.

```bash
git add Week_05/01_tailwind_cursor_ecommerce/content
git commit -m "content: add Week 05 lessons 17-19 (product detail, cart, checkout)"
```

---

### Task 9: Lesson 20 + full verification pass

**Files:**
- Create: `$WK/content/20_wrap_up.html`

**Interfaces:**
- Consumes: everything; lesson 20 has no `rel="next"`.

- [ ] **Step 1: Write `20_wrap_up.html`**

Sections: (1) ยินดีด้วย + what got built — the six routes, restated in one table; (2) the four skills recap — map each syllabus bullet to the lessons that taught it (bullet 1 → L08, bullet 2 → L10/14–19, bullet 3 → L11–12, bullet 4 → L13 และทุก 🔧); (3) เทียบกับ repo ต้นแบบ — link https://github.com/manjarb/varis-lab-project-06-react-ecommerce-app; ความต่างที่ตั้งใจ: ต้นแบบใช้ SCSS modules (ให้ลองอ่านเทียบกับ Tailwind ของตัวเอง), มี tests (Vitest + RTL + MSW — อ่านเป็น further study, เชื่อมกลับ Week_04 บทเรียน 23–30), ใช้ lib เสริม (FontAwesome, dayjs, react-spinners); (4) ไอเดียต่อยอด — ช่องค้นหา (dummyjson `/products/search?q=`), favorites ด้วย pattern เดียวกับ cart, dark mode ด้วย `dark:` variants, deploy ตาม Week_04 บทเรียน 35; (5) ส่งท้ายเรื่อง AI workflow — ยิ่ง generate เก่ง ยิ่งต้อง review เก่ง; ทักษะที่ฝึกสัปดาห์นี้คือทักษะ senior dev ใช้คุม AI ทำงานจริง.

- [ ] **Step 2: Full verify — must pass clean**

Run: `python3 Week_05/01_tailwind_cursor_ecommerce/verify_lessons.py`
Expected: `20 lessons checked, 0 problem(s).` exit 0. Fix anything it reports.

- [ ] **Step 3: Manual spot-check**

Open `Week_05/01_tailwind_cursor_ecommerce/content/index.html` in a browser: chapter cards render, click through lessons 01 → 02 via nav links, confirm images display in lessons 01, 08, 14. Skim one build lesson for the 5 Loop sections in order.

- [ ] **Step 4: Consistency greps (catch v3 idioms and broken conventions)**

```bash
cd Week_05/01_tailwind_cursor_ecommerce/content
grep -l "tailwind.config" *.html && echo "FAIL: v3 config mentioned"
grep -l "@tailwind base" *.html && echo "FAIL: v3 directives"
grep -L 'lang="th"' *.html | grep -v '^$' && echo "FAIL: missing lang=th"
grep -c 'Tailwind CSS และ Cursor Workflow</title>' [0-9]*.html | grep -v ':1$' && echo "FAIL: title suffix"
```

Expected: no `FAIL` lines (greps find nothing).

- [ ] **Step 5: Commit**

```bash
git add Week_05/01_tailwind_cursor_ecommerce/content
git commit -m "content: add Week 05 lesson 20 (wrap up), complete lesson set"
```
