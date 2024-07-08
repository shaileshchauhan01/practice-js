// Contact all numbers from 5 to 0 in dessending ordere using while loop.
// assending small to large

let finalV = "";
let initialV = 5;
while (initialV >= 0) {
    finalV += initialV;
    initialV--;
}
console.log(finalV);


// Contact all even numbers from 10 to 0 in dessending ordere using while loop.

let finalEvenV = "";
let initialEvenV = 10;
while (initialEvenV >= 0) {
    if (initialEvenV % 2 === 0) {
        finalEvenV += initialEvenV;
    }
    initialEvenV--;
}
console.log(finalEvenV);