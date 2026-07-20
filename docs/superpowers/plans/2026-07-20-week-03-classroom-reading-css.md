# Week 03 Classroom Reading CSS Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Apply one readable, responsive classroom theme to every Week 03 JavaScript HTML lesson without changing lesson content.

**Architecture:** Create one `lesson.css` file in the lesson directory and reference it from all 31 sibling HTML files. The stylesheet targets existing semantic elements (`main`, headings, lists, code, tables, details, and footer), so lesson markup requires only one stylesheet link.

**Tech Stack:** HTML5, CSS3, POSIX shell verification, `xmllint`

## Global Constraints

- Do not alter lesson text, code examples, semantic structure, or attribution.
- Use only local CSS and system fonts; add no external dependency.
- Preserve long code and tables with horizontal scrolling.
- Support desktop, mobile below 640px, keyboard focus, and print output.

---

### Task 1: Shared stylesheet and lesson links

**Files:**
- Create: `Week_03/01_basic_javaScript/content/lesson.css`
- Modify: `Week_03/01_basic_javaScript/content/*.html`

**Interfaces:**
- Consumes: Existing semantic HTML elements in 31 lesson files
- Produces: A shared `lesson.css` referenced exactly once by each lesson

- [ ] **Step 1: Run the stylesheet-link acceptance check before implementation**

```bash
html_count=$(find Week_03/01_basic_javaScript/content -maxdepth 1 -name '*.html' -type f | wc -l | tr -d ' ')
linked_count=$(rg -l 'href="lesson.css"' Week_03/01_basic_javaScript/content/*.html | wc -l | tr -d ' ')
test "$html_count" = "$linked_count"
```

Expected: FAIL because none of the 31 lessons references `lesson.css` yet.

- [ ] **Step 2: Create the shared stylesheet**

Create `lesson.css` with this implementation:

```css
:root {
  color-scheme: light;
  --canvas: #eef3f8;
  --surface: #ffffff;
  --text: #172033;
  --muted: #526075;
  --blue: #2563a6;
  --blue-dark: #174876;
  --blue-soft: #e8f1fb;
  --amber: #d89b13;
  --border: #ccd8e5;
  --code-bg: #172033;
  --code-text: #eef4ff;
  --shadow: 0 18px 50px rgb(32 55 81 / 12%);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  background: var(--canvas);
}

body {
  min-height: 100vh;
  margin: 0;
  color: var(--text);
  background:
    linear-gradient(90deg, var(--blue) 0 72%, var(--amber) 72% 100%) top / 100% 6px no-repeat,
    var(--canvas);
  font-family: "Noto Sans Thai", "Leelawadee UI", Tahoma, Arial, sans-serif;
  font-size: 1rem;
  line-height: 1.75;
}

main {
  width: min(840px, calc(100% - 40px));
  margin: 48px auto 24px;
  padding: clamp(32px, 6vw, 72px);
  overflow-wrap: break-word;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

article {
  min-width: 0;
}

h1,
h2,
h3,
h4 {
  color: var(--text);
  line-height: 1.3;
  text-wrap: balance;
}

h1 {
  margin: 0 0 1.5rem;
  padding-inline-start: 18px;
  font-size: clamp(2rem, 6vw, 3.25rem);
  letter-spacing: -0.035em;
  border-inline-start: 6px solid var(--amber);
}

h2 {
  margin: 3rem 0 1rem;
  padding-bottom: 0.55rem;
  color: var(--blue-dark);
  font-size: clamp(1.45rem, 3vw, 2rem);
  border-bottom: 2px solid var(--blue-soft);
}

h3 {
  margin: 2rem 0 0.75rem;
  color: var(--blue);
  font-size: clamp(1.15rem, 2vw, 1.4rem);
}

h4 {
  margin: 1.5rem 0 0.5rem;
  color: var(--muted);
  font-size: 1.05rem;
}

p,
ul,
ol,
pre,
table,
details {
  margin-top: 0;
  margin-bottom: 1.35rem;
}

p,
li {
  line-height: 1.8;
}

ul,
ol {
  padding-inline-start: 1.6rem;
}

li + li {
  margin-top: 0.45rem;
}

li > ul,
li > ol {
  margin-top: 0.55rem;
  margin-bottom: 0.7rem;
}

strong {
  font-weight: 700;
}

a {
  color: var(--blue-dark);
  text-decoration-thickness: 1.5px;
  text-underline-offset: 0.2em;
}

a:hover {
  color: var(--blue);
}

a:focus-visible,
summary:focus-visible {
  outline: 3px solid rgb(216 155 19 / 45%);
  outline-offset: 3px;
}

code {
  padding: 0.12em 0.38em;
  color: var(--blue-dark);
  background: var(--blue-soft);
  border: 1px solid #d4e3f3;
  border-radius: 5px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.9em;
}

pre {
  max-width: 100%;
  padding: 1.25rem 1.4rem;
  overflow-x: auto;
  color: var(--code-text);
  background: var(--code-bg);
  border: 1px solid #293752;
  border-radius: 12px;
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 7%);
  line-height: 1.65;
  tab-size: 2;
}

pre code {
  padding: 0;
  color: inherit;
  background: transparent;
  border: 0;
  border-radius: 0;
  font-size: 0.9rem;
  white-space: pre;
}

table {
  display: block;
  width: 100%;
  max-width: 100%;
  overflow-x: auto;
  border-spacing: 0;
  border-collapse: collapse;
  border: 1px solid var(--border);
  border-radius: 10px;
}

th,
td {
  min-width: 120px;
  padding: 0.75rem 0.9rem;
  text-align: start;
  vertical-align: top;
  border: 1px solid var(--border);
}

th {
  color: #ffffff;
  background: var(--blue-dark);
  font-weight: 700;
}

tbody tr:nth-child(even) {
  background: #f7f9fc;
}

details {
  overflow: hidden;
  background: #f8fbff;
  border: 1px solid var(--border);
  border-radius: 10px;
}

summary {
  padding: 0.8rem 1rem;
  color: var(--blue-dark);
  background: var(--blue-soft);
  cursor: pointer;
  font-weight: 700;
}

details[open] summary {
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border);
}

details > :not(summary) {
  margin-inline: 1rem;
}

footer {
  width: min(840px, calc(100% - 40px));
  margin: 0 auto 40px;
  color: var(--muted);
  font-size: 0.82rem;
  text-align: center;
}

footer p {
  margin: 0;
}

::selection {
  color: var(--text);
  background: #f8dc92;
}

@media (max-width: 640px) {
  body {
    background-size: 100% 4px;
  }

  main {
    width: 100%;
    margin: 4px 0 20px;
    padding: 28px 20px 36px;
    border-inline: 0;
    border-radius: 0;
    box-shadow: none;
  }

  h1 {
    padding-inline-start: 12px;
    border-inline-start-width: 4px;
  }

  pre {
    margin-inline: -4px;
    padding: 1rem;
    border-radius: 8px;
  }

  footer {
    width: 100%;
    margin-bottom: 24px;
    padding-inline: 20px;
  }
}

@media print {
  @page {
    margin: 18mm;
  }

  body {
    color: #000000;
    background: #ffffff;
    font-size: 11pt;
  }

  main {
    width: 100%;
    margin: 0;
    padding: 0;
    border: 0;
    border-radius: 0;
    box-shadow: none;
  }

  pre {
    color: #000000;
    background: #ffffff;
    border-color: #777777;
    white-space: pre-wrap;
  }

  footer {
    width: 100%;
    margin: 24px 0 0;
    color: #333333;
  }
}
```

- [ ] **Step 3: Link the stylesheet in every lesson**

Insert the following immediately before `</head>` in every HTML file that does not already contain it:

```html
<link rel="stylesheet" href="lesson.css" />
```

- [ ] **Step 4: Re-run the stylesheet-link acceptance check**

```bash
html_count=$(find Week_03/01_basic_javaScript/content -maxdepth 1 -name '*.html' -type f | wc -l | tr -d ' ')
linked_count=$(rg -l 'href="lesson.css"' Week_03/01_basic_javaScript/content/*.html | wc -l | tr -d ' ')
link_count=$(rg -o 'href="lesson.css"' Week_03/01_basic_javaScript/content/*.html | wc -l | tr -d ' ')
test "$html_count" = "$linked_count" && test "$html_count" = "$link_count"
```

Expected: PASS with `html_count`, `linked_count`, and `link_count` all equal to 31.

### Task 2: Structural and stylesheet verification

**Files:**
- Verify: `Week_03/01_basic_javaScript/content/lesson.css`
- Verify: `Week_03/01_basic_javaScript/content/*.html`

**Interfaces:**
- Consumes: The shared stylesheet and linked lesson documents from Task 1
- Produces: Evidence that markup remains well formed and required CSS capabilities exist

- [ ] **Step 1: Validate all lesson documents**

```bash
for lesson in Week_03/01_basic_javaScript/content/*.html; do
  xmllint --noout "$lesson" || exit 1
done
```

Expected: exit code 0 with no output.

- [ ] **Step 2: Verify required stylesheet behavior**

```bash
rg -q '^:root' Week_03/01_basic_javaScript/content/lesson.css
rg -q 'overflow-x: auto' Week_03/01_basic_javaScript/content/lesson.css
rg -q ':focus-visible' Week_03/01_basic_javaScript/content/lesson.css
rg -q '@media.*max-width: 640px' Week_03/01_basic_javaScript/content/lesson.css
rg -q '@media print' Week_03/01_basic_javaScript/content/lesson.css
```

Expected: exit code 0.

- [ ] **Step 3: Check repository whitespace errors**

```bash
git diff --check -- Week_03/01_basic_javaScript/content
```

Expected: exit code 0 with no output.

### Task 3: Representative browser QA

**Files:**
- Inspect: `Week_03/01_basic_javaScript/content/01_what_is_javascript.html`
- Inspect: `Week_03/01_basic_javaScript/content/16_reference_vs_value.html`
- Inspect: `Week_03/01_basic_javaScript/content/20_ternary_operator.html`

**Interfaces:**
- Consumes: Validated themed lessons from Task 2
- Produces: Visual confirmation for prose, tables, code, details, desktop, and mobile

- [ ] **Step 1: Start a local static server**

```bash
python3 -m http.server 4173
```

Expected: the lesson directory is available at `http://127.0.0.1:4173/Week_03/01_basic_javaScript/content/`.

- [ ] **Step 2: Inspect representative pages at desktop width**

Confirm the prose page has a centered reading sheet and clear hierarchy, the reference/value page keeps tables readable without clipping, and the ternary page presents code and answer details clearly.

- [ ] **Step 3: Inspect the prose page at mobile width**

Confirm the page uses compact padding, no horizontal page overflow occurs, and code/table elements scroll internally when required.

- [ ] **Step 4: Stop the local server and report verification evidence**

Stop only the server process started in Step 1. Report HTML/link counts, validation status, and representative browser results.
