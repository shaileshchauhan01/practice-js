let userRoot = document.querySelector(".user-icons");
let computerRoot = document.querySelector('.computer-icons');
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");

let dataSet = [
    {
        name: 'rock',
        beats: 'scissors',
    },
    {
        name: 'paper',
        beats: 'rock',
    },
    {
        name: 'scissors',
        beats: 'paper',
    }
];

let userSelected = {}, computerSelected = {};

function getWinner(user, computer) {
    if (user.name === computer.name) {
        result.innerText = "It's a tie";
    } else if (user.beats === computer.name) {
        result.innerText = "You Wins";
    } else {
        result.innerText = "Computer Wins";
    }
}

function generateRandomNumber(max = 3) {
    return Math.floor(Math.random() * max);
}

function userLayout() {
    userRoot.innerHTML = "";
    dataSet.forEach((icon) => {
        let li = document.createElement('li');
        let i = document.createElement('i');
        i.className = `far fa-hand-${icon.name}`;

        if (userSelected.name === icon.name) {
            li.classList.add("selected");
        }

        li.addEventListener("click", () => {
            userSelected = icon;

            computerSelected = dataSet[generateRandomNumber()];

            getWinner(userSelected, computerSelected);
            // computerLayout();
            // userLayout();
            rerender();
        });

        li.append(i);
        userRoot.append(li);
    })
}
userLayout();

function computerLayout() {
    computerRoot.innerHTML = "";
    dataSet.forEach((icon) => {
        let li = document.createElement('li');
        let i = document.createElement('i');

        if (computerSelected.name === icon.name) {
            li.classList.add("selected");
        }

        i.className = `far fa-hand-${icon.name}`;
        li.append(i);
        computerRoot.append(li);
    });
}
computerLayout();

reset.addEventListener("click", () => {
    userSelected = {};
    computerSelected = {};
    // userLayout();
    // computerLayout();
    rerender();
    result.innerText = "";
});

function rerender() {
    userLayout();
    computerLayout();
}