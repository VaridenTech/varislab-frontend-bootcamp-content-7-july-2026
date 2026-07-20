# ☕ Coffee Master Order App

โปรเจกต์ฝึกทำระบบสั่งกาแฟออนไลน์ด้วย **Vanilla TypeScript** เชื่อมกับ DOM ตรง ๆ (ไม่ใช้ framework) เพื่อฝึกจัดการ state, event, และ render UI แบบ real-time

## Features

- แสดงเมนูกาแฟ/เบเกอรี่พร้อมราคาและคำอธิบาย
- เพิ่ม/ลดจำนวนสินค้าในตะกร้าด้วยปุ่ม `+` / `-`
- คำนวณ Subtotal, Tax (7%) และ Total แบบ real-time
- กรอกชื่อลูกค้าและกดสั่งซื้อ พร้อม validation (ต้องกรอกชื่อ และเลือกอย่างน้อย 1 รายการ)
- แสดงข้อความแจ้งเตือน/สำเร็จหลังกดสั่งซื้อ

## Tech Stack

- [Vite](https://vitejs.dev/)
- TypeScript (Vanilla, ไม่ใช้ framework)
- HTML / CSS

## Project Structure

```
03_coffee_master_project/
├── start/    # โครงโปรเจกต์เริ่มต้น สำหรับลงมือทำเอง
└── finish/   # เฉลยฉบับสมบูรณ์ ไว้เทียบคำตอบ
```

## Setup

```sh
npm create vite@latest coffee-master
```

เลือก:

- Vanilla
- TypeScript

จากนั้น:

```sh
cd coffee-master
npm install
npm run dev
```

> หรือจะ `cd` เข้าไปที่โฟลเดอร์ `start/` หรือ `finish/` แล้วรัน `npm install && npm run dev` ได้เลย
