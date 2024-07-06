// WAP that take a month ( 1-12 ) from user and alert the number of months in a month. 

let month = Number(prompt("Enter a number of month to know the days of month"));
switch (month) {
    case 1:
        alert("January: 31 days")
        break;
    case 2:
        alert("February: 30 days")
        break;
    case 3:
        alert("March>: 31 days")
        break;
    case 4:
        alert("April: 30 days")
        break;
    case 5:
        alert("May: 31 days")
        break;
    case 6:
        alert("June: 30 days")
        break;
    case 7:
        alert("Jule: 31 days")
        break;
    case 8:
        alert("Agust: 31 days")
        break;
    case 9:
        alert("September: 30 days")
        break;
    case 10:
        alert("October: 31 days")
        break;
    case 11:
        alert("November: 30 days")
        break;
    case 12:
        alert("December: 31 days")
        break;

    default:
        alert("There are only 12 months. Enter number between 1 to 12")
        break;
}

