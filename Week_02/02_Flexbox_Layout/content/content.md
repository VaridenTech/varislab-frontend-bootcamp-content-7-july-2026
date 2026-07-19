# W02.02 — Flexbox Layout และการจัดหน้าเว็บให้เป็นระบบ

## ชื่อคลาส

**คลาสที่ 5: จัด Layout หน้าเว็บด้วย Flexbox**

หรือใน LMS:

**W02.02 — Flexbox Layout, Cards และ Responsive เบื้องต้น**

---

# เป้าหมายของคลาส

หลังจบคลาสนี้ นักเรียนควรเข้าใจว่า:

1. `display: flex` ใช้จัด layout ของ element ลูกได้อย่างไร
2. Flexbox เหมาะกับ layout แบบแนวนอน / แนวตั้ง / card row / navbar
3. เข้าใจคำว่า parent container และ child item
4. ใช้ `justify-content` เพื่อจัดตำแหน่งแนวนอน
5. ใช้ `align-items` เพื่อจัดตำแหน่งแนวตั้ง
6. ใช้ `gap` เพื่อสร้างระยะห่างระหว่าง element
7. ใช้ `flex: 1` เพื่อแบ่งพื้นที่ให้ card เท่า ๆ กัน
8. เริ่มเข้าใจ responsive layout เบื้องต้นด้วย `flex-wrap`

---

# Positioning ของคลาสนี้

คลาสก่อนหน้าเราเรียนว่า:

* HTML ควรมีความหมายด้วย Semantic HTML
* ทุก element บนหน้าเว็บคือกล่อง
* `padding` คือระยะห่างด้านใน
* `margin` คือระยะห่างด้านนอก
* `max-width` และ `margin: 0 auto` ใช้จัด container ให้อยู่กลางหน้า

คลาสนี้จะต่อยอดจากคำว่า “กล่อง” ไปสู่คำถามว่า:

**ถ้ามีกล่องหลายใบ เราจะจัดวางมันยังไงให้เป็น layout ที่ดูเป็นมืออาชีพ?**

คำตอบหลักของวันนี้คือ **Flexbox**

---

# Project วันนี้

## Project: Bootcamp Pricing & Feature Section

ให้นักเรียนสร้าง section สำหรับหน้า landing page ที่มี:

1. Navbar
2. Hero layout แบบซ้าย-ขวา
3. Feature cards 3 ใบ
4. Pricing cards 2–3 ใบ
5. Layout ที่ใช้ Flexbox หลายจุด

ตัวอย่างสิ่งที่จะได้:

```text
[Navbar]
Varis Lab        Overview   Curriculum   Pricing

[Hero Section]
ซ้าย: ข้อความแนะนำคอร์ส
ขวา: กล่องสรุป course stats

[Feature Section]
Card 1    Card 2    Card 3

[Pricing Section]
Plan 1    Plan 2
```

---

# โครงสร้างคลาส 2 ชั่วโมง

| เวลา        | เนื้อหา                    | เป้าหมาย                          |
| ----------- | -------------------------- | --------------------------------- |
| 20:00–20:10 | Recap Box Model            | ทบทวน padding, margin, container  |
| 20:10–20:25 | Flexbox Mental Model       | parent / children                 |
| 20:25–20:45 | Flexbox Properties         | justify-content, align-items, gap |
| 20:45–21:15 | Live Coding Hero Layout    | layout ซ้าย-ขวา                   |
| 21:15–21:35 | Feature Cards ด้วย Flexbox | card row + flex: 1                |
| 21:35–21:50 | Responsive เบื้องต้น       | flex-wrap                         |
| 21:50–22:00 | Challenge + Homework       | ให้นักเรียนปรับเอง                |

---

# Opening Script

สวัสดีครับทุกคน วันนี้เราจะต่อจากคลาสที่แล้วที่เราเรียนเรื่อง Semantic HTML และ CSS Box Model

คลาสที่แล้วเราเข้าใจแล้วว่า element ทุกตัวบนหน้าเว็บถูกมองเป็นกล่อง และเราใช้ `padding`, `margin`, `border`, `width` เพื่อควบคุมพื้นที่ของกล่องแต่ละใบ

วันนี้เราจะตอบคำถามถัดไปครับ:

ถ้าเรามีกล่องหลายใบ เราจะจัดวางมันยังไง?

เช่น:

* อยากให้เมนูอยู่ซ้ายขวาใน navbar
* อยากให้ hero section มีข้อความด้านซ้าย และกล่องข้อมูลด้านขวา
* อยากให้ feature card 3 ใบเรียงในแถวเดียวกัน
* อยากให้ card แต่ละใบมีระยะห่างเท่ากัน
* อยากให้ layout เริ่มปรับตัวเมื่อหน้าจอเล็กลง

เครื่องมือหลักที่เราจะใช้วันนี้คือ **Flexbox**

Flexbox เป็นหนึ่งในเครื่องมือ CSS ที่ใช้บ่อยมากในการจัด layout หน้าเว็บจริง โดยเฉพาะ navbar, card layout, section layout และ component layout ต่าง ๆ

วันนี้ยังไม่ต้องจำทุก property ของ Flexbox ให้ได้ทั้งหมด แต่ขอให้เข้าใจภาพหลักว่า:

**Flexbox คือการบอก parent ว่าให้จัดลูก ๆ ข้างในอย่างไร**

---

# Part 1: Flexbox Mental Model

## Concept หลัก

ให้เริ่มจากประโยคนี้:

```text
Flexbox ต้องใส่ที่ parent container
แล้วมันจะจัด layout ของ children ข้างใน
```

ตัวอย่าง:

```html
<div class="card-row">
  <article class="card">Card 1</article>
  <article class="card">Card 2</article>
  <article class="card">Card 3</article>
</div>
```

ถ้าอยากให้ card 3 ใบเรียงในแถวเดียวกัน เราไม่ได้ใส่ `display: flex` ที่ card แต่ละใบก่อน

เราต้องใส่ที่ parent:

```css
.card-row {
  display: flex;
}
```

## วิธีพูดในคลาส

ให้มองว่า `.card-row` คือ “กล่องแม่”
ส่วน `.card` แต่ละใบคือ “กล่องลูก”

เมื่อเราใส่:

```css
display: flex;
```

ที่กล่องแม่ เรากำลังบอกว่า:

> ช่วยจัดลูก ๆ ข้างในกล่องนี้ให้เป็น layout แบบ flex ให้หน่อย

---

# Part 2: Flexbox Properties ที่ควรรู้วันนี้

## 1. `display: flex`

```css
.container {
  display: flex;
}
```

ใช้เปิดโหมด Flexbox ให้ container

---

## 2. `justify-content`

ใช้จัดตำแหน่งในแนวหลัก โดยปกติคือแนวนอน

```css
.navbar {
  display: flex;
  justify-content: space-between;
}
```

ตัวอย่างค่าที่ควรรู้:

```css
justify-content: flex-start;
justify-content: center;
justify-content: space-between;
```

อธิบายแบบง่าย:

```text
flex-start = ชิดซ้าย
center = อยู่กลาง
space-between = ดันตัวแรกไปซ้าย ตัวสุดท้ายไปขวา
```

---

## 3. `align-items`

ใช้จัดตำแหน่งในแนวตั้ง

```css
.navbar {
  display: flex;
  align-items: center;
}
```

อธิบาย:

```text
align-items: center ใช้จัดลูกใน container ให้อยู่กึ่งกลางแนวตั้ง
```

ใช้บ่อยมากใน navbar เพราะอยากให้ logo กับ link อยู่กึ่งกลางแนวเดียวกัน

---

## 4. `gap`

ใช้กำหนดระยะห่างระหว่างลูกแต่ละตัว

```css
.nav-links {
  display: flex;
  gap: 20px;
}
```

อธิบาย:

```text
gap ดีกว่าการใส่ margin ซ้ายขวาให้ item ทีละตัว เพราะควบคุมระยะห่างได้ง่ายและอ่านง่ายกว่า
```

---

## 5. `flex: 1`

ใช้ให้ลูกแต่ละตัวแบ่งพื้นที่เท่า ๆ กัน

```css
.feature-card {
  flex: 1;
}
```

อธิบาย:

```text
ถ้ามี card 3 ใบ และทุกใบมี flex: 1
พื้นที่ในแถวจะถูกแบ่งให้ card แต่ละใบใกล้เคียงกัน
```

---

## 6. `flex-wrap`

ใช้ให้ item ขึ้นบรรทัดใหม่เมื่อพื้นที่ไม่พอ

```css
.features-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
```

อธิบาย:

```text
ถ้าหน้าจอแคบลง แล้ว card เรียงในแถวเดียวไม่พอ
flex-wrap จะช่วยให้ card ขึ้นบรรทัดใหม่ได้
```

---

# Live Coding Project

## Folder

```text
week-02-flexbox-layout
```

## Files

```text
index.html
style.css
```

---

# HTML

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flexbox Bootcamp Landing Page</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <header class="site-header">
      <nav class="navbar">
        <p class="logo">Varis Lab</p>

        <div class="nav-links">
          <a href="#">Overview</a>
          <a href="#">Curriculum</a>
          <a href="#">Pricing</a>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero-section">
        <div class="hero-content">
          <p class="eyebrow">Full-Stack Bootcamp — AI Edition</p>

          <h1>เรียนสร้างเว็บแอปจริง พร้อมพื้นฐานที่ใช้ทำงานได้</h1>

          <p class="hero-description">
            เริ่มจาก Manual Coding Foundation ก่อนต่อยอดไปสู่ React,
            Backend, Database และ AI Coding Workflow อย่างเป็นระบบ
          </p>

          <a class="primary-button" href="#">ดูรายละเอียดคอร์ส</a>
        </div>

        <aside class="hero-card">
          <p class="card-label">Bootcamp Format</p>

          <h2>12 Weeks</h2>

          <ul>
            <li>84 Live Hours</li>
            <li>5 Portfolio Projects</li>
            <li>Weekly Code Review</li>
            <li>Capstone Demo Day</li>
          </ul>
        </aside>
      </section>

      <section class="features-section">
        <article class="feature-card">
          <h2>Manual First</h2>
          <p>
            ฝึกเขียนโค้ดเองก่อน เพื่อเข้าใจ logic และ debugging อย่างแท้จริง
          </p>
        </article>

        <article class="feature-card">
          <h2>Full-Stack Skills</h2>
          <p>
            เรียนทั้ง Frontend, Backend, Database และ Deployment
          </p>
        </article>

        <article class="feature-card">
          <h2>AI Workflow</h2>
          <p>
            ใช้ AI เป็นผู้ช่วยหลังจากเข้าใจพื้นฐาน ไม่ใช่ใช้แทนความเข้าใจ
          </p>
        </article>
      </section>

      <section class="pricing-section">
        <div class="section-header">
          <p class="eyebrow">Pricing</p>
          <h2>เลือกรูปแบบการเรียนที่เหมาะกับคุณ</h2>
        </div>

        <div class="pricing-cards">
          <article class="pricing-card">
            <h3>One-Time Payment</h3>
            <p class="price">39,900 THB</p>
            <p>จ่ายครั้งเดียว เข้าเรียนครบทั้ง Bootcamp</p>
          </article>

          <article class="pricing-card highlight">
            <h3>Installment</h3>
            <p class="price">3,990 THB / month</p>
            <p>ผ่อน 0% 10 เดือน ตามเงื่อนไขธนาคารที่ร่วมรายการ</p>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>© 2026 Varis Lab. All rights reserved.</p>
    </footer>
  </body>
</html>
```

---

# CSS

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: white;
}

.site-header {
  border-bottom: 1px solid #1e293b;
}

.navbar {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  margin: 0;
  color: #38bdf8;
  font-size: 20px;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: #cbd5e1;
  text-decoration: none;
}

.nav-links a:hover {
  color: #38bdf8;
}

main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 32px;
}

.hero-section {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 72px;
}

.hero-content {
  flex: 1.4;
}

.hero-card {
  flex: 1;
  padding: 28px;
  border-radius: 24px;
  background: #1e293b;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

.eyebrow,
.card-label {
  margin: 0 0 16px;
  color: #38bdf8;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

h1 {
  margin: 0 0 24px;
  font-size: 52px;
  line-height: 1.1;
}

.hero-description {
  margin: 0 0 32px;
  color: #cbd5e1;
  font-size: 20px;
  line-height: 1.7;
}

.primary-button {
  display: inline-block;
  padding: 14px 24px;
  border-radius: 999px;
  background: #38bdf8;
  color: #0f172a;
  font-weight: bold;
  text-decoration: none;
}

.primary-button:hover {
  background: #7dd3fc;
}

.hero-card h2 {
  margin: 0 0 16px;
  font-size: 36px;
}

.hero-card ul {
  margin: 0;
  padding-left: 20px;
  color: #cbd5e1;
  line-height: 1.8;
}

.features-section {
  display: flex;
  gap: 20px;
  margin-bottom: 72px;
}

.feature-card {
  flex: 1;
  padding: 24px;
  border-radius: 20px;
  background: #1e293b;
}

.feature-card h2 {
  margin: 0 0 12px;
  color: #38bdf8;
}

.feature-card p {
  margin: 0;
  color: #cbd5e1;
  line-height: 1.7;
}

.section-header {
  max-width: 640px;
  margin-bottom: 28px;
}

.section-header h2 {
  margin: 0;
  font-size: 36px;
}

.pricing-cards {
  display: flex;
  gap: 20px;
}

.pricing-card {
  flex: 1;
  padding: 28px;
  border-radius: 24px;
  background: #1e293b;
  border: 1px solid #334155;
}

.pricing-card.highlight {
  border-color: #38bdf8;
}

.pricing-card h3 {
  margin: 0 0 16px;
}

.price {
  margin: 0 0 16px;
  color: #38bdf8;
  font-size: 28px;
  font-weight: bold;
}

.pricing-card p {
  color: #cbd5e1;
  line-height: 1.7;
}

.site-footer {
  border-top: 1px solid #1e293b;
  padding: 24px 32px;
  text-align: center;
  color: #94a3b8;
}
```

---

# จุดที่ควรสอนระหว่าง Live Coding

## 1. Flex ที่ Navbar

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

อธิบาย:

```text
display: flex เปิด Flexbox
justify-content: space-between ดัน logo ไปซ้าย และ nav links ไปขวา
align-items: center ทำให้ทั้งสองฝั่งอยู่กึ่งกลางแนวตั้ง
```

---

## 2. Flex ที่ Nav Links

```css
.nav-links {
  display: flex;
  gap: 20px;
}
```

อธิบาย:

```text
nav-links เองก็เป็น flex container ได้
เพราะข้างในมี link หลายตัวที่อยากให้เรียงเป็นแถว
gap ใช้สร้างระยะห่างระหว่าง link
```

---

## 3. Flex ที่ Hero Section

```css
.hero-section {
  display: flex;
  align-items: center;
  gap: 40px;
}
```

อธิบาย:

```text
hero-section มีลูก 2 ฝั่ง:
1. hero-content
2. hero-card

display: flex ทำให้สองฝั่งนี้เรียงซ้าย-ขวา
gap ทำให้มีระยะห่างระหว่างสองฝั่ง
align-items: center ทำให้สองฝั่งอยู่กึ่งกลางแนวตั้ง
```

---

## 4. Flex Ratio

```css
.hero-content {
  flex: 1.4;
}

.hero-card {
  flex: 1;
}
```

อธิบาย:

```text
hero-content กินพื้นที่มากกว่า hero-card
เพราะเราให้ flex: 1.4
ส่วน hero-card ได้ flex: 1

แปลว่าฝั่งข้อความใหญ่กว่าฝั่ง card เล็กน้อย
```

---

## 5. Feature Cards

```css
.features-section {
  display: flex;
  gap: 20px;
}

.feature-card {
  flex: 1;
}
```

อธิบาย:

```text
features-section เป็น parent
feature-card เป็น children

display: flex ทำให้ card เรียงเป็นแถว
gap กำหนดระยะห่างระหว่าง card
flex: 1 ทำให้ card แต่ละใบแบ่งพื้นที่เท่า ๆ กัน
```

---

# เพิ่ม Responsive เบื้องต้น

ท้ายคลาสค่อยเพิ่มส่วนนี้:

```css
@media (max-width: 768px) {
  .navbar,
  .hero-section,
  .features-section,
  .pricing-cards {
    flex-direction: column;
    align-items: stretch;
  }

  h1 {
    font-size: 40px;
  }

  .nav-links {
    flex-wrap: wrap;
  }
}
```

## อธิบายแบบง่าย

```text
@media ใช้กำหนด CSS สำหรับหน้าจอบางขนาด

ในตัวอย่างนี้:
ถ้าหน้าจอกว้างไม่เกิน 768px
layout ที่เคยเรียงซ้าย-ขวา จะเปลี่ยนเป็นเรียงบน-ล่าง

นี่คือพื้นฐานของ responsive design
```

ยังไม่ต้องลงลึก responsive มาก แค่ให้เห็นภาพก่อนว่า layout เปลี่ยนตามขนาดจอได้

---

# Mini Challenge

ให้นักเรียนทำเอง 10–15 นาที

## Challenge 1

เพิ่ม feature card ใบที่ 4

## Challenge 2

เปลี่ยน `gap` ใน `.features-section` จาก `20px` เป็น `32px` แล้วดูผลลัพธ์

## Challenge 3

เปลี่ยน `justify-content` ใน navbar เป็นค่าอื่น เช่น:

```css
justify-content: center;
```

แล้วดูว่า layout เปลี่ยนอย่างไร

## Challenge 4

เพิ่ม pricing card ใบที่ 3

## Bonus

เพิ่ม section ใหม่ชื่อ:

```text
Who This Bootcamp Is For
```

แล้วใช้ Flexbox จัด card 3 ใบ เช่น:

* Career Changers
* Self-Learners
* Working Professionals

---

# Error Demo ที่ควรทำ

## Error 1: ใส่ `display: flex` ผิดที่

ผิด:

```css
.feature-card {
  display: flex;
}
```

แต่ลืมใส่ที่ parent:

```css
.features-section {
  display: flex;
}
```

อธิบาย:

```text
ถ้าอยากจัด card หลายใบ ต้องใส่ display: flex ที่ parent ที่ครอบ card เหล่านั้น
```

---

## Error 2: ลืม `gap`

ให้ลบ `gap` ออก แล้วถาม:

```text
เกิดอะไรขึ้นกับ card?
```

อธิบาย:

```text
card ยังเรียงเป็นแถวอยู่ แต่ชิดกันเกินไป
gap ช่วยทำให้ layout หายใจได้
```

---

## Error 3: ใช้ `align-items` แล้วไม่เห็นผล

อธิบาย:

```text
บางครั้ง align-items อาจดูเหมือนไม่มีผล เพราะลูกทุกตัวสูงใกล้กันอยู่แล้ว
ถ้าอยากเห็นผล ให้ลองเพิ่มความสูงหรือเนื้อหาให้ card บางใบมากกว่าใบอื่น
```

---

# Homework

## Assignment Title

**W02.02 — Assignment: Flexbox Landing Page Layout**

## Project Brief

ให้นักเรียนสร้างหรือปรับหน้า landing page โดยใช้ Flexbox เป็นหลัก

หัวข้อเลือกเองได้ เช่น:

* Bootcamp Landing Page
* Portfolio Landing Page
* Product Landing Page
* Service Page
* Event Page

## Requirements

1. มี navbar ที่ใช้ Flexbox
2. มี hero section แบบ 2 columns
3. มี feature cards อย่างน้อย 3 ใบ
4. มีอีก 1 section ที่ใช้ Flexbox เช่น pricing, testimonial หรือ target audience
5. ใช้ `gap` อย่างน้อย 2 จุด
6. ใช้ `justify-content` อย่างน้อย 1 จุด
7. ใช้ `align-items` อย่างน้อย 1 จุด
8. ใช้ `flex: 1` หรือ flex ratio อย่างน้อย 1 จุด
9. มี responsive เบื้องต้นด้วย `@media`

## Reflection

ตอบคำถามสั้น ๆ:

1. Flexbox ใช้แก้ปัญหาอะไร?
2. Parent container กับ child item ต่างกันอย่างไร?
3. `justify-content` กับ `align-items` ต่างกันอย่างไร?
4. `gap` มีประโยชน์อย่างไร?
5. ตอนทำ responsive layout เจอปัญหาอะไร?

---

# Quiz

## Question 1

Flexbox ต้องใส่ที่ element แบบไหน?

A. Parent container
B. ไฟล์ JavaScript
C. เฉพาะ h1 เท่านั้น
D. เฉพาะรูปภาพเท่านั้น

**Correct Answer:** A

---

## Question 2

`display: flex;` ใช้ทำอะไร?

A. เปิดโหมด Flexbox ให้ container
B. เปลี่ยนสีตัวอักษร
C. อ่านค่าจาก input
D. สร้าง function

**Correct Answer:** A

---

## Question 3

`justify-content: space-between;` ทำอะไร?

A. กระจาย item ให้ตัวแรกอยู่ซ้าย ตัวสุดท้ายอยู่ขวา
B. ทำให้ตัวอักษรหนา
C. เพิ่มขอบให้กล่อง
D. เปลี่ยนภาษาเว็บ

**Correct Answer:** A

---

## Question 4

`align-items: center;` ใช้ทำอะไร?

A. จัด item ให้อยู่กึ่งกลางในแนวตั้ง
B. เปลี่ยนสีพื้นหลัง
C. ทำให้ link กดได้
D. ลบ margin ทั้งหมด

**Correct Answer:** A

---

## Question 5

`gap` ใช้ทำอะไร?

A. กำหนดระยะห่างระหว่าง flex items
B. เปลี่ยนขนาด font
C. เพิ่ม event click
D. สร้าง HTML file

**Correct Answer:** A

---

## Question 6

`flex: 1;` หมายถึงอะไรโดยทั่วไป?

A. ให้ item แบ่งพื้นที่กับ item อื่น ๆ อย่างยืดหยุ่น
B. ทำให้ element หายไป
C. ทำให้ปุ่มกดไม่ได้
D. เปลี่ยน element เป็น form

**Correct Answer:** A

---

## Question 7

ถ้าอยากให้ card หลายใบเรียงในแถวเดียวกัน ควรใส่ `display: flex` ที่ไหน?

A. Container ที่ครอบ card ทั้งหมด
B. ทุก h2
C. body เท่านั้นเสมอ
D. ในไฟล์ HTML เท่านั้น

**Correct Answer:** A

---

## Question 8

`flex-wrap: wrap;` ใช้ทำอะไร?

A. อนุญาตให้ item ขึ้นบรรทัดใหม่เมื่อพื้นที่ไม่พอ
B. ทำให้ข้อความเป็นตัวหนา
C. ซ่อน element
D. เปลี่ยนสี button

**Correct Answer:** A

---

## Question 9

`@media` ใช้ทำอะไร?

A. เขียน CSS สำหรับเงื่อนไขขนาดหน้าจอหรืออุปกรณ์
B. ใช้สร้าง array
C. ใช้เชื่อมต่อ database
D. ใช้อ่านค่า input

**Correct Answer:** A

---

## Question 10

ข้อใดคือการใช้ Flexbox ที่ถูกต้องสำหรับ navbar?

A. ใช้ `display: flex`, `justify-content`, และ `align-items`
B. ใช้เฉพาะ `color` อย่างเดียว
C. ใช้เฉพาะ `font-size` อย่างเดียว
D. ใช้ JavaScript เท่านั้น

**Correct Answer:** A

---

# LMS Content หลังคลาส

```text
Module: Week 2 — The Modern DOM & Pure CSS

W02.07 — Recording: Flexbox Layout และ Responsive เบื้องต้น [Video]
W02.08 — Notes: Flexbox Mental Model [Text]
W02.09 — Notes: justify-content, align-items, gap และ flex: 1 [Text]
W02.10 — Code Example: Flexbox Landing Page Layout [Text]
W02.11 — Quiz: Flexbox Layout Basics [Quiz]
W02.12 — Assignment: Flexbox Landing Page Layout [Project]
```

---

# Closing Script

วันนี้เราได้เรียนเครื่องมือ CSS ที่สำคัญมากตัวหนึ่งคือ Flexbox

ถ้าคลาสก่อนหน้าเรามองว่า element ทุกตัวคือกล่อง วันนี้เราก็ได้เรียนวิธีจัดกล่องหลายใบให้อยู่ในตำแหน่งที่ต้องการ

สิ่งที่อยากให้จำคือ:

```text
Flexbox ใส่ที่ parent
แล้วมันจะจัด children ข้างใน
```

Property หลักที่ควรจำจากวันนี้คือ:

```text
display: flex
justify-content
align-items
gap
flex: 1
flex-wrap
```

เมื่อเข้าใจ Flexbox แล้ว เราจะเริ่มสร้าง layout ที่เหมือนเว็บจริงมากขึ้น เช่น navbar, hero section, card layout, pricing section และ responsive layout เบื้องต้น

คลาสถัดไปเราจะต่อยอดไปสู่ **CSS Grid และ Responsive Layout** เพื่อให้สามารถจัด layout ที่ซับซ้อนขึ้น และเตรียมตัวสำหรับ project ใหญ่ขึ้นใน Week 2 ครับ