let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

function generateRandomColor() {
    let hexCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];


    let color = "#";

    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 16);
        color = color + hexCharacter[randomNumber];
    }
    return color;
};

function handleClick() {
    // gen random color
    let randomColor = generateRandomColor();
    // chng bg of box
    box1.style.backgroundColor = randomColor;
}

function handleMouseMove(){
    let randomColor = generateRandomColor();
    box2.style.backgroundColor = randomColor;
}

box1.addEventListener("click", handleClick);
box2.addEventListener("mousemove", handleMouseMove);


// box2.addEventListener("mousemove", )

