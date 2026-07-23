// function sum(a, b) {
//     return a + b;
// }

// sum(10, 20)

// Arrow Function
const sum = (a,b) => {
    return a + b;
}

const sumShort = (a,b) => a + b;

// const sum = 1;
// const sum = '10';

// console.log(sum(80, 20));

const printName = name => {
    console.log(name);
}

const printNameShort = name => console.log(name);

printName('Varis');

function processData(x, callback) {
    callback(x);
}

// processData(10, function (value) {
//     console.log(value);
// });

processData(10, value => console.log(value + 10));