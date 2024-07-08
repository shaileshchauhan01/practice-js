//  Print the values 1 to 10.

for (let i = 1; i <= 10; i++) {
    console.log(`${i}`)
}


// Print even values from 1 to 10.

for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(`${i} even`)
    }
}


// Print odd values from 1 to 10.

for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        console.log(`${i} odd`)
    }
}


// Print the sum of all values from 1 to 10.

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
} console.log(sum)


// log all values from 1 to 10 using while loop. 

let i = 1;
while (i <= 10) {
    console.log(i)
    i++;
}