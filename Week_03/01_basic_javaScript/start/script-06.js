// Scope = ขอบเขตการใข้งานตัวแปร

function sayHi() {
    const result = 'Hi';
    const lastName = 'Varis';
    console.log(result);
}

function sayBye() {
    const result = 'Bye';
    // console.log(lastName);

    if (true) {
        let message = 'Hello';
    }

    console.log(message);
}

const result = 'Bye';
sayHi();
sayBye();
// console.log(lastName);