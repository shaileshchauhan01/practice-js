let marks = Number(prompt("Enter your marks"));

if (marks > 100) {
    alert("Marks can't be greater than 100")
} else if (marks > 80 && marks < 100) {
    alert("Grade A")
}
else if (marks > 50 && marks < 80) {
    alert("Grade B")
}
else if (marks > 30 && marks < 50) {
    alert("Grade C")
}
else if (marks > 0) {
    alert("Grade D")
}



let userMarks = Number(prompt("Enter your marks"));

switch (userMarks) {
    case userMarks > 100:
        alert("Marks can't be greater than 100")
        break;
    case userMarks > 80 && userMarks < 100:
        alert("Grade A")
        break;
    case userMarks > 50 && userMarks < 80:
        alert("Grade B")
        break;
    case userMarks > 30 && userMarks < 50:
        alert("Grade C")
        break;
    default:
        alert("Grade F");
        break;
}