# API Server สำหรับโปรเจกต์ Pizza app

เซิร์ฟเวอร์ [Fastify](https://fastify.dev/) ขนาดเล็กที่ใช้จำลอง backend ให้กับแอป React ที่เราสร้างกันตลอดหลักสูตร
พร้อมกับไฟล์รูปพิซซ่าและ stylesheet ที่ใช้ในบทเรียน

โฟลเดอร์นี้ถูกรวมมาไว้ในเนื้อหาหลักสูตรแล้ว **ไม่ต้องไป clone จาก repository ภายนอก**

## วิธีรัน

ต้องใช้ **Node.js เวอร์ชัน 20 ขึ้นไป**

```bash
cd api
npm install
npm run dev
```

เซิร์ฟเวอร์จะทำงานที่ port `3000` ทดสอบว่ารันได้จริงโดยเปิด <http://localhost:3000/api/pizzas>
ในเบราว์เซอร์ ควรเห็นข้อมูลพิซซ่าเป็น JSON

> เซิร์ฟเวอร์นี้ต้องทำงานคู่ไปกับ Vite dev server ของแอป React ดังนั้นให้เปิด terminal ไว้สองหน้าต่าง
> หน้าต่างหนึ่งสำหรับเซิร์ฟเวอร์นี้ (เปิดทิ้งไว้ไม่ต้องแตะ) อีกหน้าต่างสำหรับ `npm run dev` ของแอป

`npm run dev` ใช้ `node --watch` จึงรีสตาร์ตให้เองเมื่อแก้ไฟล์ ถ้าไม่ต้องการให้ watch ใช้ `npm start` แทน

## Endpoints

| Method | Path | ทำอะไร |
| --- | --- | --- |
| GET | `/api/pizzas` | รายการพิซซ่าทั้งหมด พร้อมราคาแยกตามขนาด |
| GET | `/api/pizza-of-the-day` | พิซซ่าประจำวัน (เปลี่ยนทุกวันตามวันที่ของเครื่อง) |
| GET | `/api/past-orders?page=N` | รายการออร์เดอร์ย้อนหลัง หน้าละ 10 รายการ |
| GET | `/api/past-order/:order_id` | รายละเอียดของออร์เดอร์หนึ่งใบ |
| POST | `/api/order` | สร้างออร์เดอร์ใหม่ จาก body `{ cart: [...] }` |
| POST | `/api/contact` | รับข้อมูลฟอร์มติดต่อ `{ name, email, message }` แล้ว log ออกทาง terminal |
| GET | `/public/*` | ไฟล์ static เช่น `/public/pizzas/pepperoni.webp` และ `/public/style.css` |

> หมายเหตุ: `/api/past-orders` มีการหน่วงเวลาไว้ 5 วินาทีโดยตั้งใจ เพื่อให้เห็นสถานะ loading
> ตอนเรียนเรื่อง TanStack Query อย่างชัดเจน ไม่ใช่บั๊ก

## ข้อมูล

ข้อมูลทั้งหมดเก็บใน `pizza.sqlite` (SQLite) ออร์เดอร์ที่คุณสร้างระหว่างเรียนจะถูกเขียนลงไฟล์นี้จริง ๆ
ถ้าอยากได้ข้อมูลกลับไปเป็นชุดตั้งต้น ให้กู้ไฟล์นี้คืนจาก Git ด้วย
`git checkout -- api/pizza.sqlite`

## ที่มาและสัญญาอนุญาต

โค้ดในโฟลเดอร์นี้มาจาก [citr-v9-project](https://github.com/btholt/citr-v9-project) ของ Brian Holt
ซึ่งเผยแพร่ภายใต้สัญญาอนุญาต Apache License 2.0 (ดูไฟล์ `LICENSE`)
