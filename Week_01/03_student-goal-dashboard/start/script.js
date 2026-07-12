const studentList = document.getElementById("studentList");

// const students = [
//     "นาย วริศ", // 0
//     "คุณคิง", // 1
//     "คุณน้ำ", // 2
//     "คุณน้ำหมวก", // 3
// ];

// const studentNam = {
//     name: "วริศ",
//     goal: "วันนี้อยากกินซูชิโร่",
//     level: "เริ่มจาก 0",
//     lessons: ['lesson-1', 'lesson-2', 'lesson-3']
// }
// studentNam.goal; // วันนี้อยากกินซูชิโร่
// studentNam['goal']; // วันนี้อยากกินซูชิโร่

const students = [
    // element 0
    {
        name: "วริศ",
        goal: "วันนี้อยากกินซูชิโร่",
        level: "เริ่มจาก 0",
        lessons: ['lesson-1', 'lesson-2', 'lesson-3']
    },
    // element 1
    {
        name: "คุณคิง",
        goal: "วันนี้อยากกินข้าวหมูกรอบ",
        level: "เริ่มจาก 50"
    },
    // element 2
    {
        name: "คุณน้ำ",
        goal: "วันนี้อยากกินราดหน้า",
        level: "เริ่มจาก 70"
    },
    // element 3
    {
        name: "คุณน้ำหมวก",
        goal: "วันนี้อยากกินข้าวผัดไทย",
        level: "เริ่มจาก 99"
    },
        // element 0
        {
            name: "วริศ",
            goal: "วันนี้อยากกินซูชิโร่",
            level: "เริ่มจาก 0",
            lessons: ['lesson-1', 'lesson-2', 'lesson-3']
        },
        // element 1
        {
            name: "คุณคิง",
            goal: "วันนี้อยากกินข้าวหมูกรอบ",
            level: "เริ่มจาก 50"
        },
        // element 2
        {
            name: "คุณน้ำ",
            goal: "วันนี้อยากกินราดหน้า",
            level: "เริ่มจาก 70"
        },
        // element 3
        {
            name: "คุณน้ำหมวก",
            goal: "วันนี้อยากกินข้าวผัดไทย",
            level: "เริ่มจาก 99"
        }
];

// รอบที่ 1 student = students[0]
// รอบที่ 2 student = students[1]
// รอบที่ 3 student = students[2]
// รอบที่ 4 student = students[3]
// array.forEach
students.forEach(function(student) {
    // สร้างกล่อง <article></article> ขึ้นมา
    const studentCard = document.createElement("article");

    // ใส่คลาส <article class="student-card"></article>
    studentCard.classList.add("student-card");

    // ใส่ h2 ใน article
    // <article class="student-card">
    //     <h2>นาย วริศ</h2>
    // </article>
    studentCard.innerHTML = `
        <h2>${student.name}</h2>
        <p><strong>เป้าหมาย:</strong> ${student.goal}</p>
        <p><strong>ระดับ:</strong> ${student.level}</p>
        <span class="badge">Bootcamp Student</span>
    `;

    // ใส่ <article></article> ใน studentList <div id="studentList" class="student-list">
    studentList.appendChild(studentCard);
});