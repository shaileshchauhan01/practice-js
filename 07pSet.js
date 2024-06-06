// Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

for(let year = 2014; year <= 2050; year++){
    let date = new Date(year, 0, 1);
    if(date.getDay()===0)
        console.log("1st January is being a Sunday  "+year);
}

// month (0 for January), and day (1 for the 1st day of the month).
// 0 corresponds to Sunday, 1 to Monday, and so on.
// If January 1st of the current year falls on a Sunday (i.e., d.getDay() === 0)