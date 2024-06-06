// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// If a year is divisible by 100, it is a leap year only if it is also divisible by 400. This accounts for years like 2000 being leap years.
// If a year is not divisible by 100, it is a leap year if it is divisible by 4. This accounts for years like 2016 being leap years.

function leapyear(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2000)) //t
console.log(leapyear(2005)) //f
console.log(leapyear(2010)) //f
console.log(leapyear(2015)) //f
console.log(leapyear(2020)) //t
console.log(leapyear(2025)) //f