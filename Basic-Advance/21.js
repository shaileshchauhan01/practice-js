// Make a simple calc with these functions. using prompt type conversion ans if CSSLayerStatementRule. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

let num1 = +prompt("Enter your 1st number");
let num2 = +prompt("Enter your 2nd number");
let operation = prompt("Enter your operation you want to run (add, sub, mul, div)");

if (operation == "add") {
    let add = num1 + num2;
    alert(`Add: ${num1} + ${num2} = ${add}`);
} else if (operation == "sub") {
    let sub = num1 - num2;
    alert(`Sub: ${num1} - ${num2} = ${sub}`);
} else if (operation == "mul") {
    let mul = num1 * num2;
    alert(`Mul: ${num1} * ${num2} = ${mul}`);
} else if (operation == "div") {
    let div = num1 / num2;
    alert(`Div: ${num1} / ${num2} = ${div}`);
} else {
    alert("Only -add, sub, mul, div- these operations are available, choose wisely.")
}