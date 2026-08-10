# Tailwind and Cursor Workshop Quiz Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a validated 16-question Thai quiz with one practical multiple-choice question for each Tailwind and Cursor workshop lesson from 01 through 16.

**Architecture:** Produce one standalone JSON artifact that follows the existing sample schema. Read each lesson as the authoritative source, preserve lesson order in the questions array, and validate the finished artifact with a small read-only Node.js assertion script.

**Tech Stack:** JSON, Node.js standard library, HTML lesson source files

## Global Constraints

- Write `extra/quiz-questions-tailwind-cursor-workshop.json`.
- Use a top-level `questions` array containing exactly 16 questions in lesson order.
- Source exactly one question from each lesson in `Week_05_06/01_tailwind_cursor_workshop/content/01_intro.html` through `16_wrap_up.html`.
- Write clear, natural Thai and test practical comprehension without trick questions.
- Give every question exactly three plausible choices, a 1-based `correctChoice`, and a concise non-empty `explanation`.
- Use `body` only if a code snippet is necessary.
- Do not introduce facts that are absent from the lesson source.

---

### Task 1: Create and validate the workshop quiz

**Files:**
- Create: `extra/quiz-questions-tailwind-cursor-workshop.json`
- Reference: `extra/quiz-questions-sample.json`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/01_intro.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/02_setup.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/03_utility_first.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/04_responsive_states.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/05_theme_tokens.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/06_reading_ui.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/07_prompt_anatomy.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/08_figma_handoff.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/09_app_shell.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/10_dashboard_page.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/11_tables_signup.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/12_review_responsive.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/13_review_accessibility.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/14_review_maintainability.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/15_refactor_components.html`
- Reference: `Week_05_06/01_tailwind_cursor_workshop/content/16_wrap_up.html`

**Interfaces:**
- Consumes: HTML lesson content and the JSON field conventions demonstrated by `extra/quiz-questions-sample.json`.
- Produces: A JSON object shaped as `{ "questions": Question[] }`, where each `Question` has `prompt: string`, `choices: [string, string, string]`, `correctChoice: 1 | 2 | 3`, `explanation: string`, and optional `body: string`.

- [ ] **Step 1: Extract one central learning objective from every lesson**

Read lessons 01–16 in numerical order. For each lesson, identify one concept that can be tested without external knowledge, prioritizing the workshop loop, Tailwind setup and utilities, responsive/state variants, theme tokens, UI decomposition, prompt anatomy, Figma inspection, routing/layout, UI generation, responsive/accessibility/maintainability review, component props, and the final Profile exercise.

- [ ] **Step 2: Draft the complete JSON artifact**

Create `extra/quiz-questions-tailwind-cursor-workshop.json` with exactly one question per extracted objective. Make each question self-contained, provide exactly three choices, vary the location of correct answers across positions 1–3, and explain why the selected answer follows from its lesson.

- [ ] **Step 3: Run structural validation**

Run:

```bash
node -e 'const fs=require("fs");const p="extra/quiz-questions-tailwind-cursor-workshop.json";const d=JSON.parse(fs.readFileSync(p,"utf8"));if(!d||!Array.isArray(d.questions))throw new Error("questions must be an array");if(d.questions.length!==16)throw new Error(`expected 16 questions, got ${d.questions.length}`);d.questions.forEach((q,i)=>{if(typeof q.prompt!=="string"||!q.prompt.trim())throw new Error(`question ${i+1}: invalid prompt`);if(!Array.isArray(q.choices)||q.choices.length!==3||q.choices.some(c=>typeof c!=="string"||!c.trim()))throw new Error(`question ${i+1}: invalid choices`);if(!Number.isInteger(q.correctChoice)||q.correctChoice<1||q.correctChoice>3)throw new Error(`question ${i+1}: invalid correctChoice`);if(typeof q.explanation!=="string"||!q.explanation.trim())throw new Error(`question ${i+1}: invalid explanation`)});console.log("Validated 16 quiz questions")'
```

Expected: `Validated 16 quiz questions`

- [ ] **Step 4: Review content against lesson sources**

Read the questions beside lessons 01–16 in order. Confirm that each intended answer is supported by its corresponding lesson, distractors are unambiguously incorrect, Thai wording is natural, and no two questions test the same core idea.

- [ ] **Step 5: Check formatting and repository scope**

Run:

```bash
git diff --check -- extra/quiz-questions-tailwind-cursor-workshop.json
git status --short
```

Expected: no whitespace errors; status lists the new quiz file and preserves any unrelated pre-existing user files.

