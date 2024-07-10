// Program to calculate the sum of first n natural number (1,2,3,...n) are known as natural number

let max = +prompt("Enter any number to add natural numbers till that number");
let sum = 0; 

for(let i = 1; i <= max; i++){
    sum += i;
}
alert(sum)

