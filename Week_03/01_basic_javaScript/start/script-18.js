// While Loop
// let i = 0;
// while (i < 10) {
//     console.log(`Count: ${i}`);
//     i++;
// }

let userInput = "";

while (userInput !== "quit") {
    userInput = prompt("Enter a command to quit (use 'quit' to exit): ");
    if (userInput !== "quit") {
        console.log(`You input: ${userInput}`);
    }

    continue;
    break;
}

do {
    userInput = prompt("Enter a command to quit (use 'quit' to exit): ");
    if (userInput !== "quit") {
        console.log(`You input: ${userInput}`);
    }
} while (userInput !== "quit");