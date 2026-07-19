# W03.01 JavaScript Classroom HTML Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, projector-friendly, self-contained HTML lesson from `01_what_is_javascript.md` without losing any source information.

**Architecture:** Create one semantic HTML document with embedded CSS for classroom, print, and mobile layouts, plus embedded progressive-enhancement JavaScript for the live demo, reading progress, and active navigation. Add a small Python standard-library verifier that checks content coverage and structural expectations without project dependencies.

**Tech Stack:** HTML5, embedded CSS, vanilla JavaScript, Python 3 standard library, browser DevTools

## Global Constraints

- Output: `Week_03/01_basic_javaScript/content/01_what_is_javascript.html`.
- Preserve every source teaching point in the same teaching order.
- Work offline with no external fonts, libraries, images, or network requests.
- Remain understandable when JavaScript is disabled.
- Support projection, desktop, mobile, keyboard navigation, reduced motion, and printing.
- Keep instructor answers in the document and show them when printed.
- Add no framework, build pipeline, analytics, or unrelated lesson content.

---

### Task 1: Add executable lesson-page acceptance checks

**Files:**
- Create: `Week_03/01_basic_javaScript/content/verify_01_what_is_javascript.py`
- Read: `Week_03/01_basic_javaScript/content/01_what_is_javascript.md`
- Test: `Week_03/01_basic_javaScript/content/verify_01_what_is_javascript.py`

**Interfaces:**
- Consumes: Markdown and HTML paths resolved beside the verifier
- Produces: exit code `0` and `Lesson HTML verification passed.` when checks pass; assertion failure otherwise

- [ ] **Step 1: Write the failing verifier**

Use `html.parser.HTMLParser`. Assert that the output exists; contains all source headings, platform/runtime names, code examples, semantic landmarks, disclosure elements, live-demo hooks, print rules, and reduced-motion rules; has unique IDs; and has a real target for every fragment link. Required fragments include:

```python
required_fragments = [
    "เป้าหมายของคลาส", "โครงสร้างคลาส 60 นาที", "Opening Script",
    "JavaScript ทำอะไรให้เว็บไซต์ได้บ้าง?", "JavaScript ใช้งานได้ที่ไหนบ้าง?",
    "Browser / Frontend", "Server / Backend", "Desktop application",
    "Mobile application", "JavaScript เป็น Scripting Language หมายความว่าอย่างไร?",
    "ทำไม JavaScript จึงเหมาะกับการเริ่มเขียนโปรแกรมบนเว็บ?",
    "กิจกรรม 5 นาที: มองหา JavaScript รอบตัว", "คำถามเช็กความเข้าใจ",
    "คำตอบที่ผู้สอนควรได้ยินโดยประมาณ", "สรุปก่อนจบคลาส",
    "สะพานไปยังบทถัดไป", "welcomeButton", "document.querySelector",
    "console.log", "Node.js", "Bun", "Deno", "Electron", "Tauri",
    "React Native", "Ionic", "NativeScript", "JavaScript", "Java",
]
```

- [ ] **Step 2: Run the verifier and confirm the red state**

Run: `python3 Week_03/01_basic_javaScript/content/verify_01_what_is_javascript.py`

Expected: FAIL with `Missing 01_what_is_javascript.html`.

- [ ] **Step 3: Commit the acceptance check**

```bash
git add Week_03/01_basic_javaScript/content/verify_01_what_is_javascript.py
git commit -m "test: define JavaScript lesson HTML acceptance checks"
```

### Task 2: Build the complete semantic lesson document

**Files:**
- Create: `Week_03/01_basic_javaScript/content/01_what_is_javascript.html`
- Read: `Week_03/01_basic_javaScript/content/01_what_is_javascript.md`
- Test: `Week_03/01_basic_javaScript/content/verify_01_what_is_javascript.py`

**Interfaces:**
- Consumes: every heading, paragraph, quote, list, table row, and code block in the source
- Produces: section anchors plus `#welcomeButton`, `#message`, `#readingProgress`, and `[data-nav-link]` script hooks

- [ ] **Step 1: Create semantic content in source order**

Create one complete HTML5 document. Use `#top` for the hero, `#lesson` for the main landmark, and these section IDs in this order: `#schedule`, `#opening`, `#browser`, `#platforms`, `#scripting`, `#why-javascript`, `#activity`, `#check`, and `#summary`. The sticky navigation must target each of those IDs. Copy every corresponding source paragraph, quote, table row, list item, teaching caution, and code block into the appropriate section without shortening it.

Place `#readingProgress` before the skip link, put the skip link before `#top`, and end with a footer containing `W03.01 · Basic JavaScript`. Use blockquotes for spoken scripts, `pre > code` for all code, real lists and a real table, and labeled teaching-note asides. Use `details > summary` for approximate answers. Do not omit or paraphrase away source details.

- [ ] **Step 2: Run the verifier to expose remaining presentation requirements**

Run: `python3 Week_03/01_basic_javaScript/content/verify_01_what_is_javascript.py`

Expected: FAIL until styles, print/reduced-motion rules, disclosure markup, anchors, and all content are complete.

### Task 3: Apply the classroom visual system and enhancement behavior

**Files:**
- Modify: `Week_03/01_basic_javaScript/content/01_what_is_javascript.html`
- Test: `Week_03/01_basic_javaScript/content/verify_01_what_is_javascript.py`

**Interfaces:**
- Consumes: Task 2 DOM hooks
- Produces: responsive styling; a live demo that says `ยินดีต้อนรับสู่ JavaScript!`; scroll progress; active navigation

- [ ] **Step 1: Add embedded classroom CSS**

Start from the approved exact tokens:

```css
:root {
  --ink: #14213d;
  --paper: #f8fafc;
  --surface: #ffffff;
  --action: #2563eb;
  --signal: #f7df1e;
  --muted: #64748b;
}
```

Implement the teaching-board layout, Thai-capable system fonts, projector-scale type, sticky navigation, content cards, live role panel, labeled notes, code surfaces, visible focus, mobile stacking, contained overflow, reduced motion, and print rules. Print must hide navigation/progress/demo controls and reveal disclosure content.

- [ ] **Step 2: Add embedded progressive enhancement**

Use the lesson's code verbatim for the primary demo:

```js
const button = document.querySelector("#welcomeButton")
const message = document.querySelector("#message")

button.addEventListener("click", () => {
  message.textContent = "ยินดีต้อนรับสู่ JavaScript!"
})
```

Also update `#readingProgress` from the scroll ratio and use `IntersectionObserver` to apply `aria-current="true"` to the active navigation link. Guard optional enhancement APIs.

- [ ] **Step 3: Reach the automated green state**

Run: `python3 Week_03/01_basic_javaScript/content/verify_01_what_is_javascript.py`

Expected: `Lesson HTML verification passed.`

- [ ] **Step 4: Check dependency and diff hygiene**

Run: `git diff --check`

Run: `rg -n 'https?://|<link|<script[^>]+src=' Week_03/01_basic_javaScript/content/01_what_is_javascript.html`

Expected: the diff check succeeds and `rg` returns no matches.

### Task 4: Visually verify and refine the classroom experience

**Files:**
- Modify if needed: `Week_03/01_basic_javaScript/content/01_what_is_javascript.html`
- Test: `Week_03/01_basic_javaScript/content/verify_01_what_is_javascript.py`

**Interfaces:**
- Consumes: the complete page from Task 3
- Produces: verified projector, mobile, interaction, and print behavior

- [ ] **Step 1: Serve the page locally**

Run: `python3 -m http.server 8000`

Expected: the lesson loads at `/Week_03/01_basic_javaScript/content/01_what_is_javascript.html`.

- [ ] **Step 2: Inspect desktop/projector rendering**

At approximately `1440 × 900`, check Thai rendering, sticky navigation, line lengths, schedule, demo, code overflow, focus, disclosures, and section rhythm. Correct clipping, weak contrast, or crowding.

- [ ] **Step 3: Inspect mobile rendering**

At approximately `390 × 844`, check stacking, touch targets, contained table/code overflow, no page-level horizontal scroll, and readable type. Correct any failures.

- [ ] **Step 4: Inspect print output**

Emulate print media. Navigation, progress, and demo controls must disappear; lesson text and instructor answers must remain visible.

- [ ] **Step 5: Run final verification and commit**

Run: `python3 Week_03/01_basic_javaScript/content/verify_01_what_is_javascript.py`

Run: `git diff --check`

Run: `git status --short`

Expected: verifier passes, diff check is clean, and only intended plan, verifier, and lesson files are listed.

```bash
git add Week_03/01_basic_javaScript/content/01_what_is_javascript.html Week_03/01_basic_javaScript/content/verify_01_what_is_javascript.py docs/superpowers/plans/2026-07-19-week-03-javascript-classroom-html.md
git commit -m "feat: add JavaScript classroom lesson page"
```
