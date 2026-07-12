# W02.01 — Homework & Quiz

## Semantic HTML และ CSS Box Model

---

# Homework

## Assignment Title

**W02.01 — Assignment: Bootcamp Landing Page Section**

---

## Project Brief

ให้นักเรียนสร้างหน้า **Landing Page Section** แบบง่าย ๆ โดยใช้สิ่งที่เรียนในคลาสนี้ ได้แก่:

* Semantic HTML
* CSS Box Model
* Padding และ Margin
* Container layout
* Flexbox เบื้องต้น
* การจัดโครงสร้างหน้าเว็บให้เป็นระบบ

หัวข้อของ Landing Page สามารถเลือกเองได้ เช่น:

* คอร์สเรียน
* Portfolio ส่วนตัว
* Product Landing Page
* Service Page
* Event Page
* Bootcamp Landing Page

เป้าหมายของงานนี้ไม่ใช่แค่ทำให้หน้าเว็บ “แสดงผลได้” แต่ต้องเริ่มฝึกจัดโครงสร้าง HTML ให้มีความหมาย และใช้ CSS เพื่อควบคุมระยะห่าง ขนาด และ layout อย่างเป็นระบบ

---

## Requirements

งานที่ส่งต้องมีเงื่อนไขต่อไปนี้:

1. ใช้ **Semantic HTML** อย่างน้อย 4 ตัว เช่น:

   * `header`
   * `nav`
   * `main`
   * `section`
   * `article`
   * `footer`

2. มี **Hero Section** อย่างน้อย 1 section
   ตัวอย่างสิ่งที่ควรมี:

   * หัวข้อหลัก
   * คำอธิบายสั้น ๆ
   * ปุ่ม Call-to-Action

3. มี **Feature Cards** อย่างน้อย 3 ใบ

4. ใช้ `padding` เพื่อจัดระยะห่างด้านในของ section หรือ card

5. ใช้ `margin` เพื่อจัดระยะห่างระหว่าง section หรือ element

6. ใช้ `max-width` และ `margin: 0 auto` เพื่อจัด content ให้อยู่กลางหน้า

7. ใช้ `display: flex` อย่างน้อย 1 จุด เช่น:

   * จัด navbar
   * จัด feature cards
   * จัด layout ของ section

8. ใช้ class selector ใน CSS อย่างถูกต้อง เช่น:

```css
.feature-card {
  padding: 24px;
}
```

9. ปรับสี ข้อความ และเนื้อหาให้เป็นของตัวเอง

---

## Recommended Structure

ตัวอย่างโครงสร้าง HTML ที่แนะนำ:

```html
<header>
  <nav>
    <!-- logo and navigation links -->
  </nav>
</header>

<main>
  <section>
    <!-- hero content -->
  </section>

  <section>
    <article>
      <!-- feature card 1 -->
    </article>

    <article>
      <!-- feature card 2 -->
    </article>

    <article>
      <!-- feature card 3 -->
    </article>
  </section>
</main>

<footer>
  <!-- footer content -->
</footer>
```

---

## Submission Format

ให้ส่งงานในรูปแบบใดรูปแบบหนึ่ง:

### Option 1: GitHub Repository

ส่ง GitHub repository link เช่น:

```text
https://github.com/username/bootcamp-landing-page
```

### Option 2: Screenshot

ถ้ายังไม่พร้อมส่ง GitHub ให้ส่ง:

* Screenshot หน้าเว็บ
* Screenshot โค้ด HTML
* Screenshot โค้ด CSS

---

## Reflection Questions

ให้ตอบคำถามสั้น ๆ พร้อมงานที่ส่ง:

1. **Semantic HTML คืออะไร?**
   อธิบายด้วยคำพูดของตัวเอง

2. **`padding` กับ `margin` ต่างกันอย่างไร?**

3. **CSS Box Model ช่วยให้เข้าใจ layout อย่างไร?**

4. **ตอนทำงานนี้ เจอปัญหาอะไรเกี่ยวกับ layout บ้าง?**

5. **อยากให้ผู้สอนช่วย review จุดไหนเป็นพิเศษ?**

---

## Bonus Challenge

ถ้าทำ requirements หลักครบแล้ว ลองทำเพิ่ม:

1. เพิ่ม section ใหม่ชื่อ **Who is this for?**
2. เพิ่ม feature card เป็น 4 ใบ
3. เพิ่ม hover effect ให้ปุ่มหรือ navigation link
4. ปรับ layout ให้ดูดีขึ้นบนหน้าจอมือถือ
5. ใช้ `line-height` เพื่อทำให้ข้อความอ่านง่ายขึ้น

---

## Evaluation Criteria

งานนี้จะถูก review จากหัวข้อต่อไปนี้:

| Criteria         | Description                            |
| ---------------- | -------------------------------------- |
| HTML Structure   | ใช้ semantic tags ได้เหมาะสม           |
| CSS Box Model    | เข้าใจ padding, margin และ spacing     |
| Layout           | จัดหน้าเว็บเป็นระบบ อ่านง่าย           |
| Code Readability | ตั้งชื่อ class ชัดเจนและอ่านโค้ดง่าย   |
| Completion       | ทำ requirements หลักครบ                |
| Reflection       | อธิบายสิ่งที่เรียนรู้และปัญหาที่เจอได้ |

---

# Quiz

## Quiz Title

**W02.01 — Quiz: Semantic HTML และ CSS Box Model**

---

## Question 1

Semantic HTML คืออะไร?

A. การใช้ HTML tag ที่มีความหมายกับเนื้อหา
B. การใช้ `div` ให้มากที่สุด
C. การเขียน CSS โดยไม่ใช้ class
D. การใช้ JavaScript เพื่อเปลี่ยนสีหน้าเว็บ

**Correct Answer:** A

---

## Question 2

ข้อใดคือตัวอย่างของ Semantic HTML tag?

A. `header`
B. `blue-text`
C. `box-large`
D. `center-content`

**Correct Answer:** A

---

## Question 3

`main` ใช้สำหรับอะไร?

A. ใช้ครอบเนื้อหาหลักของหน้าเว็บ
B. ใช้เปลี่ยนสีพื้นหลัง
C. ใช้สร้างปุ่ม
D. ใช้เชื่อมต่อ JavaScript

**Correct Answer:** A

---

## Question 4

CSS Box Model มอง element บนหน้าเว็บเป็นอะไร?

A. กล่อง
B. Database
C. Function
D. รูปภาพเท่านั้น

**Correct Answer:** A

---

## Question 5

`padding` คืออะไร?

A. ระยะห่างด้านใน element
B. ระยะห่างด้านนอก element
C. เส้นขอบของ element
D. สีของตัวอักษร

**Correct Answer:** A

---

## Question 6

`margin` คืออะไร?

A. ระยะห่างด้านนอก element
B. ระยะห่างด้านใน element
C. ขนาดตัวอักษร
D. สีพื้นหลัง

**Correct Answer:** A

---

## Question 7

ถ้าต้องการให้เนื้อหาด้านใน card ไม่ชิดขอบ ควรใช้ property ใด?

A. `padding`
B. `margin`
C. `text-decoration`
D. `font-family`

**Correct Answer:** A

---

## Question 8

ถ้าต้องการให้ section หนึ่งห่างจาก section ถัดไป ควรใช้ property ใด?

A. `margin`
B. `padding`
C. `color`
D. `line-height`

**Correct Answer:** A

---

## Question 9

ถ้าต้องการเลือก class ชื่อ `feature-card` ใน CSS ต้องเขียนอย่างไร?

A. `.feature-card`
B. `#feature-card`
C. `feature-card()`
D. `<feature-card>`

**Correct Answer:** A

---

## Question 10

ถ้าต้องการเลือก id ชื่อ `hero` ใน CSS ต้องเขียนอย่างไร?

A. `#hero`
B. `.hero`
C. `hero()`
D. `<hero>`

**Correct Answer:** A

---

## Question 11

`max-width` มักใช้เพื่ออะไร?

A. จำกัดความกว้างสูงสุดของ element
B. เปลี่ยนสีปุ่ม
C. เพิ่ม event ให้ปุ่ม
D. อ่านค่าจาก input

**Correct Answer:** A

---

## Question 12

`margin: 0 auto;` มักใช้เพื่ออะไร?

A. จัด block element ให้อยู่กลางหน้าในแนวนอน
B. ทำให้ปุ่มกดได้
C. เพิ่มเส้นขอบให้กล่อง
D. เปลี่ยน font ของหน้าเว็บ

**Correct Answer:** A

---

## Question 13

`display: flex;` ใช้เพื่ออะไร?

A. จัด layout ของ element ลูกให้ง่ายขึ้น
B. เปลี่ยน HTML เป็น JavaScript
C. ใช้เชื่อมต่อ database
D. ใช้สร้างไฟล์ใหม่

**Correct Answer:** A

---

## Question 14

`gap` ใน Flexbox ใช้ทำอะไร?

A. กำหนดระยะห่างระหว่าง element ลูก
B. เปลี่ยนสีตัวอักษร
C. ซ่อน element
D. เพิ่มรูปภาพ

**Correct Answer:** A

---

## Question 15

ข้อใดอธิบาย Box Model ได้ถูกต้องที่สุด?

A. ทุก element มี content, padding, border และ margin
B. ทุก element ต้องเป็นปุ่มเท่านั้น
C. CSS ใช้ได้เฉพาะเปลี่ยนสี
D. HTML ไม่เกี่ยวข้องกับ layout

**Correct Answer:** A

---

# Answer Summary

| Question | Correct Answer |
| -------- | -------------- |
| 1        | A              |
| 2        | A              |
| 3        | A              |
| 4        | A              |
| 5        | A              |
| 6        | A              |
| 7        | A              |
| 8        | A              |
| 9        | A              |
| 10       | A              |
| 11       | A              |
| 12       | A              |
| 13       | A              |
| 14       | A              |
| 15       | A              |

---

# Teacher Notes

Quiz นี้ตั้งใจให้เป็น quiz เบื้องต้นเพื่อเช็กว่า learner เข้าใจ concept หลักของคลาสหรือไม่

หัวข้อที่ควรดูเป็นพิเศษจากคำตอบของนักเรียน:

* เข้าใจความหมายของ Semantic HTML หรือยัง
* แยก `padding` กับ `margin` ได้ไหม
* เข้าใจว่า CSS selector แบบ class ต้องใช้ `.` หรือไม่
* เข้าใจ `max-width`, `margin: 0 auto`, `display: flex` ในระดับภาพรวมหรือยัง

ถ้านักเรียนตอบผิดหลายข้อ ควรให้กลับไปทบทวน:

1. CSS Box Model
2. Padding vs Margin
3. Class Selector
4. Container Layout
5. Flexbox เบื้องต้น
