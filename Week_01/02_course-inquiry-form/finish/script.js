const inquiryForm = document.getElementById("inquiryForm");
const fullNameInput = document.getElementById("fullName");
const goalInput = document.getElementById("goal");
const levelSelect = document.getElementById("level");
const messageInput = document.getElementById("message");
const resultBox = document.getElementById("result");

inquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = fullNameInput.value.trim();
    const goal = goalInput.value.trim();
    const level = levelSelect.value;
    const message = messageInput.value.trim();

    if (fullName === "" || goal === "" || level === "") {
        resultBox.textContent =
            "กรุณากรอกชื่อ เป้าหมาย และเลือกระดับพื้นฐานให้ครบก่อนส่งข้อมูล";
        return;
    }

    resultBox.textContent = `สวัสดีครับคุณ ${fullName}
เป้าหมายของคุณคือ ${goal}
ระดับพื้นฐานตอนนี้คือ ${level}
ข้อความเพิ่มเติม: ${message || "ไม่มีข้อความเพิ่มเติม"}`;
});