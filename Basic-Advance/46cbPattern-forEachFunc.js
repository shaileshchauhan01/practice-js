// forEach
// map
// filter
// sort
// find
// findIndex
// every
// some
// reduce


let colors = ["Aqua", "Black", "Blue", "Brown", "Chocolate", "Coral", "Crimson", "DarkBlue", "DarkGrey"];
let number = [1, 4, 5, 6, 7, 8, 12, 14, 156, 265]

let allColors = " ";
for (let i = 0; i < colors.length; i++) {
    let color = colors[i];
    allColors += color + " ";
}
console.log(allColors)
// Aqua Black Blue Brown Chocolate Coral Crimson DarkBlue DarkGrey 

let allNumbers = "";
for (let i = 0; i < number.length; i++) {
    let numbers = number[i];
    allNumbers += numbers + " ";
}
console.log(allNumbers)
// 1 4 5 6 7 8 12 14 156 265 

// to fix repeatation

