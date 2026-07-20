# Week 03 Lesson Navigation Design

## Scope

Add sequential navigation to the 31 JavaScript lesson pages in `Week_03/01_basic_javaScript/content` and create one local lesson index at `content/index.html`. Preserve all existing lesson text, code examples, attribution, and shared stylesheet behavior.

## Navigation model

Each numbered lesson receives one semantic `<nav>` immediately before `</main>`.

- Previous control: `← บทก่อนหน้า`, links to the preceding numbered lesson, and uses `rel="prev"`.
- Index control: `บทเรียนทั้งหมด`, links to `index.html`.
- Next control: `บทถัดไป →`, links to the following numbered lesson, and uses `rel="next"`.
- Lesson 1 omits Previous.
- Lesson 31 omits Next.
- The Index control remains present and centered on every lesson.

All navigation uses ordinary relative HTML links and works without JavaScript or a web application server.

## Lesson index

Create `index.html` using the existing Thai HTML document pattern and `lesson.css`. Its single job is to show an ordered list of links to all 31 lessons, using each lesson's visible `<h1>` as the link label. The index does not receive Previous or Next controls.

## Markup contract

```html
<nav class="lesson-navigation" aria-label="การนำทางบทเรียน">
  <a
    class="lesson-navigation__link lesson-navigation__link--previous"
    href="PREVIOUS_FILE.html"
    rel="prev"
  >← บทก่อนหน้า</a>
  <a
    class="lesson-navigation__link lesson-navigation__link--index"
    href="index.html"
  >บทเรียนทั้งหมด</a>
  <a
    class="lesson-navigation__link lesson-navigation__link--next"
    href="NEXT_FILE.html"
    rel="next"
  >บทถัดไป →</a>
</nav>
```

Boundary pages omit the unavailable anchor rather than rendering a disabled link. CSS grid placement keeps the Index control centered even when one boundary control is absent.

## Visual treatment

Extend `lesson.css` without adding a new stylesheet.

- Place navigation after the lesson content with a clear top divider.
- Style Previous and Next as quiet outlined controls.
- Style All lessons as the blue primary control.
- Use explicit grid columns on desktop so directional controls reflect page direction.
- On screens below 640px, place All lessons on the first row and Previous/Next below it in two equal columns.
- Use the existing focus-visible treatment and color tokens.
- Style the index list as readable linked rows with lesson numbers and generous touch targets.
- In print mode, hide lesson navigation because the links are interactive controls.

## Link behavior and error prevention

Navigation is generated from the lexically sorted numbered filenames, which already match lesson order `01` through `31`. Before writing links, require exactly 31 numbered lesson files with no duplicate number. After writing, resolve every local navigation and index href against the content directory and require that each target exists.

## Verification

- Exactly 31 numbered lesson files each contain one `.lesson-navigation` element.
- Every lesson links to `index.html` exactly once inside navigation.
- Lesson 1 has no `rel="prev"` and points Next to lesson 2.
- Lesson 31 points Previous to lesson 30 and has no `rel="next"`.
- Lessons 2–30 contain both Previous and Next with adjacent targets.
- `index.html` contains exactly 31 lesson links in numeric order.
- All 32 HTML files remain well formed and reference `lesson.css` exactly once.
- `git diff --check` reports no whitespace errors.
