# W03.01 JavaScript Introduction Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a Thai, instructor-ready first JavaScript lesson at `Week_03/01_basic_javaScript/content/01_what_is_javascript.md`.

**Architecture:** One focused Markdown file contains the complete class flow in teaching order: opening, concepts, classroom prompts, activity, recap, and next-step transition. The content follows the existing Week 02 instructor-note style while using beginner-friendly Thai and technically accurate JavaScript terminology.

**Tech Stack:** Markdown, UTF-8, Git

## Global Constraints

- Create `Week_03/01_basic_javaScript/content/01_what_is_javascript.md` as the first sequentially numbered lesson file.
- Write Thai as the primary language; preserve JavaScript, runtime, framework, and code identifiers in English/backticks where useful.
- Make the lesson usable in a 45–60 minute first JavaScript class.
- Cover browser, server, desktop, and mobile use cases without requiring students to memorize framework names.
- Explain JavaScript as a scripting language accurately without claiming modern engines never compile or optimize code.
- Include a 5-minute activity, checks for understanding, and a bridge to the next lesson.

---

### Task 1: Create the instructor-ready lesson

**Files:**
- Create: `Week_03/01_basic_javaScript/content/01_what_is_javascript.md`
- Test: `Week_03/01_basic_javaScript/content/01_what_is_javascript.md` via structural and encoding checks

**Interfaces:**
- Consumes: The approved lesson design in `docs/superpowers/specs/2026-07-19-week-03-javascript-introduction-design.md`
- Produces: A self-contained teaching script that the instructor can follow from top to bottom.

- [ ] **Step 1: Define structural acceptance checks**

Run:

```bash
test -f Week_03/01_basic_javaScript/content/01_what_is_javascript.md
```

Expected before implementation: FAIL because the lesson file does not exist.

- [ ] **Step 2: Create the lesson with the complete class sequence**

Write a Markdown lesson with these exact major sections, in order:

```markdown
# W03.01 — JavaScript คืออะไร?
## เป้าหมายของคลาส
## โครงสร้างคลาส 60 นาที
## Opening Script
## 1. JavaScript ทำอะไรให้เว็บไซต์ได้บ้าง?
## 2. JavaScript ใช้งานได้ที่ไหนบ้าง?
## 3. JavaScript เป็น Scripting Language หมายความว่าอย่างไร?
## 4. ทำไม JavaScript จึงเหมาะกับการเริ่มเขียนโปรแกรมบนเว็บ?
## กิจกรรม 5 นาที: มองหา JavaScript รอบตัว
## คำถามเช็กความเข้าใจ
## สรุปก่อนจบคลาส
## สะพานไปยังบทถัดไป
```

Within these sections, include:

```markdown
HTML = โครงสร้าง
CSS = หน้าตาและการจัดวาง
JavaScript = พฤติกรรมและการโต้ตอบ
```

Use a browser interaction example such as a button that changes text. Explain `Node.js` as a popular JavaScript runtime for server work, mention Electron/Tauri and React Native/Ionic as examples only, and state that JavaScript and Java are different languages. Explain that a JavaScript engine runs the code and may optimize it internally.

- [ ] **Step 3: Run structural and content checks**

Run:

```bash
test -f Week_03/01_basic_javaScript/content/01_what_is_javascript.md && \
rg -n '^## (เป้าหมายของคลาส|โครงสร้างคลาส 60 นาที|Opening Script|1\\. JavaScript ทำอะไรให้เว็บไซต์ได้บ้าง\\?|2\\. JavaScript ใช้งานได้ที่ไหนบ้าง\\?|3\\. JavaScript เป็น Scripting Language หมายความว่าอย่างไร\\?|4\\. ทำไม JavaScript จึงเหมาะกับการเริ่มเขียนโปรแกรมบนเว็บ\\?|กิจกรรม 5 นาที: มองหา JavaScript รอบตัว|คำถามเช็กความเข้าใจ|สรุปก่อนจบคลาส|สะพานไปยังบทถัดไป)$' Week_03/01_basic_javaScript/content/01_what_is_javascript.md | wc -l && \
file Week_03/01_basic_javaScript/content/01_what_is_javascript.md
```

Expected: `11` headings found and output identifies UTF-8 Unicode text.

- [ ] **Step 4: Review the learner level and factual accuracy**

Read the completed file from top to bottom. Confirm that it has no unexplained prerequisite code, asks students to reason about familiar apps/sites, and distinguishes source-level learning language from engine implementation details.

- [ ] **Step 5: Commit**

```bash
git add Week_03/01_basic_javaScript/content/01_what_is_javascript.md
git commit -m "docs: add Thai JavaScript introduction lesson"
```
