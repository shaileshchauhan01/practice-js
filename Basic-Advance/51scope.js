// Scope: is a way in which you can restrict access of any variable in certain area of code. 
// Two ways to create a scope in Js: 
// 1. Block "{}", block will restrict the access to variable.
// 2. Function , also restrict the access to variable.

// Types of Scope 

// Global Scope
let user = "Arya";

// Block Scope
{
    let username = "John";
    console.log(username);
}

// Function Scope
function sayHello() {
    let oddNumber = 21;
    console.log(oddNumber);
}

sayHello();
console.log(user);

// Uses/Benefits of scopes
// Security
// Naming Collision

