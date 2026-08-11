# React E-commerce + Cursor AI Course Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a 35-lesson Thai HTML course at `Week_05_06/03_react_ecommerce_ai_project/content/` in which students build the same e-commerce app as the existing `02_react_ecommerce_project` course, but write most of the code through Cursor AI while still owning every concept.

**Architecture:** Static HTML lessons, one file per lesson, styled by a single `lesson.css`, linked in a prev/index/next chain. 30 lessons adapt an existing lesson from `02_react_ecommerce_project` (concept + checkpoint preserved, code-typing replaced by prompt → review → self-check); 5 lessons are original writing about the Cursor workflow itself. A Python checker validates the whole set mechanically.

**Tech Stack:** Hand-written HTML5 + CSS. No build step, no JS. Python 3 for the verification script. Content subject matter: React 19, TypeScript, Vite 8, react-router 8, TanStack Query 5, axios, SCSS modules, zod, react-hook-form, Vitest/RTL/MSW, Cursor AI.

**Spec:** `docs/superpowers/specs/2026-08-10-react-ecommerce-ai-course-design.md` — read it before Task 1.

## Global Constraints

Every task's requirements implicitly include this section.

- **Output directory:** `Week_05_06/03_react_ecommerce_ai_project/content/`. Never modify anything under `Week_05_06/02_react_ecommerce_project/` — it is the untouched manual version.
- **Language:** Thai narration. English technical terms stay untranslated (component, state, reducer, prompt, diff…). No `translator-note` class — this is original content.
- **Course title string, used verbatim:** `สร้างเว็บ E-commerce ด้วย React + Cursor AI`
- **`<title>` pattern:** `<Thai lesson name> | สร้างเว็บ E-commerce ด้วย React + Cursor AI`
- **Every lesson file** starts `<!DOCTYPE html>` + `<html lang="th">`, has `<meta charset="UTF-8" />`, `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`, a Thai `<meta name="description" …>`, `<link rel="stylesheet" href="lesson.css" />`, and body `<main><article class="lesson">…</article></main>`.
- **Lesson header block:**
  ```html
  <header class="lesson-header">
    <p class="lesson-eyebrow">บทเรียน NN · <Thai chapter> (<English chapter>)</p>
    <h1><Thai lesson title></h1>
    <p class="lesson-original-title" lang="en"><English lesson title></p>
  </header>
  ```
  `NN` is the zero-padded file number.
- **Footer nav, last element inside `<article>`:**
  ```html
  <nav class="lesson-navigation" aria-label="การนำทางบทเรียน">
    <a href="PREV.html" rel="prev">ก่อนหน้า: <Thai prev title></a>
    <a href="index.html">สารบัญบทเรียน</a>
    <a href="NEXT.html" rel="next">ถัดไป: <Thai next title></a>
  </nav>
  ```
  Lesson 01 uses `<span></span>` in place of the prev link; lesson 35 uses `<span></span>` in place of the next link.
- **All code blocks:** `<pre><code class="language-typescript|tsx|bash|scss|json|html|text">…</code></pre>` with `<`, `>`, `&` escaped as `&lt;` `&gt;` `&amp;`. Prompts use `language-text`.
- **Reference repo (source of truth for all code shown):** cloned at `<SCRATCH>/ecommerce-app` in Task 1. Code presented as "the code you should end up with" must match those files exactly.
- **Never invent app features.** The finished app is identical to the one in `02_react_ecommerce_project`. No Tailwind, no extra dependencies.
- **Dependencies are installed in the lesson that first uses them**, not upfront.
- **`SwiperCarousel` stays omitted.** It exists in the reference repo but is imported nowhere; no lesson mentions it.
- **Commit after every task** with `git add <files> && git commit`. Commit messages: `content: <what>` for lesson files, `chore:`/`docs:` otherwise. End every commit message body with:
  ```
  Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>
  ```

## Lesson production recipe

Tasks 4–14 all produce lesson files. Unless a task says otherwise, each lesson is built like this:

1. **Read the original lesson** named in the task's mapping table, from `Week_05_06/02_react_ecommerce_project/content/`. Read it fully.
2. **Read the real source files** it teaches, from `<SCRATCH>/ecommerce-app`. Any code you show must match.
3. **Write the new lesson** with these sections, in this order:

   | Section | Markup | Content |
   | --- | --- | --- |
   | แนวคิด | normal `<h2>` + `<p>` | The original lesson's conceptual explanation, carried over near-verbatim. Trim only sentences that say "พิมพ์โค้ดนี้". This is the knowledge — never compress it away. |
   | เป้าหมายของบทนี้ | `<h2>` + file tree in `language-bash` + `<ul>` | Files to create and the *contract* each satisfies: what it must do, what it must not do. |
   | 🤖 Prompt ที่ส่งให้ Cursor | `<h2>` then `<blockquote class="lesson-ai-prompt">` (one sentence of framing) then `<pre><code class="language-text">` | A real four-part prompt: `บริบท:` / `โครงสร้าง:` / `ข้อกำหนดทางเทคนิค:` / `ขอบเขต:`. Must `@`-mention files the student already has. Must name the exact file paths to create. Must state what NOT to do. |
   | ✅ ตรวจโค้ดที่ AI สร้าง | `<h2>` then `<blockquote class="lesson-ai-review">` containing a `<ul>` checklist, then the reference code in `<pre><code>` blocks with the original lesson's per-line explanations | Checklist items are checkable facts, not vibes ("reducer ไม่มี `push` หรือ `+=` แม้แต่ที่เดียว"). Include one `AI มักพลาดตรงนี้:` line naming a realistic mistake for this specific code. |
   | ✍️ ส่วนนี้พิมพ์เอง | `<blockquote class="lesson-manual">` | Only in lessons listed in the no-AI table below. States the code, and one sentence on why it must be typed by hand. |
   | 🤔 อธิบายให้ได้ | `<h2>` + `<ol>` of 2–3 questions | Answerable only by reading the code in front of them. No answers given. |
   | 💡 Checkpoint | `<blockquote>` starting `💡 <strong>Checkpoint</strong>` | The original lesson's checkpoint, carried over. Append one clause: `— ถ้าข้อ "อธิบายให้ได้" ยังตอบไม่ได้ อย่าเพิ่งไปบทถัดไป`. |

4. **Run the checker** (Task 1 creates it): `python3 <SCRATCH>/check_lessons.py`. Fix everything it reports.
5. **Commit.**

## No-AI zone table

These lessons MUST contain a `✍️ ส่วนนี้พิมพ์เอง` block covering exactly this code. The checker enforces presence; the reviewer checks the content.

| Lesson | Hand-typed code | Reason to state |
| --- | --- | --- |
| 05 | the `src/` folder tree | โครงสร้างคือการตัดสินใจ ไม่ใช่การพิมพ์ |
| 09 | the route object in `app/router.tsx` | แผนที่ของแอปทั้งใบ ต้องอยู่ในหัวคุณ |
| 12 | `Button.tsx` + `Button.module.scss` | เป็นแม่แบบที่ AI จะลอกไปใช้กับทุก component หลังจากนี้ |
| 15 | the response-error interceptor in `shared/api/client.ts` | กติกาการแปลง error ของทั้งแอปอยู่ตรงนี้จุดเดียว |
| 17 | the `productKeys` factory in `features/products/queries.ts` | cache key ผิด = bug ที่หาไม่เจอ |
| 22 | `cartReducer.ts` | หัวใจของบทนี้ และเป็นสิ่งที่ AI mutate state พลาดบ่อยที่สุด |
| 25 | `features/checkout/schema.ts` | schema คือกติกาทางธุรกิจ ไม่ใช่ boilerplate |
| 28 | `useCheckout.ts` (mutation → clearCart → navigate) | ลำดับของ side effect ผิดลำดับเดียว ตะกร้าหายก่อนสั่งซื้อสำเร็จ |
| 31 | the first `describe` block of `price.utils.test.ts` | ต้องเขียนเทสต์เองให้เป็นก่อน ถึงจะตรวจเทสต์ของ AI ออก |
| 33 | one full `Cart.test.tsx` case | integration test คือที่ที่ AI เขียน "ผ่านแต่ไม่ได้พิสูจน์อะไร" ได้ง่ายที่สุด |

## Lesson inventory

`<SCRATCH>` = the session scratchpad directory.

| # | File | Thai title (used in nav links) | English title | Chapter (Thai / English) | Adapts |
| --- | --- | --- | --- | --- | --- |
| 01 | `01_intro.html` | บทนำ | Intro | เริ่มต้น / Welcome | 01 |
| 02 | `02_project_scaffold.html` | สร้างโปรเจกต์ด้วย Vite | Project Scaffold | ติดตั้งโปรเจกต์ / Project Setup | 02 |
| 03 | `03_tooling.html` | ESLint, Prettier และ Path Alias | Tooling | ติดตั้งโปรเจกต์ / Project Setup | 03 |
| 04 | `04_scss_foundation.html` | โครงสร้าง SCSS | SCSS Foundation | ติดตั้งโปรเจกต์ / Project Setup | 04 |
| 05 | `05_architecture.html` | สถาปัตยกรรม Feature-based | Feature-based Architecture | ติดตั้งโปรเจกต์ / Project Setup | 05 |
| 06 | `06_cursor_setup.html` | ติดตั้งและรู้จัก Cursor | Cursor Setup | ตั้งวงกับ Cursor / Setting Up Cursor | ⭐ new |
| 07 | `07_cursor_rules.html` | เขียน .cursor/rules ของโปรเจกต์ | Project Rules | ตั้งวงกับ Cursor / Setting Up Cursor | ⭐ new |
| 08 | `08_prompt_and_review.html` | Prompt สำหรับ Codebase และวงจรตรวจงาน | Prompting &amp; Review Loop | ตั้งวงกับ Cursor / Setting Up Cursor | ⭐ new |
| 09 | `09_react_router.html` | react-router 8 | react-router 8 | โครงแอปและเราเตอร์ / App Shell &amp; Routing | 06 |
| 10 | `10_header_footer.html` | Header และ Footer | Header &amp; Footer | โครงแอปและเราเตอร์ / App Shell &amp; Routing | 07 |
| 11 | `11_providers_query_client.html` | Providers และ QueryClient | Providers &amp; QueryClient | โครงแอปและเราเตอร์ / App Shell &amp; Routing | 08 |
| 12 | `12_button_input_radio.html` | Button, Input และ RadioInput | Button, Input &amp; RadioInput | คอมโพเนนต์กลาง / Shared UI | 09 |
| 13 | `13_modal_pagination.html` | Modal และ Pagination | Modal &amp; Pagination | คอมโพเนนต์กลาง / Shared UI | 10 |
| 14 | `14_display_components.html` | คอมโพเนนต์แสดงผล | Display Components | คอมโพเนนต์กลาง / Shared UI | 11 |
| 15 | `15_api_client.html` | API Client | API Client | ชั้นข้อมูลสินค้า / Products Data Layer | 12 |
| 16 | `16_product_types_api.html` | Types และ Products API | Product Types &amp; API | ชั้นข้อมูลสินค้า / Products Data Layer | 13 |
| 17 | `17_query_factories.html` | Query Factories | Query Factories | ชั้นข้อมูลสินค้า / Products Data Layer | 14 |
| 18 | `18_product_list_components.html` | คอมโพเนนต์รายการสินค้า | Product List Components | สร้างหน้าเพจ / Pages | 15 |
| 19 | `19_home_page.html` | หน้า Home | Home Page | สร้างหน้าเพจ / Pages | 16 |
| 20 | `20_category_page.html` | หน้า Category | Category Page | สร้างหน้าเพจ / Pages | 17 |
| 21 | `21_product_page.html` | หน้า Product | Product Detail Page | สร้างหน้าเพจ / Pages | 18 |
| 22 | `22_cart_store.html` | Cart Store | Cart Store | ตะกร้าสินค้า / Cart | 19 |
| 23 | `23_add_to_cart.html` | Add to Cart และ Mini Cart | Add to Cart &amp; Mini Cart | ตะกร้าสินค้า / Cart | 20 |
| 24 | `24_cart_page.html` | หน้า Cart | Cart Page | ตะกร้าสินค้า / Cart | 21 |
| 25 | `25_checkout_schema.html` | Zod Schema | Checkout Schema | ชำระเงิน / Checkout | 22 |
| 26 | `26_address_form.html` | ฟอร์มที่อยู่ | Address Form | ชำระเงิน / Checkout | 23 |
| 27 | `27_delivery_payment_summary.html` | จัดส่ง ชำระเงิน และสรุปรายการ | Delivery, Payment &amp; Order Summary | ชำระเงิน / Checkout | 24 |
| 28 | `28_place_order.html` | สั่งซื้อ | Place Order | ชำระเงิน / Checkout | 25 |
| 29 | `29_when_ai_gets_it_wrong.html` | เมื่อ AI เขียนผิด | When the AI Gets It Wrong | เมื่อ AI เขียนผิด / When AI Gets It Wrong | ⭐ new |
| 30 | `30_test_setup.html` | ติดตั้งชุดทดสอบ | Test Setup | การทดสอบ / Testing | 26 |
| 31 | `31_unit_tests.html` | Unit Tests | Unit Tests | การทดสอบ / Testing | 27 |
| 32 | `32_hook_tests.html` | การทดสอบ Hooks และ Queries | Hook Tests | การทดสอบ / Testing | 28 |
| 33 | `33_integration_tests.html` | Integration Tests | Integration Tests | การทดสอบ / Testing | 29 |
| 34 | `34_ai_code_review.html` | ใช้ AI ตรวจงานตัวเอง | AI Code Review | ส่งท้าย / Wrap Up | ⭐ new |
| 35 | `35_wrap_up.html` | Build และส่งท้าย | Wrap Up | ส่งท้าย / Wrap Up | 30 |

---

### Task 1: Scaffold — worktree, reference repo, `lesson.css`, checker

**Files:**
- Create: `Week_05_06/03_react_ecommerce_ai_project/content/lesson.css`
- Create: `<SCRATCH>/check_lessons.py`
- Clone: `<SCRATCH>/ecommerce-app`

**Interfaces:**
- Consumes: nothing.
- Produces: `<SCRATCH>/ecommerce-app` (source of truth for all code), `<SCRATCH>/check_lessons.py` (run by every later task), and the three CSS classes `.lesson-ai-prompt`, `.lesson-ai-review`, `.lesson-manual` used by every lesson.

- [ ] **Step 1: Create an isolated worktree**

This checkout is shared with other sessions; foreign commits can race onto `main`.

```bash
cd /Users/varis/Sites/varis-lab/frontend-bootcamp-content-7-july-2026
git worktree add ../frontend-bootcamp-ai-course -b week0506-ecommerce-ai-course
```

All remaining work happens in `../frontend-bootcamp-ai-course`.

- [ ] **Step 2: Clone the reference app**

```bash
git clone --depth 1 https://github.com/manjarb/varis-lab-project-06-react-ecommerce-app.git <SCRATCH>/ecommerce-app
```

Verify it landed:

```bash
ls <SCRATCH>/ecommerce-app/src/features/cart/store/
```

Expected: `CartContext.tsx  CartProvider.tsx  cartReducer.ts  cartStorage.ts`

- [ ] **Step 3: Create the content directory and copy `lesson.css`**

```bash
mkdir -p Week_05_06/03_react_ecommerce_ai_project/content
cp Week_05_06/01_tailwind_cursor_workshop/content/lesson.css \
   Week_05_06/03_react_ecommerce_ai_project/content/lesson.css
```

The workshop copy is used because it is a superset of the e-commerce one (it adds `.lesson-source-code` and `.lesson-source-code-note`).

- [ ] **Step 4: Append the three blockquote variants**

Append to `Week_05_06/03_react_ecommerce_ai_project/content/lesson.css`:

```css

.lesson-ai-prompt {
  border-inline-start-color: var(--blue);
  background: var(--blue-soft);
}

.lesson-ai-review {
  border-inline-start-color: var(--amber);
}

.lesson-manual {
  border-inline-start-color: var(--blue-dark);
  background: var(--surface);
}
```

- [ ] **Step 5: Verify the variables exist**

```bash
grep -nE '\-\-(blue|blue-dark|blue-soft|amber|surface):' Week_05_06/03_react_ecommerce_ai_project/content/lesson.css
```

Expected: five matches inside the `:root` block. If any is missing, stop — the wrong `lesson.css` was copied.

- [ ] **Step 6: Write the checker**

Create `<SCRATCH>/check_lessons.py`:

```python
#!/usr/bin/env python3
"""Structural checker for the AI e-commerce course. Run from repo root."""
import re
import sys
from pathlib import Path

DIR = Path("Week_05_06/03_react_ecommerce_ai_project/content")
SUFFIX = "| สร้างเว็บ E-commerce ด้วย React + Cursor AI"
BUILD = set(range(9, 29)) | set(range(30, 34))  # lessons using the full anatomy
MANUAL = {5, 9, 12, 15, 17, 22, 25, 28, 31, 33}

FILES = [
    "01_intro.html", "02_project_scaffold.html", "03_tooling.html",
    "04_scss_foundation.html", "05_architecture.html", "06_cursor_setup.html",
    "07_cursor_rules.html", "08_prompt_and_review.html", "09_react_router.html",
    "10_header_footer.html", "11_providers_query_client.html",
    "12_button_input_radio.html", "13_modal_pagination.html",
    "14_display_components.html", "15_api_client.html",
    "16_product_types_api.html", "17_query_factories.html",
    "18_product_list_components.html", "19_home_page.html",
    "20_category_page.html", "21_product_page.html", "22_cart_store.html",
    "23_add_to_cart.html", "24_cart_page.html", "25_checkout_schema.html",
    "26_address_form.html", "27_delivery_payment_summary.html",
    "28_place_order.html", "29_when_ai_gets_it_wrong.html",
    "30_test_setup.html", "31_unit_tests.html", "32_hook_tests.html",
    "33_integration_tests.html", "34_ai_code_review.html", "35_wrap_up.html",
]
FINAL = "--final" in sys.argv

errors = []


def check(cond, msg):
    if not cond:
        errors.append(msg)


files = sorted(p for p in DIR.glob("[0-9][0-9]_*.html"))
present = {int(p.name[:2]) for p in files}

for path in files:
    n = int(path.name[:2])
    html = path.read_text(encoding="utf-8")
    tag = f"{path.name}:"

    check('<html lang="th">' in html, f"{tag} missing <html lang=\"th\">")
    check('href="lesson.css"' in html, f"{tag} missing lesson.css link")
    check('<article class="lesson">' in html, f"{tag} missing article.lesson")

    title = re.search(r"<title>(.*?)</title>", html, re.S)
    check(bool(title), f"{tag} no <title>")
    if title:
        check(title.group(1).strip().endswith(SUFFIX),
              f"{tag} title must end with '{SUFFIX}'")

    eyebrow = re.search(r'class="lesson-eyebrow">\s*บทเรียน (\d+)', html)
    check(bool(eyebrow), f"{tag} no lesson-eyebrow")
    if eyebrow:
        check(int(eyebrow.group(1)) == n,
              f"{tag} eyebrow says {eyebrow.group(1)}, file says {n:02d}")

    if 1 <= n <= len(FILES):
        check(path.name == FILES[n - 1],
              f"{tag} unexpected filename for lesson {n:02d}, expected {FILES[n - 1]}")

    nav = re.search(r'<nav class="lesson-navigation".*?</nav>', html, re.S)
    check(bool(nav), f"{tag} no lesson-navigation")
    if nav:
        block = nav.group(0)
        prev = re.search(r'href="([^"]+)" rel="prev"', block)
        nxt = re.search(r'href="([^"]+)" rel="next"', block)
        check('href="index.html"' in block, f"{tag} nav missing index link")
        if n == 1:
            check(prev is None, f"{tag} lesson 01 must not have a prev link")
        else:
            want = FILES[n - 2]
            check(prev is not None and prev.group(1) == want,
                  f"{tag} prev should be {want}, got {prev and prev.group(1)}")
        if n == 35:
            check(nxt is None, f"{tag} lesson 35 must not have a next link")
        else:
            want = FILES[n]
            check(nxt is not None and nxt.group(1) == want,
                  f"{tag} next should be {want}, got {nxt and nxt.group(1)}")

    for block in re.findall(r"<pre><code[^>]*>(.*?)</code></pre>", html, re.S):
        raw = re.search(r"<[a-zA-Z/!]", block)
        if raw:
            snippet = block[max(0, raw.start() - 30):raw.start() + 30]
            errors.append(f"{tag} unescaped tag in code block near: {snippet!r}")

    if n in BUILD:
        for marker, label in (("🤖", "prompt"), ("✅", "review"), ("🤔", "self-check")):
            check(marker in html, f"{tag} missing {label} section ({marker})")
        check("Checkpoint" in html, f"{tag} missing Checkpoint")
    if n in MANUAL:
        check('class="lesson-manual"' in html and "✍️" in html,
              f"{tag} missing ✍️ blockquote.lesson-manual (no-AI zone)")

if FINAL:
    check(len(files) == 35, f"expected 35 lessons, found {len(files)}")
    check(present == set(range(1, 36)),
          f"missing lesson numbers: {sorted(set(range(1, 36)) - present)}")
else:
    print(f"note: {len(files)}/35 lessons written")

index = DIR / "index.html"
if index.exists():
    idx = index.read_text(encoding="utf-8")
    for path in files:
        check(f'href="{path.name}"' in idx, f"index.html: no link to {path.name}")

print(f"checked {len(files)} lesson file(s)")
for e in errors:
    print("FAIL:", e)
print("OK" if not errors else f"{len(errors)} problem(s)")
sys.exit(1 if errors else 0)
```

- [ ] **Step 7: Run the checker against the empty directory**

```bash
python3 <SCRATCH>/check_lessons.py
```

Expected: `note: 0/35 lessons written`, `checked 0 lesson file(s)`, then `OK`, exit 0. (The 35-file assertion only runs with `--final`, so the checker is usable from the first lesson onward without failing on lessons that haven't been written yet.)

- [ ] **Step 8: Commit**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content/lesson.css
git commit -m "chore: scaffold AI e-commerce course stylesheet"
```

---

### Task 2: `index.html`

**Files:**
- Create: `Week_05_06/03_react_ecommerce_ai_project/content/index.html`

**Interfaces:**
- Consumes: `lesson.css` from Task 1; the Lesson inventory table above.
- Produces: the table of contents every lesson's `สารบัญบทเรียน` link points at.

- [ ] **Step 1: Write `index.html`**

Model it on `Week_05_06/02_react_ecommerce_project/content/index.html` (read it first). Differences: 12 chapter cards instead of 10, 35 entries, a subtitle paragraph in the header, and a `lesson-source-code` blockquote linking the reference repo.

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="สารบัญคอร์สสร้างเว็บ E-commerce ด้วย React และ Cursor AI"
    />
    <title>สร้างเว็บ E-commerce ด้วย React + Cursor AI: สารบัญบทเรียน</title>
    <link rel="stylesheet" href="lesson.css" />
  </head>
  <body>
    <main>
      <header class="course-header">
        <h1>สร้างเว็บ E-commerce ด้วย React + Cursor AI</h1>
        <p>สร้างแอปจริงทั้งเว็บโดยให้ Cursor เป็นคนพิมพ์ — แต่คุณเป็นคนตัดสินใจและตรวจงาน</p>
      </header>

      <blockquote class="lesson-source-code">
        <strong>โค้ดฉบับสมบูรณ์ของโปรเจกต์</strong> —
        <a href="https://github.com/manjarb/varis-lab-project-06-react-ecommerce-app" target="_blank" rel="noreferrer">github.com/manjarb/varis-lab-project-06-react-ecommerce-app</a>
      </blockquote>

      <div class="chapter-list">
        <section class="chapter-card">
          <h2>1. เริ่มต้น — Welcome</h2>
          <ol>
            <li><a href="01_intro.html">บทนำ — Intro</a></li>
          </ol>
        </section>
        <!-- chapters 2–12 follow the same shape, each <ol> carrying the
             correct start= attribute: 2, 6, 9, 12, 15, 18, 22, 25, 29, 30, 34 -->
      </div>
    </main>
  </body>
</html>
```

Fill in all 12 chapter cards from the Lesson inventory table. Each `<li>` reads `<a href="FILE">Thai title — English title</a>`. Chapter card headings, in order:

```text
1. เริ่มต้น — Welcome                       (start 1)
2. ติดตั้งโปรเจกต์ — Project Setup           (start 2)
3. ตั้งวงกับ Cursor — Setting Up Cursor      (start 6)
4. โครงแอปและเราเตอร์ — App Shell & Routing  (start 9)
5. คอมโพเนนต์กลาง — Shared UI                (start 12)
6. ชั้นข้อมูลสินค้า — Products Data Layer     (start 15)
7. สร้างหน้าเพจ — Pages                      (start 18)
8. ตะกร้าสินค้า — Cart                       (start 22)
9. ชำระเงิน — Checkout                       (start 25)
10. เมื่อ AI เขียนผิด — When AI Gets It Wrong (start 29)
11. การทดสอบ — Testing                       (start 30)
12. ส่งท้าย — Wrap Up                        (start 34)
```

Escape `&` as `&amp;` in the headings.

- [ ] **Step 2: Verify link count**

```bash
grep -c 'href="[0-9][0-9]_' Week_05_06/03_react_ecommerce_ai_project/content/index.html
```

Expected: `35`

- [ ] **Step 3: Commit**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content/index.html
git commit -m "content: add AI e-commerce course table of contents"
```

---

### Task 3: Lesson 01 — บทนำ

**Files:**
- Create: `Week_05_06/03_react_ecommerce_ai_project/content/01_intro.html`
- Read: `Week_05_06/02_react_ecommerce_project/content/01_intro.html`

**Interfaces:**
- Consumes: `lesson.css`, `index.html`.
- Produces: the vocabulary (🤖 / ✅ / ✍️ / 🤔) and the governing rule that every later lesson refers back to.

- [ ] **Step 1: Read the original intro**

Read `Week_05_06/02_react_ecommerce_project/content/01_intro.html` in full. Sections to carry over: เว็บที่เราจะสร้าง, เครื่องมือที่เราจะใช้, "ถูกวิธี" หมายความว่าอย่างไร, สิ่งที่ต้องมีก่อนเริ่ม, แผนการเดินทาง.

- [ ] **Step 2: Write `01_intro.html`**

Carry over the original sections, then change these three things:

1. **แผนการเดินทาง** becomes 12 chapters (from the Lesson inventory table), not 10.
2. **สิ่งที่ต้องมีก่อนเริ่ม** adds: Cursor (ติดตั้งในบทเรียน 06 — ยังไม่ต้องโหลดตอนนี้), and states that this course does not assume the Tailwind + Cursor workshop.
3. Add a new `<h2>` section, `เราจะทำงานกับ AI อย่างไรในคอร์สนี้`, containing the governing rule and the four block types. Use this text for the rule, verbatim:

```html
<blockquote>🚨 <strong>กติกาข้อเดียวของคอร์สนี้</strong> — AI พิมพ์แทนคุณได้ แต่คุณต้องอธิบายทุกบรรทัดได้ ถ้าอธิบายไม่ได้ แปลว่ายังไม่ผ่านบทนั้น ไม่ใช่เพราะเราอยากเข้มงวด แต่เพราะวันที่โค้ดพัง คนที่ต้องแก้คือคุณ ไม่ใช่ AI</blockquote>
```

And explain the four markers in a `<ul>`: 🤖 Prompt ที่ส่งให้ Cursor · ✅ ตรวจโค้ดที่ AI สร้าง · ✍️ ส่วนนี้พิมพ์เอง · 🤔 อธิบายให้ได้.

Also add a short honest paragraph on where AI helps and where it does not on this project — good at boilerplate that follows an established pattern (component + SCSS module, repeated form fields, a fourth test that looks like the first three); unreliable at decisions (cache key shape, what belongs in `shared/` vs a feature, what a test should actually prove).

Nav footer: `<span></span>` / `index.html` / `02_project_scaffold.html` (`ถัดไป: สร้างโปรเจกต์ด้วย Vite`).

- [ ] **Step 3: Run the checker**

```bash
python3 <SCRATCH>/check_lessons.py
```

Expected: `OK`, exit 0.

- [ ] **Step 4: Commit**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content/01_intro.html
git commit -m "content: add AI e-commerce lesson 01 intro"
```

---

### Task 4: Lessons 02–05 — Project Setup (hand-typed chapter)

**Files:**
- Create: `02_project_scaffold.html`, `03_tooling.html`, `04_scss_foundation.html`, `05_architecture.html` (all in the content dir)
- Read: originals `02_project_scaffold.html` … `05_architecture.html`, and `<SCRATCH>/ecommerce-app/{package.json,vite.config.ts,eslint.config.js,tsconfig.app.json,src/styles/*}`

**Interfaces:**
- Consumes: nav from lesson 01.
- Produces: the project state lessons 06–08 write Cursor rules about — feature-based `src/` layout, `@/` alias, SCSS partials, ESLint flat config. Lesson 07's rules file quotes these decisions by name.

- [ ] **Step 1: Write lessons 02, 03, 04**

These three are adapted with **minimal change**: Cursor does not exist yet in the course. Carry the originals over near-verbatim. The only edits:

- In 02, add one short paragraph at the end: บทนี้กับอีกสามบทถัดไปเราพิมพ์เองล้วน ๆ — เพราะการตั้งค่าโปรเจกต์คือชุดการตัดสินใจ ไม่ใช่โค้ดที่ลอกแบบได้ และเราต้องมีโปรเจกต์ที่มีรูปทรงชัดเจนก่อน ถึงจะบอก AI ได้ว่าให้เขียนโค้ดแบบไหน.
- Nav chains: 02 ↔ 01/03, 03 ↔ 02/04, 04 ↔ 03/05.
- No 🤖/✅/🤔 sections (the checker does not require them for lessons 2–8).

- [ ] **Step 2: Write lesson 05 with a ✍️ block**

Carry over the original architecture lesson. Add a `<blockquote class="lesson-manual">` containing the `src/` folder tree and the reason line from the No-AI zone table (`โครงสร้างคือการตัดสินใจ ไม่ใช่การพิมพ์`).

Add a closing paragraph that hands off to chapter 3: โครงสร้างที่เราเพิ่งตกลงกันนี้ จะกลายเป็น "กฎ" ที่เราเขียนให้ Cursor อ่านในบทเรียน 07.

Nav: 05 ↔ 04 / 06 (`ถัดไป: ติดตั้งและรู้จัก Cursor`).

- [ ] **Step 3: Run the checker**

```bash
python3 <SCRATCH>/check_lessons.py
```

Expected: `OK`, exit 0. Lesson 05 must pass the `lesson-manual` assertion.

- [ ] **Step 4: Commit**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content/0[2-5]_*.html
git commit -m "content: add AI e-commerce lessons 02-05 project setup"
```

---

### Task 5: Lessons 06–08 — ⭐ the Cursor chapter

**Files:**
- Create: `06_cursor_setup.html`, `07_cursor_rules.html`, `08_prompt_and_review.html`
- Read: `Week_05_06/01_tailwind_cursor_workshop/content/{02_setup.html,07_prompt_anatomy.html,12_review_responsive.html,14_review_maintainability.html}` for house style only — this chapter is written fresh for a TypeScript codebase and must stand alone.

**Interfaces:**
- Consumes: the project state from Task 4 (`src/` layout, `@/` alias, SCSS modules, ESLint flat config).
- Produces: `.cursor/rules/project.mdc` in the student's repo, the four-part prompt vocabulary (`บริบท / โครงสร้าง / ข้อกำหนดทางเทคนิค / ขอบเขต`), and the review loop — all three are referenced by name in lessons 09–35.

- [ ] **Step 1: Write `06_cursor_setup.html`**

Self-contained, assumes no prior Cursor exposure. Sections:

- ทำไมต้องเป็น Cursor — editor ที่เห็นทั้งโปรเจกต์ ไม่ใช่แค่ไฟล์ที่เปิดอยู่.
- ติดตั้งและเปิดโปรเจกต์ — download from cursor.com, open the project folder created in lesson 02, sign in, import VS Code settings/extensions.
- สามโหมดที่ต้องแยกให้ออก, as a `<table>`:

  | โหมด | ใช้ตอนไหน | แก้ไฟล์ให้เลยไหม |
  | --- | --- | --- |
  | Tab | เติมโค้ดที่กำลังพิมพ์อยู่ | ไม่ — คุณกด Tab เอง |
  | Ask | ถามเพื่อทำความเข้าใจโค้ด | ไม่ |
  | Agent | สั่งให้สร้าง/แก้หลายไฟล์ | ใช่ |

  State plainly: Agent เป็นโหมดหลักของคอร์สนี้ แต่ Ask คือโหมดที่ทำให้คุณ "อธิบายให้ได้".
- การเลือก model — one paragraph: model ที่ฉลาดกว่าใช้เวลานานกว่าและกินโควตามากกว่า สำหรับงานทำตามแบบที่เราวางไว้ model มาตรฐานพอ.
- ให้บริบทด้วย `@` — `@file`, `@folder`, `@Codebase`; why `@`-mentioning `src/features/products/api.ts` beats pasting it.
- Checkpoints และการย้อนกลับ — Cursor's restore, และกติกาความปลอดภัยของคอร์สนี้:

```html
<blockquote>🚨 <strong>commit ก่อน prompt ทุกครั้ง</strong> — ก่อนกดส่งคำสั่งให้ Agent ให้ <code>git add -A &amp;&amp; git commit</code> ให้ working tree สะอาดก่อนเสมอ พอ Agent ทำงานเสร็จ <code>git diff</code> จะแสดงสิ่งที่ AI เปลี่ยน<em>ทั้งหมด</em>อย่างชัดเจน และถ้าผลลัพธ์ไม่เอาไหน <code>git restore .</code> คือปุ่ม undo ที่เชื่อถือได้กว่าปุ่มไหน ๆ ใน editor</blockquote>
```
- แบบฝึกสั้น ๆ: open Ask mode, `@src/app/router.tsx`, ask it to explain the file, then check the answer against what lesson 09 will teach. Point: Ask is a reading tool.

Nav: 06 ↔ 05 / 07.

- [ ] **Step 2: Write `07_cursor_rules.html`**

Sections:

- ปัญหา: prompt เดียวกัน ผลลัพธ์คนละทิศ — an Agent with no rules puts a component in `src/components/`, writes inline styles, and imports with `../../..`.
- rules คืออะไร — a file Cursor reads with every request; project convention stated once instead of re-typed in every prompt.
- Create `.cursor/rules/project.mdc` with this exact content (show it in a `language-text` block, escaped):

```text
---
description: กติกาของโปรเจกต์ e-commerce นี้
alwaysApply: true
---

# Stack
- React 19 + TypeScript (strict) + Vite 8
- react-router 8 (data mode), TanStack Query 5, axios
- SCSS Modules เท่านั้น ห้ามใช้ inline style และห้ามใช้ CSS-in-JS
- ฟอร์มใช้ react-hook-form + zod

# โครงสร้างไฟล์
- src/app/      — router, providers, layouts
- src/pages/    — หนึ่งโฟลเดอร์ต่อหนึ่งหน้า พร้อม components/ ของหน้านั้น
- src/features/ — โค้ดที่ผูกกับฟีเจอร์ (products, cart, checkout): api, queries, types, store
- src/shared/   — ของที่ใช้ข้ามฟีเจอร์: components, hooks, utils, api, types
- ห้ามสร้างโฟลเดอร์ระดับบนใหม่นอกเหนือจากนี้
- component หนึ่งตัว = หนึ่งโฟลเดอร์: Name.tsx + Name.module.scss

# กติกาการเขียนโค้ด
- import ข้ามโฟลเดอร์ใช้ alias @/ เสมอ ห้ามใช้ ../../
- ห้ามใช้ any และห้ามใช้ as เพื่อกลบ type error
- ห้าม fetch ใน useEffect — server state ทุกตัวผ่าน TanStack Query
- reducer ต้องเป็น pure function: ห้าม mutate state เดิม
- ตั้งชื่อ: component = PascalCase, hook = useCamelCase, ไฟล์ util = camelCase.utils.ts

# ขอบเขต
- ห้ามติดตั้ง dependency ใหม่ถ้าไม่ได้สั่ง
- ห้ามแก้ไฟล์ที่ไม่ได้ระบุในคำสั่ง
- ห้ามเขียน comment อธิบายสิ่งที่โค้ดบอกอยู่แล้ว
```

- ทดลองให้เห็นผล — send the same small prompt (`สร้าง component ชื่อ Badge ที่รับ prop label แล้วแสดงเป็นป้ายสีเทา`) with rules disabled then enabled, and compare: file location, styling method, import style. Tell students to actually run both.
- rules ไม่ใช่คาถา — rules ลดโอกาสพลาด ไม่ได้กำจัดมัน ทุกบทหลังจากนี้จึงยังมีช่อง ✅ ให้ตรวจอยู่ดี.

Nav: 07 ↔ 06 / 08.

- [ ] **Step 3: Write `08_prompt_and_review.html`**

Sections:

- กายวิภาคสี่ส่วน, adapted from screenshots to a codebase — บริบท now means "ไฟล์ไหนในโปรเจกต์ที่เกี่ยวข้อง" (`@`-mentions), not "แอปนี้คืออะไร".
- Worked example — write the full prompt that lesson 09 will use for `router.tsx` + stub pages, and annotate where each line came from (lesson 05's architecture, lesson 03's alias, the file list).
- วงจรตรวจงาน 5 ขั้น, as an `<ol>`:
  1. อ่าน diff ทั้งหมดก่อน — `git diff` ไม่ใช่แค่ดูว่าหน้าเว็บขึ้นไหม
  2. ไล่ checklist ของบทนั้น
  3. `npm run lint` และ `npm run typecheck` (โปรเจกต์ใช้ tsconfig แบบ solution-style — root config เป็น `{"files": [], "references": [...]}` ดังนั้น `npx tsc --noEmit` ตรง ๆ จะไม่ตรวจไฟล์ไหนเลยและ exit 0 ต้องใช้สคริปต์ `typecheck` ซึ่งคือ `tsc -b`)
  4. รันจริงแล้วทำตาม checkpoint
  5. ถามตัวเองว่า "ถ้ามีคนถามว่าบรรทัดนี้ทำอะไร ตอบได้ไหม" — ตอบไม่ได้ ให้เปิด Ask mode ถามจนเข้าใจ ก่อนไปต่อ
- แก้ต่อ หรือ ถอยแล้วสั่งใหม่ — refine when the shape is right and details are wrong; `git restore .` and rewrite the prompt when the shape itself is wrong. Chasing a wrong shape with follow-up prompts is how a 20-line file becomes 200.
- Preview of the ✍️ rule: บางบทเราจะห้ามใช้ AI ตรงจุดที่เป็นหัวใจของบทนั้น เหตุผลอยู่ในกล่อง ✍️ ของแต่ละบท.

Nav: 08 ↔ 07 / 09 (`ถัดไป: react-router 8`).

- [ ] **Step 4: Run the checker**

```bash
python3 <SCRATCH>/check_lessons.py
```

Expected: `OK`, exit 0.

- [ ] **Step 5: Commit**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content/0[6-8]_*.html
git commit -m "content: add AI e-commerce lessons 06-08 Cursor workflow"
```

---

### Task 6: Lessons 09–11 — App Shell & Routing

**Files:**
- Create: `09_react_router.html`, `10_header_footer.html`, `11_providers_query_client.html`
- Read: originals `06_react_router.html`, `07_header_footer.html`, `08_providers_query_client.html`
- Read: `<SCRATCH>/ecommerce-app/src/app/{router.tsx,App.tsx,RouteErrorFallback.tsx,providers.tsx,queryClient.ts}`, `src/app/layouts/MainLayout/*`, `src/shared/components/{Header,Footer}/*`, `src/shared/hooks/useProductRoute.tsx`, `src/main.tsx`

**Interfaces:**
- Consumes: the four-part prompt and review loop from Task 5; the `@/` alias and folder layout from Task 4.
- Produces: `MainLayout` v1 (Outlet only, Header/Footer added in lesson 10), `Header` v1 (CartSummary badge added in lesson 23), `providers.tsx` v1 (CartProvider added in lesson 22). Each lesson must say which later lesson completes the file.

- [ ] **Step 1: Write lesson 09 following the production recipe**

This is the first lesson using the full anatomy — state that explicitly in one sentence at the top of the 🤖 section.

✍️ block (required): the route object in `app/router.tsx`, reason `แผนที่ของแอปทั้งใบ ต้องอยู่ในหัวคุณ`. AI writes the six stub pages, `ErrorMessage`, and `RouteErrorFallback`; the student types the `createBrowserRouter` array.

`AI มักพลาดตรงนี้` for this lesson: generating react-router v6 `<BrowserRouter>` + `<Routes>` JSX instead of data-mode `createBrowserRouter` + `RouterProvider`.

Nav: 09 ↔ 08 / 10.

- [ ] **Step 2: Write lesson 10 following the production recipe**

Header/Footer + Font Awesome + `useProductRoute`. No ✍️ block. `AI มักพลาดตรงนี้`: hardcoding nav links instead of deriving them, and using `<div onClick>` instead of `<Link>`.

Nav: 10 ↔ 09 / 11.

- [ ] **Step 3: Write lesson 11 following the production recipe**

QueryClient + providers. No ✍️ block. `AI มักพลาดตรงนี้`: creating the `QueryClient` inside the component body (new client every render, cache thrown away) instead of at module scope.

Nav: 11 ↔ 10 / 12.

- [ ] **Step 4: Run the checker**

```bash
python3 <SCRATCH>/check_lessons.py
```

Expected: `OK`, exit 0.

- [ ] **Step 5: Commit**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content/{09,10,11}_*.html
git commit -m "content: add AI e-commerce lessons 09-11 app shell and routing"
```

---

### Task 7: Lessons 12–14 — Shared UI

**Files:**
- Create: `12_button_input_radio.html`, `13_modal_pagination.html`, `14_display_components.html`
- Read: originals `09_button_input_radio.html`, `10_modal_pagination.html`, `11_display_components.html`
- Read: `<SCRATCH>/ecommerce-app/src/shared/components/**`, `vite.config.ts`

**Interfaces:**
- Consumes: the prompt/review vocabulary; `vite.config.ts` from lesson 03.
- Produces: `Button`, `Input`, `RadioInput`, `Modal`, `Pagination`, `StarReview`, `FeatureCard`, `CountdownTimer`, `ImageZoom` — all consumed by lessons 18–28. Also adds `legacy.inconsistentCjsInterop` to `vite.config.ts` (lesson 12).

- [ ] **Step 1: Write lesson 12 following the production recipe**

✍️ block (required): `Button.tsx` + `Button.module.scss`, reason `เป็นแม่แบบที่ AI จะลอกไปใช้กับทุก component หลังจากนี้`. The prompt for `Input` and `RadioInput` then says explicitly: ทำตามรูปแบบเดียวกับ `@src/shared/components/Button/Button.tsx` — this is the lesson's real point, that a hand-written exemplar is the highest-leverage context you can give an Agent.

`AI มักพลาดตรงนี้`: dropping `...rest` prop spreading and the forwarded `type` attribute, so the button silently submits forms.

Nav: 12 ↔ 11 / 13.

- [ ] **Step 2: Write lesson 13 following the production recipe**

react-modal + react-paginate wrappers. `AI มักพลาดตรงนี้`: forgetting `Modal.setAppElement` and the `aria` props, and re-implementing pagination by hand instead of wrapping `react-paginate`.

Nav: 13 ↔ 12 / 14.

- [ ] **Step 3: Write lesson 14 following the production recipe**

StarReview, FeatureCard, CountdownTimer, ImageZoom. `AI มักพลาดตรงนี้`: a `setInterval` in `CountdownTimer` with no cleanup in the effect's return.

Nav: 14 ↔ 13 / 15.

- [ ] **Step 4: Run the checker**

```bash
python3 <SCRATCH>/check_lessons.py
```

Expected: `OK`, exit 0.

- [ ] **Step 5: Commit**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content/1[2-4]_*.html
git commit -m "content: add AI e-commerce lessons 12-14 shared UI"
```

---

### Task 8: Lessons 15–17 — Products Data Layer

**Files:**
- Create: `15_api_client.html`, `16_product_types_api.html`, `17_query_factories.html`
- Read: originals `12_api_client.html`, `13_product_types_api.html`, `14_query_factories.html`
- Read: `<SCRATCH>/ecommerce-app/src/shared/api/client.ts`, `src/shared/utils/pagination.utils.ts`, `src/features/products/{types.ts,api.ts,queries.ts}`, `eslint.config.js`

**Interfaces:**
- Consumes: `@/` alias, the `.env` `VITE_API_BASE_URL` from lesson 02.
- Produces: `apiClient` + `ApiError` (used by `features/checkout/api.ts` in lesson 28), `Product`/`ProductsResponse` types, and `productKeys` + `queryOptions` consumed by lessons 19–21 and 32.

- [ ] **Step 1: Write lesson 15 following the production recipe**

✍️ block (required): the response-error interceptor in `shared/api/client.ts`, reason `กติกาการแปลง error ของทั้งแอปอยู่ตรงนี้จุดเดียว`.

`AI มักพลาดตรงนี้`: swallowing the original error instead of rethrowing a normalized `ApiError`, so every failure surfaces as the same useless message.

Nav: 15 ↔ 14 / 16.

- [ ] **Step 2: Write lesson 16 following the production recipe**

Types + `features/products/api.ts` + `pagination.utils.ts`. `AI มักพลาดตรงนี้`: inventing dummyjson response fields that don't exist (e.g. `discountPrice`) — the checklist tells students to open the endpoint in a browser and compare field names against the real payload.

Nav: 16 ↔ 15 / 17.

- [ ] **Step 3: Write lesson 17 following the production recipe**

✍️ block (required): the `productKeys` factory, reason `cache key ผิด = bug ที่หาไม่เจอ`. AI writes the `queryOptions` wrappers and the ESLint plugin wiring.

`AI มักพลาดตรงนี้`: TanStack Query v4 syntax (`useQuery(key, fn)` positional args) instead of v5's single options object, and omitting `keepPreviousData` so pagination flickers.

Nav: 17 ↔ 16 / 18.

- [ ] **Step 4: Run the checker**

```bash
python3 <SCRATCH>/check_lessons.py
```

Expected: `OK`, exit 0.

- [ ] **Step 5: Commit**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content/1[5-7]_*.html
git commit -m "content: add AI e-commerce lessons 15-17 products data layer"
```

---

### Task 9: Lessons 18–21 — Pages

**Files:**
- Create: `18_product_list_components.html`, `19_home_page.html`, `20_category_page.html`, `21_product_page.html`
- Read: originals `15_product_list_components.html`, `16_home_page.html`, `17_category_page.html`, `18_product_page.html`
- Read: `<SCRATCH>/ecommerce-app/src/pages/{Home,Category,Product}/**`, `src/shared/components/ProductCard/**`, `src/shared/utils/price.utils.ts`, `src/main.tsx`

**Interfaces:**
- Consumes: `productKeys`/`queryOptions` from Task 8, shared components from Task 7.
- Produces: `Product.tsx` v1 — the Add-to-Cart button renders but is not wired; lesson 23 wires it. The lesson must say so.

- [ ] **Step 1: Write lesson 18 following the production recipe**

`price.utils.ts`, react-loading-skeleton, ProductCard, ProductsList, CategoryMenu. `AI มักพลาดตรงนี้`: rounding money with `toFixed` on floats in a way that disagrees with the reference `price.utils.ts` — the checklist says to compare against the hand-checked function.

Nav: 18 ↔ 17 / 19.

- [ ] **Step 2: Write lesson 19 following the production recipe**

Home page: copy banner/deal images from the finished repo (give the GitHub paths, as the original lesson does), swiper, Banner, deals + CountdownTimer + ImageZoom, FeatureCard row, loading and error states.

Because this is the largest prompt so far, add a short paragraph on **แบ่ง prompt เป็นสองรอบ** — โครงหน้าก่อน แล้วค่อยต่อส่วน deals — and why one giant prompt produces a diff too large to review honestly.

`AI มักพลาดตรงนี้`: silently dropping the `isLoading` / `isError` branches, leaving a blank page on a failed request.

Nav: 19 ↔ 18 / 20.

- [ ] **Step 3: Write lesson 20 following the production recipe**

Category page: byCategory query, derived pagination, `keepPreviousData` UX. `AI มักพลาดตรงนี้`: putting the current page in component state without syncing the URL, so a shared link always lands on page 1.

Nav: 20 ↔ 19 / 21.

- [ ] **Step 4: Write lesson 21 following the production recipe**

Product detail: ProductImageGallery, ProductDetailInfo, RatingBreakdown, ReviewCard, ReviewSection, `Product.tsx` v1. `AI มักพลาดตรงนี้`: computing the rating breakdown from `rating` alone instead of from the `reviews` array.

Nav: 21 ↔ 20 / 22.

- [ ] **Step 5: Run the checker**

```bash
python3 <SCRATCH>/check_lessons.py
```

Expected: `OK`, exit 0.

- [ ] **Step 6: Commit**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content/{18,19,20,21}_*.html
git commit -m "content: add AI e-commerce lessons 18-21 pages"
```

---

### Task 10: Lessons 22–24 — Cart

**Files:**
- Create: `22_cart_store.html`, `23_add_to_cart.html`, `24_cart_page.html`
- Read: originals `19_cart_store.html`, `20_add_to_cart.html`, `21_cart_page.html`
- Read: `<SCRATCH>/ecommerce-app/src/features/cart/**`, `src/pages/Cart/**`, `src/shared/components/CartSummary/**`, `src/app/providers.tsx`

**Interfaces:**
- Consumes: `providers.tsx` v1 (Task 6), `Product.tsx` v1 (Task 9), `Header` v1 (Task 6).
- Produces: `useCart()` returning `{ cart, addToCart, removeFromCart, updateQuantity, clearCart }` — consumed by lessons 24, 28, 31, 33. Completes `providers.tsx`, `Product.tsx`, `Header`.

- [ ] **Step 1: Write lesson 22 following the production recipe**

The original's client-state-vs-server-state explanation is the strongest section in the whole course — carry it over intact.

✍️ block (required): `cartReducer.ts`, reason `หัวใจของบทนี้ และเป็นสิ่งที่ AI mutate state พลาดบ่อยที่สุด`. AI writes `CartContext.tsx`, `cartStorage.ts`, `CartProvider.tsx`, `useCart.ts`.

Checklist must include, as checkable facts: reducer contains no `push` / `+=` / direct assignment; `useReducer` is called with three arguments (lazy initializer); the storage key carries `:v1`; both storage functions are wrapped in `try`/`catch`; `useCart` throws when used outside the provider.

`AI มักพลาดตรงนี้`: `useReducer(cartReducer, loadCartState())` — two-argument form, so localStorage is read and parsed on every render.

Nav: 22 ↔ 21 / 23.

- [ ] **Step 2: Write lesson 23 following the production recipe**

AddToCartModalContent, `Product.tsx` v2, CartSummary, `Header` v2. Prompt must `@`-mention the existing `Product.tsx` and `Header.tsx` and say `แก้เฉพาะสองไฟล์นี้` — a good place to show scope control on an edit-existing-files prompt.

`AI มักพลาดตรงนี้`: re-creating a second cart context instead of importing the existing `useCart`.

Nav: 23 ↔ 22 / 24.

- [ ] **Step 3: Write lesson 24 following the production recipe**

CartTable + `Cart.tsx` totals and navigation. `AI มักพลาดตรงนี้`: letting the quantity control reach 0 or negative instead of removing the row.

Nav: 24 ↔ 23 / 25.

- [ ] **Step 4: Run the checker**

```bash
python3 <SCRATCH>/check_lessons.py
```

Expected: `OK`, exit 0.

- [ ] **Step 5: Commit**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content/2[2-4]_*.html
git commit -m "content: add AI e-commerce lessons 22-24 cart"
```

---

### Task 11: Lessons 25–28 — Checkout

**Files:**
- Create: `25_checkout_schema.html`, `26_address_form.html`, `27_delivery_payment_summary.html`, `28_place_order.html`
- Read: originals `22_checkout_schema.html` … `25_place_order.html`
- Read: `<SCRATCH>/ecommerce-app/src/features/checkout/**`, `src/pages/Checkout/**`, `src/pages/Order/OrderSuccess.tsx`

**Interfaces:**
- Consumes: `useCart()` from Task 10, `Input`/`RadioInput` from Task 7, `apiClient` from Task 8.
- Produces: `checkoutSchema` + inferred types (used by lesson 31's schema tests), `useCheckout()` (used by lesson 32).

- [ ] **Step 1: Write lesson 25 following the production recipe**

✍️ block (required): `features/checkout/schema.ts`, reason `schema คือกติกาทางธุรกิจ ไม่ใช่ boilerplate`. AI writes `types.ts` (inferred from the schema) and `consts.ts`.

`AI มักพลาดตรงนี้`: hand-writing a TypeScript interface that duplicates the schema instead of using `z.infer`, so the two drift apart.

Nav: 25 ↔ 24 / 26.

- [ ] **Step 2: Write lesson 26 following the production recipe**

CheckoutAddressForm (useForm + zodResolver + Input) + CheckoutAddressBox. `AI มักพลาดตรงนี้`: wiring inputs as controlled `value`/`onChange` state instead of `register`, discarding the whole point of react-hook-form.

Nav: 26 ↔ 25 / 27.

- [ ] **Step 3: Write lesson 27 following the production recipe**

DeliveryOption, PaymentOption, CheckoutDeliveryBox, CheckoutPaymentBox, SummaryOrder, SummaryOrderItem, BillingSummary. Seven similar components — the lesson where delegation pays most; say so, and pair it with the warning that seven similar components is also where a copy-paste mistake hides best. Checklist tells students to read all seven diffs, not to skim after the second.

`AI มักพลาดตรงนี้`: recomputing totals inside each component instead of deriving them once in `BillingSummary`.

Nav: 27 ↔ 26 / 28.

- [ ] **Step 4: Write lesson 28 following the production recipe**

✍️ block (required): `useCheckout.ts` — the mutation → `clearCart()` → `navigate()` order, reason `ลำดับของ side effect ผิดลำดับเดียว ตะกร้าหายก่อนสั่งซื้อสำเร็จ`. AI writes `checkout/api.ts`, `Checkout.tsx` + module.scss, `OrderSuccess.tsx`.

`AI มักพลาดตรงนี้`: calling `clearCart()` before awaiting the mutation result, so a failed order still empties the cart.

Nav: 28 ↔ 27 / 29.

- [ ] **Step 5: Run the checker**

```bash
python3 <SCRATCH>/check_lessons.py
```

Expected: `OK`, exit 0.

- [ ] **Step 6: Commit**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content/2[5-8]_*.html
git commit -m "content: add AI e-commerce lessons 25-28 checkout"
```

---

### Task 12: Lesson 29 — ⭐ เมื่อ AI เขียนผิด

**Files:**
- Create: `29_when_ai_gets_it_wrong.html`
- Read: the `AI มักพลาดตรงนี้` lines written in Tasks 6–11 (they are the raw material — this lesson consolidates them)

**Interfaces:**
- Consumes: every failure mode named in lessons 09–28.
- Produces: the triage vocabulary (`แก้ต่อ` / `ถอยแล้วสั่งใหม่` / `เขียนเอง`) referenced in lessons 30–35.

- [ ] **Step 1: Write the lesson**

Not adapted from any original — written fresh. Opening frame: ทุกกล่อง ✅ ที่ผ่านมาบอกว่า "AI มักพลาดตรงนี้" บทนี้เรารวมมันไว้ที่เดียว แล้วดูว่าจะรับมืออย่างไร.

Section 1 — **เจ็ดอาการที่เจอบ่อยในโปรเจกต์นี้**, a `<table>` with columns อาการ / ทำไมเกิด / วิธีจับ / วิธีแก้:

1. เดา field ของ API ที่ไม่มีจริง (dummyjson) — model เดาจากชื่อที่ "ควรจะมี" — จับด้วยการเปิด endpoint จริงเทียบ — แก้โดยแนบ response ตัวอย่างใน prompt
2. ใช้ syntax TanStack Query v4 — training data เก่ากว่าเวอร์ชันที่เราใช้ — จับด้วย TypeScript error หรือ `queryKey` ที่หายไป — แก้โดยระบุเวอร์ชันใน prompt และ rules
3. mutate state ใน reducer — เขียนแบบ imperative ติดมือ — จับด้วยการค้นหา `push`/`+=` ใน diff — แก้โดยชี้บรรทัดที่ผิดแล้วสั่งแก้เฉพาะจุด
4. `as any` เพื่อดับ type error — model เลือกทางที่ทำให้ "ผ่าน" — จับด้วย `npm run lint` — แก้โดยสั่งห้ามและถามว่า type จริงคืออะไร
5. inline style แทน SCSS module — rules ไม่ถูกอ่าน หรือ prompt ไม่ได้ย้ำ — จับใน diff — แก้ที่ rules
6. สร้าง component ซ้ำแทนที่จะใช้ของใน `shared/` — Agent ไม่ได้รับบริบทว่ามีอยู่แล้ว — จับด้วยไฟล์ใหม่ที่ไม่ได้สั่ง — แก้โดย `@`-mention component เดิมใน prompt
7. แก้ไฟล์ที่ไม่ได้สั่งให้แก้ — ขอบเขตไม่ชัด — จับใน `git diff --stat` — แก้โดยเขียนส่วน "ขอบเขต" ให้ชัด

Section 2 — **ตัดสินใจสามทาง**, with the rule of thumb stated plainly:

- **แก้ต่อ** — รูปทรงถูก รายละเอียดผิด ชี้บรรทัด บอกสิ่งที่ต้องการ สั่งแก้เฉพาะจุด
- **ถอยแล้วสั่งใหม่** — รูปทรงผิดตั้งแต่ต้น `git restore .` แล้วเขียน prompt ใหม่ให้ชัดกว่าเดิม ไล่แก้ของที่รูปทรงผิดคือวิธีทำให้ไฟล์ 20 บรรทัดกลายเป็น 200
- **เขียนเอง** — อธิบาย 3 ครั้งแล้วยังไม่ได้ หรือโค้ดสั้นกว่าคำอธิบาย เวลาที่เสียไปกับการอธิบายมากกว่าเวลาพิมพ์เมื่อไหร่ ให้พิมพ์

Section 3 — **สัญญาณอันตราย**: diff ยาวเกินกว่าจะอ่านไหว, เทสต์ผ่านแต่คุณอธิบายไม่ได้ว่าทำไม, และการยอมรับโค้ดเพราะ "มันก็รันได้" — each with what to do instead.

Close with a `<blockquote>`: 🚨 ทักษะที่แยกคนใช้ AI เป็นกับไม่เป็น ไม่ใช่การเขียน prompt ที่เก่งกว่า แต่คือการรู้ว่าเมื่อไหร่ควรเลิกใช้มันแล้วลงมือเอง.

Nav: 29 ↔ 28 / 30.

- [ ] **Step 2: Run the checker**

```bash
python3 <SCRATCH>/check_lessons.py
```

Expected: `OK`, exit 0.

- [ ] **Step 3: Commit**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content/29_when_ai_gets_it_wrong.html
git commit -m "content: add AI e-commerce lesson 29 when the AI gets it wrong"
```

---

### Task 13: Lessons 30–33 — Testing

**Files:**
- Create: `30_test_setup.html`, `31_unit_tests.html`, `32_hook_tests.html`, `33_integration_tests.html`
- Read: originals `26_test_setup.html` … `29_integration_tests.html`
- Read: `<SCRATCH>/ecommerce-app/src/test/**`, all `*.test.ts(x)` files, `vite.config.ts`

**Interfaces:**
- Consumes: every module built in Tasks 6–11.
- Produces: the finished test suite; `npm run test` passing is lesson 35's precondition.

- [ ] **Step 1: Write lesson 30 following the production recipe**

Vitest/jsdom/RTL/jest-dom/user-event/MSW install, `vite.config.ts` test block, `src/test/setup.ts`, MSW server/handlers/fixtures, `renderRoute.tsx`, `utils.tsx`, npm scripts. `AI มักพลาดตรงนี้`: MSW v1 syntax (`rest.get`) instead of v2 (`http.get` + `HttpResponse`).

Nav: 30 ↔ 29 / 31.

- [ ] **Step 2: Write lesson 31 following the production recipe**

✍️ block (required): the first `describe` block of `price.utils.test.ts`, reason `ต้องเขียนเทสต์เองให้เป็นก่อน ถึงจะตรวจเทสต์ของ AI ออก`. AI writes the remaining unit tests (pagination.utils, cartReducer, cartStorage, schema, client).

This lesson carries the course's sharpest warning about delegation — put it in a `<blockquote>`: เทสต์เป็นที่เดียวที่ AI ทำให้คุณ "รู้สึกปลอดภัย" ได้โดยที่ไม่ได้ปลอดภัยจริง เทสต์ที่ assert ว่าฟังก์ชันคืนค่าเท่ากับสิ่งที่ฟังก์ชันคืน คือเทสต์ที่ผ่านเสมอและไม่ได้พิสูจน์อะไรเลย. Checklist: every test must be able to fail — students verify by breaking the implementation on purpose and watching it go red.

Nav: 31 ↔ 30 / 32.

- [ ] **Step 3: Write lesson 32 following the production recipe**

`queries.test.tsx` (renderHook + MSW), `useCheckout.test.tsx`. `AI มักพลาดตรงนี้`: asserting on the loading state and never awaiting the resolved data, so the test passes before the query settles.

Nav: 32 ↔ 31 / 33.

- [ ] **Step 4: Write lesson 33 following the production recipe**

✍️ block (required): one full `Cart.test.tsx` case, reason `integration test คือที่ที่ AI เขียน "ผ่านแต่ไม่ได้พิสูจน์อะไร" ได้ง่ายที่สุด`. AI writes the Home, Category, and Checkout page tests.

`AI มักพลาดตรงนี้`: querying by CSS class or test id instead of by role/text, so the test passes even when the UI is unusable.

Nav: 33 ↔ 32 / 34.

- [ ] **Step 5: Run the checker**

```bash
python3 <SCRATCH>/check_lessons.py
```

Expected: `OK`, exit 0.

- [ ] **Step 6: Commit**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content/3[0-3]_*.html
git commit -m "content: add AI e-commerce lessons 30-33 testing"
```

---

### Task 14: Lessons 34–35 — Wrap Up

**Files:**
- Create: `34_ai_code_review.html`, `35_wrap_up.html`
- Read: original `30_wrap_up.html`

**Interfaces:**
- Consumes: the finished app and test suite.
- Produces: nothing downstream — this closes the course.

- [ ] **Step 1: Write `34_ai_code_review.html`** (⭐ new, not adapted)

Frame: ตลอดคอร์สเราใช้ AI เขียน บทนี้เราใช้มัน<em>อ่าน</em> — ซึ่งเป็นงานที่มันเก่งกว่าและปลอดภัยกว่า เพราะผลลัพธ์คือข้อสังเกต ไม่ใช่โค้ดที่ถูก commit ไปแล้ว.

Sections:

- สี่ prompt สำหรับตรวจโปรเจกต์ตัวเอง, each shown in full in a `language-text` block with `@Codebase` or a folder mention:
  1. หา logic ที่ซ้ำกันข้ามไฟล์ พร้อมเสนอว่าควรย้ายไป `shared/` ตัวไหน
  2. ไล่ทุกจุดที่เรียก API แล้วบอกว่าจุดไหนไม่มี loading หรือ error state
  3. ตรวจ accessibility: ปุ่มที่ไม่มีชื่อ, ภาพที่ไม่มี alt, ฟอร์มที่ไม่มี label ผูกกับ input
  4. อ่านไฟล์เทสต์ทั้งหมดแล้วบอกว่าเทสต์ไหน "ผ่านเสมอ" ไม่ว่าโค้ดจะถูกหรือผิด
- วิธีอ่านผลลัพธ์ — ทุกข้อที่ AI เสนอคือ<em>สมมติฐาน</em> ต้องเปิดไฟล์ยืนยันเองก่อนแก้ และแก้ทีละข้อพร้อม commit แยก ไม่ใช่สั่งให้แก้รวดเดียวทั้งรายการ
- ข้อจำกัดที่ต้องรู้ — AI บอกได้ว่าโค้ด<em>สอดคล้องกันเองไหม</em> แต่บอกไม่ได้ว่า<em>สิ่งที่สร้างถูกต้องหรือเปล่า</em>: ว่ายอดรวมควรคิด VAT ไหม, ว่าค่าส่งควรฟรีเมื่อไหร่, ว่าฟีเจอร์นี้ควรมีอยู่หรือไม่ — สามคำถามนี้ไม่มีอยู่ในโค้ด

Nav: 34 ↔ 33 / 35.

- [ ] **Step 2: Write `35_wrap_up.html`**

Carry over the original wrap-up (typecheck/lint/test/build/preview, SPA deploy notes, recap, next steps), then add two sections:

- **ทักษะที่คุณได้จริง ๆ** — separate what the student can now do without AI (อ่าน diff แล้วบอกได้ว่าอะไรผิด, ออกแบบ cache key, เขียน reducer และ schema, เขียนเทสต์ที่ล้มเป็น) from what they can do faster with it (ประกอบ component ตามแบบ, เขียนไฟล์ที่สี่ที่หน้าตาเหมือนสามไฟล์แรก, ตรวจงานตัวเอง).
- **เรียนต่ออย่างไรไม่ให้ทักษะฝ่อ** — one concrete habit: ก่อนส่ง prompt ให้เดาก่อนว่าโค้ดที่ได้ควรหน้าตาอย่างไร แล้วค่อยเทียบกับของจริง ถ้าเดาไม่ออก แปลว่าบทนั้นยังไม่แน่นพอ — กลับไปอ่านก่อน. Plus: try building one small feature entirely without AI to see where the gaps are.

Nav: `34_ai_code_review.html` / `index.html` / `<span></span>`.

- [ ] **Step 3: Run the checker**

```bash
python3 <SCRATCH>/check_lessons.py
```

Expected: 35 files, `OK`, exit 0.

- [ ] **Step 4: Commit**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content/3[45]_*.html
git commit -m "content: add AI e-commerce lessons 34-35 wrap up"
```

---

### Task 15: Full-course verification pass

**Files:**
- Modify: any lesson file that fails a check
- Read: all 35 lessons

**Interfaces:**
- Consumes: everything.
- Produces: a course that passes structural and editorial review.

- [ ] **Step 1: Run the structural checker on the complete set**

```bash
python3 <SCRATCH>/check_lessons.py --final
```

Expected: `checked 35 lesson file(s)` then `OK`, exit 0. Fix any failure and re-run until clean.

- [ ] **Step 2: Verify no stale references to the original course's numbering**

```bash
grep -rnE 'บทที่ (0[1-9]|[12][0-9]|30)|บทเรียน (0[1-9]|[12][0-9]|3[0-5])' \
  Week_05_06/03_react_ecommerce_ai_project/content/*.html | grep -v 'lesson-eyebrow'
```

Every cross-reference in the prose must point at the **new** lesson number. Check each hit against the Lesson inventory table — the adapted lessons inherited sentences like "เราจะทำในบทที่ 20" that referred to the old numbering. Fix them.

- [ ] **Step 3: Verify the no-AI zones are real**

```bash
grep -l 'lesson-manual' Week_05_06/03_react_ecommerce_ai_project/content/*.html
```

Expected: exactly the ten files for lessons 05, 09, 12, 15, 17, 22, 25, 28, 31, 33. Open each and confirm the block names the code from the No-AI zone table and states a reason.

- [ ] **Step 4: Verify code fidelity against the reference repo**

Spot-check at least eight code blocks against `<SCRATCH>/ecommerce-app`, covering different tasks: `cartReducer.ts` (lesson 22), `queries.ts` (17), `client.ts` (15), `schema.ts` (25), `useCheckout.ts` (28), `router.tsx` (09), `providers.tsx` (11), `price.utils.ts` (18). Any divergence from the repo is a bug in the lesson, not in the repo.

- [ ] **Step 5: Verify the original course is untouched**

```bash
git status --porcelain Week_05_06/02_react_ecommerce_project
```

Expected: empty output.

- [ ] **Step 6: Open the course in a browser**

```bash
open Week_05_06/03_react_ecommerce_ai_project/content/index.html
```

Click through at least lessons 01 → 09 → 22 → 29 → 35 using only the nav links. Confirm the three new blockquote variants are visually distinct and that no code block overflows the page.

- [ ] **Step 7: Commit any fixes**

```bash
git add Week_05_06/03_react_ecommerce_ai_project/content
git commit -m "content: fix cross-references and structure in AI e-commerce course"
```

- [ ] **Step 8: Merge the worktree branch**

```bash
cd /Users/varis/Sites/varis-lab/frontend-bootcamp-content-7-july-2026
git merge --no-ff week0506-ecommerce-ai-course
git worktree remove ../frontend-bootcamp-ai-course
git branch -d week0506-ecommerce-ai-course
```

If `main` moved while the course was being written, rebase the branch onto it before merging.
