// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.  

let side1 = 5;
let side2 = 6;
let side3 = 7;

let semi = (side1 + side2 + side3) / 2;

// Heron's Formula : 

console.log(semi);
let area = Math.sqrt(semi*((semi-side1)*(semi-side2)*(semi-side3)))

console.log(area)