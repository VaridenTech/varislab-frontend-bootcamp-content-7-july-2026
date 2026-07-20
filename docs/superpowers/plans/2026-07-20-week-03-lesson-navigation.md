# Week 03 Lesson Navigation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add Previous, All lessons, and Next navigation to 31 numbered JavaScript lessons and create a local lesson index.

**Architecture:** Keep navigation fully static: each numbered lesson receives hardcoded relative links derived from the sorted filenames, while `index.html` contains an ordered list of all lesson links. Extend the existing shared `lesson.css` for navigation and index presentation; no JavaScript or external dependency is introduced.

**Tech Stack:** HTML5, CSS3, zsh mechanical rewrite, `xmllint`, ripgrep

## Global Constraints

- Preserve existing lesson text, examples, attribution, and document structure.
- Use Thai control labels: `← บทก่อนหน้า`, `บทเรียนทั้งหมด`, and `บทถัดไป →`.
- Omit unavailable Previous/Next anchors on lessons 1 and 31.
- Keep every link relative and functional without JavaScript.
- Do not stage or commit lesson files as part of implementation.

---

### Task 1: Navigation acceptance checks

**Files:**
- Verify: `Week_03/01_basic_javaScript/content/[0-9][0-9]_*.html`
- Verify: `Week_03/01_basic_javaScript/content/index.html`

**Interfaces:**
- Consumes: 31 lexically ordered lesson filenames
- Produces: A red test proving navigation and the index do not exist yet

- [ ] **Step 1: Run the navigation check before implementation**

```bash
lesson_count=$(find Week_03/01_basic_javaScript/content -maxdepth 1 -name '[0-9][0-9]_*.html' -type f | wc -l | tr -d ' ')
nav_count=$(rg -l 'class="lesson-navigation"' Week_03/01_basic_javaScript/content/[0-9][0-9]_*.html 2>/dev/null | wc -l | tr -d ' ')
test -f Week_03/01_basic_javaScript/content/index.html
test "$lesson_count" = "31" && test "$nav_count" = "$lesson_count"
```

Expected: FAIL because `index.html` and all navigation blocks are absent.

### Task 2: Lesson index

**Files:**
- Create: `Week_03/01_basic_javaScript/content/index.html`

**Interfaces:**
- Consumes: Visible first `h1` title from each lesson
- Produces: One index page with 31 ordered local links and the shared stylesheet

- [ ] **Step 1: Create the index document**

Create this exact Thai HTML document:

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="สารบัญบทเรียน JavaScript ภาษาไทย" />
    <title>บทเรียน JavaScript ทั้งหมด</title>
    <link rel="stylesheet" href="lesson.css" />
  </head>
  <body>
    <main>
      <h1>บทเรียน JavaScript ทั้งหมด</h1>
<ol class="lesson-index">
  <li><a href="01_what_is_javascript.html">JavaScript คืออะไร?</a></li>
  <li><a href="02_your_first_javascript_app.html">แอป JavaScript แรกของคุณ</a></li>
  <li><a href="03_primitive_types_and_operations.html">ชนิดข้อมูลพื้นฐานและการดำเนินการ</a></li>
  <li><a href="04_creating_your_first_variable.html">การสร้างตัวแปรแรกของคุณ</a></li>
  <li><a href="05_constants_with_const.html">const - การสร้างค่าคงที่</a></li>
  <li><a href="06_null_vs_undefined.html">การแสดงถึง “การไม่มีค่า”</a></li>
  <li><a href="07_introduction_to_functions.html">บทนำเกี่ยวกับฟังก์ชัน</a></li>
  <li><a href="08_passing_functions_as_arguments.html">การส่งฟังก์ชันเป็นอาร์กิวเมนต์</a></li>
  <li><a href="09_arrow_functions.html">Arrow Function</a></li>
  <li><a href="10_understanding_scope.html">ทำความเข้าใจ Scope</a></li>
  <li><a href="11_type_coercion.html">การแปลงชนิดข้อมูล</a></li>
  <li><a href="12_nan_not_a_number.html">NaN (ไม่ใช่ตัวเลข)</a></li>
  <li><a href="13_equality_type_comparisons.html">ความเท่ากัน: == กับ ===</a></li>
  <li><a href="14_arrays.html">Array</a></li>
  <li><a href="15_objects.html">Object</a></li>
  <li><a href="16_reference_vs_value.html">Reference กับ Value</a></li>
  <li><a href="17_string_template_literals.html">String Template Literal</a></li>
  <li><a href="18_this_keyword.html">คีย์เวิร์ด this/new</a></li>
  <li><a href="19_if_statements.html">คำสั่ง If</a></li>
  <li><a href="20_ternary_operator.html">Ternary Operator</a></li>
  <li><a href="21_switch_statements.html">คำสั่ง Switch</a></li>
  <li><a href="22_for_loops.html">For Loop</a></li>
  <li><a href="23_while_loops.html">While Loop</a></li>
  <li><a href="24_recursion.html">Recursion</a></li>
  <li><a href="25_short_circuit_evaluation.html">การประเมินผลแบบลัดวงจร</a></li>
  <li><a href="26_array_methods.html">เมธอด Array</a></li>
  <li><a href="27_window_and_document.html">Window และ Document Object</a></li>
  <li><a href="28_selecting_elements.html">การเลือก Element</a></li>
  <li><a href="29_event_listeners.html">Event Listener</a></li>
  <li><a href="30_common_errors.html">ข้อผิดพลาด JavaScript ที่พบบ่อย</a></li>
  <li><a href="31_devtools_basics.html">พื้นฐาน Browser DevTools</a></li>
</ol>
    </main>
  </body>
</html>
```

- [ ] **Step 2: Verify the index**

```bash
xmllint --noout Week_03/01_basic_javaScript/content/index.html
test "$(rg -o 'href="[0-9][0-9]_[^"]+\.html"' Week_03/01_basic_javaScript/content/index.html | wc -l | tr -d ' ')" = "31"
test "$(rg -o 'href="lesson.css"' Week_03/01_basic_javaScript/content/index.html | wc -l | tr -d ' ')" = "1"
```

Expected: PASS with 31 lesson links and one stylesheet link.

### Task 3: Sequential lesson links

**Files:**
- Modify: `Week_03/01_basic_javaScript/content/[0-9][0-9]_*.html`

**Interfaces:**
- Consumes: Sorted numbered lesson paths and `index.html` from Task 2
- Produces: One `.lesson-navigation` block in every numbered lesson

- [ ] **Step 1: Insert navigation mechanically**

Run this zsh script after confirming no lesson already contains `.lesson-navigation`:

```zsh
lesson_files=(Week_03/01_basic_javaScript/content/[0-9][0-9]_*.html(N))
(( ${#lesson_files} == 31 )) || exit 1
rg -q 'class="lesson-navigation"' $lesson_files && exit 1

for (( i = 1; i <= ${#lesson_files}; i++ )); do
  lesson=${lesson_files[$i]}
  nav_block=$'    <nav class="lesson-navigation" aria-label="การนำทางบทเรียน">\n'

  if (( i > 1 )); then
    previous_name=${lesson_files[$((i - 1))]:t}
    nav_block+="      <a class=\"lesson-navigation__link lesson-navigation__link--previous\" href=\"${previous_name}\" rel=\"prev\">← บทก่อนหน้า</a>"$'\n'
  fi

  nav_block+=$'      <a class="lesson-navigation__link lesson-navigation__link--index" href="index.html">บทเรียนทั้งหมด</a>\n'

  if (( i < ${#lesson_files} )); then
    next_name=${lesson_files[$((i + 1))]:t}
    nav_block+="      <a class=\"lesson-navigation__link lesson-navigation__link--next\" href=\"${next_name}\" rel=\"next\">บทถัดไป →</a>"$'\n'
  fi

  nav_block+=$'    </nav>\n'
  NAV_BLOCK="$nav_block" perl -0pi -e 's{</main>}{$ENV{NAV_BLOCK}</main>}' "$lesson"
done
```

- [ ] **Step 2: Verify navigation counts and boundaries**

```bash
test "$(rg -l 'class="lesson-navigation"' Week_03/01_basic_javaScript/content/[0-9][0-9]_*.html | wc -l | tr -d ' ')" = "31"
test "$(rg -o 'class="lesson-navigation"' Week_03/01_basic_javaScript/content/[0-9][0-9]_*.html | wc -l | tr -d ' ')" = "31"
! rg -q 'rel="prev"' Week_03/01_basic_javaScript/content/01_what_is_javascript.html
rg -q 'href="02_your_first_javascript_app.html" rel="next"' Week_03/01_basic_javaScript/content/01_what_is_javascript.html
rg -q 'href="30_common_errors.html" rel="prev"' Week_03/01_basic_javaScript/content/31_devtools_basics.html
! rg -q 'rel="next"' Week_03/01_basic_javaScript/content/31_devtools_basics.html
```

Expected: PASS.

### Task 4: Navigation and index styling

**Files:**
- Modify: `Week_03/01_basic_javaScript/content/lesson.css`

**Interfaces:**
- Consumes: `.lesson-navigation`, `.lesson-navigation__link`, and `.lesson-index` markup
- Produces: Desktop, mobile, focus, and print presentation

- [ ] **Step 1: Add component CSS**

Append these rules:

```css
.lesson-navigation {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0.75rem;
  align-items: center;
  margin-top: 3.5rem;
  padding-top: 1.5rem;
  border-top: 2px solid var(--blue-soft);
}

.lesson-navigation__link {
  display: inline-flex;
  min-height: 44px;
  padding: 0.65rem 0.9rem;
  align-items: center;
  justify-content: center;
  color: var(--blue-dark);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  font-weight: 700;
  line-height: 1.35;
  text-align: center;
  text-decoration: none;
}

.lesson-navigation__link:hover {
  color: var(--blue-dark);
  background: var(--blue-soft);
  border-color: var(--blue);
}

.lesson-navigation__link--previous {
  grid-column: 1;
  justify-self: start;
}

.lesson-navigation__link--index {
  grid-column: 2;
  color: #ffffff;
  background: var(--blue-dark);
  border-color: var(--blue-dark);
}

.lesson-navigation__link--index:hover {
  color: #ffffff;
  background: var(--blue);
  border-color: var(--blue);
}

.lesson-navigation__link--next {
  grid-column: 3;
  justify-self: end;
}

.lesson-index {
  padding: 0;
  list-style: none;
  counter-reset: lesson;
}

.lesson-index li {
  margin: 0;
  counter-increment: lesson;
}

.lesson-index li + li {
  margin-top: 0.65rem;
}

.lesson-index a {
  display: grid;
  grid-template-columns: 3rem 1fr;
  gap: 0.8rem;
  min-height: 52px;
  padding: 0.75rem 1rem;
  align-items: center;
  color: var(--text);
  background: #f8fbff;
  border: 1px solid var(--border);
  border-radius: 9px;
  text-decoration: none;
}

.lesson-index a::before {
  content: counter(lesson, decimal-leading-zero);
  color: var(--blue);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.82rem;
  font-weight: 700;
}

.lesson-index a:hover {
  color: var(--blue-dark);
  background: var(--blue-soft);
  border-color: var(--blue);
}

@media (max-width: 640px) {
  .lesson-navigation {
    grid-template-columns: 1fr 1fr;
  }

  .lesson-navigation__link {
    width: 100%;
  }

  .lesson-navigation__link--index {
    grid-row: 1;
    grid-column: 1 / -1;
  }

  .lesson-navigation__link--previous {
    grid-row: 2;
    grid-column: 1;
  }

  .lesson-navigation__link--next {
    grid-row: 2;
    grid-column: 2;
  }
}

@media print {
  .lesson-navigation {
    display: none;
  }
}
```

- [ ] **Step 2: Verify required selectors**

```bash
rg -q '^\.lesson-navigation \{' Week_03/01_basic_javaScript/content/lesson.css
rg -q '^\.lesson-navigation__link--index \{' Week_03/01_basic_javaScript/content/lesson.css
rg -q '^\.lesson-index ' Week_03/01_basic_javaScript/content/lesson.css
rg -q 'grid-template-columns: 1fr auto 1fr' Week_03/01_basic_javaScript/content/lesson.css
```

Expected: PASS.

### Task 5: Complete link and document verification

**Files:**
- Verify: `Week_03/01_basic_javaScript/content/*.html`
- Verify: `Week_03/01_basic_javaScript/content/lesson.css`

**Interfaces:**
- Consumes: Completed index, navigation, and styles
- Produces: Evidence that all targets exist and documents remain valid

- [ ] **Step 1: Validate all 32 documents**

```bash
for document in Week_03/01_basic_javaScript/content/*.html; do
  xmllint --noout "$document" || exit 1
done
```

Expected: exit code 0.

- [ ] **Step 2: Verify every local HTML target exists**

```bash
for document in Week_03/01_basic_javaScript/content/*.html; do
  for target in $(xmllint --xpath '//a[not(starts-with(@href, "http"))]/@href' "$document" 2>/dev/null | sed -E 's/ href="([^"]+)"/\1\n/g'); do
    test -f "Week_03/01_basic_javaScript/content/$target" || exit 1
  done
done
```

Expected: exit code 0.

- [ ] **Step 3: Run final repository checks**

```bash
test "$(rg -l 'href="lesson.css"' Week_03/01_basic_javaScript/content/*.html | wc -l | tr -d ' ')" = "32"
git diff --check -- Week_03/01_basic_javaScript/content
```

Expected: PASS with 32 styled HTML documents and no whitespace errors.
