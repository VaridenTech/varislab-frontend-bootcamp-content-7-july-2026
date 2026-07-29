# npm CDN Comparison Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add an immediately visible code comparison showing how four CDN script tags map to centrally declared npm dependencies.

**Architecture:** Extend the opening of the existing static HTML lesson with two escaped code blocks and short Thai transitions. Keep later explanations authoritative by mentioning indirect dependencies and the lockfile only as a preview.

**Tech Stack:** Static HTML, Prism-compatible `language-html` and `language-json` code classes, Ruby for content assertions

## Global Constraints

- Modify only `Week_04/02_complete_intro_to_react/content/04_npm.html` during implementation.
- Place both examples directly after the opening paragraph and before the existing paragraph beginning “นี่คือปัญหาที่ npm”.
- Use React 18.3.1, ReactDOM 18.3.1, Day.js 1.11.13, and Lodash 4.17.21 consistently in both examples.
- Keep the comparison illustrative and compact rather than turning it into installation instructions.
- Preserve all surrounding lesson content.

---

### Task 1: Add the CDN-to-npm dependency comparison

**Files:**
- Modify: `Week_04/02_complete_intro_to_react/content/04_npm.html:19`

**Interfaces:**
- Consumes: The existing opening paragraph ending in “โค้ดจะทำงานคนละแบบ” and the following paragraph beginning “นี่คือปัญหาที่ npm”.
- Produces: Two rendered code examples between those paragraphs, with `language-html` and `language-json` classes.

- [ ] **Step 1: Run the pre-change assertion and verify the comparison is absent**

Run:

```bash
ruby -e 'h=File.read("Week_04/02_complete_intro_to_react/content/04_npm.html"); abort("comparison already present") if h.include?("lodash@4.17.21") || h.include?(%q{"lodash": "4.17.21"}); puts "comparison absent: OK"'
```

Expected: `comparison absent: OK`.

- [ ] **Step 2: Insert the comparison immediately after the opening paragraph**

Insert this exact HTML before `<p>นี่คือปัญหาที่ <strong>npm</strong>`:

```html
        <p>ถ้าใช้ CDN โปรเจกต์ที่มีไลบรารีเพียงสี่ตัวก็ต้องดูแล URL เวอร์ชัน และลำดับการโหลดเองทั้งหมด</p>

        <pre><code class="language-html">&lt;script src="https://unpkg.com/react@18.3.1/umd/react.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/dayjs@1.11.13/dayjs.min.js"&gt;&lt;/script&gt;
&lt;script src="https://unpkg.com/lodash@4.17.21/lodash.min.js"&gt;&lt;/script&gt;
&lt;script src="./src/App.js"&gt;&lt;/script&gt;</code></pre>

        <p>เมื่อใช้ npm รายชื่อและเวอร์ชันของไลบรารีเดียวกันจะถูกรวมไว้ใน <code>package.json</code> จุดเดียว</p>

        <pre><code class="language-json">{
  "dependencies": {
    "dayjs": "1.11.13",
    "lodash": "4.17.21",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  }
}</code></pre>

        <p>npm จะดาวน์โหลดแพ็กเกจเหล่านี้ รวมถึงแพ็กเกจที่มันพึ่งพาต่อให้อัตโนมัติ และใช้ <code>package-lock.json</code> ช่วยให้ทุกคนในทีมติดตั้งได้เวอร์ชันตรงกัน</p>
```

- [ ] **Step 3: Verify placement, syntax markers, versions, and unchanged transition**

Run:

```bash
ruby -e 'f="Week_04/02_complete_intro_to_react/content/04_npm.html"; h=File.read(f); opening=h.index("สองบทที่ผ่านมา"); cdn=h.index(%q{<pre><code class="language-html">}, opening); npm=h.index(%q{<pre><code class="language-json">}, cdn); transition=h.index("นี่คือปัญหาที่ <strong>npm</strong>", npm); abort("wrong placement") unless opening < cdn && cdn < npm && npm < transition; %w[react@18.3.1 react-dom@18.3.1 dayjs@1.11.13 lodash@4.17.21].each { |v| abort("missing CDN version: #{v}") unless h.include?(v) }; {%q{"react": "18.3.1"}=>1,%q{"react-dom": "18.3.1"}=>1,%q{"dayjs": "1.11.13"}=>1,%q{"lodash": "4.17.21"}=>1}.each_key { |v| abort("missing npm version: #{v}") unless h.include?(v) }; puts "npm comparison: OK"'
git diff --check
```

Expected: `npm comparison: OK`, followed by no `git diff --check` errors.

- [ ] **Step 4: Review the focused diff**

Run:

```bash
git diff -- Week_04/02_complete_intro_to_react/content/04_npm.html
```

Expected: Only the three new explanatory paragraphs and two code blocks appear between the existing opening and transition paragraphs.

- [ ] **Step 5: Commit the lesson change**

```bash
git add Week_04/02_complete_intro_to_react/content/04_npm.html
git commit -m "content: compare CDN scripts with npm dependencies"
```
