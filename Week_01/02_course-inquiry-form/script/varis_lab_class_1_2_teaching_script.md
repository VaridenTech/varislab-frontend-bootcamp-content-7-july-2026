# Varis Lab Bootcamp — Class 1 & Class 2 Teaching Script

เอกสารนี้รวมสคริปต์สำหรับสอน **Class 1** และ **Class 2** ของ Full-Stack Software Developer Bootcamp — AI Edition  
เหมาะสำหรับผู้เรียนผู้ใหญ่ / คนทำงาน / คนเปลี่ยนสาย

---

# Class 1: เข้าใจพื้นฐานหน้าเว็บผ่านการสร้าง Professional Profile Card

## ชื่อคลาส

คลาสที่ 1: เข้าใจพื้นฐานหน้าเว็บผ่านการสร้าง Professional Profile Card

## เป้าหมายของคลาส

หลังจบคลาสนี้ ผู้เรียนควรเข้าใจว่า:

1. หน้าเว็บหนึ่งหน้าประกอบขึ้นจาก HTML, CSS และ JavaScript
2. HTML คือโครงสร้างของหน้าเว็บ
3. CSS คือหน้าตาและการจัดวาง
4. JavaScript คือพฤติกรรมและการโต้ตอบกับผู้ใช้
5. Syntax ไม่จำเป็นต้องจำทั้งหมดตั้งแต่วันแรก แต่ต้องเริ่มเข้าใจว่ามันทำหน้าที่อะไร
6. Error เป็นเรื่องปกติของการเขียนโปรแกรม

---

## ก่อนเริ่มคลาส

เปิดหน้าจอเตรียมไว้ 3 อย่าง:

1. Slide หรือภาพรวมคลาส
2. Cursor / VS Code
3. Browser ที่จะเปิดไฟล์ `index.html`

เตรียม folder ไว้ชื่อ:

```text
week-01-professional-profile-card
```

ใน folder ยังไม่ต้องมีไฟล์อะไร ให้สร้างสดในคลาส

---

## 20:00–20:10 — Opening

### พูดเปิดคลาส

สวัสดีครับทุกคน ยินดีต้อนรับเข้าสู่คลาสแรกของ Full-Stack Software Developer Bootcamp — AI Edition นะครับ

ก่อนอื่นผมอยากบอกก่อนว่า คลาสนี้ไม่ได้คาดหวังให้ทุกคนจำ syntax ได้ทั้งหมดตั้งแต่วันแรก และไม่ได้คาดหวังว่าทุกคนจะต้องเขียนโค้ดคล่องทันที

สิ่งที่เราจะเริ่มวันนี้คือการเข้าใจพื้นฐานของ Web Application ว่าหน้าเว็บหนึ่งหน้าประกอบขึ้นมาได้อย่างไร และทำไม HTML, CSS และ JavaScript ถึงเป็นจุดเริ่มต้นสำคัญของการเป็น Web Developer

หลายคนในคลาสนี้อาจมาจากสายงานอื่น บางคนอาจไม่เคยเขียนโค้ดมาก่อน หรือบางคนอาจเคยลองเรียนเองแล้วแต่ยังต่อภาพรวมไม่ติด ไม่เป็นไรเลยครับ

สิ่งสำคัญที่สุดในช่วงแรกไม่ใช่ความเร็ว แต่คือการเข้าใจภาพรวม และกล้าลงมือทำอย่างเป็นขั้นตอน

วันนี้เราจะสร้างหน้าเว็บเล็ก ๆ ที่เรียกว่า Professional Profile Card ซึ่งเป็นเหมือน component พื้นฐานที่สามารถต่อยอดไปเป็นหน้า Portfolio, หน้าโปรไฟล์ผู้สมัคร, หน้าแนะนำคอร์ส หรือส่วนหนึ่งของระบบจริงได้

ขอให้ทุกคนมองคลาสวันนี้เป็นการเริ่มสร้าง mental model ว่า:

HTML คือโครงสร้าง  
CSS คือหน้าตา  
JavaScript คือพฤติกรรมของหน้าเว็บ

ถ้าระหว่างทางเจอ error ไม่ต้องตกใจครับ Error เป็นเรื่องปกติของการเขียนโปรแกรม สิ่งที่เราจะฝึกไปพร้อมกันคือการอ่านปัญหา วิเคราะห์ และแก้ทีละขั้นตอน ซึ่งเป็นทักษะสำคัญกว่าการจำคำสั่งได้ทั้งหมดครับ

---

### ตั้ง Expectation

วันนี้เราจะยังไม่เรียน React, Backend, Database หรือ AI Coding แบบเต็มรูปแบบนะครับ

เพราะก่อนที่เราจะใช้เครื่องมือเหล่านั้นได้ดี เราต้องเข้าใจก่อนว่าเว็บธรรมดาหนึ่งหน้าเกิดขึ้นได้ยังไง

วันนี้ขอให้โฟกัสแค่ 3 อย่าง:

1. หน้าเว็บมีโครงสร้างยังไง
2. CSS ทำให้หน้าเว็บดูดีขึ้นยังไง
3. JavaScript ทำให้หน้าเว็บตอบสนองกับผู้ใช้ยังไง

วันนี้ถ้าจำ syntax ไม่ได้ทั้งหมด ไม่เป็นไรครับ ขอให้เข้าใจว่าแต่ละส่วนทำหน้าที่อะไร

---

## 20:10–20:25 — ภาพรวม Web Page

### พูดนำ

ก่อนเขียนโค้ด ผมอยากให้ทุกคนเห็นภาพก่อนว่า Web Page คืออะไร

เวลาเราเปิดเว็บ เช่น หน้า Login, หน้า Course, หน้า Product, หน้า Dashboard หรือหน้า Portfolio สิ่งที่เราเห็นบนจอคือ Web Page

เว็บจริงอาจดูซับซ้อนมาก แต่ถ้าแยกออกมา มันมักประกอบจากส่วนเล็ก ๆ หลาย ๆ ส่วนรวมกัน เช่น:

- Header
- Card
- Button
- Form
- Menu
- Table
- Profile section
- Product section

วันนี้เราจะเริ่มจากสิ่งเล็ก ๆ ก่อน คือ Profile Card

เพราะ Card เป็นหนึ่งใน component ที่เจอบ่อยมากในงานจริง ไม่ว่าจะเป็นเว็บสมัครงาน เว็บคอร์สออนไลน์ ระบบ CRM หรือ Dashboard หลังบ้าน

---

### อธิบายภาพรวม HTML / CSS / JavaScript

ให้จำภาพนี้ก่อนครับ:

HTML = โครงสร้าง  
CSS = หน้าตา  
JavaScript = พฤติกรรม

เปรียบเทียบง่าย ๆ:

HTML เหมือนโครงกระดูกของหน้าเว็บ  
CSS เหมือนเสื้อผ้า สีสัน และการจัดวาง  
JavaScript เหมือนสมองหรือพฤติกรรม เช่น เมื่อผู้ใช้กดปุ่มแล้วเกิดอะไรขึ้น

ตัวอย่างเช่น ถ้าเรามีปุ่มหนึ่งปุ่ม:

HTML คือการบอกว่า “มีปุ่มอยู่ตรงนี้”  
CSS คือการบอกว่า “ปุ่มนี้สีฟ้า มุมโค้ง ตัวหนังสือหนา”  
JavaScript คือการบอกว่า “ถ้าผู้ใช้กดปุ่ม ให้เปลี่ยนข้อความบนหน้าเว็บ”

วันนี้เราจะทำครบทั้ง 3 ส่วนนี้ แต่ในระดับที่ยังไม่ยากเกินไป

---

## 20:25–20:35 — Show Result First

### สิ่งที่ทำ

เปิดตัวอย่างหน้าเว็บที่ทำเสร็จแล้วให้ดู หรืออธิบายภาพที่กำลังจะสร้าง

### พูด

วันนี้เราจะสร้างการ์ดประมาณนี้ครับ

ในการ์ดจะมี:

- Label บอกเป้าหมาย เช่น Aspiring Software Developer
- ชื่อของเรา
- ข้อความแนะนำตัวสั้น ๆ
- ปุ่มหนึ่งปุ่ม
- เมื่อกดปุ่ม ข้อความจะเปลี่ยน

สิ่งนี้ยังไม่ใช่ระบบใหญ่ แต่ concept ข้างในคือพื้นฐานของเว็บจริง

เดี๋ยวเราจะค่อย ๆ สร้างจากศูนย์ โดยเริ่มจากไฟล์ว่าง ๆ

---

## 20:35–20:55 — สร้าง Project และ HTML

### สิ่งที่ทำ

เปิด Cursor / VS Code แล้วสร้าง folder:

```text
week-01-professional-profile-card
```

สร้างไฟล์ 3 ไฟล์:

```text
index.html
style.css
script.js
```

### พูด

ตอนนี้เราจะสร้าง project แรกของเราครับ

ในโปรเจกต์นี้เราจะมี 3 ไฟล์หลัก:

`index.html` คือโครงสร้างของหน้าเว็บ  
`style.css` คือไฟล์ตกแต่งหน้าตา  
`script.js` คือไฟล์ที่ทำให้หน้าเว็บมี interaction

ให้ทุกคนสร้างไฟล์ตามนี้ก่อนนะครับ

---

### เริ่มเขียน HTML

ให้พิมพ์โค้ดนี้ทีละส่วน ไม่ต้องวางทั้งหมดทีเดียว

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Professional Profile Card</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <main class="profile-card">
      <p class="label">Aspiring Software Developer</p>

      <h1>สวัสดีครับ ผมชื่อ Varis</h1>

      <p id="summary">
        ผมกำลังเริ่มต้นเส้นทางสู่สายงาน Software Developer
        และกำลังเรียนรู้พื้นฐานการสร้าง Web Application
      </p>

      <button id="toggleButton">
        ดูเป้าหมายของฉัน
      </button>
    </main>

    <script src="script.js"></script>
  </body>
</html>
```

---

### อธิบายระหว่างเขียน

ตรงนี้คือไฟล์ HTML ครับ หน้าที่ของ HTML คือการสร้างโครงสร้างของหน้าเว็บ

`<html lang="th">` คือการบอกว่าเอกสารนี้เป็น HTML และภาษาหลักของเนื้อหาเป็นภาษาไทย

`<head>` คือข้อมูลเกี่ยวกับหน้าเว็บ เช่น ชื่อหน้า การตั้งค่า และการเชื่อมต่อไฟล์ CSS

`<body>` คือสิ่งที่ผู้ใช้จะเห็นจริงบนหน้าเว็บ

`<main class="profile-card">` คือพื้นที่หลักของการ์ด และตั้ง class ชื่อ `profile-card`

class ใช้บอก CSS ว่า element นี้ควรมีหน้าตายังไง

`<p id="summary">` ตั้ง id ชื่อ `summary`

id ใช้สำหรับระบุ element แบบเฉพาะเจาะจง ในที่นี้เราจะให้ JavaScript กลับมาหาข้อความนี้ แล้วเปลี่ยนข้อความเมื่อผู้ใช้กดปุ่ม

`<button id="toggleButton">` สร้างปุ่ม และตั้ง id ชื่อ `toggleButton` เพื่อให้ JavaScript รู้ว่าปุ่มไหนคือปุ่มที่ต้องรอฟังการคลิก

`<script src="script.js"></script>` คือการเชื่อมไฟล์ JavaScript เข้ามาในหน้าเว็บ

ถ้าไม่มีบรรทัดนี้ ต่อให้เราเขียน JavaScript ไว้ในไฟล์ `script.js` ปุ่มก็จะยังไม่ทำงาน เพราะ HTML ยังไม่ได้โหลดไฟล์นั้นเข้ามา

---

### จุดที่ควรถามผู้เรียน

ตอนนี้ทุกคนเห็นภาพไหมครับว่า HTML ยังไม่ได้ทำให้เว็บสวยมาก และยังไม่ได้ทำให้ปุ่มทำงาน

HTML แค่บอกว่า “ในหน้านี้มีอะไรบ้าง”

เดี๋ยวขั้นต่อไปเราจะใช้ CSS ทำให้มันดูดีขึ้น

---

## 20:55–21:15 — เขียน CSS

### พูดนำ

ตอนนี้หน้าเว็บเรามีโครงสร้างแล้ว แต่ยังดูธรรมดาอยู่

ขั้นต่อไปเราจะใช้ CSS เพื่อจัดหน้าตา เช่น สี พื้นหลัง ระยะห่าง ขนาดตัวอักษร และรูปทรงของการ์ด

ให้มอง CSS เป็นภาษาที่ใช้บอก browser ว่า element แต่ละตัวควรแสดงผลยังไง

---

### เขียน CSS

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-card {
  width: 460px;
  padding: 32px;
  border-radius: 24px;
  background: #1e293b;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

.label {
  color: #38bdf8;
  font-weight: bold;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

h1 {
  margin: 16px 0;
  font-size: 32px;
}

#summary {
  color: #cbd5e1;
  font-size: 18px;
  line-height: 1.7;
}

button {
  margin-top: 24px;
  border: none;
  border-radius: 999px;
  padding: 12px 24px;
  background: #38bdf8;
  color: #0f172a;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background: #7dd3fc;
}
```

---

### อธิบายระหว่างเขียน

ใน CSS เราจะมี pattern หลัก ๆ แบบนี้ครับ:

```css
selector {
  property: value;
}
```

selector คือสิ่งที่เราต้องการเลือก  
property คือคุณสมบัติที่ต้องการเปลี่ยน  
value คือค่าที่เรากำหนดให้คุณสมบัตินั้น

ตัวอย่าง:

```css
body {
  background: #0f172a;
  color: white;
}
```

แปลว่าเลือก `body` แล้วกำหนดพื้นหลังเป็นสีเข้ม และตัวหนังสือเป็นสีขาว

`.profile-card` จุดข้างหน้าแปลว่าเรากำลังเลือก class ชื่อ `profile-card`

`#summary` เครื่องหมาย `#` แปลว่าเรากำลังเลือก id ชื่อ `summary`

ให้จำแบบง่าย ๆ ก่อนนะครับ:

`.` ใช้เลือก class  
`#` ใช้เลือก id

วันนี้ยังไม่ต้องจำ CSS ทุก property ได้ทั้งหมด ขอให้เข้าใจว่า CSS คือการเลือก element แล้วบอกว่ามันควรหน้าตาเป็นยังไง

---

### จุดที่ควรถามผู้เรียน

ตอนนี้ถ้าเราเปลี่ยน `background` ของ `body` จะเกิดอะไรขึ้น?

ลองเปลี่ยนจาก:

```css
background: #0f172a;
```

เป็นสีอื่น แล้วดูผลลัพธ์ครับ

นี่คือวิธีเรียน CSS ที่ดีที่สุด คือแก้ค่า แล้วดูผลลัพธ์บนหน้าจอ

---

## 21:15–21:30 — เขียน JavaScript

### พูดนำ

ตอนนี้เรามีหน้าเว็บที่มีโครงสร้างและหน้าตาแล้ว

แต่ปุ่มของเรายังกดแล้วไม่เกิดอะไรขึ้น

ขั้นต่อไปเราจะใช้ JavaScript เพื่อทำให้ปุ่มนี้มีพฤติกรรม

ในตัวอย่างวันนี้ เราจะทำสิ่งง่าย ๆ คือ:

เมื่อผู้ใช้กดปุ่ม ให้ข้อความใน card เปลี่ยน

---

### เขียน JavaScript

```js
const summary = document.getElementById("summary");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", function () {
  summary.textContent =
    "เป้าหมายของฉันคือการสร้างโปรเจกต์จริง เข้าใจพื้นฐาน Full-Stack และเตรียม Portfolio สำหรับสมัครงานสาย Developer";
});
```

---

### อธิบายระหว่างเขียน

`const summary = document.getElementById("summary");`

แปลว่า JavaScript ไปหา element ในหน้าเว็บที่มี id ชื่อ `summary` แล้วเก็บไว้ในตัวแปรชื่อ `summary`

`const toggleButton = document.getElementById("toggleButton");`

แปลว่า JavaScript ไปหาปุ่มที่มี id ชื่อ `toggleButton` แล้วเก็บไว้ในตัวแปรชื่อ `toggleButton`

`toggleButton.addEventListener("click", function () { ... })`

แปลว่า ให้ปุ่มนี้รอฟังเหตุการณ์ click ถ้าผู้ใช้กดปุ่ม ให้ทำงานที่อยู่ใน function นี้

`summary.textContent = "ข้อความใหม่";`

แปลว่า เปลี่ยนข้อความของ element `summary` ให้เป็นข้อความใหม่

ถ้าสรุปเป็นภาษาคน:

1. ไปหาข้อความที่เราต้องการเปลี่ยน
2. ไปหาปุ่มที่ผู้ใช้จะกด
3. ถ้าผู้ใช้กดปุ่ม
4. ให้เปลี่ยนข้อความ

นี่คือพื้นฐานของ interaction บนหน้าเว็บ

---

### ย้ำเรื่อง syntax

ตรงนี้ไม่ต้องกังวลถ้ายังจำ `addEventListener` ไม่ได้ทั้งหมดนะครับ

วันนี้สิ่งที่สำคัญกว่าคือเข้าใจว่า JavaScript สามารถ “จับ element” และ “ตอบสนองต่อ action ของผู้ใช้” ได้

Syntax เดี๋ยวเราจะค่อย ๆ เห็นซ้ำและฝึกใช้บ่อยขึ้น

---

## 21:30–21:40 — Mini Challenge

### พูดนำ

ตอนนี้ผมอยากให้ทุกคนลองปรับให้เป็นของตัวเองประมาณ 10 นาทีครับ

ยังไม่ต้องทำให้ perfect เป้าหมายคือให้ลองแก้โค้ดแล้วดูผลลัพธ์

### Challenge

ให้ทุกคนลองทำ 4 อย่างนี้:

1. เปลี่ยนชื่อใน `h1` เป็นชื่อของตัวเอง
2. เปลี่ยน label เป็นเป้าหมายของตัวเอง เช่น `Aspiring Frontend Developer`
3. เปลี่ยนข้อความใน `summary` ให้เป็นประโยคแนะนำตัวเอง
4. เปลี่ยนข้อความที่แสดงหลังจากกดปุ่ม

ถ้าใครทำได้เร็ว ให้ลองเปลี่ยนสี card หรือสีปุ่มด้วย

---

### ระหว่างผู้เรียนทำ

ถ้าใครเจอปัญหา ไม่ต้องตกใจนะครับ ให้ดูว่าแก้ตรงไหนล่าสุด แล้วผลลัพธ์เปลี่ยนยังไง

ถ้าหน้าเว็บไม่เปลี่ยน ลองเช็ก 3 อย่างนี้ก่อน:

1. Save ไฟล์แล้วหรือยัง
2. Refresh browser แล้วหรือยัง
3. แก้ถูกไฟล์หรือเปล่า

นี่คือ process จริงของ Developer ครับ แก้ทีละจุด แล้วดูผลลัพธ์

---

## 21:40–21:52 — Error Demo

### พูดนำ

ก่อนจบวันนี้ ผมอยากตั้งใจทำ error ให้ดูครับ

เพราะเวลาทุกคนกลับไปทำเอง สิ่งที่เจอแน่นอนคือ error หรือบางครั้งกดแล้วไม่เกิดอะไรขึ้น

การเจอ error ไม่ใช่เรื่องแปลก สิ่งสำคัญคือเราต้องค่อย ๆ ไล่ว่าปัญหาน่าจะอยู่ตรงไหน

---

### Error 1: id ไม่ตรงกัน

ใน JavaScript แกล้งแก้:

```js
const summary = document.getElementById("summaries");
```

แทนที่จะเป็น:

```js
const summary = document.getElementById("summary");
```

แล้วลองกดปุ่ม

### อธิบาย

ตอนนี้ JavaScript พยายามหา element ที่มี id ชื่อ `summaries`

แต่ใน HTML ของเรามี id ชื่อ `summary`

เพราะฉะนั้น JavaScript หา element ไม่เจอ

นี่คือ error ที่เจอบ่อยมากในการเขียนเว็บ คือชื่อใน HTML กับ JavaScript สะกดไม่ตรงกัน

วิธีคิดคือ:

ถ้า JavaScript หาอะไรบางอย่างไม่เจอ ให้กลับไปเช็กว่า id หรือ class ใน HTML สะกดตรงกับที่เราเขียนใน JavaScript ไหม

---

### Error 2: ลืมเชื่อม script.js

ใน HTML ให้ comment หรือลบบรรทัดนี้ออก:

```html
<script src="script.js"></script>
```

แล้วลองกดปุ่ม

### อธิบาย

ตอนนี้ปุ่มไม่ทำงาน เพราะ HTML ไม่ได้โหลดไฟล์ JavaScript เข้ามา

ต่อให้เราเขียนโค้ดใน `script.js` ถูกทั้งหมด แต่ถ้า HTML ไม่ได้เชื่อมไฟล์นี้เข้ามา browser ก็จะไม่รู้ว่าต้องรัน JavaScript ของเรา

นี่คือสิ่งที่อยากให้จำ:

ถ้า CSS ไม่ทำงาน ให้เช็กว่า link CSS ถูกไหม  
ถ้า JavaScript ไม่ทำงาน ให้เช็กว่า script ถูกโหลดเข้ามาไหม  
ถ้ากดปุ่มแล้วไม่เกิดอะไร ให้เช็ก id และ event listener

---

## 21:52–22:00 — Wrap-up

### สรุปท้ายคลาส

วันนี้เราเริ่มจาก project เล็กมาก แต่ concept ที่อยู่ข้างในคือพื้นฐานของ Web Development จริง

เราเห็นแล้วว่า:

HTML ใช้สร้างโครงสร้างของหน้าเว็บ  
CSS ใช้ควบคุมหน้าตา สี ระยะห่าง และ layout  
JavaScript ใช้เพิ่มการโต้ตอบกับผู้ใช้

ถึงแม้วันนี้เราจะยังไม่ได้เขียนระบบใหญ่ แต่สิ่งที่ทุกคนทำคือจุดเริ่มต้นของ component ที่ใช้ในเว็บจริงได้ ไม่ว่าจะเป็นหน้า Portfolio, หน้า Profile, หน้า Course, หน้า Product หรือระบบหลังบ้านต่าง ๆ

สิ่งที่อยากให้จำคือ การเป็น Developer ไม่ได้เริ่มจากการจำทุกอย่างได้ แต่เริ่มจากการเข้าใจภาพรวม ทดลองแก้ ทดลองเปลี่ยน และค่อย ๆ สะสมความมั่นใจจากการลงมือทำ

ถ้าวันนี้ยังจำ syntax ไม่ได้ทั้งหมด ไม่เป็นไรเลยครับ

วันนี้ขอให้จำแค่ภาพนี้ก่อน:

HTML = โครงสร้าง  
CSS = หน้าตา  
JavaScript = พฤติกรรม

---

## Homework Class 1

### Assignment: Personal Developer Intro Card

ให้ทุกคนปรับ Professional Profile Card นี้ให้เป็นของตัวเอง

### Requirements

1. เปลี่ยนชื่อเป็นชื่อของตัวเอง
2. เปลี่ยน label เป็นเป้าหมายของตัวเอง เช่น Aspiring Software Developer
3. เขียน summary แนะนำตัวเอง 2–3 บรรทัด
4. ทำให้ปุ่มกดแล้วเปลี่ยนข้อความได้
5. ปรับสีหรือ style อย่างน้อย 1 จุด

### Bonus

1. เพิ่มปุ่ม Reset ให้ข้อความกลับมาเหมือนเดิม
2. เพิ่ม section เล็ก ๆ เช่น ประสบการณ์เดิม หรือเป้าหมายหลังเรียนจบ
3. ปรับ layout ให้ดู professional ขึ้น

### Reflection ที่ต้องส่งพร้อมงาน

1. วันนี้เข้าใจ HTML, CSS, JavaScript ต่างกันยังไง?
2. ตอนทำงานเจอ error อะไรไหม?
3. แก้ปัญหายังไง?
4. อยากให้ช่วย review จุดไหน?

### Closing

คลาสหน้าผมจะพาเราลงรายละเอียดมากขึ้นเกี่ยวกับ HTML structure, CSS layout และพื้นฐานการคิดแบบโปรแกรมเมอร์

วันนี้ขอให้ทุกคนกลับไปลองปรับงานเองครับ อย่ากลัวพัง เพราะการทำให้พังแล้วค่อยแก้ คือวิธีเรียนเขียนโค้ดที่ดีที่สุดวิธีหนึ่ง

เจอกันคลาสหน้าครับ

---

# Class 2: สร้างฟอร์มรับข้อมูล และเริ่มคิดแบบ JavaScript

## ชื่อคลาส

คลาสที่ 2: สร้างฟอร์มรับข้อมูล และเริ่มคิดแบบ JavaScript

## เป้าหมายของคลาส

หลังจบคลาส นักเรียนควรเข้าใจว่า:

1. HTML Form ใช้รับข้อมูลจากผู้ใช้
2. `input`, `label`, `select`, `textarea` ทำหน้าที่อะไร
3. JavaScript อ่านค่าจาก input ได้อย่างไร
4. ตัวแปรใช้เก็บข้อมูลชั่วคราวได้อย่างไร
5. `if/else` ใช้ตรวจสอบเงื่อนไขพื้นฐานได้อย่างไร
6. สามารถแสดงผลลัพธ์กลับไปบนหน้าเว็บได้

---

## Project วันนี้

### Course Inquiry Form Card

ให้นักเรียนสร้างฟอร์มเล็ก ๆ สำหรับกรอกข้อมูลความสนใจเรียน Bootcamp

ตัวอย่างฟอร์ม:

```text
ชื่อ:
เป้าหมาย:
พื้นฐานตอนนี้:
ข้อความเพิ่มเติม:

[ส่งข้อมูล]
```

เมื่อกดปุ่ม ระบบจะแสดงข้อความสรุป เช่น:

```text
สวัสดีครับคุณ Man
เป้าหมายของคุณคือ เปลี่ยนสายงานเป็น Developer
ระดับพื้นฐานตอนนี้: เริ่มจากศูนย์
ขอบคุณที่ส่งข้อมูลเข้ามาครับ
```

นี่จะช่วยให้เด็กเข้าใจว่า JavaScript ไม่ได้มีไว้แค่กดปุ่มเปลี่ยนข้อความ แต่สามารถ:

รับข้อมูล → ตรวจสอบ → ประมวลผล → แสดงผล

---

## โครงสร้างคลาส 2 ชั่วโมง

| เวลา | เนื้อหา | เป้าหมาย |
|---|---|---|
| 20:00–20:10 | Recap คลาสแรก | ทบทวน HTML/CSS/JS |
| 20:10–20:25 | Form ในเว็บจริงใช้ทำอะไร | เชื่อมกับงานจริง |
| 20:25–20:50 | HTML Form Structure | input, label, select, textarea |
| 20:50–21:10 | CSS Styling | ทำให้ฟอร์มดู professional |
| 21:10–21:35 | JavaScript: อ่านค่าจากฟอร์ม | value, variable, event |
| 21:35–21:50 | if/else validation | เช็กข้อมูลว่าง |
| 21:50–22:00 | Challenge + Homework | ให้ปรับเป็นของตัวเอง |

---

## Concept หลักที่ควรสอน

### HTML

- `form`
- `label`
- `input`
- `select`
- `textarea`
- `button`

### CSS

- form layout
- input styling
- spacing
- focus state
- result box

### JavaScript

- `const`
- `document.getElementById`
- `addEventListener`
- `event.preventDefault()`
- `.value`
- `.trim()`
- `if / else`
- `textContent`

---

## Opening Script

สวัสดีครับทุกคน วันนี้เราจะต่อจากคลาสที่แล้วที่เราได้สร้าง Professional Profile Card กันไปแล้ว

คลาสที่แล้วเราเห็นภาพว่า HTML คือโครงสร้าง CSS คือหน้าตา และ JavaScript คือพฤติกรรมของหน้าเว็บ

วันนี้เราจะขยับขึ้นมาอีกหนึ่งขั้น จากหน้าเว็บที่แสดงข้อมูลเฉย ๆ ไปสู่หน้าเว็บที่สามารถรับข้อมูลจากผู้ใช้ได้

สิ่งที่เราจะสร้างวันนี้คือ Form ซึ่งเป็นหนึ่งในส่วนที่เจอบ่อยที่สุดใน Web Application จริง ไม่ว่าจะเป็นหน้า Login, หน้าสมัครเรียน, หน้าสมัครงาน, หน้า Checkout, Contact Form หรือระบบหลังบ้านของบริษัท

เป้าหมายของวันนี้ไม่ใช่ให้ทุกคนจำ syntax ของ form ได้ทั้งหมด แต่คือให้เข้าใจ flow สำคัญของโปรแกรม:

รับข้อมูล → เก็บข้อมูล → ตรวจสอบข้อมูล → แสดงผลลัพธ์

นี่คือพื้นฐานของ logic ที่เราจะใช้ต่อไปใน React, Backend, Database และระบบ Full-Stack จริงในอนาคตครับ

---

## Step 1: สร้าง Project

ให้สร้าง folder ใหม่:

```text
week-01-course-inquiry-form
```

ข้างในมี 3 ไฟล์:

```text
index.html
style.css
script.js
```

---

## Step 2: HTML

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Course Inquiry Form</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <main class="page">
      <section class="form-card">
        <p class="label">Varis Lab Bootcamp</p>

        <h1>แบบฟอร์มความสนใจเรียน</h1>

        <p class="description">
          กรอกข้อมูลเบื้องต้น เพื่อสรุปเป้าหมายการเรียนของคุณ
        </p>

        <form id="inquiryForm">
          <div class="form-group">
            <label for="fullName">ชื่อของคุณ</label>
            <input
              id="fullName"
              type="text"
              placeholder="เช่น Man"
            />
          </div>

          <div class="form-group">
            <label for="goal">เป้าหมายของคุณ</label>
            <input
              id="goal"
              type="text"
              placeholder="เช่น เปลี่ยนสายงานเป็น Developer"
            />
          </div>

          <div class="form-group">
            <label for="level">พื้นฐานตอนนี้</label>
            <select id="level">
              <option value="">เลือกระดับพื้นฐาน</option>
              <option value="เริ่มจากศูนย์">เริ่มจากศูนย์</option>
              <option value="เคยเรียนมาบ้าง">เคยเรียนมาบ้าง</option>
              <option value="เคยทำโปรเจกต์เล็ก ๆ">เคยทำโปรเจกต์เล็ก ๆ</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">ข้อความเพิ่มเติม</label>
            <textarea
              id="message"
              rows="4"
              placeholder="อยากบอกอะไรเพิ่มเติมเกี่ยวกับเป้าหมายของคุณ"
            ></textarea>
          </div>

          <button type="submit">
            ส่งข้อมูล
          </button>
        </form>

        <div id="result" class="result-box">
          กรุณากรอกข้อมูล แล้วกดส่งข้อมูล
        </div>
      </section>
    </main>

    <script src="script.js"></script>
  </body>
</html>
```

---

## วิธีอธิบาย HTML

วันนี้เราเริ่มเห็น HTML ที่ใกล้กับเว็บจริงขึ้นแล้ว

`form` คือพื้นที่สำหรับรับข้อมูลจากผู้ใช้

`label` คือข้อความบอกว่าช่องนี้ต้องกรอกอะไร

`input` คือช่องกรอกข้อมูลแบบสั้น

`select` คือช่องให้เลือกจากตัวเลือก

`textarea` คือช่องกรอกข้อความยาว

`button type="submit"` คือปุ่มสำหรับส่งฟอร์ม

และ `result` คือพื้นที่ที่เราจะใช้แสดงผลลัพธ์หลังจาก JavaScript ประมวลผลข้อมูลแล้ว

จุดที่ควรย้ำ:

```text
label for="fullName" เชื่อมกับ input id="fullName"

id สำคัญมาก เพราะ JavaScript จะใช้ id เพื่อไปหยิบค่าจากช่องกรอกแต่ละช่อง
```

---

## Step 3: CSS

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: white;
}

.page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
}

.form-card {
  width: 520px;
  padding: 32px;
  border-radius: 24px;
  background: #1e293b;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.35);
}

.label {
  margin: 0 0 12px;
  color: #38bdf8;
  font-weight: bold;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

h1 {
  margin: 0 0 12px;
  font-size: 32px;
}

.description {
  margin: 0 0 24px;
  color: #cbd5e1;
  line-height: 1.7;
}

.form-group {
  margin-bottom: 18px;
}

label {
  display: block;
  margin-bottom: 8px;
  color: #e2e8f0;
  font-weight: bold;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid #334155;
  border-radius: 12px;
  padding: 12px 14px;
  background: #0f172a;
  color: white;
  font-size: 16px;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #38bdf8;
}

button {
  width: 100%;
  border: none;
  border-radius: 999px;
  padding: 14px 24px;
  background: #38bdf8;
  color: #0f172a;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background: #7dd3fc;
}

.result-box {
  margin-top: 24px;
  padding: 18px;
  border-radius: 16px;
  background: #0f172a;
  color: #cbd5e1;
  line-height: 1.7;
}
```

---

## วิธีอธิบาย CSS

CSS วันนี้ไม่ได้มีเป้าหมายให้ทุกคนจำ property ทั้งหมด

แต่อยากให้เห็นว่าเราสามารถเลือก element หลายตัวพร้อมกันได้ เช่น `input`, `select`, `textarea`

เพราะทั้งสามตัวนี้เป็นช่องรับข้อมูลเหมือนกัน เราเลยให้ style คล้ายกัน

ส่วน `:focus` คือสถานะเวลาผู้ใช้คลิกเข้าไปในช่องกรอกข้อมูล

นี่เป็นตัวอย่างเล็ก ๆ ของ user experience หรือ UX ที่ทำให้ผู้ใช้รู้ว่าตอนนี้กำลังกรอกช่องไหนอยู่

---

## Step 4: JavaScript อ่านค่าจากฟอร์ม

```js
const inquiryForm = document.getElementById("inquiryForm");
const fullNameInput = document.getElementById("fullName");
const goalInput = document.getElementById("goal");
const levelSelect = document.getElementById("level");
const messageInput = document.getElementById("message");
const resultBox = document.getElementById("result");

inquiryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = fullNameInput.value;
  const goal = goalInput.value;
  const level = levelSelect.value;
  const message = messageInput.value;

  resultBox.textContent =
    "สวัสดีครับคุณ " +
    fullName +
    " เป้าหมายของคุณคือ " +
    goal +
    " ระดับพื้นฐานตอนนี้คือ " +
    level +
    " ข้อความเพิ่มเติม: " +
    message;
});
```

---

## วิธีอธิบาย JavaScript รอบแรก

ตอนนี้ JavaScript ของเราทำงานเยอะกว่าคลาสที่แล้วนิดหนึ่ง

คลาสที่แล้วเราแค่กดปุ่มแล้วเปลี่ยนข้อความ

แต่วันนี้เราให้ JavaScript อ่านค่าจากหลายช่อง แล้วเอาข้อมูลเหล่านั้นมาประกอบเป็นข้อความใหม่

บรรทัดนี้คือการหยิบ form:

```js
const inquiryForm = document.getElementById("inquiryForm");
```

บรรทัดนี้คือการรอฟังว่า form ถูก submit เมื่อไหร่:

```js
inquiryForm.addEventListener("submit", function (event) {
```

ส่วน `event.preventDefault()` คือการบอก browser ว่า:

อย่าเพิ่ง reload หน้าเว็บหลังจากกด submit

เพราะปกติ HTML form จะพยายาม submit แล้ว refresh หน้า แต่วันนี้เราต้องการให้ JavaScript จัดการข้อมูลบนหน้าเดิม

`.value` คือค่าที่ผู้ใช้กรอกหรือเลือกไว้ในช่องนั้น

เช่น ถ้าผู้ใช้กรอกชื่อว่า Man

`fullNameInput.value` ก็จะได้ค่าเป็น Man

อธิบายตัวแปร:

```js
const fullName = fullNameInput.value;
```

บรรทัดนี้แปลว่า:

เอาค่าจากช่องชื่อ มาเก็บไว้ในตัวแปรชื่อ `fullName`

ตัวแปรคือที่เก็บข้อมูลชั่วคราวระหว่างที่โปรแกรมกำลังทำงาน

---

## Step 5: ปรับ JavaScript ให้ดีขึ้นด้วย Template Literal

ถ้าผู้เรียนเริ่มตามทัน ให้ refactor เป็นแบบนี้:

```js
const inquiryForm = document.getElementById("inquiryForm");
const fullNameInput = document.getElementById("fullName");
const goalInput = document.getElementById("goal");
const levelSelect = document.getElementById("level");
const messageInput = document.getElementById("message");
const resultBox = document.getElementById("result");

inquiryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = fullNameInput.value;
  const goal = goalInput.value;
  const level = levelSelect.value;
  const message = messageInput.value;

  resultBox.textContent = `สวัสดีครับคุณ ${fullName}
เป้าหมายของคุณคือ ${goal}
ระดับพื้นฐานตอนนี้คือ ${level}
ข้อความเพิ่มเติม: ${message}`;
});
```

อธิบายสั้น ๆ:

เครื่องหมาย backtick ` ` ช่วยให้เราแทรกค่าตัวแปรเข้าไปในข้อความได้ง่ายขึ้น

`${fullName}` แปลว่าเอาค่าของตัวแปร `fullName` มาใส่ตรงนี้

ถ้ากลัวเยอะเกินไป ไม่ต้องสอนก็ได้ เก็บไว้ท้ายคลาสเป็น optional

---

## Step 6: เพิ่ม if/else Validation

นี่คือส่วนสำคัญของคลาสนี้ เพราะเริ่มสอน logic จริง

```js
const inquiryForm = document.getElementById("inquiryForm");
const fullNameInput = document.getElementById("fullName");
const goalInput = document.getElementById("goal");
const levelSelect = document.getElementById("level");
const messageInput = document.getElementById("message");
const resultBox = document.getElementById("result");

inquiryForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = fullNameInput.value.trim();
  const goal = goalInput.value.trim();
  const level = levelSelect.value;
  const message = messageInput.value.trim();

  if (fullName === "" || goal === "" || level === "") {
    resultBox.textContent =
      "กรุณากรอกชื่อ เป้าหมาย และเลือกระดับพื้นฐานให้ครบก่อนส่งข้อมูล";
    return;
  }

  resultBox.textContent = `สวัสดีครับคุณ ${fullName}
เป้าหมายของคุณคือ ${goal}
ระดับพื้นฐานตอนนี้คือ ${level}
ข้อความเพิ่มเติม: ${message || "ไม่มีข้อความเพิ่มเติม"}`;
});
```

---

## วิธีสอน if/else

ตอนนี้เราจะเริ่มคิดแบบโปรแกรมมากขึ้น

ในเว็บจริง เราไม่ควรปล่อยให้ผู้ใช้กดส่งฟอร์มทั้งที่ยังไม่กรอกข้อมูลสำคัญ

เราจึงต้องตรวจสอบเงื่อนไขก่อน

`if` แปลว่า “ถ้า”

ในตัวอย่างนี้:

ถ้าชื่อว่าง หรือเป้าหมายว่าง หรือยังไม่ได้เลือกระดับพื้นฐาน  
ให้แสดงข้อความเตือน แล้วหยุดการทำงาน

เครื่องหมาย `||` แปลว่า “หรือ”

ดังนั้นเงื่อนไขนี้แปลเป็นภาษาคนได้ว่า:

ถ้า `fullName` ว่าง  
หรือ `goal` ว่าง  
หรือ `level` ว่าง  
ให้แจ้งเตือนผู้ใช้

`return` ในที่นี้แปลว่า หยุดการทำงานของ function ตรงนี้

ถ้าข้อมูลยังไม่ครบ เราไม่ต้องการให้ JavaScript ทำงานต่อไปถึงส่วนแสดงผลลัพธ์

`.trim()` ใช้ตัดช่องว่างหน้าหลังข้อความ

เช่น ถ้าผู้ใช้กด spacebar หลายครั้ง แต่ไม่ได้พิมพ์อะไรจริง ๆ เราไม่ควรมองว่านั่นคือข้อมูลที่ถูกต้อง

---

## Mini Challenge

ให้เวลา 10–15 นาที

### Challenge 1

เปลี่ยนข้อความใน form ให้เป็นฟอร์มของตัวเอง เช่น Job Application Form หรือ Portfolio Contact Form

### Challenge 2

เพิ่ม input ใหม่ 1 ช่อง เช่น email หรือ phone

### Challenge 3

ให้ JavaScript อ่านค่าจากช่องใหม่ แล้วแสดงใน result box

### Challenge 4

เพิ่ม validation ว่าช่องใหม่ต้องไม่ว่าง

### Bonus

ถ้าพื้นฐานเป็น “เริ่มจากศูนย์” ให้แสดงข้อความให้กำลังใจพิเศษ เช่น:

“ไม่เป็นไรครับ Bootcamp นี้ออกแบบมาสำหรับการเริ่มต้นแบบเป็นขั้นตอน”

ตัวอย่าง bonus logic:

```js
let extraMessage = "";

if (level === "เริ่มจากศูนย์") {
  extraMessage =
    "ไม่เป็นไรครับ Bootcamp นี้ออกแบบมาให้เริ่มอย่างเป็นขั้นตอน";
}

resultBox.textContent = `สวัสดีครับคุณ ${fullName}
เป้าหมายของคุณคือ ${goal}
ระดับพื้นฐานตอนนี้คือ ${level}
${extraMessage}`;
```

---

## Error Demo ที่ควรทำให้ดู

### Error 1: ลืม `event.preventDefault()`

ลบ:

```js
event.preventDefault();
```

แล้วกด submit

อธิบาย:

ถ้าไม่มี `event.preventDefault()` หน้าเว็บจะ refresh ทันทีหลัง submit

ผลคือเราอาจไม่เห็น result ที่ JavaScript แสดง หรือเห็นแว้บเดียวแล้วหายไป

นี่คือ behavior ปกติของ form ใน HTML

---

### Error 2: id ไม่ตรงกัน

HTML:

```html
<input id="fullName" />
```

แต่ JS เขียนผิด:

```js
const fullNameInput = document.getElementById("name");
```

อธิบาย:

JavaScript หา id ชื่อ `name` แต่ใน HTML ไม่มี id นี้

ดังนั้นเวลา form ทำงาน มันจะอ่านค่าจากช่องนี้ไม่ได้

เวลาเจอปัญหา JavaScript ไม่ทำงาน ให้เช็ก id ใน HTML กับ JavaScript ก่อนเสมอ

---

### Error 3: ลืม `.value`

เขียนผิด:

```js
const fullName = fullNameInput;
```

แทนที่จะเป็น:

```js
const fullName = fullNameInput.value;
```

อธิบาย:

`fullNameInput` คือตัว input ทั้งกล่อง

แต่ `fullNameInput.value` คือค่าที่ผู้ใช้พิมพ์เข้าไปในกล่อง

ถ้าเราต้องการข้อมูลที่ผู้ใช้กรอก ต้องใช้ `.value`

---

## Closing Script

วันนี้เราเริ่มขยับจากหน้าเว็บที่แสดงข้อมูลเฉย ๆ ไปสู่หน้าเว็บที่รับข้อมูลจากผู้ใช้ได้แล้ว

สิ่งที่เราเรียนวันนี้สำคัญมาก เพราะ Web Application จำนวนมากมี pattern คล้ายกัน:

รับข้อมูลจากผู้ใช้  
ตรวจสอบว่าข้อมูลครบไหม  
ประมวลผลข้อมูล  
แสดงผลลัพธ์กลับไปให้ผู้ใช้เห็น

วันนี้เราได้ใช้ HTML Form เพื่อรับข้อมูล ใช้ CSS เพื่อทำให้ฟอร์มดูเป็นระบบ และใช้ JavaScript เพื่ออ่านค่าจาก input เก็บไว้ในตัวแปร ตรวจสอบเงื่อนไขด้วย if และแสดงผลลัพธ์บนหน้าเว็บ

ถ้ายังจำ syntax ไม่ได้ทั้งหมด ไม่เป็นไรครับ แต่ขอให้จำ flow นี้ให้ได้:

ผู้ใช้กรอกข้อมูล → กดปุ่ม submit → JavaScript อ่านค่า → ตรวจสอบ → แสดงผล

นี่คือ logic พื้นฐานที่จะต่อยอดไปสู่ React Form, API Request, Backend Validation และ Database ในอนาคต

การบ้านคือให้ทุกคนปรับฟอร์มนี้ให้เป็นของตัวเอง เพิ่มช่องกรอกข้อมูลอย่างน้อย 1 ช่อง และเพิ่ม validation อย่างน้อย 1 จุดครับ

---

## Homework Class 2

### Assignment Title

```text
W01.02 — Assignment: Personal Inquiry Form
```

### Project Brief

ให้นักเรียนสร้างหรือปรับฟอร์มจากคลาสวันนี้ให้เป็นฟอร์มของตัวเอง

ตัวอย่าง:

- Developer Goal Form
- Portfolio Contact Form
- Job Application Mini Form
- Course Inquiry Form

### Requirements

1. มี input สำหรับชื่อ
2. มี input สำหรับเป้าหมาย
3. มี select สำหรับเลือกระดับพื้นฐาน
4. เพิ่มช่องใหม่อย่างน้อย 1 ช่อง เช่น email, phone, skill หรือ expected role
5. เมื่อกด submit ต้องแสดงผลลัพธ์บนหน้าเว็บ
6. ต้องมี validation ว่าช่องสำคัญต้องไม่ว่าง
7. ปรับ style ให้ดูเป็นของตัวเอง

### Reflection

ตอบคำถามสั้น ๆ:

1. วันนี้เข้าใจคำว่า variable เพิ่มขึ้นอย่างไร?
2. if ใช้ทำอะไร?
3. .value ใช้ทำอะไร?
4. เจอ error อะไร และแก้อย่างไร?
5. อยากให้ review จุดไหนของโค้ด?

---

## Quiz หลัง Class 2

### Question 1

HTML form ใช้ทำอะไร?

A. ใช้รับข้อมูลจากผู้ใช้  
B. ใช้เปลี่ยนสีพื้นหลังเท่านั้น  
C. ใช้เก็บข้อมูลลง database โดยอัตโนมัติ  
D. ใช้แทน browser  

Correct Answer: A

### Question 2

.value ใช้สำหรับอะไร?

A. อ่านค่าที่ผู้ใช้กรอกหรือเลือกใน input  
B. เปลี่ยนสีของปุ่ม  
C. สร้างไฟล์ใหม่  
D. เปิด browser  

Correct Answer: A

### Question 3

event.preventDefault() ในตัวอย่างวันนี้ใช้เพื่ออะไร?

A. ป้องกันไม่ให้ form refresh หน้าเว็บทันที  
B. ทำให้ปุ่มใหญ่ขึ้น  
C. เปลี่ยน font  
D. ลบข้อมูลใน database  

Correct Answer: A

### Question 4

if ใช้ทำอะไร?

A. ใช้ตรวจสอบเงื่อนไข  
B. ใช้จัดสี  
C. ใช้สร้าง HTML file  
D. ใช้เปิด Terminal  

Correct Answer: A

### Question 5

ถ้า JavaScript อ่านค่า input ไม่ได้ ควรเช็กอะไรเป็นอย่างแรก?

A. id ใน HTML ตรงกับ JavaScript หรือไม่  
B. สีพื้นหลังสวยหรือไม่  
C. ชื่อ folder ยาวเกินไปหรือไม่  
D. มีรูปภาพหรือไม่  

Correct Answer: A

---

# LMS Content ที่ควรสร้างหลังคลาส

## หลัง Class 1

```text
Module: Week 1 — พื้นฐาน Web และ Programming Logic

W01.01 — Recording: Professional Profile Card [Video]
W01.02 — Notes: HTML, CSS, JavaScript แบ่งหน้าที่กันยังไง [Text]
W01.03 — Code Example: Professional Profile Card [Text]
W01.04 — Quiz: HTML, CSS, JavaScript Basics [Quiz]
W01.05 — Assignment: Personal Developer Intro Card [Project]
```

### Attachments

```text
- slide PDF
- starter-code.zip
- completed-code.zip
- assignment-checklist.pdf
```

---

## หลัง Class 2

```text
Module: Week 1 — พื้นฐาน Web และ Programming Logic

W01.06 — Recording: สร้างฟอร์มรับข้อมูล และเริ่มคิดแบบ JavaScript [Video]
W01.07 — Notes: HTML Form, Input และ JavaScript Value [Text]
W01.08 — Code Example: Course Inquiry Form [Text]
W01.09 — Quiz: Form, Variable และ if/else [Quiz]
W01.10 — Assignment: Personal Inquiry Form [Project]
```

### Attachments

```text
- slide PDF
- starter-code.zip
- completed-code.zip
- assignment-checklist.pdf
```

---

# สิ่งที่ยังไม่ควรสอนใน 2 คลาสแรก

เพื่อไม่ให้ผู้เรียน overload ยังไม่ควรสอนลึกเรื่อง:

- React
- TypeScript แบบจริงจัง
- Git command ลึก ๆ
- Backend
- API
- Database
- Deployment
- AI coding แบบให้ generate ทั้งโปรเจกต์
- Array
- Object ลึก ๆ
- Loop
- Fetch API
- Validation library

ให้จบ 2 คลาสแรกด้วยความเข้าใจว่า:

```text
HTML = โครงสร้าง
CSS = หน้าตา
JavaScript = พฤติกรรม

input รับข้อมูล
.value อ่านข้อมูล
variable เก็บข้อมูล
if ตรวจสอบข้อมูล
textContent แสดงผลลัพธ์
```
