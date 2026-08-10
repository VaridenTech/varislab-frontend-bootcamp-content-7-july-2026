# Beginner SCSS Course Design

## Goal

Create a Thai-language beginner SCSS course at `Week_05_06/03_basic_scss/content` that follows the browser-readable lesson format used by `Week_03/01_basic_javaScript/content`.

The course is for students who already understand CSS selectors, the box model, Flexbox, and responsive design. It teaches the Dart Sass command-line workflow and the SCSS concepts needed to organize maintainable stylesheets.

## Deliverables

The course will contain:

- `index.html`: linked table of contents for all lessons
- `lesson.css`: shared presentation styles based on the existing JavaScript lesson theme
- Twelve numbered HTML lesson pages
- Previous, index, and next navigation on every lesson page
- One focused exercise and collapsible solution in every lesson

The course will not include a separate starter project, finished project, or cumulative final project.

## Curriculum

1. `01_what_is_scss.html` — SCSS คืออะไร และแตกต่างจาก CSS อย่างไร
2. `02_installing_and_compiling_sass.html` — ติดตั้ง Sass และ Compile ผ่าน CLI
3. `03_variables.html` — Variables
4. `04_nesting_and_parent_selector.html` — Nesting และ Parent Selector (`&`)
5. `05_partials_and_use.html` — Partials และ `@use`
6. `06_organizing_files_and_modules.html` — การจัดระเบียบไฟล์และ Modules
7. `07_mixins_and_include.html` — Mixins และ `@include`
8. `08_mixin_parameters_and_content.html` — Parameters, Default Values และ `@content`
9. `09_functions_and_built_in_modules.html` — Functions และ Built-in Modules
10. `10_lists_and_maps.html` — Lists และ Maps
11. `11_control_flow.html` — `@if`, `@each` และ `@for`
12. `12_css_output_source_maps_and_best_practices.html` — CSS Output, Source Maps และแนวทางใช้งานจริง

## Lesson Structure

Each lesson is a standalone valid HTML document with `lang="th"`, responsive metadata, a Thai description, a descriptive title, and a link to `lesson.css`.

Each lesson contains:

1. A clear learning objective and short motivation
2. Concept explanations in Thai with English technical terms where useful
3. SCSS examples paired with relevant compiled CSS output
4. CLI commands or file trees when the topic requires them
5. A warning or common mistake when there is a likely beginner pitfall
6. A focused exercise that can be completed independently
7. A `<details>` element containing the answer and short explanation
8. Consistent previous/index/next navigation

Code examples use two-space indentation and omit unnecessary semicolons only in shell commands; SCSS and CSS examples retain standard semicolons. Examples favor modern Dart Sass APIs and avoid deprecated `@import`-based architecture.

## Teaching Progression

Lessons 1–2 establish the mental model and CLI feedback loop. Lessons 3–4 introduce the most immediately useful language features. Lessons 5–6 teach module boundaries and file organization before students learn reusable abstraction. Lessons 7–8 introduce mixins in two stages to keep parameters and `@content` manageable. Lessons 9–11 cover data transformation and generation. Lesson 12 closes with readable output, watch mode, source maps, production compilation, and restraint in using advanced features.

Exercises remain local to their lessons. They use small UI examples such as buttons, cards, alerts, spacing tokens, and breakpoints, but do not depend on files created in previous exercises.

## Sass CLI Workflow

The setup lesson teaches a local development dependency:

```sh
npm init -y
npm install --save-dev sass
npx sass scss/main.scss css/main.css
npx sass --watch scss/main.scss:css/main.css
```

The production lesson introduces compressed output and source-map choices using supported Dart Sass flags. The generated CSS is linked from HTML; browsers never load `.scss` files directly.

## Shared Presentation

`lesson.css` will preserve the reference course's readable single-column layout, responsive code blocks, tables, `<details>` styling, and lesson navigation. The content may use a distinct SCSS-inspired accent palette while retaining the same overall structure and accessibility behavior.

## Quality and Verification

Verification will confirm:

- All expected files exist and every index/navigation link resolves
- All HTML files have required metadata, one main heading, an exercise, and a solution
- Lesson order and navigation are consistent
- No deprecated Sass `@import` teaching is presented as the recommended approach
- SCSS examples compile with the installed Sass CLI when extracted into representative fixtures
- The shared stylesheet passes a syntax/build smoke check in a browser-readable page
- Thai terminology and code examples are consistent across lessons

## Out of Scope

- Installing or teaching a VS Code Sass extension
- A full SCSS application or cumulative capstone
- Framework-specific SCSS integration such as Angular, Vue, or React build tooling
- Legacy LibSass or Ruby Sass workflows
- Exhaustive coverage of every Sass function, selector API, or custom importer
