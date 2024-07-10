// Take a number from user (0 to 9) and alert a MessageChannel, if matches with following conditions. 
// Print "ONE" if number is equal to 1;
// Print "TWO" if number is equal to 2;
// Print "THREE" if number is equal to 3;
// Print "FOUR" if number is equal to 4;
// Print "FIVE" if number is equal to 5;
// Print "SIX" if number is equal to 6;
// Print "SEVEN" if number is equal to 7;
// Print "EIGHT" if number is equal to 8;
// Print "NINE" if number is equal to 9;

// solve with switch case

let num = +prompt("Enter number from 1 to 9");

switch (true) {
    case ( num== 1): alert("ONE");
        break;
    case num == 2: alert("TWO");
        break;
    case num == 3: alert("THREE");
        break;
    case num == 4: alert("FOUR");
        break;
    case num == 5: alert("FIVE");
        break;
    case num == 6: alert("SIX");
        break;
    case num == 7: alert("SEVEN");
        break;
    case num == 8: alert("EIGHT");
        break;
    case num == 9: alert("NINE");
        break;
    default: alert("PLEASE TRY AGAIN")
}