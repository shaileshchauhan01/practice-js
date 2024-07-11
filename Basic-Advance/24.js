let colors = ["red", "green", "blue", "white", "black"];
let numbers = [1, 3, 4, 6, 7, 8, 9, 10];

// for loop
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// for-of loop
for (let color of colors) {
    console.log(color)
}
for (let number of numbers) {
    console.log(number)
}


// Store odd and even numbers in different variables.
let odd = [], even = [];

for (let number of numbers) {
    if (number % 2 === 0) {
        even.push(number)
    } else {
        odd.push(number)
    }
}