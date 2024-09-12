let name = prompt("What is your name");
console.log(name);

function checkVowels(char) {
    return "aeiou".includes(char.toLowerCase());
}

let characters = name.split('');

let vowels = characters.filter(checkVowels);

console.log("Vowels in the name:", vowels.join(''));
