// What is the weather outside? 
// Sunny : alert "Wear T-shirt"
// Rainy : alert : "Don't forget to take umbrella with you"
// Hot : alert : "Get a handkerchief"
// Freezing : alert : "Get your sweater on"
// else : alert : "Not a valid input"

let weather = prompt("How's the weather outside?");
switch (weather) {
    case "sunny":
        alert("Wear T-shirt")
        break;
    case "rainy":
        alert("Don't forget to take umbrella with you")
        break;
    case "hot":
        alert("Get a handkerchief")
        break;
    case "freezing":
        alert("Get your sweater on")
        break;
    default:
        alert("Not a valid input")
}