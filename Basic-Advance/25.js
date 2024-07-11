let numbers = [2, 10, 42, 7, 55];

//  Calculate the Sum of array items and console the result.
let sum = 0;
for (let number of numbers) {
    sum += number;
}
console.log(`Sum of ${numbers} is ${sum}`);


// Calculate the average of array items.
// let average = 0;
// for(number of numbers){
//     average = sum / numbers.length;
// }
// console.log(`Average of ${numbers} is ${sum}`);

//OR

console.log(`Average of ${numbers} is ${sum / numbers.length}`);
