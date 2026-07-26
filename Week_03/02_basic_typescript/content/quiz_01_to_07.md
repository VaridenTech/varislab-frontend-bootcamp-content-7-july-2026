# W03.02 — Quiz: TypeScript พื้นฐาน บทที่ 1–7

แบบทดสอบนี้มี 15 ข้อ แต่ละข้อมีคำตอบที่ถูกต้องเพียง 1 ตัวเลือก

## ข้อ 1

ข้อใดอธิบายความสัมพันธ์ระหว่าง TypeScript และ JavaScript ได้ถูกต้อง?

- A. TypeScript ใช้แทน JavaScript ใน Browser ได้โดยตรงโดยไม่ต้อง Compile
- B. TypeScript เป็น Superset ของ JavaScript ที่เพิ่มระบบ Type และต้อง Compile เป็น JavaScript ก่อนนำไปรัน
- C. TypeScript เป็น Library สำหรับตรวจสอบข้อมูลจาก API ตอน Runtime เท่านั้น
- D. TypeScript และ JavaScript มีไวยากรณ์ที่แยกจากกันทั้งหมด

**คำตอบที่ถูกต้อง:** B. TypeScript เป็น Superset ของ JavaScript ที่เพิ่มระบบ Type และต้อง Compile เป็น JavaScript ก่อนนำไปรัน

**คำอธิบาย:** TypeScript ขยายไวยากรณ์ของ JavaScript ด้วยระบบ Type โค้ด JavaScript ที่ถูกต้องจึงใช้เป็น TypeScript ได้ แต่ Browser และ Node.js รันไฟล์ TypeScript โดยตรงไม่ได้ จึงต้อง Compile เป็น JavaScript ก่อน

## ข้อ 2

โค้ด JavaScript ต่อไปนี้แสดงปัญหาใดได้ชัดเจนที่สุด?

```js
let price = 129.99
price = "sold out"
price.toFixed(2)
```

- A. JavaScript ไม่อนุญาตให้กำหนดค่าใหม่ให้ตัวแปรที่ประกาศด้วย `let`
- B. Method `toFixed()` ใช้กับตัวเลขไม่ได้
- C. Dynamic Typing ทำให้ตัวแปรเปลี่ยน Type ได้ และข้อผิดพลาดอาจปรากฏเมื่อตอนรัน
- D. JavaScript ตรวจพบ Type Error ทั้งหมดก่อนรันโค้ดเสมอ

**คำตอบที่ถูกต้อง:** C. Dynamic Typing ทำให้ตัวแปรเปลี่ยน Type ได้ และข้อผิดพลาดอาจปรากฏเมื่อตอนรัน

**คำอธิบาย:** ตัวแปร `price` เริ่มจาก Number แต่ถูกเปลี่ยนเป็น String ได้ เมื่อเรียก `toFixed()` ซึ่งไม่มีใน String จึงเกิด Error ตอนที่บรรทัดนั้นถูกรัน

## ข้อ 3

คำสั่งต่อไปนี้มีผลอย่างไร?

```bash
tsc --checkJs --noEmit price.js
```

- A. ตรวจสอบ Type ในไฟล์ JavaScript โดยไม่สร้างไฟล์ผลลัพธ์
- B. เปลี่ยนนามสกุลไฟล์ `price.js` เป็น `.ts` โดยอัตโนมัติ
- C. Compile ไฟล์ JavaScript แล้วสร้างไฟล์ `price.ts`
- D. รันไฟล์ `price.js` โดยไม่ตรวจสอบ Type

**คำตอบที่ถูกต้อง:** A. ตรวจสอบ Type ในไฟล์ JavaScript โดยไม่สร้างไฟล์ผลลัพธ์

**คำอธิบาย:** `--checkJs` สั่งให้ TypeScript ตรวจไฟล์ `.js` ส่วน `--noEmit` สั่งให้ตรวจสอบอย่างเดียวโดยไม่สร้างไฟล์ผลลัพธ์

## ข้อ 4

เมื่อ TypeScript ตรวจโค้ดต่อไปนี้ จะเกิดอะไรขึ้น?

```ts
let quantity: number
quantity = 3
quantity = "three"
```

- A. ผ่านการตรวจสอบ เพราะตัวแปรที่ประกาศด้วย `let` เปลี่ยน Type ได้เสมอ
- B. ผ่านการตรวจสอบ แต่ `quantity` จะถูกเปลี่ยนเป็น `0`
- C. Error ที่ `quantity = 3` เพราะยังไม่ได้กำหนดค่าเริ่มต้น
- D. Error ที่ `quantity = "three"` เพราะ String ไม่ตรงกับ Type `number`

**คำตอบที่ถูกต้อง:** D. Error ที่ `quantity = "three"` เพราะ String ไม่ตรงกับ Type `number`

**คำอธิบาย:** Type Annotation `: number` กำหนดให้ `quantity` รับได้เฉพาะ Number การกำหนดค่า String ให้ตัวแปรนี้จึงไม่ผ่านการตรวจสอบ Type

## ข้อ 5

กำหนดให้มีตัวแปรดังนี้ ข้อใดไม่ทำให้เกิด Type Error?

```ts
let status: "pending" | "shipped" | "delivered"
```

- A. `status = "cancelled"`
- B. `status = "delivered"`
- C. `status = true`
- D. `status = 1`

**คำตอบที่ถูกต้อง:** B. `status = "delivered"`

**คำอธิบาย:** Literal Type นี้อนุญาตเฉพาะ String สามค่าที่ระบุไว้ คือ `"pending"`, `"shipped"` และ `"delivered"` เท่านั้น

## ข้อ 6

ข้อใดกำหนด Type ให้ Parameter และค่าที่ Return ของ Function ได้ถูกต้อง?

- A. `function calculateTotal(price: number, quantity: number): number { return price * quantity }`
- B. `function calculateTotal(price = number, quantity = number) => number { return price * quantity }`
- C. `function calculateTotal(price number, quantity number): return number { return price * quantity }`
- D. `function calculateTotal: number(price, quantity) { return price * quantity }`

**คำตอบที่ถูกต้อง:** A. `function calculateTotal(price: number, quantity: number): number { return price * quantity }`

**คำอธิบาย:** Type ของ Parameter เขียนหลังชื่อ Parameter ด้วย `: Type` ส่วน Return Type เขียนหลังวงเล็บ Parameter ก่อนเปิดบล็อก Function

## ข้อ 7

ข้อใดกำหนดให้ `description` เป็น Property ที่มีหรือไม่มีก็ได้อย่างถูกต้อง?

- A. `{ name: string, optional description: string }`
- B. `{ name: string, description: string | required }`
- C. `{ name: string, description?: string }`
- D. `{ name: string, ?description: string }`

**คำตอบที่ถูกต้อง:** C. `{ name: string, description?: string }`

**คำอธิบาย:** เครื่องหมาย `?` หลังชื่อ Property หมายความว่า Property นั้นเป็น Optional จึงไม่บังคับให้ Object ทุกตัวต้องมี `description`

## ข้อ 8

Function ใดใช้ Type Narrowing เพื่อรองรับ `number | string` ได้อย่างปลอดภัย?

- A. `function formatId(id: number | string) { return id.toUpperCase() }`
- B. `function formatId(id: number | string) { return id.toFixed(2) }`
- C. `function formatId(id: number | string) { return id as boolean }`
- D. `function formatId(id: number | string) { return typeof id === "string" ? id.toUpperCase() : id.toString() }`

**คำตอบที่ถูกต้อง:** D. `function formatId(id: number | string) { return typeof id === "string" ? id.toUpperCase() : id.toString() }`

**คำอธิบาย:** การตรวจด้วย `typeof` ทำให้ TypeScript รู้ว่า Branch แรกเป็น String จึงเรียก `toUpperCase()` ได้ ส่วนอีก Branch เหลือเป็น Number และเรียก `toString()` ได้อย่างปลอดภัย

## ข้อ 9

เมื่อ Compile โค้ด TypeScript ต่อไปนี้เป็น JavaScript ส่วนใดจะถูกลบออก?

```ts
function greet(name: string): string {
  return `สวัสดี ${name}`
}
```

- A. Type Annotation `: string` ของ Parameter และ Return Type
- B. ชื่อ Function `greet`
- C. คำสั่ง `return`
- D. Template Literal ทั้งหมด

**คำตอบที่ถูกต้อง:** A. Type Annotation `: string` ของ Parameter และ Return Type

**คำอธิบาย:** Type มีไว้สำหรับตรวจสอบก่อนรันและจะถูกลบออกตอน Compile ส่วน Logic ของ Function จะยังอยู่ในไฟล์ JavaScript ผลลัพธ์

## ข้อ 10

เมื่อโปรเจกต์มีไฟล์ `tsconfig.json` แล้ว การรันคำสั่ง `tsc` โดยไม่ระบุชื่อไฟล์จะทำอะไร?

- A. ลบ `tsconfig.json` แล้วสร้างใหม่ด้วยค่าเริ่มต้น
- B. ตรวจเฉพาะไฟล์ JavaScript โดยไม่สนใจค่าตั้งค่า
- C. ใช้ค่าจาก `tsconfig.json` เพื่อ Compile หรือตรวจสอบไฟล์ในโปรเจกต์
- D. รัน Test ทั้งหมดของโปรเจกต์โดยอัตโนมัติ

**คำตอบที่ถูกต้อง:** C. ใช้ค่าจาก `tsconfig.json` เพื่อ Compile หรือตรวจสอบไฟล์ในโปรเจกต์

**คำอธิบาย:** `tsconfig.json` เก็บ Compiler Options ของโปรเจกต์ เมื่อรัน `tsc` เฉย ๆ TypeScript จะค้นหาและใช้ค่าจากไฟล์นี้โดยอัตโนมัติ

## ข้อ 11

หากต้องการให้ `Customer` มี Property ทั้งหมดจาก `User` และเพิ่ม `loyaltyPoints` ข้อใดถูกต้อง?

- A. `interface Customer imports User { loyaltyPoints: number }`
- B. `interface Customer extends User { loyaltyPoints: number }`
- C. `interface Customer = User + { loyaltyPoints: number }`
- D. `interface Customer includes User { loyaltyPoints: number }`

**คำตอบที่ถูกต้อง:** B. `interface Customer extends User { loyaltyPoints: number }`

**คำอธิบาย:** Keyword `extends` ใช้ขยาย Interface เดิม ทำให้ `Customer` ได้ Property ของ `User` พร้อมกับ Property ใหม่ที่ประกาศเพิ่ม

## ข้อ 12

กำหนดให้มี Type `Product` ที่บังคับ `id`, `name` และ `price` หากต้องการรับข้อมูลสำหรับอัปเดตเฉพาะบาง Property ควรใช้ Utility Type ใด?

- A. `Readonly<Product>`
- B. `Pick<Product, never>`
- C. `Promise<Product>`
- D. `Partial<Product>`

**คำตอบที่ถูกต้อง:** D. `Partial<Product>`

**คำอธิบาย:** `Partial<T>` เปลี่ยนทุก Property ของ `T` ให้เป็น Optional จึงเหมาะกับข้อมูลอัปเดตที่ส่งมาเพียงบาง Property เช่น `{ price: 199 }`

## ข้อ 13

ข้อใดเป็น Workflow ที่เหมาะสมสำหรับย้ายโปรเจกต์ JavaScript เดิมมาเป็น TypeScript?

- A. เปลี่ยนทุกไฟล์เป็น `.ts` พร้อมกัน แล้วปิด `strict` และใช้ `any` ทุกจุด
- B. เขียนโปรเจกต์ใหม่ทั้งหมดและเลิกใช้ Test เดิม
- C. ติดตั้ง TypeScript เป็น Dev Dependency เปลี่ยนไฟล์ทีละไฟล์ รัน `tsc` หลังแต่ละไฟล์ และใช้ `tsc --noEmit` ก่อน Test
- D. Compile เฉพาะตอนขึ้น Production โดยไม่ตรวจ Type ระหว่างพัฒนา

**คำตอบที่ถูกต้อง:** C. ติดตั้ง TypeScript เป็น Dev Dependency เปลี่ยนไฟล์ทีละไฟล์ รัน `tsc` หลังแต่ละไฟล์ และใช้ `tsc --noEmit` ก่อน Test

**คำอธิบาย:** การย้ายทีละไฟล์ช่วยจำกัดจำนวน Error ที่ต้องแก้ในแต่ละครั้ง ส่วน `tsc --noEmit` ก่อน Test ทำให้ Type Error ถูกจับก่อนเข้าสู่ขั้นตอนทดสอบ

## ข้อ 14

โปรเจกต์ TypeScript ใช้ Package JavaScript ที่ไม่ได้แนบ Type มาให้ ข้อใดเป็นแนวทางที่ถูกต้อง?

- A. ติดตั้ง Type Declaration ที่มีใน `@types/` และใช้ `import type` เมื่อต้อง Import เฉพาะ Type
- B. เปลี่ยน Type ของค่าจาก Package ทั้งหมดเป็น `any` เสมอ
- C. เปลี่ยน Package JavaScript ให้เป็นไฟล์ `.ts` ภายใน `node_modules`
- D. ใช้ `@ts-ignore` ก่อนทุกบรรทัดที่ Import Package

**คำตอบที่ถูกต้อง:** A. ติดตั้ง Type Declaration ที่มีใน `@types/` และใช้ `import type` เมื่อต้อง Import เฉพาะ Type

**คำอธิบาย:** DefinitelyTyped แจก Type Declaration ของ Package JavaScript ผ่านชื่อ Package ที่ขึ้นต้นด้วย `@types/` ส่วน `import type` สื่อชัดว่าสิ่งที่ Import จะใช้เฉพาะตอนตรวจ Type และไม่มีอยู่ใน JavaScript หลัง Compile

## ข้อ 15

เหตุใดจึงนิยมใช้ Zod ตรวจสอบข้อมูลจาก API แม้โปรเจกต์จะเขียนด้วย TypeScript อยู่แล้ว?

- A. เพราะ Zod ทำให้ Browser รันไฟล์ `.ts` ได้โดยไม่ต้อง Compile
- B. เพราะ Type ของ TypeScript ถูกลบตอน Compile แต่ Zod ตรวจสอบข้อมูลจริงตาม Schema ได้ตอน Runtime
- C. เพราะ Zod ใช้แทน `tsconfig.json` สำหรับตั้งค่า Compiler
- D. เพราะ TypeScript ไม่สามารถกำหนด Type ให้ Object ได้

**คำตอบที่ถูกต้อง:** B. เพราะ Type ของ TypeScript ถูกลบตอน Compile แต่ Zod ตรวจสอบข้อมูลจริงตาม Schema ได้ตอน Runtime

**คำอธิบาย:** TypeScript ตรวจความถูกต้องแบบ Static ก่อนรัน แต่ Type จะไม่เหลืออยู่ตอน Runtime จึงยืนยันข้อมูลภายนอกไม่ได้ Zod ช่วยตรวจข้อมูลจริงตาม Schema และยังอนุมาน TypeScript Type จาก Schema เดียวกันได้
