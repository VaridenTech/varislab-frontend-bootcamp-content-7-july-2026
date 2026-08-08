# Tailwind + Cursor Workshop Natural-language Edit Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every learner-facing passage in the Tailwind + Cursor workshop sound like natural classroom Thai while preserving its technical meaning and structure.

**Architecture:** Apply a conservative editorial pass to related lesson groups in teaching order. Treat HTML markup, embedded code, commands, routes, filenames, API names, and literal UI copy as immutable boundaries; change only the prose around them. Finish with repository-wide structural and language checks.

**Tech Stack:** Static HTML, CSS, shell-based repository checks, Python standard-library HTML parser for structural validation

## Global Constraints

- Review and edit all 17 HTML files: the workshop index and lessons 01–16.
- Use natural Thai that sounds like a teacher explaining the material in person.
- Keep common developer terms in English where Thai developers normally use them, including prompt, component, responsive, accessibility, refactor, layout, props, state, and Agent.
- Preserve lesson order, HTML structure, links, examples, exercises, and technical meaning.
- Do not edit `lesson.css`, images, source code, terminal commands, API names, filenames, CSS classes, route paths, or literal UI labels.
- Remove forced jokes, exaggerated claims, dramatic metaphors, artificial slogans, repetitive rhetorical contrasts, and literal English-to-Thai sentence patterns.
- Keep passages that already read naturally.

---

### Task 1: Foundation lessons

**Files:**
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/01_intro.html`
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/02_setup.html`
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/03_utility_first.html`
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/04_responsive_states.html`
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/05_theme_tokens.html`

**Interfaces:**
- Consumes: The approved voice and terminology constraints in the design spec.
- Produces: Natural introductory and Tailwind-foundation lessons whose markup and embedded technical material remain unchanged.

- [ ] **Step 1: Read all learner-facing prose in lessons 01–05**

Flag wording that is stiff, formulaic, over-dramatic, repetitive, or translated too literally from English. Leave natural passages unchanged.

- [ ] **Step 2: Edit lessons 01–05 conservatively**

Shorten crowded sentences, replace forced metaphors with direct explanations, vary repeated paragraph rhythms, and preserve the instructor's friendly voice.

- [ ] **Step 3: Inspect the task diff**

Run: `git diff -- Week_05_06/01_tailwind_cursor_workshop/content/{01_intro,02_setup,03_utility_first,04_responsive_states,05_theme_tokens}.html`

Expected: only learner-facing prose changes; code blocks, commands, links, attributes, and lesson structure remain intact.

### Task 2: Reading designs and writing prompts

**Files:**
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/06_reading_ui.html`
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/07_prompt_anatomy.html`
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/08_figma_handoff.html`

**Interfaces:**
- Consumes: The terminology and classroom voice established in Task 1.
- Produces: Clear design-reading and prompting lessons without slogan-like or AI-generated phrasing.

- [ ] **Step 1: Read all learner-facing prose in lessons 06–08**

Pay particular attention to repeated four-part formulas, commands framed as slogans, and claims about what AI can infer.

- [ ] **Step 2: Edit lessons 06–08 conservatively**

Keep prompt templates and literal example prompts unchanged while making the surrounding Thai explanations sound conversational and precise.

- [ ] **Step 3: Inspect the task diff**

Run: `git diff -- Week_05_06/01_tailwind_cursor_workshop/content/{06_reading_ui,07_prompt_anatomy,08_figma_handoff}.html`

Expected: prose is smoother; prompt examples, Figma details, tags, and links are unchanged.

### Task 3: Building the workshop UI

**Files:**
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/09_app_shell.html`
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/10_dashboard_page.html`
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/11_tables_signup.html`

**Interfaces:**
- Consumes: The established voice and protected-code boundaries.
- Produces: Natural step-by-step implementation guidance with commands, prompts, and code samples preserved.

- [ ] **Step 1: Read all learner-facing prose in lessons 09–11**

Separate instructional prose from literal prompts, code, UI labels, and commands before editing.

- [ ] **Step 2: Edit lessons 09–11 conservatively**

Replace mechanical transitions and exaggerated review language with concrete instructions a teacher would say while students work through the UI.

- [ ] **Step 3: Inspect the task diff**

Run: `git diff -- Week_05_06/01_tailwind_cursor_workshop/content/{09_app_shell,10_dashboard_page,11_tables_signup}.html`

Expected: implementation details and examples are unchanged; only surrounding learner-facing language is revised.

### Task 4: Reviewing and refactoring

**Files:**
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/12_review_responsive.html`
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/13_review_accessibility.html`
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/14_review_maintainability.html`
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/15_refactor_components.html`
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/16_wrap_up.html`

**Interfaces:**
- Consumes: The natural teaching voice used in Tasks 1–3.
- Produces: Direct review, refactoring, and wrap-up lessons without moralizing, inflated claims, or repeated slogans.

- [ ] **Step 1: Read all learner-facing prose in lessons 12–16**

Flag dramatic metaphors, absolute claims, adversarial AI framing, repeated recap formulas, and unnatural motivational language.

- [ ] **Step 2: Edit lessons 12–16 conservatively**

Preserve checklist items, accessibility requirements, component APIs, and code behavior while making explanations practical and conversational.

- [ ] **Step 3: Inspect the task diff**

Run: `git diff -- Week_05_06/01_tailwind_cursor_workshop/content/{12_review_responsive,13_review_accessibility,14_review_maintainability,15_refactor_components,16_wrap_up}.html`

Expected: technical requirements remain precise; prose no longer sounds formulaic or overly dramatic.

### Task 5: Index consistency and final verification

**Files:**
- Modify: `Week_05_06/01_tailwind_cursor_workshop/content/index.html`
- Verify: `Week_05_06/01_tailwind_cursor_workshop/content/*.html`
- Verify unchanged: `Week_05_06/01_tailwind_cursor_workshop/content/lesson.css`
- Verify unchanged: `Week_05_06/01_tailwind_cursor_workshop/content/images/*`

**Interfaces:**
- Consumes: All revised lessons from Tasks 1–4.
- Produces: A consistent workshop index and evidence that the complete content set meets the approved constraints.

- [ ] **Step 1: Align the index wording with the revised lessons**

Edit only headings, the workshop summary, or navigation labels that sound unnatural or no longer match lesson titles. Preserve all destinations and ordering.

- [ ] **Step 2: Parse every HTML file**

Run:

```bash
python3 -c 'from html.parser import HTMLParser; from pathlib import Path; p=HTMLParser(); files=sorted(Path("Week_05_06/01_tailwind_cursor_workshop/content").glob("*.html")); [p.feed(f.read_text()) for f in files]; print(f"parsed {len(files)} HTML files")'
```

Expected: `parsed 17 HTML files`

- [ ] **Step 3: Confirm protected assets were not edited**

Run: `git status --short Week_05_06/01_tailwind_cursor_workshop/content`

Expected: only the 17 intended HTML files are listed; `lesson.css` and `images/` are absent.

- [ ] **Step 4: Scan for common AI-style patterns and accidental placeholders**

Run: `rg -n 'T[B]D|T[O]DO|ในโลกที่|ไม่ใช่แค่.+แต่|หัวใจสำคัญ|เปลี่ยนเกม|ทรงพลัง|อย่างแท้จริง|ตลอดกาล|แค่กดปุ่มแล้วภาวนา' Week_05_06/01_tailwind_cursor_workshop/content/*.html`

Expected: no unexplained placeholders and no remaining occurrences that read as forced or formulaic after manual review.

- [ ] **Step 5: Review the complete diff and whitespace**

Run: `git diff --check && git diff --stat && git diff -- Week_05_06/01_tailwind_cursor_workshop/content`

Expected: no whitespace errors, changes are confined to intended prose, and all 17 HTML files have been reviewed even if a naturally written file needed no edit.

- [ ] **Step 6: Commit the completed editorial pass**

```bash
git add Week_05_06/01_tailwind_cursor_workshop/content/*.html
git commit -m "content: make Tailwind workshop language more natural"
```
