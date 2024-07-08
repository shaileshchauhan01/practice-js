// WAP to calcualte the tax deduction of user salary:
// Salary <= 20,000 tax is 10%
// Salary <= 40,000 tax is 20%
// Salary > 50,000 tax is 30%

let salary = Number(prompt("Enter your salary"));

switch (true) {
    case salary <= 20000: {
        let tax = (salary * 10) / 100;
        alert(`Your in hand salary is ${salary - tax}`);
        break;
    }
    case salary <= 50000: {
        let tax = (salary * 20) / 100;
        alert(`Your in hand salary is ${salary - tax}`);
        break;
    }
    case salary > 50000: {
        let tax = (salary * 30) / 100;
        alert(`Your in hand salary is ${salary - tax}`);
        break;
    }
    default:
        alert("Enter your valid salary")
}


// OR


let userSalary = Number(prompt("Enter your salary"));

if (userSalary <= 20000) {
    let tax = (userSalary * 10) / 100;
    alert(`Your in hand salary is ${userSalary - tax}`);
} else if (userSalary <= 40000) {
    let tax = (userSalary * 20) / 100;
    alert(`Your in hand salary is ${userSalary - tax}`);
} else if (userSalary > 50000) {
    let tax = (userSalary * 30) / 100;
    alert(`Your in hand salary is ${userSalary - tax}`);
} else {
    alert("Enter valid salary")
}