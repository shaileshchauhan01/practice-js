// function getRandomNumber(max) {
//     return Math.floor(Math.random() * max);
// }

// function generateRandomColor() {
//     let hexCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
//     let color = "#";
//     for (let i = 0; i < 16; i++) {
//         let randomNumber = getRandomNumber(16);
//         color = color + hexCharacter[randomNumber];
//     }
// return color;
// }

// let parentBox = document.querySelector(".boxes");

// for (let i = 0; i < 500; i++) {
//     let div = document.createElement("div");
//     div.classList.add('box');
//     let h3 = document.createElement('h3');
//     let randomNum = getRandomNumber(500);
//     h3.innerText = randomNum;

//     div.append(h3);
//     parentBox.append(div);
// }

// let allBoxes = document.querySelectorAll('.box');
// function handleMouseMove(){
//     allBoxes.forEach((box) => {
//         box.style.backgroundColor = generateRandomColor;
//     });

//     box.querySelector('h3').innerText = getRandomNumber(500);
// }
// parentBox.addEventListener("mousemove", handleMouseMove);


function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  
  function generateRandomColor() {
    let hexCharacter = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let color = "#";
    for (let i = 0; i < 6; i++) {
      let randomNumber = getRandomNumber(16);
      color = color + hexCharacter[randomNumber];
    }
    return color;
  }
  
  let parentBox = document.querySelector(".boxes");
  
  for (let i = 0; i < 500; i++) {
    let div = document.createElement("div");
    div.classList.add('box');
    let h3 = document.createElement('h3');
    let randomNum = getRandomNumber(500);
    h3.innerText = randomNum;
  
    div.append(h3);
    parentBox.append(div);
  }
  
  let allBoxes = document.querySelectorAll('.box');
  
  function handleMouseMove() {
    allBoxes.forEach((box) => {
      box.style.backgroundColor = generateRandomColor(); // Call the function to get the color value
      box.querySelector('h3').innerText = getRandomNumber(500); // Update the number within the loop
    });
  }
  
  parentBox.addEventListener("mousemove", handleMouseMove);