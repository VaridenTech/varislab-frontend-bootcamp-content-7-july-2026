# Week 03 JavaScript Quiz Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a 15-question, beginner-level Thai multiple-choice quiz covering JavaScript lessons 13–26.

**Architecture:** Add one self-contained Markdown quiz beside the lesson files, following the repository's existing quiz format. Each question has four choices, one answer, and a short explanation; shell checks verify structure and topic coverage.

**Tech Stack:** Markdown, UTF-8, JavaScript, POSIX shell, ripgrep

## Global Constraints

- Output: `Week_03/01_basic_javaScript/content/quiz_13_to_26.md`.
- Include exactly 15 questions with exactly four choices each and one correct answer.
- Use beginner-friendly Thai while preserving JavaScript keywords and method names in English.
- Cover every lesson from 13 through 26 at least once; use the final question for an additional Array Methods check.
- Include a one- or two-sentence explanation for every answer.
- Keep every question within the information taught in lessons 13–26.
- Distribute correct choices across A–D without an obvious repeating pattern.

---

### Task 1: Create the complete Thai quiz

**Files:**
- Create: `Week_03/01_basic_javaScript/content/quiz_13_to_26.md`
- Read: `Week_03/01_basic_javaScript/content/13_equality_type_comparisons.html`
- Read: `Week_03/01_basic_javaScript/content/14_arrays.html`
- Read: `Week_03/01_basic_javaScript/content/15_objects.html`
- Read: `Week_03/01_basic_javaScript/content/16_reference_vs_value.html`
- Read: `Week_03/01_basic_javaScript/content/17_string_template_literals.html`
- Read: `Week_03/01_basic_javaScript/content/18_this_keyword.html`
- Read: `Week_03/01_basic_javaScript/content/19_if_statements.html`
- Read: `Week_03/01_basic_javaScript/content/20_ternary_operator.html`
- Read: `Week_03/01_basic_javaScript/content/21_switch_statements.html`
- Read: `Week_03/01_basic_javaScript/content/22_for_loops.html`
- Read: `Week_03/01_basic_javaScript/content/23_while_loops.html`
- Read: `Week_03/01_basic_javaScript/content/24_recursion.html`
- Read: `Week_03/01_basic_javaScript/content/25_short_circuit_evaluation.html`
- Read: `Week_03/01_basic_javaScript/content/26_array_methods.html`

**Interfaces:**
- Consumes: Concepts, syntax, and examples taught in lessons 13–26
- Produces: One Markdown quiz ready to copy into an e-learning platform

- [ ] **Step 1: Confirm the output does not already exist**

Run:

```bash
test ! -e Week_03/01_basic_javaScript/content/quiz_13_to_26.md
```

Expected: exit status `0`. If the file exists, inspect and preserve user-owned content before proceeding.

- [ ] **Step 2: Create the quiz content**

Create `Week_03/01_basic_javaScript/content/quiz_13_to_26.md` with these exact content requirements:

1. Title: `W03.01 — Quiz: JavaScript พื้นฐาน บทที่ 13–26`.
2. Add a short instruction stating that there are 15 questions and one correct answer per question.
3. Use headings `## ข้อ 1` through `## ข้อ 15`.
4. Use CommonMark bullet choices labeled `- A.` through `- D.` for every question.
5. Put `**คำตอบที่ถูกต้อง:**` and `**คำอธิบาย:**` after each set of choices.
6. Use this topic and answer map:

| Question | Topic | Required answer |
| --- | --- | --- |
| 1 | `===` strict equality | B: compares value and type without coercion |
| 2 | Array index | A: `colors[1]` returns `"green"` |
| 3 | Object property | D: `person.name` |
| 4 | Reference copying | C: both variables see `[1, 2, 3]` |
| 5 | Template literal | A: use backticks and `${name}` |
| 6 | `this` in an object method | D: the object used to call the method |
| 7 | Falsy values | B: `0` |
| 8 | Ternary operator | C: `"ผู้ใหญ่"` for age 20 |
| 9 | `break` in `switch` | A: stops fall-through to the next case |
| 10 | Basic `for` loop | D: runs 3 times for `i = 0; i < 3; i++` |
| 11 | `do...while` | C: body runs at least once |
| 12 | Recursion | B: base case stops self-calls |
| 13 | Short-circuit `&&` | D: `0 && "Hello"` returns `0` |
| 14 | `find()` | A: returns the first matching element |
| 15 | `map()` versus `filter()` | B: use `map()` to transform every member and `filter()` to select matching members |

For each question, write three plausible but unambiguous distractors based on beginner misconceptions. Explanations must state the relevant rule, not merely repeat the answer.

Use this complete Markdown content:

````markdown
# W03.01 — Quiz: JavaScript พื้นฐาน บทที่ 13–26

แบบทดสอบนี้มี 15 ข้อ แต่ละข้อมีคำตอบที่ถูกต้องเพียง 1 ตัวเลือก

## ข้อ 1

ข้อใดอธิบายการทำงานของตัวดำเนินการ `===` ได้ถูกต้อง?

- A. เปรียบเทียบเฉพาะค่า โดยแปลงชนิดข้อมูลให้เหมือนกันก่อน
- B. เปรียบเทียบทั้งค่าและชนิดข้อมูล โดยไม่แปลงชนิดข้อมูล
- C. ใช้กำหนดค่าให้กับตัวแปร
- D. ใช้ตรวจสอบว่าค่าทั้งสองไม่เท่ากันเท่านั้น

**คำตอบที่ถูกต้อง:** B. เปรียบเทียบทั้งค่าและชนิดข้อมูล โดยไม่แปลงชนิดข้อมูล

**คำอธิบาย:** `===` คือ Strict Equality ซึ่งจะตรวจทั้งค่าและชนิดข้อมูล ดังนั้น `1 === "1"` จึงเป็น `false`

## ข้อ 2

โค้ดต่อไปนี้จะแสดงผลอะไร?

```js
const colors = ["red", "green", "blue"]
console.log(colors[1])
```

- A. `"green"`
- B. `"red"`
- C. `"blue"`
- D. `undefined`

**คำตอบที่ถูกต้อง:** A. `"green"`

**คำอธิบาย:** Index ของ Array เริ่มจาก `0` ดังนั้นสมาชิกที่ Index `1` คือสมาชิกตัวที่สอง ซึ่งก็คือ `"green"`

## ข้อ 3

ถ้ามี Object ต่อไปนี้ ข้อใดใช้เข้าถึงค่า `"Mali"` ได้ถูกต้อง?

```js
const person = { name: "Mali", age: 20 }
```

- A. `person[name]`
- B. `person->name`
- C. `person(0)`
- D. `person.name`

**คำตอบที่ถูกต้อง:** D. `person.name`

**คำอธิบาย:** Dot Notation ใช้ชื่อ Object ตามด้วยจุดและชื่อ Property เช่น `person.name`

## ข้อ 4

หลังจากโค้ดนี้ทำงาน ค่าใน `a` และ `b` เป็นอย่างไร?

```js
const a = [1, 2]
const b = a
b.push(3)
```

- A. `a` เป็น `[1, 2]` และ `b` เป็น `[1, 2, 3]`
- B. `a` เป็น `[1, 2, 3]` และ `b` เป็น `[1, 2]`
- C. ทั้ง `a` และ `b` เป็น `[1, 2, 3]`
- D. ทั้ง `a` และ `b` เป็น `[1, 2]`

**คำตอบที่ถูกต้อง:** C. ทั้ง `a` และ `b` เป็น `[1, 2, 3]`

**คำอธิบาย:** Array เป็น Reference Type เมื่อกำหนด `b = a` ตัวแปรทั้งสองจะอ้างอิง Array ชุดเดียวกัน การแก้ผ่าน `b` จึงเห็นผลผ่าน `a` ด้วย

## ข้อ 5

ข้อใดใช้ Template Literal แทรกค่าตัวแปร `name` ลงในข้อความได้ถูกต้อง?

- A. `` `สวัสดี ${name}` ``
- B. `'สวัสดี $(name)'`
- C. `"สวัสดี {name}"`
- D. `'สวัสดี %name%'`

**คำตอบที่ถูกต้อง:** A. `` `สวัสดี ${name}` ``

**คำอธิบาย:** Template Literal ใช้ Backtick ครอบข้อความ และใช้ `${}` สำหรับแทรกตัวแปรหรือนิพจน์

## ข้อ 6

เมื่อใช้ `this` ภายใน Method ของ Object โดยทั่วไป `this` จะอ้างถึงอะไร?

- A. Function ที่กำลังทำงานเสมอ
- B. ตัวแปร Global ทุกครั้ง
- C. Array ตัวล่าสุดที่สร้างขึ้น
- D. Object ที่ใช้เรียก Method นั้น

**คำตอบที่ถูกต้อง:** D. Object ที่ใช้เรียก Method นั้น

**คำอธิบาย:** ในการเรียกแบบ `person.greet()` ค่า `this` ภายใน `greet()` จะอ้างถึง `person`

## ข้อ 7

ข้อใดเป็นค่า Falsy ใน JavaScript?

- A. `"0"`
- B. `0`
- C. `[]`
- D. `{}`

**คำตอบที่ถูกต้อง:** B. `0`

**คำอธิบาย:** ตัวเลข `0` เป็น Falsy ส่วน String `"0"`, Array ว่าง และ Object ว่างเป็น Truthy

## ข้อ 8

โค้ดต่อไปนี้กำหนดค่าใดให้กับ `group`?

```js
const age = 20
const group = age >= 18 ? "ผู้ใหญ่" : "เยาวชน"
```

- A. `true`
- B. `false`
- C. `"ผู้ใหญ่"`
- D. `"เยาวชน"`

**คำตอบที่ถูกต้อง:** C. `"ผู้ใหญ่"`

**คำอธิบาย:** เงื่อนไข `age >= 18` เป็นจริง Ternary Operator จึงเลือกค่าหลังเครื่องหมาย `?`

## ข้อ 9

คำสั่ง `break` ภายใน `switch` มีหน้าที่อะไร?

- A. หยุดการทำงานของ `switch` เพื่อไม่ให้ไหลไปยัง Case ถัดไป
- B. เริ่มตรวจสอบ `switch` ใหม่ตั้งแต่ต้น
- C. ข้ามไปทำงานที่ `default` เสมอ
- D. ลบค่าของตัวแปรที่นำมาตรวจสอบ

**คำตอบที่ถูกต้อง:** A. หยุดการทำงานของ `switch` เพื่อไม่ให้ไหลไปยัง Case ถัดไป

**คำอธิบาย:** หากไม่มี `break` โค้ดอาจเกิด Fall-through และทำคำสั่งใน Case ถัดไปต่อแม้ Case นั้นจะไม่ตรงกับค่า

## ข้อ 10

คำสั่ง `console.log(i)` ในโค้ดนี้ทำงานกี่ครั้ง?

```js
for (let i = 0; i < 3; i++) {
  console.log(i)
}
```

- A. 2 ครั้ง
- B. 4 ครั้ง
- C. ไม่ทำงานเลย
- D. 3 ครั้ง

**คำตอบที่ถูกต้อง:** D. 3 ครั้ง

**คำอธิบาย:** ลูปทำงานเมื่อ `i` มีค่า `0`, `1` และ `2` รวมทั้งหมด 3 รอบ แล้วหยุดเมื่อ `i` เป็น `3`

## ข้อ 11

ข้อใดเป็นคุณสมบัติสำคัญของ `do...while`?

- A. ตรวจสอบเงื่อนไขก่อนทำงานทุกครั้ง
- B. ใช้ได้เฉพาะกับ Array
- C. ชุดคำสั่งจะทำงานอย่างน้อย 1 ครั้ง
- D. ไม่จำเป็นต้องมีเงื่อนไขหยุด

**คำตอบที่ถูกต้อง:** C. ชุดคำสั่งจะทำงานอย่างน้อย 1 ครั้ง

**คำอธิบาย:** `do...while` ทำงานในบล็อก `do` ก่อน แล้วจึงตรวจสอบเงื่อนไข จึงทำงานอย่างน้อยหนึ่งรอบเสมอ

## ข้อ 12

Base Case ใน Recursive Function มีหน้าที่อะไร?

- A. ทำให้ Function เรียกตัวเองเร็วขึ้น
- B. กำหนดเงื่อนไขให้ Function หยุดเรียกตัวเอง
- C. สร้าง Array ใหม่ในทุกรอบ
- D. เปลี่ยน Recursive Function ให้เป็น Loop

**คำตอบที่ถูกต้อง:** B. กำหนดเงื่อนไขให้ Function หยุดเรียกตัวเอง

**คำอธิบาย:** Base Case ป้องกันการเรียกตัวเองอย่างไม่สิ้นสุด ซึ่งอาจทำให้เกิดข้อผิดพลาด Maximum call stack size exceeded

## ข้อ 13

นิพจน์ต่อไปนี้ให้ผลลัพธ์เป็นค่าใด?

```js
0 && "Hello"
```

- A. `"Hello"`
- B. `true`
- C. `undefined`
- D. `0`

**คำตอบที่ถูกต้อง:** D. `0`

**คำอธิบาย:** ตัวดำเนินการ `&&` จะหยุดและส่งคืนค่า Falsy ตัวแรกที่พบ ซึ่งในนิพจน์นี้คือ `0`

## ข้อ 14

โค้ดต่อไปนี้ให้ค่าอะไรกับ `result`?

```js
const numbers = [1, 2, 3, 4, 5]
const result = numbers.find((number) => number > 3)
```

- A. `4`
- B. `[4, 5]`
- C. `5`
- D. `true`

**คำตอบที่ถูกต้อง:** A. `4`

**คำอธิบาย:** `find()` ส่งคืนสมาชิกตัวแรกที่ผ่านเงื่อนไข ดังนั้นตัวเลขตัวแรกที่มากกว่า `3` คือ `4`

## ข้อ 15

สถานการณ์ใดเลือกใช้ `map()` และ `filter()` ได้ถูกต้อง?

- A. ใช้ `filter()` คูณราคาทุกชิ้นด้วย 2 และใช้ `map()` เลือกเฉพาะราคาที่มากกว่า 100
- B. ใช้ `map()` แปลงราคาทุกชิ้นเป็นราคารวมภาษี และใช้ `filter()` เลือกเฉพาะสินค้าที่มีในสต็อก
- C. ใช้ทั้ง `map()` และ `filter()` เมื่อต้องการแก้ไข Array เดิมโดยตรงเท่านั้น
- D. ใช้ทั้ง `map()` และ `filter()` เมื่อต้องการส่งคืนสมาชิกตัวแรกที่ตรงเงื่อนไข

**คำตอบที่ถูกต้อง:** B. ใช้ `map()` แปลงราคาทุกชิ้นเป็นราคารวมภาษี และใช้ `filter()` เลือกเฉพาะสินค้าที่มีในสต็อก

**คำอธิบาย:** `map()` เหมาะกับการแปลงสมาชิกทุกตัวและสร้าง Array ใหม่ที่มีความยาวเท่าเดิม ส่วน `filter()` เหมาะกับการคัดเลือกเฉพาะสมาชิกที่ผ่านเงื่อนไข จึงอาจได้ Array ใหม่ที่สั้นลง
````

- [ ] **Step 3: Review language and ambiguity**

Read all 15 questions from top to bottom. Confirm that Thai is concise, every code block is syntactically valid, only one choice is correct, and no answer requires knowledge outside lessons 13–26.

- [ ] **Step 4: Commit the quiz**

```bash
git add Week_03/01_basic_javaScript/content/quiz_13_to_26.md docs/superpowers/plans/2026-07-24-week-03-javascript-quiz.md
git commit -m "docs: refine Thai JavaScript quiz"
```

### Task 2: Verify quiz structure and lesson coverage

**Files:**
- Verify: `Week_03/01_basic_javaScript/content/quiz_13_to_26.md`

**Interfaces:**
- Consumes: The quiz created in Task 1
- Produces: Passing structural, answer-distribution, topic-coverage, and encoding checks

- [ ] **Step 1: Verify question, choice, answer, and explanation counts**

Run:

```bash
quiz=Week_03/01_basic_javaScript/content/quiz_13_to_26.md
test "$(rg -c '^## ข้อ [0-9]+$' "$quiz")" -eq 15
test "$(rg -c '^- [A-D]\. ' "$quiz")" -eq 60
test "$(rg -c '^\*\*คำตอบที่ถูกต้อง:\*\*' "$quiz")" -eq 15
test "$(rg -c '^\*\*คำอธิบาย:\*\*' "$quiz")" -eq 15
```

Expected: all commands exit with status `0`.

- [ ] **Step 2: Verify answer distribution**

Run:

```bash
quiz=Week_03/01_basic_javaScript/content/quiz_13_to_26.md
for answer in A B C D; do
  count=$(rg -c "^\\*\\*คำตอบที่ถูกต้อง:\\*\\* $answer\." "$quiz")
  test "$count" -ge 3
done
```

Expected: all four answer letters occur at least three times.

- [ ] **Step 3: Verify the answer sequence has no repeated first-eight four-letter cycle**

Run:

```bash
quiz=Week_03/01_basic_javaScript/content/quiz_13_to_26.md
ruby -e 'a=File.read(ARGV[0]).scan(/^\*\*คำตอบที่ถูกต้อง:\*\* ([A-D])\./).flatten; abort("repeated first-eight four-letter cycle") if a[0,4] == a[4,4]' "$quiz"
```

Expected: exits with status `0`; the first eight answers are not the same four-letter sequence repeated twice.

- [ ] **Step 4: Verify topic coverage and UTF-8 content**

Run:

```bash
quiz=Week_03/01_basic_javaScript/content/quiz_13_to_26.md
rg -q '===|Strict Equality' "$quiz"
rg -q 'Array|Index' "$quiz"
rg -q 'Object|person\.name' "$quiz"
rg -q 'Reference' "$quiz"
rg -q 'Template Literal|\$\{name\}' "$quiz"
rg -q '`this`|this\.' "$quiz"
rg -q 'Falsy|Truthy' "$quiz"
rg -q 'Ternary|\?' "$quiz"
rg -q '`switch`|switch' "$quiz"
rg -q '`for`|for \(' "$quiz"
rg -q 'do\.\.\.while|do-while' "$quiz"
rg -q 'Recursion|Base Case' "$quiz"
rg -q 'Short-Circuit|&&' "$quiz"
rg -q 'find\(\)' "$quiz"
rg -q 'map\(\)' "$quiz"
rg -q 'filter\(\)' "$quiz"
file "$quiz"
```

Expected: every `rg` command exits with status `0`; `file` identifies UTF-8 Unicode text.

- [ ] **Step 5: Check the diff and final status**

Run:

```bash
git diff --check
git status --short
```

Expected: `git diff --check` produces no output; status shows only intentional quiz-related changes, or is clean if Task 1 was committed.
