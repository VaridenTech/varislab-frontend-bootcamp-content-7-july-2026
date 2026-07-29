# 🎨 Workshop Hub Assignment

สร้างเว็บแอปสำหรับจองเวิร์กช็อปด้วย HTML, CSS และ Vanilla TypeScript โดยนำความรู้จาก Coffee Master ไปแก้โจทย์ในบริบทใหม่ งานนี้เป็นงานเดี่ยวและมีกำหนดเวลา 1 สัปดาห์ โดยงานแกนหลักใช้เวลาประมาณ 4–6 ชั่วโมง

## User Stories

- ผู้ใช้ดูชื่อ หมวดหมู่ รายละเอียด ราคา และจำนวนที่รับได้ของเวิร์กช็อปอย่างน้อย 6 รายการได้
- ผู้ใช้เพิ่มหรือลดจำนวนที่นั่งได้ โดยจำนวนไม่ต่ำกว่า 0 และไม่เกิน `maxSeats`
- ผู้ใช้เห็นรายการที่เลือก Subtotal, Service Fee 3% และ Total เปลี่ยนทันที
- ผู้ใช้กรอกชื่อและยืนยันการจองได้
- ผู้ใช้ได้รับข้อความที่ชัดเจนเมื่อข้อมูลไม่ครบหรือเมื่อจองสำเร็จ

## Core Requirements

1. สร้าง `Workshop` type ที่มี `id`, `title`, `description`, `price`, `category` และ `maxSeats`
2. เก็บเวิร์กช็อปอย่างน้อย 6 รายการใน `Workshop[]`
3. เก็บจำนวนที่เลือกด้วย `Record<number, number>`
4. Render workshop cards จาก array ด้วย TypeScript
5. ใช้ event listener และ `data-action` / `data-id` สำหรับปุ่มเพิ่ม–ลด
6. จำกัดจำนวนให้อยู่ระหว่าง 0 และ `maxSeats`
7. แสดงเฉพาะรายการที่เลือกใน Booking Summary และแสดง empty state เมื่อยังไม่มีรายการ
8. คำนวณ Subtotal, Service Fee 3% และ Total แบบ real-time
9. ตรวจว่ากรอกชื่อและเลือกอย่างน้อย 1 ที่นั่งก่อนยืนยัน
10. เมื่อยืนยันสำเร็จ ให้แสดงชื่อ จำนวนที่นั่งรวม และ Total โดยต้องคงจำนวนที่เลือกและข้อมูลในช่องชื่อไว้
11. รองรับ desktop และ mobile

## เริ่มต้นโปรเจกต์

ข้อกำหนดเบื้องต้น: ติดตั้ง Node.js เวอร์ชัน `^20.19.0 || >=22.12.0`

```sh
cd Week_03/04_workshop_booking_assignment/start
npm install
npm run dev
```

## ข้อกำหนดด้านเทคนิค

- ใช้ Vanilla TypeScript เท่านั้น
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

- [ ] `npm run build` ผ่าน
- [ ] แสดงเวิร์กช็อปอย่างน้อย 6 รายการจาก array
- [ ] ปุ่มเพิ่ม–ลดและขอบเขตจำนวนทำงานถูกต้อง
- [ ] Booking Summary และยอดเงินอัปเดตทันที
- [ ] Empty state, error state และ success state แสดงถูกต้อง โดย success state ไม่ล้างจำนวนที่เลือกหรือข้อมูลในช่องชื่อ
- [ ] ใช้งานได้ทั้ง desktop และ mobile
