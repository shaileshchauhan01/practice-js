const colors = [
    "Red",
    "Green",
    "Blue",
    "Aqua",
    "Fuchsia",
    "Gray",
    "Lime",
    "Maroon",
    "Navy",
    "Olive",
    "Purple",
    "Silver",
    "Teal",
    "Black",
    "White",
    "Yellow",
    "AliceBlue",
    "AntiqueWhite",
    "AquaMarine",
    "Beige",
    "Coral",
    "CornflowerBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DeepPink",
    "DodgerBlue",
    "Gold",
    "HotPink",
    "LightCoral",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "SlateBlue",
    "Tomato",
    "Thistle",
    "Turquoise",
    "Violet",
    "Wheat",
    "Zinnwaldite",
    "Chartreuse",
    "Crimson",
    "DeepSkyBlue",
    "DimGray",
    "FireBrick",
    "FloralWhite",
    "Gainsboro",
    "GhostWhite",
    "HoneyDew",
    "HotSalmon",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LemonChiffon",
    "LightGoldenRodYellow",
    "LightPink",
    "LightSteelBlue",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MistyRose",
    "NavajoWhite",
    "OldLace",
    "PeachPuff",
    "Peru",
    "PowderBlue",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "Seashell",
    "SkyBlue",
    "SlateGray",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Thistle",
    "Turquoise",
    "VioletRed",
    "Wheat",
    "YellowGreen",
    "Azure",
    "Beige",
    "LightYellow",
    "MediumOrchid",
    "MintCream",
    "PapayaWhip",
    "PeachPuff",
    "PineGreen",
    "Plum"
];


let button = document.querySelector(".buttons");
let h1 = document.querySelector("h1");

function handleClick(colorText, e) {
    if (e.shiftKey === true) {
        h1.innerText = colorText;
        h1.style.backgroundColor = colorText;
    } else {
        h1.innerText = "Use ShiftKey to change color";
    }
}

colors.forEach(color => {
    let div = document.createElement("div");
    div.classList.add("box");
    div.style.backgroundColor = color;

    div.addEventListener("click", function (event) {
        handleClick(color, event);
    });

    // div.addEventListener("click", function(){
    //    h1.innerText = color;
    //     h1.style.backgroundColor = color;
    // });

    button.append(div);
});