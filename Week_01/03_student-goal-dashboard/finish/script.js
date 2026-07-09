const studentList = document.getElementById("studentList"); 
const students = [
    { name: "Man", goal: "เปลี่ยนสายงานเป็น Developer", level: "เริ่มจากศูนย์", }, 
    { name: "Jane", goal: "สร้าง Portfolio", level: "เคยเรียนมาบ้าง", }, 
    { name: "Pond", goal: "เข้าใจ Full-Stack", level: "เคยทำโปรเจกต์เล็ก ๆ", },
]; 

students.forEach(function (student) { 
    const studentCard = document.createElement("article"); 
    studentCard.classList.add("student-card"); 
    studentCard.innerHTML = ` <h2>${student.name}</h2> <p><strong>เป้าหมาย:</strong> ${student.goal}</p> <p><strong>พื้นฐาน:</strong> ${student.level}</p> <span class="badge">Bootcamp Student</span> `; 
    studentList.appendChild(studentCard); 
});