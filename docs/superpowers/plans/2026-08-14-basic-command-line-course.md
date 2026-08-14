# Basic Command Line Course Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a twelve-lesson Thai-language command-line course at `Week_05_06/05_basic_command_line/content` that takes bootcamp students from "I copy commands I don't understand" to "I can install Node, navigate a project, and run npm scripts."

**Architecture:** Static HTML lessons with no build step, matching the existing course format in this repo. A shared `lesson.css` provides all presentation. A Node script, `verify_content.mjs`, is the test suite: it asserts the structural contract of every page. It runs in a lenient mode that skips lessons not yet written, so each content task ends green, and in `--strict` mode at the end when all twelve exist.

**Tech Stack:** Plain HTML5, plain CSS, Node.js (`node:assert/strict`, `node:fs/promises`) for verification. No dependencies, no package.json, no bundler.

**Spec:** `docs/superpowers/specs/2026-08-14-basic-command-line-course-design.md`

## Global Constraints

- All prose is Thai. English technical terms stay in English (`terminal`, `shell`, `flag`, `path`, `environment variable`).
- Every lesson page: `<html lang="th">`, one `<title>`, one `<h1>`, a `<meta name="description">` in Thai, `<link rel="stylesheet" href="lesson.css" />`.
- Every lesson page ends with `<h2>แบบฝึกหัด</h2>`, then a `<details>` whose `<summary>` is exactly `ดูเฉลย`, containing at least one non-empty `<p>` explanation plus the answer.
- Every lesson page ends with the `nav.lesson-navigation` block: previous (`rel="prev"`), index, next (`rel="next"`). Lesson 01 has no `rel="prev"`; lesson 12 has no `rel="next"`.
- Lessons 02 through 11 must each contain at least one `<div class="callout">` whose text includes `บน Windows`.
- macOS/Linux commands are the primary path in body text. Windows guidance lives only in callouts.
- Terminal examples go in `<pre><code>` and show both the command and its realistic output.
- File and folder trees go in `<div class="file-tree">`.
- Indentation is 2 spaces. Files end with a trailing newline.
- Never introduce `git` teaching content; that lives in `Week_04/01_basic_git`.

---

### Task 1: Scaffold, stylesheet, verifier, and index

**Files:**
- Create: `Week_05_06/05_basic_command_line/content/lesson.css`
- Create: `Week_05_06/05_basic_command_line/content/verify_content.mjs`
- Create: `Week_05_06/05_basic_command_line/content/index.html`
- Test: `Week_05_06/05_basic_command_line/content/verify_content.mjs`

**Interfaces:**
- Consumes: nothing.
- Produces: the twelve canonical `{ file, title }` pairs exported as `LESSONS` from `verify_content.mjs`; every later task copies its lesson title verbatim from that array. The CSS class names `callout`, `file-tree`, `comparison-grid`, `lesson-navigation`, `lesson-navigation__link`, `lesson-navigation__link--previous`, `lesson-navigation__link--index`, `lesson-navigation__link--next`, `lesson-index`, `course-header__eyebrow`.

- [ ] **Step 1: Create the directory and copy the stylesheet**

```bash
mkdir -p Week_05_06/05_basic_command_line/content
cp Week_05_06/02_basic_scss/content/lesson.css Week_05_06/05_basic_command_line/content/lesson.css
```

- [ ] **Step 2: Replace the palette in the copied stylesheet**

Edit the `:root` block at the top of `Week_05_06/05_basic_command_line/content/lesson.css`. Replace the whole block with exactly this. Change nothing else in the file — every rule below `:root` already references these tokens.

```css
:root {
  color-scheme: light;
  --canvas: #eef4f3;
  --surface: #ffffff;
  --text: #12211f;
  --muted: #4f6360;
  --primary: #0f766e;
  --primary-dark: #0b544e;
  --primary-soft: #dcefec;
  --secondary: #d98324;
  --secondary-soft: #fdefdc;
  --border: #c8dcd8;
  --code-bg: #10201e;
  --code-text: #eafaf6;
  --shadow: 0 18px 50px rgb(15 61 56 / 12%);
}
```

- [ ] **Step 3: Replace the three hard-coded colours the tokens do not cover**

The SCSS theme has three literal purple values outside `:root`. Update them so nothing purple survives:

- In the `code` rule, `border: 1px solid #dfd1f0;` becomes `border: 1px solid #cfe4e0;`
- In the `pre` rule, `border: 1px solid #342454;` becomes `border: 1px solid #23423d;`
- In the `.file-tree` rule, `background: #26183d;` becomes `background: #16302c;` and `border: 1px solid #3f2b60;` becomes `border: 1px solid #2c524c;`
- In the `.comparison-grid > *` rule, `background: #fcf8ff;` becomes `background: #f6fbfa;`

Verify none remain:

```bash
grep -nE "#(dfd1f0|342454|26183d|3f2b60|fcf8ff|6f3cc3|f06f63)" Week_05_06/05_basic_command_line/content/lesson.css
```

Expected: no output.

- [ ] **Step 4: Write the verifier (this is the test)**

Create `Week_05_06/05_basic_command_line/content/verify_content.mjs`:

```javascript
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";

const contentDir = new URL(".", import.meta.url);
const contentPath = path.resolve(contentDir.pathname);
const strict = process.argv.includes("--strict");

export const LESSONS = [
  { file: "01_what_is_command_line.html", title: "Command Line คืออะไร?" },
  { file: "02_opening_your_terminal.html", title: "เปิด Terminal ครั้งแรก" },
  { file: "03_anatomy_of_a_command.html", title: "โครงสร้างของคำสั่ง" },
  { file: "04_navigating_the_filesystem.html", title: "เดินทางในระบบไฟล์" },
  { file: "05_paths_absolute_and_relative.html", title: "Path แบบ Absolute และ Relative" },
  { file: "06_creating_files_and_folders.html", title: "สร้างไฟล์และโฟลเดอร์" },
  { file: "07_copying_moving_deleting.html", title: "คัดลอก ย้าย และลบ" },
  { file: "08_viewing_file_contents.html", title: "ดูและค้นหาเนื้อหาในไฟล์" },
  { file: "09_shortcuts_history_and_wildcards.html", title: "ทางลัด ประวัติคำสั่ง และ Wildcard" },
  { file: "10_environment_variables_and_path.html", title: "Environment Variables และ PATH" },
  { file: "11_installing_node_and_npm.html", title: "ติดตั้ง Node.js และ npm" },
  { file: "12_running_node_projects.html", title: "รันสคริปต์และโปรเจกต์ Node" },
];

const WINDOWS_CALLOUT_REQUIRED = new Set(
  LESSONS.slice(1, 11).map((lesson) => lesson.file)
);

const localHrefPattern = /href="([^":#][^"#]*)"/g;
const lessonIndexLinkPattern = /<a\b([^>]*)href="([^"]+\.html)"([^>]*)>([\s\S]*?)<\/a>/g;
const calloutPattern = /<div\b[^>]*class="[^"]*\bcallout\b[^"]*"[^>]*>([\s\S]*?)<\/div>/g;
const solutionDetailsPattern =
  /<details\b[^>]*>\s*<summary>ดูเฉลย<\/summary>([\s\S]*?)<\/details>/g;

async function readLocalFile(relativePath) {
  return readFile(path.join(contentPath, relativePath), "utf8");
}

async function fileExists(relativePath) {
  return readFile(path.join(contentPath, relativePath), "utf8").then(
    () => true,
    () => false
  );
}

function collectLocalHrefs(html) {
  return Array.from(html.matchAll(localHrefPattern), (match) => match[1]);
}

function stripHtml(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function normalizeText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractSingleTagText(html, tagName) {
  const pattern = new RegExp(`<${tagName}\\b[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "g");
  const matches = Array.from(html.matchAll(pattern));

  assert.equal(matches.length, 1, `Expected exactly one <${tagName}> element.`);

  return normalizeText(stripHtml(matches[0][1]));
}

function lessonTitleMatchesExpected(actualTitle, expectedTitle) {
  const normalizedActual = normalizeText(actualTitle);
  const normalizedExpected = normalizeText(expectedTitle);
  const suffixPattern = new RegExp(
    `^${escapeRegExp(normalizedExpected)}(?:\\s*[-–—|·:]\\s*.+)?$`
  );

  return suffixPattern.test(normalizedActual);
}

function collectIndexLessonLinks(indexHtml) {
  return Array.from(indexHtml.matchAll(lessonIndexLinkPattern), (match) => ({
    href: match[2],
    text: normalizeText(stripHtml(match[4])),
  })).filter((link) => link.href !== "index.html");
}

function collectSolutionDetails(html) {
  return Array.from(html.matchAll(solutionDetailsPattern), (match) => match[1]);
}

function hasNonEmptyParagraph(html) {
  const paragraphs = Array.from(html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g));

  return paragraphs.some((paragraph) => normalizeText(stripHtml(paragraph[1])).length > 0);
}

function assertSolutionDetailsHaveExplanation(sourceFile, html) {
  const solutions = collectSolutionDetails(html);

  assert.ok(
    solutions.length > 0,
    `${sourceFile}: expected at least one solution <details> with <summary>ดูเฉลย</summary>.`
  );

  for (const [index, solutionHtml] of solutions.entries()) {
    assert.ok(
      hasNonEmptyParagraph(solutionHtml),
      `${sourceFile}: solution <details> #${index + 1} must include at least one non-empty <p> explanation.`
    );
  }
}

function assertWindowsCallout(sourceFile, html) {
  if (!WINDOWS_CALLOUT_REQUIRED.has(sourceFile)) {
    return;
  }

  const callouts = Array.from(html.matchAll(calloutPattern), (match) =>
    stripHtml(match[1])
  );

  assert.ok(
    callouts.some((text) => text.includes("บน Windows")),
    `${sourceFile}: expected a <div class="callout"> containing "บน Windows".`
  );
}

function isExternalHref(href) {
  return /^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith("//");
}

async function assertLocalTargetsExist(sourceFile, html, pendingFiles) {
  const hrefs = collectLocalHrefs(html);

  for (const href of hrefs) {
    if (isExternalHref(href)) {
      continue;
    }

    const targetFile = href.split("?")[0].split("#")[0];

    if (pendingFiles.has(targetFile)) {
      continue;
    }

    const targetPath = path.join(contentPath, targetFile);
    await readFile(targetPath, "utf8").catch((error) => {
      error.message = `${sourceFile}: missing local href target ${targetFile}\n${error.message}`;
      throw error;
    });
  }
}

function assertCommonLessonContract(sourceFile, html) {
  assert.match(html, /<html lang="th">/);
  assert.match(html, /<meta\s+name="description"/);
  assert.equal((html.match(/<h1>/g) ?? []).length, 1);
  assert.match(html, /<h2>แบบฝึกหัด<\/h2>/);
  assert.match(html, /<summary>ดูเฉลย<\/summary>/);
  assert.match(html, /href="lesson\.css"/);
  assert.match(html, /href="index\.html"/);
  assert.equal((html.match(/<title>/g) ?? []).length, 1);
  assert.match(html, /<\/html>\s*$/);
  assertSolutionDetailsHaveExplanation(sourceFile, html);
  assertWindowsCallout(sourceFile, html);
}

function assertLessonTitle(html, lesson) {
  const titleText = extractSingleTagText(html, "title");

  assert.ok(
    lessonTitleMatchesExpected(titleText, lesson.title),
    `Lesson title mismatch for ${lesson.file}: expected "${lesson.title}" or that title with the standard suffix, got "${titleText}"`
  );
}

function assertAdjacentNavigation(html, index) {
  const previousLesson = LESSONS[index - 1];
  const nextLesson = LESSONS[index + 1];

  if (previousLesson) {
    assert.match(
      html,
      new RegExp(
        `href="${previousLesson.file}"[^>]*rel="prev"|rel="prev"[^>]*href="${previousLesson.file}"`
      )
    );
  } else {
    assert.doesNotMatch(html, /rel="prev"/);
  }

  if (nextLesson) {
    assert.match(
      html,
      new RegExp(
        `href="${nextLesson.file}"[^>]*rel="next"|rel="next"[^>]*href="${nextLesson.file}"`
      )
    );
  } else {
    assert.doesNotMatch(html, /rel="next"/);
  }
}

function assertIndexLinks(indexHtml) {
  const lessonLinks = collectIndexLessonLinks(indexHtml);

  assert.equal(lessonLinks.length, LESSONS.length, "Index must link to each lesson exactly once.");
  assert.deepEqual(
    lessonLinks.map((link) => link.href),
    LESSONS.map((lesson) => lesson.file),
    "Index lesson hrefs must match the ordered lesson list."
  );
  assert.deepEqual(
    lessonLinks.map((link) => link.text),
    LESSONS.map((lesson) => lesson.title),
    "Index lesson labels must match the ordered lesson titles."
  );
  assert.equal((indexHtml.match(/<title>/g) ?? []).length, 1);
  assert.match(indexHtml, /<\/html>\s*$/);
}

async function main() {
  const pendingFiles = new Set();

  for (const lesson of LESSONS) {
    if (!(await fileExists(lesson.file))) {
      pendingFiles.add(lesson.file);
    }
  }

  if (strict) {
    assert.equal(
      pendingFiles.size,
      0,
      `Strict mode: missing lesson files: ${[...pendingFiles].join(", ")}`
    );
  }

  const indexHtml = await readLocalFile("index.html");

  assertIndexLinks(indexHtml);
  await assertLocalTargetsExist("index.html", indexHtml, pendingFiles);

  for (const [index, lesson] of LESSONS.entries()) {
    if (pendingFiles.has(lesson.file)) {
      continue;
    }

    const html = await readLocalFile(lesson.file);

    assertCommonLessonContract(lesson.file, html);
    assertLessonTitle(html, lesson);
    assertAdjacentNavigation(html, index);
    await assertLocalTargetsExist(lesson.file, html, pendingFiles);
  }

  const written = LESSONS.length - pendingFiles.size;

  console.log(`Verified ${written}/${LESSONS.length} command line lessons.`);

  if (pendingFiles.size > 0) {
    console.log(`Pending: ${[...pendingFiles].join(", ")}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```

- [ ] **Step 5: Run the verifier to watch it fail**

```bash
cd Week_05_06/05_basic_command_line/content && node verify_content.mjs
```

Expected: FAIL. `index.html` does not exist yet, so the run throws `ENOENT: no such file or directory ... index.html` and exits non-zero.

- [ ] **Step 6: Write the index page**

Create `Week_05_06/05_basic_command_line/content/index.html`. Link text must match the `LESSONS` titles character for character.

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="สารบัญบทเรียน Command Line พื้นฐานภาษาไทย สำหรับเตรียมตัวก่อนเรียน Node.js" />
    <title>บทเรียน Command Line พื้นฐานทั้งหมด</title>
    <link rel="stylesheet" href="lesson.css" />
  </head>
  <body>
    <main>
      <p class="course-header__eyebrow">Week 05–06 · Command Line</p>
      <h1>บทเรียน Command Line พื้นฐานทั้งหมด</h1>

      <p>
        คอร์สนี้พาคุณจาก “คัดลอกคำสั่งมาวางโดยไม่รู้ว่ามันทำอะไร” ไปสู่การใช้ terminal
        ทำงานกับโปรเจกต์ได้จริง บทที่ 1–10 คือพื้นฐานของ shell ส่วนบทที่ 11–12
        จะพาคุณติดตั้งและรัน Node.js เพื่อเตรียมตัวสำหรับบทเรียนถัดไป
      </p>

      <ol class="lesson-index">
        <li><a href="01_what_is_command_line.html">Command Line คืออะไร?</a></li>
        <li><a href="02_opening_your_terminal.html">เปิด Terminal ครั้งแรก</a></li>
        <li><a href="03_anatomy_of_a_command.html">โครงสร้างของคำสั่ง</a></li>
        <li><a href="04_navigating_the_filesystem.html">เดินทางในระบบไฟล์</a></li>
        <li><a href="05_paths_absolute_and_relative.html">Path แบบ Absolute และ Relative</a></li>
        <li><a href="06_creating_files_and_folders.html">สร้างไฟล์และโฟลเดอร์</a></li>
        <li><a href="07_copying_moving_deleting.html">คัดลอก ย้าย และลบ</a></li>
        <li><a href="08_viewing_file_contents.html">ดูและค้นหาเนื้อหาในไฟล์</a></li>
        <li><a href="09_shortcuts_history_and_wildcards.html">ทางลัด ประวัติคำสั่ง และ Wildcard</a></li>
        <li><a href="10_environment_variables_and_path.html">Environment Variables และ PATH</a></li>
        <li><a href="11_installing_node_and_npm.html">ติดตั้ง Node.js และ npm</a></li>
        <li><a href="12_running_node_projects.html">รันสคริปต์และโปรเจกต์ Node</a></li>
      </ol>
    </main>
  </body>
</html>
```

- [ ] **Step 7: Run the verifier to watch it pass**

```bash
cd Week_05_06/05_basic_command_line/content && node verify_content.mjs
```

Expected: PASS, exit 0, printing `Verified 0/12 command line lessons.` followed by the twelve pending filenames.

- [ ] **Step 8: Commit**

```bash
git add Week_05_06/05_basic_command_line/content/lesson.css \
        Week_05_06/05_basic_command_line/content/verify_content.mjs \
        Week_05_06/05_basic_command_line/content/index.html
git commit -m "content: scaffold basic command line course with verifier and index"
```

---

### Task 2: Lessons 01–03 (orientation)

**Files:**
- Create: `Week_05_06/05_basic_command_line/content/01_what_is_command_line.html`
- Create: `Week_05_06/05_basic_command_line/content/02_opening_your_terminal.html`
- Create: `Week_05_06/05_basic_command_line/content/03_anatomy_of_a_command.html`
- Test: `Week_05_06/05_basic_command_line/content/verify_content.mjs`

**Interfaces:**
- Consumes: `LESSONS` titles and the CSS classes from Task 1.
- Produces: the canonical page skeleton (given in full in Step 1) that Tasks 3, 4, and 5 copy for every remaining lesson.

- [ ] **Step 1: Write lesson 01 using the canonical skeleton**

This is the template for every lesson in the course. Later tasks reuse this exact structure and swap the article body, the title, the description, and the nav hrefs.

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="ทำความเข้าใจว่า Command Line คืออะไร ต่างจากการคลิกผ่านหน้าจอ (GUI) อย่างไร และคำว่า terminal, shell, prompt หมายถึงอะไร"
    />
    <title>Command Line คืออะไร?</title>
    <link rel="stylesheet" href="lesson.css" />
  </head>
  <body>
    <main>
      <article>
        <h1>Command Line คืออะไร?</h1>

        <p>
          ตลอดคอร์สที่ผ่านมาคุณเคยพิมพ์คำสั่งอย่าง <code>npm install</code> หรือ
          <code>npx sass --watch</code> มาแล้ว บทเรียนนี้จะย้อนกลับไปตอบคำถามพื้นฐานว่า
          หน้าจอดำ ๆ ที่คุณพิมพ์คำสั่งลงไปนั้นคืออะไร และทำไมนักพัฒนาแทบทุกคนถึงใช้มัน
        </p>

        <h2>GUI เทียบกับ CLI</h2>
        <p>
          คอมพิวเตอร์รับคำสั่งจากเราได้สองแบบหลัก ๆ แบบแรกคือ
          <strong>GUI (Graphical User Interface)</strong> คือการคลิก ลาก และกดปุ่ม
          ส่วนอีกแบบคือ <strong>CLI (Command Line Interface)</strong>
          คือการพิมพ์คำสั่งเป็นข้อความ
        </p>

        <div class="comparison-grid">
          <div>
            <h3>GUI</h3>
            <ul>
              <li>เรียนรู้ง่าย เห็นตัวเลือกทั้งหมดบนหน้าจอ</li>
              <li>ทำงานซ้ำ ๆ 100 ครั้ง ต้องคลิก 100 ครั้ง</li>
              <li>บอกคนอื่นให้ทำตามยาก ต้องอธิบายเป็นขั้น ๆ</li>
            </ul>
          </div>
          <div>
            <h3>CLI</h3>
            <ul>
              <li>ต้องจำคำสั่ง แต่ทำงานได้ละเอียดกว่า</li>
              <li>ทำงานซ้ำ ๆ ได้ด้วยคำสั่งเดียว</li>
              <li>คัดลอกคำสั่งส่งให้เพื่อนได้ทันที</li>
            </ul>
          </div>
        </div>

        <p>
          เครื่องมือของนักพัฒนาส่วนใหญ่ เช่น Node.js, npm, Sass หรือ Git
          ถูกออกแบบมาให้สั่งงานผ่าน CLI เป็นหลัก บางเครื่องมือไม่มีหน้าจอ GUI ให้ใช้เลยด้วยซ้ำ
        </p>

        <h2>Terminal, Shell และ Prompt ต่างกันอย่างไร</h2>
        <p>สามคำนี้มักถูกใช้ปนกัน แต่จริง ๆ แล้วหมายถึงคนละอย่าง</p>

        <table>
          <thead>
            <tr>
              <th>คำ</th>
              <th>คืออะไร</th>
              <th>เทียบกับของจริง</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Terminal</td>
              <td>โปรแกรมหน้าต่างที่เปิดขึ้นมา รับคีย์บอร์ดและแสดงตัวอักษร</td>
              <td>เหมือนหน้าต่างแชท</td>
            </tr>
            <tr>
              <td>Shell</td>
              <td>โปรแกรมที่อ่านคำสั่งของเราแล้วสั่งให้ระบบทำงาน เช่น bash, zsh</td>
              <td>เหมือนคนที่อ่านข้อความแล้วลงมือทำ</td>
            </tr>
            <tr>
              <td>Prompt</td>
              <td>ข้อความที่ shell พิมพ์รอเรา แปลว่า “พร้อมรับคำสั่งแล้ว”</td>
              <td>เหมือนเคอร์เซอร์กะพริบในช่องแชท</td>
            </tr>
          </tbody>
        </table>

        <p>
          พูดสั้น ๆ คือ เราเปิด <em>terminal</em> ขึ้นมา ข้างในนั้นมี <em>shell</em> ทำงานอยู่
          และ shell แสดง <em>prompt</em> รอให้เราพิมพ์
        </p>

        <h2>หน้าตาของคำสั่งหนึ่งคำสั่ง</h2>
        <p>ตัวอย่างด้านล่างคือการถามคอมพิวเตอร์ว่า “ตอนนี้เราอยู่โฟลเดอร์ไหน”</p>

        <pre><code>$ pwd
/Users/mint/projects</code></pre>

        <p>
          บรรทัดที่ขึ้นต้นด้วย <code>$</code> คือสิ่งที่เราพิมพ์ ส่วนบรรทัดถัดมาคือคำตอบที่ shell
          พิมพ์กลับมา เครื่องหมาย <code>$</code> เป็นส่วนหนึ่งของ prompt เราไม่ต้องพิมพ์มันเอง
        </p>

        <blockquote>
          <p>
            <strong>ข้อผิดพลาดที่พบบ่อย:</strong> คัดลอกตัวอย่างจากอินเทอร์เน็ตมาทั้งบรรทัด
            รวมเครื่องหมาย <code>$</code> ด้วย แล้วเจอ error ว่า
            <code>command not found: $</code> ให้คัดลอกเฉพาะส่วนหลัง <code>$</code> เท่านั้น
          </p>
        </blockquote>

        <h2>แบบฝึกหัด</h2>
        <p>
          ตอบคำถามสองข้อนี้ด้วยคำพูดของตัวเอง โดยยังไม่ต้องเปิด terminal
        </p>
        <ol>
          <li>terminal, shell และ prompt ต่างกันอย่างไร</li>
          <li>
            ยกตัวอย่างงานหนึ่งอย่างที่ทำผ่าน CLI แล้วเร็วกว่าคลิกผ่าน GUI อย่างชัดเจน
            พร้อมบอกเหตุผล
          </li>
        </ol>

        <details>
          <summary>ดูเฉลย</summary>
          <p>
            terminal คือหน้าต่างโปรแกรม shell คือตัวที่อ่านและทำตามคำสั่ง
            ส่วน prompt คือข้อความที่ shell แสดงเพื่อบอกว่าพร้อมรับคำสั่งแล้ว
            ทั้งสามอย่างทำงานร่วมกัน แต่ไม่ใช่สิ่งเดียวกัน
          </p>
          <p>
            ตัวอย่างงานที่ CLI เร็วกว่า เช่น การเปลี่ยนชื่อไฟล์รูป 200 ไฟล์ให้ขึ้นต้นด้วย
            <code>2026-</code> ถ้าใช้ GUI ต้องคลิกเปลี่ยนทีละไฟล์ 200 ครั้ง
            แต่ CLI สั่งครั้งเดียวจบ เพราะคำสั่งทำงานกับไฟล์เป็นชุดได้
            อีกตัวอย่างคือการติดตั้ง dependency ของโปรเจกต์ด้วย <code>npm install</code>
            ซึ่งอ่านรายการทั้งหมดจากไฟล์ให้อัตโนมัติ
          </p>
        </details>
      </article>

      <nav class="lesson-navigation" aria-label="การนำทางบทเรียน">
        <a class="lesson-navigation__link lesson-navigation__link--index" href="index.html"
          >บทเรียนทั้งหมด</a
        >
        <a
          class="lesson-navigation__link lesson-navigation__link--next"
          href="02_opening_your_terminal.html"
          rel="next"
          >บทถัดไป →</a
        >
      </nav>
    </main>
  </body>
</html>
```

- [ ] **Step 2: Run the verifier**

```bash
cd Week_05_06/05_basic_command_line/content && node verify_content.mjs
```

Expected: PASS, printing `Verified 1/12 command line lessons.`

- [ ] **Step 3: Write lesson 02 — เปิด Terminal ครั้งแรก**

Use the skeleton from Step 1. `<title>` is `เปิด Terminal ครั้งแรก`. Nav: prev `01_what_is_command_line.html`, next `03_anatomy_of_a_command.html`.

Required body sections:

- `<h2>เปิด Terminal บน macOS</h2>` — Spotlight (`Cmd + Space`) แล้วพิมพ์ `Terminal`; note that macOS uses zsh by default.
- `<h2>เปิด Terminal บน Linux</h2>` — `Ctrl + Alt + T` on most distributions.
- `<h2>เปิด Terminal บน Windows</h2>` — body text tells Windows students to install Git for Windows and use **Git Bash**, because it gives them the same commands as the rest of the class. Follow it with the required callout:

```html
<div class="callout">
  <p>
    <strong>บน Windows:</strong> ให้ติดตั้ง
    <a href="https://gitforwindows.org/">Git for Windows</a> แล้วเปิดโปรแกรม
    <strong>Git Bash</strong> ใช้ตลอดคอร์สนี้ เพราะคำสั่งจะตรงกับที่สอนทุกบท
    ถ้าองค์กรของคุณติดตั้ง WSL ไว้แล้วก็ใช้ WSL ได้เช่นกัน
    ส่วน PowerShell และ Command Prompt ใช้คำสั่งคนละชุด
    บทเรียนจะบอกคำสั่งเทียบเท่าให้ในกล่องแบบนี้เมื่อจำเป็น
  </p>
</div>
```

- `<h2>อ่าน Prompt ให้เป็น</h2>` — show a realistic prompt and label its parts:

```
mint@macbook ~/projects %
```

Explain: username, hostname, current folder (`~/projects`), and the symbol (`%` for zsh, `$` for bash) that marks where typing begins.

- `<h2>สามคำสั่งแรกของคุณ</h2>` — run each and show output:

```
$ whoami
mint

$ date
Fri Aug 14 10:32:41 +07 2026

$ pwd
/Users/mint
```

Explain that `pwd` stands for "print working directory" and that the terminal always has a current folder, exactly like a Finder or Explorer window.

- `<h2>ปิด Terminal</h2>` — `exit`, or close the window.
- A `<blockquote>` common mistake: typing the `$` or `%` from examples, and expecting the terminal to show the folder that VS Code has open (it does not until you `cd` there — forward-reference lesson 04).

Exercise: open a terminal, run `whoami`, `date`, and `pwd`, write down each result, and answer which folder the terminal started in and whether that folder is the same as their course project folder.

Solution `<details>`: explain that `pwd` almost always starts at the home directory (`/Users/<ชื่อ>` on macOS, `/home/<ชื่อ>` on Linux, `/c/Users/<ชื่อ>` in Git Bash), which is usually *not* the project folder, and that lesson 04 covers moving there.

- [ ] **Step 4: Run the verifier**

```bash
cd Week_05_06/05_basic_command_line/content && node verify_content.mjs
```

Expected: PASS, printing `Verified 2/12 command line lessons.`

- [ ] **Step 5: Write lesson 03 — โครงสร้างของคำสั่ง**

Use the skeleton. `<title>` is `โครงสร้างของคำสั่ง`. Nav: prev `02_opening_your_terminal.html`, next `04_navigating_the_filesystem.html`.

Required body sections:

- `<h2>คำสั่งประกอบด้วยสามส่วน</h2>` — command, options (flags), arguments. Use this worked example and label each part in a `<table>`:

```
$ ls -l /etc
```

`ls` = command (ทำอะไร), `-l` = option (ทำแบบไหน), `/etc` = argument (ทำกับอะไร).

- `<h2>Flag แบบสั้นและแบบยาว</h2>` — `-a` versus `--all`; short flags use one dash and one letter, long flags use two dashes and a whole word; they often mean the same thing.
- `<h2>รวม Flag หลายตัวเข้าด้วยกัน</h2>` — `ls -l -a` is the same as `ls -la`; show both with output.
- `<h2>Argument บางคำสั่งมีได้หลายตัว</h2>` — `cp file1.txt file2.txt backup/`.
- `<h2>อ่านคู่มือของคำสั่ง</h2>` — `ls --help` and `man ls`, and that `man` opens a pager you exit with `q`. Required callout:

```html
<div class="callout">
  <p>
    <strong>บน Windows:</strong> Git Bash ไม่มีคำสั่ง <code>man</code> ให้ใช้
    <code>ls --help</code> แทน ส่วนใน PowerShell ให้ใช้
    <code>Get-Help Get-ChildItem</code> ซึ่งเป็นคำสั่งเทียบเท่ากับ <code>ls</code>
  </p>
</div>
```

- A `<blockquote>` common mistake: forgetting the space between command and flag (`ls-l`), and pasting an en dash `–` from a website or chat app instead of a hyphen `-`, which produces a confusing error.

Exercise: given `ls -lah ~/Downloads`, name each of the four parts and say what the whole command does; then use `--help` to find the `ls` flag that sorts by modification time.

Solution `<details>`: explain part by part — `ls` is the command, `-lah` is three combined flags (`-l` long format, `-a` include hidden, `-h` human-readable sizes), `~/Downloads` is the argument naming the target folder; the whole thing lists everything in Downloads with readable sizes. The sort-by-time flag is `-t`, found by running `ls --help` and reading for the word `time`.

- [ ] **Step 6: Run the verifier**

```bash
cd Week_05_06/05_basic_command_line/content && node verify_content.mjs
```

Expected: PASS, printing `Verified 3/12 command line lessons.`

- [ ] **Step 7: Open the pages in a browser and check them visually**

```bash
open Week_05_06/05_basic_command_line/content/index.html
```

Confirm: teal accent (not purple, not blue), the comparison grid in lesson 01 sits side by side, the Windows callouts are visually distinct, and prev/next navigation works in both directions.

- [ ] **Step 8: Commit**

```bash
git add Week_05_06/05_basic_command_line/content/0[123]_*.html
git commit -m "content: add command line lessons 01-03 (orientation)"
```

---

### Task 3: Lessons 04–06 (moving and making)

**Files:**
- Create: `Week_05_06/05_basic_command_line/content/04_navigating_the_filesystem.html`
- Create: `Week_05_06/05_basic_command_line/content/05_paths_absolute_and_relative.html`
- Create: `Week_05_06/05_basic_command_line/content/06_creating_files_and_folders.html`
- Test: `Week_05_06/05_basic_command_line/content/verify_content.mjs`

**Interfaces:**
- Consumes: the page skeleton from Task 2 Step 1.
- Produces: the practice folder `~/my-cli-lab` created in lesson 06, which lessons 07, 08, and 09 reuse.

- [ ] **Step 1: Write lesson 04 — เดินทางในระบบไฟล์**

`<title>` is `เดินทางในระบบไฟล์`. Nav: prev `03_anatomy_of_a_command.html`, next `05_paths_absolute_and_relative.html`.

Required body sections:

- `<h2>ระบบไฟล์คือต้นไม้</h2>` — a `.file-tree` block showing the shape students already recognise:

```html
<div class="file-tree">/
├── Users
│   └── mint
│       ├── Desktop
│       ├── Downloads
│       └── projects
│           └── coffee-master
│               ├── index.html
│               └── style.css
└── Applications</div>
```

- `<h2>อยู่ที่ไหน: pwd</h2>` — `pwd` with output.
- `<h2>มีอะไรอยู่ตรงนี้: ls</h2>` — plain `ls`, then `ls -l` (with a short explanation of the columns: permissions, size, modified date, name), then `ls -a` and what the dot-files are.
- `<h2>ย้ายไปที่อื่น: cd</h2>` — `cd projects`, `cd ..` (ขึ้นหนึ่งชั้น), `cd ~` (กลับบ้าน), `cd -` (กลับที่เดิมก่อนหน้า). Show a transcript that moves down two levels and back up, with `pwd` after each step so students see the position change.
- Required callout:

```html
<div class="callout">
  <p>
    <strong>บน Windows:</strong> ใน Git Bash ใช้คำสั่งเดียวกับ macOS ทุกอย่าง
    แต่ถ้าจำเป็นต้องใช้ PowerShell คำสั่ง <code>ls</code> จะเป็น
    <code>Get-ChildItem</code> (มีชื่อย่อว่า <code>dir</code>) ส่วน <code>pwd</code> คือ
    <code>Get-Location</code> และ <code>cd</code> ใช้ได้เหมือนกัน
  </p>
</div>
```

- A `<blockquote>` common mistake: running `cd index.html` on a file (`not a directory`), and forgetting that macOS and Linux treat `Projects` and `projects` as different names.

Exercise: open a terminal, move to the bootcamp project folder, run `ls -la`, then list which entries are hidden and say what `..` would take them to from there.

Solution `<details>`: explain that hidden entries begin with a dot — commonly `.git`, `.gitignore`, `.DS_Store`, `.vscode` — and that they are hidden by convention, not by permission, so `-a` reveals them. From inside the project folder, `..` moves to the folder that contains the project.

- [ ] **Step 2: Run the verifier**

Run: `cd Week_05_06/05_basic_command_line/content && node verify_content.mjs`
Expected: PASS, `Verified 4/12 command line lessons.`

- [ ] **Step 3: Write lesson 05 — Path แบบ Absolute และ Relative**

`<title>` is `Path แบบ Absolute และ Relative`. Nav: prev `04_navigating_the_filesystem.html`, next `06_creating_files_and_folders.html`.

Required body sections:

- `<h2>Path คือที่อยู่ของไฟล์</h2>` — analogy: an absolute path is a full postal address, a relative path is "สองบ้านถัดไปทางขวา" which only makes sense if you know where you are standing.
- `<h2>Absolute Path</h2>` — starts with `/`, always means the same place: `/Users/mint/projects/coffee-master/index.html`.
- `<h2>Relative Path</h2>` — depends on `pwd`. Give a table of the four symbols:

| สัญลักษณ์ | ความหมาย |
| --- | --- |
| `.` | โฟลเดอร์ปัจจุบัน |
| `..` | โฟลเดอร์แม่ (ขึ้นไปหนึ่งชั้น) |
| `~` | home directory ของเรา |
| `/` | root ของทั้งระบบ |

- `<h2>ตัวอย่างเดินขึ้นแล้วลง</h2>` — from `~/projects/coffee-master/src`, show that `../../notes.txt` and `~/projects/notes.txt` reach the same file, with a `.file-tree` to make it visual.
- `<h2>ชื่อไฟล์ที่มีช่องว่าง</h2>` — `cd "My Documents"` or `cd My\ Documents`, and why an unquoted space makes the shell see two arguments.
- Required callout:

```html
<div class="callout">
  <p>
    <strong>บน Windows:</strong> path ที่ Explorer แสดงเป็น
    <code>C:\Users\mint\projects</code> จะเขียนใน Git Bash ว่า
    <code>/c/Users/mint/projects</code> คือเปลี่ยน <code>\</code> เป็น <code>/</code>
    และเปลี่ยน <code>C:</code> เป็น <code>/c</code> ส่วนใน PowerShell ใช้รูปแบบเดิมของ
    Windows ได้เลย
  </p>
</div>
```

- A `<blockquote>` common mistake: typing a relative path from the wrong folder; the fix is to run `pwd` first, every time, until it becomes a habit.

Exercise: given `pwd` reports `/Users/mint/projects/coffee-master/src`, write (1) the relative path to `/Users/mint/projects/notes.txt` and (2) the absolute path to `index.html` sitting in `coffee-master`.

Solution `<details>`: explain the counting — `src` up one is `coffee-master`, up two is `projects`, where `notes.txt` lives, so the relative path is `../../notes.txt`; the absolute path is `/Users/mint/projects/coffee-master/index.html`, which works from anywhere because it starts at `/`.

- [ ] **Step 4: Run the verifier**

Run: `cd Week_05_06/05_basic_command_line/content && node verify_content.mjs`
Expected: PASS, `Verified 5/12 command line lessons.`

- [ ] **Step 5: Write lesson 06 — สร้างไฟล์และโฟลเดอร์**

`<title>` is `สร้างไฟล์และโฟลเดอร์`. Nav: prev `05_paths_absolute_and_relative.html`, next `07_copying_moving_deleting.html`.

Required body sections:

- `<h2>สร้างโฟลเดอร์ด้วย mkdir</h2>` — `mkdir my-cli-lab`, then `ls` to confirm.
- `<h2>สร้างหลายชั้นพร้อมกันด้วย -p</h2>` — show that `mkdir src/components` fails when `src` does not exist, and that `mkdir -p src/components` creates the whole chain.
- `<h2>สร้างไฟล์เปล่าด้วย touch</h2>` — `touch index.js README.md`, and that `touch` on an existing file only updates its timestamp.
- `<h2>สร้างโครงโปรเจกต์ฝึกมือ</h2>` — a full transcript that builds the folder later lessons reuse:

```
$ cd ~
$ mkdir my-cli-lab
$ cd my-cli-lab
$ mkdir -p src notes
$ touch README.md src/index.js
$ ls -R
README.md	notes		src

./src:
index.js
```

Tell students to keep this folder; lessons 07 to 09 use it.

- `<h2>เปิดโฟลเดอร์ใน VS Code ด้วย code .</h2>` — `code .` means "open the current folder", where `.` is the path from lesson 05; note that the `code` command needs to be installed once from the VS Code command palette (`Shell Command: Install 'code' command in PATH`).
- Required callout:

```html
<div class="callout">
  <p>
    <strong>บน Windows:</strong> ใน Git Bash คำสั่ง <code>mkdir</code> และ
    <code>touch</code> ใช้ได้ตามปกติ แต่ใน PowerShell ไม่มี <code>touch</code>
    ให้ใช้ <code>New-Item README.md</code> แทน ส่วน <code>code .</code>
    ใช้ได้เหมือนกันถ้าตอนติดตั้ง VS Code เลือก “Add to PATH” ไว้
  </p>
</div>
```

- A `<blockquote>` common mistake: running `mkdir` for a nested folder without `-p`, and creating the practice folder inside the wrong directory because they never ran `pwd`.

Exercise: build this structure using as few commands as possible, then prove it with `ls -R`:

```html
<div class="file-tree">my-cli-lab/
├── README.md
├── notes/
└── src/
    ├── index.js
    └── utils/
        └── format.js</div>
```

Solution `<details>`: explain that `mkdir -p` creates a chain in one call and that `touch` takes several filenames at once, so four commands are enough:

```
$ cd ~/my-cli-lab
$ mkdir -p src/utils notes
$ touch README.md src/index.js src/utils/format.js
$ ls -R
```

- [ ] **Step 6: Run the verifier**

Run: `cd Week_05_06/05_basic_command_line/content && node verify_content.mjs`
Expected: PASS, `Verified 6/12 command line lessons.`

- [ ] **Step 7: Commit**

```bash
git add Week_05_06/05_basic_command_line/content/0[456]_*.html
git commit -m "content: add command line lessons 04-06 (navigation, paths, creating files)"
```

---

### Task 4: Lessons 07–09 (managing and working faster)

**Files:**
- Create: `Week_05_06/05_basic_command_line/content/07_copying_moving_deleting.html`
- Create: `Week_05_06/05_basic_command_line/content/08_viewing_file_contents.html`
- Create: `Week_05_06/05_basic_command_line/content/09_shortcuts_history_and_wildcards.html`
- Test: `Week_05_06/05_basic_command_line/content/verify_content.mjs`

**Interfaces:**
- Consumes: the page skeleton from Task 2 Step 1, and the `~/my-cli-lab` practice folder built in lesson 06.
- Produces: nothing later tasks depend on.

- [ ] **Step 1: Write lesson 07 — คัดลอก ย้าย และลบ**

`<title>` is `คัดลอก ย้าย และลบ`. Nav: prev `06_creating_files_and_folders.html`, next `08_viewing_file_contents.html`.

Required body sections:

- `<h2>คัดลอกด้วย cp</h2>` — `cp README.md README.backup.md`, and `cp -r src src-backup` with an explanation that `-r` means recursive, needed because a folder has contents.
- `<h2>ย้ายด้วย mv</h2>` — `mv README.backup.md notes/`.
- `<h2>เปลี่ยนชื่อก็คือ mv</h2>` — `mv notes docs`; explain that renaming and moving are the same operation to the shell, which surprises most beginners.
- `<h2>ลบด้วย rm</h2>` — `rm docs/README.backup.md`, then `rm -r src-backup` for folders.
- `<h2>ระวัง: rm ไม่มีถังขยะ</h2>` — this must be a `<blockquote>` warning, not a plain paragraph. State plainly that `rm` deletes immediately with no Recycle Bin and no undo, that `rm -rf` combines recursive with force and silences every confirmation, and that the habit that saves you is running `ls` on the target first to see exactly what will be deleted. Recommend `rm -i` while learning, which asks before each file.
- Required callout:

```html
<div class="callout">
  <p>
    <strong>บน Windows:</strong> Git Bash ใช้ <code>cp</code>, <code>mv</code>,
    <code>rm</code> ได้เหมือน macOS ส่วนใน PowerShell คำสั่งเทียบเท่าคือ
    <code>Copy-Item</code>, <code>Move-Item</code> และ <code>Remove-Item</code>
    และไฟล์ที่ลบด้วยคำสั่งเหล่านี้ก็ไม่เข้า Recycle Bin เช่นกัน
  </p>
</div>
```

Exercise: inside `~/my-cli-lab`, copy `README.md` to `README.backup.md`, rename the `notes` folder to `docs`, move the backup into `docs/`, then delete the backup — checking with `ls` after every step.

Solution `<details>`: explain each command and why `ls` between steps is the safety net, then give the transcript:

```
$ cd ~/my-cli-lab
$ cp README.md README.backup.md
$ mv notes docs
$ mv README.backup.md docs/
$ ls docs
README.backup.md
$ rm docs/README.backup.md
$ ls docs
```

- [ ] **Step 2: Run the verifier**

Run: `cd Week_05_06/05_basic_command_line/content && node verify_content.mjs`
Expected: PASS, `Verified 7/12 command line lessons.`

- [ ] **Step 3: Write lesson 08 — ดูและค้นหาเนื้อหาในไฟล์**

`<title>` is `ดูและค้นหาเนื้อหาในไฟล์`. Nav: prev `07_copying_moving_deleting.html`, next `09_shortcuts_history_and_wildcards.html`.

Required body sections:

- `<h2>ดูทั้งไฟล์ด้วย cat</h2>` — `cat README.md` with output; good for short files.
- `<h2>ดูเฉพาะหัวและท้ายด้วย head และ tail</h2>` — `head -n 5 package.json`, `tail -n 20 debug.log`.
- `<h2>ไฟล์ยาว ๆ ใช้ less</h2>` — `less package-lock.json`; navigate with arrows and `Space`, quit with `q`. State the quit key explicitly, because being stuck in a pager is a classic beginner panic.
- `<h2>ตามดู log แบบสด ๆ ด้วย tail -f</h2>` — connect it to watching a dev server log; stop with `Ctrl + C` (forward-reference lesson 09).
- `<h2>ค้นหาข้อความด้วย grep</h2>` — `grep "scripts" package.json`, `grep -i "error" debug.log` (ไม่สนตัวพิมพ์เล็กใหญ่), `grep -rn "useState" src/` (ค้นทุกไฟล์ในโฟลเดอร์ พร้อมเลขบรรทัด).
- Required callout:

```html
<div class="callout">
  <p>
    <strong>บน Windows:</strong> Git Bash มี <code>cat</code>, <code>head</code>,
    <code>tail</code>, <code>less</code> และ <code>grep</code> ครบ ส่วนใน PowerShell
    ให้ใช้ <code>Get-Content</code> แทน <code>cat</code> และ
    <code>Select-String</code> แทน <code>grep</code>
  </p>
</div>
```

- A `<blockquote>` common mistake: `cat` on a huge or binary file floods the terminal with garbage; use `less` or `head` instead, and run `clear` to recover.

Exercise: in any project folder that has a `package.json`, use one command to show only the lines mentioning `scripts`, and one command to show only the first ten lines of the file.

Solution `<details>`: explain that `grep` filters by content while `head` filters by position, so they answer different questions, then give both commands:

```
$ grep -n "scripts" package.json
$ head -n 10 package.json
```

Note that `-n` on `grep` adds line numbers, which makes the result easy to find in the editor.

- [ ] **Step 4: Run the verifier**

Run: `cd Week_05_06/05_basic_command_line/content && node verify_content.mjs`
Expected: PASS, `Verified 8/12 command line lessons.`

- [ ] **Step 5: Write lesson 09 — ทางลัด ประวัติคำสั่ง และ Wildcard**

`<title>` is `ทางลัด ประวัติคำสั่ง และ Wildcard`. Nav: prev `08_viewing_file_contents.html`, next `10_environment_variables_and_path.html`.

Required body sections:

- `<h2>กด Tab ให้ shell พิมพ์ให้</h2>` — type `cd my-c` then Tab; if several names match, Tab twice lists them. Sell it as the single habit that removes most typos.
- `<h2>เรียกคำสั่งเดิมด้วยลูกศรขึ้น</h2>` — ↑ and ↓, plus `history` to list past commands.
- `<h2>ปุ่มลัดที่ต้องรู้</h2>` — a table:

| ปุ่ม | ทำอะไร |
| --- | --- |
| `Ctrl + C` | หยุด process ที่กำลังรันอยู่ |
| `Ctrl + L` | ล้างหน้าจอ (เท่ากับคำสั่ง `clear`) |
| `Ctrl + D` | จบ input หรือออกจาก shell |
| `Ctrl + A` / `Ctrl + E` | ย้ายเคอร์เซอร์ไปต้น / ท้ายบรรทัด |

Emphasise `Ctrl + C` as the way to stop `sass --watch`, a dev server, or anything that seems frozen.

- `<h2>Wildcard: จัดการหลายไฟล์พร้อมกัน</h2>` — `*` matches any number of characters, `?` matches exactly one. Examples: `ls *.json`, `ls src/*.js`, `rm *.log`, `ls file?.txt`.
- Required callout:

```html
<div class="callout">
  <p>
    <strong>บน Windows:</strong> ปุ่มลัดเหล่านี้ใช้ได้ใน Git Bash ทั้งหมด ส่วนใน
    PowerShell <code>Ctrl + C</code> ทำงานเหมือนกัน แต่ <code>Ctrl + D</code>
    อาจไม่ทำงาน ให้พิมพ์ <code>exit</code> แทน
  </p>
</div>
```

- A `<blockquote>` common mistake: closing the terminal window instead of pressing `Ctrl + C`, which can leave a server holding its port so the next start fails; and running `rm *` in the wrong folder, which is why `ls *` first is worth the two seconds.

Exercise: in `~/my-cli-lab`, create three files `a.log`, `b.log`, `notes.txt`, then use one wildcard command to list only the `.log` files and one to delete them — without touching `notes.txt`.

Solution `<details>`: explain that `*.log` expands to every name ending in `.log` before the command runs, so `rm` receives two filenames and never sees `notes.txt`, and that listing first is how you confirm the pattern before deleting:

```
$ cd ~/my-cli-lab
$ touch a.log b.log notes.txt
$ ls *.log
a.log	b.log
$ rm *.log
$ ls
README.md	docs		notes.txt	src
```

- [ ] **Step 6: Run the verifier**

Run: `cd Week_05_06/05_basic_command_line/content && node verify_content.mjs`
Expected: PASS, `Verified 9/12 command line lessons.`

- [ ] **Step 7: Commit**

```bash
git add Week_05_06/05_basic_command_line/content/0[789]_*.html
git commit -m "content: add command line lessons 07-09 (file management, viewing, shortcuts)"
```

---

### Task 5: Lessons 10–12 (PATH and the Node hand-off)

**Files:**
- Create: `Week_05_06/05_basic_command_line/content/10_environment_variables_and_path.html`
- Create: `Week_05_06/05_basic_command_line/content/11_installing_node_and_npm.html`
- Create: `Week_05_06/05_basic_command_line/content/12_running_node_projects.html`
- Test: `Week_05_06/05_basic_command_line/content/verify_content.mjs`

**Interfaces:**
- Consumes: the page skeleton from Task 2 Step 1.
- Produces: the finished course; `verify_content.mjs --strict` passes after this task.

- [ ] **Step 1: Write lesson 10 — Environment Variables และ PATH**

`<title>` is `Environment Variables และ PATH`. Nav: prev `09_shortcuts_history_and_wildcards.html`, next `11_installing_node_and_npm.html`.

Required body sections:

- `<h2>Environment Variable คืออะไร</h2>` — variables the shell keeps for every command it runs; like global settings for the session.
- `<h2>อ่านค่าด้วย echo</h2>`:

```
$ echo $HOME
/Users/mint

$ echo $USER
mint
```

Explain the `$` prefix means "ค่าของตัวแปรนี้", not the prompt symbol — reconnect to the lesson 01 mistake.

- `<h2>PATH คือรายชื่อโฟลเดอร์ที่ shell ใช้ค้นหาโปรแกรม</h2>`:

```
$ echo $PATH
/usr/local/bin:/usr/bin:/bin:/Users/mint/.nvm/versions/node/v22.11.0/bin
```

Explain that the value is a list separated by `:`, and that when you type `node`, the shell walks that list left to right and runs the first match it finds.

- `<h2>หาว่าคำสั่งมาจากไหนด้วย which</h2>` — `which node`, `which npm`; explain `command -v node` as the portable alternative.
- `<h2>ทำไมถึงเจอ command not found</h2>` — three causes, in the order students actually hit them: typo, program not installed, or installed but its folder is not in `PATH` (usually because the terminal was open before install). Give the fix for each.
- `<h2>ตั้งค่าตัวแปรชั่วคราว</h2>` — `export API_KEY=abc123` for the session, and the one-off form `API_KEY=abc123 node app.js`; note that both disappear when the terminal closes, and that permanent settings live in `.zshrc` or `.bashrc`, which is beyond this course.
- Required callout:

```html
<div class="callout">
  <p>
    <strong>บน Windows:</strong> ใน Git Bash ใช้ <code>echo $PATH</code> ได้ตามปกติ
    ส่วนใน PowerShell ให้ใช้ <code>$env:PATH</code> และแทน <code>which</code>
    ด้วย <code>where.exe node</code> โดยตัวคั่นใน PATH ของ Windows จะเป็น
    <code>;</code> ไม่ใช่ <code>:</code>
  </p>
</div>
```

- A `<blockquote>` common mistake: installing a tool and immediately getting `command not found` in the terminal that was already open; a shell reads `PATH` when it starts, so the fix is to open a new terminal.

Exercise: run `echo $PATH` and `which node`. If `node` is not installed yet, say so and explain what the output would look like once it is. Then answer: which folder in your `PATH` will `node` most likely come from?

Solution `<details>`: explain that `which node` prints the full path of the file that runs, and that on a machine using nvm it sits under `~/.nvm/versions/node/<version>/bin`, while a `.pkg` installer puts it in `/usr/local/bin`. If `node` is not installed, `which node` prints nothing and exits with an error code — which is exactly the `command not found` situation, and lesson 11 fixes it.

- [ ] **Step 2: Run the verifier**

Run: `cd Week_05_06/05_basic_command_line/content && node verify_content.mjs`
Expected: PASS, `Verified 10/12 command line lessons.`

- [ ] **Step 3: Write lesson 11 — ติดตั้ง Node.js และ npm**

`<title>` is `ติดตั้ง Node.js และ npm`. Nav: prev `10_environment_variables_and_path.html`, next `12_running_node_projects.html`.

Required body sections:

- `<h2>Node.js คืออะไรในหนึ่งย่อหน้า</h2>` — a JavaScript runtime that runs outside the browser, so the same language students already know can run on their own machine. Keep it to one paragraph; the Node course covers the rest.
- `<h2>ติดตั้งด้วย nvm ดีกว่าอย่างไร</h2>` — nvm lets you install several Node versions and switch per project, which matters because different projects pin different versions. The `.pkg` installer gives you exactly one version and needs an admin password to change.
- `<h2>ติดตั้ง nvm บน macOS และ Linux</h2>`:

```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Then close and reopen the terminal — tie this back to lesson 10, since the installer appends to the shell config and only a new shell reads it.

- `<h2>ติดตั้ง Node เวอร์ชัน LTS</h2>`:

```
$ nvm install --lts
$ nvm use --lts
```

Explain LTS as "Long Term Support", the version to use unless a project says otherwise.

- `<h2>ตรวจสอบว่าติดตั้งสำเร็จ</h2>`:

```
$ node -v
v22.11.0

$ npm -v
10.9.0
```

Explain that npm arrives bundled with Node, which is why there is no separate install step.

- `<h2>npx คืออะไร</h2>` — runs a package's command without installing it globally; students already used it as `npx sass --watch` in the SCSS course, so name that connection explicitly.
- `<h2>รัน JavaScript บรรทัดเดียวเพื่อทดสอบ</h2>`:

```
$ node -e "console.log('hello from node')"
hello from node
```

- Required callout:

```html
<div class="callout">
  <p>
    <strong>บน Windows:</strong> nvm ตัวนี้ใช้กับ Git Bash ไม่ได้ ให้ติดตั้ง
    <a href="https://github.com/coreybutler/nvm-windows">nvm-windows</a>
    แทน หรือจะดาวน์โหลด installer เวอร์ชัน LTS จาก
    <a href="https://nodejs.org/">nodejs.org</a> ก็ได้ ถ้าใช้ WSL ให้ทำตามขั้นตอนของ
    Linux ได้เลย และไม่ว่าจะวิธีไหน ต้องปิดแล้วเปิด terminal ใหม่หลังติดตั้งเสมอ
  </p>
</div>
```

- A `<blockquote>` common mistake: running `node -v` in the same terminal that was open during installation and concluding the install failed. Open a new terminal first, then check.

Exercise: install Node LTS on your machine, then run `node -v`, `npm -v`, `which node`, and `node -e "console.log(2 + 2)"`. Record all four outputs.

Solution `<details>`: explain what each command proves — `node -v` and `npm -v` confirm both tools are installed and reachable through `PATH`, `which node` shows which installation actually runs (useful when two installs conflict), and `node -e` proves the runtime executes JavaScript. Then show the expected shape of the output:

```
$ node -v
v22.11.0
$ npm -v
10.9.0
$ which node
/Users/mint/.nvm/versions/node/v22.11.0/bin/node
$ node -e "console.log(2 + 2)"
4
```

Note that version numbers will differ, and that a `command not found` here means re-reading lesson 10 about `PATH`.

- [ ] **Step 4: Run the verifier**

Run: `cd Week_05_06/05_basic_command_line/content && node verify_content.mjs`
Expected: PASS, `Verified 11/12 command line lessons.`

- [ ] **Step 5: Write lesson 12 — รันสคริปต์และโปรเจกต์ Node**

`<title>` is `รันสคริปต์และโปรเจกต์ Node`. Nav: prev `11_installing_node_and_npm.html`, **no `rel="next"`** — the nav has only the previous and index links.

Required body sections:

- `<h2>รันไฟล์ JavaScript ด้วย node</h2>` — create `hello.js` with `console.log("hello")`, run `node hello.js`; stress that the path is relative to `pwd`, so being in the wrong folder gives `Cannot find module`.
- `<h2>โหมด REPL</h2>` — typing `node` alone opens an interactive prompt; leave with `.exit` or `Ctrl + D`.
- `<h2>สร้างโปรเจกต์ด้วย npm init</h2>` — `npm init -y` and what appears in `package.json`; show the generated file.
- `<h2>ติดตั้ง package ด้วย npm install</h2>` — `npm install dayjs`, then the three things that changed: `node_modules/`, `package.json` gained a dependency, `package-lock.json` appeared. Explain that `node_modules` is generated and never committed, which is why `.gitignore` lists it — reference `Week_04/01_basic_git`.
- `<h2>สคริปต์ใน package.json</h2>` — add a `start` script and run it:

```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

```
$ npm run start
```

Explain that `npm run` looks up the name in `package.json` and runs the command, which is why every project can be started the same way regardless of its internals.

- `<h2>หยุด process ด้วย Ctrl + C</h2>` — reconnect to lesson 09; a dev server keeps running until stopped.
- Optional callout, include it as written:

```html
<div class="callout">
  <p>
    <strong>บน Windows:</strong> สคริปต์ใน <code>package.json</code>
    ของบางโปรเจกต์เขียนด้วยคำสั่งแบบ Unix เช่น <code>rm -rf dist</code>
    ซึ่งจะรันไม่ผ่านใน Command Prompt แต่รันได้ใน Git Bash หรือ WSL
    อีกเหตุผลหนึ่งที่คอร์สนี้แนะนำให้ใช้ Git Bash ตลอด
  </p>
</div>
```

- A `<blockquote>` common mistake: running `npm install` outside the project folder, which creates a stray `node_modules` in the home directory; and committing `node_modules` to git.
- Close the lesson with a short `<h2>ก้าวต่อไป</h2>` paragraph saying every terminal skill needed for the Node.js course is now covered.

Exercise: build a project from nothing — `mkdir hello-node`, `cd` into it, `npm init -y`, create `index.js` that prints a greeting, add a `start` script, and run it with `npm run start`.

Solution `<details>`: explain that `npm init -y` accepts all the defaults so `package.json` exists immediately, that the `start` script is just a saved command, and that `npm run start` is preferred over `node index.js` because the entry point can change without anyone needing to know. Then give the full transcript:

```
$ mkdir hello-node
$ cd hello-node
$ npm init -y
$ touch index.js
$ code .
```

หลังจากพิมพ์ `console.log("hello from my first node project")` ลงใน `index.js`
และเพิ่ม `start` script แล้ว:

```
$ npm run start

> hello-node@1.0.0 start
> node index.js

hello from my first node project
```

Note that the two lines beginning with `>` in the output are npm echoing which script it is about to run, not part of the program's output.

- [ ] **Step 6: Run the verifier in strict mode**

```bash
cd Week_05_06/05_basic_command_line/content && node verify_content.mjs --strict
```

Expected: PASS, exit 0, printing `Verified 12/12 command line lessons.` with no pending list.

- [ ] **Step 7: Check every page in a browser**

```bash
open Week_05_06/05_basic_command_line/content/index.html
```

Click through all twelve lessons using only the next arrow, then back using previous. Confirm: no broken link, no purple left in the theme, tables and file trees scroll rather than overflow at a narrow window width, and every lesson from 02 to 11 shows a visible `บน Windows` callout.

- [ ] **Step 8: Commit**

```bash
git add Week_05_06/05_basic_command_line/content/1[012]_*.html
git commit -m "content: add command line lessons 10-12 (PATH, Node install, npm projects)"
```

---

## Verification Summary

After Task 5, this must hold:

```bash
cd Week_05_06/05_basic_command_line/content && node verify_content.mjs --strict
```

Exit code 0 and output `Verified 12/12 command line lessons.`

Additionally, `grep -c 'บน Windows' *.html` must report at least one match for each of lessons 02 through 11.
