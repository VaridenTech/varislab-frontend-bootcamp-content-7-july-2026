// let price = 129.99;

// price = 99.5;

// price = "on sale";

// console.log(price)

// let quantity: number;

// quantity = 3;
// quantity = "three";
// quantity = null;

// let age: number = 25;
// let nameA: string = "John";
// let isStudent: boolean = true;

// let missing: undefined = undefined;
// let empty: null = null;

// "pending" , "shipped" , "delivered"
// let statusChoices: "pending" | "shipped" | "delivered" = "abc";

// statusChoices = "pending";

// function calculateTotal(price: number, quantity: number): number {
//     return price * quantity;
// }

// calculateTotal("abueaoc", 'aeooae');
// calculateTotal(10, 20);

// const greet = (name: string): string => {
//     return `Hello ${name}`;
// }

// greet("John");
// greet(123);

// const scores: number[] = [100, 90, 80, 70, 60];

// scores.push(100);
// scores.push("A+");

// let person: { name: string, age: number };

// person = { name: 'deo', age: 20 };

// person.name = "Varis";

// Union Type
let productId: number | string;

// Alias Type
type ProductStatus = 'active' | 'inactive' | 'pending' | 'shipped' | 'delivered';
type Product = {
    id: number,
    name: string,
    price: number,
    status: ProductStatus
}

let product: Product = {
    id: 1,
    name: "Product 1",
    price: 100,
    status: "active"
}

let product2: Product;