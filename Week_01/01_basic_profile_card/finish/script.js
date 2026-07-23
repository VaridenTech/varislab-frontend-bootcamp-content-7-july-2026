const summary = document.getElementById("summary"); 
const toggleButton = document.getElementById("toggleButton"); 

toggleButton.addEventListener("click", function () { 
    summary.textContent = "เป้าหมายของฉันคือการสร้างโปรเจกต์จริง เข้าใจพื้นฐาน Full-Stack และเตรียม Portfolio สำหรับสมัครงานสาย Developer"; 
});

// function addEventListener(event, callback) {
//     callback();
// }