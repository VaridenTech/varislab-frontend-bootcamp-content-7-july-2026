# Week 04 Router to User Interaction Quiz Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a validated Thai multiple-choice quiz covering lessons 18–25, from TanStack Router through testing user interaction.

**Architecture:** Add one standalone JSON artifact following the repository's existing quiz schema. Derive every question directly from the eight source lessons, use weighted coverage, and validate structure mechanically before reviewing content manually against the lessons.

**Tech Stack:** JSON, HTML code fragments, `jq`, shell validation

## Global Constraints

- Create `extra/quiz-questions-week04-router-to-user-interaction.json` and do not modify existing lessons or quizzes.
- Use a top-level `questions` array and target 16–18 Thai-language questions.
- Every question must have a non-empty `prompt`, exactly three `choices`, a one-based `correctChoice`, and a non-empty `explanation`.
- Add `body` only when code is necessary; encode it as valid HTML and preserve code from the source lesson.
- Cover every lesson from 18 through 25, weighting larger lessons more heavily.
- Test concepts, behavior, trade-offs, and code reading without trivia, duplicated concepts, trick wording, or outside material.

---

### Task 1: Build the Source Coverage Map

**Files:**
- Read: `Week_04/02_complete_intro_to_react/content/18_tanstack_router.html`
- Read: `Week_04/02_complete_intro_to_react/content/19_tanstack_query.html`
- Read: `Week_04/02_complete_intro_to_react/content/20_portals.html`
- Read: `Week_04/02_complete_intro_to_react/content/21_error_boundaries.html`
- Read: `Week_04/02_complete_intro_to_react/content/22_uncontrolled_forms.html`
- Read: `Week_04/02_complete_intro_to_react/content/23_vitest.html`
- Read: `Week_04/02_complete_intro_to_react/content/24_basic_react_tests.html`
- Read: `Week_04/02_complete_intro_to_react/content/25_testing_user_interaction.html`
- Read: `extra/quiz-questions-sample.json`
- Read: `extra/quiz-questions-week04-effects-to-router.json`

**Interfaces:**
- Consumes: Lesson prose and examples plus the existing quiz schema and Thai writing style.
- Produces: A working coverage map in notes with at least one distinct question topic for each lesson and 16–18 topics total.

- [ ] **Step 1: Extract each lesson's headings and explanatory text**

Run:

```bash
for file in Week_04/02_complete_intro_to_react/content/{18,19,20,21,22,23,24,25}_*.html; do
  echo "SOURCE: $file"
  sed -n '1,240p' "$file"
done
```

Expected: Complete source material for all eight lessons is available for question drafting.

- [ ] **Step 2: Allocate weighted question coverage**

Use this initial allocation, adjusting by at most one question while keeping the total between 16 and 18:

```text
18 TanStack Router: 3
19 TanStack Query: 3
20 Portals: 1
21 Error Boundaries: 2
22 Uncontrolled Forms: 2
23 Vitest: 2
24 Basic React Tests: 2
25 Testing User Interaction: 2
Total: 17
```

Expected: Every lesson has meaningful coverage and no two topics test the same learning point.

- [ ] **Step 3: Review the map for source fidelity**

For each planned topic, identify the exact lesson paragraph or code example that establishes the correct answer. Remove any topic that requires knowledge not stated in lessons 18–25.

Expected: All 17 planned answers are traceable to the selected source range.

### Task 2: Author the Quiz Artifact

**Files:**
- Create: `extra/quiz-questions-week04-router-to-user-interaction.json`

**Interfaces:**
- Consumes: The 17-topic coverage map from Task 1 and the schema from `extra/quiz-questions-sample.json`.
- Produces: A UTF-8 JSON object shaped as `{ "questions": Question[] }`, where each `Question` follows the required fields in Global Constraints.

- [ ] **Step 1: Create all 17 questions in lesson order**

Write questions in ascending lesson order so coverage can be audited. Use natural Thai for prompts, choices, and explanations; preserve API names and identifiers in English. Rotate the correct answer positions instead of placing every answer at the same index.

Expected: The new file contains 17 non-duplicative questions and all required fields.

- [ ] **Step 2: Add code bodies only to code-reading questions**

Use this shape when a snippet is required:

```json
{
  "prompt": "คำถามที่ต้องอ่านโค้ด",
  "body": "<pre><code class=\"language-typescript\">const example = true;</code></pre>",
  "choices": ["คำตอบหนึ่ง", "คำตอบสอง", "คำตอบสาม"],
  "correctChoice": 1,
  "explanation": "คำอธิบายที่โยงกลับไปยังพฤติกรรมของโค้ด"
}
```

Expected: Snippets are short, necessary, valid inside JSON strings, and HTML-sensitive characters such as `<` inside code are escaped where required.

- [ ] **Step 3: Review question quality**

Read each question without looking at `correctChoice`. Confirm exactly one choice is defensibly correct, each distractor reflects a plausible misconception, and the explanation resolves the distinction using lesson content.

Expected: No ambiguous answers, trivia, trick wording, or repeated learning points remain.

### Task 3: Validate and Commit the Quiz

**Files:**
- Test: `extra/quiz-questions-week04-router-to-user-interaction.json`

**Interfaces:**
- Consumes: The quiz JSON produced by Task 2.
- Produces: A parsed, schema-checked, reviewed quiz committed to the repository.

- [ ] **Step 1: Verify JSON parsing and question count**

Run:

```bash
jq -e '.questions | type == "array" and (length >= 16 and length <= 18)' extra/quiz-questions-week04-router-to-user-interaction.json
```

Expected: `true` and exit code 0.

- [ ] **Step 2: Verify every required field and choice index**

Run:

```bash
jq -e 'all(.questions[];
  (.prompt | type == "string" and length > 0) and
  (.choices | type == "array" and length == 3 and all(.[]; type == "string" and length > 0)) and
  (.correctChoice | type == "number" and floor == . and . >= 1 and . <= 3) and
  (.explanation | type == "string" and length > 0) and
  ((has("body") | not) or (.body | type == "string" and length > 0))
)' extra/quiz-questions-week04-router-to-user-interaction.json
```

Expected: `true` and exit code 0.

- [ ] **Step 3: Inspect the normalized artifact**

Run:

```bash
jq '.' extra/quiz-questions-week04-router-to-user-interaction.json
git diff --check
```

Expected: All questions render legibly, escaped code remains intact, and `git diff --check` reports no whitespace errors.

- [ ] **Step 4: Perform the source coverage audit**

Compare the questions sequentially with the Task 1 coverage map and lessons 18–25. Check off all eight lesson numbers and independently recompute each `correctChoice` from the listed choices.

Expected: Lessons 18, 19, 20, 21, 22, 23, 24, and 25 are all represented, and every stored answer index selects the intended answer.

- [ ] **Step 5: Commit the quiz**

```bash
git add extra/quiz-questions-week04-router-to-user-interaction.json
git commit -m "content: add router to user interaction quiz"
```

Expected: The commit contains the new quiz file and no unrelated changes.
