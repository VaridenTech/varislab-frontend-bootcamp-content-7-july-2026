// NaN (Not a Number)

const result = "hello";
const result2 = "Kitty";

const helloNumber = parseInt(result);
const helloFloat = parseFloat(result2);

// console.log(helloNumber);
// console.log(typeof helloNumber);

// console.log(helloNumber - helloFloat);

console.log(helloNumber === NaN);
console.log(isNaN(helloNumber));