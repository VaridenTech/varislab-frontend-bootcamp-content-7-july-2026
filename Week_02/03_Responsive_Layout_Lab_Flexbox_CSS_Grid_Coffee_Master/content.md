# W02.03 — Responsive Layout Lab: Flexbox, CSS Grid และ Coffee Master Layout

## ชื่อคลาส

**คลาสที่ 6: สร้างหน้าเว็บ Responsive ด้วย Flexbox และ CSS Grid**

หรือใน LMS:

**W02.03 — Responsive Layout Lab: Flexbox, Grid & Coffee Master Preview**

---

# Positioning ของคลาสนี้

คลาสนี้เป็นคลาสที่ 3 ของ Week 2 และควรเป็น **Live Lab / Project-Based Class**

Week 2 ที่ผ่านมานักเรียนเรียนมาแล้ว:

* Semantic HTML
* CSS Box Model
* Padding / Margin
* Container layout
* Flexbox
* Navbar
* Hero section
* Feature cards
* Responsive เบื้องต้น

วันนี้จะเอาทุกอย่างมารวมกัน แล้วเพิ่มเรื่องใหม่คือ:

* CSS Grid
* Responsive layout จริงจังขึ้น
* การออกแบบ layout สำหรับ landing page
* เตรียมเข้าสู่ Week 3 Project: **Coffee Master Landing Page**

วันนี้ยังอยู่ในช่วง **Manual Core**
ยังไม่ใช้ AI generate code

---

# เป้าหมายของคลาส

หลังจบคลาสนี้ นักเรียนควรเข้าใจว่า:

1. Flexbox เหมาะกับ layout แบบ 1 มิติ เช่น แถวเดียว หรือ column เดียว
2. CSS Grid เหมาะกับ layout แบบ 2 มิติ เช่น card grid หรือ section ที่มีหลายแถวหลายคอลัมน์
3. ใช้ `grid-template-columns` เพื่อสร้าง column layout ได้
4. ใช้ `repeat()` และ `minmax()` เพื่อทำ responsive card grid เบื้องต้นได้
5. ใช้ `@media` เพื่อปรับ layout ตามขนาดหน้าจอได้
6. สร้าง landing page section ที่ responsive ได้
7. เริ่มเตรียม structure สำหรับ Coffee Master Landing Page ใน Week 3

---

# โครงสร้างคลาส 3 ชั่วโมง

สมมติเรียนวันเสาร์ 09:00–12:00

| เวลา        | เนื้อหา                                           | เป้าหมาย                                |
| ----------- | ------------------------------------------------- | --------------------------------------- |
| 09:00–09:15 | Recap Week 2                                      | ทบทวน Semantic HTML, Box Model, Flexbox |
| 09:15–09:35 | Flexbox vs Grid                                   | เข้าใจว่าใช้ตัวไหนเมื่อไหร่             |
| 09:35–10:05 | CSS Grid Basics                                   | grid-template-columns, gap, repeat      |
| 10:05–10:15 | Break                                             | พัก                                     |
| 10:15–10:55 | Live Coding: Coffee Master Landing Page Structure | สร้างหน้า landing page                  |
| 10:55–11:25 | Responsive Layout ด้วย @media                     | ปรับ desktop → mobile                   |
| 11:25–11:45 | Mini Challenge                                    | ให้นักเรียนเพิ่ม section / ปรับ layout  |
| 11:45–12:00 | Wrap-up + Homework                                | สรุปและมอบหมายงาน                       |

---

# Opening Script

สวัสดีครับทุกคน วันนี้เป็นคลาสที่ 3 ของสัปดาห์ที่ 2 แล้วนะครับ

สองคลาสที่ผ่านมาเราเริ่มเขียน HTML และ CSS ให้เป็นระบบมากขึ้น

เราเรียนว่า HTML ไม่ใช่แค่ tag ที่ทำให้หน้าเว็บแสดงผลได้ แต่ควรมีความหมายผ่าน Semantic HTML

เราเรียนว่า CSS ไม่ใช่แค่เรื่องสี แต่เป็นเรื่องของกล่อง ระยะห่าง และ layout ผ่าน Box Model

และคลาสที่แล้วเราเริ่มใช้ Flexbox เพื่อจัด navbar, hero section, card row และ layout แบบซ้ายขวา

วันนี้เราจะต่อยอดอีกขั้นด้วย CSS Grid และ Responsive Layout

คำถามหลักของวันนี้คือ:

ถ้าเราต้องจัด card หลายใบ หรือจัด layout ที่เป็นหลายแถวหลายคอลัมน์ เราควรทำยังไง?

คำตอบคือ CSS Grid

แต่สิ่งสำคัญคือ เราไม่ได้เรียน Grid เพื่อจำ property ให้เยอะที่สุด
เราเรียนเพื่อเข้าใจว่า layout จริงของเว็บถูกจัดเป็นระบบยังไง

วันนี้เราจะเริ่มสร้าง layout ที่ใกล้กับโปรเจกต์ Week 3 ของเรา คือ Coffee Master Landing Page

ดังนั้นคลาสวันนี้จะเป็นเหมือนการเตรียมตัวก่อนเข้าสู่โปรเจกต์ใหญ่ขึ้นครับ

---

# Part 1: Recap — Week 2 ที่ผ่านมา

พูดทบทวน:

ก่อนเริ่มเรื่องใหม่ เรามาทบทวนสั้น ๆ ก่อนครับ

จากคลาสก่อนหน้า เราใช้:

```text
header
nav
main
section
article
footer
```

เพื่อทำให้ HTML มีความหมาย

เราใช้ Box Model เพื่อเข้าใจ:

```text
Content
Padding
Border
Margin
```

เราใช้ Flexbox เพื่อจัด layout เช่น:

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

และเราใช้:

```css
.features-section {
  display: flex;
  gap: 20px;
}
```

เพื่อให้ card หลายใบเรียงในแถวเดียวกัน

วันนี้เราจะเพิ่มอีกเครื่องมือหนึ่งคือ Grid

---

# Part 2: Flexbox vs Grid

## อธิบาย Concept

Flexbox และ Grid เป็นเครื่องมือจัด layout เหมือนกัน แต่เหมาะกับงานคนละแบบ

ให้จำแบบง่าย ๆ:

```text
Flexbox = จัดของในแนวเดียวเป็นหลัก
Grid = จัดของเป็นตาราง หลายแถว หลายคอลัมน์
```

## Flexbox เหมาะกับอะไร?

```text
- Navbar
- ปุ่มเรียงกัน
- Hero section ซ้าย-ขวา
- Card row แบบง่าย
- จัด element ให้อยู่กลาง
```

ตัวอย่าง:

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

## Grid เหมาะกับอะไร?

```text
- Card grid
- Product list
- Course list
- Gallery
- Dashboard layout
- Layout ที่มีหลายแถวหลายคอลัมน์
```

ตัวอย่าง:

```css
.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

## วิธีพูดในคลาส

ถ้าเรามีของเรียงเป็นแถวเดียว Flexbox มักจะพอ

แต่ถ้าเรามี card หลายใบที่อยากจัดเป็นตาราง เช่น 3 คอลัมน์บน desktop แล้วเปลี่ยนเป็น 1 คอลัมน์บน mobile Grid จะเหมาะมาก

---

# Part 3: CSS Grid Basics

## Concept หลัก

Grid ต้องใส่ที่ parent เหมือน Flexbox

HTML:

```html
<section class="menu-grid">
  <article class="menu-card">Card 1</article>
  <article class="menu-card">Card 2</article>
  <article class="menu-card">Card 3</article>
</section>
```

CSS:

```css
.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

อธิบาย:

```text
display: grid = เปิดโหมด Grid
grid-template-columns = กำหนดจำนวนและขนาด column
repeat(3, 1fr) = สร้าง 3 column ที่กว้างเท่า ๆ กัน
gap = ระยะห่างระหว่าง item
```

---

# คำศัพท์ Grid ที่ควรรู้วันนี้

## 1. `display: grid`

```css
.menu-grid {
  display: grid;
}
```

ใช้เปิดโหมด Grid ให้ parent container

---

## 2. `grid-template-columns`

```css
.menu-grid {
  grid-template-columns: repeat(3, 1fr);
}
```

ใช้กำหนด column ของ grid

---

## 3. `1fr`

```css
grid-template-columns: 1fr 1fr 1fr;
```

`fr` ย่อมาจาก fraction
แปลว่าแบ่งพื้นที่ที่เหลือเป็นส่วน ๆ

`1fr 1fr 1fr` แปลว่า 3 column เท่า ๆ กัน

---

## 4. `repeat()`

```css
grid-template-columns: repeat(3, 1fr);
```

แปลว่า:

```text
สร้าง 1fr ซ้ำ 3 ครั้ง
```

เท่ากับ:

```css
grid-template-columns: 1fr 1fr 1fr;
```

แต่เขียนสั้นกว่า

---

## 5. `minmax()`

```css
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
```

อธิบายแบบง่าย:

```text
แต่ละ card ควรกว้างอย่างน้อย 220px
แต่ถ้ามีพื้นที่เหลือ ให้ขยายได้ถึง 1fr
```

อันนี้เป็น pattern ที่ดีมากสำหรับ responsive card grid

---

# Project วันนี้: Coffee Master Landing Page Preview

วันนี้เราจะสร้าง landing page สำหรับร้านกาแฟชื่อ Coffee Master

หน้านี้จะมี:

```text
1. Navbar
2. Hero section
3. Menu grid
4. Why Choose Us section
5. Footer
```

นี่คือการเตรียมตัวก่อน Week 3 ที่เราจะทำ Coffee Master Landing Page เป็นโปรเจกต์หลัก

---

# สร้าง Project

Folder:

```text
week-02-coffee-master-layout
```

Files:

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
    <title>Coffee Master Landing Page</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <header class="site-header">
      <nav class="navbar">
        <p class="logo">Coffee Master</p>

        <div class="nav-links">
          <a href="#">เมนู</a>
          <a href="#">จุดเด่น</a>
          <a href="#">ติดต่อเรา</a>
        </div>
      </nav>
    </header>

    <main>
      <section class="hero-section">
        <div class="hero-content">
          <p class="eyebrow">Premium Coffee Experience</p>

          <h1>กาแฟคุณภาพ สำหรับวันที่ต้องการพลังงานดี ๆ</h1>

          <p class="hero-description">
            Coffee Master คัดสรรเมล็ดกาแฟคุณภาพ พร้อมเสิร์ฟเมนูยอดนิยม
            สำหรับคนทำงาน นักเรียน และคนรักกาแฟทุกวัน
          </p>

          <a class="primary-button" href="#">ดูเมนูแนะนำ</a>
        </div>

        <aside class="hero-card">
          <p class="card-label">Today's Special</p>
          <h2>Caramel Latte</h2>
          <p>กาแฟนุ่ม หอมคาราเมล พร้อมนมสดละมุน</p>
        </aside>
      </section>

      <section class="menu-section">
        <div class="section-header">
          <p class="eyebrow">Popular Menu</p>
          <h2>เมนูยอดนิยม</h2>
          <p>
            เลือกเมนูกาแฟที่เหมาะกับสไตล์การทำงานและวันของคุณ
          </p>
        </div>

        <div class="menu-grid">
          <article class="menu-card">
            <p class="menu-icon">☕</p>
            <h3>Americano</h3>
            <p>กาแฟดำเข้ม หอม ชัด เหมาะสำหรับเริ่มวันใหม่</p>
          </article>

          <article class="menu-card">
            <p class="menu-icon">🥛</p>
            <h3>Latte</h3>
            <p>กาแฟนมนุ่ม ดื่มง่าย เหมาะกับทุกช่วงเวลา</p>
          </article>

          <article class="menu-card">
            <p class="menu-icon">🍫</p>
            <h3>Mocha</h3>
            <p>กาแฟผสมช็อกโกแลต สำหรับคนชอบรสเข้มหวานละมุน</p>
          </article>

          <article class="menu-card">
            <p class="menu-icon">🧊</p>
            <h3>Cold Brew</h3>
            <p>กาแฟสกัดเย็น รสสะอาด สดชื่น และดื่มง่าย</p>
          </article>

          <article class="menu-card">
            <p class="menu-icon">🍯</p>
            <h3>Honey Coffee</h3>
            <p>กาแฟหอมน้ำผึ้ง รสหวานธรรมชาติ</p>
          </article>

          <article class="menu-card">
            <p class="menu-icon">🌱</p>
            <h3>Matcha Latte</h3>
            <p>มัทฉะเข้มข้น ผสมนมสด สำหรับคนไม่ดื่มกาแฟ</p>
          </article>
        </div>
      </section>

      <section class="why-section">
        <div class="section-header">
          <p class="eyebrow">Why Coffee Master</p>
          <h2>ทำไมลูกค้าถึงเลือกเรา</h2>
        </div>

        <div class="why-layout">
          <article class="why-card">
            <h3>เมล็ดกาแฟคุณภาพ</h3>
            <p>คัดสรรเมล็ดกาแฟที่ให้รสชาติชัดและกลิ่นหอม</p>
          </article>

          <article class="why-card">
            <h3>เหมาะกับวันทำงาน</h3>
            <p>เมนูออกแบบมาให้ดื่มง่ายและช่วยเติมพลังระหว่างวัน</p>
          </article>

          <article class="why-card">
            <h3>สั่งง่าย รับไว</h3>
            <p>เหมาะสำหรับคนที่ต้องการกาแฟดี ๆ แบบไม่เสียเวลา</p>
          </article>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p>© 2026 Coffee Master. Crafted with care.</p>
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
  background: #111827;
  color: white;
}

.site-header {
  border-bottom: 1px solid #374151;
}

.navbar {
  max-width: 1120px;
  margin: 0 auto;
  padding: 20px 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  margin: 0;
  color: #fbbf24;
  font-size: 22px;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  color: #d1d5db;
  text-decoration: none;
}

.nav-links a:hover {
  color: #fbbf24;
}

main {
  max-width: 1120px;
  margin: 0 auto;
  padding: 64px 32px;
}

.hero-section {
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 80px;
}

.hero-content {
  flex: 1.4;
}

.hero-card {
  flex: 1;
  padding: 32px;
  border-radius: 28px;
  background: #1f2937;
  border: 1px solid #374151;
}

.eyebrow,
.card-label {
  margin: 0 0 16px;
  color: #fbbf24;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

h1 {
  margin: 0 0 24px;
  font-size: 56px;
  line-height: 1.1;
}

.hero-description {
  margin: 0 0 32px;
  color: #d1d5db;
  font-size: 20px;
  line-height: 1.7;
}

.primary-button {
  display: inline-block;
  padding: 14px 24px;
  border-radius: 999px;
  background: #fbbf24;
  color: #111827;
  font-weight: bold;
  text-decoration: none;
}

.primary-button:hover {
  background: #fcd34d;
}

.hero-card h2 {
  margin: 0 0 16px;
  font-size: 36px;
}

.hero-card p {
  color: #d1d5db;
  line-height: 1.7;
}

.menu-section {
  margin-bottom: 80px;
}

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
  color: #d1d5db;
  line-height: 1.7;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.menu-card {
  padding: 28px;
  border-radius: 24px;
  background: #1f2937;
  border: 1px solid #374151;
}

.menu-icon {
  margin: 0 0 16px;
  font-size: 36px;
}

.menu-card h3 {
  margin: 0 0 12px;
  color: #fbbf24;
  font-size: 24px;
}

.menu-card p {
  margin: 0;
  color: #d1d5db;
  line-height: 1.7;
}

.why-section {
  margin-bottom: 40px;
}

.why-layout {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
}

.why-card {
  padding: 24px;
  border-radius: 20px;
  background: #1f2937;
}

.why-card h3 {
  margin: 0 0 12px;
  color: #fbbf24;
}

.why-card p {
  margin: 0;
  color: #d1d5db;
  line-height: 1.7;
}

.site-footer {
  border-top: 1px solid #374151;
  padding: 24px 32px;
  text-align: center;
  color: #9ca3af;
}
```

---

# จุดที่ควรสอนระหว่างเขียน CSS

## 1. Grid Container

```css
.menu-grid {
  display: grid;
}
```

พูด:

เมื่อเราใส่ `display: grid` ที่ parent container เรากำลังบอก browser ว่า item ลูกข้างในควรถูกจัดแบบ grid

เหมือน Flexbox ตรงที่ต้องใส่ที่ parent

---

## 2. กำหนด 3 Columns

```css
.menu-grid {
  grid-template-columns: repeat(3, 1fr);
}
```

พูด:

บรรทัดนี้แปลว่าเราต้องการ 3 คอลัมน์ และแต่ละคอลัมน์กว้างเท่า ๆ กัน

`repeat(3, 1fr)` แปลว่า:

```text
ทำ 1fr ซ้ำ 3 ครั้ง
```

หรือเท่ากับ:

```css
grid-template-columns: 1fr 1fr 1fr;
```

---

## 3. Gap

```css
.menu-grid {
  gap: 24px;
}
```

พูด:

`gap` คือระยะห่างระหว่าง card

ทั้ง Flexbox และ Grid ใช้ `gap` ได้เหมือนกัน

---

## 4. Grid vs Flexbox

พูด:

Hero section เรายังใช้ Flexbox เพราะมี layout ซ้าย-ขวา 2 ฝั่ง

แต่ menu cards เราใช้ Grid เพราะมีหลาย card และต้องการจัดเป็นตาราง

นี่คือการเลือกเครื่องมือให้เหมาะกับงาน

---

# Responsive Layout

หลังจาก desktop layout เสร็จ ให้เพิ่ม media query

```css
@media (max-width: 900px) {
  .hero-section {
    flex-direction: column;
    align-items: stretch;
  }

  .menu-grid,
  .why-layout {
    grid-template-columns: repeat(2, 1fr);
  }

  h1 {
    font-size: 44px;
  }
}
```

อธิบาย:

ถ้าหน้าจอเล็กกว่า 900px:

* hero section เปลี่ยนจากซ้าย-ขวาเป็นบน-ล่าง
* menu grid จาก 3 columns เหลือ 2 columns
* h1 เล็กลง

จากนั้นเพิ่ม mobile:

```css
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    gap: 16px;
  }

  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }

  main {
    padding: 40px 20px;
  }

  h1 {
    font-size: 36px;
  }

  .menu-grid,
  .why-layout {
    grid-template-columns: 1fr;
  }
}
```

อธิบาย:

ถ้าหน้าจอเล็กกว่า 600px:

* navbar เรียงจากบนลงล่าง
* menu grid เหลือ 1 column
* padding ด้านข้างลดลง
* h1 เล็กลงเพื่อไม่ให้ล้นหน้าจอ

---

# Responsive Pattern ที่ควรจำ

```text
Desktop: 3 columns
Tablet: 2 columns
Mobile: 1 column
```

นี่เป็น pattern ที่ใช้บ่อยมากใน card layout

---

# Alternative Responsive Grid แบบฉลาดขึ้น

ถ้านักเรียนตามทัน ค่อยโชว์เพิ่มเป็น optional:

```css
.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
}
```

อธิบาย:

```text
auto-fit = browser ช่วยคำนวณจำนวน column ให้เอง
minmax(220px, 1fr) = card กว้างอย่างน้อย 220px และขยายได้ถ้ามีพื้นที่
```

แต่อย่าย้ำเยอะเกินไป เพราะสำหรับผู้เริ่มต้น media query แบบชัด ๆ จะเข้าใจง่ายกว่า

---

# Mini Challenge

ให้เวลา 15–20 นาที

## Challenge 1

เพิ่มเมนูกาแฟอีก 2 รายการใน `.menu-grid`

## Challenge 2

เปลี่ยนจำนวน columns บน desktop จาก 3 เป็น 4 แล้วดูผลลัพธ์

```css
grid-template-columns: repeat(4, 1fr);
```

## Challenge 3

ปรับ mobile layout ให้ menu card เหลือ 1 column

## Challenge 4

เพิ่ม section ใหม่ชื่อ `Customer Favorites` และใช้ Grid จัด card อย่างน้อย 3 ใบ

## Bonus

เปลี่ยน responsive grid เป็นแบบ:

```css
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
```

แล้วลองย่อขยาย browser เพื่อดูผลลัพธ์

---

# Error Demo ที่ควรทำ

## Error 1: ลืม `display: grid`

ผิด:

```css
.menu-grid {
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

แต่ไม่มี:

```css
display: grid;
```

อธิบาย:

ถ้าไม่ใส่ `display: grid` property ของ Grid จะไม่ทำงาน

---

## Error 2: ใส่ Grid ที่ Card แทน Parent

ผิด:

```css
.menu-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

ถูก:

```css
.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

อธิบาย:

ถ้าอยากจัด card หลายใบ ต้องใส่ Grid ที่ container ที่ครอบ card ทั้งหมด

---

## Error 3: ลืมปรับ responsive

ให้เปิด mobile width แล้วถาม:

```text
ถ้า card ยังเป็น 3 columns บนมือถือ จะเกิดอะไรขึ้น?
```

คำตอบ:

```text
card จะแคบเกินไป อ่านยาก และ layout ดูไม่ดี
```

---

# Homework

## Assignment Title

**W02.03 — Assignment: Responsive Coffee Landing Page**

## Project Brief

ให้นักเรียนสร้างหน้า Landing Page แบบ responsive โดยใช้ Semantic HTML, Flexbox, CSS Grid และ Media Queries

สามารถเลือกหัวข้อได้ เช่น:

* Coffee Shop Landing Page
* Restaurant Landing Page
* Product Landing Page
* Portfolio Services Page
* Course Landing Page

## Requirements

1. ใช้ Semantic HTML เช่น `header`, `nav`, `main`, `section`, `article`, `footer`
2. มี Navbar
3. มี Hero Section
4. Hero Section ใช้ Flexbox
5. มี Card Grid อย่างน้อย 6 ใบ
6. Card Grid ใช้ CSS Grid
7. ใช้ `gap` เพื่อจัดระยะห่าง
8. ใช้ `@media` อย่างน้อย 2 breakpoint
9. Desktop ต้องมีหลาย columns
10. Mobile ต้องเปลี่ยนเป็น 1 column
11. ปรับข้อความ สี และเนื้อหาให้เป็นของตัวเอง

## Bonus

1. ใช้ `repeat(auto-fit, minmax(...))`
2. เพิ่ม hover effect ให้ card
3. เพิ่ม section ใหม่อีก 1 section
4. ปรับ typography ให้อ่านง่ายขึ้น
5. ทำให้ navbar ดูดีบน mobile

## Reflection

ตอบคำถามสั้น ๆ:

1. Flexbox กับ Grid ต่างกันอย่างไร?
2. ทำไม Card Grid เหมาะกับ CSS Grid?
3. `grid-template-columns` ใช้ทำอะไร?
4. `@media` ใช้ทำอะไร?
5. ตอนทำ responsive layout เจอปัญหาอะไร?
6. อยากให้ผู้สอน review จุดไหน?

---

# Quiz

## Question 1

CSS Grid เหมาะกับ layout แบบไหน?

A. Layout หลายแถวหลายคอลัมน์
B. ใช้แทน JavaScript
C. ใช้สร้าง database
D. ใช้ส่ง form

**Correct Answer:** A

---

## Question 2

`display: grid;` ควรใส่ที่ไหน?

A. Parent container ที่ครอบ items
B. เฉพาะ h1
C. เฉพาะ body เท่านั้น
D. ในไฟล์ JavaScript

**Correct Answer:** A

---

## Question 3

`grid-template-columns: repeat(3, 1fr);` หมายถึงอะไร?

A. สร้าง 3 columns ที่กว้างเท่า ๆ กัน
B. สร้างปุ่ม 3 ปุ่ม
C. ทำให้ text ใหญ่ขึ้น 3 เท่า
D. ซ่อน element 3 ตัว

**Correct Answer:** A

---

## Question 4

`gap` ใช้ทำอะไรใน Grid?

A. กำหนดระยะห่างระหว่าง grid items
B. เปลี่ยนสีพื้นหลัง
C. เพิ่ม font
D. สร้าง link

**Correct Answer:** A

---

## Question 5

`1fr` หมายถึงอะไรใน CSS Grid?

A. ส่วนแบ่งของพื้นที่ที่เหลือ
B. 1 font size
C. 1 file root
D. 1 form row

**Correct Answer:** A

---

## Question 6

`@media` ใช้ทำอะไร?

A. เขียน CSS ตามเงื่อนไขขนาดหน้าจอ
B. อ่านค่าจาก input
C. สร้าง array
D. เชื่อมต่อ backend

**Correct Answer:** A

---

## Question 7

บน mobile card grid ควรปรับเป็นแบบไหนโดยทั่วไป?

A. 1 column
B. 10 columns
C. ซ่อน card ทั้งหมด
D. เปลี่ยนเป็น JavaScript

**Correct Answer:** A

---

## Question 8

Flexbox เหมาะกับอะไรที่สุดในตัวอย่างวันนี้?

A. Hero section แบบซ้าย-ขวา
B. การเก็บข้อมูลหลายรายการ
C. การ validate form
D. การสร้าง database

**Correct Answer:** A

---

## Question 9

Grid เหมาะกับอะไรที่สุดในตัวอย่างวันนี้?

A. Menu cards หลายใบ
B. ปุ่ม submit ปุ่มเดียว
C. การอ่าน `.value`
D. การสร้าง event listener

**Correct Answer:** A

---

## Question 10

ถ้าเขียน `grid-template-columns` แล้วไม่เกิดผล ควรเช็กอะไรเป็นอย่างแรก?

A. ใส่ `display: grid;` ที่ parent แล้วหรือยัง
B. ใส่ JavaScript แล้วหรือยัง
C. เปลี่ยน title แล้วหรือยัง
D. เปิด GitHub แล้วหรือยัง

**Correct Answer:** A

---

# LMS Content หลังคลาส

## Module

**Week 2 — The Modern DOM & Pure CSS**

## Lessons

1. **W02.13 — Recording: Responsive Layout ด้วย Flexbox และ CSS Grid**
   Type: Video

2. **W02.14 — Notes: Flexbox vs CSS Grid**
   Type: Text

3. **W02.15 — Notes: Responsive Layout และ Media Queries**
   Type: Text

4. **W02.16 — Code Example: Coffee Master Responsive Layout**
   Type: Text

5. **W02.17 — Quiz: CSS Grid และ Responsive Layout**
   Type: Quiz

6. **W02.18 — Assignment: Responsive Coffee Landing Page**
   Type: Project

## Attachments

```text
- starter-code.zip
- completed-code.zip
- responsive-layout-checklist.pdf
- css-grid-cheatsheet.pdf
- media-query-cheatsheet.pdf
```

---

# Closing Script

วันนี้เราได้ปิด Week 2 ด้วยการเอา HTML และ CSS หลายส่วนมารวมกันเป็น layout ที่ใกล้กับเว็บจริงมากขึ้น

เราได้เห็นว่า Flexbox และ Grid ไม่ได้มาแทนกัน แต่ใช้คนละสถานการณ์

Flexbox เหมาะกับการจัดของในแนวเดียว เช่น navbar หรือ hero section

Grid เหมาะกับการจัด card หลายใบเป็นตาราง เช่น menu grid, product grid หรือ course grid

เราได้เริ่มใช้ `@media` เพื่อปรับ layout ตามขนาดหน้าจอ ซึ่งเป็นพื้นฐานสำคัญของ Responsive Design

สิ่งที่อยากให้จำจากวันนี้คือ:

```text
Flexbox = จัด layout หนึ่งแนว
Grid = จัด layout แบบตาราง
Media Query = ปรับ layout ตามขนาดหน้าจอ
```

คลาสถัดไปเราจะเข้าสู่ Week 3 ซึ่งเป็นช่วงที่เราจะเริ่มสร้าง **Coffee Master Landing Page** เป็นโปรเจกต์จริงของ Phase 1

โปรเจกต์นั้นจะเป็นการรวมสิ่งที่เรียนทั้งหมดตั้งแต่ HTML, CSS, JavaScript พื้นฐาน, layout, responsive และ manual debugging เข้าด้วยกันครับ
