# 🎨 Workshop Hub Assignment

สร้างเว็บแอปสำหรับจองเวิร์กช็อปด้วย HTML, CSS และ Vanilla TypeScript โดยนำความรู้จาก Coffee Master ไปแก้โจทย์ในบริบทใหม่ งานนี้เป็นงานเดี่ยวและมีกำหนดเวลา 1 สัปดาห์ โดยงานแกนหลักใช้เวลาประมาณ 4–6 ชั่วโมง

งานนี้ **ไม่มีโค้ดเริ่มต้นให้** ต้องสร้างโปรเจกต์ Vite เอง และเขียน HTML, CSS และ TypeScript ขึ้นมาเองทั้งหมด

## ตัวอย่างโปรเจกต์

🔗 [ดู Workshop Hub เวอร์ชันตัวอย่าง](https://varislab-frontend-bootcamp-workshop-hub.onrender.com/)

## User Stories

- ผู้ใช้ดูชื่อ หมวดหมู่ รายละเอียด ราคา และจำนวนที่รับได้ของเวิร์กช็อปอย่างน้อย 6 รายการได้
- ผู้ใช้เพิ่มหรือลดจำนวนที่นั่งได้ โดยจำนวนไม่ต่ำกว่า 0 และไม่เกิน `maxSeats`
- ผู้ใช้เห็นรายการที่เลือก Subtotal, Service Fee 3% และ Total เปลี่ยนทันที
- ผู้ใช้กรอกชื่อและยืนยันการจองได้
- ผู้ใช้ได้รับข้อความที่ชัดเจนเมื่อข้อมูลไม่ครบหรือเมื่อจองสำเร็จ

## Core Requirements

1. สร้างโปรเจกต์ Vite (Vanilla + TypeScript) ขึ้นมาเอง แล้วเขียน `index.html` และ `src/style.css` ของตัวเองทั้งหมด
2. ออกแบบโครงหน้าเว็บให้มีอย่างน้อย ส่วนหัวเว็บ, ส่วนแสดงรายการเวิร์กช็อป และส่วน Booking Summary ที่มีช่องกรอกชื่อกับปุ่มยืนยัน
3. จัดสไตล์เอง โดยทำ layout ของรายการเวิร์กช็อปและ Booking Summary ให้อ่านง่ายทั้งบนจอใหญ่และจอเล็ก
4. สร้าง `Workshop` type ที่มี `id`, `title`, `description`, `price`, `category` และ `maxSeats`
5. เก็บเวิร์กช็อปอย่างน้อย 6 รายการใน `Workshop[]`
6. เก็บจำนวนที่เลือกด้วย `Record<number, number>`
7. Render workshop cards จาก array ด้วย TypeScript
8. ใช้ event listener และ `data-action` / `data-id` สำหรับปุ่มเพิ่ม–ลด
9. จำกัดจำนวนให้อยู่ระหว่าง 0 และ `maxSeats`
10. แสดงเฉพาะรายการที่เลือกใน Booking Summary และแสดง empty state เมื่อยังไม่มีรายการ
11. คำนวณ Subtotal, Service Fee 3% และ Total แบบ real-time
12. ตรวจว่ากรอกชื่อและเลือกอย่างน้อย 1 ที่นั่งก่อนยืนยัน
13. เมื่อยืนยันสำเร็จ ให้แสดงชื่อ จำนวนที่นั่งรวม และ Total โดยต้องคงจำนวนที่เลือกและข้อมูลในช่องชื่อไว้
14. รองรับ desktop และ mobile

## เริ่มต้นโปรเจกต์

ข้อกำหนดเบื้องต้น: ติดตั้ง Node.js เวอร์ชัน `^20.19.0 || >=22.12.0`

สร้างโปรเจกต์ใหม่ด้วย Vite เหมือนที่ทำในโปรเจกต์ Coffee Master

```sh
npm create vite@latest workshop-hub
```

เลือก:

- Vanilla
- TypeScript

จากนั้น:

```sh
cd workshop-hub
npm install
npm run dev
```

Vite จะสร้างหน้าตัวอย่างมาให้ใน `index.html` และ `src/` ให้ลบเนื้อหาตัวอย่างออก แล้วเขียน markup, CSS และ TypeScript ของ Workshop Hub ขึ้นมาเองทั้งหมด

## ข้อกำหนดด้านเทคนิค

- ใช้ Vanilla TypeScript เท่านั้น
- เขียน HTML และ CSS ขึ้นมาเอง (ดูเว็บตัวอย่างเป็นแนวทางของ layout ได้)
- ใช้ CSS framework หรือ UI library อย่าง Tailwind หรือ Bootstrap ได้ถ้าถนัดอยู่แล้ว แต่คอร์สไม่ได้สอนไว้ จึงไม่จำเป็นต้องใช้
- ไม่ใช้ React, framework, backend, API, authentication, payment integration หรือ automated test framework
- แยกหน้าที่ของ function ให้ชัดเจนและระบุ parameter/return type
- แสดงเงินบาทด้วยทศนิยมสองตำแหน่ง
- ห้ามให้จำนวนติดลบหรือเกิน `maxSeats`

## Bonus

- Category filter
- Discount code
- `localStorage`
- Clear booking button
- Remaining seats

## สิ่งที่ต้องส่ง

- `index.html`
- `src/main.ts`
- `src/style.css`
- `package.json`, `package-lock.json` และ `tsconfig.json`
- Screenshot หน้าจอ desktop และ mobile

## Checklist ก่อนส่ง

- [ ] สร้างโปรเจกต์ Vite เอง และเขียน `index.html` กับ `src/style.css` ขึ้นมาเอง
- [ ] `npm run build` ผ่าน
- [ ] แสดงเวิร์กช็อปอย่างน้อย 6 รายการจาก array
- [ ] ปุ่มเพิ่ม–ลดและขอบเขตจำนวนทำงานถูกต้อง
- [ ] Booking Summary และยอดเงินอัปเดตทันที
- [ ] Empty state, error state และ success state แสดงถูกต้อง โดย success state ไม่ล้างจำนวนที่เลือกหรือข้อมูลในช่องชื่อ
- [ ] ใช้งานได้ทั้ง desktop และ mobile
