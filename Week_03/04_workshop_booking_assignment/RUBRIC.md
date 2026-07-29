# Workshop Hub — Grading Rubric

## 1. TypeScript และโครงสร้างข้อมูล — 15 คะแนน

- 13–15: `Workshop` และ `Workshop[]` ถูกต้องครบ 6 fields, ใช้ `Record<number, number>`, ไม่มี type error
- 7–12: ใช้ TypeScript และ typed data แต่ขาด field/type บางส่วนหรือมี type assertion ที่ไม่จำเป็น
- 1–6: มีข้อมูลแต่ส่วนใหญ่ใช้ `any` หรือไม่ได้กำหนดโครงสร้างชัดเจน
- 0: ไม่มี TypeScript data model ที่ใช้งานได้

## 2. Render รายการผ่าน DOM — 15 คะแนน

- 13–15: สร้างอย่างน้อย 6 cards จาก array และแสดงข้อมูล/controls ครบ
- 7–12: Render จาก array ได้แต่ข้อมูลหรือ control ขาดบางส่วน
- 1–6: มีรายการแบบ hard-code หรือ render ได้เพียงบางส่วน
- 0: ไม่มีรายการบนหน้าเว็บ

## 3. การเพิ่ม–ลดจำนวนที่นั่ง — 20 คะแนน

- 17–20: เพิ่ม–ลดทุก card ได้, state ถูกต้อง, ไม่ต่ำกว่า 0, ไม่เกิน `maxSeats`
- 9–16: เพิ่ม–ลดได้แต่ผิดพลาดบางกรณีหรือขาดขอบเขตด้านใดด้านหนึ่ง
- 1–8: ปุ่มเปลี่ยน UI ได้บางส่วนแต่ state ไม่สอดคล้อง
- 0: ปุ่มไม่ทำงาน

## 4. Booking Summary และ Empty State — 10 คะแนน

- 9–10: แสดงเฉพาะรายการที่เลือกพร้อมจำนวน/line total และสลับ empty state ถูกต้อง
- 5–8: Summary ทำงานแต่ข้อมูลหรือ empty state ผิดบางกรณี
- 1–4: แสดงข้อมูลได้บางส่วนแต่ไม่สัมพันธ์กับ state
- 0: ไม่มี summary

## 5. การคำนวณยอดเงิน — 15 คะแนน

- 13–15: Subtotal, Service Fee 3% และ Total ถูกต้องทุกจำนวนและอัปเดต real-time
- 7–12: สูตรหลักถูกต้องแต่ผิดบางกรณีหรือ formatting ไม่ครบ
- 1–6: คำนวณได้เพียงบางค่า
- 0: ไม่มีการคำนวณ

## 6. Validation และข้อความยืนยัน — 10 คะแนน

- 9–10: ตรวจชื่อว่าง/whitespace และ booking ว่าง พร้อม success ที่มีชื่อ จำนวนรวม และ Total โดยคงจำนวนที่เลือกและข้อมูลในช่องชื่อไว้
- 5–8: Validation และ success ทำงานแต่ขาดข้อมูลหรือ edge case บางส่วน
- 1–4: มีข้อความแต่เงื่อนไขไม่ครบหรือไม่ถูกต้อง
- 0: ไม่มี validation/confirmation

## 7. Responsive UI และ Usability — 10 คะแนน

- 9–10: Desktop/mobile ใช้งานได้, controls ชัดเจน, label/focus state เหมาะสม
- 5–8: Layout responsive แต่มีปัญหาเล็กน้อยด้าน readability หรือ controls
- 1–4: แสดงผลได้แต่ mobile ใช้งานยากหรือข้อมูลล้น
- 0: UI ใช้งานไม่ได้

## 8. Code Quality — 5 คะแนน

- 5: แยก function ตามหน้าที่ ตั้งชื่อสื่อความหมาย และไม่มี code ซ้ำที่ชัดเจน
- 3–4: อ่านเข้าใจได้แต่ function หรือชื่อบางส่วนไม่ชัด
- 1–2: โค้ดทำงานแต่รวมหลายหน้าที่หรือซ้ำมาก
- 0: โค้ดไม่สามารถอ่านหรือตรวจต่อได้

## Bonus — สูงสุด 10 คะแนน

ให้ 2 คะแนนต่อ bonus feature ที่ทำงานครบ ได้แก่ category filter, discount code, `localStorage`, clear booking และ remaining seats คะแนนรวมสุดท้ายต้องไม่เกิน 100
