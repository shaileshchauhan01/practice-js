let numbers = [2, 10, 42, 7, 55];

// Find even value.
for (let number of numbers) {
    if (number % 2 === 0) {
        console.log(number)
    }
}


// Find odd value.
for (let number of numbers) {
    if (number % 2 !== 0) {
        console.log(number)
    }
}


// Find number divisible by 5.
for (let number of numbers) {
    if (number % 5 === 0) {
        console.log(number)

    }
}


// Log all array one by one.
for (let number of numbers) {
    console.log(number, "value")
}


// Find number divisible by 3.
for (let number of numbers) {
    if (number % 3 === 0) {
        console.log(number)

    }
}
