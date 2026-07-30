# Async JavaScript & API Lessons — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Insert two lessons teaching Promises, `async`/`await`, and `fetch` before the Effects lesson, so students meet `useEffect` already knowing how to talk to an API.

**Architecture:** The React course in `Week_04/02_complete_intro_to_react/content/` is a flat set of numbered, self-contained HTML lessons chained by `rel="prev"`/`rel="next"` links and indexed by `index.html`. Two new lessons take slots 11 and 12; every existing lesson from 11 up shifts by +2. Because the lesson number is hard-coded in each file's `.lesson-eyebrow`, the shift is a scripted edit, not just a rename. A structural verifier script gates every task.

**Tech Stack:** Static HTML + `lesson.css`, Thai prose with English technical terms. Python 3 (stdlib only) for the renumber and verify scripts. `git mv` for renames.

**Spec:** `docs/superpowers/specs/2026-07-30-async-api-lessons-design.md`

## Global Constraints

- Content directory: `Week_04/02_complete_intro_to_react/content/`. All paths below are relative to the repo root.
- Every lesson file: `<!DOCTYPE html>`, `<html lang="th">`, UTF-8 + viewport meta, Thai `<meta name="description">`, `<title>English | เรียน React เริ่มต้น</title>`, `<link rel="stylesheet" href="lesson.css" />`.
- Body shape: `<body><main><article class="lesson">` … `</article></main></body>`.
- Header shape: `<header class="lesson-header">` containing `<p class="lesson-eyebrow">บทเรียน NN · CHAPTER</p>`, a Thai `<h1>`, and `<p class="lesson-original-title" lang="en">English Title</p>`. `NN` is zero-padded and **must** match the filename.
- Footer shape: `<nav class="lesson-navigation" aria-label="การนำทางบทเรียน">` with a `rel="prev"` link, an `index.html` link labelled `สารบัญบทเรียน`, and a `rel="next"` link.
- Code blocks: `<pre><code class="language-javascript">` (also `typescript`, `tsx`, `bash`). `<`, `>`, and `&` **must** be HTML-escaped as `&lt;`, `&gt;`, `&amp;`.
- Asides use `<p class="translator-note">`; prerequisites and warnings use `<blockquote>`.
- Prose in Thai. Technical terms (`Promise`, `fetch`, `async`, `await`, `Response`, `status code`, `callback`) stay in English, matching every existing lesson.
- Continuation chapter label, used verbatim for lessons 13–17: `แนวคิดหลักของ React ภาค 2 (Core React Concepts, cont.)`
- New chapter label, used verbatim for lessons 11–12: `JavaScript แบบ Async และการเรียก API (Async JavaScript & APIs)`
- Do not modify anything under `Week_03/`. Do not add npm dependencies.

---

### Task 1: Structural verifier

Adds the script that gates every later task. It derives all expectations from the files themselves, so it stays valid before and after the insertion.

**Files:**
- Create: `Week_04/02_complete_intro_to_react/verify_lessons.py`

**Interfaces:**
- Consumes: nothing.
- Produces: `python3 Week_04/02_complete_intro_to_react/verify_lessons.py` — exit 0 when the lesson set is structurally sound, exit 1 otherwise, printing one `FAIL:` line per problem. Every later task runs this.

- [ ] **Step 1: Write the verifier**

Create `Week_04/02_complete_intro_to_react/verify_lessons.py`:

```python
#!/usr/bin/env python3
"""Structural checks for the Complete Intro to React lesson set.

Derives every expectation from the files themselves, so it is equally valid
before and after lessons are inserted or renumbered.

Usage: python3 verify_lessons.py
Exit code 0 = all checks pass.
"""
import re
import sys
from pathlib import Path

CONTENT = Path(__file__).resolve().parent / "content"


def main():
    errors = []
    lessons = sorted(CONTENT.glob("[0-9][0-9]_*.html"))
    if not lessons:
        print(f"FAIL: no lesson files found in {CONTENT}")
        return 1
    numbers = [int(p.name[:2]) for p in lessons]

    # 1. Lesson numbers run 1..N with no gaps and no duplicates.
    expected = list(range(1, len(lessons) + 1))
    if numbers != expected:
        errors.append(f"lesson numbers are not contiguous 1..{len(lessons)}: {numbers}")

    # 2. Every local .html link resolves to a file that exists.
    for p in lessons + [CONTENT / "index.html"]:
        html = p.read_text(encoding="utf-8")
        for href in re.findall(r'href="([^"#:]+\.html)"', html):
            if not (CONTENT / href).exists():
                errors.append(f"{p.name}: broken link -> {href}")

    # 3. The lesson number in .lesson-eyebrow matches the filename.
    for p in lessons:
        html = p.read_text(encoding="utf-8")
        m = re.search(r'class="lesson-eyebrow">บทเรียน\s*(\d+)', html)
        if not m:
            errors.append(f"{p.name}: no .lesson-eyebrow lesson number found")
        elif int(m.group(1)) != int(p.name[:2]):
            errors.append(
                f"{p.name}: eyebrow says lesson {m.group(1)}, filename says {p.name[:2]}"
            )

    # 4. prev/next form one unbroken chain across the whole course.
    for i, p in enumerate(lessons):
        html = p.read_text(encoding="utf-8")
        prev = re.search(r'href="([^"]+)" rel="prev"', html)
        nxt = re.search(r'href="([^"]+)" rel="next"', html)
        got_prev = prev.group(1) if prev else None
        got_next = nxt.group(1) if nxt else None
        want_prev = lessons[i - 1].name if i > 0 else None
        want_next = lessons[i + 1].name if i < len(lessons) - 1 else None
        if got_prev != want_prev:
            errors.append(f"{p.name}: rel=prev is {got_prev!r}, expected {want_prev!r}")
        if got_next != want_next:
            errors.append(f"{p.name}: rel=next is {got_next!r}, expected {want_next!r}")

    # 5. index.html links every lesson exactly once, in order.
    index = (CONTENT / "index.html").read_text(encoding="utf-8")
    linked = re.findall(r'href="([0-9][0-9]_[^"]+\.html)"', index)
    want = [p.name for p in lessons]
    if linked != want:
        missing = [n for n in want if n not in linked]
        extra = [n for n in linked if n not in want]
        detail = []
        if missing:
            detail.append(f"missing {missing}")
        if extra:
            detail.append(f"unexpected {extra}")
        if not detail:
            detail.append("listed out of order")
        errors.append("index.html: " + ", ".join(detail))

    for e in errors:
        print("FAIL:", e)
    print(f"\n{len(lessons)} lessons checked, {len(errors)} problem(s).")
    return 1 if errors else 0


sys.exit(main())
```

- [ ] **Step 2: Run it against the current tree to confirm a green baseline**

Run: `python3 Week_04/02_complete_intro_to_react/verify_lessons.py`

Expected, exactly:

```
34 lessons checked, 0 problem(s).
```

Exit code 0. If this does not pass, stop — the tree is not in the state this plan assumes.

- [ ] **Step 3: Commit**

```bash
git add Week_04/02_complete_intro_to_react/verify_lessons.py
git commit -m "chore: add structural verifier for React lesson set"
```

---

### Task 2: Shift lessons 11–34 to 13–36

Pure mechanical renumbering. No new lesson content. Ends deliberately red: the verifier reports the 11/12 gap, which Tasks 3 and 4 fill.

**Files:**
- Create: `Week_04/02_complete_intro_to_react/renumber.py` (deleted again in Step 6)
- Rename: all 24 files `11_effects.html` … `34_congrats.html` → `13_effects.html` … `36_congrats.html`
- Modify: `Week_04/02_complete_intro_to_react/content/10_hooks.html` (next link)
- Modify: `Week_04/02_complete_intro_to_react/content/index.html` (chapter cards)

**Interfaces:**
- Consumes: `verify_lessons.py` from Task 1.
- Produces: lesson slots 11 and 12 empty and reserved; `10_hooks.html` links forward to `11_async_javascript.html`; `13_effects.html` links back to `12_fetch_and_apis.html`. Tasks 3 and 4 create exactly those two filenames.

- [ ] **Step 1: Write the renumber script**

Create `Week_04/02_complete_intro_to_react/renumber.py`:

```python
#!/usr/bin/env python3
"""One-shot: shift lessons 11..34 up by 2 to make room for the async/API lessons.

Renames files, rewrites every cross-link (including the ones in index.html),
fixes the lesson number in each .lesson-eyebrow, and relabels lessons 13-17
into the continuation chapter. Does not create the new lessons and does not
restructure index.html's chapter cards.

Usage: python3 renumber.py <content-dir> [--no-git]
"""
import re
import subprocess
import sys
from pathlib import Path

SHIFT = 2
FIRST = 11
LAST = 34
CONT_CHAPTER = range(13, 18)  # post-shift numbers that move to "ภาค 2"
OLD_LABEL = "แนวคิดหลักของ React (Core React Concepts)"
NEW_LABEL = "แนวคิดหลักของ React ภาค 2 (Core React Concepts, cont.)"


def main(content: Path, use_git: bool) -> int:
    mapping = {}
    for n in range(LAST, FIRST - 1, -1):
        matches = list(content.glob(f"{n:02d}_*.html"))
        if len(matches) != 1:
            print(f"ERROR: expected exactly one file for lesson {n}, got {matches}")
            return 1
        old = matches[0]
        new = content / f"{n + SHIFT:02d}_{old.name.split('_', 1)[1]}"
        mapping[old.name] = new.name
        if use_git:
            subprocess.run(
                ["git", "mv", old.name, new.name], cwd=content, check=True
            )
        else:
            old.rename(new)

    # Rewrite links in every html file, including ones that were not renamed.
    # Slugs are part of each filename, so no old name is a prefix of another
    # new name and replacement order does not matter.
    for path in sorted(content.glob("*.html")):
        text = original = path.read_text(encoding="utf-8")
        for old_name, new_name in mapping.items():
            text = text.replace(f'href="{old_name}"', f'href="{new_name}"')

        # Fix the eyebrow number on files that were renamed.
        if path.name in mapping.values():
            num = int(path.name[:2])
            text = re.sub(
                r'(class="lesson-eyebrow">บทเรียน\s*)\d+',
                lambda m: f"{m.group(1)}{num:02d}",
                text,
                count=1,
            )
            if num in CONT_CHAPTER:
                text = text.replace(OLD_LABEL, NEW_LABEL, 1)

        if text != original:
            path.write_text(text, encoding="utf-8")
            print(f"updated {path.name}")

    print(f"\nrenamed {len(mapping)} lessons")
    return 0


if __name__ == "__main__":
    sys.exit(main(Path(sys.argv[1]).resolve(), "--no-git" not in sys.argv))
```

- [ ] **Step 2: Run it**

```bash
python3 Week_04/02_complete_intro_to_react/renumber.py \
        Week_04/02_complete_intro_to_react/content
```

Expected: a list of `updated …` lines ending with `renamed 24 lessons`.

Confirm the boundaries — run:

```bash
ls Week_04/02_complete_intro_to_react/content | head -14
```

Expected: `01_intro.html` … `10_hooks.html`, then `13_effects.html`, `14_dev_tools.html` — no 11 or 12, and `36_congrats.html` is now the last lesson.

- [ ] **Step 3: Point `10_hooks.html` at the new lesson 11**

In `Week_04/02_complete_intro_to_react/content/10_hooks.html`, the `rel="next"` link still points at `13_effects.html` (the script rewrote it during the rename). Replace that line:

```html
          <a href="13_effects.html" rel="next">ถัดไป: Effects</a>
```

with:

```html
          <a href="11_async_javascript.html" rel="next">ถัดไป: Async JavaScript</a>
```

- [ ] **Step 4: Point `13_effects.html` back at the new lesson 12**

In `Week_04/02_complete_intro_to_react/content/13_effects.html`, replace:

```html
          <a href="10_hooks.html" rel="prev">ก่อนหน้า: Hooks</a>
```

with:

```html
          <a href="12_fetch_and_apis.html" rel="prev">ก่อนหน้า: Fetch & APIs</a>
```

- [ ] **Step 5: Restructure the chapter cards in `index.html`**

In `Week_04/02_complete_intro_to_react/content/index.html`, replace the single chapter-4 `<section class="chapter-card">` block (the one titled `4. แนวคิดหลักของ React — Core React Concepts`, currently listing lessons 9 through 17 after the rename) with these three cards:

```html
        <section class="chapter-card">
          <h2>4. แนวคิดหลักของ React — Core React Concepts</h2>
          <ol start="9">
            <li><a href="09_jsx.html">การเขียน UI ด้วย JSX — JSX</a></li>
            <li><a href="10_hooks.html">การจัดการ State ด้วย Hooks — Hooks</a></li>
          </ol>
        </section>

        <section class="chapter-card">
          <h2>5. JavaScript แบบ Async และการเรียก API — Async JavaScript &amp; APIs</h2>
          <ol start="11">
            <li><a href="11_async_javascript.html">JavaScript แบบ Async — Async JavaScript</a></li>
            <li><a href="12_fetch_and_apis.html">เรียก API ด้วย fetch — Fetch &amp; APIs</a></li>
          </ol>
        </section>

        <section class="chapter-card">
          <h2>6. แนวคิดหลักของ React ภาค 2 — Core React Concepts (cont.)</h2>
          <ol start="13">
            <li><a href="13_effects.html">เอฟเฟกต์ — Effects</a></li>
            <li><a href="14_dev_tools.html">เครื่องมือสำหรับนักพัฒนา — Dev Tools</a></li>
            <li><a href="15_custom_hooks.html">การสร้าง Custom Hooks — Custom Hooks</a></li>
            <li><a href="16_handling_user_inputs.html">การจัดการข้อมูลที่ผู้ใช้ป้อน — Handling User Inputs</a></li>
            <li><a href="17_context.html">การแชร์ State ด้วย Context — Context</a></li>
          </ol>
        </section>
```

Then renumber the headings of the five cards that follow, and fix each `<ol start="…">`:

| Old heading | New heading | `start` |
| --- | --- | --- |
| `5. ระบบนิเวศ — Ecosystem` | `7. ระบบนิเวศ — Ecosystem` | `18` |
| `6. React ขั้นสูง — Advanced React` | `8. React ขั้นสูง — Advanced React` | `20` |
| `7. การทดสอบ — Testing` | `9. การทดสอบ — Testing` | `23` |
| `8. ก้าวต่อไป — What's Next` | `10. ก้าวต่อไป — What's Next` | `31` |
| `9. สรุปบทเรียน — Wrap Up` | `11. สรุปบทเรียน — Wrap Up` | `36` |

The `<li><a href="…">` entries inside those five cards already have correct filenames — the script rewrote them. Only the `<h2>` numbers and `start` attributes change.

- [ ] **Step 6: Delete the one-shot script**

```bash
rm Week_04/02_complete_intro_to_react/renumber.py
```

- [ ] **Step 7: Run the verifier — expect exactly one failure**

Run: `python3 Week_04/02_complete_intro_to_react/verify_lessons.py`

Expected, exactly:

```
FAIL: lesson numbers are not contiguous 1..34: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
FAIL: 10_hooks.html: broken link -> 11_async_javascript.html
FAIL: 13_effects.html: broken link -> 12_fetch_and_apis.html
FAIL: index.html: broken link -> 11_async_javascript.html
FAIL: index.html: broken link -> 12_fetch_and_apis.html
FAIL: 10_hooks.html: rel=next is '11_async_javascript.html', expected '13_effects.html'
FAIL: 13_effects.html: rel=prev is '12_fetch_and_apis.html', expected '10_hooks.html'
FAIL: index.html: unexpected ['11_async_javascript.html', '12_fetch_and_apis.html']

34 lessons checked, 8 problem(s).
```

Every one of these is a dangling reference to a file Task 3 or Task 4 creates. If any *other* failure appears — a wrong eyebrow number, a broken link to a file that is not one of those two — stop and fix it before continuing.

- [ ] **Step 8: Commit**

```bash
git add -A Week_04/02_complete_intro_to_react/
git commit -m "refactor: shift React lessons 11-34 to 13-36 to make room for async lessons"
```

---

### Task 3: Lesson 11 — Async JavaScript

Pure JavaScript, no React. Every snippet runs in the browser DevTools console.

**Files:**
- Create: `Week_04/02_complete_intro_to_react/content/11_async_javascript.html`

**Interfaces:**
- Consumes: empty lesson slot 11 from Task 2; `10_hooks.html` already links here.
- Produces: file `11_async_javascript.html`, `rel="prev"` → `10_hooks.html`, `rel="next"` → `12_fetch_and_apis.html` (created in Task 4). Defines the `wait(ms)` helper that lesson 13 leans on.

- [ ] **Step 1: Create the file skeleton**

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="ทำความเข้าใจ Promise, async/await และการทำงานแบบ asynchronous ใน JavaScript" />
    <title>Async JavaScript | เรียน React เริ่มต้น</title>
    <link rel="stylesheet" href="lesson.css" />
  </head>
  <body>
    <main>
      <article class="lesson">
        <header class="lesson-header">
          <p class="lesson-eyebrow">บทเรียน 11 · JavaScript แบบ Async และการเรียก API (Async JavaScript &amp; APIs)</p>
          <h1>JavaScript แบบ Async</h1>
          <p class="lesson-original-title" lang="en">Async JavaScript</p>
        </header>

        <h2>Async JavaScript</h2>

        <!-- sections from Steps 2-7 go here -->

        <nav class="lesson-navigation" aria-label="การนำทางบทเรียน">
          <a href="10_hooks.html" rel="prev">ก่อนหน้า: Hooks</a>
          <a href="index.html">สารบัญบทเรียน</a>
          <a href="12_fetch_and_apis.html" rel="next">ถัดไป: Fetch &amp; APIs</a>
        </nav>
      </article>
    </main>
  </body>
</html>
```

- [ ] **Step 2: Section — ทำไมต้อง async**

Opening paragraph: up to now every line of JavaScript they have written finished instantly. Fetching data from a server does not — it takes time, and that changes how code has to be written.

Then a `<blockquote>` telling them to open the app at `http://localhost:5173`, open DevTools, and go to the Console tab — every snippet in this lesson is pasted there. Reference back to Week 3 lesson 31 (`31_devtools_basics.html`) as where they learned the console.

Explain that JavaScript runs one thing at a time, on one thread, and that a slow synchronous task freezes everything including the UI. Demo it:

```html
<pre><code class="language-javascript">// พิมพ์ลงใน console แล้วลองกดปุ่มหรือ scroll หน้าเว็บระหว่างที่มันทำงาน
console.log("เริ่ม");
const start = Date.now();
while (Date.now() - start &lt; 3000) {
  // วนเปล่า ๆ 3 วินาที
}
console.log("จบ");
</code></pre>
```

Point out the page is completely frozen for those 3 seconds. Then the contrast:

```html
<pre><code class="language-javascript">console.log("เริ่ม");
setTimeout(() =&gt; {
  console.log("ผ่านไป 3 วินาที");
}, 3000);
console.log("จบ");
</code></pre>
```

Ask them to predict the output order before running. Result is `เริ่ม`, `จบ`, then `ผ่านไป 3 วินาที` — and the page stays responsive throughout. That gap between "the code that starts the work" and "the code that handles the result" is what the rest of the lesson is about. Note that the arrow function handed to `setTimeout` is a **callback** — they already met callbacks in Week 3 with `addEventListener` and array methods; this is the same idea applied to time.

- [ ] **Step 3: Section — Promise**

`<h3>Promise: ใบเสร็จที่ยังรับของไม่ได้</h3>`

A `Promise` is an object representing a result that is not ready yet — like a receipt from a restaurant. You get it immediately; the food comes later. Three states, and the transition happens **once** and is permanent:

- `pending` — still waiting
- `fulfilled` — succeeded, has a value
- `rejected` — failed, has an error

Build one by hand:

```html
<pre><code class="language-javascript">const wait = (ms) =&gt; new Promise((resolve) =&gt; setTimeout(resolve, ms));

console.log(wait(2000)); // Promise { &lt;pending&gt; }
</code></pre>
```

Explain the shape: `new Promise` takes a function that receives `resolve` (call it when the work succeeds) and `reject` (call it when it fails). Here `setTimeout` calls `resolve` after `ms` milliseconds.

Add a `<p class="translator-note">` flagging that this exact `wait` pattern shows up again in the Effects lesson as a deliberate fake delay, so it is worth recognising.

Then a version that can fail, for use in Step 5:

```html
<pre><code class="language-javascript">function maybeFail() {
  return new Promise((resolve, reject) =&gt; {
    setTimeout(() =&gt; {
      if (Math.random() &gt; 0.5) {
        resolve("สำเร็จ!");
      } else {
        reject(new Error("พังซะแล้ว"));
      }
    }, 1000);
  });
}
</code></pre>
```

- [ ] **Step 4: Section — `.then()` และ `.catch()`**

`<h3>อ่านค่าจาก Promise ด้วย .then()</h3>`

You cannot read a Promise's value directly — you register what should happen when it arrives:

```html
<pre><code class="language-javascript">wait(2000).then(() =&gt; {
  console.log("ครบ 2 วินาทีแล้ว");
});

maybeFail()
  .then((message) =&gt; console.log("ได้ค่า:", message))
  .catch((error) =&gt; console.log("จับ error ได้:", error.message));
</code></pre>
```

Tell them to run `maybeFail` several times to see both branches. Then show chaining and why it gets unpleasant when steps depend on each other — three nested `.then()` calls drifting rightward. Keep this short; it exists only to motivate `async`/`await`.

- [ ] **Step 5: Section — `async` และ `await`**

`<h3>เขียนให้อ่านง่ายขึ้นด้วย async / await</h3>`

The same code, rewritten:

```html
<pre><code class="language-javascript">async function demo() {
  console.log("เริ่มรอ");
  await wait(2000);
  console.log("รอครบแล้ว");
}

demo();
</code></pre>
```

Three points to make explicit:

1. `await` may only appear inside an `async` function. (Note the console is a special case — it lets you `await` at the top level, which is why the snippets in the next lesson work when pasted directly.)
2. `await` pauses **only that function**, not the page. The rest of the app keeps running. This is the point that most often gets misunderstood.
3. An `async` function **always** returns a Promise, even when its body returns a plain value:

```html
<pre><code class="language-javascript">async function giveNumber() {
  return 42;
}

console.log(giveNumber()); // Promise { 42 } — ไม่ใช่ 42
console.log(await giveNumber()); // 42
</code></pre>
```

- [ ] **Step 6: Section — `try` / `catch`**

`<h3>จัดการ error ด้วย try / catch</h3>`

`try`/`catch` is the `await` counterpart of `.catch()`:

```html
<pre><code class="language-javascript">async function run() {
  try {
    const message = await maybeFail();
    console.log("ได้ค่า:", message);
  } catch (error) {
    console.log("จับ error ได้:", error.message);
  } finally {
    console.log("ทำงานเสมอ ไม่ว่าจะสำเร็จหรือพัง");
  }
}

run();
</code></pre>
```

Show what forgetting it looks like — call `maybeFail()` with a bare `await` and no `try`, and point at the red `Uncaught (in promise) Error` in the console. Mention `finally` as the natural place to turn off a loading flag, which is exactly what the Effects lesson does.

- [ ] **Step 7: Section — closing note about `useEffect`**

`<h3>เกร็ดที่จะได้ใช้ในบทถัดไป</h3>`

A `<p class="translator-note">` explaining: you cannot hand an `async` function directly to `useEffect`. `useEffect` expects its callback to return either nothing or a cleanup function, and an `async` function always returns a Promise — as just demonstrated. So the pattern is to declare a separate `async` function and call it from inside the effect:

```html
<pre><code class="language-javascript">// รูปแบบที่จะเจอในบทที่ 13
useEffect(() =&gt; {
  fetchSomething(); // เรียก async function ที่ประกาศแยกไว้
}, []);
</code></pre>
```

Close by saying the next lesson uses all of this against a real server.

- [ ] **Step 8: Run the verifier**

Run: `python3 Week_04/02_complete_intro_to_react/verify_lessons.py`

Expected: still red, but with **fewer** failures — the numbering gap is now only at 12, and the dangling references to `11_async_javascript.html` are gone. The remaining failures should all name `12_fetch_and_apis.html` or the 1..35 contiguity gap. Confirm no failure mentions `11_async_javascript.html` as broken or misnumbered.

- [ ] **Step 9: Check the HTML escaping**

Run:

```bash
grep -c '&lt;\|&gt;\|&amp;' Week_04/02_complete_intro_to_react/content/11_async_javascript.html
```

Expected: a non-zero count. Then open the file in a browser and confirm every code block renders `<`, `>`, and `&` as literal characters rather than swallowing them as tags.

- [ ] **Step 10: Commit**

```bash
git add Week_04/02_complete_intro_to_react/content/11_async_javascript.html
git commit -m "docs: add lesson 11 on async JavaScript, promises and await"
```

---

### Task 4: Lesson 12 — Fetch & APIs

Same console, now against the real pizza server from lesson 9. This task turns the verifier green.

**Files:**
- Create: `Week_04/02_complete_intro_to_react/content/12_fetch_and_apis.html`

**Interfaces:**
- Consumes: `wait`, `async`/`await`, and `try`/`catch` from Task 3; the running API server and Vite `/api` proxy configured in `09_jsx.html`.
- Produces: file `12_fetch_and_apis.html`, `rel="prev"` → `11_async_javascript.html`, `rel="next"` → `13_effects.html`. Completes the chain; verifier goes green.

- [ ] **Step 1: Create the file skeleton**

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="เรียกข้อมูลจาก API ด้วย fetch พร้อมจัดการ status code และ error" />
    <title>Fetch &amp; APIs | เรียน React เริ่มต้น</title>
    <link rel="stylesheet" href="lesson.css" />
  </head>
  <body>
    <main>
      <article class="lesson">
        <header class="lesson-header">
          <p class="lesson-eyebrow">บทเรียน 12 · JavaScript แบบ Async และการเรียก API (Async JavaScript &amp; APIs)</p>
          <h1>เรียก API ด้วย fetch</h1>
          <p class="lesson-original-title" lang="en">Fetch &amp; APIs</p>
        </header>

        <h2>Fetch &amp; APIs</h2>

        <!-- sections from Steps 2-7 go here -->

        <nav class="lesson-navigation" aria-label="การนำทางบทเรียน">
          <a href="11_async_javascript.html" rel="prev">ก่อนหน้า: Async JavaScript</a>
          <a href="index.html">สารบัญบทเรียน</a>
          <a href="13_effects.html" rel="next">ถัดไป: Effects</a>
        </nav>
      </article>
    </main>
  </body>
</html>
```

- [ ] **Step 2: Section — API และ HTTP คืออะไร**

Open with a `<blockquote>` stating the prerequisite, phrased like the one in the Effects lesson: both the Vite dev server **and** the API server must be running. Remind them the API server is the `pizza-shop-api-demo` project cloned in lesson 9, started with `npm run dev` in its own terminal window, listening on port 3000.

Explain HTTP in plain terms: the browser sends a **request** (a method plus a URL), the server sends back a **response** (a status code, headers, and a body). Nothing more mystical than that.

Then the proxy. Refer back to the `vite.config.ts` block from lesson 9:

```html
<pre><code class="language-typescript">server: {
  proxy: {
    "/api": {
      target: "http://localhost:3000",
    },
  },
}
</code></pre>
```

Because of this, a request to `/api/pizzas` from a page served by Vite gets forwarded to the API server on port 3000. That is why the app can write `fetch("/api/pizzas")` with no hostname, and why these console snippets only work on the `localhost:5173` tab.

- [ ] **Step 3: Section — `fetch()` เบื้องต้น**

`<h3>fetch: ขอข้อมูลจาก server</h3>`

`fetch()` returns a `Promise<Response>` — the exact thing lesson 11 taught them to `await`:

```html
<pre><code class="language-javascript">const res = await fetch("/api/pizza-of-the-day");
console.log(res);
</code></pre>
```

Have them inspect the `Response` object: `status`, `ok`, `headers`. Point out it does **not** contain the data yet. Then:

```html
<pre><code class="language-javascript">const pizza = await res.json();
console.log(pizza);
</code></pre>
```

Explain why there are two separate `await`s, which is the part everyone finds strange: the first Promise resolves as soon as the **headers** arrive, the second when the **body** has finished downloading and been parsed. For a large response over a slow connection those are meaningfully different moments.

Then the whole thing together, plus a bigger endpoint:

```html
<pre><code class="language-javascript">const res = await fetch("/api/pizzas");
const pizzas = await res.json();
console.table(pizzas);
</code></pre>
```

`console.table` renders the array as a table — a good moment to point out these are exactly the pizzas the app will show.

- [ ] **Step 4: Section — `res.ok` และ status code**

`<h3>กับดักที่ทุกคนเจอ: fetch ไม่ throw เมื่อ 404</h3>`

The single most important point in the lesson. A failed *request* rejects; a successful request that returns an *error status* does not:

```html
<pre><code class="language-javascript">const res = await fetch("/api/ไม่มีอยู่จริง");
console.log(res.ok); // false
console.log(res.status); // 404
// ไม่มี error ถูก throw ออกมาเลย — await ผ่านฉลุย
</code></pre>
```

Explain that `fetch` only rejects when the request itself could not be completed — network down, DNS failure, server unreachable. A 404 or a 500 is, from `fetch`'s point of view, a perfectly successful round trip that happens to carry bad news. Without a check, `await res.json()` on that response will either throw a confusing parse error or hand back an error object the code then treats as data.

The guard:

```html
<pre><code class="language-javascript">async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`เรียก ${url} ไม่สำเร็จ: ${res.status}`);
  }
  return res.json();
}

try {
  const pizzas = await getJson("/api/pizzas");
  console.log(pizzas.length);
} catch (error) {
  console.log("ผิดพลาด:", error.message);
}
</code></pre>
```

Then a short status-code tour: 2xx succeeded, 3xx redirected, 4xx the request was wrong (404 not found, 400 bad request, 401/403 not allowed), 5xx the server broke. The rule of thumb: 4xx is your fault, 5xx is theirs.

- [ ] **Step 5: Section — แท็บ Network**

`<h3>ดูของจริงในแท็บ Network</h3>`

Walk them through: open DevTools → Network tab → filter to Fetch/XHR → reload → click a request. Show where to read the status, the Headers pane, and the Response/Preview pane holding the JSON.

Then throttling: set the throttle dropdown to Slow 3G and re-run a fetch. Two payoffs — they can see the request genuinely take time, and it explains why an app needs a loading state at all. A `<p class="translator-note">` connecting this to the next lesson: the `loading` flag in the Effects lesson exists for exactly this window, and Slow 3G is how you actually see it.

- [ ] **Step 6: Section — JSON และการใส่ type**

`<h3>JSON กับการใส่ type ให้ response</h3>`

JSON is *text* — a string in a standard format. `.json()` is what parses that text into a real JavaScript object. Show the difference:

```html
<pre><code class="language-javascript">const res = await fetch("/api/pizza-of-the-day");
const text = await res.clone().text();
console.log(typeof text); // "string" — JSON ดิบ
const data = await res.json();
console.log(typeof data); // "object" — แปลงแล้ว
</code></pre>
```

Then the TypeScript half. In a `.ts` file, `.json()` has return type `Promise<any>`, because nothing can know in advance what a server will send:

```html
<pre><code class="language-typescript">type Pizza = {
  id: string;
  name: string;
  description: string;
};

const res = await fetch("/api/pizzas");
const pizzas: Pizza[] = await res.json();
</code></pre>
```

Make the key point plainly, since the Effects lesson repeats it: this annotation is a **belief** about the response, not a check of it. TypeScript verifies nothing at runtime; if the API changes shape, the code breaks exactly as it would have in plain JavaScript. What the annotation buys is autocomplete and type errors everywhere downstream.

Close with a sentence pointing forward: the next lesson takes this same `fetch` call and moves it into a React component with `useEffect`, so the data arrives without the user staring at an empty page.

- [ ] **Step 7: Run the verifier — expect green**

Run: `python3 Week_04/02_complete_intro_to_react/verify_lessons.py`

Expected, exactly:

```
36 lessons checked, 0 problem(s).
```

Exit code 0. If anything still fails, fix it before committing.

- [ ] **Step 8: Click through the chain in a browser**

Open `Week_04/02_complete_intro_to_react/content/index.html`, then walk 10 → 11 → 12 → 13 using the next links and back again using prev. Confirm the eyebrows read `บทเรียน 10`, `11`, `12`, `13` in order and that both new pages pick up `lesson.css` styling like their neighbours.

- [ ] **Step 9: Commit**

```bash
git add Week_04/02_complete_intro_to_react/content/12_fetch_and_apis.html
git commit -m "docs: add lesson 12 on fetch, status codes and typing API responses"
```

---

### Task 5: Connect the Effects lesson

Small prose additions so lesson 13 reads as "the React part only". No content is removed.

**Files:**
- Modify: `Week_04/02_complete_intro_to_react/content/13_effects.html`

**Interfaces:**
- Consumes: lessons 11 and 12 from Tasks 3 and 4.
- Produces: nothing later tasks depend on. Final task.

- [ ] **Step 1: Add the opening callout**

In `13_effects.html`, immediately after the existing opening paragraph (the one beginning `ตอนนี้เรามีแอปมากพอที่จะเริ่มทำ API requests ได้แล้ว`) and **before** the existing `<blockquote>` about running both servers, insert:

```html
        <blockquote>คุณรู้จัก <code>async</code>/<code>await</code>, <code>Promise</code> และ <code>fetch</code> มาแล้วจากบทที่ 11 และ 12 ดังนั้นโค้ดที่ยิง request ในบทนี้จะคุ้นตาทั้งหมด ของใหม่จริง ๆ ในบทนี้มีอย่างเดียวคือ <code>useEffect</code> — วิธีบอก React ว่า "หลัง render เสร็จแล้วค่อยไปทำสิ่งนี้"</blockquote>
```

- [ ] **Step 2: Add the note about the fake delay**

The code block containing `fetchPizzaTypes` includes this line:

```javascript
await new Promise((resolve) => setTimeout(resolve, 3000)); // remove this later, just to show you the loading state
```

Directly after that `<pre>` block's closing tag, and before the existing `<h3>ทำไมโค้ดชุดนี้ถึงต่างจากต้นฉบับ JavaScript</h3>`, insert:

```html
        <p class="translator-note">⏱️ บรรทัด <code>await new Promise((resolve) =&gt; setTimeout(resolve, 3000))</code> คือ <code>wait</code> helper ตัวเดียวกับที่เราสร้างเองในบทที่ 11 นั่นแหละ มันคือการหน่วงเวลาปลอม ๆ 3 วินาที เพื่อให้เห็นสถานะ Loading ชัด ๆ ไม่ได้มีประโยชน์อะไรกับแอปจริง อย่าลืมลบทิ้งเมื่อดูเสร็จแล้ว (อีกวิธีที่ไม่ต้องแก้โค้ดคือใช้ Network throttling แบบ Slow 3G จากบทที่ 12)</p>
```

- [ ] **Step 3: Run the verifier**

Run: `python3 Week_04/02_complete_intro_to_react/verify_lessons.py`

Expected, exactly:

```
36 lessons checked, 0 problem(s).
```

- [ ] **Step 4: Proofread in a browser**

Open `13_effects.html` and confirm the new blockquote sits directly under the opening paragraph, the translator-note sits directly under the `fetchPizzaTypes` code block, and no existing paragraph was disturbed.

- [ ] **Step 5: Commit**

```bash
git add Week_04/02_complete_intro_to_react/content/13_effects.html
git commit -m "docs: link Effects lesson back to the new async and fetch lessons"
```

---

## Verification Summary

After Task 5 the whole course should satisfy:

- 36 lessons, numbered 01–36 with no gaps.
- `python3 Week_04/02_complete_intro_to_react/verify_lessons.py` exits 0 reporting `36 lessons checked, 0 problem(s).`
- No lesson file references a pre-rename filename. Check with:
  ```bash
  grep -rn "11_effects\|12_dev_tools\|13_custom_hooks\|14_handling_user_inputs\|15_context\|16_tanstack_router\|17_tanstack_query\|18_portals\|19_error_boundaries\|20_uncontrolled_forms\|21_vitest\|34_congrats" \
    Week_04/02_complete_intro_to_react/content/
  ```
  Expected: no output. These are the *old* names; after the shift those numbers belong to different slugs. Scope the grep to the content directory — the spec and this plan quote the old names on purpose, so a repo-wide grep will produce false positives.
- `renumber.py` no longer exists; `verify_lessons.py` does.
