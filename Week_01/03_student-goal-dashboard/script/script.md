# Week 1 — Day 3 Content

## Live Lab: Debugging, Manual Logic และ Mini Student Dashboard

## ชื่อคลาส

**Day 3: ฝึกคิดแบบ Developer ผ่านการ Debug และจัดการข้อมูลเบื้องต้น**

หรือชื่อในระบบเรียน:

**W01.03 — Live Lab: Debugging, Loops, Arrays & Objects**

---

# เป้าหมายของคลาส

หลังจบคลาสนี้ นักเรียนควรเข้าใจว่า:

1. Error เป็นส่วนปกติของการเขียนโปรแกรม
2. วิธี debug เบื้องต้นคืออ่าน error, เช็กไฟล์, เช็ก id, เช็กค่าตัวแปร
3. `array` ใช้เก็บข้อมูลหลายรายการ
4. `object` ใช้เก็บข้อมูลที่มีรายละเอียดหลาย field
5. `loop` ใช้วนทำงานซ้ำกับข้อมูลหลายรายการ
6. สามารถเอา array + object + loop มาแสดงผลบนหน้าเว็บได้
7. เริ่มเห็นภาพว่าเว็บจริงไม่ได้มีข้อมูลแค่ 1 ชิ้น แต่มี “ชุดข้อมูล” ที่ต้องนำมา render

---

# Positioning ของวันนี้

วันนี้ยังอยู่ในช่วง **Manual Core**
ยังไม่ใช้ AI ช่วย generate code

เหตุผลคือเราต้องการให้นักเรียนฝึก:

* อ่าน code เอง
* อ่าน error เอง
* เข้าใจ flow เอง
* debug เอง
* คิด logic เอง

AI จะเข้ามาช่วยใน phase ถัดไป แต่ตอนนี้เรากำลังสร้างพื้นฐานการคิดก่อน

---

# โครงสร้างคลาส 3 ชั่วโมง

สมมติเรียนวันเสาร์ 09:00–12:00

| เวลา        | เนื้อหา                             | เป้าหมาย                              |
| ----------- | ----------------------------------- | ------------------------------------- |
| 09:00–09:15 | Recap Class 1–2                     | ทบทวน HTML/CSS/JS + Form              |
| 09:15–09:45 | Assignment Review                   | ดูงานที่นักเรียนส่ง / common mistakes |
| 09:45–10:15 | Debugging Lab                       | ตั้งใจทำ error ให้ดูและแก้            |
| 10:15–10:25 | Break                               | พัก                                   |
| 10:25–10:55 | Manual Logic: Array & Object        | ปูพื้นฐานข้อมูลหลายรายการ             |
| 10:55–11:30 | Live Coding: Student Goal Dashboard | ใช้ loop render ข้อมูล                |
| 11:30–11:50 | Mini Challenge                      | ให้นักเรียนเพิ่มข้อมูลเอง             |
| 11:50–12:00 | Wrap-up + Homework                  | สรุปและมอบหมายงาน                     |

---

# Opening Script

สวัสดีครับทุกคน วันนี้เป็นวันที่ 3 ของสัปดาห์แรกนะครับ

สองคลาสที่ผ่านมา เราได้เห็นภาพรวมของหน้าเว็บไปแล้วว่า HTML คือโครงสร้าง CSS คือหน้าตา และ JavaScript คือพฤติกรรมของหน้าเว็บ

คลาสแรกเราเริ่มจาก Professional Profile Card
คลาสที่สองเราเริ่มรับข้อมูลจากผู้ใช้ผ่าน Form

วันนี้เราจะใช้เวลาช่วงแรกทบทวนงานที่ทุกคนทำ และดูปัญหาที่มักเจอจริงเวลาทำ assignment

หลังจากนั้นเราจะเริ่มขยับจากการทำงานกับข้อมูลแค่ 1 ชิ้น ไปสู่ข้อมูลหลายรายการ ซึ่งเป็น concept สำคัญมากของ Web Application จริง

เพราะในเว็บจริง เราไม่ได้มีผู้ใช้แค่คนเดียว สินค้าแค่ชิ้นเดียว หรือคอร์สแค่คอร์สเดียว

เรามักมีข้อมูลเป็นชุด เช่น:

* รายชื่อนักเรียนหลายคน
* รายการสินค้า
* รายการบทเรียน
* รายการงานที่ต้องทำ
* รายการผู้สมัครงาน
* รายการคำสั่งซื้อ

วันนี้เราจะเริ่มรู้จัก `array`, `object` และ `loop` แบบไม่ซับซ้อน และจะเอามาใช้สร้าง Mini Student Dashboard ง่าย ๆ ด้วยตัวเอง

เป้าหมายของวันนี้ไม่ใช่การจำ syntax ให้ได้ทั้งหมด แต่คือเข้าใจว่าเวลามีข้อมูลหลายรายการ เราจะให้ JavaScript จัดการและแสดงผลซ้ำ ๆ ให้เราได้อย่างไร

---

# Part 1: Recap Class 1–2

## พูดทบทวน

ก่อนเริ่มเรื่องใหม่ เรามาทบทวนก่อนว่าเราเรียนอะไรไปแล้ว

Class 1:

* HTML ใช้สร้างโครงสร้าง
* CSS ใช้จัดหน้าตา
* JavaScript ใช้ทำ interaction
* เราใช้ `getElementById`
* เราใช้ `addEventListener`
* เราใช้ `textContent` เพื่อเปลี่ยนข้อความ

Class 2:

* เราใช้ `form` รับข้อมูลจากผู้ใช้
* เราใช้ `.value` อ่านค่าจาก input
* เราใช้ตัวแปรเก็บข้อมูล
* เราใช้ `if` เพื่อตรวจสอบว่าข้อมูลครบหรือไม่
* เราใช้ `event.preventDefault()` เพื่อไม่ให้หน้า refresh

วันนี้เราจะต่อจากตรงนี้ด้วยคำถามสำคัญ:

ถ้าเรามีข้อมูลหลายรายการ จะจัดการยังไง?

---

# Part 2: Assignment Review

## วิธีดำเนินคลาส

เลือกงานนักเรียน 2–3 คนมา review แบบไม่ทำให้เขาอาย

พูดก่อน review:

ก่อนดูงาน ผมอยากย้ำก่อนว่า Code Review ไม่ใช่การจับผิดนะครับ

Code Review คือการช่วยกันดูว่า code อ่านง่ายไหม มีจุดไหนปรับให้ดีขึ้นได้ไหม และมี bug ที่อาจเกิดขึ้นในอนาคตหรือเปล่า

Developer จริง ๆ ก็ทำ Code Review กันตลอด ดังนั้นการได้รับ feedback เป็นเรื่องปกติมาก

---

## Common Mistakes ที่ควรพูดถึง

### 1. HTML id กับ JavaScript ไม่ตรงกัน

ตัวอย่าง:

```html
<p id="summary">ข้อความเดิม</p>
```

แต่ JavaScript เขียนว่า:

```js
const summary = document.getElementById("profileSummary");
```

อธิบาย:

JavaScript หา id ชื่อ `profileSummary` แต่ใน HTML ไม่มี id นี้
ดังนั้นมันจะหา element ไม่เจอ

วิธีแก้:

ชื่อ id ใน HTML และ JavaScript ต้องตรงกัน 100%

---

### 2. ลืมเชื่อมไฟล์ JavaScript

ใน HTML ต้องมี:

```html
<script src="script.js"></script>
```

ถ้าไม่มีบรรทัดนี้ ปุ่มจะไม่ทำงาน ถึงแม้ code ใน `script.js` จะถูกก็ตาม

---

### 3. ลืม `.value`

ถ้าเราต้องการค่าที่ผู้ใช้กรอก ต้องใช้:

```js
const name = nameInput.value;
```

ไม่ใช่:

```js
const name = nameInput;
```

เพราะ `nameInput` คือตัวกล่อง input
แต่ `nameInput.value` คือข้อความที่ผู้ใช้กรอกในกล่องนั้น

---

### 4. ไม่ save file หรือ refresh browser

เวลาหน้าเว็บไม่เปลี่ยน ให้เช็ก 3 อย่างแรก:

1. Save file แล้วหรือยัง
2. Refresh browser แล้วหรือยัง
3. แก้ถูกไฟล์หรือเปล่า

---

# Part 3: Debugging Lab

## เป้าหมาย

ให้เด็กเห็นว่า debug มีขั้นตอน ไม่ใช่เดาไปเรื่อย ๆ

## Script

ตอนนี้ผมจะตั้งใจทำให้ code พังให้ดูนะครับ

เวลาเราเขียนโปรแกรมจริง สิ่งที่ยากไม่ใช่การเขียนให้ถูกตั้งแต่แรก แต่คือการรู้ว่าเวลามันพัง เราควรเริ่มไล่จากตรงไหน

หลัก debug เบื้องต้นมี 4 ขั้น:

1. อ่าน error หรือสังเกตอาการ
2. ดูว่าเพิ่งแก้อะไรไปล่าสุด
3. เช็กการเชื่อมโยงระหว่าง HTML, CSS, JavaScript
4. ใช้ `console.log` เพื่อดูค่าระหว่างทาง

---

## Demo: ใช้ console.log

ตัวอย่างจาก form:

```js
const fullNameInput = document.getElementById("fullName");

console.log(fullNameInput);
```

อธิบาย:

`console.log` คือการให้ JavaScript แสดงค่าบางอย่างออกมาใน Console เพื่อช่วยให้เรารู้ว่า code ตอนนี้เจอสิ่งที่เราคิดไว้หรือเปล่า

ถ้าเราเห็น input แสดงใน Console แปลว่า JavaScript หา element เจอ

แต่ถ้าได้ `null` แปลว่า JavaScript หา element ไม่เจอ

---

## Demo: console.log value

```js
const fullName = fullNameInput.value;

console.log(fullName);
```

อธิบาย:

บรรทัดนี้ช่วยให้เราดูว่าค่าที่ผู้ใช้กรอกเข้ามาจริง ๆ คืออะไร

นี่คือวิธี debug ที่สำคัญมาก เพราะบางครั้งเรา “คิดว่า” ค่ามีแล้ว แต่จริง ๆ อาจว่างอยู่

---

# Part 4: Manual Logic — Array และ Object

## พูดนำ

ตอนนี้เราจะเข้าสู่ concept ใหม่ที่สำคัญมากครับ

จนถึงตอนนี้ เราทำงานกับข้อมูลทีละชิ้น เช่น ชื่อคนหนึ่งคน เป้าหมายหนึ่งเป้าหมาย ข้อความหนึ่งข้อความ

แต่ในเว็บจริง ข้อมูลมักมาเป็นหลายรายการ

ตัวอย่าง:

* นักเรียนหลายคน
* สินค้าหลายชิ้น
* คอร์สหลายคอร์ส
* งานหลาย task
* บทเรียนหลาย lesson

ถ้าเราต้องการเก็บข้อมูลหลายรายการใน JavaScript เราจะใช้ `array`

---

## Array คืออะไร

Array คือกล่องที่ใช้เก็บข้อมูลหลายรายการ

ตัวอย่าง:

```js
const goals = [
  "เปลี่ยนสายงานเป็น Developer",
  "สร้าง Portfolio",
  "เข้าใจ Full-Stack",
];
```

อธิบาย:

ตัวแปร `goals` ไม่ได้เก็บข้อความเดียว แต่เก็บข้อความหลายอันไว้ในชุดเดียวกัน

ให้มอง array เหมือน list

---

## Object คืออะไร

Object คือข้อมูลหนึ่งชิ้นที่มีรายละเอียดหลายอย่าง

ตัวอย่าง:

```js
const student = {
  name: "Man",
  goal: "เปลี่ยนสายงานเป็น Developer",
  level: "เริ่มจากศูนย์",
};
```

อธิบาย:

นักเรียนหนึ่งคนไม่ได้มีแค่ชื่อ
แต่มีชื่อ เป้าหมาย และระดับพื้นฐาน

ดังนั้น object เหมาะกับข้อมูลที่มีหลาย field

---

## Array of Objects

ในเว็บจริง เรามักใช้ array + object พร้อมกัน

ตัวอย่าง:

```js
const students = [
  {
    name: "Man",
    goal: "เปลี่ยนสายงานเป็น Developer",
    level: "เริ่มจากศูนย์",
  },
  {
    name: "Jane",
    goal: "สร้าง Portfolio",
    level: "เคยเรียนมาบ้าง",
  },
  {
    name: "Pond",
    goal: "เข้าใจ Full-Stack",
    level: "เคยทำโปรเจกต์เล็ก ๆ",
  },
];
```

อธิบาย:

นี่คือ list ของนักเรียนหลายคน
แต่ละคนเป็น object ที่มี name, goal และ level

นี่เป็นโครงสร้างข้อมูลที่เจอจริงบ่อยมากใน Web Application

เช่น:

* list ของสินค้า
* list ของ user
* list ของ course
* list ของ job application
* list ของ transaction

---

# Part 5: Loop คืออะไร

## พูดนำ

ถ้าเรามีนักเรียน 3 คน แล้วอยากแสดงผลทุกคนบนหน้าเว็บ เราไม่ควรเขียน code ซ้ำ 3 รอบด้วยมือ

เราควรใช้ `loop`

Loop คือการสั่งให้โปรแกรมทำงานซ้ำกับข้อมูลหลายรายการ

ตัวอย่าง:

```js
students.forEach(function (student) {
  console.log(student.name);
});
```

อธิบาย:

แปลเป็นภาษาคนคือ:

สำหรับนักเรียนแต่ละคนใน list `students`
ให้แสดงชื่อของนักเรียนคนนั้นออกมา

`forEach` คือ loop แบบหนึ่งที่ใช้บ่อยกับ array

---

# Part 6: Live Coding Project — Student Goal Dashboard

## Project Concept

เราจะสร้างหน้า Mini Dashboard ที่แสดงรายชื่อนักเรียนและเป้าหมายของแต่ละคน

ในชีวิตจริง concept นี้ต่อยอดได้เป็น:

* Student dashboard
* Candidate list
* Course enrollment list
* Product list
* Task list
* CRM list

---

# สร้าง Project

Folder:

```text
week-01-student-goal-dashboard
```

Files:

```text
index.html
style.css
script.js
```

---

# HTML

```html
<!DOCTYPE html>
<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Student Goal Dashboard</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <main class="page">
      <section class="dashboard">
        <p class="label">Week 1 Manual Logic</p>

        <h1>Student Goal Dashboard</h1>

        <p class="description">
          ตัวอย่างการใช้ Array, Object และ Loop เพื่อแสดงข้อมูลหลายรายการบนหน้าเว็บ
        </p>

        <div id="studentList" class="student-list"></div>
      </section>
    </main>

    <script src="script.js"></script>
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
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background: #0f172a;
  color: white;
}

.page {
  min-height: 100vh;
  padding: 40px;
}

.dashboard {
  max-width: 900px;
  margin: 0 auto;
}

.label {
  color: #38bdf8;
  font-weight: bold;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

h1 {
  margin: 12px 0;
  font-size: 40px;
}

.description {
  color: #cbd5e1;
  line-height: 1.7;
  margin-bottom: 32px;
}

.student-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.student-card {
  padding: 24px;
  border-radius: 20px;
  background: #1e293b;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.25);
}

.student-card h2 {
  margin: 0 0 12px;
  color: #38bdf8;
}

.student-card p {
  margin: 8px 0;
  color: #cbd5e1;
  line-height: 1.6;
}

.badge {
  display: inline-block;
  margin-top: 12px;
  padding: 6px 12px;
  border-radius: 999px;
  background: #0f172a;
  color: #7dd3fc;
  font-size: 14px;
  font-weight: bold;
}
```

---

# JavaScript Version 1: แสดงใน console ก่อน

```js
const students = [
  {
    name: "Man",
    goal: "เปลี่ยนสายงานเป็น Developer",
    level: "เริ่มจากศูนย์",
  },
  {
    name: "Jane",
    goal: "สร้าง Portfolio",
    level: "เคยเรียนมาบ้าง",
  },
  {
    name: "Pond",
    goal: "เข้าใจ Full-Stack",
    level: "เคยทำโปรเจกต์เล็ก ๆ",
  },
];

students.forEach(function (student) {
  console.log(student.name);
  console.log(student.goal);
  console.log(student.level);
});
```

## อธิบาย

ก่อนจะแสดงผลบนหน้าเว็บ เราลองดูข้อมูลใน Console ก่อน

นี่คือวิธีทำงานที่ดี เพราะเราต้องมั่นใจก่อนว่าข้อมูลของเราถูกต้อง

---

# JavaScript Version 2: แสดงผลบนหน้าเว็บ

```js
const studentList = document.getElementById("studentList");

const students = [
  {
    name: "Man",
    goal: "เปลี่ยนสายงานเป็น Developer",
    level: "เริ่มจากศูนย์",
  },
  {
    name: "Jane",
    goal: "สร้าง Portfolio",
    level: "เคยเรียนมาบ้าง",
  },
  {
    name: "Pond",
    goal: "เข้าใจ Full-Stack",
    level: "เคยทำโปรเจกต์เล็ก ๆ",
  },
];

students.forEach(function (student) {
  const studentCard = document.createElement("article");

  studentCard.classList.add("student-card");

  studentCard.innerHTML = `
    <h2>${student.name}</h2>
    <p><strong>เป้าหมาย:</strong> ${student.goal}</p>
    <p><strong>พื้นฐาน:</strong> ${student.level}</p>
    <span class="badge">Bootcamp Student</span>
  `;

  studentList.appendChild(studentCard);
});
```

---

# วิธีอธิบาย JavaScript

บรรทัดนี้:

```js
const studentList = document.getElementById("studentList");
```

แปลว่าเราไปหา container ที่จะใช้วางการ์ดนักเรียน

บรรทัดนี้:

```js
students.forEach(function (student) {
```

แปลว่า:

ให้วนผ่านนักเรียนทุกคนใน array `students`

ในแต่ละรอบ JavaScript จะหยิบนักเรียนหนึ่งคนมาเก็บไว้ในตัวแปร `student`

บรรทัดนี้:

```js
const studentCard = document.createElement("article");
```

แปลว่า:

สร้าง HTML element ใหม่ขึ้นมาหนึ่งอัน เป็น `article`

บรรทัดนี้:

```js
studentCard.classList.add("student-card");
```

แปลว่า:

ใส่ class ชื่อ `student-card` ให้ element นี้ เพื่อให้ CSS ตกแต่งหน้าตาได้

บรรทัดนี้:

```js
studentCard.innerHTML = `
  ...
`;
```

แปลว่า:

ใส่ HTML ข้างใน card โดยใช้ข้อมูลจาก student

และบรรทัดนี้:

```js
studentList.appendChild(studentCard);
```

แปลว่า:

เอาการ์ดที่สร้างเสร็จแล้วไปใส่ในหน้าเว็บ

---

# Flow ที่ควรย้ำ

ให้จำ flow นี้:

1. มีข้อมูลอยู่ใน array
2. array เก็บ object หลายตัว
3. object แต่ละตัวคือข้อมูลหนึ่งรายการ
4. loop วนผ่านข้อมูลทีละตัว
5. สร้าง HTML จากข้อมูล
6. เอา HTML ไปแสดงบนหน้าเว็บ

นี่คือ pattern ที่ใช้บ่อยมากใน React ในอนาคต

วันนี้เราเขียนแบบ manual ก่อน เพื่อให้เข้าใจพื้นฐาน

---

# Mini Challenge

ให้เวลา 15–20 นาที

## Challenge 1

เพิ่มนักเรียนคนที่ 4 เข้าไปใน array

```js
{
  name: "Your Name",
  goal: "เป้าหมายของคุณ",
  level: "พื้นฐานของคุณ",
}
```

## Challenge 2

เพิ่ม field ใหม่ชื่อ `targetRole`

ตัวอย่าง:

```js
{
  name: "Man",
  goal: "เปลี่ยนสายงานเป็น Developer",
  level: "เริ่มจากศูนย์",
  targetRole: "Frontend Developer",
}
```

แล้วแสดง targetRole บน card

## Challenge 3

เปลี่ยนสี badge หรือข้อความใน badge

## Bonus

ถ้า level เป็น `"เริ่มจากศูนย์"` ให้ badge แสดงว่า:

```text
Beginner Friendly
```

ถ้าไม่ใช่ ให้ badge แสดงว่า:

```text
Has Some Experience
```

ตัวอย่าง logic:

```js
let badgeText = "Has Some Experience";

if (student.level === "เริ่มจากศูนย์") {
  badgeText = "Beginner Friendly";
}
```

---

# Homework

## Assignment Title

**W01.03 — Assignment: Student Goal Dashboard**

## Project Brief

ให้นักเรียนสร้างหน้า Dashboard เล็ก ๆ ที่แสดงข้อมูลหลายรายการ โดยใช้ array, object และ loop

สามารถเลือกหัวข้อได้ เช่น:

* Student Goal Dashboard
* Course List
* Portfolio Project List
* Job Application Tracker
* Product List
* Task List

## Requirements

1. มี array อย่างน้อย 4 รายการ
2. แต่ละรายการเป็น object
3. object แต่ละตัวมีอย่างน้อย 3 fields
4. ใช้ `forEach` เพื่อแสดงข้อมูลทุก item บนหน้าเว็บ
5. ใช้ `document.createElement` หรือ `innerHTML` เพื่อสร้าง card
6. ใช้ CSS ตกแต่ง card ให้ดูเป็นระบบ
7. มีอย่างน้อย 1 จุดที่ใช้ `if` เพื่อตัดสินใจแสดงข้อความแตกต่างกัน

## Reflection

ตอบคำถามสั้น ๆ:

1. Array คืออะไร?
2. Object คืออะไร?
3. Loop ช่วยเราอย่างไร?
4. วันนี้เจอ error อะไร?
5. คุณ debug อย่างไร?
6. อยากให้ review จุดไหน?

---

# Quiz หลังคลาส

## Question 1

Array ใช้ทำอะไร?

A. เก็บข้อมูลหลายรายการ
B. เปลี่ยนสีพื้นหลัง
C. เปิด browser
D. ลบไฟล์ในเครื่อง

Correct Answer: A

## Question 2

Object เหมาะกับข้อมูลแบบไหน?

A. ข้อมูลหนึ่งรายการที่มีหลายรายละเอียด
B. เฉพาะข้อความสั้น ๆ เท่านั้น
C. เฉพาะตัวเลขเท่านั้น
D. ใช้แทน CSS

Correct Answer: A

## Question 3

`forEach` ใช้ทำอะไร?

A. วนทำงานกับข้อมูลแต่ละรายการใน array
B. เปลี่ยนชื่อไฟล์
C. ติดตั้ง Node.js
D. ทำให้ปุ่มมีสีฟ้า

Correct Answer: A

## Question 4

`document.createElement("article")` ใช้ทำอะไร?

A. สร้าง HTML element ใหม่ด้วย JavaScript
B. ลบหน้าเว็บ
C. เปลี่ยนสี text
D. เปิด GitHub

Correct Answer: A

## Question 5

ถ้า JavaScript หา element ไม่เจอและได้ค่า `null` ควรเช็กอะไร?

A. id ใน HTML ตรงกับ JavaScript หรือไม่
B. สีปุ่มสวยหรือไม่
C. ชื่อคนเรียนถูกไหม
D. ใช้ font อะไร

Correct Answer: A

---

# LMS Content หลังคลาส

## Module

**Week 1 — Foundations & Logic**

## Lessons

1. **W01.11 — Recording: Debugging, Loops, Arrays & Objects**
   Type: Video

2. **W01.12 — Notes: Array, Object และ Loop คืออะไร**
   Type: Text

3. **W01.13 — Code Example: Student Goal Dashboard**
   Type: Text

4. **W01.14 — Quiz: Array, Object, Loop และ Debugging**
   Type: Quiz

5. **W01.15 — Assignment: Student Goal Dashboard**
   Type: Project

## Attachments

* starter-code.zip
* completed-code.zip
* assignment-checklist.pdf
* array-object-loop-cheatsheet.pdf
* debugging-checklist.pdf

---

# Closing Script

วันนี้เราได้ปิดสัปดาห์แรกด้วย concept ที่สำคัญมาก คือการจัดการข้อมูลหลายรายการ

จากสองคลาสแรก เราเริ่มจากหน้าเว็บหนึ่งหน้า ปุ่มหนึ่งปุ่ม และ form หนึ่ง form

วันนี้เราเริ่มเห็นแล้วว่า JavaScript สามารถเก็บข้อมูลเป็นชุดได้ ผ่าน array และ object และสามารถใช้ loop เพื่อแสดงผลข้อมูลหลายรายการบนหน้าเว็บได้

นี่คือพื้นฐานที่สำคัญมาก เพราะในโลกจริง ข้อมูลแทบทุกอย่างมาเป็น list

เช่น รายชื่อนักเรียน รายการสินค้า รายการบทเรียน รายการผู้สมัครงาน หรือรายการ task

ถ้าวันนี้ยังจำ syntax ไม่ได้ทั้งหมด ไม่เป็นไรครับ

ขอให้จำ concept นี้ให้ได้ก่อน:

Array = รายการหลายชิ้น
Object = ข้อมูลหนึ่งชิ้นที่มีหลายรายละเอียด
Loop = การทำงานซ้ำกับข้อมูลแต่ละรายการ
Debugging = การไล่หาปัญหาอย่างเป็นขั้นตอน

สัปดาห์หน้าเราจะเริ่มต่อยอดไปสู่ HTML และ CSS ที่เป็นระบบมากขึ้น เพื่อสร้าง layout ที่ใกล้เคียงกับหน้าเว็บจริงมากขึ้นครับ
