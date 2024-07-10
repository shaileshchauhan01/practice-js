// WAP take two integer from user using prompt and alerts the larger one.

const num1 = +prompt("Enter 1st value");
const num2 = +prompt("Enter 2nd value");

if (num1 > num2) {
    alert(`${num1} is greater (Values are : ${num1}, ${num2})`)
} else {
    alert(`${num2} is greater (Values are : ${num1}, ${num2})`)
}


// WAP a JS conditional statement to find the sign (+,-) of product of these three numbers. Take those three numbers using prompts.

const numA = +prompt("Enter 1st value");
const numB = +prompt("Enter 2nd value");
const numC = +prompt("Enter 3rd value");

let product = numA * numB * numC;

if(product >= 0){
    alert(`The product of three is : ${product} (+ve)`)
} else{
    alert(`The product of three is : ${product} (-ve)`)
}