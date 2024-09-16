// Different types of errors :-

let username = "Arya";
let allUsers = ["John" , "Arya" , "Sam"];

// 1. Syntax error
// console.log(username));

// 2. Reference error 
console, log(username);

// 3. Type error
let empty = undefined;
console.log(empty.abc);
console, log(username());

// 4. Range error
allUsers.length = 100;

// Logical error
console.log((32 - 32) * 5 / 9);