// Take a number from user (0 to 100) and alert a MessageChannel, if matches with following conditions. 
// Print "AA" if number is marks >= 90 && marks < 100;
// Print "AB" if number is  marks >= 80 && marks < 90;
// so on...

// solve with switch case


let marks = +prompt("Enter your marks to know your grades");

switch (true) {
    case marks >= 90 && marks < 100:
        alert("AA")
        break;
    case marks >= 80 && marks < 90:
        alert("AB")
        break;
    case marks >= 70 && marks < 80:
        alert("BB")
        break;
    case marks >= 60 && marks < 70:
        alert("BC")
        break;
    case marks >= 50 && marks < 60:
        alert("CC")
        break;
    case marks >= 40 && marks < 50:
        alert("CD")
        break;
    case marks >= 30 && marks < 40:
        alert("DD")
        break;
    case marks < 30:
        alert("FF")
        break;

    default: alert("Enter valid marks")
        break;
}