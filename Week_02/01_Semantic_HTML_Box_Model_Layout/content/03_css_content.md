# จุดที่ควรสอนใน CSS  
## สำหรับคลาส W02.01 — Semantic HTML และ CSS Box Model

เอกสารนี้ใช้เป็นโน้ตสำหรับผู้สอนระหว่างสอน CSS ในคลาส Week 2 Day 1  
เป้าหมายคือช่วยให้นักเรียนเข้าใจว่า CSS ไม่ใช่แค่ “ทำให้สวย” แต่คือการควบคุมโครงสร้าง ระยะห่าง และ layout ของหน้าเว็บอย่างเป็นระบบ

---

# ภาพรวมที่ควรบอกก่อนเริ่ม CSS

ก่อนเริ่มเขียน CSS ให้บอกนักเรียนว่า:

> ใน HTML เราสร้างโครงสร้างของหน้าเว็บแล้ว  
> ตอนนี้ CSS จะเข้ามาช่วยควบคุมว่าแต่ละส่วนควรมีหน้าตา ขนาด ระยะห่าง และการจัดวางอย่างไร

CSS ไม่ได้มีไว้แค่เปลี่ยนสีหรือเปลี่ยน font แต่เป็นเครื่องมือสำคัญในการทำให้หน้าเว็บอ่านง่าย ใช้งานง่าย และดูเป็นระบบ

ในคลาสนี้ยังไม่ต้องจำ CSS ทุก property ให้ได้ทั้งหมด แต่ให้เข้าใจ concept หลัก 5 เรื่อง:

1. `box-sizing`
2. `max-width` และ `margin: 0 auto`
3. `padding` vs `margin`
4. `display: flex`
5. การเลือก element ด้วย class selector

---

# 1. `box-sizing: border-box`

## Code

```css
* {
  box-sizing: border-box;
}
```

## อธิบายแบบง่าย

บรรทัดนี้เป็น CSS reset ที่นิยมใช้มากในงานจริง

โดยปกติ เวลาเรากำหนด `width` ให้ element หนึ่งตัว browser อาจยังเอา `padding` และ `border` ไปบวกเพิ่ม ทำให้ขนาดจริงของกล่องใหญ่กว่าที่เราคิด

การใช้:

```css
box-sizing: border-box;
```

ช่วยให้ขนาดของ element คำนวณง่ายขึ้น เพราะ `width` จะรวม `padding` และ `border` เข้าไปแล้ว

## วิธีพูดในคลาส

> ให้มองว่า element ทุกตัวบนหน้าเว็บคือกล่อง  
> ถ้าเราไม่ตั้ง `box-sizing: border-box` บางครั้งเรากำหนด width ไว้แล้ว แต่พอใส่ padding เข้าไป กล่องจะใหญ่เกินกว่าที่คิด  
> ดังนั้น developer ส่วนใหญ่จะตั้งค่านี้ไว้ตั้งแต่ต้น เพื่อให้ layout ควบคุมง่ายขึ้น

## ตัวอย่างเปรียบเทียบ

ถ้าไม่มี `border-box`:

```css
.card {
  width: 300px;
  padding: 20px;
}
```

กล่องอาจกินพื้นที่จริงมากกว่า 300px เพราะ padding ถูกบวกเพิ่มเข้าไป

ถ้ามี `border-box`:

```css
.card {
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
}
```

กล่องจะยังควบคุมอยู่ในความกว้าง 300px ได้ง่ายกว่า

## สิ่งที่อยากให้นักเรียนจำ

```text
box-sizing: border-box ช่วยให้คุมขนาดกล่องง่ายขึ้น
```

---

# 2. `max-width` และ `margin: 0 auto`

## Code

```css
.navbar {
  max-width: 1100px;
  margin: 0 auto;
}
```

หรือ:

```css
main {
  max-width: 1100px;
  margin: 0 auto;
}
```

## อธิบายแบบง่าย

`max-width` ใช้จำกัดความกว้างสูงสุดของ content

ถ้าไม่มี `max-width` เนื้อหาอาจยืดเต็มจอมากเกินไป โดยเฉพาะบนหน้าจอใหญ่ ทำให้อ่านยากและดูไม่เป็นมืออาชีพ

`margin: 0 auto` ใช้จัด block element ให้อยู่ตรงกลางหน้า

## วิธีพูดในคลาส

> ในเว็บจริง เราไม่ค่อยปล่อยให้ content ยืดเต็มจอเสมอไป  
> เพราะถ้าจอกว้างมาก ข้อความจะยาวเกินไปและอ่านยาก  
> เราจึงใช้ `max-width` เพื่อกำหนดความกว้างสูงสุด และใช้ `margin: 0 auto` เพื่อจัด content ให้อยู่กลางหน้า

## แยกความหมาย

```css
max-width: 1100px;
```

แปลว่า element นี้กว้างได้ไม่เกิน 1100px

```css
margin: 0 auto;
```

แปลว่า:

- ด้านบนและล่าง margin เป็น 0
- ด้านซ้ายและขวาให้ browser คำนวณอัตโนมัติ
- ผลลัพธ์คือ element อยู่กลางหน้า

## Pattern ที่ใช้บ่อยในงานจริง

```css
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
}
```

## สิ่งที่อยากให้นักเรียนจำ

```text
max-width ใช้จำกัดความกว้าง
margin: 0 auto ใช้จัด container ให้อยู่กลางหน้า
```

---

# 3. `padding` vs `margin`

## Code ตัวอย่าง

```css
main {
  padding: 64px 32px;
}
```

```css
.hero-section {
  margin-bottom: 56px;
}
```

## อธิบายแบบง่าย

ทุก element บนหน้าเว็บคือกล่อง

กล่องหนึ่งใบมี:

```text
Content  = เนื้อหาข้างใน
Padding  = ระยะห่างด้านในกล่อง
Border   = เส้นขอบของกล่อง
Margin   = ระยะห่างด้านนอกกล่อง
```

## วิธีพูดในคลาส

> ถ้าอยากให้เนื้อหาข้างในไม่ชิดขอบกล่อง ให้ใช้ `padding`  
> ถ้าอยากให้กล่องนี้ห่างจากกล่องอื่น ให้ใช้ `margin`

## เปรียบเทียบกับกล่องพัสดุ

```text
Content = ของที่อยู่ในกล่อง
Padding = โฟมหรือกันกระแทกด้านใน
Border = กล่องกระดาษ
Margin = ระยะห่างระหว่างกล่องนี้กับกล่องอื่น
```

## ตัวอย่างที่ควร demo

### Padding

```css
.feature-card {
  padding: 24px;
}
```

ผลลัพธ์:

```text
ข้อความด้านใน card ไม่ชิดขอบ card
```

### Margin

```css
.hero-section {
  margin-bottom: 56px;
}
```

ผลลัพธ์:

```text
hero section ห่างจาก section ถัดไป
```

## Demo เปรียบเทียบในคลาส

ให้ลองเปลี่ยน:

```css
.feature-card {
  padding: 40px;
}
```

แล้วถามนักเรียน:

> เห็นไหมครับว่าเนื้อหาข้างใน card ห่างจากขอบมากขึ้น

จากนั้นลองเปลี่ยนเป็น:

```css
.feature-card {
  margin: 40px;
}
```

แล้วถาม:

> รอบนี้เกิดอะไรขึ้น?  
> card ทั้งใบห่างจาก element รอบ ๆ แทน

## สิ่งที่อยากให้นักเรียนจำ

```text
padding = ระยะห่างด้านใน
margin = ระยะห่างด้านนอก
```

---

# 4. `display: flex`

## Code

```css
.features-section {
  display: flex;
  gap: 20px;
}
```

## อธิบายแบบง่าย

`display: flex` ใช้จัด element ลูกให้อยู่ในแนวเดียวกันได้ง่าย

ในตัวอย่างนี้ `.features-section` เป็น container และ `.feature-card` แต่ละใบเป็นลูกของ container

เมื่อใส่:

```css
display: flex;
```

card ทั้งหมดจะเรียงเป็นแถว

## วิธีพูดในคลาส

> ปกติ block element เช่น article หรือ div มักเรียงจากบนลงล่าง  
> แต่ถ้าเราอยากให้ card หลายใบเรียงในแถวเดียวกัน เราสามารถใช้ `display: flex` ได้  
> ส่วน `gap` คือระยะห่างระหว่าง card แต่ละใบ

## Code ที่เกี่ยวข้อง

```css
.features-section {
  display: flex;
  gap: 20px;
}

.feature-card {
  flex: 1;
}
```

## อธิบาย `flex: 1`

```css
flex: 1;
```

แปลว่า card แต่ละใบแบ่งพื้นที่เท่า ๆ กันในแถว

## วิธีพูด

> `flex: 1` ช่วยให้ card แต่ละใบกินพื้นที่เท่า ๆ กัน  
> ถ้ามี 3 ใบ ก็แบ่งพื้นที่เป็น 3 ส่วนใกล้เคียงกัน

## สิ่งที่อยากให้นักเรียนจำ

```text
display: flex ใช้จัด element ลูกให้อยู่ในแถวหรือแนวที่ควบคุมได้ง่าย
gap ใช้กำหนดระยะห่างระหว่างลูก
flex: 1 ใช้ให้ลูกแต่ละตัวแบ่งพื้นที่เท่า ๆ กัน
```

---

# 5. Class Selector: จุด `.` หน้า class

## Code HTML

```html
<article class="feature-card">
  <h2>Manual Foundation</h2>
  <p>เข้าใจ HTML, CSS และ JavaScript ด้วยตัวเองก่อนใช้ AI</p>
</article>
```

## Code CSS ที่ถูก

```css
.feature-card {
  padding: 24px;
  border-radius: 20px;
  background: #1e293b;
}
```

## จุดที่ควรย้ำ

ถ้าใน HTML ใช้:

```html
class="feature-card"
```

เวลาเลือกใน CSS ต้องเขียน:

```css
.feature-card
```

ต้องมีจุด `.` ข้างหน้า

## Error Demo ที่ควรทำ

### เขียนผิด

```css
feature-card {
  background: #1e293b;
}
```

### เขียนถูก

```css
.feature-card {
  background: #1e293b;
}
```

## วิธีพูดในคลาส

> ถ้าเราเขียน `feature-card` แบบไม่มีจุด CSS จะคิดว่าเรากำลังเลือก HTML tag ชื่อ `feature-card`  
> แต่ใน HTML ไม่มี tag นี้  
> ถ้าเราต้องการเลือก class ต้องใส่จุดข้างหน้าเสมอ

## สิ่งที่อยากให้นักเรียนจำ

```text
เลือก class ใน CSS ต้องใช้จุด .
เลือก id ใน CSS ต้องใช้ #
```

---

# 6. `display: inline-block` สำหรับปุ่มที่เป็น `<a>`

## Code

```css
.primary-button {
  display: inline-block;
  padding: 14px 24px;
  border-radius: 999px;
  background: #38bdf8;
  color: #0f172a;
  font-weight: bold;
  text-decoration: none;
}
```

## อธิบายแบบง่าย

ใน HTML ปุ่มของเราอาจเป็น `<a>` เพราะมันคือ link ไปยังหน้าอื่น เช่น “ดูรายละเอียดคอร์ส”

แต่ `<a>` โดยธรรมชาติเป็น inline element  
ถ้าเราอยากให้มันมีขนาด มี padding และดูเหมือนปุ่ม เราควรใช้:

```css
display: inline-block;
```

## วิธีพูดในคลาส

> จริง ๆ แล้วปุ่มนี้เป็น link  
> แต่เราอยากให้มันดูเหมือนปุ่ม  
> ดังนั้นเราทำให้ `<a>` แสดงผลแบบ `inline-block` เพื่อให้ใส่ padding, border-radius และ background ได้เหมือนปุ่ม

## สิ่งที่อยากให้นักเรียนจำ

```text
ถ้าอยากให้ link ดูเหมือนปุ่ม ใช้ display: inline-block แล้วตกแต่งด้วย padding, background, border-radius
```

---

# 7. `hover` state

## Code

```css
.nav-links a:hover {
  color: #38bdf8;
}
```

หรือ:

```css
.primary-button:hover {
  background: #7dd3fc;
}
```

## อธิบายแบบง่าย

`:hover` คือสถานะตอนผู้ใช้เอา mouse ไปชี้บน element

ใช้เพื่อให้ผู้ใช้รู้ว่าสิ่งนั้นกดได้หรือ interactive ได้

## วิธีพูดในคลาส

> hover เป็นส่วนเล็ก ๆ ของ user experience  
> เวลาเราชี้ที่ link หรือปุ่มแล้วสีเปลี่ยน ผู้ใช้จะรู้ว่าสิ่งนี้สามารถกดได้

## สิ่งที่อยากให้นักเรียนจำ

```text
:hover ใช้กำหนด style ตอน mouse ชี้ที่ element
```

---

# 8. Line Height และ Readability

## Code

```css
.hero-description {
  line-height: 1.7;
}
```

หรือ:

```css
.feature-card p {
  line-height: 1.7;
}
```

## อธิบายแบบง่าย

`line-height` คือความสูงของบรรทัด

ถ้าข้อความหลายบรรทัดชิดกันเกินไป จะอ่านยาก  
การเพิ่ม `line-height` ทำให้ข้อความอ่านสบายขึ้น

## วิธีพูดในคลาส

> เว็บที่ดู professional ไม่ได้เกิดจากสีอย่างเดียว  
> spacing และ readability สำคัญมาก  
> `line-height` เป็น property เล็ก ๆ ที่ช่วยให้ข้อความอ่านง่ายขึ้นเยอะมาก

## สิ่งที่อยากให้นักเรียนจำ

```text
ข้อความยาวควรมี line-height ที่อ่านง่าย เช่น 1.5–1.8
```

---

# 9. Text Decoration สำหรับ Link

## Code

```css
.nav-links a {
  color: #cbd5e1;
  text-decoration: none;
}
```

## อธิบายแบบง่าย

โดยปกติ link `<a>` จะมีขีดเส้นใต้

ถ้าเราไม่ต้องการเส้นใต้ สามารถใช้:

```css
text-decoration: none;
```

## วิธีพูดในคลาส

> ค่า default ของ link คือมี underline  
> แต่ใน navbar หลายเว็บมักเอา underline ออก แล้วใช้สีหรือ hover state แทน

## สิ่งที่อยากให้นักเรียนจำ

```text
text-decoration: none ใช้เอาเส้นใต้ default ของ link ออก
```

---

# 10. สรุป Flow การคิด CSS ในคลาสนี้

เวลาจัดหน้าเว็บ ให้คิดตามลำดับนี้:

```text
1. โครงสร้าง HTML ชัดหรือยัง?
2. ต้องการจำกัดความกว้าง content ไหม?
3. ต้องการให้ content อยู่กลางหน้าไหม?
4. แต่ละ section ควรมี padding เท่าไหร่?
5. แต่ละกล่องควรมี margin ห่างจากกล่องอื่นเท่าไหร่?
6. element ลูกควรเรียงแนวตั้งหรือแนวนอน?
7. ถ้าเรียงแนวนอน ใช้ flex ได้ไหม?
8. ปุ่มและ link มี hover state ไหม?
9. ข้อความอ่านง่ายไหม?
10. class ใน CSS เลือกถูกหรือยัง?
```

---

# Common Mistakes ที่ควรเตือน

## 1. ลืมจุดหน้า class

ผิด:

```css
feature-card {
}
```

ถูก:

```css
.feature-card {
}
```

## 2. สับสน padding กับ margin

```text
padding = ด้านใน
margin = ด้านนอก
```

## 3. ลืม `box-sizing: border-box`

อาจทำให้ width และ padding รวมกันแล้ว layout กว้างเกินคาด

## 4. ใส่ `display: flex` ผิดที่

ต้องใส่ flex ที่ parent/container ไม่ใช่ลูก

ตัวอย่าง:

```css
.features-section {
  display: flex;
}
```

ไม่ใช่ใส่ที่ card แต่ละใบก่อนเข้าใจ concept

## 5. ใช้ width เต็มจอเกินไป

ถ้า content กว้างเต็มจอบน desktop ใหญ่ ๆ จะอ่านยาก  
ควรใช้ `max-width` และ container

---

# Closing Summary สำหรับพูดท้าย Section CSS

วันนี้เราเริ่มเห็นแล้วว่า CSS ไม่ใช่แค่การเปลี่ยนสี แต่เป็นการควบคุมพื้นที่และ layout ของหน้าเว็บ

Concept ที่สำคัญที่สุดในวันนี้คือ:

```text
ทุก element คือกล่อง
padding คือระยะห่างด้านใน
margin คือระยะห่างด้านนอก
max-width ช่วยจำกัดความกว้าง
margin: 0 auto ช่วยจัด content ให้อยู่กลางหน้า
display: flex ช่วยจัด element ให้อยู่ในแถว
class selector ต้องมีจุดหน้า class
```

ถ้าเข้าใจเรื่องกล่องและระยะห่าง ต่อไปการเรียน Flexbox, Grid, Responsive Design และ React Component จะง่ายขึ้นมาก