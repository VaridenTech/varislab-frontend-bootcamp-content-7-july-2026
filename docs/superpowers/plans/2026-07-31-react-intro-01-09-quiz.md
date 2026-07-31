# React Intro Lessons 01–09 Quiz Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a valid Thai-language, 12-question quiz covering React lessons 01 through 09.

**Architecture:** Add one standalone JSON artifact that follows the repository's sample quiz schema. Author questions directly from the nine HTML lessons, then use a small read-only Node.js validation command to enforce the structural constraints.

**Tech Stack:** JSON, Node.js built-in `fs` module

## Global Constraints

- Output path: `extra/react-intro-01-09-quiz.json`.
- Use the structure demonstrated by `extra/quiz-questions-sample.json`.
- Write all prompts, choices, and explanations in Thai.
- Include exactly 12 questions and cover every lesson from 01 through 09.
- Give every question exactly 3 choices, a 1-based `correctChoice`, and an `explanation`.
- Use an HTML `<pre><code>...</code></pre>` body for code-reading questions.

---

### Task 1: Author the balanced quiz

**Files:**
- Create: `extra/react-intro-01-09-quiz.json`
- Reference: `extra/quiz-questions-sample.json`
- Reference: `Week_04/02_complete_intro_to_react/content/01_intro.html`
- Reference: `Week_04/02_complete_intro_to_react/content/02_react_without_a_build_step.html`
- Reference: `Week_04/02_complete_intro_to_react/content/03_components.html`
- Reference: `Week_04/02_complete_intro_to_react/content/04_npm.html`
- Reference: `Week_04/02_complete_intro_to_react/content/05_code_formatting.html`
- Reference: `Week_04/02_complete_intro_to_react/content/06_eslint.html`
- Reference: `Week_04/02_complete_intro_to_react/content/07_git.html`
- Reference: `Week_04/02_complete_intro_to_react/content/08_vite.html`
- Reference: `Week_04/02_complete_intro_to_react/content/09_jsx.html`

**Interfaces:**
- Consumes: Lesson prose and code examples from the nine reference HTML files.
- Produces: A JSON object shaped as `{ "questions": QuizQuestion[] }`, where each question contains `prompt: string`, `choices: [string, string, string]`, `correctChoice: 1 | 2 | 3`, `explanation: string`, and optional `body: string`.

- [ ] **Step 1: Draft a coverage map**

Use this 12-question allocation before writing JSON:

```text
01 Intro: 2 questions — declarative React and UI = f(state)
02 Without a build step: 1 question — createRoot/render or createElement
03 Components: 1 question — component/props
04 npm: 2 questions — package.json/dependency behavior and command/version concept
05 Formatting: 1 question — Prettier's responsibility
06 ESLint: 1 question — linting's responsibility
07 Git: 1 question — commit/history workflow
08 Vite: 1 question — development/build tooling and entry behavior
09 JSX: 2 questions — JSX transformation/expression and TSX/typed props
```

- [ ] **Step 2: Create the JSON artifact**

Create the complete JSON object using the sample's field names. Vary the position of correct answers across 1, 2, and 3; include at least two code-reading questions; make distractors plausible and unambiguous.

- [ ] **Step 3: Review content against the sources**

For each question, locate the supporting statement or code in its allocated lesson. Confirm the explanation justifies the correct answer and does not introduce concepts outside lessons 01–09.

- [ ] **Step 4: Commit the quiz artifact**

```bash
git add extra/react-intro-01-09-quiz.json
git commit -m "content: add React intro lessons quiz"
```

### Task 2: Validate structure and presentation

**Files:**
- Test: `extra/react-intro-01-09-quiz.json`

**Interfaces:**
- Consumes: The quiz JSON produced by Task 1.
- Produces: Verification that the file parses and satisfies all agreed structural constraints.

- [ ] **Step 1: Run the structural validator**

Run:

```bash
node -e 'const fs=require("fs");const p="extra/react-intro-01-09-quiz.json";const d=JSON.parse(fs.readFileSync(p,"utf8"));if(!Array.isArray(d.questions)||d.questions.length!==12)throw new Error("expected 12 questions");d.questions.forEach((q,i)=>{if(typeof q.prompt!=="string"||!q.prompt.trim())throw new Error(`question ${i+1}: prompt`);if(!Array.isArray(q.choices)||q.choices.length!==3)throw new Error(`question ${i+1}: choices`);if(!Number.isInteger(q.correctChoice)||q.correctChoice<1||q.correctChoice>3)throw new Error(`question ${i+1}: correctChoice`);if(typeof q.explanation!=="string"||!q.explanation.trim())throw new Error(`question ${i+1}: explanation`)});console.log("quiz structure: OK (12 questions)")'
```

Expected: `quiz structure: OK (12 questions)`.

- [ ] **Step 2: Check formatting and unintended changes**

Run:

```bash
git diff --check
git status --short
```

Expected: `git diff --check` exits successfully; status lists no unintended files added by this work.

- [ ] **Step 3: Perform the final manual review**

Read the rendered strings once more for natural Thai, unique choices, balanced correct-answer positions, valid HTML in each `body`, and explicit coverage of lessons 01–09.
