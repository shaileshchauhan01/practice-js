// WAP to calc the total price of your phone purchase, with following conditions:
// You will keep purchasing phone (hint - loop) untill you run out of bank balance.
// You will also buy accessories for each phone as long as the purchase amount below your threshold.
// After you have calculated the purchase amount, add in the tax then print out the calculated purchased amount, properly formatted like ($334.56)
// Finally check the amount against your bank balance to see if you can afford it or not.

// const SPENDING_THRESHOLD = 200;
// const TAX_RATE = 0.08;
// const PHONE_PRICE = 99.99
// const ACCESSORRY_PRICE = 9.99;

// var bank_balance = 303.91;
// var amount = 0;


const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99
const ACCESSORRY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;

while (amount < bank_balance) {
    amount += PHONE_PRICE;
    if (amount < SPENDING_THRESHOLD) {
        amount += ACCESSORRY_PRICE;
    }
}
let tax = amount * TAX_RATE;
let taxedAmount = Math.round(amount + tax);
console.log(`$${taxedAmount}`);

if (taxedAmount < bank_balance) {
    console.log("You can't afford another phone due to low bank balance.");
} else {
    console.log("You have enought amount in your bank to buy another phone.")
}
console.log(`Balance left in bank is ${amount - bank_balance}`);
