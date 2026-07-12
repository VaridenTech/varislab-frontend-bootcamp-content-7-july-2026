## Section 01

ก่อนเริ่มเรื่องใหม่ เรามาทบทวนก่อนว่าเราเรียนอะไรไปแล้ว

HTML ใช้สร้างโครงสร้าง
CSS ใช้จัดหน้าตา
JavaScript ใช้เพิ่ม interaction

เราใช้:
- getElementById
- addEventListener
- value
- textContent
- if
- array
- object
- forEach

วันนี้เราจะยังไม่เน้น JavaScript เพิ่มมากนัก
แต่จะกลับมาเก็บ HTML และ CSS ให้แข็งแรงขึ้น
เพราะถ้าโครงสร้างและ layout ไม่ดี ต่อไปเวลาเข้า React จะเริ่มสับสนง่ายครับ

## Section 02

HTML เขียนได้หลายแบบ

เราสามารถใช้ div ทั้งหน้าเว็บก็ได้
แต่ปัญหาคือ code จะอ่านยาก และไม่รู้ว่าส่วนไหนคือ header ส่วนไหนคือ content หลัก ส่วนไหนคือ footer

Semantic HTML คือการใช้ tag ที่มีความหมายกับเนื้อหานั้น ๆ

เช่น:
```
header = ส่วนหัวของหน้า
main = เนื้อหาหลัก
section = หมวดเนื้อหา
article = content card หรือเนื้อหาที่เป็นชิ้น ๆ
footer = ส่วนท้าย
nav = เมนูนำทาง
```

การใช้ tag ที่มีความหมายช่วยให้:
- code อ่านง่ายขึ้น
- คนอื่นดูแลต่อได้ง่ายขึ้น
- browser และ screen reader เข้าใจหน้าเว็บดีขึ้น
- เตรียมตัวเข้าสู่การเขียน React component ได้ดีขึ้น

Bad Sample
```html
<div>
  <div>
    <div>Full-Stack Bootcamp</div>
    <div>เรียนเขียนเว็บพร้อม AI Workflow</div>
  </div>
</div>
```

Better Sample
```html
<header>
  <nav>
    <p>Varis Lab</p>
    <a href="#">Courses</a>
  </nav>
</header>

<main>
  <section>
    <h1>Full-Stack Software Developer Bootcamp</h1>
    <p>เรียนเขียนเว็บพร้อม AI Workflow</p>
  </section>
</main>
```