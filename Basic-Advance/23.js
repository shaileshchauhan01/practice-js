// Create a var named "character" using let ans assign empty obj.

let character = {};

// Re-assign value.

character = {
    characterName: "Arya",
}


let age = 20;
character = {
    "character-age": age,
}
// OR
character["character-age"] = age;


character["sur name"] = "Stark";


character.title = "Lady of Winterfell";


character.greet = function () {
    alert(`I am ${character.characterName} and my title is ${character.title}`)
}

character.isFemale = true;

character.greet();


character.greet = function () {
    alert(`She  is ${character.characterName} and her title is ${character.title}`)
}
character.greet();


character.isAdult = character["character-age"] > 18 ? true : false;

character.isAdult = character.isAdult == true ? false : true;
// OR
character.isAdult = !character.isAdult;
// OR
character.isAdult = function () {
    character.isAdult = !character.isAdult;
}


let keyName = "playedBy";
character[keyName] = "Maisie Williams";


alert(character[keyName]);


console.log(character[42]);


character.totalSeasons = 1 + 2 + 3 + 2;
console.log(character.totalSeasons);