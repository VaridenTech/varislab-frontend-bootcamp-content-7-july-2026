# Async JavaScript & API Lessons — Design

**Date:** 2026-07-30
**Module:** `Week_04/02_complete_intro_to_react/content/`

## Problem

Lesson `11_effects.html` teaches `useEffect` by fetching pizza data from an API. In one code block it introduces `async function`, `await`, `fetch()`, `await res.json()`, and `new Promise(resolve => setTimeout(resolve, 3000))` — none of which students have ever seen.

Verified gaps in prior weeks:

- `Week_03/01_basic_javaScript` runs lessons 01–31: variables, functions, arrays/objects, loops, array methods, DOM, event listeners, devtools. **No Promises, no `async`/`await`, no `fetch`.**
- `Week_03/02_basic_typescript` covers types, annotations, and `tsconfig` only. Nothing async.
- `Week_04/02_complete_intro_to_react/content/09_jsx.html` already has students clone `pizza-shop-api-demo` and configure the Vite `/api` proxy, so a real API server is running and reachable by the time they reach Effects.

The API server exists; the language and browser concepts to talk to it do not.

## Solution

Insert two new lessons between `10_hooks.html` and the Effects lesson, then renumber everything after them.

- **11 — Async JavaScript:** why async exists, Promises, `.then`/`.catch`, `async`/`await`, `try`/`catch`.
- **12 — Fetch & APIs:** HTTP request/response, `fetch()`, `Response`, `.json()`, `res.ok` and status codes, the Network tab, typing the JSON in TypeScript.
- **13 — Effects (was 11):** unchanged in substance; gains an opening callout so it reads as "the React part only".

Both new lessons are hands-on in the **browser DevTools console** on `localhost:5173`. No new files in the student's project, no setup ceremony, and `fetch("/api/pizzas")` works from that origin because of the lesson-9 proxy — the identical call lesson 13 makes. Week 3 lesson `31_devtools_basics.html` already taught them the console.

## Structure

### Chapter reorganisation in `index.html`

Chapter 4 currently holds lessons 9–17 under *"แนวคิดหลักของ React — Core React Concepts"*. Async and fetch are not React concepts, so the card splits rather than absorbing them:

| Chapter | Title | Lessons |
| --- | --- | --- |
| 4 | แนวคิดหลักของ React — Core React Concepts | 9 JSX, 10 Hooks |
| 5 | **JavaScript แบบ Async และการเรียก API — Async JavaScript & APIs** | **11 Async JavaScript, 12 Fetch & APIs** |
| 6 | แนวคิดหลักของ React (ต่อ) — Core React Concepts, cont. | 13 Effects, 14 Dev Tools, 15 Custom Hooks, 16 Handling User Inputs, 17 Context |
| 7 | ระบบนิเวศ — Ecosystem | 18–19 |
| 8 | React ขั้นสูง — Advanced React | 20–22 |
| 9 | การทดสอบ — Testing | 23–30 |
| 10 | ก้าวต่อไป — What's Next | 31–35 |
| 11 | สรุปบทเรียน — Wrap Up | 36 |

The course goes from 34 lessons to 36, and from 9 chapters to 11 — one new chapter for the async material, plus the continuation card created by splitting chapter 4.

### File renames

`git mv` in **descending** order so no rename collides with an existing file:

Every lesson numbered 11 and above shifts by **+2**:

```
34_congrats.html          -> 36_congrats.html
33_deploying_the_app.html -> 35_deploying_the_app.html
32_react_compiler.html    -> 34_react_compiler.html
...
12_dev_tools.html         -> 14_dev_tools.html
11_effects.html           -> 13_effects.html
```

Every shifted file (24 of them) needs three internal edits, because the lesson number is hard-coded in the markup:

1. `<p class="lesson-eyebrow">บทเรียน N · CHAPTER</p>` — bump `N`, and update `CHAPTER` for files 13–17, which move into "แนวคิดหลักของ React (ต่อ)".
2. `<a href="..." rel="prev">` in `.lesson-navigation`.
3. `<a href="..." rel="next">` in `.lesson-navigation`.

Files whose nav also changes but which are *not* renamed: `10_hooks.html` (next → `11_async_javascript.html`).

`index.html` is rewritten with the chapter table above.

## Lesson 11 — `11_async_javascript.html`

**Title:** JavaScript แบบ Async — Async JavaScript
**Eyebrow:** `บทเรียน 11 · JavaScript แบบ Async และการเรียก API (Async JavaScript & APIs)`

Pure JavaScript. No React. Every snippet runs in the DevTools console.

1. **ทำไมต้อง async** — JavaScript runs one thing at a time on one thread. A slow synchronous task freezes the whole page. Demo: a long `for` loop that locks the tab, contrasted with `setTimeout`, which doesn't. Introduces the idea of work that finishes *later*.
2. **Promise** — an object representing a result that isn't ready yet. The three states: pending → fulfilled or rejected, and that the transition happens once and is permanent. Students build one by hand:
   ```js
   const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
   ```
   This is deliberate: lesson 13 uses `new Promise(resolve => setTimeout(resolve, 3000))` verbatim as a fake delay, and it should be familiar rather than mysterious.
3. **`.then()` / `.catch()`** — consuming a Promise, chaining, and a short look at why deep nesting becomes hard to read.
4. **`async` / `await`** — the same example rewritten. `await` pauses only inside its own `async` function; it does not freeze the page. An `async` function *always* returns a Promise, even when the body returns a plain value.
5. **`try` / `catch`** — the `await` counterpart to `.catch()`, and what happens when you forget it (unhandled rejection in the console).
6. **Closing note** — you cannot make a function `async` and hand it to `useEffect`, because `useEffect` expects either nothing or a cleanup function back, and an `async` function always returns a Promise. This is why lesson 13 declares a separate `fetchPizzaTypes()` and calls it from inside the effect. Stated here so lesson 13's structure is already motivated.

## Lesson 12 — `12_fetch_and_apis.html`

**Title:** เรียก API ด้วย fetch — Fetch & APIs
**Eyebrow:** `บทเรียน 12 · JavaScript แบบ Async และการเรียก API (Async JavaScript & APIs)`

Same console, now against the pizza server from lesson 9. Requires both the Vite dev server and the API server to be running — stated up front in a blockquote, mirroring the wording lesson 13 uses.

1. **API and HTTP in plain terms** — a request goes out, a response comes back; the response has a status, headers, and a body. Where the Vite `/api` proxy fits, referring back to the `vite.config.ts` block in lesson 9, and why the app can therefore call `/api/pizzas` without a hostname.
2. **`fetch()`** — returns `Promise<Response>`. The two-step pattern and *why* it's two separate awaits: the first resolves when the headers arrive, the second when the body has been read and parsed.
   ```js
   const res = await fetch("/api/pizza-of-the-day");
   const pizza = await res.json();
   ```
3. **Real endpoints** — start with `/api/pizza-of-the-day` (a single small object, readable at a glance in the console), then `/api/pizzas` displayed with `console.table()`. Both are endpoints the course actually uses.
4. **`res.ok` and status codes** — the trap that catches everyone: `fetch` does **not** reject on 404 or 500. It only rejects when the request itself fails (network down, DNS failure). Demonstrated by fetching a nonexistent path and observing that `await` succeeds while `res.ok` is `false`. The guard:
   ```js
   if (!res.ok) throw new Error(`Request failed: ${res.status}`);
   ```
   Brief tour of status families: 2xx success, 4xx "you sent something wrong", 5xx "the server broke".
5. **Network tab** — find the request, read its status, inspect the JSON response body. Throttle to Slow 3G so that loading states become visible and the `loading` flag in lesson 13 has an obvious purpose.
6. **JSON vs a JavaScript object** — JSON is text; `.json()` is what turns it into an object. Then typing it:
   ```ts
   const pizzas: Pizza[] = await res.json();
   ```
   `.json()` returns `Promise<any>`, so the annotation is a *belief* about the response, not a runtime check — TypeScript never validates the actual bytes. Lesson 13 makes the same point about `pizzasJson`; stating it here first means lesson 13 reads as a reminder rather than a new idea.

## Lesson 13 — `13_effects.html` changes

Beyond the mechanical rename, eyebrow, chapter label, and nav updates:

1. An opening blockquote after the `<h2>`: students already know `async`/`await` and `fetch` from lessons 11–12, so the only genuinely new thing in this lesson is `useEffect` itself.
2. A short note where `new Promise((resolve) => setTimeout(resolve, 3000))` appears, tying it back to the `wait` helper built in lesson 11 and confirming it is a temporary fake delay to make the loading state visible.

No prose is deleted. The existing paragraphs on `Promise<any>`, `Array.find()` returning `undefined`, and type narrowing all stay where they are.

## Style conventions

Both new files match the module exactly:

- `<!DOCTYPE html>`, `<html lang="th">`, UTF-8 + viewport meta, Thai `<meta name="description">`, `<title>English | เรียน React เริ่มต้น</title>`, `<link rel="stylesheet" href="lesson.css">`.
- `<main><article class="lesson">` wrapper.
- `.lesson-header` containing `.lesson-eyebrow`, a Thai `<h1>`, and `.lesson-original-title` with `lang="en"`.
- Code in `<pre><code class="language-javascript|typescript|tsx|bash">` with `<`, `>`, and `&` HTML-escaped.
- `.translator-note` paragraphs for asides and gotchas, `<blockquote>` for warnings and prerequisites.
- `.lesson-navigation` footer with prev / index / next links.
- Thai prose; technical terms (`Promise`, `fetch`, `async`, `await`, `Response`, `status code`) stay in English, matching every existing lesson.

## Out of scope

- POST requests, request bodies, and headers. `/api/order` and `/api/contact` are introduced later by the lessons that need them.
- `AbortController` and request cancellation.
- Runtime response validation (Zod). Lesson 13 already names it as out of scope.
- Race conditions and stale responses. TanStack Query (lesson 19 after renumbering) covers this ground.
- Touching `Week_03` content. The material is placed at point of need in Week 4, not backfilled into a week that has already been taught.

## Verification

- Every `href` in the content folder resolves to a file that exists — checked by extracting all local hrefs and testing each path.
- No file still references `11_effects.html` or any other pre-rename filename.
- Each lesson's `lesson-eyebrow` number matches its filename number.
- Each lesson's `rel="prev"` and `rel="next"` point at the adjacent lesson numbers, with `01_intro` having no prev and `36_congrats` no next.
- `index.html` lists all 36 lessons in order, and the chapter each lesson is filed under matches the chapter named in that lesson's eyebrow.
