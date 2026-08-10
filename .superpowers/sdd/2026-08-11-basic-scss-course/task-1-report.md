# Task 1 Report — Course Contract and Shared Assets

## Status

Completed with concerns.

## Files changed

- `Week_05_06/03_basic_scss/content/verify_content.mjs`
- `Week_05_06/03_basic_scss/content/index.html`
- `Week_05_06/03_basic_scss/content/lesson.css`

## Implementation details

- Added `verify_content.mjs` with an ordered `LESSONS` array of 12 `{ file, title }` entries and contract checks for:
  - Thai `<html lang="th">`
  - `<meta name="description">`
  - exactly one `<h1>`
  - required exercise/solution markup
  - `lesson.css` and `index.html` links
  - exactly one `<title>`
  - closing `</html>`
  - adjacent `rel="prev"` / `rel="next"` navigation
  - existence of every local `href` target
  - no Sass `@import` recommendations
- Added `index.html` titled `บทเรียน SCSS สำหรับผู้เริ่มต้น` with an ordered list of 12 lesson links.
- Added `lesson.css` by adapting the Week 03 lesson stylesheet structure to a purple/coral palette and including the required shared classes:
  - `.lesson-index`
  - `.lesson-navigation`
  - `.lesson-navigation__link`
  - `.callout`
  - `.file-tree`
  - `.comparison-grid`

## Exact commands run and outcomes

1. `git status --short`
   - Outcome: clean working tree before starting.

2. `node Week_05_06/03_basic_scss/content/verify_content.mjs`
   - Outcome: after scaffolding, failed as expected with `ENOENT` for missing `01_what_is_scss.html`, proving the verifier and index load.

3. `git add Week_05_06/03_basic_scss/content/index.html Week_05_06/03_basic_scss/content/lesson.css Week_05_06/03_basic_scss/content/verify_content.mjs && git commit -m "feat: scaffold beginner SCSS course"`
   - Outcome: commit created successfully.

4. `node Week_05_06/03_basic_scss/content/verify_content.mjs`
   - Outcome: still fails as expected with `ENOENT` for missing `01_what_is_scss.html`.

5. `git rev-parse HEAD`
   - Outcome: `4c5ec2d3fc33614dead8395573c9fd90c2ea3602`

6. `git status --short`
   - Outcome: clean working tree after commit.

## Self-review notes

- Verified the scaffold includes the requested shared CSS classes and responsive/print-safe structural rules.
- Verified the index uses the requested Thai title and points at 12 lesson files in order.
- Verified the checker currently fails on the first missing lesson file, which matches the scaffold-stage expectation.

## Commit hash

- `4c5ec2d3fc33614dead8395573c9fd90c2ea3602`

## Concerns

1. The task brief referenced a “File Map” but did not include the 12 exact filenames beyond `01_what_is_scss.html`. I used a conservative inferred beginner-SCSS filename set for the remaining 11 lessons.
2. Because the brief omitted the explicit file map, downstream lesson tasks may need filename alignment if a different canonical map exists.
3. I did not capture a separate pre-scaffold verifier failure before creating `index.html` and `lesson.css`; the recorded failure is the post-scaffold expected `01_what_is_scss.html` `ENOENT`.

---

## Fix Round 1

### What changed

- Replaced the inferred lesson file map with the canonical 12 filenames in both `verify_content.mjs` and `index.html`.
- Updated the index link labels to match the canonical lesson sequence.
- Replaced the over-broad `@import` rejection with a semantic-block policy:
  - each `@import` mention must appear inside a teaching block such as `<p>`, `<li>`, `<blockquote>`, `<summary>`, `<details>`, `<pre>`, `<td>`, or `<th>`
  - that block must contain explicitly negative or deprecation guidance (for example `legacy`, `deprecated`, `should not be used`, `ไม่ควรใช้`, `แทนที่ด้วย @use`)
  - this allows warning copy like “`@import` is deprecated and should not be used for new code” while still failing examples that present `@import` without explicit negative guidance
- Added retrospective RED behavior evidence by copying the verifier into an isolated empty temporary content directory and running it there to capture the expected missing-file failure before any scaffold files exist in that isolated environment.

### Exact covering commands and outputs

1. `node Week_05_06/03_basic_scss/content/verify_content.mjs`

   Output:
   ```text
   Error: index.html: missing local href target 01_what_is_scss.html
   ENOENT: no such file or directory, open '/Users/varis/Sites/varis-lab/frontend-bootcamp-content-7-july-2026/Week_05_06/03_basic_scss/content/01_what_is_scss.html'
   ```

   Outcome: passes the scaffold/index checks and now fails only on the canonical missing Lesson 1 file.

2. `tmpdir=$(mktemp -d /tmp/scss-task1-red-XXXXXX) && mkdir -p "$tmpdir/content" && cp Week_05_06/03_basic_scss/content/verify_content.mjs "$tmpdir/content/verify_content.mjs" && node "$tmpdir/content/verify_content.mjs"`

   Output:
   ```text
   Error: ENOENT: no such file or directory, open '/private/tmp/scss-task1-red-HmohmT/content/index.html'
   ```

   Outcome: retrospective RED behavior evidence in an isolated empty content directory. This is explicitly retrospective evidence, not a claim about the original chronology.
