# Basic TypeScript Quiz Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** สร้างแบบทดสอบปรนัยภาษาไทย 15 ข้อที่วัดผลบทเรียน Basic TypeScript บทที่ 1–7 และพร้อมนำไปอัปโหลดเข้าระบบ

**Architecture:** สร้างไฟล์ Markdown หนึ่งไฟล์ตามโครงสร้างของ quiz JavaScript ตัวอย่าง แต่ละข้อมีคำถาม ตัวเลือก A–D เฉลย และคำอธิบาย จากนั้นตรวจโครงสร้างเชิงกลและทบทวนความถูกต้องเทียบกับบทเรียนต้นทาง

**Tech Stack:** Markdown, TypeScript code examples, shell validation with `rg` and `awk`

## Global Constraints

- สร้างไฟล์ `Week_03/02_basic_typescript/content/quiz_01_to_07.md`
- มีคำถาม 15 ข้อและคำตอบถูกเพียงข้อเดียวต่อข้อ
- แต่ละข้อมีตัวเลือก A–D พร้อมบรรทัด `**คำตอบที่ถูกต้อง:**` และ `**คำอธิบาย:**`
- ใช้ภาษาไทยและรูปแบบเดียวกับ `Week_03/01_basic_javaScript/content/quiz_13_to_26.md`
- คำถามต้องอ้างอิงเฉพาะบทเรียน `Week_03/02_basic_typescript/content/01_what_is_typescript.html` ถึง `07_wrap_up_and_next_steps.html`
- กระจายคำตอบที่ถูกต้องระหว่าง A–D และไม่ใช้ตัวลวงที่กำกวม

---

### Task 1: สร้างและตรวจสอบชุดคำถาม TypeScript

**Files:**
- Create: `Week_03/02_basic_typescript/content/quiz_01_to_07.md`
- Reference: `Week_03/01_basic_javaScript/content/quiz_13_to_26.md`
- Reference: `Week_03/02_basic_typescript/content/01_what_is_typescript.html`
- Reference: `Week_03/02_basic_typescript/content/02_javascript_pitfalls_and_the_case_for_types.html`
- Reference: `Week_03/02_basic_typescript/content/03_type_annotations_and_syntax.html`
- Reference: `Week_03/02_basic_typescript/content/04_compiling_typescript_and_tsconfig.html`
- Reference: `Week_03/02_basic_typescript/content/05_professional_workflow_and_tsconfig_bases.html`
- Reference: `Week_03/02_basic_typescript/content/06_typescript_ecosystem.html`
- Reference: `Week_03/02_basic_typescript/content/07_wrap_up_and_next_steps.html`

**Interfaces:**
- Consumes: โครงสร้าง Markdown จาก quiz ตัวอย่างและเนื้อหาในบทเรียนทั้งเจ็ดบท
- Produces: ไฟล์ Markdown ที่มีหัวข้อ `## ข้อ 1` ถึง `## ข้อ 15` พร้อมตัวเลือก เฉลย และคำอธิบายครบถ้วน

- [ ] **Step 1: ร่างคำถามตาม blueprint ที่อนุมัติ**

สร้างคำถามตามลำดับต่อไปนี้เพื่อให้เนื้อหาครบและไม่ซ้ำกัน:

1. ความหมายของ TypeScript ในฐานะ Superset ของ JavaScript
2. ปัญหา Dynamic Typing จากการ Reassign ค่าเป็นคนละ Type
3. ความหมายของ `tsc --checkJs --noEmit`
4. Type Annotation ของตัวแปรและผลเมื่อ Reassign ผิด Type
5. Literal Type ที่จำกัดสถานะเป็นค่าที่กำหนด
6. Function Parameter และ Return Type
7. Object Type และ Optional Property (`?`)
8. Union Type ร่วมกับ Type Narrowing ด้วย `typeof`
9. ผลของการ Compile: Type Annotation ถูกลบจาก JavaScript
10. การใช้ `tsconfig.json` และผลของการรัน `tsc` โดยไม่ส่งชื่อไฟล์
11. การขยาย `interface` ด้วย `extends`
12. ความหมายของ `Partial<T>` หรือ `Readonly<T>` ในสถานการณ์ใช้งาน
13. Workflow การย้ายโปรเจกต์ทีละไฟล์และใช้ `tsc --noEmit` ก่อน Test
14. การติดตั้ง Type Declaration ด้วย `@types/` และการใช้ `import type`
15. ข้อจำกัดของ TypeScript ตอน Runtime และบทบาทของ Zod

กำหนด Answer Key เป็น `B, C, A, D, B, A, C, D, A, C, B, D, C, A, B` เพื่อกระจายคำตอบ A–D อย่างสมดุล โดยตัวเลือกที่ตรงกับคำตอบต้องถูกต้องตามบทเรียน

- [ ] **Step 2: เขียนไฟล์ Markdown ตามรูปแบบตัวอย่าง**

ใช้หัวไฟล์ดังนี้:

```markdown
# W03.02 — Quiz: TypeScript พื้นฐาน บทที่ 1–7

แบบทดสอบนี้มี 15 ข้อ แต่ละข้อมีคำตอบที่ถูกต้องเพียง 1 ตัวเลือก
```

แต่ละข้อใช้โครงสร้างนี้ โดยแทน `N`, เนื้อหาคำถาม, ตัวเลือก, เฉลย และคำอธิบายด้วยรายละเอียดของข้อนั้น:

```markdown
## ข้อ N

คำถาม

- A. ตัวเลือก
- B. ตัวเลือก
- C. ตัวเลือก
- D. ตัวเลือก

**คำตอบที่ถูกต้อง:** B. ข้อความของตัวเลือก B

**คำอธิบาย:** เหตุผลที่คำตอบนี้ถูกต้องตามเนื้อหาในบทเรียน
```

ตัวอย่างโค้ด TypeScript ให้ใช้ fenced code block ชนิด `ts` และคำสั่ง Terminal ให้ใช้ `bash` หรือ inline code ตามความยาว

- [ ] **Step 3: ตรวจจำนวนส่วนประกอบของ quiz**

Run:

```bash
rg -c '^## ข้อ [0-9]+$' Week_03/02_basic_typescript/content/quiz_01_to_07.md
rg -c '^\- A\.' Week_03/02_basic_typescript/content/quiz_01_to_07.md
rg -c '^\- B\.' Week_03/02_basic_typescript/content/quiz_01_to_07.md
rg -c '^\- C\.' Week_03/02_basic_typescript/content/quiz_01_to_07.md
rg -c '^\- D\.' Week_03/02_basic_typescript/content/quiz_01_to_07.md
rg -c '^\*\*คำตอบที่ถูกต้อง:\*\*' Week_03/02_basic_typescript/content/quiz_01_to_07.md
rg -c '^\*\*คำอธิบาย:\*\*' Week_03/02_basic_typescript/content/quiz_01_to_07.md
```

Expected: ทุกคำสั่งแสดง `15`

- [ ] **Step 4: ตรวจ Answer Key และลำดับข้อ**

Run:

```bash
awk '/^## ข้อ / {print $3}' Week_03/02_basic_typescript/content/quiz_01_to_07.md
rg '^\*\*คำตอบที่ถูกต้อง:\*\*' Week_03/02_basic_typescript/content/quiz_01_to_07.md
```

Expected: ลำดับข้อเป็น `1` ถึง `15` โดยไม่ขาด และตัวอักษรคำตอบเรียงเป็น `B, C, A, D, B, A, C, D, A, C, B, D, C, A, B`

- [ ] **Step 5: ทบทวนความถูกต้องเทียบกับบทเรียน**

อ่านคำถามแต่ละข้อพร้อมเฉลยและยืนยันว่า:

- ข้อ 1–3 ตรงกับบทที่ 1–2
- ข้อ 4–8 ตรงกับบทที่ 3
- ข้อ 9–12 ตรงกับบทที่ 4
- ข้อ 13 ตรงกับบทที่ 5
- ข้อ 14–15 ตรงกับบทที่ 6 และบทสรุปบทที่ 7
- ตัวเลือกที่ไม่ได้เป็นคำตอบผิดอย่างชัดเจน และไม่มีคำถามใดต้องอาศัยความรู้นอกบทเรียน
- คำอธิบายระบุเหตุผล ไม่เพียงกล่าวซ้ำคำตอบ

- [ ] **Step 6: ตรวจ Markdown และการเปลี่ยนแปลงสุดท้าย**

Run:

```bash
git diff --check -- Week_03/02_basic_typescript/content/quiz_01_to_07.md
git diff --no-index -- /dev/null Week_03/02_basic_typescript/content/quiz_01_to_07.md
```

Expected: `git diff --check` ไม่มี Output ส่วนคำสั่ง `git diff --no-index` แสดงไฟล์ quiz ใหม่ที่มี 15 ข้อครบถ้วนและจบด้วย Exit Code `1` เพราะเป็นการเปรียบเทียบไฟล์ที่แตกต่างกัน

- [ ] **Step 7: Commit ไฟล์ quiz**

```bash
git add Week_03/02_basic_typescript/content/quiz_01_to_07.md
git commit -m "docs: add Thai basic TypeScript quiz"
```
