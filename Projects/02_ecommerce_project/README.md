# 🛍️ Project 02: React E-commerce Website

สร้างเว็บไซต์ E-commerce ของตัวเองด้วย React และ TypeScript โดยออกแบบร้านค้า แบรนด์ ประสบการณ์ใช้งาน และโครงสร้างโค้ดด้วยตัวเอง

โปรเจกต์นี้เป็น **งานเดี่ยว** นักเรียนต้องเริ่มโปรเจกต์ใหม่และเขียนโค้ดด้วยตัวเองทั้งหมด ข้อมูลสินค้าต้องมาจาก [DummyJSON](https://dummyjson.com/) และเว็บไซต์ต้องรองรับขั้นตอนตั้งแต่เลือกดูสินค้าไปจนถึงยืนยันคำสั่งซื้อ

> เป้าหมายคือการแสดงว่านักเรียนสามารถวางแผนและพัฒนาเว็บไซต์ที่ใช้งานได้จริงด้วยความเข้าใจของตัวเอง

## Learning Goals

เมื่อจบโปรเจกต์นี้ นักเรียนควรสามารถ:

- สร้าง Single Page Application ด้วย React, TypeScript และ Vite
- ออกแบบ component และจัดโครงสร้างโปรเจกต์ให้ดูแลต่อได้
- สร้างหลายหน้าด้วย React Router
- ดึงและจัดการข้อมูล API ด้วย Axios และ TanStack Query
- จัดการ shared state ของตะกร้าสินค้า
- สร้างและตรวจสอบ form ด้วย React Hook Form และ Zod
- จัดการ loading, error, empty และ success state
- เขียน automated tests สำหรับ logic และ user flow ที่สำคัญ
- สร้าง responsive UI ที่ใช้งานได้ทั้ง desktop และ mobile

## กติกาเรื่องผลงานของตนเอง

- ต้องสร้างโปรเจกต์ Vite ใหม่ตั้งแต่ต้น และเขียน source code ด้วยตัวเอง
- ห้าม copy component, page, stylesheet, test หรือโครงสร้างไฟล์จากโปรเจกต์อื่นมาใช้โดยตรง
- สามารถย้อนดูบทเรียน เอกสารประกอบ และ documentation ของ library เพื่อทบทวนแนวคิดได้
- ต้องตั้งชื่อร้าน เลือกแนวทางการออกแบบ และเขียน UI ที่มีเอกลักษณ์ของตัวเอง
- หากนำ code snippet หรือ asset จากแหล่งอื่นมาใช้ ต้องเข้าใจ อธิบายได้ และระบุแหล่งที่มาใน README ของนักเรียน
- นักเรียนต้องสามารถอธิบายโครงสร้างโปรเจกต์ data flow และโค้ดส่วนสำคัญของตัวเองได้

ผลงานที่ copy หรือดัดแปลงจากโปรเจกต์อื่นเพียงเล็กน้อยอาจไม่ได้รับการตรวจจนกว่าจะสร้างใหม่ให้เป็นผลงานของตนเอง

## การใช้ AI และ Vibe Coding

อนุญาตให้ใช้ AI ช่วยพัฒนาโปรเจกต์หรือทำ Vibe Coding ได้ โดยนักเรียนยังคงเป็นผู้รับผิดชอบต่อ code และผลลัพธ์ทั้งหมดที่ส่ง

- เขียน prompt อย่างมีโครงสร้าง โดยระบุ context, เป้าหมาย, requirements, constraints และผลลัพธ์ที่ต้องการให้ชัดเจน
- แบ่งงานใหญ่เป็น prompt ย่อยที่ตรวจสอบได้ แทนการสั่งให้ AI สร้างทั้งโปรเจกต์ในครั้งเดียว
- ให้ข้อมูลที่จำเป็น เช่น code ปัจจุบัน, type, API response หรือ error message โดยไม่ส่ง secret หรือข้อมูลสำคัญ
- ตรวจสอบ ทดสอบ และปรับปรุง code ที่ AI สร้างก่อนนำมาใช้ ห้ามรับ code มาใช้โดยไม่อ่านหรือไม่เข้าใจ
- นักเรียนต้องอธิบายได้ว่า code ส่วนสำคัญทำงานอย่างไร เหตุใดจึงเลือกแนวทางนั้น และจะแก้ไขอย่างไรเมื่อเกิดปัญหา
- หากใช้ AI ให้เพิ่มหัวข้อ `AI Usage` ใน README ของนักเรียน โดยระบุเครื่องมือที่ใช้ พร้อมตัวอย่าง prompt ที่มีโครงสร้างอย่างน้อย 3 ตัวอย่าง และสรุปว่านำผลลัพธ์ไปตรวจสอบหรือปรับแก้อย่างไร

การใช้ AI จะไม่ถูกหักคะแนนเมื่อใช้อย่างมีความรับผิดชอบ แต่การส่ง code ที่นักเรียนอธิบายไม่ได้ หรือ code ที่ไม่ผ่านการตรวจสอบ จะถือว่ายังไม่ผ่าน requirement ด้านความเข้าใจและ code quality

## Tech Stack ที่ต้องใช้

- React
- TypeScript
- Vite
- React Router
- TanStack Query
- Axios
- React Hook Form
- Zod
- Sass/SCSS โดยใช้ CSS Modules หรือโครงสร้าง SCSS ที่แบ่งหน้าที่ชัดเจน
- Vitest
- React Testing Library
- Mock Service Worker (MSW) หรือวิธี mock API ที่เหมาะสมสำหรับ test

สามารถใช้ library เสริม เช่น icon, carousel, modal หรือ loading indicator ได้ แต่ library เหล่านั้นต้องไม่ทำหน้าที่แทน requirements หลักของโปรเจกต์

## API ที่ต้องใช้

ใช้ Base URL ต่อไปนี้:

```text
https://dummyjson.com
```

Endpoint หลักที่ต้องใช้:

| จุดประสงค์ | Method | Endpoint |
| --- | --- | --- |
| แสดงรายการสินค้า | `GET` | `/products?limit={limit}&skip={skip}` |
| แสดงรายละเอียดสินค้า | `GET` | `/products/{id}` |
| แสดงหมวดหมู่ทั้งหมด | `GET` | `/products/categories` |
| แสดงสินค้าตามหมวดหมู่ | `GET` | `/products/category/{slug}` |
| จำลองการส่งคำสั่งซื้อ | `POST` | `/carts/add` |

ศึกษา response และวิธีใช้งานเพิ่มเติมได้จาก:

- [DummyJSON Products documentation](https://dummyjson.com/docs/products)
- [DummyJSON Carts documentation](https://dummyjson.com/docs/carts)

> DummyJSON เป็น mock API การเพิ่ม cart หรือส่งคำสั่งซื้อเป็นเพียงการจำลอง API response ข้อมูลจะไม่ถูกบันทึกถาวรบน server

## User Stories

- ผู้ใช้ดูรายการสินค้า รูป ชื่อ ราคา และหมวดหมู่ได้
- ผู้ใช้เปลี่ยนหน้าเพื่อดูสินค้าเพิ่มเติมได้
- ผู้ใช้เลือกหมวดหมู่และดูเฉพาะสินค้าในหมวดหมู่นั้นได้
- ผู้ใช้เปิดหน้ารายละเอียดของสินค้าแต่ละชิ้นได้
- ผู้ใช้เพิ่มสินค้าลงตะกร้าและเห็นจำนวนสินค้าในตะกร้าได้
- ผู้ใช้เพิ่ม ลด หรือลบสินค้าในตะกร้าได้
- ผู้ใช้เห็นยอดรวมของตะกร้าที่เปลี่ยนตามจำนวนสินค้าได้ทันที
- ผู้ใช้กรอกข้อมูลจัดส่งและเห็น validation message เมื่อข้อมูลไม่ถูกต้องได้
- ผู้ใช้ยืนยันคำสั่งซื้อและเห็นหน้าสั่งซื้อสำเร็จได้
- ผู้ใช้ได้รับ feedback ที่ชัดเจนเมื่อข้อมูลกำลังโหลด ไม่มีข้อมูล หรือ API มีปัญหา

## หน้าที่ต้องมี

ใช้ React Router สร้างอย่างน้อย 6 routes ต่อไปนี้ ชื่อ path สามารถปรับได้ แต่หน้าที่ของแต่ละหน้าต้องครบ

1. **Home / Products** — แสดงรายการสินค้าและ pagination
2. **Categories** — เลือกหมวดหมู่และแสดงสินค้าของหมวดหมู่นั้น
3. **Product Detail** — แสดงรายละเอียดสินค้าจาก product ID
4. **Cart** — แสดงและแก้ไขสินค้าในตะกร้า
5. **Checkout** — รับข้อมูลลูกค้าและยืนยันคำสั่งซื้อ
6. **Order Success** — แสดงผลเมื่อส่งคำสั่งซื้อสำเร็จ

ทุกหน้าต้องอยู่ภายใต้ layout หลักที่มี navigation และทางเข้าสู่ตะกร้าสินค้า

## Core Requirements

### 1. Project Setup และ Code Quality

1. สร้างโปรเจกต์ใหม่ด้วย Vite โดยเลือก React และ TypeScript
2. เปิดใช้ TypeScript strict mode และไม่ใช้ `any` เพื่อหลบ type error
3. แบ่ง component, page, API function, type, hook และ utility ตามหน้าที่อย่างเหมาะสม
4. ตั้งค่า import alias เช่น `@/` เพื่อให้ import อ่านง่าย
5. มีคำสั่งอย่างน้อย `dev`, `build`, `lint`, `typecheck` และ `test` ใน `package.json`
6. ไม่มี error ใน browser console ระหว่าง user flow ปกติ

### 2. Product List และ Pagination

1. ดึงสินค้าจาก `GET /products` ด้วย Axios และ TanStack Query
2. แสดงอย่างน้อยรูปสินค้า ชื่อ ราคา rating และหมวดหมู่บน product card
3. ใช้ `limit`, `skip` และค่า `total` จาก API เพื่อทำ pagination
4. เมื่อเปลี่ยนหน้า ต้องแสดงสินค้าชุดใหม่และมีสถานะที่บอกผู้ใช้ว่ากำลังโหลด
5. กด product card หรือปุ่มบน card เพื่อไปหน้ารายละเอียดได้

### 3. Categories

1. ดึงหมวดหมู่จาก `GET /products/categories`
2. ผู้ใช้เลือกหมวดหมู่แล้วเห็นสินค้าจาก `GET /products/category/{slug}`
3. หมวดหมู่ที่กำลังเลือกต้องสังเกตเห็นได้ชัดเจน
4. เมื่อเปลี่ยนหมวดหมู่ ต้อง reset pagination ไปหน้าแรก
5. รองรับกรณีหมวดหมู่ไม่มีสินค้า

### 4. Product Detail

1. อ่าน product ID จาก route parameter
2. ดึงข้อมูลจาก `GET /products/{id}`
3. แสดงอย่างน้อยชื่อ รูปภาพ คำอธิบาย ราคา rating stock และหมวดหมู่
4. ผู้ใช้เลือกจำนวนที่มากกว่า 0 และเพิ่มสินค้าลงตะกร้าได้
5. ห้ามเพิ่มจำนวนสินค้าเกิน stock ที่ API ส่งกลับมา
6. แสดง feedback หลังเพิ่มสินค้าลงตะกร้าสำเร็จ
7. รองรับ invalid product ID และกรณีไม่พบสินค้า

### 5. Cart

1. เก็บ cart เป็น shared client state ด้วย Context API ร่วมกับ `useReducer` หรือแนวทางที่มีเหตุผลเทียบเท่า
2. สินค้าใน cart ต้องมีข้อมูลที่จำเป็น เช่น `id`, `title`, `price`, `thumbnail` และ `quantity`
3. เพิ่มสินค้าเดิมซ้ำแล้วรวม quantity อย่างถูกต้อง
4. เพิ่ม ลด และลบสินค้าออกจาก cart ได้
5. quantity ต้องไม่ต่ำกว่า 1 และไม่เกิน stock
6. แสดงจำนวนสินค้ารวมและราคารวมที่คำนวณจาก state ปัจจุบัน
7. icon หรือลิงก์ตะกร้าใน navigation ต้องแสดงจำนวนสินค้าปัจจุบัน
8. แสดง empty state พร้อมทางกลับไปเลือกสินค้าเมื่อ cart ว่าง
9. บันทึก cart ลง `localStorage` และเรียกคืนได้หลัง refresh หน้าเว็บ

### 6. Checkout และ Order Success

1. หาก cart ว่าง ผู้ใช้ต้องไม่สามารถยืนยันคำสั่งซื้อได้
2. สร้าง checkout form ด้วย React Hook Form และ Zod
3. Form ต้องมีอย่างน้อย ชื่อ-นามสกุล, email, เบอร์โทรศัพท์ และที่อยู่จัดส่ง
4. แสดง validation message ใกล้ field ที่ไม่ถูกต้อง
5. แสดง order summary และยอดรวมก่อนยืนยัน
6. เมื่อ submit ให้ส่ง `POST /carts/add` โดยมี `userId` และสินค้าในรูป `{ id, quantity }`
7. ระหว่างส่งข้อมูล ให้ disable ปุ่ม submit และแสดง pending state เพื่อป้องกันการกดซ้ำ
8. หาก API สำเร็จ ให้ไปหน้า Order Success และแสดง order ID ที่ได้จาก response
9. ล้าง cart หลังยืนยันคำสั่งซื้อสำเร็จเท่านั้น
10. หาก API ล้มเหลว ให้แสดงข้อความที่เข้าใจง่าย คงข้อมูลใน form และเปิดให้ลองใหม่ได้

### 7. Server State และ UI States

1. การอ่านข้อมูลจาก DummyJSON ต้องจัดการผ่าน TanStack Query
2. แยก query key อย่างเป็นระบบสำหรับ product list, category และ product detail
3. ทุกส่วนที่เรียก API ต้องมี loading, error และ success state
4. รายการข้อมูลต้องมี empty state เมื่อไม่มีข้อมูล
5. Error message ต้องมีข้อมูลเพียงพอให้ผู้ใช้เข้าใจและมีทาง retry หรือกลับไปหน้าที่ใช้งานต่อได้
6. Route ที่ไม่มีอยู่ต้องมี Not Found หรือ route error page

### 8. Design, Responsive และ Accessibility

1. ตั้งชื่อร้านและสร้าง visual design ของตัวเอง
2. Layout, สี, typography และ component design ต้องสะท้อนแนวคิดของนักเรียนเอง
3. รองรับ mobile และ desktop โดยไม่มี horizontal overflow ที่ไม่ตั้งใจ
4. ใช้ semantic HTML และ heading ตามลำดับที่เหมาะสม
5. รูปสินค้าต้องมี `alt` text และ form control ต้องมี label
6. ปุ่มและลิงก์ต้องใช้งานด้วย keyboard ได้และมี focus state ที่มองเห็นชัด
7. สีตัวอักษรและพื้นหลังต้องอ่านง่าย รวมถึง loading และ error message

### 9. Deployment บน Vercel

1. Deploy ผลงานสุดท้ายบน [Vercel](https://vercel.com/) และส่ง public URL ที่เปิดดูได้โดยไม่ต้องขอ permission
2. Deployment ต้อง build สำเร็จและไม่มี error ที่ทำให้ user flow หลักใช้งานไม่ได้
3. ทุกหน้าที่กำหนดต้องใช้งานได้บน deployed website
4. เมื่อเปิดหรือ refresh URL ของ route โดยตรง เช่น `/products/1`, `/cart` หรือ `/checkout` ต้องไม่พบ Vercel 404
5. ตรวจสอบ deployed website ทั้งบน desktop และ mobile ก่อนส่ง

ศึกษาเพิ่มเติมได้จาก [Vite on Vercel](https://vercel.com/templates/react/vite-react) และเอกสารเกี่ยวกับ [SPA routing บน Vercel](https://examples.vercel.com/kb/guide/why-is-my-deployed-project-giving-404)

### 10. Automated Tests

เขียน test อย่างน้อย **8 test cases** โดยต้องครอบคลุมทุกกลุ่มต่อไปนี้:

- utility หรือ calculation เช่น pagination และ cart total
- cart reducer/state เช่น add, merge quantity, update และ remove
- product list หรือ category page ในกรณี API สำเร็จ
- loading หรือ error state ของ API อย่างน้อย 1 กรณี
- checkout validation อย่างน้อย 1 กรณี
- checkout success flow อย่างน้อย 1 กรณี

Test ที่เรียก API ต้อง mock network request เพื่อให้ผลลัพธ์แน่นอนและไม่พึ่ง internet จริง

## เริ่มต้นโปรเจกต์

ข้อกำหนดเบื้องต้น: ใช้ Node.js เวอร์ชันที่ Vite รองรับ

```sh
npm create vite@latest my-ecommerce-store
```

เลือก:

- React
- TypeScript

จากนั้น:

```sh
cd my-ecommerce-store
npm install
npm run dev
```

ติดตั้ง library ที่กำหนดใน Tech Stack และวางแผนโครงสร้างโปรเจกต์ก่อนเริ่มสร้างแต่ละหน้า

## Suggested Milestones

1. ตั้งค่าโปรเจกต์ routes, layout, styles และ API client
2. สร้าง product list, pagination, categories และ product detail
3. สร้าง cart state, cart page และ `localStorage`
4. สร้าง checkout form, API mutation และ order success page
5. เพิ่ม loading, error, empty, responsive และ accessibility states
6. เขียน test ตรวจ code quality และ deploy ผลงานบน Vercel

## Bonus Features

Bonus ไม่สามารถชดเชย Core Requirements ที่ยังไม่ครบ

- ค้นหาสินค้าด้วย `/products/search?q={keyword}`
- เรียงสินค้าตามชื่อ ราคา หรือ rating
- แสดง image gallery หรือ carousel ในหน้ารายละเอียด
- รองรับ light/dark theme
- เพิ่ม wishlist ที่บันทึกใน `localStorage`
- เพิ่ม toast notification
- เพิ่ม test coverage นอกเหนือจากกรณีที่กำหนด

## สิ่งที่ต้องส่ง

ส่งทั้ง **ลิงก์ Git repository** และ **ลิงก์เว็บไซต์ที่ deploy บน Vercel** โดย repository ต้องมี:

- source code ทั้งหมดของโปรเจกต์
- `package.json` และ lockfile
- README ของนักเรียนที่มีชื่อโปรเจกต์ คำอธิบาย วิธีติดตั้ง วิธีรัน คำสั่ง test และแหล่งที่มาของ asset/code ภายนอก
- หัวข้อ `AI Usage` พร้อมตัวอย่าง prompt และวิธีตรวจสอบผลลัพธ์ หากมีการใช้ AI
- screenshot อย่างน้อย 4 ภาพ ได้แก่ Home, Product Detail, Cart และ Checkout โดยต้องมีทั้ง desktop และ mobile อย่างน้อยอย่างละ 1 ภาพ

ลิงก์ Vercel ต้องเป็น deployment ล่าสุด เปิดใช้งานได้จริง และรองรับการเปิดหรือ refresh route โดยตรง

ห้ามส่ง `node_modules`, `dist`, secret, token หรือไฟล์ `.env` ที่มีข้อมูลสำคัญขึ้น Git repository

## เกณฑ์การให้คะแนน (100 คะแนน)

| หมวด | คะแนน | สิ่งที่พิจารณา |
| --- | ---: | --- |
| Project setup, AI usage และ deployment | 10 | TypeScript, scripts, structure, ความเข้าใจ code, การใช้ AI อย่างมีความรับผิดชอบ (หากใช้) และ Vercel deployment |
| Products, pagination และ categories | 20 | API integration, pagination และ category flow ทำงานถูกต้อง |
| Product detail และ routing | 10 | Dynamic route, product information และ invalid route state |
| Cart | 20 | Add/update/remove, totals, stock rules, shared state และ persistence |
| Checkout | 15 | Form validation, mutation, pending/error/success flow และ clear cart timing |
| UI/UX, responsive และ accessibility | 15 | งานออกแบบของตัวเอง ใช้งานง่ายบนหลายขนาดหน้าจอ และ semantic/accessibility basics |
| Automated tests | 10 | ครบกลุ่มที่กำหนด ทดสอบ behavior สำคัญ และ mock API อย่างเหมาะสม |

อาจหักคะแนนเพิ่มเติมในกรณีต่อไปนี้:

- โปรเจกต์ build ไม่ผ่าน
- มี console error ใน user flow หลัก
- ส่งงานไม่ครบหรือ repository เปิดไม่ได้
- ใช้ hard-coded product data แทน DummyJSON
- ไม่สามารถอธิบายโค้ดหรือการตัดสินใจในโปรเจกต์ของตนเองได้

## Checklist ก่อนส่ง

- [ ] สร้างโปรเจกต์ใหม่ตั้งแต่ต้นและเขียนโค้ดด้วยตัวเอง
- [ ] หากใช้ AI มี prompt ที่เป็นระบบ ตรวจสอบ code ทุกส่วน และเพิ่มหัวข้อ `AI Usage` ใน README
- [ ] หากใช้ AI สามารถอธิบายและแก้ไข code ที่ AI ช่วยสร้างได้
- [ ] เว็บไซต์มีชื่อร้านและ visual design ของตัวเอง
- [ ] มีครบทั้ง 6 หน้าที่กำหนดและ navigation ทำงานถูกต้อง
- [ ] ใช้ DummyJSON สำหรับสินค้า หมวดหมู่ รายละเอียด และการจำลองคำสั่งซื้อ
- [ ] Product list และ category มี pagination ที่ทำงานถูกต้อง
- [ ] Cart เพิ่ม ลด ลบ คำนวณยอด และคงอยู่หลัง refresh ได้
- [ ] Checkout validation และ success/error flow ทำงานถูกต้อง
- [ ] ทุก API request มี loading และ error state
- [ ] มี empty state และ route error/not-found state
- [ ] รองรับ desktop และ mobile
- [ ] Keyboard ใช้งานส่วนสำคัญได้ และ form/image มี label/alt text
- [ ] มี automated tests อย่างน้อย 8 test cases และครบทุกกลุ่มที่กำหนด
- [ ] `npm run test` ผ่าน
- [ ] `npm run lint` ผ่าน
- [ ] `npm run typecheck` ผ่าน
- [ ] `npm run build` ผ่าน
- [ ] Deploy บน Vercel สำเร็จและ public URL เปิดใช้งานได้
- [ ] เปิดหรือ refresh ทุก route โดยตรงบน Vercel แล้วไม่พบ 404
- [ ] README และ screenshots ของนักเรียนครบถ้วน
