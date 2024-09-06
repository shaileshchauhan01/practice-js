// 1
// Define funcion named "sayHello" when called "alert" sayibg "Hello Javascript".
// call above function
// store the return value in a variable name "one"
// what is the "typeof" the value in "one"

function sayHello() {
    alert('Hello Javascript');
}
let one = sayHello();
typeof one;
// typeof(one);


// 2
// Change function from part 1 to accept name from user using " prompt " and store it in variable named " username " and alert message saying "Hello [username]"
// call above function
// store the return value in a variable name "two"
// what is the "typeof" the value in "two"

function sayHello() {
    let username = prompt("Enter your name");
    alert(`Hello ${username}`);
}

let two = sayHello();
typeof two;


// 3
// Change the function from part 2 to accept "username" as a parameter not from prompt.

function sayHello(username) {
    alert(`Hello ${username}`);
}
sayHello("Shailesh");


// 4
// Change from part 3 return the message "Hello username" instead of laerting it.
// call above function 
// store the return value in a variable named "four"
// what is the "typeof" the value in "four"

function sayHello(username){
    return `Hello ${username}`;
}
let four = sayHello("Shailesh");
typeof four;