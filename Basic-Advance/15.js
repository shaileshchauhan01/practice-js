// Ask the user age and check following conditions
// age btw : 12-55, print a message- "You can participate in marathon"
// age btw : 4-11, print a message- "You are too young to participate in marathon"
// age < : 4, print a message- "Hey kiddo! Can you walk?"
// age > : 55, print a message- "You are too old to participate in marathon"


let age = Number(prompt("Enter your age"));

if (age > 12 && age < 55) {
    console.log("You can participate in marathon");
} else if (age > 4 && age < 11) {
    console.log("You are too young to participate in marathon")
} else if (age < 4) {
    console.log("Hey kiddo! Can you walk?");
} else if (age > 55) {
    console.log("You are too old to participate in marathon");
} else {
    alert("Enter valid age");
    console.log("Entered age is not valid");
}

// OR

let userAge = Number(prompt("Enter your age."));

switch (true) {
    case userAge > 12 && userAge < 55:
        console.log("You can participate in marathon.");
        break;
    case userAge > 4 && userAge < 11:
        console.log("You are too young to participate in marathon.");
        break;
    case userAge < 4 && userAge > 0:
        console.log("Hey kiddo! Can you walk?");
        break;
    case userAge === 0:
        console.log("Firstly, you have to take birth.")
        break;
    case userAge > 55:
        console.log("You are too old to participate in marathon.");
        break;
    default:
        console.log("Not valid");
}