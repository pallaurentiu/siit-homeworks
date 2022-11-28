var gameOptions = ["rock", "paper", "scissors"];

function getChoise(gameOptions) {
    var choise = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return choise;
}

var userChoise = getChoise(gameOptions);
console.log("User's choise: " + userChoise);

var computerChoise = getChoise(gameOptions);
console.log("Computer's choise: " + computerChoise);

var noWin = "It's a tie!";
var userWin = "User wins!";
var computerWin = "Computer wins!";

if (userChoise == "rock" && computerChoise == "paper") {
    console.log(computerWin);
} else if (userChoise == "rock" && computerChoise == "scissors") {
    console.log(userWin);
} else if (userChoise == "paper" && computerChoise == "rock") {
    console.log(userWin);
} else if (userChoise == "paper" && computerChoise == "scissors") {
    console.log(computerWin);
} else if (userChoise == "scissors" && computerChoise == "rock") {
    console.log(computerWin);
} else if (userChoise == "scissors" && computerChoise == "paper") {
    console.log(userWin);
} else console.log(noWin);