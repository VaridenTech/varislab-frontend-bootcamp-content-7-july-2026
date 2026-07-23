// For Loop

// i === 9
// i++ === i = i + 1;
// for (let i = 0; i < 10; i += 2) {
//     // 1st i = 0;
//     // 2nd i = 1;
//     // 3rd i = 2;
//     // ...
//     // 10th i = 9;
//     console.log(`Count: ${i}`);
// }

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// i < 5
for (let i = 0; i < fruits.length; i++) {
    // i = 0, 'apple'
    // i = 1, 'banana'
    // i = 2, 'cherry'
    // i = 3, 'date'
    // i = 4, 'elderberry'
    if (fruits[i] === 'cherry') {
        continue;
    }
    // console.log(`Fruit: ${fruits[i]}`);
    // if (fruits[i] === 'cherry') {
    //     break;
    // }
}

for (let fruit of fruits) {
    // 1st fruit = 'apple'
    // 2nd fruit = 'banana'
    // 3rd fruit = 'cherry'
    // 4th fruit = 'date'
    // 5th fruit = 'elderberry'
    console.log(`Fruit of: ${fruit}`);
}

// Object
for (let fruit in fruits) {
    console.log(`Fruit: ${fruit}`);
}

// Infinite Loop
for (let i = 0; i < 10; i--) {
    console.log(`Count: ${i}`);
}