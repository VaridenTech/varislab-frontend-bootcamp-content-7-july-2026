# Beginner SCSS Course Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a twelve-lesson Thai beginner SCSS course at `Week_05_06/03_basic_scss/content` using the structure and teaching style of the Week 03 JavaScript content.

**Architecture:** The course is a static collection of standalone HTML lessons. One index links the ordered curriculum, one shared stylesheet controls presentation, and a Node verification script checks lesson structure, links, navigation, exercises, and legacy Sass guidance. Lessons remain independently teachable while forming a progressive sequence.

**Tech Stack:** HTML5, CSS, SCSS examples, Dart Sass CLI, Node.js verification script

## Global Constraints

- Write teaching copy in Thai and retain English technical terms where useful.
- Assume students know selectors, box model, Flexbox, and responsive design.
- Teach locally installed Dart Sass with npm and `npx sass`, not a VS Code extension.
- Recommend modern `@use`; mention legacy `@import` only to say it should not be used in new code.
- Give every lesson one independent exercise and one `<details>` solution.
- Use two-space indentation and semicolons in SCSS/CSS examples.
- Do not add a starter project, finished project, or cumulative capstone.
- Preserve the reference course's standalone HTML, shared CSS, index, and previous/index/next navigation model.

## File Map

- `Week_05_06/03_basic_scss/content/index.html` — ordered table of contents
- `Week_05_06/03_basic_scss/content/lesson.css` — shared responsive presentation
- `Week_05_06/03_basic_scss/content/verify_content.mjs` — course structure and link checks
- `Week_05_06/03_basic_scss/content/01_what_is_scss.html` — SCSS mental model
- `Week_05_06/03_basic_scss/content/02_installing_and_compiling_sass.html` — npm and CLI workflow
- `Week_05_06/03_basic_scss/content/03_variables.html` — variables and tokens
- `Week_05_06/03_basic_scss/content/04_nesting_and_parent_selector.html` — nesting and `&`
- `Week_05_06/03_basic_scss/content/05_partials_and_use.html` — partials and `@use`
- `Week_05_06/03_basic_scss/content/06_organizing_files_and_modules.html` — module organization
- `Week_05_06/03_basic_scss/content/07_mixins_and_include.html` — reusable rule groups
- `Week_05_06/03_basic_scss/content/08_mixin_parameters_and_content.html` — configurable mixins
- `Week_05_06/03_basic_scss/content/09_functions_and_built_in_modules.html` — functions and built-ins
- `Week_05_06/03_basic_scss/content/10_lists_and_maps.html` — structured Sass data
- `Week_05_06/03_basic_scss/content/11_control_flow.html` — conditions and loops
- `Week_05_06/03_basic_scss/content/12_css_output_source_maps_and_best_practices.html` — output and production practices

---

### Task 1: Course Contract and Shared Assets

**Files:**
- Create: `Week_05_06/03_basic_scss/content/verify_content.mjs`
- Create: `Week_05_06/03_basic_scss/content/index.html`
- Create: `Week_05_06/03_basic_scss/content/lesson.css`

**Interfaces:**
- Produces: ordered `LESSONS` array of `{ file, title }` objects in the verifier
- Produces: `lesson-index`, `lesson-navigation`, `lesson-navigation__link`, `callout`, `file-tree`, and `comparison-grid` CSS classes

- [ ] **Step 1: Write the failing verifier**

Use `node:fs/promises`, `node:path`, and `node:assert/strict`. Store the twelve filenames from the File Map in order. For each lesson assert:

```js
assert.match(html, /<html lang="th">/)
assert.match(html, /<meta name="description"/)
assert.equal((html.match(/<h1>/g) ?? []).length, 1)
assert.match(html, /<h2>แบบฝึกหัด<\/h2>/)
assert.match(html, /<details>/)
assert.match(html, /<summary>ดูเฉลย<\/summary>/)
assert.match(html, /href="lesson\.css"/)
assert.match(html, /href="index\.html"/)
```

Also check every index link once, adjacent previous/next filenames, no previous link on Lesson 1, no next link on Lesson 12, exactly one `<title>`, a closing `</html>`, and every local `href` target. Fail if a lesson recommends Sass `@import`. Print `Verified 12 SCSS lessons.` on success.

- [ ] **Step 2: Run the verifier to prove it fails**

Run: `node Week_05_06/03_basic_scss/content/verify_content.mjs`

Expected: FAIL with `ENOENT` because course files do not exist.

- [ ] **Step 3: Create the index and stylesheet**

Build a valid Thai index titled `บทเรียน SCSS สำหรับผู้เริ่มต้น` with an ordered link list for all twelve lessons. Adapt the structural rules from `Week_03/01_basic_javaScript/content/lesson.css`: responsive single column, overflow-safe code, tables, details, focus styles, navigation, and print rules. Use a purple primary and coral secondary palette. Style callouts, file trees, and comparison grids.

- [ ] **Step 4: Re-run the partial scaffold check**

Expected: verifier now fails on `01_what_is_scss.html`, proving the index and script load.

- [ ] **Step 5: Commit**

```bash
git add Week_05_06/03_basic_scss/content/index.html Week_05_06/03_basic_scss/content/lesson.css Week_05_06/03_basic_scss/content/verify_content.mjs
git commit -m "feat: scaffold beginner SCSS course"
```

### Task 2: Lessons 1–4 — Foundations

**Files:**
- Create: `Week_05_06/03_basic_scss/content/01_what_is_scss.html`
- Create: `Week_05_06/03_basic_scss/content/02_installing_and_compiling_sass.html`
- Create: `Week_05_06/03_basic_scss/content/03_variables.html`
- Create: `Week_05_06/03_basic_scss/content/04_nesting_and_parent_selector.html`

**Interfaces:**
- Consumes: shared layout classes and ordered navigation contract
- Produces: the first four independently teachable pages

- [ ] **Step 1: Write Lesson 1**

Explain Sass versus SCSS, CSS-compatible syntax, and `SCSS → compiler → CSS → browser`. Compare `$brand-color` SCSS with compiled CSS, explain `.scss`, benefits, and when plain CSS is enough. Exercise: identify which snippet requires compilation; answer the one using `$`.

- [ ] **Step 2: Write Lesson 2**

Teach this structure and workflow:

```text
scss-course/
├── index.html
├── package.json
├── scss/main.scss
└── css/main.css
```

```sh
npm init -y
npm install --save-dev sass
npx sass --version
npx sass scss/main.scss css/main.css
npx sass --watch scss/main.scss:css/main.css
```

Explain stopping watch mode, linking generated CSS, wrong-directory errors, and why browsers cannot load SCSS. Exercise: compile/watch `styles/app.scss` into `public/app.css`.

- [ ] **Step 3: Write Lesson 3**

Teach `$name: value;`, reuse, introductory scope, and purpose-based tokens for colors, space, fonts, and radius. Contrast compile-time Sass variables with runtime CSS custom properties. Exercise: define and use `$brand-color`, `$space-md`, and `$radius-md` in `.alert`; show compiled CSS.

- [ ] **Step 4: Write Lesson 4**

Teach shallow nesting, pseudo-classes, `&`, BEM suffixes, and nested media queries with `.card`, `.card__title`, `.card--featured`, and `.button:hover`. Warn against mirroring deep HTML trees; recommend roughly three selector levels maximum. Exercise: nest `.nav__link`, hover, and active modifier, with compiled CSS.

- [ ] **Step 5: Add navigation and run checks**

Lesson 1 has index/next; Lessons 2–4 have previous/index/next. Run the verifier. Expected: FAIL on missing Lesson 5, with no earlier assertion failure.

- [ ] **Step 6: Compile representative examples**

Put the variable and nesting exercises in a temporary `foundations.scss` and run `npx sass foundations.scss foundations.css --no-source-map`. Expected: exit 0 and output selectors `.alert`, `.nav__link:hover`, and `.nav__link--active`.

- [ ] **Step 7: Commit**

```bash
git add Week_05_06/03_basic_scss/content/0{1,2,3,4}_*.html
git commit -m "feat: add SCSS foundation lessons"
```

### Task 3: Lessons 5–6 — Modules

**Files:**
- Create: `Week_05_06/03_basic_scss/content/05_partials_and_use.html`
- Create: `Week_05_06/03_basic_scss/content/06_organizing_files_and_modules.html`

**Interfaces:**
- Produces: modern module guidance used in Lessons 7–10

- [ ] **Step 1: Write Lesson 5**

Teach underscore partials, omitted underscore/extension, namespaces, aliases, one-time loading, and top-level placement. Use `_tokens.scss` plus `@use "tokens";` and `tokens.$brand-color`. Say `@import` is legacy and deprecated, not a recommended alternative. Exercise: consume `_colors.scss` from `profile.scss` as `colors`; include compiled CSS.

- [ ] **Step 2: Write Lesson 6**

Use `abstracts/_tokens.scss`, `base/_reset.scss`, `components/_button.scss`, and one `main.scss` entry point. Teach single responsibility, explicit dependencies, lowercase kebab-case, underscore partials, and compiling only entry points. Do not impose 7–1 architecture. Exercise: sort six filenames into directories and write `main.scss` uses.

- [ ] **Step 3: Verify and compile**

Run the verifier; expect the first failure at Lesson 7. Compile the Lesson 5 module example with `npx sass main.scss main.css --no-source-map`; expect the documented padding and background values.

- [ ] **Step 4: Commit**

```bash
git add Week_05_06/03_basic_scss/content/05_*.html Week_05_06/03_basic_scss/content/06_*.html
git commit -m "feat: teach SCSS modules and organization"
```

### Task 4: Lessons 7–8 — Mixins

**Files:**
- Create: `Week_05_06/03_basic_scss/content/07_mixins_and_include.html`
- Create: `Week_05_06/03_basic_scss/content/08_mixin_parameters_and_content.html`

**Interfaces:**
- Consumes: module namespaces from Lessons 5–6
- Produces: reusable abstractions used before control flow

- [ ] **Step 1: Write Lesson 7**

Teach `@mixin` and `@include` with visually-hidden and flex-center helpers, including a `_mixins.scss` module used as `mixins.flex-center`. Contrast a variable, mixin, and emitted CSS class. Warn that repeated includes duplicate CSS. Exercise: include `card-surface` in two card selectors and show duplicated compiled declarations.

- [ ] **Step 2: Write Lesson 8**

Teach positional/named arguments, defaults, and `@content`. Use `button-variant($background, $foreground: #fff)` and `respond-above($width)` with a nested media query. Exercise: create `badge($background, $foreground: #fff)`, use it for two variants, and use one named argument. Include compiled CSS.

- [ ] **Step 3: Verify and compile**

Run the verifier; expect the first failure at Lesson 9. Compile Lesson 8 examples; expect chosen badge colors and `@media (min-width: 48rem)`.

- [ ] **Step 4: Commit**

```bash
git add Week_05_06/03_basic_scss/content/07_*.html Week_05_06/03_basic_scss/content/08_*.html
git commit -m "feat: add reusable SCSS mixin lessons"
```

### Task 5: Lessons 9–11 — Data and Control Flow

**Files:**
- Create: `Week_05_06/03_basic_scss/content/09_functions_and_built_in_modules.html`
- Create: `Week_05_06/03_basic_scss/content/10_lists_and_maps.html`
- Create: `Week_05_06/03_basic_scss/content/11_control_flow.html`

**Interfaces:**
- Consumes: namespaces and parameter concepts
- Produces: calculated values and predictable generated rule families

- [ ] **Step 1: Write Lesson 9**

Contrast functions returning values with mixins emitting rules. Teach `@function`, `@return`, `@use "sass:math"`, `math.div()`, `@use "sass:color"`, and `color.adjust()`. Avoid deprecated slash division and global color helpers. Exercise: `spacing($step)` returns `$step * 0.25rem`; use it for card padding and gap.

- [ ] **Step 2: Write Lesson 10**

Teach lists, `sass:list`, `list.nth()`, maps, `sass:map`, `map.get()`, meaningful keys, and missing-key `null`. Exercise: create a `$spacing` map with `sm`, `md`, `lg`, then use it in `.stack`; include compiled CSS.

- [ ] **Step 3: Write Lesson 11**

Teach `@if`/`@else`, `@each`, and `@for ... through`. Generate alert modifiers from a color map and spacing utilities from a numeric loop. Warn against unused class generation and opaque logic. Exercise: generate `.radius-1` through `.radius-3` with `0.25rem`, `0.5rem`, and `0.75rem`.

- [ ] **Step 4: Verify and compile**

Run the verifier; expect the first failure at Lesson 12. Compile representative `math.div`, map, `@each`, and `@for` examples; expect `.alert-success` and all three radius selectors.

- [ ] **Step 5: Commit**

```bash
git add Week_05_06/03_basic_scss/content/{09,10,11}_*.html
git commit -m "feat: teach SCSS data and control flow"
```

### Task 6: Lesson 12 and Whole-Course Verification

**Files:**
- Create: `Week_05_06/03_basic_scss/content/12_css_output_source_maps_and_best_practices.html`
- Modify if checks expose defects: files under `Week_05_06/03_basic_scss/content/`

**Interfaces:**
- Consumes: all lesson files and navigation contract
- Produces: complete course with a passing verification command

- [ ] **Step 1: Write Lesson 12**

Teach these commands:

```sh
npx sass --watch scss/main.scss:css/main.css
npx sass scss/main.scss css/main.css --style=expanded
npx sass scss/main.scss css/main.min.css --style=compressed --no-source-map
```

Explain source maps, never manually editing generated CSS, deployment-dependent decisions about committing CSS, compiler debugging, and a selection guide for variables, nesting, modules, mixins, and loops. Exercise: select the continuous-development and compressed-production commands; answer with flag explanations. Add previous/index navigation only.

- [ ] **Step 2: Run the complete verifier**

Run: `node Week_05_06/03_basic_scss/content/verify_content.mjs`

Expected: PASS and `Verified 12 SCSS lessons.`

- [ ] **Step 3: Validate Sass flags and representative output**

Run `npx sass --help`; confirm watch, style, and source-map flags. Compile a temporary `main.scss` with `--style=compressed --no-source-map`; expect compressed CSS and no `.map`.

- [ ] **Step 4: Check repository formatting**

Run `git diff --check` and `git status --short`. Expected: no whitespace errors and only intended course changes.

- [ ] **Step 5: Commit**

```bash
git add Week_05_06/03_basic_scss/content
git commit -m "feat: complete beginner SCSS course"
```

- [ ] **Step 6: Verify the clean result**

Run the verifier, `git diff --check`, and `git status --short` again. Expected: verifier passes, diff check is silent, and worktree is clean.
