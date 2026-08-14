# Basic Command Line Course Design

## Goal

Create a Thai-language beginner command-line course at `Week_05_06/05_basic_command_line/content` that follows the browser-readable lesson format used by `Week_03/01_basic_javaScript/content` and refined by `Week_05_06/02_basic_scss/content`.

The course is for students who have completed HTML, CSS, JavaScript, Git, React, and SCSS in this bootcamp, but who have only ever used the terminal by copying commands without understanding them. It teaches the shell skills required to work confidently in a project directory, and ends by handing students off to Node.js: installing Node, running scripts, and driving an npm project.

## Audience Assumptions

- Students have seen a terminal before (Week_04 Git, Week_05_06 Sass `--watch`) but cannot navigate or troubleshoot in it.
- The class is mixed-OS. macOS/Linux is the primary path; Windows students follow along using Git Bash or WSL.
- Students already know what a file and a folder are from using a GUI file manager and VS Code.

## Deliverables

The course will contain:

- `index.html`: linked table of contents for all twelve lessons
- `lesson.css`: shared presentation styles, forked from the SCSS course theme with a new accent palette
- Twelve numbered HTML lesson pages
- Previous, index, and next navigation on every lesson page
- One focused exercise and collapsible solution in every lesson
- `verify_content.mjs`: a Node script that asserts the structural contract across all pages

The course will not include a starter project folder, a finished project folder, a cumulative capstone, or a quiz JSON file. Quizzes for this repository live separately under `extra/` and are produced as their own task.

## Curriculum

1. `01_what_is_command_line.html` — Command Line คืออะไร, GUI เทียบกับ CLI, terminal เทียบกับ shell
2. `02_opening_your_terminal.html` — เปิด Terminal ครั้งแรกบนแต่ละระบบ, อ่าน prompt, คำสั่งแรก (`whoami`, `date`, `pwd`)
3. `03_anatomy_of_a_command.html` — โครงสร้างคำสั่ง: command, options/flags, arguments, และการอ่าน `--help` กับ `man`
4. `04_navigating_the_filesystem.html` — `pwd`, `ls` พร้อม `-l` และ `-a`, `cd`
5. `05_paths_absolute_and_relative.html` — absolute เทียบกับ relative path, `.`, `..`, `~`, `/`, และชื่อไฟล์ที่มีช่องว่าง
6. `06_creating_files_and_folders.html` — `mkdir` และ `mkdir -p`, `touch`, เปิดโฟลเดอร์ใน editor ด้วย `code .`
7. `07_copying_moving_deleting.html` — `cp`, `mv` สำหรับย้ายและเปลี่ยนชื่อ, `rm`, `rm -r` พร้อมคำเตือนว่าไม่มีถังขยะ
8. `08_viewing_file_contents.html` — `cat`, `head`, `tail`, `less`, และ `grep` เบื้องต้น
9. `09_shortcuts_history_and_wildcards.html` — Tab completion, ประวัติคำสั่งด้วยลูกศร, `Ctrl+C`, `Ctrl+L`, `Ctrl+D`, wildcard `*` และ `?`
10. `10_environment_variables_and_path.html` — `echo $PATH`, environment variables, และสาเหตุของ `command not found`
11. `11_installing_node_and_npm.html` — ติดตั้ง Node.js ผ่าน nvm หรือ installer, `node -v`, `npm -v`, `npx`
12. `12_running_node_projects.html` — `node app.js`, `npm init -y`, `npm install`, `npm run`, `node_modules`, และการหยุด process ด้วย `Ctrl+C`

Lessons 1 through 10 teach shell fundamentals. Lessons 11 and 12 are the deliberate hand-off into the Node.js material students will study next.

## Lesson Structure

Each lesson is a standalone valid HTML document with `lang="th"`, responsive metadata, a Thai description, a descriptive title, and a link to `lesson.css`.

Each lesson contains:

1. A short motivation that connects the lesson to work students already do
2. Concept explanations in Thai, keeping English technical terms where they are the real vocabulary
3. Terminal transcripts in `<pre><code>` that show both the command and its output, so students can compare against their own screen
4. A `.callout` labelled `บน Windows` in every lesson where the command, key, or path syntax differs
5. A warning about the most likely beginner mistake for that topic
6. A focused exercise that a student can complete in their own terminal without extra setup
7. A `<details>` element with `<summary>ดูเฉลย</summary>` containing a prose explanation and the answer
8. Consistent previous, index, and next navigation

## Windows Handling

macOS and Linux commands are the main body text. Windows students are told once, in lesson 02, to install Git Bash or WSL and to use that terminal for the whole course. From lesson 03 onward, a `บน Windows` callout appears only where behaviour genuinely differs, for example:

- PowerShell and CMD equivalents when a student cannot install Git Bash
- Path separators and drive letters, including how `/c/Users/...` maps to `C:\Users\...` in Git Bash
- Keyboard differences such as `Ctrl+C` behaviour in PowerShell

Windows notes never replace the main instruction; they are always supplementary so the primary reading flow stays single-path.

## Visual Design

`lesson.css` is forked from `Week_05_06/02_basic_scss/content/lesson.css`, preserving its full structure: the `:root` token block, typography scale, `pre`/`code` treatment, tables, `details`, `.callout`, `.file-tree`, `.comparison-grid`, `.lesson-navigation`, `.lesson-index`, and the mobile and print media queries.

Only the palette changes, to a terminal-flavoured teal with an amber accent:

- `--canvas: #eef4f3`
- `--surface: #ffffff`
- `--text: #12211f`
- `--muted: #4f6360`
- `--primary: #0f766e`
- `--primary-dark: #0b544e`
- `--primary-soft: #dcefec`
- `--secondary: #d98324`
- `--secondary-soft: #fdefdc`
- `--border: #c8dcd8`
- `--code-bg: #10201e`
- `--code-text: #eafaf6`

This keeps every course visually consistent in layout while making the command-line course immediately distinguishable from the blue JavaScript course and the purple SCSS course.

## Verification

`verify_content.mjs` follows the SCSS course checker and asserts, for each lesson:

- `<html lang="th">` and a `<meta name="description">`
- Exactly one `<h1>` and exactly one `<title>`, with the title matching the expected lesson title
- An `<h2>แบบฝึกหัด</h2>` section, at least one `<details>`, and a `<summary>ดูเฉลย</summary>`
- Every solution `<details>` contains at least one non-empty `<p>` explanation
- Links to `lesson.css` and `index.html`
- `rel="prev"` and `rel="next"` point at the correct adjacent lesson files, and are absent on the first and last lessons respectively
- Every local `href` resolves to a file that exists
- The document ends with `</html>`

It also asserts that `index.html` links to each lesson exactly once, in order, with link text matching the lesson titles.

A command-line-specific check is added: lessons 02 through 11 must each contain at least one `บน Windows` callout, so the mixed-OS promise is not quietly dropped as pages are edited. The list of lessons requiring a callout is written explicitly in the script rather than inferred from lesson numbers. Lesson 01 is conceptual and lesson 12 is npm-driven, so neither is required to carry one, though lesson 12 may include a note about npm scripts that assume a Unix shell.

## Out of Scope

The course does not cover:

- File permissions, `chmod`, `chown`, or `sudo` beyond a single sentence noting they exist
- Pipes and output redirection (`|`, `>`, `>>`)
- `find`, `sed`, `awk`, or regular expressions beyond a literal `grep` search
- SSH keys and remote servers
- Shell scripting, aliases, or customising `.zshrc` / `.bashrc` beyond reading `$PATH`
- Git commands, which are already taught in `Week_04/01_basic_git`
