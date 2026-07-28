# Thai Complete Intro to React v9 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a complete, closely translated Thai edition of all 35 lessons in Complete Intro to React v9 under Week 04, preserving the source course's nine chapters, code progression, links, and licensing.

**Architecture:** Build a static HTML course at `Week_04/02_complete_intro_to_react/content/`, following the existing Week 03 lesson pattern. One grouped index links to 35 numbered lesson pages; all pages share one responsive stylesheet and a continuous Previous/Index/Next navigation chain.

**Tech Stack:** Semantic HTML5, CSS3, Ruby standard library for structural verification, `curl` for reading the CC-licensed source pages, and a local HTTP server/browser for visual QA.

## Global Constraints

- Translate all 9 chapters and 35 lessons listed on `https://react-v9.holt.courses/` as observed on 2026-07-28.
- Use a close Thai translation: preserve meaning, voice, paragraph/list/note order, examples, links, and code progression.
- Preserve code, commands, filenames, package names, APIs, identifiers, URLs, required UI labels, and version numbers exactly.
- Do not add quizzes, homework, new examples, or unrelated explanations.
- Keep `Week_04/01_basic_git/content.md` unchanged.
- Show Thai and original English titles in the index and on lesson pages.
- Attribute Complete Intro to React v9 to Brian Holt; state CC BY-NC 4.0 for prose and Apache 2.0 for code samples/exercises.
- Add a short `หมายเหตุผู้แปล` only when an apparent source typo or version-bound instruction would otherwise make the exercise fail.

---

## File Map

- `Week_04/02_complete_intro_to_react/content/index.html` — grouped course table of contents with 9 chapters and 35 lesson links.
- `Week_04/02_complete_intro_to_react/content/lesson.css` — shared readable, responsive styles for index and lessons.
- `Week_04/02_complete_intro_to_react/content/01_intro.html` through `35_congrats.html` — translated lesson pages in source order.
- `docs/superpowers/plans/2026-07-28-week-04-complete-intro-to-react-thai.md` — this execution plan only; do not change it during implementation except to check completed steps if the execution workflow requires that.

All lesson pages expose the same document-level interface:

```html
<body>
  <main>
    <article class="lesson">
      <header class="lesson-header">
        <p class="lesson-eyebrow">บทที่ N · ชื่อ Chapter ภาษาไทย (English Chapter)</p>
        <h1>ชื่อบทภาษาไทย</h1>
        <p class="lesson-original-title" lang="en">Original English Title</p>
      </header>
      <!-- translated source content -->
      <nav class="lesson-navigation" aria-label="การนำทางบทเรียน">...</nav>
    </article>
  </main>
  <footer class="course-attribution">...</footer>
</body>
```

Use this exact footer meaning on every page, with working links to the source and both licenses:

```html
<footer class="course-attribution">
  <p>
    คำแปลภาษาไทยเพื่อการเรียนรู้จาก
    <a href="https://react-v9.holt.courses/">Complete Intro to React v9</a>
    โดย Brian Holt เนื้อหาต้นฉบับใช้สัญญาอนุญาต
    <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>
    และตัวอย่างโค้ดกับแบบฝึกหัดใช้
    <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a>
  </p>
</footer>
```

---

### Task 1: Shared Course Shell and Complete Index

**Files:**
- Create: `Week_04/02_complete_intro_to_react/content/index.html`
- Create: `Week_04/02_complete_intro_to_react/content/lesson.css`
- Reference: `Week_03/02_basic_typescript/content/index.html`
- Reference: `Week_03/02_basic_typescript/content/lesson.css`

**Interfaces:**
- Consumes: the 9-chapter/35-lesson order defined in the approved design spec.
- Produces: CSS class contract used by all later lesson pages and links to all exact lesson filenames in the File Map.

- [ ] **Step 1: Record the expected index contract and confirm it fails before creation**

Run:

```bash
ruby -e 'path="Week_04/02_complete_intro_to_react/content/index.html"; abort("expected missing index") unless File.exist?(path)'
```

Expected: non-zero exit with `expected missing index`.

- [ ] **Step 2: Create `lesson.css` with the shared class contract**

Use the Week 03 stylesheet as the baseline, then define styles for `body`, `main`, `.lesson`, `.course-header`, `.chapter-list`, `.chapter-card`, `.lesson-header`, `.lesson-eyebrow`, `.lesson-original-title`, `pre`, `code`, `table`, `blockquote`, `.translator-note`, `.lesson-navigation`, `.course-attribution`, `:focus-visible`, and a mobile breakpoint at `720px`.

Required behavior:

```css
pre {
  overflow-x: auto;
}

a:focus-visible {
  outline: 3px solid currentColor;
  outline-offset: 3px;
}

@media (max-width: 720px) {
  .lesson-navigation {
    display: grid;
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Create the complete grouped index**

Write semantic Thai HTML with `lang="th"`, a unique Thai description/title, an introductory course header, 9 chapter sections, and 35 links using the exact filenames in the File Map. Each link must show `ชื่อภาษาไทย — English Title`; retain `npm`, `ESLint`, `Vite`, `JSX`, `Hooks`, `TanStack`, `Vitest`, `React 19`, and API names in English.

Add the shared attribution footer from the File Map.

- [ ] **Step 4: Verify the index contract passes**

Run:

```bash
ruby -e 'html=File.read("Week_04/02_complete_intro_to_react/content/index.html"); abort("lang") unless html.include?(%q{lang="th"}); abort("chapters") unless html.scan(%r{<section class="chapter-card"}).size == 9; links=html.scan(/href="(\d{2}_[^"]+\.html)"/).flatten; abort("lesson count #{links.size}") unless links.size == 35; abort("duplicates") unless links.uniq.size == 35; abort("css") unless html.include?(%q{href="lesson.css"}); abort("license") unless html.include?("CC BY-NC 4.0") && html.include?("Apache License 2.0")'
```

Expected: exit 0 with no output.

- [ ] **Step 5: Commit the shared shell**

```bash
git add Week_04/02_complete_intro_to_react/content/index.html Week_04/02_complete_intro_to_react/content/lesson.css
git commit -m "feat: add Thai React course index and styles"
```

---

### Task 2: Welcome and No Frills React (Lessons 01–04)

**Files:**
- Create: `Week_04/02_complete_intro_to_react/content/01_intro.html`
- Create: `Week_04/02_complete_intro_to_react/content/02_my_setup.html`
- Create: `Week_04/02_complete_intro_to_react/content/03_react_without_a_build_step.html`
- Create: `Week_04/02_complete_intro_to_react/content/04_components.html`

**Interfaces:**
- Consumes: the shared HTML shell/footer/CSS from Task 1 and source pages under `/lessons/welcome/` and `/lessons/no-frills-react/`.
- Produces: navigation chain `01 → 02 → 03 → 04 → 05`; Task 3 supplies lesson 05.

- [ ] **Step 1: Confirm the four lesson files do not yet satisfy the batch contract**

Run:

```bash
ruby -e 'files=%w[01_intro.html 02_my_setup.html 03_react_without_a_build_step.html 04_components.html]; root="Week_04/02_complete_intro_to_react/content"; abort("expected incomplete batch") unless files.all? { |f| File.exist?(File.join(root,f)) }'
```

Expected: non-zero exit with `expected incomplete batch`.

- [ ] **Step 2: Read the four source lessons and translate them in order**

Source mapping:

```text
01 https://react-v9.holt.courses/lessons/welcome/intro
02 https://react-v9.holt.courses/lessons/welcome/my-setup
03 https://react-v9.holt.courses/lessons/no-frills-react/react-without-a-build-step
04 https://react-v9.holt.courses/lessons/no-frills-react/components
```

For each source page, extract the `post.markdown` value from `__NEXT_DATA__` or read the rendered `.lesson-content`; translate all prose and preserve every code block and destination URL. Use Thai titles matching the source meaning and include the exact English title in `.lesson-original-title`.

- [ ] **Step 3: Add exact navigation and attribution**

Navigation mapping:

```text
01: index.html | next 02_my_setup.html
02: prev 01_intro.html | index.html | next 03_react_without_a_build_step.html
03: prev 02_my_setup.html | index.html | next 04_components.html
04: prev 03_react_without_a_build_step.html | index.html | next 05_npm.html
```

Use `rel="prev"` and `rel="next"` where applicable. Lesson 01 must not contain a previous link.

- [ ] **Step 4: Verify the batch structure**

Run:

```bash
ruby -e 'root="Week_04/02_complete_intro_to_react/content"; files=%w[01_intro.html 02_my_setup.html 03_react_without_a_build_step.html 04_components.html]; files.each { |f| h=File.read(File.join(root,f)); %w[lang="th" lesson.css lesson-header lesson-navigation course-attribution CC\ BY-NC\ 4.0 Apache\ License\ 2.0].each { |token| abort("#{f}: #{token}") unless h.include?(token.gsub("\\ "," ")) } }; abort("01 prev") if File.read(File.join(root,files[0])).include?(%q{rel="prev"}); abort("04 next") unless File.read(File.join(root,files[3])).include?(%q{href="05_npm.html"})'
```

Expected: exit 0 with no output.

- [ ] **Step 5: Commit lessons 01–04**

```bash
git add Week_04/02_complete_intro_to_react/content/0[1-4]_*.html
git commit -m "feat: translate React welcome and fundamentals"
```

---

### Task 3: Tools (Lessons 05–09)

**Files:**
- Create: `Week_04/02_complete_intro_to_react/content/05_npm.html`
- Create: `Week_04/02_complete_intro_to_react/content/06_code_formatting.html`
- Create: `Week_04/02_complete_intro_to_react/content/07_eslint.html`
- Create: `Week_04/02_complete_intro_to_react/content/08_git.html`
- Create: `Week_04/02_complete_intro_to_react/content/09_vite.html`

**Interfaces:**
- Consumes: shared shell, lesson 04 previous boundary, and source pages under `/lessons/tools/`.
- Produces: navigation chain `04 → 05 → 06 → 07 → 08 → 09 → 10`; Task 4 supplies lesson 10.

- [ ] **Step 1: Confirm the Tools batch is incomplete**

Run:

```bash
ruby -e 'root="Week_04/02_complete_intro_to_react/content"; abort("expected incomplete Tools batch") unless (5..9).all? { |n| Dir[File.join(root,format("%02d_*.html",n))].size == 1 }'
```

Expected: non-zero exit.

- [ ] **Step 2: Translate the five source lessons**

Source mapping:

```text
05 https://react-v9.holt.courses/lessons/tools/npm
06 https://react-v9.holt.courses/lessons/tools/code-formatting
07 https://react-v9.holt.courses/lessons/tools/linting
08 https://react-v9.holt.courses/lessons/tools/git
09 https://react-v9.holt.courses/lessons/tools/vite
```

Preserve every `npm`/`pnpm` command, `package.json` fragment, Prettier/ESLint configuration, `.gitignore` entry, Vite configuration, dependency version, filename, and URL exactly. Translate explanatory prose, warnings, and setup rationale.

- [ ] **Step 3: Add navigation for lessons 05–09**

Each page points to the numerically adjacent lesson; specifically, lesson 05 points back to `04_components.html`, and lesson 09 points forward to `10_jsx.html`.

- [ ] **Step 4: Verify the Tools batch**

Run:

```bash
ruby -e 'root="Week_04/02_complete_intro_to_react/content"; files=(5..9).map { |n| Dir[File.join(root,format("%02d_*.html",n))].first }; abort("missing") if files.any?(&:nil?); files.each { |f| h=File.read(f); abort("#{f}: metadata") unless h.include?(%q{lang="th"}) && h.include?("lesson-original-title"); abort("#{f}: source") unless h.include?("react-v9.holt.courses"); abort("#{f}: licenses") unless h.include?("CC BY-NC 4.0") && h.include?("Apache License 2.0") }; abort("left boundary") unless File.read(files.first).include?(%q{href="04_components.html"}); abort("right boundary") unless File.read(files.last).include?(%q{href="10_jsx.html"})'
```

Expected: exit 0.

- [ ] **Step 5: Commit lessons 05–09**

```bash
git add Week_04/02_complete_intro_to_react/content/0[5-9]_*.html
git commit -m "feat: translate React development tools"
```

---

### Task 4: Core React Concepts (Lessons 10–16)

**Files:**
- Create: `Week_04/02_complete_intro_to_react/content/10_jsx.html`
- Create: `Week_04/02_complete_intro_to_react/content/11_hooks.html`
- Create: `Week_04/02_complete_intro_to_react/content/12_effects.html`
- Create: `Week_04/02_complete_intro_to_react/content/13_dev_tools.html`
- Create: `Week_04/02_complete_intro_to_react/content/14_custom_hooks.html`
- Create: `Week_04/02_complete_intro_to_react/content/15_handling_user_inputs.html`
- Create: `Week_04/02_complete_intro_to_react/content/16_context.html`

**Interfaces:**
- Consumes: shared shell, lesson 09 boundary, and source pages under `/lessons/core-react-concepts/`.
- Produces: navigation chain `09 → 10 → … → 16 → 17`; Task 5 supplies lesson 17.

- [ ] **Step 1: Confirm the Core batch is incomplete**

Run:

```bash
ruby -e 'root="Week_04/02_complete_intro_to_react/content"; abort("expected incomplete Core batch") unless (10..16).all? { |n| Dir[File.join(root,format("%02d_*.html",n))].size == 1 }'
```

Expected: non-zero exit.

- [ ] **Step 2: Translate the seven source lessons**

Source mapping:

```text
10 https://react-v9.holt.courses/lessons/core-react-concepts/jsx
11 https://react-v9.holt.courses/lessons/core-react-concepts/hooks
12 https://react-v9.holt.courses/lessons/core-react-concepts/effects
13 https://react-v9.holt.courses/lessons/core-react-concepts/dev-tools
14 https://react-v9.holt.courses/lessons/core-react-concepts/custom-hooks
15 https://react-v9.holt.courses/lessons/core-react-concepts/handling-user-inputs
16 https://react-v9.holt.courses/lessons/core-react-concepts/context
```

Preserve JSX, imports/exports, component and hook names, event handlers, API paths, payloads, and context/provider code exactly. Translate the distinctions among props, state, effects, controlled inputs, custom hooks, and context consistently; retain the English technical term on first meaningful use.

- [ ] **Step 3: Add navigation for lessons 10–16**

Each page points to the numerically adjacent lesson; lesson 10 points back to `09_vite.html`, and lesson 16 points forward to `17_tanstack_router.html`.

- [ ] **Step 4: Verify the Core batch**

Run:

```bash
ruby -e 'root="Week_04/02_complete_intro_to_react/content"; files=(10..16).map { |n| Dir[File.join(root,format("%02d_*.html",n))].first }; abort("missing") if files.any?(&:nil?); files.each { |f| h=File.read(f); abort("#{f}: shell") unless h.include?("lesson-header") && h.include?("lesson-navigation") && h.include?("course-attribution"); abort("#{f}: Thai") unless h.match?(/[ก-๙]/) }; abort("left boundary") unless File.read(files.first).include?(%q{href="09_vite.html"}); abort("right boundary") unless File.read(files.last).include?(%q{href="17_tanstack_router.html"})'
```

Expected: exit 0.

- [ ] **Step 5: Commit lessons 10–16**

```bash
git add Week_04/02_complete_intro_to_react/content/1[0-6]_*.html
git commit -m "feat: translate core React concepts"
```

---

### Task 5: Ecosystem and Advanced React (Lessons 17–21)

**Files:**
- Create: `Week_04/02_complete_intro_to_react/content/17_tanstack_router.html`
- Create: `Week_04/02_complete_intro_to_react/content/18_tanstack_query.html`
- Create: `Week_04/02_complete_intro_to_react/content/19_portals.html`
- Create: `Week_04/02_complete_intro_to_react/content/20_error_boundaries.html`
- Create: `Week_04/02_complete_intro_to_react/content/21_uncontrolled_forms.html`

**Interfaces:**
- Consumes: lesson 16 boundary and source pages under `/lessons/ecosystem/` and `/lessons/advanced-react/`.
- Produces: navigation chain `16 → 17 → … → 21 → 22`; Task 6 supplies lesson 22.

- [ ] **Step 1: Confirm the Ecosystem/Advanced batch is incomplete**

Run:

```bash
ruby -e 'root="Week_04/02_complete_intro_to_react/content"; abort("expected incomplete Ecosystem/Advanced batch") unless (17..21).all? { |n| Dir[File.join(root,format("%02d_*.html",n))].size == 1 }'
```

Expected: non-zero exit.

- [ ] **Step 2: Translate the five source lessons**

Source mapping:

```text
17 https://react-v9.holt.courses/lessons/ecosystem/tanstack-router
18 https://react-v9.holt.courses/lessons/ecosystem/tanstack-query
19 https://react-v9.holt.courses/lessons/advanced-react/portals
20 https://react-v9.holt.courses/lessons/advanced-react/error-boundaries
21 https://react-v9.holt.courses/lessons/advanced-react/uncontrolled-forms
```

Preserve route filenames, generated route-tree instructions, query keys/options, mutation code, portal target IDs, class-component lifecycle APIs, form field names, and server request code exactly. Translate ecosystem comparisons and advanced-concept explanations without simplifying away source caveats.

- [ ] **Step 3: Add navigation and verify the batch**

Lesson 17 points back to `16_context.html`; lesson 21 points forward to `22_vitest.html`; intermediate pages use numeric adjacency.

Run:

```bash
ruby -e 'root="Week_04/02_complete_intro_to_react/content"; files=(17..21).map { |n| Dir[File.join(root,format("%02d_*.html",n))].first }; abort("missing") if files.any?(&:nil?); files.each { |f| h=File.read(f); abort("#{f}: metadata") unless h.include?(%q{lang="th"}) && h.include?("lesson-original-title"); abort("#{f}: licenses") unless h.include?("CC BY-NC 4.0") && h.include?("Apache License 2.0") }; abort("boundaries") unless File.read(files.first).include?(%q{href="16_context.html"}) && File.read(files.last).include?(%q{href="22_vitest.html"})'
```

Expected: exit 0.

- [ ] **Step 4: Commit lessons 17–21**

```bash
git add Week_04/02_complete_intro_to_react/content/{17,18,19,20,21}_*.html
git commit -m "feat: translate React ecosystem and advanced lessons"
```

---

### Task 6: Testing (Lessons 22–29)

**Files:**
- Create: `Week_04/02_complete_intro_to_react/content/22_vitest.html`
- Create: `Week_04/02_complete_intro_to_react/content/23_basic_react_tests.html`
- Create: `Week_04/02_complete_intro_to_react/content/24_testing_user_interaction.html`
- Create: `Week_04/02_complete_intro_to_react/content/25_testing_custom_hooks.html`
- Create: `Week_04/02_complete_intro_to_react/content/26_snapshot_testing.html`
- Create: `Week_04/02_complete_intro_to_react/content/27_v8_coverage.html`
- Create: `Week_04/02_complete_intro_to_react/content/28_vitest_ui.html`
- Create: `Week_04/02_complete_intro_to_react/content/29_browser_tests.html`

**Interfaces:**
- Consumes: lesson 21 boundary and all source pages under `/lessons/testing/`.
- Produces: navigation chain `21 → 22 → … → 29 → 30`; Task 7 supplies lesson 30.

- [ ] **Step 1: Confirm the Testing batch is incomplete**

Run:

```bash
ruby -e 'root="Week_04/02_complete_intro_to_react/content"; abort("expected incomplete Testing batch") unless (22..29).all? { |n| Dir[File.join(root,format("%02d_*.html",n))].size == 1 }'
```

Expected: non-zero exit.

- [ ] **Step 2: Translate the eight source lessons**

Source mapping:

```text
22 https://react-v9.holt.courses/lessons/testing/vitest
23 https://react-v9.holt.courses/lessons/testing/basic-react-tests
24 https://react-v9.holt.courses/lessons/testing/testing-user-interaction
25 https://react-v9.holt.courses/lessons/testing/testing-custom-hooks
26 https://react-v9.holt.courses/lessons/testing/snapshot-testing
27 https://react-v9.holt.courses/lessons/testing/coverage
28 https://react-v9.holt.courses/lessons/testing/vitest-ui
29 https://react-v9.holt.courses/lessons/testing/browser-tests
```

Preserve test names, matcher calls, mocks, selectors, configuration objects, scripts, commands, snapshot examples, coverage settings, browser/provider configuration, imports, and package versions. Translate the author's testing philosophy and warnings closely, including stated trade-offs around implementation details and snapshots.

- [ ] **Step 3: Add navigation and verify the batch**

Lesson 22 points back to `21_uncontrolled_forms.html`; lesson 29 points forward to `30_react_19.html`; intermediate pages use numeric adjacency.

Run:

```bash
ruby -e 'root="Week_04/02_complete_intro_to_react/content"; files=(22..29).map { |n| Dir[File.join(root,format("%02d_*.html",n))].first }; abort("missing") if files.any?(&:nil?); files.each { |f| h=File.read(f); abort("#{f}: shell") unless h.include?("lesson-header") && h.include?("lesson-navigation") && h.include?("course-attribution"); abort("#{f}: source") unless h.include?("react-v9.holt.courses") }; abort("boundaries") unless File.read(files.first).include?(%q{href="21_uncontrolled_forms.html"}) && File.read(files.last).include?(%q{href="30_react_19.html"})'
```

Expected: exit 0.

- [ ] **Step 4: Commit lessons 22–29**

```bash
git add Week_04/02_complete_intro_to_react/content/2[2-9]_*.html
git commit -m "feat: translate React testing lessons"
```

---

### Task 7: What's Next and Wrap Up (Lessons 30–35)

**Files:**
- Create: `Week_04/02_complete_intro_to_react/content/30_react_19.html`
- Create: `Week_04/02_complete_intro_to_react/content/31_form_actions.html`
- Create: `Week_04/02_complete_intro_to_react/content/32_use_and_suspense.html`
- Create: `Week_04/02_complete_intro_to_react/content/33_react_compiler.html`
- Create: `Week_04/02_complete_intro_to_react/content/34_deploying_the_app.html`
- Create: `Week_04/02_complete_intro_to_react/content/35_congrats.html`

**Interfaces:**
- Consumes: lesson 29 boundary and source pages under `/lessons/whats-next/` and `/lessons/wrap-up/`.
- Produces: completed navigation chain ending at lesson 35, which has no next link.

- [ ] **Step 1: Confirm the final batch is incomplete**

Run:

```bash
ruby -e 'root="Week_04/02_complete_intro_to_react/content"; abort("expected incomplete final batch") unless (30..35).all? { |n| Dir[File.join(root,format("%02d_*.html",n))].size == 1 }'
```

Expected: non-zero exit.

- [ ] **Step 2: Translate the six source lessons**

Source mapping:

```text
30 https://react-v9.holt.courses/lessons/whats-next/react-19
31 https://react-v9.holt.courses/lessons/whats-next/form-actions
32 https://react-v9.holt.courses/lessons/whats-next/use-and-suspense
33 https://react-v9.holt.courses/lessons/whats-next/react-compiler
34 https://react-v9.holt.courses/lessons/whats-next/deploying-the-app
35 https://react-v9.holt.courses/lessons/wrap-up/congrats
```

Preserve React 19 directives/APIs, form action code, `use`/Suspense code, compiler configuration, build/deployment commands, environment variables, hosting URLs, and recommended-course links exactly. Translate version caveats and closing guidance closely.

- [ ] **Step 3: Add navigation and verify the batch**

Lesson 30 points back to `29_browser_tests.html`; lesson 35 points back to `34_deploying_the_app.html`, links to `index.html`, and contains no `rel="next"`.

Run:

```bash
ruby -e 'root="Week_04/02_complete_intro_to_react/content"; files=(30..35).map { |n| Dir[File.join(root,format("%02d_*.html",n))].first }; abort("missing") if files.any?(&:nil?); files.each { |f| h=File.read(f); abort("#{f}: metadata") unless h.include?(%q{lang="th"}) && h.include?("lesson-original-title"); abort("#{f}: licenses") unless h.include?("CC BY-NC 4.0") && h.include?("Apache License 2.0") }; abort("left boundary") unless File.read(files.first).include?(%q{href="29_browser_tests.html"}); last=File.read(files.last); abort("35 prev") unless last.include?(%q{href="34_deploying_the_app.html"}); abort("35 next") if last.include?(%q{rel="next"})'
```

Expected: exit 0.

- [ ] **Step 4: Commit lessons 30–35**

```bash
git add Week_04/02_complete_intro_to_react/content/3[0-5]_*.html
git commit -m "feat: translate React 19 deployment and wrap-up"
```

---

### Task 8: Full-Course Link, Content, and Visual Verification

**Files:**
- Verify: `Week_04/02_complete_intro_to_react/content/index.html`
- Verify: `Week_04/02_complete_intro_to_react/content/lesson.css`
- Verify: `Week_04/02_complete_intro_to_react/content/01_intro.html` through `35_congrats.html`
- Modify only files that fail the checks below.

**Interfaces:**
- Consumes: every artifact from Tasks 1–7.
- Produces: a self-contained course whose internal navigation resolves, whose required metadata/licensing is complete, and whose representative pages render correctly.

- [ ] **Step 1: Run the complete file/count/internal-link check**

Run:

```bash
ruby -e 'root="Week_04/02_complete_intro_to_react/content"; pages=Dir[File.join(root,"*.html")].sort; abort("expected 36 HTML files, got #{pages.size}") unless pages.size == 36; lessons=pages.reject { |p| File.basename(p)=="index.html" }; abort("expected 35 lessons") unless lessons.size == 35; pages.each { |p| h=File.read(p); h.scan(/href="([^"]+)"/).flatten.select { |x| x.end_with?(".html") }.each { |x| target=File.expand_path(x,File.dirname(p)); abort("broken #{p} -> #{x}") unless File.exist?(target) } }; puts "36 HTML files; all local HTML links resolve"'
```

Expected: `36 HTML files; all local HTML links resolve`.

- [ ] **Step 2: Run the global metadata, attribution, and navigation checks**

Run:

```bash
ruby -e 'root="Week_04/02_complete_intro_to_react/content"; lessons=Dir[File.join(root,"[0-9][0-9]_*.html")].sort; lessons.each_with_index { |p,i| h=File.read(p); base=File.basename(p); abort("#{base}: lang") unless h.include?(%q{<html lang="th">}); abort("#{base}: viewport") unless h.include?(%q{name="viewport"}); abort("#{base}: description") unless h.include?(%q{name="description"}); abort("#{base}: original title") unless h.include?("lesson-original-title"); abort("#{base}: index") unless h.include?(%q{href="index.html"}); abort("#{base}: source") unless h.include?("https://react-v9.holt.courses/"); abort("#{base}: licenses") unless h.include?("CC BY-NC 4.0") && h.include?("Apache License 2.0"); abort("#{base}: prev") if i==0 && h.include?(%q{rel="prev"}); abort("#{base}: missing prev") if i>0 && !h.include?(%q{rel="prev"}); abort("#{base}: next") if i==34 && h.include?(%q{rel="next"}); abort("#{base}: missing next") if i<34 && !h.include?(%q{rel="next"}) }; puts "metadata, licensing, and navigation contracts pass"'
```

Expected: `metadata, licensing, and navigation contracts pass`.

- [ ] **Step 3: Perform a translation/source parity review chapter by chapter**

For each of the 35 source mappings in Tasks 2–7, compare the source lesson against the local page and check off all of the following before moving to the next lesson:

```text
[ ] Every source prose block has a Thai counterpart.
[ ] Every source code block exists and code text is unchanged.
[ ] Lists and blockquotes retain their original order and nesting.
[ ] External links retain their original destinations.
[ ] English prose remains only where allowed by Global Constraints.
[ ] Thai terminology is consistent with earlier lessons.
```

Correct any missing or altered material immediately, then rerun Steps 1–2.

- [ ] **Step 4: Serve and visually inspect representative pages**

Run:

```bash
python3 -m http.server 8000 --directory Week_04/02_complete_intro_to_react/content
```

Inspect these pages at desktop and mobile widths:

```text
http://localhost:8000/index.html
http://localhost:8000/01_intro.html
http://localhost:8000/16_context.html
http://localhost:8000/29_browser_tests.html
http://localhost:8000/35_congrats.html
```

Verify readable Thai typography, visible focus states, correct chapter/lesson labels, horizontally scrollable code blocks, non-overlapping navigation, and complete attribution. Fix CSS/HTML defects and repeat until all five pages pass.

- [ ] **Step 5: Run final repository checks**

Run:

```bash
git diff --check
git status --short
```

Expected: `git diff --check` exits 0; `git status --short` lists only intentional corrections made during this task.

- [ ] **Step 6: Commit final verification corrections**

If Task 8 changed files:

```bash
git add Week_04/02_complete_intro_to_react/content
git commit -m "fix: verify Thai React course content and navigation"
```

If Task 8 required no corrections, do not create an empty commit.
