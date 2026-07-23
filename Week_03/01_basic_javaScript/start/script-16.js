// Switch Statement
// const favoriteColor = "red";

// switch (favoriteColor) {
//     case "red":
//         console.log("Your favorite color is red");
//         break;
//     case "blue":
//         console.log("Your favorite color is blue");
//         break;
//     case "green": 
//         console.log("Your favorite color is green");
//         break;
//     default:
//         console.log("Your favorite color is not red, blue, or green");
// }

// if (favoriteColor === "red" && favoriteColor === "blue" && favoriteColor === "green") {
//     console.log("Your favorite color is red");
// } else if (favoriteColor === "blue") {
//     console.log("Your favorite color is blue");
// } else if (favoriteColor === "green") {
//     console.log("Your favorite color is green");
// } else {
//     console.log("Your favorite color is not red, blue, or green");
// }

const day = "Sunday";

switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday": {
        console.log("Today is Workday");
        const message = 'Welcome;'
        break;
    }
    case "Saturday":
    case "Sunday":
        console.log("Today is weekend");
        console.log(message);
        break;
    default:
        console.log("Today is not a day");
        break;
}