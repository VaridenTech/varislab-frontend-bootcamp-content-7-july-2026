# แบบออกแบบบทเรียนภาษาไทย: Complete Intro to React v9

## เป้าหมาย

สร้างบทเรียนภาษาไทยจากเว็บไซต์ [Complete Intro to React v9](https://react-v9.holt.courses/) โดย Brian Holt ให้ครบทั้งหลักสูตร เพื่อให้ผู้เรียนใน Frontend Bootcamp อ่านตาม ลองเขียนโค้ด และย้อนทบทวนแต่ละบทได้จากไฟล์ HTML ภายใน Repository นี้

บทเรียนต้องเป็นคำแปลภาษาไทยที่ใกล้เคียงต้นฉบับ รักษาความหมาย ลำดับการอธิบาย ตัวอย่าง การเชื่อมโยงระหว่างบท และ Code Progression เดิม โดยไม่เพิ่ม Quiz หรือเปลี่ยนโปรเจกต์ตัวอย่างของต้นฉบับ

## ตำแหน่งและโครงสร้างไฟล์

สร้างเนื้อหาใหม่ภายใต้:

```text
Week_04/
└── 02_complete_intro_to_react/
    └── content/
        ├── index.html
        ├── lesson.css
        ├── 01_intro.html
        ├── 02_my_setup.html
        ├── 03_react_without_a_build_step.html
        ├── 04_components.html
        ├── 05_npm.html
        ├── 06_code_formatting.html
        ├── 07_eslint.html
        ├── 08_git.html
        ├── 09_vite.html
        ├── 10_jsx.html
        ├── 11_hooks.html
        ├── 12_effects.html
        ├── 13_dev_tools.html
        ├── 14_custom_hooks.html
        ├── 15_handling_user_inputs.html
        ├── 16_context.html
        ├── 17_tanstack_router.html
        ├── 18_tanstack_query.html
        ├── 19_portals.html
        ├── 20_error_boundaries.html
        ├── 21_uncontrolled_forms.html
        ├── 22_vitest.html
        ├── 23_basic_react_tests.html
        ├── 24_testing_user_interaction.html
        ├── 25_testing_custom_hooks.html
        ├── 26_snapshot_testing.html
        ├── 27_v8_coverage.html
        ├── 28_vitest_ui.html
        ├── 29_browser_tests.html
        ├── 30_react_19.html
        ├── 31_form_actions.html
        ├── 32_use_and_suspense.html
        ├── 33_react_compiler.html
        ├── 34_deploying_the_app.html
        └── 35_congrats.html
```

ห้ามแก้ไข `Week_04/01_basic_git/content.md` ซึ่งเป็นบทเรียนที่มีอยู่ก่อนแล้ว

## โครงสร้างหลักสูตร

`index.html` ต้องแบ่งบทเรียน 35 บทตาม Chapter เดิมทั้ง 9 Chapter และเรียงตามต้นฉบับดังนี้:

1. **Welcome** — Intro, My Setup
2. **No Frills React** — React without a Build Step, Components
3. **Tools** — npm, Code Formatting, ESLint, Git, Vite
4. **Core React Concepts** — JSX, Hooks, Effects, Dev Tools, Custom Hooks, Handling User Inputs, Context
5. **Ecosystem** — TanStack Router, TanStack Query
6. **Advanced React** — Portals, Error Boundaries, Uncontrolled Forms
7. **Testing** — Vitest, Basic React Tests, Testing User Interaction, Testing Custom Hooks, Snapshot Testing, v8, Vitest UI, Browser Tests
8. **What's Next** — React 19, Form Actions, use and Suspense, React Compiler, Deploying the App
9. **Wrap Up** — Congrats

ชื่อ Chapter และชื่อบทเรียนในสารบัญต้องแสดงชื่อภาษาไทยควบคู่กับชื่อภาษาอังกฤษ เพื่อให้ผู้เรียนจับคู่กับต้นฉบับและค้นหา Technical Term ได้

## หลักการแปล

- แปล Prose ทุกส่วนเป็นภาษาไทยที่เป็นธรรมชาติ แต่รักษาเจตนา น้ำเสียง และรายละเอียดของต้นฉบับให้ใกล้เคียงที่สุด
- รักษาลำดับ Paragraph, List, Note, Link, Code Block และขั้นตอนลงมือทำตามต้นฉบับ
- คง Code, Command, File Name, Package Name, API, Identifier, URL และ UI Label ที่ผู้เรียนต้องมองหาไว้ตามต้นฉบับ
- ใช้คำศัพท์เทคนิคภาษาไทยที่สม่ำเสมอ และใส่คำอังกฤษเมื่อกล่าวถึงครั้งแรกหรือเมื่อคำอังกฤษช่วยให้ผู้เรียนค้นคว้าต่อได้ เช่น `สถานะ (state)` และ `เอฟเฟกต์ (effect)`
- ไม่เปลี่ยนชื่อตัวอย่าง Padre Gino's หรือ Pixel Perfect Pizzas และไม่ดัดแปลงโปรเจกต์ของหลักสูตรเป็นโปรเจกต์ใหม่
- ไม่เพิ่ม Quiz, Homework, เนื้อหาเสริม หรือคำอธิบายใหม่ที่ไม่มีในต้นฉบับ
- ถ้าต้นฉบับมีคำสั่งผิด Typo หรือข้อมูลผูกกับ Version ที่อาจทำให้ผู้เรียนทำตามไม่ได้ ให้รักษาเนื้อหาต้นฉบับและเพิ่ม “หมายเหตุผู้แปล” แบบสั้นเฉพาะจุดที่จำเป็น

## รูปแบบหน้าเรียน

ทุกหน้า Lesson ต้องมี:

- `lang="th"`, UTF-8 และ Responsive Viewport
- Meta Description ภาษาไทยและ `<title>` ที่ไม่ซ้ำกัน
- ชื่อ Chapter, หมายเลขบท, ชื่อภาษาไทย และชื่อภาษาอังกฤษต้นฉบับ
- เนื้อหาแปลที่รักษาโครงสร้างของต้นฉบับ
- Code Block ที่เก็บ Code เดิมโดยไม่แปล Identifier หรือ Command
- Link ภายนอกที่ชี้ไปยังปลายทางเดิม
- Navigation ไปบทก่อนหน้า, หน้าสารบัญ และบทถัดไปตามลำดับ 1–35
- Attribution และ License Notice ใน Footer

บทแรกไม่มี Link ไปบทก่อนหน้า และบทสุดท้ายไม่มี Link ไปบทถัดไป

## รูปแบบสารบัญ

`index.html` ต้องแสดง:

- ชื่อหลักสูตรภาษาไทยและชื่อ Complete Intro to React v9
- คำอธิบายสั้นว่าบทเรียนชุดนี้เป็นคำแปลภาษาไทย
- Chapter ทั้ง 9 Chapter ตามลำดับเดิม
- Link ไปยัง Lesson ครบทั้ง 35 บท
- ชื่อภาษาไทยและชื่อภาษาอังกฤษของแต่ละ Lesson
- Link กลับไปยังเว็บไซต์ต้นฉบับ
- Attribution และ License Notice

## งานออกแบบและ CSS

ใช้ `lesson.css` ร่วมกันทุกหน้า โดยยึดแนวทางการอ่านจาก `Week_03/02_basic_typescript/content`:

- ความกว้างบรรทัดและ Typography ที่อ่านภาษาไทยได้สบาย
- Heading Hierarchy ชัดเจน
- Code Block, Inline Code, Table, List, Blockquote และ Note ที่แยกจากเนื้อหาปกติได้ง่าย
- Chapter Label และ Lesson Metadata ที่เห็นได้ชัดแต่ไม่รบกวนการอ่าน
- Navigation ที่ใช้งานได้ทั้ง Desktop และ Mobile
- Focus Style สำหรับ Link เพื่อรองรับ Keyboard Navigation
- Responsive Layout ที่ไม่เกิด Horizontal Overflow จากเนื้อหาทั่วไป; Code Block เลื่อนแนวนอนได้เมื่อจำเป็น

ไม่คัดลอกงานออกแบบของเว็บไซต์ต้นฉบับ และไม่เพิ่ม JavaScript ที่ไม่จำเป็นต่อการอ่านบทเรียน

## Attribution และ License

ทุก Lesson และหน้าสารบัญต้องระบุอย่างชัดเจนว่า:

- เนื้อหาต้นฉบับคือ Complete Intro to React v9 โดย Brian Holt พร้อม Link ไปยัง `https://react-v9.holt.courses/`
- คำแปลภาษาไทยจัดทำเพื่อการเรียนรู้ในหลักสูตรนี้
- เนื้อหา Prose ต้นฉบับใช้สัญญาอนุญาต CC BY-NC 4.0
- Code Samples และ Exercises ใช้สัญญาอนุญาต Apache License 2.0

## การตรวจสอบ

- ตรวจว่ามี 9 Chapter และ 35 Lesson ตรงกับสารบัญต้นฉบับ ณ วันที่ 28 กรกฎาคม 2026
- ตรวจลำดับ Lesson ทั้งใน `index.html` และ Navigation ทุกหน้า
- ตรวจว่า Internal Link ทุก Link ชี้ไปยังไฟล์ที่มีอยู่จริง
- ตรวจว่าแต่ละหน้ามี `lang="th"`, Meta Description, Title, Attribution และ License ครบ
- ตรวจ Code Block เทียบกับต้นฉบับ เพื่อไม่ให้ Identifier, Command หรือ Version เปลี่ยนเพราะการแปล
- ตรวจว่าไม่มี Prose ภาษาอังกฤษตกค้างโดยไม่ตั้งใจ ยกเว้นชื่อภาษาอังกฤษ Code, Command, Product Name, Technical Term, URL และ UI Label
- ตรวจ HTML Structure และการแสดงผลของหน้าตัวแทนจากต้นหลักสูตร กลางหลักสูตร และท้ายหลักสูตร
- ตรวจ Responsive Layout ที่ขนาด Mobile และ Desktop
- ตรวจ `git diff --check` เพื่อหา Whitespace Error

## เกณฑ์สำเร็จ

ผู้เรียนสามารถเปิด `Week_04/02_complete_intro_to_react/content/index.html` เลือกอ่านบทใดก็ได้ และเรียนตาม Complete Intro to React v9 ได้ครบทั้งหลักสูตรเป็นภาษาไทย โดย Code และลำดับการสร้างแอปยังสอดคล้องกับต้นฉบับ และสามารถเดินหน้าหรือย้อนกลับระหว่างบทได้โดยไม่พบ Link เสีย
