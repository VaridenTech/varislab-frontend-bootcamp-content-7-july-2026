# Workshop Booking Assignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete one-week individual Workshop Hub assignment package in Thai, including student instructions, a guided starter, a working solution, and a 100-point rubric.

**Architecture:** The package follows the existing Week 03 Coffee Master pattern: two independent Vite + Vanilla TypeScript applications share the same HTML and CSS, while `start/src/main.ts` contains compile-safe learning scaffolding and `finish/src/main.ts` contains the complete behavior. The application keeps workshop data in a typed array, quantities in a `Record<number, number>`, and re-renders the workshop list, booking list, and totals whenever state changes.

**Tech Stack:** HTML5, CSS3, TypeScript 6, Vite 8, npm

## Global Constraints

- Create all assignment files below `Week_03/04_workshop_booking_assignment/`.
- Student-facing prose must be Thai with familiar English technical terms.
- The assignment is individual work with a one-week deadline; core work should fit approximately 4–6 hours.
- Use Vanilla TypeScript only: no framework, backend, API, authentication, payment integration, or automated test framework.
- Core data fields are exactly `id`, `title`, `description`, `price`, `category`, and `maxSeats`.
- The service fee is exactly 3% of Subtotal.
- Currency is Thai baht formatted with two decimal places.
- Each quantity is constrained to `0 <= quantity <= maxSeats`.
- A successful confirmation keeps the selected state and customer-name input unchanged.
- Both `start/` and `finish/` must pass `npm run build`.
- Keep the beginner architecture in one `main.ts` file per application; do not introduce classes or extra source modules.
- The student README must not mention or link to `finish/`.
- Bonus work may add at most 10 points, and the final score is capped at 100.

---

## File Map

- `Week_03/04_workshop_booking_assignment/README.md` — distributable Thai student brief, setup instructions, requirements, submission list, and self-check.
- `Week_03/04_workshop_booking_assignment/RUBRIC.md` — teacher-facing 100-point rubric with observable full/partial/no-credit criteria and bonus scoring.
- `Week_03/04_workshop_booking_assignment/finish/package.json` — Vite/TypeScript commands and versions.
- `Week_03/04_workshop_booking_assignment/finish/package-lock.json` — npm dependency lock generated from `package.json`.
- `Week_03/04_workshop_booking_assignment/finish/.gitignore` — excludes dependencies, build output, and macOS metadata.
- `Week_03/04_workshop_booking_assignment/finish/tsconfig.json` — browser-focused TypeScript configuration matching Coffee Master.
- `Week_03/04_workshop_booking_assignment/finish/index.html` — semantic application shell and all static DOM targets.
- `Week_03/04_workshop_booking_assignment/finish/src/style.css` — distinctive responsive visual design shared by starter and solution.
- `Week_03/04_workshop_booking_assignment/finish/src/main.ts` — complete typed state, rendering, calculations, events, and validation.
- `Week_03/04_workshop_booking_assignment/start/package.json` — starter copy of the verified package configuration.
- `Week_03/04_workshop_booking_assignment/start/package-lock.json` — starter dependency lock.
- `Week_03/04_workshop_booking_assignment/start/.gitignore` — starter copy of generated-file exclusions.
- `Week_03/04_workshop_booking_assignment/start/tsconfig.json` — starter TypeScript configuration.
- `Week_03/04_workshop_booking_assignment/start/index.html` — starter copy of the application shell.
- `Week_03/04_workshop_booking_assignment/start/src/style.css` — starter copy of the visual design.
- `Week_03/04_workshop_booking_assignment/start/src/main.ts` — compile-safe function scaffold with numbered student steps but without core behavior.

---

### Task 1: Write the Student Brief and Grading Rubric

**Files:**
- Create: `Week_03/04_workshop_booking_assignment/README.md`
- Create: `Week_03/04_workshop_booking_assignment/RUBRIC.md`

**Interfaces:**
- Consumes: Approved requirements in `docs/superpowers/specs/2026-07-29-workshop-booking-assignment-design.md`.
- Produces: The exact behavior contract that the starter and solution must satisfy.

- [ ] **Step 1: Create the Thai student brief**

Write `README.md` with these sections and concrete content:

````markdown
# 🎨 Workshop Hub Assignment

สร้างเว็บแอปสำหรับจองเวิร์กช็อปด้วย HTML, CSS และ Vanilla TypeScript โดยนำความรู้จาก Coffee Master ไปแก้โจทย์ในบริบทใหม่ งานนี้เป็นงานเดี่ยวและมีกำหนดเวลา 1 สัปดาห์

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
10. แสดงชื่อ จำนวนที่นั่งรวม และ Total เมื่อยืนยันสำเร็จ
11. รองรับ desktop และ mobile

## เริ่มต้นโปรเจกต์
```sh
cd Week_03/04_workshop_booking_assignment/start
npm install
npm run dev
```

## ข้อกำหนดด้านเทคนิค
- ใช้ Vanilla TypeScript เท่านั้น
- ไม่ใช้ React, framework, backend หรือ API
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
- [ ] Empty state, error state และ success state แสดงถูกต้อง
- [ ] ใช้งานได้ทั้ง desktop และ mobile
````

Keep the nested shell block valid by using a four-backtick outer fence while editing the real file, or omit the outer fence entirely in the final README. Do not include the words `finish`, `solution`, or a path outside the distributable student package.

- [ ] **Step 2: Create the 100-point rubric with explicit partial credit**

Write `RUBRIC.md` with one section per category. Each section must name full, partial, and no-credit evidence. Use these exact allocations:

```markdown
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
- 9–10: ตรวจชื่อว่าง/whitespace และ booking ว่าง พร้อม success ที่มีชื่อ จำนวนรวม และ Total
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
```

- [ ] **Step 3: Verify the documents are complete and student-safe**

Run:

```sh
rg -n "finish|solution" Week_03/04_workshop_booking_assignment/README.md Week_03/04_workshop_booking_assignment/RUBRIC.md
rg -n "Service Fee 3%|maxSeats|npm run build" Week_03/04_workshop_booking_assignment/README.md
rg -n "รวมสุดท้ายต้องไม่เกิน 100|## 8\. Code Quality" Week_03/04_workshop_booking_assignment/RUBRIC.md
```

Expected: The first command returns no matches; the second and third commands find every required phrase.

- [ ] **Step 4: Commit the teaching documents**

```sh
git add Week_03/04_workshop_booking_assignment/README.md Week_03/04_workshop_booking_assignment/RUBRIC.md
git commit -m "docs: add workshop booking assignment brief"
```

---

### Task 2: Build the Shared Application Shell and Visual Design

**Files:**
- Create: `Week_03/04_workshop_booking_assignment/finish/package.json`
- Create: `Week_03/04_workshop_booking_assignment/finish/package-lock.json`
- Create: `Week_03/04_workshop_booking_assignment/finish/.gitignore`
- Create: `Week_03/04_workshop_booking_assignment/finish/tsconfig.json`
- Create: `Week_03/04_workshop_booking_assignment/finish/index.html`
- Create: `Week_03/04_workshop_booking_assignment/finish/src/style.css`
- Create: `Week_03/04_workshop_booking_assignment/finish/src/main.ts`

**Interfaces:**
- Consumes: IDs `workshopGrid`, `bookingItems`, `emptyBookingMessage`, `subtotal`, `serviceFee`, `total`, `customerName`, `confirmBookingButton`, and `bookingMessage`.
- Produces: A responsive static shell and DOM contract consumed by Task 3.

- [ ] **Step 1: Add Vite and TypeScript configuration**

Create `package.json`:

```json
{
  "name": "workshop-hub",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "typescript": "~6.0.2",
    "vite": "^8.1.1"
  }
}
```

Copy the compiler options from `Week_03/coffee-master/tsconfig.json` exactly, keeping `include: ["src"]`. Create an empty `src/main.ts`. Before installing dependencies, create `.gitignore`:

```gitignore
node_modules
dist
.DS_Store
```

Then run `npm install` inside `finish/` to generate `package-lock.json`.

- [ ] **Step 2: Verify the empty application builds**

Run: `npm run build` from `Week_03/04_workshop_booking_assignment/finish`

Expected: PASS with Vite output in `dist/`; no TypeScript errors.

- [ ] **Step 3: Create the semantic HTML shell**

Build `index.html` with this hierarchy and exact DOM IDs:

```html
<header class="site-header">
  <nav class="navbar" aria-label="Main navigation">
    <a class="logo" href="#top">Workshop Hub</a>
    <a href="#booking">My Booking</a>
  </nav>
</header>
<main id="top">
  <section class="hero-section" aria-labelledby="heroTitle">
    <p class="eyebrow">Create something memorable</p>
    <h1 id="heroTitle">เลือกคลาสใหม่ให้วันหยุดของคุณ</h1>
    <p>ค้นหาเวิร์กช็อปที่สนใจ เลือกจำนวนที่นั่ง และตรวจสอบยอดก่อนยืนยันการจอง</p>
  </section>
  <section class="workshop-section" aria-labelledby="workshopTitle">
    <div class="section-header">
      <p class="eyebrow">Upcoming workshops</p>
      <h2 id="workshopTitle">คลาสที่เปิดจอง</h2>
      <p>เลือกได้ไม่เกินจำนวนที่นั่งสูงสุดของแต่ละคลาส</p>
    </div>
    <div id="workshopGrid" class="workshop-grid"></div>
  </section>
  <section id="booking" class="booking-section" aria-label="Booking details">
    <div class="booking-card">
      <p class="panel-label">Selected classes</p>
      <h2>รายการจอง</h2>
      <div id="bookingItems" class="booking-items"></div>
      <p id="emptyBookingMessage" class="empty-booking">ยังไม่ได้เลือกเวิร์กช็อป</p>
    </div>
    <div class="summary-card">
      <p class="panel-label">Payment summary</p>
      <h2>สรุปยอด</h2>
      <label for="customerName">ชื่อผู้จอง</label>
      <input id="customerName" type="text" autocomplete="name" placeholder="เช่น มานะ ใจดี" />
      <div class="summary-row"><span>Subtotal</span><span id="subtotal">฿0.00</span></div>
      <div class="summary-row"><span>Service Fee 3%</span><span id="serviceFee">฿0.00</span></div>
      <div class="summary-row final-total"><span>Total</span><span id="total">฿0.00</span></div>
      <button id="confirmBookingButton" type="button">Confirm Booking</button>
      <p id="bookingMessage" class="booking-message" aria-live="polite"></p>
    </div>
  </section>
</main>
<footer class="site-footer"><p>Workshop Hub · Built with HTML, CSS and TypeScript</p></footer>
<script type="module" src="/src/main.ts"></script>
```

Include standard `<!doctype html>`, Thai language, UTF-8, viewport meta, title, and `/src/style.css` link.

- [ ] **Step 4: Implement a distinctive responsive design**

Before writing the visual layer, invoke `frontend-design:frontend-design`. Use a warm paper-and-ink workshop aesthetic, not Coffee Master's dark coffee palette. Define these tokens and layout rules in `src/style.css`:

```css
:root {
  font-family: Inter, "Noto Sans Thai", system-ui, sans-serif;
  color: #2d2926;
  background: #f4efe6;
  font-synthesis: none;
  --paper: #fffaf1;
  --ink: #2d2926;
  --muted: #6d655d;
  --line: #d9cdbd;
  --coral: #d95d39;
  --coral-dark: #a83f22;
  --sage: #466b57;
  --shadow: 0 18px 45px rgba(73, 54, 37, 0.12);
}
* { box-sizing: border-box; }
body { margin: 0; min-width: 320px; background: var(--paper); color: var(--ink); }
button, input { font: inherit; }
button:focus-visible, input:focus-visible, a:focus-visible { outline: 3px solid #f2aa7e; outline-offset: 3px; }
.navbar, main { width: min(1120px, calc(100% - 48px)); margin-inline: auto; }
.workshop-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
.booking-section { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr); gap: 24px; }
@media (max-width: 900px) {
  .workshop-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .booking-section { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .navbar, main { width: min(100% - 32px, 1120px); }
  .workshop-grid { grid-template-columns: 1fr; }
  .hero-section h1 { font-size: clamp(2.4rem, 13vw, 3.8rem); }
}
```

Complete all selectors used by the HTML and Task 3 templates: `.site-header`, `.navbar`, `.logo`, `.hero-section`, `.eyebrow`, `.section-header`, `.workshop-section`, `.workshop-card`, `.workshop-card-header`, `.workshop-category`, `.workshop-price`, `.workshop-description`, `.seat-meta`, `.quantity-control`, `.booking-section`, `.booking-card`, `.summary-card`, `.panel-label`, `.booking-item`, `.empty-booking`, `label`, `input`, `.summary-row`, `.final-total`, `#confirmBookingButton`, `.booking-message`, `.booking-message.error`, `.booking-message.success`, and `.site-footer`. Buttons must be at least 44px high, cards must have visible borders, and long workshop names must wrap rather than overflow.

- [ ] **Step 5: Verify the static shell**

Run: `npm run build`

Expected: PASS. Open the page at desktop and 390px widths. Expected: no horizontal scrolling, the empty booking state is visible, the input has a connected label, and all focusable controls show a visible focus ring.

- [ ] **Step 6: Commit the shell**

```sh
git add Week_03/04_workshop_booking_assignment/finish
git commit -m "feat: add workshop booking application shell"
```

---

### Task 3: Implement the Complete TypeScript Solution

**Files:**
- Modify: `Week_03/04_workshop_booking_assignment/finish/src/main.ts`

**Interfaces:**
- Consumes: DOM IDs defined in Task 2.
- Produces: `Workshop`, `workshops`, `quantities`, `formatPrice`, `getQuantity`, `findWorkshop`, `increaseQuantity`, `decreaseQuantity`, `calculateSubtotal`, `calculateServiceFee`, `calculateTotal`, `calculateTotalSeats`, three render functions, two event setup functions, and `renderApp`.

- [ ] **Step 1: Define typed workshop data and state**

Add the exact model and constants:

```ts
type Workshop = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  maxSeats: number;
};

const SERVICE_FEE_RATE = 0.03;

const workshops: Workshop[] = [
  { id: 1, title: "ปั้นแก้วเซรามิก", description: "เรียนรู้การขึ้นรูปและตกแต่งแก้วเซรามิกด้วยมือ", price: 1200, category: "Craft", maxSeats: 6 },
  { id: 2, title: "ถ่ายภาพ Street", description: "ฝึกมองแสง จังหวะ และเล่าเรื่องผ่านภาพถ่ายในเมือง", price: 950, category: "Photography", maxSeats: 8 },
  { id: 3, title: "ทำพาสต้าเส้นสด", description: "นวดแป้ง รีดเส้น และทำซอสจานโปรดตั้งแต่ต้น", price: 1450, category: "Cooking", maxSeats: 5 },
  { id: 4, title: "จัดดอกไม้สไตล์อิสระ", description: "เรียนรู้องค์ประกอบ สี และการจัดช่อที่มีเอกลักษณ์", price: 1100, category: "Floral", maxSeats: 7 },
  { id: 5, title: "วาดภาพสีน้ำ Botanical", description: "ฝึกผสมสีและวาดรูปพืชแบบเป็นขั้นตอน", price: 850, category: "Art", maxSeats: 10 },
  { id: 6, title: "ทำเทียนหอม", description: "ออกแบบกลิ่น เทเทียน และสร้างฉลากของตัวเอง", price: 790, category: "Craft", maxSeats: 9 },
];

const quantities: Record<number, number> = {};
```

Select all nine required DOM elements by their Task 2 IDs. Do not use non-null assertions; guard elements inside the function that consumes them.

- [ ] **Step 2: Add formatting, lookup, and bounded state mutation**

Implement these exact signatures and behavior:

```ts
function formatPrice(price: number): string {
  return `฿${price.toFixed(2)}`;
}

function getQuantity(workshopId: number): number {
  return quantities[workshopId] || 0;
}

function findWorkshop(workshopId: number): Workshop | undefined {
  return workshops.find((workshop) => workshop.id === workshopId);
}

function decreaseQuantity(workshopId: number): void {
  const currentQuantity = getQuantity(workshopId);
  if (currentQuantity <= 0 || !findWorkshop(workshopId)) return;
  quantities[workshopId] = currentQuantity - 1;
}

function increaseQuantity(workshopId: number): void {
  const workshop = findWorkshop(workshopId);
  if (!workshop) return;
  const currentQuantity = getQuantity(workshopId);
  if (currentQuantity >= workshop.maxSeats) return;
  quantities[workshopId] = currentQuantity + 1;
}
```

- [ ] **Step 3: Render workshop cards and wire event delegation**

`renderWorkshopItems(): void` clears `workshopGrid` and appends one `<article class="workshop-card">` per workshop. Each card must include category, title, description, formatted price, `รับสูงสุด ${workshop.maxSeats} ที่นั่ง`, the current quantity, and these buttons:

```html
<button type="button" data-action="decrease" data-id="${workshop.id}" aria-label="ลดจำนวนที่นั่ง ${workshop.title}">−</button>
<button type="button" data-action="increase" data-id="${workshop.id}" aria-label="เพิ่มจำนวนที่นั่ง ${workshop.title}">+</button>
```

`setupWorkshopClickEvents(): void` attaches one click listener to the grid, resolves `target.closest("button")`, verifies `HTMLButtonElement`, converts `button.dataset.id` to a number, rejects non-finite IDs, handles only `increase` and `decrease`, then calls `renderApp()`.

- [ ] **Step 4: Implement calculations and booking rendering**

Use these functions:

```ts
function calculateSubtotal(): number {
  return workshops.reduce((subtotal, workshop) => {
    return subtotal + workshop.price * getQuantity(workshop.id);
  }, 0);
}

function calculateServiceFee(subtotal: number): number {
  return subtotal * SERVICE_FEE_RATE;
}

function calculateTotal(subtotal: number, serviceFee: number): number {
  return subtotal + serviceFee;
}

function calculateTotalSeats(): number {
  return workshops.reduce((total, workshop) => total + getQuantity(workshop.id), 0);
}
```

`renderBookingItems(): void` filters to quantities greater than zero, toggles `emptyBookingMessage` between `block` and `none`, and appends `.booking-item` articles containing the title, `${quantity} × ${formatPrice(workshop.price)}`, and the formatted line total.

`renderSummary(): void` calculates Subtotal, Service Fee, and Total once, then updates all three DOM targets.

- [ ] **Step 5: Implement confirmation validation**

`setupConfirmBookingButton(): void` attaches one click listener. Trim the `HTMLInputElement.value`, then apply conditions in this order:

```ts
if (customerName === "") {
  bookingMessage.textContent = "กรุณากรอกชื่อผู้จอง";
  bookingMessage.className = "booking-message error";
  return;
}

if (totalSeats === 0) {
  bookingMessage.textContent = "กรุณาเลือกเวิร์กช็อปอย่างน้อย 1 ที่นั่ง";
  bookingMessage.className = "booking-message error";
  return;
}

bookingMessage.textContent = `ขอบคุณคุณ ${customerName} ยืนยันการจอง ${totalSeats} ที่นั่ง ยอดรวม ${formatPrice(total)}`;
bookingMessage.className = "booking-message success";
```

Calculate `total` as Subtotal plus Service Fee. Do not reset the input or quantities.

- [ ] **Step 6: Initialize the application**

Add:

```ts
function renderApp(): void {
  renderWorkshopItems();
  renderBookingItems();
  renderSummary();
}

setupWorkshopClickEvents();
setupConfirmBookingButton();
renderApp();
```

- [ ] **Step 7: Verify build and core behavior**

Run: `npm run build`

Expected: PASS with no unused declarations or type errors.

Run the app and manually verify this deterministic scenario:

1. Initial Total is `฿0.00` and empty state is visible.
2. Add 2 seats to item 1 (`2 × ฿1200`) and 1 seat to item 3 (`1 × ฿1450`).
3. Expected Subtotal: `฿3850.00`; Service Fee: `฿115.50`; Total: `฿3965.50`; total seats: 3.
4. Repeatedly decrease item 1; it stops at 0.
5. Repeatedly increase item 3; it stops at 5.
6. Empty name produces `กรุณากรอกชื่อผู้จอง`.
7. With all quantities zero and a non-empty name, confirmation produces `กรุณาเลือกเวิร์กช็อปอย่างน้อย 1 ที่นั่ง`.
8. A valid confirmation includes the trimmed name, seat count, and Total.

- [ ] **Step 8: Commit the complete solution**

```sh
git add Week_03/04_workshop_booking_assignment/finish/src/main.ts
git commit -m "feat: implement workshop booking solution"
```

---

### Task 4: Create the Guided Starter Project

**Files:**
- Create: `Week_03/04_workshop_booking_assignment/start/package.json`
- Create: `Week_03/04_workshop_booking_assignment/start/package-lock.json`
- Create: `Week_03/04_workshop_booking_assignment/start/.gitignore`
- Create: `Week_03/04_workshop_booking_assignment/start/tsconfig.json`
- Create: `Week_03/04_workshop_booking_assignment/start/index.html`
- Create: `Week_03/04_workshop_booking_assignment/start/src/style.css`
- Create: `Week_03/04_workshop_booking_assignment/start/src/main.ts`

**Interfaces:**
- Consumes: Verified shell, data contract, and function names from Tasks 2–3.
- Produces: A buildable student starting point with the same UI contract but without completed rendering, calculations, events, or validation.

- [ ] **Step 1: Copy the shared project files**

Copy `.gitignore`, `package.json`, `package-lock.json`, `tsconfig.json`, `index.html`, and `src/style.css` from `finish/` to their matching `start/` paths. Change the `name` in `package.json` to `workshop-hub-starter`, then run `npm install` in `start/` so the root package name in `package-lock.json` is updated to match.

- [ ] **Step 2: Add compile-safe learning scaffolding**

Create `start/src/main.ts` with the same `Workshop` type, `SERVICE_FEE_RATE`, six workshop objects, `quantities`, and DOM selections as the solution. Add numbered comments such as `// STEP 1: Render workshop cards from workshops.` rather than answer code.

Use these safe bodies so the starter builds without implementing core requirements:

```ts
function formatPrice(price: number): string {
  return `฿${price.toFixed(2)}`;
}

function getQuantity(workshopId: number): number {
  return quantities[workshopId] || 0;
}

function decreaseQuantity(workshopId: number): void {
  void workshopId;
}

function increaseQuantity(workshopId: number): void {
  void workshopId;
}

function calculateSubtotal(): number {
  return 0;
}

function calculateServiceFee(subtotal: number): number {
  void subtotal;
  void SERVICE_FEE_RATE;
  return 0;
}

function calculateTotal(subtotal: number, serviceFee: number): number {
  void subtotal;
  void serviceFee;
  return 0;
}

function calculateTotalSeats(): number {
  return 0;
}
```

Provide all render/event/init function signatures. `renderWorkshopItems()` should display one `.starter-message` telling students to begin with rendering cards and reference both `void workshops` and `void getQuantity`; `renderBookingItems()` should preserve the initial empty state; `renderSummary()` should show the zero results from the calculation scaffold. Event setup functions should guard their DOM elements but attach no listener. Reference `void decreaseQuantity` and `void increaseQuantity` inside the workshop setup function, and reference `void calculateTotalSeats` inside the confirmation setup function, so the learning signatures remain compile-safe. Call both setup functions and `renderApp()` so no declarations are unused.

- [ ] **Step 3: Verify the starter exposes work without leaking the answer**

Run from `start/`: `npm run build`

Expected: PASS.

Run:

```sh
rg -n "addEventListener|\.filter\(|\.reduce\(|dataset\.action|className = \"booking-message success\"" Week_03/04_workshop_booking_assignment/start/src/main.ts
```

Expected: no matches. Confirm the file still contains all required function signatures and six workshop objects.

- [ ] **Step 4: Open the starter in a browser**

Expected: The page loads without console errors, displays the static shell and a clear starter message, keeps `฿0.00` totals, and shows no working core controls or solution behavior.

- [ ] **Step 5: Commit the starter**

```sh
git add Week_03/04_workshop_booking_assignment/start
git commit -m "feat: add workshop booking starter project"
```

---

### Task 5: Run Final Package Verification

**Files:**
- Modify if verification reveals defects: files under `Week_03/04_workshop_booking_assignment/`

**Interfaces:**
- Consumes: The complete teaching package from Tasks 1–4.
- Produces: A distributable package whose documents, starter, and solution agree.

- [ ] **Step 1: Compare starter and solution contracts**

Run:

```sh
diff -u Week_03/04_workshop_booking_assignment/start/index.html Week_03/04_workshop_booking_assignment/finish/index.html
diff -u Week_03/04_workshop_booking_assignment/start/src/style.css Week_03/04_workshop_booking_assignment/finish/src/style.css
```

Expected: no differences. Compare the `Workshop` field names, workshop IDs/prices/maxSeats, DOM IDs, and public function names in both `main.ts` files; expected: exact matches.

- [ ] **Step 2: Build both applications from clean dependency state**

Run `npm install` followed by `npm run build` inside both `start/` and `finish/`.

Expected: both builds exit 0. Confirm each existing `.gitignore` excludes `node_modules`, `dist`, and `.DS_Store` and that none of those generated paths appears in `git status --short`.

- [ ] **Step 3: Perform visual and interaction QA on the solution**

Invoke `browser:control-in-app-browser` for local web testing. Check desktop width and 390px mobile width. Repeat the deterministic calculation/validation scenario from Task 3 and verify no console errors, no horizontal overflow, visible focus states, correct button labels, and correct state synchronization between cards and booking summary.

- [ ] **Step 4: Check specification coverage and repository cleanliness**

Run:

```sh
rg -n "pending marker|draft marker|FIX-ME" Week_03/04_workshop_booking_assignment
git diff --check
git status --short
```

Expected: no placeholder markers in the assignment package, no whitespace errors, and only intentional assignment files appear as changed. Preserve unrelated user files and changes.

- [ ] **Step 5: Commit verification fixes, if any**

If verification required changes:

```sh
git add Week_03/04_workshop_booking_assignment
git commit -m "fix: polish workshop booking assignment"
```

If no files changed, do not create an empty commit.
