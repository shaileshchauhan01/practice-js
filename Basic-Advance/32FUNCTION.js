// Add two numbers using function 

function addTwoNumbers() {
    let firstNumber = Number(
        prompt("Enter first number to sum")
    );
    let secondNumber = Number(
        prompt("Enter second number to sum")
    );

    alert(`The sum of two numbers is ${firstNumber + secondNumber}`)
};

addTwoNumbers();

// Find out square root of given number using function 

function squareRoot(){
    let number = +prompt("Enter any number to know its square root");
    alert(`${number * number}`)
};
squareRoot()