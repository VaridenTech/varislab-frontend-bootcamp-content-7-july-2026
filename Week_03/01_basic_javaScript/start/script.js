// Array Methods
const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

fruits.forEach((fruit, index) => {
    // 1st fruit = 'apple'
    // 2nd fruit = 'banana'
    // 3rd fruit = 'cherry'
    // 4th fruit = 'date'
    // 5th fruit = 'elderberry'

    // 1st index = 0
    // 2nd index = 1
    // 3rd index = 2
    // 4th index = 3
    // 5th index = 4
    // fruits[index] = fruit.toUpperCase();
});

const uppercaseFruits = fruits.map(fruit => {
    // 1st fruit = 'apple'
    // 2nd fruit = 'banana'
    // 3rd fruit = 'cherry'
    // 4th fruit = 'date'
    // 5th fruit = 'elderberry'

    // 1st return = 'APPLE'
    // 2nd return = 'BANANA'
    // 3rd return = 'CHERRY'
    // 4th return = 'DATE'
    // 5th return = 'ELDERBERRY'
    return fruit.toUpperCase();
});

const filteredFruits = fruits.filter(fruit => {
    // 1st fruit = 'apple'
    // 2nd fruit = 'banana'
    // 3rd fruit = 'cherry'
    // 4th fruit = 'date'
    // 5th fruit = 'elderberry'
    return fruit.length >= 6;
});

console.log('filteredFruits:', filteredFruits);
// .find, .some, .reduce