// Object
const name = 'John';
const age = 30;
const favoriteNumber = 7;

// key: value
const person = {
    name: 'John',
    age: 30,
    favoriteNumber: 7,
    sayHi: function() {
        console.log('Hi');
    },
    sayHello() {
        console.log('Hello');
    },
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    },
    hobbies: ['reading', 'cooking', 'traveling']
}

console.log(person.address.city);
console.log(person['address'].state);

console.log(person.hobbies[1]);

const persons =[
    {
        name: 'John',
        age: 30,
        favoriteNumber: 7,
        sayHi: function() {
            console.log('Hi');
        },
        sayHello() {
            console.log('Hello');
        },
    },
    {
        name: 'Jane',
        age: 25,
        favoriteNumber: 8,
        sayHi: function() {
            console.log('Hi');
        },
        sayHello() {
            console.log('Hello');
        },
    }
]

console.log(persons[1].name);