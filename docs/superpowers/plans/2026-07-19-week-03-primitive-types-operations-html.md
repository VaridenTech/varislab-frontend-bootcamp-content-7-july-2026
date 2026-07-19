# W03.02 Primitive Types and Operations Thai HTML Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a faithful Thai HTML translation of Web Dev Simplified's “Primitive Types and Operations” lesson.

**Architecture:** One standalone semantic HTML document preserves the source lesson's order, explanations, lists, and JavaScript examples. It contains no styling, scripting, exercises, or added instruction; only the source-license attribution is appended.

**Tech Stack:** HTML5, UTF-8, Node.js verification, `xmllint`

## Global Constraints

- Create exactly `Week_03/01_basic_javaScript/content/02_primitive_types_and_operations.html`.
- Use Thai prose while preserving JavaScript syntax, keywords, operators, literal values, type names, example names, and results.
- Preserve the original content and ordering without adding instructional material.
- Include source, adaptation, CC BY-NC 4.0, and Apache 2.0 attribution.

---

### Task 1: Create and Verify the Faithful Thai HTML Translation

**Files:**
- Create: `Week_03/01_basic_javaScript/content/02_primitive_types_and_operations.html`

**Interfaces:**
- Consumes: the approved design spec and the original lesson
- Produces: one standalone Thai HTML lesson document

- [ ] **Step 1: Verify the requested file does not already exist**

Run:

```bash
test ! -e Week_03/01_basic_javaScript/content/02_primitive_types_and_operations.html
```

Expected: exit status 0. If it exists, inspect it and preserve user-owned work.

- [ ] **Step 2: Run the failing existence check**

Run:

```bash
node -e 'const fs=require("fs");const p="Week_03/01_basic_javaScript/content/02_primitive_types_and_operations.html";if(!fs.existsSync(p))throw new Error("lesson missing")'
```

Expected: failure containing `lesson missing`.

- [ ] **Step 3: Create the complete document with `apply_patch`**

Create exactly this content:

```html
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="ชนิดข้อมูลพื้นฐานและการดำเนินการใน JavaScript" />
  <title>ชนิดข้อมูลพื้นฐานและการดำเนินการ — เริ่มต้นใช้งาน JavaScript</title>
</head>
<body>
  <main>
    <article>
      <h1>ชนิดข้อมูลพื้นฐานและการดำเนินการ</h1>
      <p>JavaScript มี <strong>ชนิดข้อมูลพื้นฐาน (primitive types)</strong> อยู่หลายชนิด ซึ่งเป็นองค์ประกอบพื้นฐานของข้อมูลทั้งหมดในโปรแกรมของคุณ</p>

      <h2>ชนิดข้อมูลพื้นฐานสำคัญ 3 ชนิด</h2>

      <h3>Number</h3>
      <p>Number ใช้แทนค่าตัวเลขทุกชนิด ทั้งจำนวนเต็ม ทศนิยม จำนวนลบ และค่าตัวเลขพิเศษ</p>
      <pre><code>-10
25
19.99
0
Infinity</code></pre>

      <h3>String</h3>
      <p>String ใช้แทนข้อมูลข้อความ ซึ่งเป็นลำดับของอักขระใด ๆ ที่อยู่ภายในเครื่องหมายคำพูด</p>
      <pre><code>'Sarah'
"Hello, world!"
''
""</code></pre>
      <ul>
        <li>สร้างได้ด้วยเครื่องหมายคำพูดเดี่ยวหรือเครื่องหมายคำพูดคู่</li>
        <li>เป็นค่าว่างได้ (มีเพียงเครื่องหมายคำพูดโดยไม่มีสิ่งใดอยู่ข้างใน)</li>
      </ul>

      <h3>Boolean</h3>
      <p>Boolean ใช้แทนค่าจริง/เท็จ</p>
      <pre><code>true
false</code></pre>

      <h2>การดำเนินการพื้นฐานกับชนิดข้อมูลพื้นฐาน</h2>
      <p>การดำเนินการคือสิ่งที่คุณสามารถทำกับค่าชนิดข้อมูลพื้นฐานได้ โดยข้อมูลแต่ละชนิดรองรับการดำเนินการที่แตกต่างกัน</p>

      <h3>การดำเนินการกับ Number</h3>
      <ul>
        <li>
          <p>การคำนวณทางคณิตศาสตร์</p>
          <pre><code>// คณิตศาสตร์พื้นฐาน
10 + 3 // 13
10 - 3 // 7
10 * 3 // 30
10 / 3 // 3.333...

// ใช้ลำดับการคำนวณตามปกติ
2 + 3 * 4 // 14 (ไม่ใช่ 20)
(2 + 3) * 4 // 20</code></pre>
        </li>
        <li>
          <p>การเปรียบเทียบ</p>
          <pre><code>85 == 92 // false
85 != 92 // true

85 &lt; 92 // true
85 &gt; 92 // false
85 &lt;= 85 // true
92 &gt;= 90 // true</code></pre>
        </li>
      </ul>

      <h3>การดำเนินการกับ String</h3>
      <ul>
        <li>
          <p>การต่อข้อความ (การนำ String มาต่อกัน)</p>
          <pre><code>"Kyle" + " " + "Cook" // "Kyle Cook"</code></pre>
        </li>
        <li>
          <p>การเปรียบเทียบ String</p>
          <pre><code>"apple" == "apple" // true
"apple" != "apple" // false

// เปรียบเทียบตามลำดับตัวอักษร
"apple" &lt; "banana" // true ("apple" มาก่อน "banana")</code></pre>
        </li>
      </ul>

      <h3>การดำเนินการกับ Boolean</h3>
      <ul>
        <li>
          <p>การดำเนินการทางตรรกะ</p>
          <pre><code>true &amp;&amp; false // false (AND)
true || false // true (OR)
!true // false (NOT)</code></pre>
        </li>
        <li>
          <p>การเปรียบเทียบ Boolean</p>
          <pre><code>true == true // true
true == false // false
true != false // true</code></pre>
        </li>
      </ul>

      <h2>การตรวจสอบชนิดข้อมูล</h2>
      <p>คุณสามารถตรวจสอบชนิดของค่าใด ๆ ได้ด้วยตัวดำเนินการ <code>typeof</code>:</p>
      <pre><code>typeof 42 // "number"
typeof "Hello" // "string"
typeof true // "boolean"

typeof 1 == typeof 2 // true</code></pre>
    </article>
  </main>

  <footer>
    <p>คำแปลภาษาไทยจาก <a href="https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/variable-basics/primitive-types-and-operations">“Primitive Types and Operations” โดย Web Dev Simplified</a> เนื้อหาเผยแพร่ภายใต้ <a href="https://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a> และตัวอย่างโค้ดเผยแพร่ภายใต้ <a href="https://www.apache.org/licenses/LICENSE-2.0">Apache License 2.0</a></p>
  </footer>
</body>
</html>
```

- [ ] **Step 4: Run source-coverage and no-extras checks**

Run:

```bash
node -e 'const fs=require("fs");const s=fs.readFileSync("Week_03/01_basic_javaScript/content/02_primitive_types_and_operations.html","utf8");for(const x of ["lang=\"th\"","charset=\"utf-8\"","-10","19.99","Infinity","Sarah","Hello, world!","true","false","10 + 3","10 - 3","10 * 3","10 / 3","2 + 3 * 4","(2 + 3) * 4","85 &lt; 92","92 &gt;= 90","Kyle","Cook","apple","banana","&amp;&amp;","||","!true","typeof 42","typeof true","typeof 1 == typeof 2","CC BY-NC 4.0","Apache License 2.0"])if(!s.includes(x))throw new Error("missing "+x);for(const x of ["<style","<script","<nav","แบบฝึกหัด","เป้าหมายการเรียนรู้"])if(s.includes(x))throw new Error("unexpected extra "+x);console.log("faithful translation checks passed")'
```

Expected: `faithful translation checks passed`.

- [ ] **Step 5: Validate HTML and repository whitespace**

Run:

```bash
xmllint --noout Week_03/01_basic_javaScript/content/02_primitive_types_and_operations.html
git diff --check
```

Expected: no HTML parser errors and no whitespace errors.

- [ ] **Step 6: Commit the lesson**

```bash
git add Week_03/01_basic_javaScript/content/02_primitive_types_and_operations.html docs/superpowers/plans/2026-07-19-week-03-primitive-types-operations-html.md
git commit -m "feat: add Thai primitive types lesson"
```
