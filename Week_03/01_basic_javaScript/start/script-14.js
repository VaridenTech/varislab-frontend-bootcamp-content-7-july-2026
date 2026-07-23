// if , else
// if Statement, Control Flow

// const age = 18;

// if (age >= 20) {
//     console.log('You are an adult');
// } else {
//     console.log('You are not an adult');
// }

// const temperature = -1;

// if (temperature > 35) {
//     console.log('It is hot');
// } else if (temperature > 25) {
//     console.log('It is warm');
// } else if (temperature > 10) {
//     console.log('It is cool');
// } else if (temperature < 0) {
//     console.log('It is freezing');
// } else {
//     console.log('It is ok');
// }

// Logical Operators
// const age = 25;
// const isDrivingLicense = true;
// const isStudent = true;

// if (age >= 18 && isDrivingLicense && !isStudent) {
//     console.log('You can drive');
// }

// const isWeekend = false;
// const isHoliday = false;

// if (isWeekend || isHoliday) {
//     console.log('No work today');
// }

// const isLoggedIn = false;

// if (!isLoggedIn) {
//     console.log('Please login');
// } else {
//     console.log('Welcome back');
// }

// Truthy and Falsy

// Falsy
// false
// 0
// ""
// null
// undefined
// NaN

// const name = "Varis";

// if (name) {
//     console.log('Hello ' + name);
// } else {
//     console.log('Please enter your name');
// }


// Truthy
// true
// 1
// "Hello"
// [1, 2, 3]

// Nested If 

const weather = "sunny";
const temperature = 20;

function checkWeather() {
    // Guard
    if (weather !== "rainy") {
        console.log('It is not raining');
        return;
    }

    if (temperature < 20) {
        console.log('It is cold and rainy');
    } else {
        console.log('It is warm and rainy');
    }
}

checkWeather();