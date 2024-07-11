let numbers = [2, 10, 42, 7, 55];

// Find out the highest number in array.
let highestNumber = numbers[0];
for (let number of numbers) {
    if (highestNumber < number) {
        highestNumber = number;
    }
}
console.log(highestNumber);


// Find out the lowest number in array.
let lowestNumber = numbers[0];
for (let number of numbers) {
    if (lowestNumber > number) {
        lowestNumber = number;
    }
}
console.log(lowestNumber);