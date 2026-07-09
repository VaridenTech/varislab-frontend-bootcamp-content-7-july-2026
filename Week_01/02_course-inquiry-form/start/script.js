const inquiryForm = document.getElementById("inquiryForm");
const fullNameInput = document.getElementById("fullName");
const goalInput = document.getElementById("goal");
const levelSelect = document.getElementById("level");
const messageTextarea = document.getElementById("message");
const resultBox = document.getElementById("result");


inquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // 1. รับค่าข้อมูลจากฟอร์ม มาเก็บเอาไว้ในตัวแปร
    const fullName = fullNameInput.value.trim();
    const goal = goalInput.value.trim();
    const level = levelSelect.value;
    const message = messageTextarea.value.trim();

    // console.log("fullName: ", fullName, 'goal: ', goal, 'level: ', level, 'message: ', message);

    // 2. เช็คว่า User ส่งข้อมูลมาครบถ้วนหรือไม่
    if (fullName === "" || goal === "" || level === "") {
        resultBox.textContent = "กรุณากรอกชื่อ เป้าหมาย \"และ\"เลือกระดับพื้นฐานให้ครบก่อนส่งข้อมูล";
        return;
    }
    
    let extraMessage = "";
    if (level === "เริ่มจากศูนย์") {
        extraMessage = "คุณสามารถเรียนรู้จากศูนย์ได้";
    }

    // 3. ถ้า User ส่งข้อมูลมาครบถ้วน ให้แสดงข้อมูลออกมา
    // Old Syntax
    // resultBox.textContent = "สวัสดีครับ " + fullName + " คุณส่งข้อมูลมาดังนี้: " + "เป้าหมาย: " + goal + " พื้นฐาน: " + level + " ข้อความ: " + message;
    // New Syntax (Literal String)
    resultBox.textContent = `new syntax: สวัสดีครับ ${fullName} คุณส่งข้อมูลมาดังนี้: เป้าหมาย: ${goal} พื้นฐาน: ${level} ข้อความ: ${message} ${extraMessage}`;
});