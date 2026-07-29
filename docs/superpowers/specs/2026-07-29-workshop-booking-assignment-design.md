# Workshop Booking Assignment Design

## เป้าหมาย

สร้างชุดงานเดี่ยวระยะเวลา 1 สัปดาห์สำหรับนักเรียนหลังเรียนโปรเจกต์ Coffee Master โดยให้นักเรียนฝึกทักษะเดิมในบริบทใหม่ แทนการเปลี่ยนเพียงชื่อสินค้าและสีของโปรเจกต์เดิม

ชุดงานใช้ภาษาไทยร่วมกับคำศัพท์เทคนิคภาษาอังกฤษ และประกอบด้วยโจทย์สำหรับนักเรียน starter project เฉลย และเกณฑ์ให้คะแนน

## แนวคิดโปรเจกต์

ชื่อโปรเจกต์คือ **Workshop Hub — ระบบจองเวิร์กช็อป** นักเรียนสร้าง Single-page Application สำหรับเลือกเวิร์กช็อปและจำนวนที่นั่ง ดูสรุปค่าใช้จ่าย และยืนยันการจอง

โปรเจกต์ใช้ HTML, CSS และ Vanilla TypeScript ผ่าน Vite โดยไม่ใช้ framework, backend, API หรือ persistence ใน core requirements

## กลุ่มผู้เรียนและระยะเวลา

- งานเดี่ยว
- ระยะเวลา 1 สัปดาห์
- Core requirements ควรทำเสร็จได้ภายในประมาณ 4–6 ชั่วโมง
- นักเรียนที่ทำส่วนหลักเสร็จก่อนสามารถเลือกทำ bonus features ได้

## ผลลัพธ์การเรียนรู้

นักเรียนต้องได้ฝึกใช้:

- Type และ type annotation
- Array, object และ `Record`
- Function, parameter และ return type
- Loop หรือ array methods
- DOM selection และ DOM rendering
- Event listener และ `data-*` attributes
- Conditional logic และ validation
- Application state และการ render UI ใหม่เมื่อ state เปลี่ยน
- Responsive layout ด้วย CSS

## Core Requirements

1. แสดงเวิร์กช็อปอย่างน้อย 6 รายการจาก array ข้อมูล
2. แต่ละรายการมี `id`, `title`, `description`, `price`, `category` และ `maxSeats`
3. แสดงชื่อ หมวดหมู่ คำอธิบาย ราคา จำนวนที่เลือก และจำนวนที่รับได้ของแต่ละเวิร์กช็อป
4. เพิ่มและลดจำนวนที่นั่งด้วยปุ่ม `+` และ `-`
5. จำนวนที่เลือกต้องไม่ต่ำกว่า `0` และไม่เกิน `maxSeats` ของรายการนั้น
6. แสดงเฉพาะรายการที่มีจำนวนมากกว่า `0` ใน Booking Summary
7. แสดง empty state เมื่อยังไม่ได้เลือกเวิร์กช็อป
8. คำนวณ Subtotal, Service Fee 3% และ Total แบบ real-time
9. รับชื่อผู้จองและยืนยันด้วยปุ่ม `Confirm Booking`
10. แสดง error เมื่อชื่อว่าง หรือเมื่อยังไม่ได้เลือกที่นั่ง
11. เมื่อข้อมูลถูกต้อง แสดงชื่อผู้จอง จำนวนที่นั่งรวม และยอดรวมในข้อความยืนยัน
12. ใช้งานได้ทั้ง desktop และ mobile

จำนวนเงินทั้งหมดแสดงเป็นเงินบาทและมีทศนิยมสองตำแหน่ง การยืนยันการจองไม่ต้องล้าง state หรือ input เพื่อให้ขอบเขตงานยังตรงกับบทเรียน Coffee Master

## Bonus Features

Bonus ไม่เป็นเงื่อนไขของคะแนน core และเลือกทำได้อย่างอิสระ:

- กรองรายการตาม category
- Discount code
- บันทึกและกู้คืนข้อมูลด้วย `localStorage`
- ปุ่มยกเลิกการเลือกทั้งหมด
- แสดงจำนวนที่นั่งคงเหลือ

Bonus รวมไม่เกิน 10 คะแนน และคะแนนสุดท้ายไม่เกิน 100 คะแนน

## โครงสร้างไฟล์

สร้างชุดงานที่ `Week_03/04_workshop_booking_assignment/`:

```text
04_workshop_booking_assignment/
├── README.md
├── RUBRIC.md
├── start/
│   ├── index.html
│   ├── src/
│   │   ├── main.ts
│   │   └── style.css
│   ├── package.json
│   ├── package-lock.json
│   └── tsconfig.json
└── finish/
    ├── index.html
    ├── src/
    │   ├── main.ts
    │   └── style.css
    ├── package.json
    ├── package-lock.json
    └── tsconfig.json
```

### README.md

เอกสารโจทย์ภาษาไทยสำหรับนักเรียน ประกอบด้วย:

- Scenario และเป้าหมายของโปรเจกต์
- User stories
- Core requirements และ bonus features
- คำสั่งติดตั้งและเริ่ม development server
- ข้อกำหนดด้านเทคนิค
- รายการไฟล์ที่ต้องส่ง
- Checklist สำหรับตรวจงานด้วยตัวเองก่อนส่ง

README ต้องไม่อ้างถึงหรือเชื่อมไปยังโฟลเดอร์ `finish/` โดยตรง เพื่อให้สามารถแจก README พร้อม `start/` เป็นชุดงานนักเรียนได้

### RUBRIC.md

เกณฑ์ตรวจ 100 คะแนนพร้อมคำอธิบาย observable behavior และ partial credit ในแต่ละหัวข้อ:

| หัวข้อ | คะแนน |
|---|---:|
| TypeScript และโครงสร้างข้อมูล | 15 |
| แสดงรายการจาก array ผ่าน DOM | 15 |
| เพิ่ม–ลดและควบคุมจำนวนที่นั่ง | 20 |
| Booking Summary และ empty state | 10 |
| คำนวณ Subtotal, Service Fee และ Total | 15 |
| Validation และข้อความยืนยัน | 10 |
| Responsive UI และ usability | 10 |
| ความเรียบร้อยของโค้ดและการตั้งชื่อ | 5 |
| **รวม** | **100** |

### start/

Starter ใช้แนวทางเดียวกับ Coffee Master:

- HTML และ CSS พร้อมใช้งาน เพื่อให้เวลาส่วนใหญ่ใช้กับ TypeScript, state, DOM และ events
- มีข้อมูลเวิร์กช็อปครบอย่างน้อย 6 รายการ
- `main.ts` มี type, constants, DOM selections, function signatures และคำอธิบายจุดที่นักเรียนต้องลงมือทำ
- ฟังก์ชันที่เว้นให้นักเรียนทำใช้ค่าเริ่มต้นที่ปลอดภัยเท่าที่จำเป็น เพื่อให้ TypeScript compile ผ่าน แต่ยังไม่ทำ core behavior ให้เสร็จ
- Core logic ที่เป็นผลลัพธ์การเรียนรู้ยังไม่ถูก implement
- หน้าเริ่มต้นต้องเปิดได้โดยไม่เกิด runtime error แม้ behavior หลักยังไม่ทำงาน

### finish/

เฉลยใช้ UI และ data contract เดียวกับ starter และ implement core requirements ครบทุกข้อ โค้ดต้องอ่านได้ในระดับผู้เริ่มเรียน โดยใช้ไฟล์ TypeScript หลักเพียงไฟล์เดียว

## แนวทางสถาปัตยกรรมเฉลย

ใช้ `Workshop` type สำหรับข้อมูลรายการ และ `Record<number, number>` สำหรับ state จำนวนที่เลือก โดย key คือ workshop ID

ฟังก์ชันแบ่งหน้าที่เป็นกลุ่ม:

- Formatting และ state access เช่น `formatPrice()` และ `getQuantity()`
- State mutation เช่น `increaseQuantity()` และ `decreaseQuantity()`
- Calculation เช่น `calculateSubtotal()`, `calculateServiceFee()`, `calculateTotal()` และ `calculateTotalSeats()`
- Rendering เช่น `renderWorkshopItems()`, `renderBookingItems()` และ `renderSummary()`
- Event setup เช่น `setupWorkshopClickEvents()` และ `setupConfirmBookingButton()`
- `renderApp()` เป็นจุดรวมการ render หลัง state เปลี่ยน

ใช้ event delegation บน container ของรายการและอ่าน `data-action` กับ `data-id` จากปุ่ม การเพิ่มและลดจำนวนต้องตรวจขอบเขตก่อนแก้ state

DOM elements ที่จำเป็นต้องมี null guard ก่อนใช้งาน และ event handler ต้องไม่แก้ state เมื่อ action หรือ workshop ID ไม่ถูกต้อง

## Error Handling และ Validation

- ลดจำนวนเมื่อค่าเป็น `0`: ไม่เปลี่ยน state
- เพิ่มจำนวนเมื่อค่าเท่ากับ `maxSeats`: ไม่เปลี่ยน state
- ไม่พบ workshop ID: ไม่เปลี่ยน state
- ชื่อมีเฉพาะ whitespace: ถือว่าว่าง
- ชื่อว่าง: แสดงข้อความ error และไม่แสดงข้อความ success
- จำนวนที่นั่งรวมเป็น `0`: แสดงข้อความ error และไม่แสดงข้อความ success
- ข้อมูลถูกต้อง: แสดงข้อความ success ที่มีชื่อ จำนวนที่นั่งรวม และ Total

## Visual Design

หน้าเว็บประกอบด้วย header, hero, workshop grid, booking summary, payment summary และ footer สีและ typography ต้องต่างจาก Coffee Master อย่างชัดเจน แต่ยังคง layout ที่เข้าใจง่ายสำหรับผู้เริ่มเรียน

- Desktop: workshop grid หลายคอลัมน์ และ booking/payment summary วางข้างกัน
- Tablet: ลดจำนวนคอลัมน์ตามพื้นที่
- Mobile: ทุกส่วนเรียงเป็นคอลัมน์เดียว ปุ่มมีพื้นที่กดเพียงพอ และข้อความไม่ล้นหน้าจอ
- ใช้ visible focus state, semantic buttons และ label ที่เชื่อมกับ input

## Verification

ทั้ง `start/` และ `finish/` ต้องผ่าน `npm run build` ส่วน behavior ของ `finish/` ตรวจด้วย acceptance checklist ต่อไปนี้:

1. แสดงข้อมูลครบอย่างน้อย 6 รายการจาก TypeScript array
2. ปุ่มเพิ่มและลดอัปเดตทั้ง card, booking summary และยอดเงิน
3. จำนวนไม่ต่ำกว่า `0` และไม่เกิน `maxSeats`
4. หลายรายการและหลายจำนวนคำนวณ Subtotal ถูกต้อง
5. Service Fee เท่ากับ 3% ของ Subtotal และ Total เท่ากับผลรวมทั้งสองค่า
6. Empty state แสดงเฉพาะเมื่อไม่มีรายการที่เลือก
7. ชื่อว่างและ booking ว่างแสดง error ที่ถูกต้อง
8. การจองที่ valid แสดงข้อความ success พร้อมค่าที่กำหนด
9. Layout ใช้งานได้ที่ความกว้าง desktop และ mobile
10. Starter ไม่มี core logic ที่ทำงานแทนนักเรียนจนหมด

ไม่เพิ่ม test framework เพราะยังอยู่นอกขอบเขตบทเรียนนี้ การตรวจ behavior ใช้ manual acceptance checks และ build verification

## สิ่งที่ไม่รวมในขอบเขต

- Backend หรือ API
- Authentication
- Payment จริง
- Framework เช่น React
- Automated test framework
- Multi-page navigation
- การบังคับใช้ bonus feature ใดเป็น core requirement
