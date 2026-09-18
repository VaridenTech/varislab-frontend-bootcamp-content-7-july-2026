# W02.03 — CSS Grid, Page Composition & GitHub Submission

## ชื่อคลาส

**คลาสที่ 6: ประกอบหน้าเว็บให้สมบูรณ์ด้วย CSS Grid และส่งงานขึ้น GitHub**

หรือใน LMS:

**W02.03 — CSS Grid, Page Composition & GitHub Submission**

---

# Context ของคลาสนี้

คลาสก่อนหน้าเราได้สร้างหน้า **Bootcamp Landing Page** ไปแล้ว โดยมี:

* Navbar
* Hero Section
* Feature Cards
* Pricing Section
* Flexbox Layout
* Responsive เบื้องต้น

วันนี้เราจะไม่สร้างหน้าใหม่จากศูนย์

แต่จะเอาหน้าเดิมมาต่อยอดให้เหมือนหน้าเว็บจริงมากขึ้น โดยเพิ่ม:

* Curriculum Grid
* Who This Bootcamp Is For Section
* Final CTA Section
* UI Polish
* CSS Organization
* การส่ง Project ขึ้น GitHub ครั้งแรก

หัวข้อหลักของวันนี้คือ:

**จากหน้าเว็บที่เขียนในเครื่อง → ไปสู่ Project ที่จัดโครงสร้างดีขึ้น และสามารถส่งเป็น GitHub link ได้**

---

# เป้าหมายของคลาส

หลังจบคลาสนี้ นักเรียนควรเข้าใจว่า:

1. CSS Grid เหมาะกับ layout แบบหลาย card / หลาย column
2. Flexbox และ Grid ใช้คนละสถานการณ์
3. หน้าเว็บจริงมักประกอบจากหลาย section ที่มี rhythm เดียวกัน
4. UI ที่ดูดีไม่ได้มาจากสีอย่างเดียว แต่มาจาก spacing, typography และ visual hierarchy
5. CSS ควรถูกจัดเป็นหมวด เพื่อให้อ่านง่ายและดูแลต่อได้
6. Git ใช้เก็บประวัติการเปลี่ยนแปลงของ code
7. GitHub ใช้เก็บ code online และใช้ส่งงานได้
8. นักเรียนสามารถ push project แรกขึ้น GitHub ได้

---

# Positioning ที่ควรพูดกับนักเรียน

วันนี้เราไม่ได้เริ่มจากไฟล์เปล่า เพราะในงานจริง developer มักไม่ได้เริ่มงานจากศูนย์เสมอไป

หลายครั้งเราจะมีหน้าเว็บเดิมอยู่แล้ว แล้วต้อง:

* เพิ่ม section ใหม่
* ปรับ layout ให้ดีขึ้น
* ทำให้ code อ่านง่ายขึ้น
* ทำให้หน้าเว็บดู professional ขึ้น
* จัด CSS ให้ maintain ได้ง่ายขึ้น
* ส่ง code ให้คนอื่นดูผ่าน GitHub

ดังนั้นวันนี้เราจะใช้ project จากคลาสที่แล้วเป็น base แล้วต่อยอดขึ้นมา

---

# โครงสร้างคลาส 3 ชั่วโมง

| เวลา        | เนื้อหา                           | เป้าหมาย                              |
| ----------- | --------------------------------- | ------------------------------------- |
| 09:00–09:15 | Review หน้า Day 2                 | ทบทวนสิ่งที่มีอยู่แล้ว                |
| 09:15–09:35 | Flexbox vs Grid                   | เข้าใจว่าใช้ตัวไหนเมื่อไหร่           |
| 09:35–10:15 | Add Curriculum Grid               | สอน CSS Grid ผ่าน section ใหม่        |
| 10:15–10:25 | Break                             | พัก                                   |
| 10:25–10:50 | Add Who This Is For + CTA Section | ฝึก page composition                  |
| 10:50–11:10 | UI Polish                         | spacing, typography, hover, hierarchy |
| 11:10–11:25 | CSS Organization                  | จัด CSS เป็นหมวด                      |
| 11:25–12:00 | Push Project to GitHub            | ส่งงานขึ้น GitHub ครั้งแรก            |

---

# Opening Script

สวัสดีครับทุกคน วันนี้เราจะต่อจากหน้า Bootcamp Landing Page ที่เราสร้างกันในคลาสที่แล้ว

คลาสที่แล้วเราใช้ Flexbox เพื่อจัด navbar, hero section, feature cards และ pricing cards

วันนี้เราจะไม่เริ่มจากศูนย์นะครับ เพราะในงานจริง developer มักไม่ได้เริ่มจากไฟล์ว่างเสมอไป

หลายครั้งเราจะมีหน้าเว็บเดิมอยู่แล้ว แล้วต้องเพิ่ม section ใหม่ ปรับ layout ให้ดีขึ้น และทำให้ code เป็นระบบมากขึ้น

วันนี้เราจะเรียนเครื่องมือ CSS อีกตัวหนึ่งที่สำคัญมาก คือ **CSS Grid**

ถ้า Flexbox เหมาะกับการจัดของในแนวเดียว เช่น navbar หรือ hero section
Grid จะเหมาะกับ layout ที่เป็นหลาย card หลาย column หรือหลายแถวมากกว่า

เราจะใช้ Grid เพื่อเพิ่ม section ใหม่ชื่อ Curriculum Grid เข้าไปในหน้า Bootcamp Landing Page ของเรา

จากนั้นเราจะ polish หน้าเว็บให้ดูเหมือนงานจริงมากขึ้น จัด CSS ให้ maintain ได้ง่ายขึ้น และท้ายคลาสเราจะเริ่มใช้ GitHub เพื่อส่ง project ของเราขึ้น online repository ครับ

วันนี้เป้าหมายไม่ใช่แค่ทำหน้าเว็บให้เสร็จ แต่ต้องเริ่มทำงานให้เหมือน developer จริงมากขึ้นด้วย

---

# Part 1: Review หน้า Day 2

ให้เปิด project จาก Day 2 ขึ้นมา

ถามนักเรียน:

```text
ตอนนี้หน้าเว็บเรามี section อะไรบ้าง?
ส่วนไหนใช้ Flexbox?
ส่วนไหนเป็น card layout?
ถ้าเราต้องเพิ่ม card 6 ใบหรือ 9 ใบ ใช้ Flexbox ยังสะดวกไหม?
```

นำเข้าสู่คำตอบ:

```text
ถ้ามี card หลายใบ และอยากจัดเป็นตาราง CSS Grid จะเหมาะกว่า
```

---

# Part 2: Flexbox vs Grid

## อธิบายหลัก

ให้จำง่าย ๆ:

```text
Flexbox = จัดของในแนวเดียวเป็นหลัก
Grid = จัดของเป็นตาราง หลายแถว หลายคอลัมน์
```

## Flexbox เหมาะกับ

* Navbar
* Hero section ซ้าย-ขวา
* ปุ่มหลายปุ่มในแถวเดียว
* Pricing cards จำนวนน้อย
* จัด element ให้อยู่กึ่งกลาง

## Grid เหมาะกับ

* Curriculum cards หลายใบ
* Course modules
* Product cards
* Gallery
* Dashboard cards
* Layout ที่มีหลายแถวหลายคอลัมน์

## วิธีพูด

ในคลาสที่แล้ว เราใช้ Flexbox เพราะ layout ส่วนใหญ่เป็นแบบแถวเดียว เช่น navbar ซ้ายขวา หรือ hero ซ้ายขวา

แต่วันนี้เราจะเพิ่ม Curriculum Section ซึ่งมีหลาย card

ถ้าเรามี 6 modules แล้วอยากให้ desktop แสดง 3 columns, tablet 2 columns, mobile 1 column แบบนี้ Grid จะเหมาะกว่า

---

# Part 3: Add Curriculum Grid

## HTML Section ใหม่

ให้เพิ่ม section นี้ต่อจาก Feature Section หรือก่อน Pricing Section

```html
<section class="curriculum-section">
  <div class="section-header">
    <p class="eyebrow">Curriculum</p>

    <h2>สิ่งที่คุณจะได้เรียนใน Bootcamp นี้</h2>

    <p>
      เรียนแบบเป็นขั้นตอน ตั้งแต่พื้นฐานการเขียนโค้ด
      ไปจนถึงการสร้าง Full-Stack Application และการใช้ AI อย่างถูกวิธี
    </p>
  </div>

  <div class="curriculum-grid">
    <article class="curriculum-card">
      <p class="module-number">01</p>
      <h3>Manual Coding Foundation</h3>
      <p>
        เข้าใจ HTML, CSS, JavaScript และ logic พื้นฐานด้วยตัวเองก่อนใช้ AI
      </p>
    </article>

    <article class="curriculum-card">
      <p class="module-number">02</p>
      <h3>Modern Web Layout</h3>
      <p>
        ฝึก Semantic HTML, Box Model, Flexbox, Grid และ Responsive Layout
      </p>
    </article>

    <article class="curriculum-card">
      <p class="module-number">03</p>
      <h3>TypeScript Basics</h3>
      <p>
        เรียนรู้ type, function, interface และการ debug code อย่างเป็นระบบ
      </p>
    </article>

    <article class="curriculum-card">
      <p class="module-number">04</p>
      <h3>React Frontend</h3>
      <p>
        สร้าง UI ด้วย React, component thinking, props, state และ effects
      </p>
    </article>

    <article class="curriculum-card">
      <p class="module-number">05</p>
      <h3>Backend & Database</h3>
      <p>
        สร้าง API ด้วย Node.js, NestJS, PostgreSQL, Prisma และ Neon
      </p>
    </article>

    <article class="curriculum-card">
      <p class="module-number">06</p>
      <h3>Capstone Launch</h3>
      <p>
        รวมทุกอย่างเป็น Full-Stack Project พร้อม deploy และ present ผลงาน
      </p>
    </article>
  </div>
</section>
```

---

## CSS สำหรับ Curriculum Grid

```css
.curriculum-section {
  margin-bottom: 72px;
}

.curriculum-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.curriculum-card {
  padding: 28px;
  border-radius: 24px;
  background: #1e293b;
  border: 1px solid #334155;
}

.curriculum-card:hover {
  border-color: #38bdf8;
}

.module-number {
  margin: 0 0 16px;
  color: #38bdf8;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.08em;
}

.curriculum-card h3 {
  margin: 0 0 12px;
  font-size: 22px;
}

.curriculum-card p {
  margin: 0;
  color: #cbd5e1;
  line-height: 1.7;
}
```

---

# จุดที่ควรสอนใน Grid

## 1. Grid ต้องใส่ที่ Parent

```css
.curriculum-grid {
  display: grid;
}
```

อธิบาย:

เหมือน Flexbox เลยครับ ถ้าเราอยากจัด card หลายใบ เราต้องใส่ `display: grid` ที่ parent ที่ครอบ card ทั้งหมด

ในตัวอย่างนี้ parent คือ `.curriculum-grid`
ส่วนลูกคือ `.curriculum-card` แต่ละใบ

---

## 2. กำหนดจำนวน Column

```css
grid-template-columns: repeat(3, 1fr);
```

อธิบาย:

บรรทัดนี้แปลว่า:

```text
สร้าง 3 columns ที่กว้างเท่า ๆ กัน
```

`repeat(3, 1fr)` เท่ากับ:

```css
grid-template-columns: 1fr 1fr 1fr;
```

แต่เขียนสั้นกว่า

---

## 3. `1fr` คืออะไร

`fr` ย่อมาจาก fraction

ให้คิดว่าเป็น “ส่วนแบ่งของพื้นที่”

```css
grid-template-columns: repeat(3, 1fr);
```

แปลว่าแบ่งพื้นที่เป็น 3 ส่วนเท่า ๆ กัน

---

## 4. `gap`

```css
gap: 24px;
```

ใช้กำหนดระยะห่างระหว่าง card

ทั้ง Flexbox และ Grid ใช้ `gap` ได้เหมือนกัน

---

# Part 4: Add Who This Is For Section

section นี้ช่วยให้หน้า landing page ดูสมบูรณ์ขึ้น และฝึก page composition เพิ่ม

## HTML

```html
<section class="audience-section">
  <div class="section-header">
    <p class="eyebrow">Who This Is For</p>

    <h2>Bootcamp นี้เหมาะกับใคร</h2>

    <p>
      ออกแบบมาสำหรับผู้เรียนที่ต้องการเข้าใจการสร้างเว็บจริง
      และอยากใช้ AI เป็นตัวช่วยอย่างถูกวิธี
    </p>
  </div>

  <div class="audience-grid">
    <article class="audience-card">
      <h3>Career Changers</h3>
      <p>
        คนที่อยากเปลี่ยนสายงานเข้าสู่สาย Software Developer
        และต้องการเริ่มจากพื้นฐานอย่างเป็นระบบ
      </p>
    </article>

    <article class="audience-card">
      <h3>Self-Learners</h3>
      <p>
        คนที่เคยเรียนเองมาก่อน แต่ยังต่อภาพรวมของ Frontend,
        Backend และ Deployment ไม่ครบ
      </p>
    </article>

    <article class="audience-card">
      <h3>Working Professionals</h3>
      <p>
        คนทำงานที่อยากเข้าใจการสร้างระบบจริง และใช้ AI
        เพื่อเพิ่ม productivity ในการทำงาน
      </p>
    </article>
  </div>
</section>
```

## CSS

```css
.audience-section {
  margin-bottom: 72px;
}

.audience-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.audience-card {
  padding: 28px;
  border-radius: 24px;
  background: #0f172a;
  border: 1px solid #334155;
}

.audience-card:hover {
  border-color: #38bdf8;
}

.audience-card h3 {
  margin: 0 0 12px;
  color: #38bdf8;
}

.audience-card p {
  margin: 0;
  color: #cbd5e1;
  line-height: 1.7;
}
```

---

# Part 5: Add Final CTA Section

## HTML

```html
<section class="cta-section">
  <div>
    <p class="eyebrow">Ready to Start?</p>

    <h2>เริ่มสร้างเส้นทางสู่สายงาน Software Developer</h2>

    <p>
      เรียนแบบ Manual First เข้าใจพื้นฐานจริง
      แล้วค่อยใช้ AI เพื่อทำงานเร็วขึ้นอย่างมีคุณภาพ
    </p>
  </div>

  <a class="primary-button" href="#">สมัครเรียน Bootcamp</a>
</section>
```

## CSS

```css
.cta-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  padding: 40px;
  border-radius: 28px;
  background: #1e293b;
  margin-bottom: 72px;
}

.cta-section h2 {
  margin: 0 0 12px;
  font-size: 36px;
  line-height: 1.2;
}

.cta-section p {
  margin: 0;
  color: #cbd5e1;
  line-height: 1.7;
}
```

## จุดที่ควรสอน

CTA section นี้ยังใช้ Flexbox เพราะมีแค่ 2 ฝั่ง:

```text
ฝั่งซ้าย = ข้อความ
ฝั่งขวา = ปุ่ม
```

ดังนั้นใช้ Flexbox เหมาะกว่า Grid

นี่เป็นจุดที่ดีมากในการย้ำว่า:

```text
ไม่ใช่ทุก layout ต้องใช้ Grid
เลือกเครื่องมือให้เหมาะกับงาน
```

---

# Part 6: UI Polish

หลังจากเพิ่ม section แล้ว ให้สอนปรับให้เว็บดู professional ขึ้น

## 1. Section Rhythm

ย้ำว่าแต่ละ section ควรมีระยะห่างที่สม่ำเสมอ

```css
.features-section,
.curriculum-section,
.audience-section,
.pricing-section {
  margin-bottom: 72px;
}
```

พูด:

ถ้าระยะห่างแต่ละ section ไม่เท่ากัน หน้าเว็บจะดูไม่เป็นระบบ แม้ code จะถูกก็ตาม

---

## 2. Section Header Reuse

ถ้ามีหลาย section ที่ใช้ header เหมือนกัน ให้ใช้ class เดียวกัน

```css
.section-header {
  max-width: 680px;
  margin-bottom: 32px;
}

.section-header h2 {
  margin: 0 0 16px;
  font-size: 40px;
}

.section-header p {
  margin: 0;
  color: #cbd5e1;
  line-height: 1.7;
}
```

พูด:

การ reuse class ช่วยให้ style consistent และลด code ซ้ำ

---

## 3. Card Hover

```css
.curriculum-card:hover,
.audience-card:hover {
  border-color: #38bdf8;
}
```

พูด:

Hover เป็นรายละเอียดเล็ก ๆ ที่ช่วยให้ผู้ใช้รู้สึกว่า card มี interaction แม้ยังไม่ได้ใช้ JavaScript

---

## 4. Visual Hierarchy

สอนให้ดูว่าอะไรควรเด่น:

```text
h1 = เด่นที่สุด
h2 = หัวข้อ section
h3 = หัวข้อ card
p = คำอธิบาย
eyebrow = label เล็ก ๆ
button = action
```

พูด:

หน้าเว็บที่ดีต้องทำให้ผู้ใช้รู้ว่าอะไรสำคัญก่อนหลัง ไม่ใช่ทุกอย่างขนาดเท่ากันหมด

---

# Part 7: Responsive เฉพาะ Grid

เพราะ Day 2 สอน responsive ไปแล้ว วันนี้ให้พูดแค่ “ต่อยอดกับ Grid”

```css
@media (max-width: 900px) {
  .curriculum-grid,
  .audience-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-section {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 600px) {
  .curriculum-grid,
  .audience-grid {
    grid-template-columns: 1fr;
  }
}
```

พูด:

เราเคยเห็น responsive กับ Flexbox แล้ว วันนี้เราใช้หลักเดียวกันกับ Grid

บน desktop ให้มี 3 columns
บน tablet ให้เหลือ 2 columns
บน mobile ให้เหลือ 1 column

---

# Part 8: CSS Organization

สอนจัดไฟล์ CSS ให้เป็นหมวด

```css
/* Reset */

/* Base */

/* Layout */

/* Header */

/* Hero */

/* Features */

/* Curriculum */

/* Audience */

/* Pricing */

/* CTA */

/* Footer */

/* Responsive */
```

พูด:

ช่วงแรกเราอาจเขียน CSS ต่อ ๆ กันไปก่อนเพื่อให้เห็นผลเร็ว

แต่พอหน้าเว็บเริ่มใหญ่ขึ้น เราควรจัด CSS เป็นหมวด ไม่อย่างนั้นจะหา code ยากมาก

Developer ที่ดีไม่ได้แค่เขียนให้รันได้ แต่ต้องเขียนให้กลับมาอ่านแล้วเข้าใจด้วย

---

# Part 9: Push Project to GitHub

## เป้าหมายของช่วงนี้

ช่วงนี้ไม่ใช่การสอน Git ทั้งหมด

เป้าหมายเดียวคือ:

```text
เอา project landing page ของเราขึ้น GitHub ให้สำเร็จ
```

## Script เปิดช่วง GitHub

ก่อนจบวันนี้ เราจะทำอีกเรื่องหนึ่งที่สำคัญมากสำหรับ developer จริงครับ

ตอนนี้ทุกคนมี landing page ที่เริ่มเป็น project แล้ว ถ้าเก็บไว้แค่ในเครื่องตัวเอง งานนี้จะยังแชร์ให้คนอื่นดูยาก และถ้าเครื่องมีปัญหางานก็อาจหายได้

ดังนั้นเราจะเริ่มใช้ Git และ GitHub แบบง่ายที่สุดก่อน

วันนี้ยังไม่ต้องเข้าใจ Git ทุกอย่างนะครับ ขอให้เข้าใจแค่ 3 อย่าง:

```text
Git ใช้เก็บประวัติการเปลี่ยนแปลงของ code
GitHub ใช้เก็บ code online
Repository link ใช้ส่งงานหรือใช้เป็น portfolio ได้
```

วันนี้เป้าหมายเดียวคือเอา project landing page ของเราขึ้น GitHub ให้สำเร็จ

---

# Git และ GitHub คืออะไร

## Git

Git คือเครื่องมือสำหรับเก็บประวัติการเปลี่ยนแปลงของ code

เช่น วันนี้เราเขียนหน้าเว็บเสร็จแล้ว เราสามารถบันทึก version นี้ไว้ได้

ถ้าวันหลังแก้ code แล้วพัง อย่างน้อยเรายังมีประวัติว่า version ก่อนหน้าหน้าตาเป็นอย่างไร

## GitHub

GitHub คือเว็บไซต์สำหรับเก็บ repository online

ถ้า Git คือเครื่องมือเก็บ version ในเครื่อง
GitHub คือที่เก็บ code บน online ที่สามารถแชร์ให้คนอื่นดูได้

## Repository

Repository หรือ repo คือ folder project ที่ถูกเก็บด้วย Git

ในงานนี้ repo ของเราก็คือ project Bootcamp Landing Page

---

# คำสั่งที่ใช้วันนี้

## 1. เช็กสถานะ Git

```bash
git status
```

ใช้ดูว่า Git เห็นไฟล์อะไรเปลี่ยนแปลงบ้าง

---

## 2. เริ่มใช้ Git ใน project นี้

```bash
git init
```

ใช้ครั้งแรกครั้งเดียวใน folder project

---

## 3. เลือกไฟล์ทั้งหมดเข้า staging

```bash
git add .
```

แปลว่าเลือกไฟล์ทั้งหมดใน project เตรียมบันทึกเป็น version ใหม่

---

## 4. Commit งาน

```bash
git commit -m "Complete bootcamp landing page"
```

Commit คือการบันทึก snapshot ของงาน ณ ตอนนั้น

ข้อความหลัง `-m` คือ commit message

---

## 5. ตั้ง branch เป็น main

```bash
git branch -M main
```

ตั้งชื่อ branch หลักเป็น `main`

---

## 6. เชื่อมกับ GitHub repo

```bash
git remote add origin <your-repo-url>
```

ตัวอย่าง:

```bash
git remote add origin https://github.com/username/bootcamp-landing-page.git
```

---

## 7. Push code ขึ้น GitHub

```bash
git push -u origin main
```

ส่ง code จากเครื่องเราขึ้น GitHub

---

# Full Command Flow

หลังสร้าง repo บน GitHub แล้ว ให้ใช้ชุดคำสั่งนี้:

```bash
git init
git add .
git commit -m "Complete bootcamp landing page"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

ตัวอย่าง:

```bash
git init
git add .
git commit -m "Complete bootcamp landing page"
git branch -M main
git remote add origin https://github.com/username/bootcamp-landing-page.git
git push -u origin main
```

---

# ถ้าเคย init แล้ว

ถ้า project มี Git อยู่แล้ว ไม่ต้อง `git init` ซ้ำ

ใช้แค่:

```bash
git status
git add .
git commit -m "Update bootcamp landing page"
git push
```

---

# README.md แบบง่าย

ให้สร้างไฟล์:

```text
README.md
```

แล้วใส่:

```md
# Bootcamp Landing Page

This project is a landing page built with HTML and CSS.

## What I practiced

- Semantic HTML
- CSS Box Model
- Flexbox
- CSS Grid
- Responsive Layout
- Git and GitHub basics
```

อธิบาย:

README คือไฟล์ที่บอกคนอื่นว่า project นี้คืออะไร

เวลาเปิด GitHub repo คนอื่นจะเห็น README ก่อน ดังนั้นควรเขียนให้สั้นและเข้าใจง่าย

---

# Mini Challenge

ให้นักเรียนทำเอง 15–20 นาที

## Challenge 1

เพิ่ม curriculum card อีก 2 ใบ

## Challenge 2

เปลี่ยน `.curriculum-grid` จาก 3 columns เป็น 4 columns แล้วดูผล

```css
grid-template-columns: repeat(4, 1fr);
```

## Challenge 3

เพิ่ม hover effect ให้ curriculum card

## Challenge 4

เพิ่ม section ใหม่ชื่อ:

```text
Student Outcomes
```

มี card 3 ใบ เช่น:

* Portfolio Project
* GitHub Repository
* Interview Story

## Challenge 5

จัด CSS เป็นหมวดให้ชัดเจน

## Challenge 6

Push งานขึ้น GitHub

## Bonus

เพิ่ม responsive ให้ grid:

```text
Desktop = 3 columns
Tablet = 2 columns
Mobile = 1 column
```

---

# Homework

## Assignment Title

**W02.03 — Assignment: Complete Bootcamp Landing Page + GitHub Submission**

## Project Brief

ให้นักเรียนต่อยอดหน้า Bootcamp Landing Page จากคลาสก่อนหน้าให้เป็นหน้าเว็บที่สมบูรณ์ขึ้น โดยเพิ่ม section ใหม่ ใช้ CSS Grid และส่งงานผ่าน GitHub repository

---

## Requirements

1. ใช้ project จาก W02.02 เป็น base
2. เพิ่ม Curriculum Section
3. Curriculum Section ต้องใช้ CSS Grid
4. มี card อย่างน้อย 6 ใบ
5. เพิ่มอีก 1 section เช่น Who This Is For, Outcomes, Testimonials หรือ FAQ
6. ใช้ Grid อย่างน้อย 1 จุด
7. ใช้ Flexbox อย่างน้อย 1 จุด
8. มี UI polish เช่น hover, spacing, typography หรือ consistent card style
9. จัด CSS เป็นหมวด
10. ปรับ responsive สำหรับ grid อย่างน้อย 1 breakpoint
11. สร้าง GitHub repository สำหรับ project นี้
12. Push code ขึ้น GitHub
13. มีไฟล์ README.md อธิบาย project แบบสั้น ๆ

---

## Submission Requirements

ให้ส่ง:

```text
1. GitHub repository link
2. Screenshot หน้าเว็บ
3. Reflection answers
```

ใน GitHub repo ต้องมีอย่างน้อย:

```text
index.html
style.css
README.md
```

---

## Reflection

ตอบคำถามสั้น ๆ:

1. Flexbox กับ Grid ต่างกันอย่างไร?
2. ทำไม Curriculum Section เหมาะกับ Grid?
3. `grid-template-columns` ใช้ทำอะไร?
4. UI polish ที่คุณปรับมีอะไรบ้าง?
5. การจัด CSS เป็นหมวดช่วยอย่างไร?
6. Git กับ GitHub ต่างกันอย่างไร?
7. Commit คืออะไร?
8. อยากให้ผู้สอน review จุดไหน?

---

# Quiz

## Question 1

CSS Grid เหมาะกับ layout แบบไหน?

A. Layout หลายแถวหลายคอลัมน์
B. การอ่านค่า input
C. การสร้าง event listener
D. การเขียน function

**Correct Answer:** A

---

## Question 2

`display: grid;` ควรใส่ที่ไหน?

A. Parent container ที่ครอบ card หลายใบ
B. ทุก h1
C. เฉพาะปุ่ม
D. ในไฟล์ JavaScript

**Correct Answer:** A

---

## Question 3

`grid-template-columns: repeat(3, 1fr);` หมายถึงอะไร?

A. สร้าง 3 columns ที่กว้างเท่า ๆ กัน
B. สร้าง 3 buttons
C. เพิ่ม font size 3 เท่า
D. ซ่อน element 3 ตัว

**Correct Answer:** A

---

## Question 4

`gap` ใน Grid ใช้ทำอะไร?

A. กำหนดระยะห่างระหว่าง grid items
B. เปลี่ยนสีพื้นหลัง
C. ทำให้ปุ่มกดได้
D. เชื่อมต่อ backend

**Correct Answer:** A

---

## Question 5

Flexbox เหมาะกับตัวอย่างไหนมากที่สุด?

A. Navbar หรือ CTA ที่มี layout ซ้าย-ขวา
B. Card 12 ใบหลายแถว
C. Database table
D. Form validation

**Correct Answer:** A

---

## Question 6

Grid เหมาะกับตัวอย่างไหนมากที่สุด?

A. Curriculum cards หลายใบ
B. Logo กับ nav links อย่างเดียว
C. ปุ่ม submit ปุ่มเดียว
D. ข้อความ paragraph เดียว

**Correct Answer:** A

---

## Question 7

UI Polish หมายถึงอะไรในคลาสนี้?

A. การปรับ spacing, typography, hover และ visual hierarchy ให้หน้าเว็บดูดีขึ้น
B. การเปลี่ยน HTML เป็น Database
C. การลบ CSS ทั้งหมด
D. การใช้ JavaScript เท่านั้น

**Correct Answer:** A

---

## Question 8

การจัด CSS เป็นหมวดช่วยอะไร?

A. ทำให้ code อ่านง่ายและดูแลต่อได้ง่ายขึ้น
B. ทำให้ browser ไม่ต้องโหลด HTML
C. ทำให้ไม่ต้องใช้ class
D. ทำให้ form submit เอง

**Correct Answer:** A

---

## Question 9

Git ใช้ทำอะไร?

A. เก็บประวัติการเปลี่ยนแปลงของ code
B. เปลี่ยนสีหน้าเว็บ
C. เปิด browser
D. สร้าง HTML tag

**Correct Answer:** A

---

## Question 10

GitHub ใช้ทำอะไรในคลาสนี้?

A. เก็บ code online และใช้ส่งงาน
B. เขียน CSS อัตโนมัติ
C. คำนวณราคา
D. ตรวจ spelling ภาษาไทย

**Correct Answer:** A

---

## Question 11

`git add .` ใช้ทำอะไร?

A. เลือกไฟล์ทั้งหมดเข้า staging
B. ลบไฟล์ทั้งหมด
C. เปิด GitHub website
D. เปลี่ยน branch เป็น main

**Correct Answer:** A

---

## Question 12

`git commit -m "message"` ใช้ทำอะไร?

A. บันทึก snapshot ของงานพร้อมข้อความอธิบาย
B. ส่ง code ขึ้น GitHub ทันทีเสมอ
C. ลบ repository
D. สร้างไฟล์ CSS

**Correct Answer:** A

---

## Question 13

`git push` ใช้ทำอะไร?

A. ส่ง code จากเครื่องขึ้น remote repository เช่น GitHub
B. เปลี่ยนสี button
C. สร้าง media query
D. เปิด DevTools

**Correct Answer:** A

---

# LMS Content หลังคลาส

## Module

**Week 2 — The Modern DOM & Pure CSS**

## Lessons

1. **W02.13 — Recording: CSS Grid, Page Composition & GitHub Submission**
   Type: Video

2. **W02.14 — Notes: Flexbox vs CSS Grid**
   Type: Text

3. **W02.15 — Notes: CSS Grid Basics**
   Type: Text

4. **W02.16 — Notes: Git และ GitHub เบื้องต้น**
   Type: Text

5. **W02.17 — Code Example: Complete Bootcamp Landing Page**
   Type: Text

6. **W02.18 — Quiz: CSS Grid, Page Composition และ GitHub**
   Type: Quiz

7. **W02.19 — Assignment: Complete Bootcamp Landing Page + GitHub Submission**
   Type: Project

---

# Closing Script

วันนี้เราได้ต่อยอดหน้า Bootcamp Landing Page จากคลาสที่แล้วให้สมบูรณ์ขึ้น

เราไม่ได้สร้างหน้าใหม่จากศูนย์ แต่ฝึกวิธีทำงานที่ใกล้กับงานจริงมากขึ้น คือการเอาหน้าเว็บเดิมมาเพิ่ม section ใหม่ ปรับ layout และ polish ให้ดีขึ้น

สิ่งสำคัญของวันนี้คือการเข้าใจว่า Flexbox และ Grid ไม่ได้แทนกัน แต่ใช้คนละสถานการณ์

Flexbox เหมาะกับ layout แนวเดียว เช่น navbar, hero หรือ CTA
Grid เหมาะกับ card หลายใบ หลายแถว หลายคอลัมน์ เช่น curriculum cards หรือ audience cards

นอกจากนี้เรายังเริ่มเห็นว่าเว็บที่ดูดีไม่ได้มาจาก layout อย่างเดียว แต่มาจาก spacing, typography, visual hierarchy และการจัด CSS ให้เป็นระบบ

ท้ายคลาสเราเริ่มใช้ Git และ GitHub เพื่อเก็บ code online และส่งงานผ่าน repository link

จากนี้ไป GitHub จะเริ่มเป็นส่วนหนึ่งของ workflow ของเรา เพราะ developer จริงไม่ได้ส่งงานเป็น screenshot อย่างเดียว แต่ต้องส่ง code ที่คนอื่นเปิดดู ตรวจ และต่อยอดได้

สัปดาห์หน้าเราจะเปลี่ยนจาก static landing page ไปเป็น mini web app มากขึ้น โดยเริ่มใช้ JavaScript และ TypeScript เพื่อจัดการข้อมูล คำนวณ และทำ interaction ที่ซับซ้อนขึ้น

## Example Link
[Week 2 Class 03](https://frontend-bootcamp-content-7-july-2026.onrender.com/)