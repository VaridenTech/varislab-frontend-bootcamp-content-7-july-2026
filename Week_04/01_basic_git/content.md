# Basic Git, GitHub, Branch & Merge

## ภาพรวมบทเรียน

บทเรียนนี้จะพาผู้เรียนสร้าง Project ใหม่ขึ้นมาโดยเฉพาะสำหรับฝึก Git

Project ที่ใช้ชื่อว่า:

```text
Developer Profile Page
```

ผู้เรียนจะเริ่มตั้งแต่:

```text
สร้าง Project
    ↓
เริ่ม Git Repository
    ↓
บันทึก Commit
    ↓
ส่งขึ้น GitHub
    ↓
สร้าง Feature Branch
    ↓
พัฒนา Feature แยกจาก main
    ↓
Merge กลับเข้า main
```

บทเรียนนี้ออกแบบสำหรับผู้เรียนที่ยังไม่เคยใช้ Git มาก่อน โดยเน้นให้เข้าใจ Mental Model มากกว่าการท่องจำคำสั่ง

---

# Learning Outcomes

หลังเรียนจบ ผู้เรียนควรสามารถ:

1. อธิบายได้ว่า Git คืออะไร
2. อธิบายความแตกต่างระหว่าง Git และ GitHub ได้
3. สร้าง Local Git Repository ได้
4. ตรวจสอบสถานะของไฟล์ด้วย `git status` ได้
5. เพิ่มไฟล์เข้า Staging Area ได้
6. สร้าง Commit พร้อม Commit Message ที่มีความหมายได้
7. อ่าน Commit History เบื้องต้นได้
8. เชื่อม Local Repository กับ GitHub ได้
9. Push Project ขึ้น GitHub ได้
10. อธิบายได้ว่า Branch ใช้ทำอะไร
11. สร้างและสลับ Branch ได้
12. พัฒนา Feature แยกจาก `main` ได้
13. Merge Feature Branch กลับเข้า `main` ได้
14. ลบ Branch ที่ Merge แล้วได้
15. อธิบายแนวคิด Merge Conflict เบื้องต้นได้

---

# สิ่งที่ยังไม่สอนในบทนี้

บทเรียนนี้ยังไม่ลงลึกเรื่อง:

* Pull Request
* Team Collaboration
* Remote Feature Branch
* Merge Conflict Exercise แบบเต็ม
* Rebase
* Cherry-pick
* Stash
* Reset
* Revert
* Squash Commit
* Git Flow
* GitHub Actions

หัวข้อเหล่านี้ควรสอนภายหลัง เมื่อผู้เรียนเริ่มทำ React Project หรือทำงานร่วมกับผู้อื่น

---

# ระยะเวลาแนะนำ

ประมาณ 3 ชั่วโมง

| เวลา         | เนื้อหา                               |
| ------------ | ------------------------------------- |
| 0–20 นาที    | Git และ GitHub คืออะไร                |
| 20–40 นาที   | สร้าง Developer Profile Page          |
| 40–70 นาที   | git init, status, add และ commit      |
| 70–90 นาที   | สร้าง Commit History                  |
| 90–115 นาที  | สร้าง GitHub Repository และ Push      |
| 115–135 นาที | Branch คืออะไร                        |
| 135–165 นาที | สร้าง Feature Branch และพัฒนา Feature |
| 165–180 นาที | Merge, Cleanup, Quiz และ Homework     |

---

# Project ที่ใช้ในบทเรียน

โครงสร้าง Project:

```text
developer-profile-page/
├── index.html
├── style.css
└── README.md
```

Project นี้ไม่ใช้:

* npm
* Vite
* JavaScript
* TypeScript
* Framework
* Package
* Build Tool

เหตุผลคือผู้เรียนควรโฟกัสกับ Git โดยไม่ต้องแก้ปัญหาเรื่อง Setup หรือ Dependency

---

# Part 1: ปัญหาก่อนมี Git

สมมติว่าเรากำลังสร้างเว็บไซต์ และเก็บ Version ด้วยการ Copy Folder:

```text
developer-profile
developer-profile-new
developer-profile-final
developer-profile-final-2
developer-profile-final-real
developer-profile-final-use-this
```

เมื่อเวลาผ่านไป เราจะเริ่มเจอปัญหา:

* ไม่รู้ว่า Folder ไหนใหม่ที่สุด
* ไม่รู้ว่าแต่ละ Folder ต่างกันอย่างไร
* ไม่รู้ว่าแก้ Code ตอนไหน
* ย้อนกลับไป Version ก่อนหน้าได้ยาก
* อาจแก้ผิด Folder
* ส่ง Folder ผิดให้เพื่อน
* เมื่อทำงานหลายคนจะยิ่งสับสน

Git ถูกสร้างขึ้นมาเพื่อแก้ปัญหานี้

---

# Part 2: Git คืออะไร

Git คือระบบที่ใช้ติดตามและบันทึกประวัติการเปลี่ยนแปลงของไฟล์

Git จัดอยู่ในประเภท:

```text
Version Control System
```

Git ช่วยให้เรารู้ว่า:

* ไฟล์ไหนถูกแก้
* แก้ส่วนใด
* แก้เมื่อไร
* ใครเป็นคนแก้
* เปลี่ยนแปลงเพื่ออะไร
* Project เคยมีหน้าตาอย่างไรในอดีต

---

## Git เปรียบเหมือน Save Point

สามารถเปรียบ Git กับ Save Point ในเกมได้:

```text
เริ่มสร้าง Project
        ↓
Save Point 1: สร้างหน้า HTML
        ↓
Save Point 2: เพิ่มข้อมูลส่วนตัว
        ↓
Save Point 3: เพิ่ม CSS
        ↓
Save Point 4: เพิ่ม Feature
```

ใน Git เราเรียก Save Point ว่า:

```text
Commit
```

Commit คือจุดบันทึกการเปลี่ยนแปลงของ Project ในช่วงเวลาหนึ่ง

---

## Script สำหรับผู้สอน

> เวลาเราเขียนโปรแกรม เราไม่ได้เขียนทุกอย่างเสร็จในครั้งเดียว
>
> เราจะค่อย ๆ เพิ่มหน้า เพิ่มปุ่ม ปรับ Design และแก้ Bug
>
> Git ช่วยให้เราบันทึกความคืบหน้าเป็นช่วง ๆ
>
> แต่ละช่วงที่บันทึกเรียกว่า Commit
>
> ถ้าวันหนึ่งเราแก้ Code แล้วพัง เราสามารถย้อนกลับมาดูได้ว่า ก่อนหน้านี้เราเปลี่ยนอะไรไป

---

# Part 3: Git กับ GitHub ต่างกันอย่างไร

Git และ GitHub ไม่ใช่สิ่งเดียวกัน

| Git                          | GitHub                               |
| ---------------------------- | ------------------------------------ |
| เป็นโปรแกรมที่ทำงานในเครื่อง | เป็นบริการออนไลน์                    |
| ใช้บันทึกประวัติ Project     | ใช้เก็บและแชร์ Repository            |
| ใช้งาน Offline ได้           | ต้องใช้อินเทอร์เน็ตในการส่งข้อมูล    |
| มีคำสั่ง เช่น add และ commit | มีหน้า Repository และ Commit History |
| ประวัติอยู่ในเครื่อง         | ประวัติถูกเก็บออนไลน์                |
| ไม่จำเป็นต้องมี Account      | ต้องมี GitHub Account                |

ประโยคที่ผู้เรียนควรจำ:

```text
Git = ระบบบันทึกประวัติของ Project

GitHub = เว็บไซต์สำหรับเก็บและแชร์ Git Repository
```

---

## Script สำหรับผู้สอน

> Git ทำงานอยู่ในเครื่องของเรา
>
> ถึงไม่มีอินเทอร์เน็ต เราก็ยังสามารถสร้าง Commit ได้
>
> ส่วน GitHub เป็นบริการออนไลน์ที่เราใช้ส่ง Repository ขึ้นไปเก็บ สำรอง และแชร์กับผู้อื่น
>
> เราสามารถใช้ Git โดยไม่ใช้ GitHub ได้ แต่ในการทำงานจริงเรามักใช้ทั้งสองอย่างร่วมกัน

---

# Part 4: ตรวจสอบการติดตั้ง Git

เปิด Terminal แล้วรัน:

```bash
git --version
```

ผลลัพธ์ตัวอย่าง:

```text
git version 2.50.1
```

ถ้าเห็นเลข Version แสดงว่า Git ถูกติดตั้งแล้ว

---

# Part 5: ตั้งชื่อและอีเมล

ทุก Commit ต้องมีข้อมูลผู้สร้าง

ตั้งชื่อ:

```bash
git config --global user.name "Your Name"
```

ตั้งอีเมล:

```bash
git config --global user.email "your-email@example.com"
```

ตรวจสอบ:

```bash
git config --global user.name
git config --global user.email
```

---

## Script สำหรับผู้สอน

> Git ต้องรู้ว่าใครเป็นคนสร้าง Commit
>
> ชื่อและอีเมลจะติดไปกับ Commit History
>
> แนะนำให้ใช้อีเมลเดียวกับ GitHub Account เพื่อให้ GitHub เชื่อม Commit เข้ากับ Profile ของเราได้

---

# Part 6: สร้าง Project ใหม่

สร้าง Folder:

```bash
mkdir developer-profile-page
```

เข้า Folder:

```bash
cd developer-profile-page
```

เปิดด้วย VS Code:

```bash
code .
```

หาก `code .` ใช้ไม่ได้ ให้เปิด VS Code และเลือก:

```text
File → Open Folder
```

จากนั้นเลือก Folder `developer-profile-page`

---

# Part 7: สร้างไฟล์ HTML

สร้างไฟล์:

```text
index.html
```

ใส่ Code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />

    <title>Developer Profile</title>

    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <main class="profile-card">
      <h1>Somchai Developer</h1>

      <p class="role">Aspiring Software Developer</p>

      <p class="description">
        I am learning web development and preparing to begin a career in
        technology.
      </p>

      <section>
        <h2>Current Skills</h2>

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript Basics</li>
        </ul>
      </section>

      <a class="contact-button" href="mailto:hello@example.com">
        Contact Me
      </a>
    </main>
  </body>
</html>
```

---

# Part 8: สร้างไฟล์ CSS

สร้างไฟล์:

```text
style.css
```

ใส่ Code:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;

  display: grid;
  place-items: center;

  padding: 24px;

  font-family: Arial, sans-serif;

  background-color: #f4f6f8;
}

.profile-card {
  width: 100%;
  max-width: 420px;

  padding: 32px;

  border-radius: 16px;

  background-color: white;

  box-shadow: 0 12px 30px rgb(0 0 0 / 10%);
}

.profile-card h1 {
  margin-top: 0;
  margin-bottom: 8px;
}

.role {
  margin-top: 0;

  font-weight: bold;
  color: #2563eb;
}

.description {
  line-height: 1.6;
}

.profile-card section {
  margin-top: 24px;
}

.profile-card ul {
  padding-left: 20px;
}

.contact-button {
  display: inline-block;

  margin-top: 16px;
  padding: 12px 20px;

  border-radius: 8px;

  color: white;
  background-color: #2563eb;

  text-decoration: none;
}

.contact-button:hover {
  background-color: #1d4ed8;
}
```

เปิดไฟล์ `index.html` ใน Browser เพื่อตรวจสอบว่าเว็บไซต์ทำงานได้

---

# Part 9: เริ่ม Git Repository

เปิด Terminal และตรวจสอบว่าอยู่ใน Folder Project:

```bash
pwd
```

Windows PowerShell ใช้ได้เช่นกัน:

```powershell
pwd
```

ดูไฟล์ใน Folder:

macOS หรือ Linux:

```bash
ls
```

Windows:

```powershell
dir
```

เริ่ม Git Repository:

```bash
git init
```

ผลลัพธ์ตัวอย่าง:

```text
Initialized empty Git repository
```

---

# Part 10: `.git` Folder

เมื่อรัน:

```bash
git init
```

Git จะสร้าง Folder พิเศษชื่อ:

```text
.git
```

Folder นี้ใช้เก็บ:

* Commit History
* Branch
* Repository Settings
* Remote Repository Information
* สถานะภายในของ Git

ไม่ควรแก้ไขไฟล์ใน `.git` ด้วยตัวเอง

---

## Script สำหรับผู้สอน

> Folder ธรรมดาจะกลายเป็น Git Repository หลังจากเรารัน git init
>
> Git สามารถจำประวัติทั้งหมดได้เพราะมี Folder .git
>
> ถ้าเราลบ .git ออก Code ยังอยู่ แต่ Commit History และ Branch ทั้งหมดจะหายไป

---

# Part 11: ตรวจสอบสถานะด้วย `git status`

รัน:

```bash
git status
```

ผลลัพธ์จะคล้าย:

```text
Untracked files:
  index.html
  style.css
```

คำว่า:

```text
Untracked
```

หมายถึง:

```text
มีไฟล์อยู่ใน Project
แต่ Git ยังไม่ได้เริ่มติดตามไฟล์นั้น
```

---

## คำสั่งที่ควรใช้เมื่อสับสน

```bash
git status
```

`git status` เป็นคำสั่งที่ปลอดภัย เพราะใช้สำหรับดูข้อมูล ไม่ได้แก้ไขไฟล์

---

## Script สำหรับผู้สอน

> เวลาใช้ Git แล้วไม่แน่ใจว่าตอนนี้เกิดอะไรขึ้น ให้เริ่มจาก git status
>
> คำสั่งนี้จะบอกว่าเราอยู่ Branch ไหน มีไฟล์อะไรเปลี่ยน และมีไฟล์อะไรพร้อม Commit แล้ว

---

# Part 12: Git Workflow พื้นฐาน

Workflow ที่ต้องจำ:

```text
แก้ไขไฟล์
    ↓
git status
    ↓
git add
    ↓
git commit
    ↓
git push
```

ในช่วงแรกที่ยังไม่เชื่อม GitHub จะใช้เพียง:

```text
แก้ไขไฟล์
    ↓
git status
    ↓
git add
    ↓
git commit
```

---

# Part 13: Working Directory, Staging Area และ Repository

Git แบ่งการทำงานออกเป็น 3 พื้นที่หลัก

```text
Working Directory
ไฟล์ที่เรากำลังแก้ไข
        ↓ git add

Staging Area
ไฟล์ที่เราเลือกเตรียมไว้
        ↓ git commit

Local Repository
ประวัติที่ถูกบันทึกในเครื่อง
```

---

## เปรียบเทียบกับการส่งกล่องพัสดุ

```text
Working Directory
=
ของทั้งหมดที่อยู่ในห้อง
```

```text
Staging Area
=
ของที่เลือกใส่กล่อง
```

```text
Commit
=
การปิดกล่องและเขียนป้ายว่าข้างในมีอะไร
```

เราไม่จำเป็นต้องนำของทุกอย่างในห้องใส่กล่องเดียวกัน

เช่นเดียวกัน เราไม่จำเป็นต้องนำทุกไฟล์เข้า Commit เดียวกัน

---

# Part 14: เพิ่มไฟล์เข้า Staging Area

เพิ่มไฟล์หนึ่งไฟล์:

```bash
git add index.html
```

ตรวจสอบ:

```bash
git status
```

ตอนนี้ `index.html` จะอยู่ในส่วน:

```text
Changes to be committed
```

แต่ `style.css` อาจยังอยู่ในส่วน Untracked

เพิ่ม `style.css`:

```bash
git add style.css
```

หรือเพิ่มทุกไฟล์:

```bash
git add .
```

---

## จุดใน `git add .` หมายถึงอะไร

```text
.
```

หมายถึง Folder ปัจจุบัน

ดังนั้น:

```bash
git add .
```

หมายถึง:

```text
เพิ่มไฟล์ที่เปลี่ยนแปลงใน Folder ปัจจุบันเข้า Staging Area
```

---

# Part 15: สร้าง Commit แรก

หลังจากไฟล์อยู่ใน Staging Area แล้ว:

```bash
git commit -m "Create developer profile page"
```

โครงสร้าง:

```text
git commit -m "ข้อความอธิบายการเปลี่ยนแปลง"
```

`-m` ย่อมาจาก:

```text
message
```

---

# Part 16: Commit Message ที่ดี

Commit Message ควรอธิบายว่า Commit นี้ทำอะไร

ตัวอย่างที่ดี:

```text
Create developer profile page
Update personal profile information
Improve profile card design
Add projects section
Fix contact button spacing
Add project documentation
```

ตัวอย่างที่ไม่ดี:

```text
update
fix
test
done
new
final
asdf
123
```

---

## คำขึ้นต้นที่ใช้บ่อย

* Add
* Create
* Update
* Fix
* Remove
* Improve
* Change

---

## Script สำหรับผู้สอน

> Commit Message ไม่ได้เขียนให้ Git เข้าใจ เพราะ Git ไม่ได้สนใจว่าข้อความคืออะไร
>
> เราเขียน Commit Message เพื่อให้มนุษย์เข้าใจ
>
> คนคนนั้นอาจเป็นเพื่อนร่วมทีม หรืออาจเป็นตัวเราเองในอีกหลายเดือนข้างหน้า

---

# Part 17: ตรวจสอบสถานะหลัง Commit

รัน:

```bash
git status
```

หากทุกอย่างถูก Commit แล้ว:

```text
nothing to commit, working tree clean
```

ความหมายคือ:

* ไม่มีไฟล์ใหม่
* ไม่มีไฟล์ที่ถูกแก้แต่ยังไม่ได้ Commit
* Project ตรงกับ Commit ล่าสุด

---

# Part 18: ดู Commit History

ดูแบบเต็ม:

```bash
git log
```

Git จะแสดง:

* Commit ID
* Author
* Date
* Commit Message

ดูแบบสั้น:

```bash
git log --oneline
```

ตัวอย่าง:

```text
8c41a22 Create developer profile page
```

---

# Part 19: สร้าง Commit ที่สอง

ให้ผู้เรียนแก้ข้อมูลใน `index.html`

เปลี่ยนชื่อ:

```html
<h1>Your Name</h1>
```

เปลี่ยนตำแหน่ง:

```html
<p class="role">Junior Frontend Developer</p>
```

เปลี่ยน Description:

```html
<p class="description">
  I am learning full-stack web development and building projects to prepare
  for my first software developer role.
</p>
```

เปลี่ยน Skills:

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>TypeScript Basics</li>
</ul>
```

เปลี่ยน Email:

```html
<a class="contact-button" href="mailto:your-email@example.com">
  Contact Me
</a>
```

---

## ตรวจสอบการเปลี่ยนแปลง

```bash
git status
```

ควรเห็น:

```text
modified: index.html
```

---

## Commit การเปลี่ยนแปลง

```bash
git add index.html
```

```bash
git commit -m "Update personal profile information"
```

ตรวจสอบ History:

```bash
git log --oneline
```

ตัวอย่าง:

```text
92da187 Update personal profile information
8c41a22 Create developer profile page
```

---

# Part 20: สร้าง README

สร้างไฟล์:

```text
README.md
```

ใส่เนื้อหา:

```md
# Developer Profile Page

A simple personal profile page created with HTML and CSS.

This project was created for practicing basic Git and GitHub workflows.

## Features

- Personal introduction
- Skills list
- Contact button
- Responsive profile card

## Technologies

- HTML
- CSS

## Git Commands Practiced

- git init
- git status
- git add
- git commit
- git log
- git branch
- git switch
- git merge
- git push
```

Commit:

```bash
git add README.md
```

```bash
git commit -m "Add project README"
```

ตรวจสอบ:

```bash
git log --oneline
```

ผลลัพธ์ควรคล้าย:

```text
f18ad55 Add project README
92da187 Update personal profile information
8c41a22 Create developer profile page
```

---

# Part 21: Local Repository และ Remote Repository

ตอนนี้ Commit ทั้งหมดอยู่ในเครื่อง

เรียกว่า:

```text
Local Repository
```

ขั้นตอนต่อไปคือส่งไปเก็บบน GitHub

เรียกว่า:

```text
Remote Repository
```

Mental Model:

```text
Local Repository
เครื่องของเรา
        ↓ git push

Remote Repository
GitHub
```

---

# Part 22: สร้าง Repository บน GitHub

เข้า GitHub และทำตามขั้นตอน:

1. กด `New repository`
2. ตั้งชื่อ:

```text
developer-profile-page
```

3. เลือก `Public`
4. ไม่ต้องเลือก Add README
5. ไม่ต้องเลือก `.gitignore`
6. ไม่ต้องเลือก License
7. กด `Create repository`

---

## เหตุผลที่ไม่สร้าง README บน GitHub

เพราะเรามี `README.md` ใน Local Repository อยู่แล้ว

หากสร้าง README บน GitHub เพิ่ม จะทำให้ Local และ Remote มีประวัติเริ่มต้นต่างกัน

สำหรับผู้เริ่มต้น ควรสร้าง Empty Repository ก่อน

---

# Part 23: เชื่อม Local กับ GitHub

GitHub จะแสดง URL ของ Repository เช่น:

```text
https://github.com/username/developer-profile-page.git
```

เพิ่ม Remote:

```bash
git remote add origin https://github.com/username/developer-profile-page.git
```

ตรวจสอบ:

```bash
git remote -v
```

ผลลัพธ์ตัวอย่าง:

```text
origin  https://github.com/username/developer-profile-page.git (fetch)
origin  https://github.com/username/developer-profile-page.git (push)
```

---

# Part 24: Origin คืออะไร

`origin` คือชื่อเล่นของ Remote Repository

แทนที่จะต้องเขียน URL ยาวทุกครั้ง เราใช้ชื่อ:

```text
origin
```

โดยทั่วไป Remote หลักมักตั้งชื่อว่า `origin`

---

# Part 25: ตรวจสอบ Branch หลัก

รัน:

```bash
git branch
```

ถ้า Branch ชื่อ `master` ให้เปลี่ยนเป็น `main`:

```bash
git branch -M main
```

ตรวจสอบอีกครั้ง:

```bash
git branch
```

ผลลัพธ์:

```text
* main
```

เครื่องหมาย `*` หมายถึง Branch ที่กำลังใช้งานอยู่

---

# Part 26: Push ครั้งแรก

Push Repository ขึ้น GitHub:

```bash
git push -u origin main
```

หลัง Push สำเร็จ ให้ Refresh GitHub

ควรเห็น:

```text
index.html
style.css
README.md
```

พร้อม Commit History

---

## อธิบายคำสั่ง

```bash
git push -u origin main
```

แยกได้เป็น:

```text
git push
=
ส่ง Commit ขึ้น Remote
```

```text
origin
=
ชื่อ Remote Repository
```

```text
main
=
Branch ที่ต้องการส่งขึ้นไป
```

```text
-u
=
จดจำความสัมพันธ์ระหว่าง main ในเครื่องกับ main บน GitHub
```

หลังจาก Push ครั้งแรก ครั้งต่อไปใช้เพียง:

```bash
git push
```

---

# Part 27: Branch คืออะไร

Branch คือเส้นทางแยกของการพัฒนา Project

สมมติว่า `main` คือ Code หลักที่ทำงานได้

```text
main
```

เมื่อเราต้องการเพิ่ม Feature ใหม่ เราสามารถสร้าง Branch แยกออกมา:

```text
main
  \
   feature/add-projects-section
```

จากนั้นพัฒนา Feature บน Branch นั้น โดยไม่แก้ `main` โดยตรง

---

## Mental Model

```text
main
=
Version หลักที่ควรทำงานได้
```

```text
feature branch
=
พื้นที่แยกสำหรับพัฒนา Feature
```

```text
merge
=
นำ Feature ที่ทำเสร็จกลับมารวมกับ main
```

---

## Script สำหรับผู้สอน

> สมมติว่าหน้าเว็บหลักของเราทำงานได้แล้ว
>
> เรากำลังจะเพิ่ม Projects Section แต่ยังไม่รู้ว่า Code จะเสร็จหรือไม่
>
> ถ้าแก้บน main โดยตรง Code หลักอาจอยู่ในสถานะที่ยังไม่สมบูรณ์
>
> Branch ช่วยให้เราสร้างพื้นที่แยกออกมาทำงานก่อน
>
> เมื่อ Feature เสร็จและตรวจสอบแล้ว เราจึง Merge กลับเข้า main

---

# Part 28: ดู Branch ปัจจุบัน

รัน:

```bash
git branch
```

ผลลัพธ์:

```text
* main
```

ตอนนี้เรากำลังอยู่บน Branch `main`

---

# Part 29: สร้าง Feature Branch

สร้าง Branch ใหม่และย้ายไปใช้งานทันที:

```bash
git switch -c feature/add-projects-section
```

คำสั่งนี้ทำ 2 อย่าง:

```text
1. สร้าง Branch ใหม่
2. ย้ายไปที่ Branch ใหม่
```

ตรวจสอบ:

```bash
git branch
```

ผลลัพธ์:

```text
  main
* feature/add-projects-section
```

---

## การตั้งชื่อ Branch

รูปแบบที่แนะนำ:

```text
feature/ชื่อ-feature
```

ตัวอย่าง:

```text
feature/add-projects-section
feature/add-learning-goals
feature/add-social-links
feature/update-profile-design
```

สำหรับ Bug อาจใช้:

```text
fix/contact-button
fix/mobile-spacing
```

ในบทนี้ให้ใช้ `feature/` เป็นหลักก่อน

---

# Part 30: เพิ่ม Projects Section บน Feature Branch

เปิด `index.html`

เพิ่ม Section นี้ก่อน Contact Button:

```html
<section>
  <h2>My Projects</h2>

  <ul>
    <li>Bootcamp Landing Page</li>
    <li>Developer Profile Page</li>
  </ul>
</section>
```

ตรวจสอบใน Browser

จากนั้นตรวจสอบ Git:

```bash
git status
```

ควรเห็นว่า `index.html` ถูกแก้ไข

---

# Part 31: Commit บน Feature Branch

เพิ่มไฟล์เข้า Staging Area:

```bash
git add index.html
```

Commit:

```bash
git commit -m "Add projects section"
```

ตรวจสอบ History:

```bash
git log --oneline
```

ตอนนี้ Commit ใหม่อยู่บน:

```text
feature/add-projects-section
```

แต่ยังไม่ได้อยู่บน `main`

---

# Part 32: สลับกลับไปดู Main

สลับกลับไปที่ `main`:

```bash
git switch main
```

ตรวจสอบ:

```bash
git branch
```

ผลลัพธ์:

```text
* main
  feature/add-projects-section
```

เปิดหรือ Refresh หน้าเว็บ

Projects Section จะหายไป เพราะ `main` ยังไม่มี Commit นั้น

---

## Script สำหรับผู้สอน

> Projects Section ไม่ได้ถูกลบ
>
> มันยังอยู่บน Feature Branch
>
> ตอนนี้เราเพียงเปลี่ยนกลับมาอยู่บน main ซึ่งเป็น Version ก่อนที่เราจะเพิ่ม Feature
>
> นี่คือประโยชน์สำคัญของ Branch แต่ละ Branch สามารถมี Version ของไฟล์ต่างกันได้

---

# Part 33: ดู Commit Graph

ใช้คำสั่ง:

```bash
git log --oneline --graph --all
```

ตัวอย่าง:

```text
* 7f2a1b3 Add projects section
* f18ad55 Add project README
* 92da187 Update personal profile information
* 8c41a22 Create developer profile page
```

ในกรณีนี้ History อาจยังดูเป็นเส้นตรง เพราะยังไม่มี Commit เพิ่มบน `main` หลังแยก Branch

แต่ Branch Pointer จะอยู่คนละตำแหน่ง

---

# Part 34: Merge Feature กลับเข้า Main

ก่อน Merge ต้องตรวจสอบว่าอยู่บน `main`

```bash
git branch
```

ควรเห็น:

```text
* main
  feature/add-projects-section
```

จากนั้น Merge:

```bash
git merge feature/add-projects-section
```

Mental Model:

```text
เราอยู่ที่ main
        ↓
นำงานจาก feature/add-projects-section
        ↓
เข้ามารวมใน main
```

เปิดหรือ Refresh หน้าเว็บ

Projects Section จะกลับมา เพราะตอนนี้ Feature ถูก Merge เข้า `main` แล้ว

---

## Script สำหรับผู้สอน

> ตอนสั่ง Merge ให้ดูว่าเรายืนอยู่ที่ Branch ไหน
>
> ถ้าเราต้องการนำ Feature เข้า main เราต้องย้ายมาอยู่ main ก่อน
>
> จากนั้นค่อยสั่งให้ Git นำ Feature Branch เข้ามารวม

---

# Part 35: Fast-forward Merge

ใน Exercise นี้ Git อาจแสดงข้อความ:

```text
Fast-forward
```

ความหมายคือ หลังจากสร้าง Feature Branch แล้ว ไม่มี Commit ใหม่เกิดขึ้นบน `main`

Git จึงสามารถเลื่อน `main` ไปยัง Commit ล่าสุดของ Feature Branch ได้ทันที

Mental Model:

```text
ก่อน Merge

main
  |
  A
   \
    B
    feature
```

```text
หลัง Merge

A → B
    ↑
  main
```

สำหรับผู้เริ่มต้นยังไม่ต้องจำรายละเอียดของ Merge Strategy

เพียงเข้าใจว่า Feature ถูกนำเข้ามาใน `main` สำเร็จแล้ว

---

# Part 36: Push หลัง Merge

ตอนนี้ Local `main` มี Feature ใหม่แล้ว แต่ GitHub ยังไม่มี

Push:

```bash
git push
```

จากนั้น Refresh GitHub

ตรวจสอบ:

* `index.html` มี Projects Section
* Commit `Add projects section` ปรากฏใน History
* Branch หลักบน GitHub มี Code ล่าสุด

---

# Part 37: ลบ Branch ที่ Merge แล้ว

หลังจาก Feature ถูก Merge แล้ว สามารถลบ Local Branch:

```bash
git branch -d feature/add-projects-section
```

ตรวจสอบ:

```bash
git branch
```

ควรเหลือ:

```text
* main
```

---

## Script สำหรับผู้สอน

> การลบ Branch ไม่ได้ลบ Code ที่ Merge เข้า main แล้ว
>
> Branch เป็นเหมือนป้ายที่ชี้ไปยังเส้นทางการพัฒนา
>
> เมื่องานถูกนำเข้า main เรียบร้อยแล้ว เราสามารถลบป้าย Branch ที่ไม่ใช้งานได้

---

# Part 38: Workflow ของ Feature Branch

Workflow ที่ผู้เรียนควรจำ:

```bash
git switch -c feature/feature-name
```

แก้ไข Code

```bash
git status
git add .
git commit -m "Add new feature"
```

กลับ `main`:

```bash
git switch main
```

Merge:

```bash
git merge feature/feature-name
```

Push:

```bash
git push
```

ลบ Branch:

```bash
git branch -d feature/feature-name
```

---

# Part 39: สรุป Workflow ทั้งหมด

## Local Commit Workflow

```text
แก้ไฟล์
   ↓
git status
   ↓
git add
   ↓
git commit
```

## GitHub Workflow

```text
Local Commit
   ↓
git push
   ↓
GitHub
```

## Feature Branch Workflow

```text
main
   ↓
สร้าง Feature Branch
   ↓
แก้ Code
   ↓
Commit
   ↓
กลับ main
   ↓
Merge
   ↓
Push
   ↓
ลบ Feature Branch
```

---

# Part 40: Merge Conflict คืออะไร

Merge Conflict เกิดขึ้นเมื่อ Git ไม่สามารถตัดสินใจได้ว่าจะใช้ Code จากฝั่งใด

ตัวอย่าง:

บน `main`:

```html
<p class="role">Frontend Developer</p>
```

บน Feature Branch:

```html
<p class="role">Full-Stack Developer</p>
```

ถ้าทั้งสอง Branch แก้บรรทัดเดียวกัน Git อาจแสดง:

```text
<<<<<<< HEAD
<p class="role">Frontend Developer</p>
=======
<p class="role">Full-Stack Developer</p>
>>>>>>> feature/update-role
```

---

## ความหมาย

ส่วนบน:

```text
<<<<<<< HEAD
```

คือ Code จาก Branch ปัจจุบัน

ส่วนล่าง:

```text
>>>>>>> feature/update-role
```

คือ Code จาก Branch ที่กำลัง Merge เข้ามา

ผู้พัฒนาต้องตัดสินใจว่า:

* เลือก Version บน
* เลือก Version ล่าง
* หรือเขียน Version ใหม่ที่รวมทั้งสองฝั่ง

---

## Workflow หลังแก้ Conflict

เมื่อแก้ไฟล์เรียบร้อยแล้ว:

```bash
git add .
```

จากนั้น:

```bash
git commit -m "Resolve merge conflict"
```

ในบทนี้ไม่จำเป็นต้องทำ Merge Conflict Exercise เต็มรูปแบบ

เป้าหมายคือให้ผู้เรียนรู้ว่า Conflict เป็นเรื่องปกติ และ Git ต้องการให้มนุษย์ตัดสินใจ

---

# Part 41: Common Problems

## Problem 1: `fatal: not a git repository`

สาเหตุ:

* อยู่ผิด Folder
* ยังไม่ได้รัน `git init`

ตรวจสอบ:

```bash
pwd
```

ดูไฟล์:

```bash
ls
```

Windows:

```powershell
dir
```

เข้า Folder:

```bash
cd developer-profile-page
```

ลองใหม่:

```bash
git status
```

---

## Problem 2: Author identity unknown

แก้ด้วย:

```bash
git config --global user.name "Your Name"
```

```bash
git config --global user.email "your-email@example.com"
```

จากนั้น Commit ใหม่

---

## Problem 3: Nothing to commit

ข้อความ:

```text
nothing to commit, working tree clean
```

สาเหตุ:

* ยังไม่ได้แก้ไฟล์
* ยังไม่ได้ Save
* การเปลี่ยนแปลงถูก Commit แล้ว

ตรวจสอบ:

```bash
git status
```

---

## Problem 4: ลืม `git add`

ถ้า Commit ไม่ได้ ให้ตรวจสอบ:

```bash
git status
```

เพิ่มไฟล์:

```bash
git add .
```

แล้ว Commit:

```bash
git commit -m "Update profile page"
```

---

## Problem 5: Remote origin already exists

ตรวจสอบ:

```bash
git remote -v
```

หาก URL ผิด:

```bash
git remote set-url origin NEW_REPOSITORY_URL
```

---

## Problem 6: สร้าง Branch แต่ยังมีไฟล์ที่ไม่ได้ Commit

ก่อนสลับ Branch ควรตรวจสอบ:

```bash
git status
```

สำหรับคลาสนี้ ให้ Commit งานปัจจุบันให้เรียบร้อยก่อนสร้างหรือสลับ Branch

---

## Problem 7: Merge ผิดทิศทาง

ผู้เรียนอาจอยู่ Feature Branch แล้วรัน:

```bash
git merge main
```

คำสั่งนี้จะนำ `main` เข้า Feature Branch ไม่ใช่นำ Feature เข้า `main`

วิธีที่ต้องการในบทนี้:

```bash
git switch main
git merge feature/add-projects-section
```

คำถามที่ต้องถามก่อน Merge:

```text
เราต้องการให้งานเข้า Branch ไหน?
```

ให้ย้ายไป Branch ปลายทางก่อน แล้วจึง Merge Branch ต้นทางเข้ามา

---

## Problem 8: ลบ Branch ไม่ได้

ข้อความอาจบอกว่า Branch ยังไม่ถูก Merge

ตรวจสอบก่อนว่า Merge แล้วหรือยัง:

```bash
git switch main
git merge feature/branch-name
```

จากนั้น:

```bash
git branch -d feature/branch-name
```

ยังไม่ควรใช้:

```bash
git branch -D
```

เพราะเป็น Force Delete และอาจทำให้งานที่ยังไม่ Merge เข้าถึงได้ยาก

---

# Practice Exercise

## โจทย์

สร้าง Feature Branch ใหม่:

```bash
git switch -c feature/add-learning-goals
```

เพิ่ม Section ใน `index.html`:

```html
<section>
  <h2>Learning Goals</h2>

  <ul>
    <li>Build responsive websites</li>
    <li>Learn React</li>
    <li>Build a full-stack application</li>
  </ul>
</section>
```

จากนั้นทำ Workflow:

```bash
git status
git add index.html
git commit -m "Add learning goals section"
```

กลับ Main:

```bash
git switch main
```

Merge:

```bash
git merge feature/add-learning-goals
```

Push:

```bash
git push
```

ลบ Branch:

```bash
git branch -d feature/add-learning-goals
```

---

# Quiz

## Question 1

Git มีหน้าที่หลักอะไร?

A. สร้างเว็บไซต์
B. บันทึกประวัติการเปลี่ยนแปลงของ Project
C. Deploy Website
D. ติดตั้ง Package

คำตอบ: B

---

## Question 2

GitHub คืออะไร?

A. Programming Language
B. Code Editor
C. บริการออนไลน์สำหรับเก็บและแชร์ Git Repository
D. Browser

คำตอบ: C

---

## Question 3

คำสั่งใดใช้เริ่ม Git Repository?

A. `git start`
B. `git create`
C. `git init`
D. `git new`

คำตอบ: C

---

## Question 4

คำสั่งใดใช้ตรวจสอบสถานะของไฟล์?

A. `git check`
B. `git status`
C. `git inspect`
D. `git files`

คำตอบ: B

---

## Question 5

Staging Area คืออะไร?

A. พื้นที่เลือกไฟล์สำหรับ Commit ถัดไป
B. Folder ที่เก็บ Code บน GitHub
C. Folder สำหรับไฟล์ที่ถูกลบ
D. หน้า Preview Website

คำตอบ: A

---

## Question 6

คำสั่งใดใช้เพิ่มไฟล์เข้า Staging Area?

A. `git save`
B. `git add`
C. `git upload`
D. `git stage-file`

คำตอบ: B

---

## Question 7

Commit คืออะไร?

A. การลบ Repository
B. จุดบันทึกการเปลี่ยนแปลงของ Project
C. การสร้าง GitHub Account
D. การติดตั้ง Git

คำตอบ: B

---

## Question 8

คำสั่งใดใช้ส่ง Commit ขึ้น GitHub?

A. `git add`
B. `git upload`
C. `git commit`
D. `git push`

คำตอบ: D

---

## Question 9

Branch ใช้ทำอะไร?

A. ใช้ลบ Project
B. ใช้ติดตั้ง Package
C. ใช้สร้างเส้นทางแยกสำหรับพัฒนา Code
D. ใช้เปิด Browser

คำตอบ: C

---

## Question 10

คำสั่งใดสร้างและย้ายไป Branch ใหม่?

A. `git branch-open feature/name`
B. `git switch -c feature/name`
C. `git merge feature/name`
D. `git push feature/name`

คำตอบ: B

---

## Question 11

ถ้าต้องการนำ Feature Branch เข้า `main` ควรทำอย่างไร?

A.

```bash
git switch main
git merge feature/name
```

B.

```bash
git add main
git push feature/name
```

C.

```bash
git merge main
git delete feature/name
```

D.

```bash
git init feature/name
```

คำตอบ: A

---

## Question 12

คำสั่งใดใช้ลบ Branch ที่ Merge แล้ว?

A. `git delete branch-name`
B. `git branch -d branch-name`
C. `git remove branch-name`
D. `git clear branch-name`

คำตอบ: B

---

## Question 13

Merge Conflict เกิดขึ้นเมื่อใด?

A. เมื่อ Git ไม่สามารถตัดสินใจรวมการเปลี่ยนแปลงได้
B. เมื่อไม่มี Internet
C. เมื่อไฟล์ CSS ว่าง
D. เมื่อ Repository เป็น Public

คำตอบ: A

---

# Homework

## Assignment

ให้ผู้เรียนสร้าง Feature ใหม่บน Branch แยก

เลือกหนึ่งหัวข้อ:

* Education Section
* Work Experience Section
* Social Links Section
* Favorite Technologies Section
* Career Goal Section
* Completed Projects Section

---

## Requirement

### 1. เริ่มจาก `main`

ตรวจสอบ:

```bash
git branch
```

### 2. สร้าง Feature Branch

ตัวอย่าง:

```bash
git switch -c feature/add-education-section
```

### 3. เพิ่ม Feature

เพิ่ม HTML และ CSS ตามความเหมาะสม

### 4. สร้างอย่างน้อย 1 Commit

ตัวอย่าง:

```bash
git add .
git commit -m "Add education section"
```

### 5. Merge กลับ `main`

```bash
git switch main
git merge feature/add-education-section
```

### 6. Push

```bash
git push
```

### 7. ลบ Branch

```bash
git branch -d feature/add-education-section
```

---

# Submission

ส่งใน LMS:

1. GitHub Repository URL
2. ชื่อ Feature Branch ที่ใช้
3. Commit Message
4. Screenshot หน้า Repository
5. Screenshot Commit History
6. คำตอบสั้น ๆ:

```text
Branch และ Merge ใช้ทำอะไร?
```

---

# Homework Rubric

| หัวข้อ                       | คะแนน |
| ---------------------------- | ----: |
| Repository เปิดดูได้         |     1 |
| Project ทำงานถูกต้อง         |     2 |
| สร้าง Feature Branch ถูกต้อง |     2 |
| Commit Message ชัดเจน        |     1 |
| Merge กลับเข้า main สำเร็จ   |     2 |
| Push Code ล่าสุดขึ้น GitHub  |     1 |
| อธิบาย Branch และ Merge ได้  |     1 |
| รวม                          |    10 |

---

# LMS Structure

## Lesson 1: Introduction to Version Control

เนื้อหา:

* ปัญหาการเก็บหลาย Version
* Version Control คืออะไร
* Git คืออะไร
* Commit คืออะไร
* Git และ GitHub ต่างกันอย่างไร

---

## Lesson 2: Create the Sample Project

เนื้อหา:

* สร้าง Developer Profile Page
* สร้าง `index.html`
* สร้าง `style.css`
* Preview Website

---

## Lesson 3: Create a Git Repository

เนื้อหา:

* ตรวจสอบ Git
* ตั้งชื่อและอีเมล
* `git init`
* `.git`
* `git status`
* Untracked Files

---

## Lesson 4: Stage and Commit

เนื้อหา:

* Working Directory
* Staging Area
* Local Repository
* `git add`
* `git commit`
* Commit Message

---

## Lesson 5: Build Commit History

เนื้อหา:

* แก้ Personal Information
* สร้าง Commit เพิ่ม
* สร้าง README
* `git log`
* `git log --oneline`

---

## Lesson 6: Connect to GitHub

เนื้อหา:

* Local และ Remote Repository
* สร้าง GitHub Repository
* `git remote add origin`
* `git remote -v`
* Branch `main`

---

## Lesson 7: Push to GitHub

เนื้อหา:

* `git push -u origin main`
* ตรวจสอบไฟล์บน GitHub
* ดู Commit History
* Workflow หลังจาก Push ครั้งแรก

---

## Lesson 8: Introduction to Branch

เนื้อหา:

* Branch คืออะไร
* ปัญหาที่ Branch ช่วยแก้
* `main`
* Feature Branch
* Branch Naming

---

## Lesson 9: Develop on a Feature Branch

เนื้อหา:

* `git branch`
* `git switch -c`
* แก้ Code บน Feature Branch
* Commit บน Branch
* สลับกลับ `main`

---

## Lesson 10: Merge into Main

เนื้อหา:

* Merge คืออะไร
* Merge Direction
* `git merge`
* Fast-forward Merge
* Push หลัง Merge
* ลบ Branch ด้วย `git branch -d`

---

## Lesson 11: Merge Conflict Overview

เนื้อหา:

* Merge Conflict คืออะไร
* Conflict Marker
* วิธีคิดเมื่อต้องเลือก Code
* Workflow หลังแก้ Conflict

---

## Lesson 12: Practice and Submission

เนื้อหา:

* สร้าง Learning Goals Branch
* Commit
* Merge
* Push
* Cleanup Branch
* Quiz
* Homework

---

# Cheat Sheet

## ตรวจสอบ Git

```bash
git --version
```

## ตั้งชื่อและอีเมล

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

## เริ่ม Repository

```bash
git init
```

## ตรวจสอบสถานะ

```bash
git status
```

## เพิ่มไฟล์

```bash
git add filename
```

หรือ:

```bash
git add .
```

## Commit

```bash
git commit -m "Describe your changes"
```

## ดู History

```bash
git log --oneline
```

## เชื่อม GitHub

```bash
git remote add origin REPOSITORY_URL
```

## ตรวจสอบ Remote

```bash
git remote -v
```

## เปลี่ยน Branch หลักเป็น main

```bash
git branch -M main
```

## Push ครั้งแรก

```bash
git push -u origin main
```

## Push ครั้งต่อไป

```bash
git push
```

## ดู Branch

```bash
git branch
```

## สร้าง Feature Branch

```bash
git switch -c feature/feature-name
```

## กลับ Main

```bash
git switch main
```

## Merge Feature

```bash
git merge feature/feature-name
```

## ลบ Branch ที่ Merge แล้ว

```bash
git branch -d feature/feature-name
```

## ดู Commit Graph

```bash
git log --oneline --graph --all
```

---

# Mental Model สรุปท้ายคลาส

```text
Working Directory
ไฟล์ที่กำลังแก้
        ↓
      git add
        ↓

Staging Area
ไฟล์ที่เลือกสำหรับ Commit
        ↓
    git commit
        ↓

Local Repository
ประวัติในเครื่อง
        ↓
      git push
        ↓

GitHub Repository
ประวัติออนไลน์
```

และเมื่อทำ Feature:

```text
main
  ↓
สร้าง Feature Branch
  ↓
แก้ Code
  ↓
Commit
  ↓
กลับ main
  ↓
Merge Feature
  ↓
Push
  ↓
ลบ Feature Branch
```

---

# Script ปิดคลาส

> วันนี้เราไม่ได้เรียนเพียงวิธีส่ง Code ขึ้น GitHub
>
> แต่เราได้เรียน Workflow พื้นฐานที่ Developer ใช้ในการทำงานจริง
>
> เราเริ่มจากการแก้ไฟล์ ตรวจสอบสถานะ เลือกไฟล์ และสร้าง Commit
>
> จากนั้นเราใช้ Branch แยกพื้นที่สำหรับพัฒนา Feature โดยไม่กระทบ main
>
> เมื่อ Feature พร้อม เราจึง Merge กลับเข้า main และ Push ขึ้น GitHub
>
> ตั้งแต่ React เป็นต้นไป เราจะใช้ Workflow นี้ซ้ำกับทุก Feature
>
> Git จะไม่ใช่บทเรียนแยกอีกต่อไป แต่จะกลายเป็นส่วนหนึ่งของกระบวนการพัฒนา Software
