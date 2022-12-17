const gameOptions = ["rock", "paper", "scissors"];

function getChoise(gameOptions) {
    const choise = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return choise;
}

function play() {
    const userChoise = getChoise(gameOptions);
    console.log("User's choise: " + userChoise);

    const computerChoise = getChoise(gameOptions);
    console.log("Computer's choise: " + computerChoise);

    const noWin = "It's a tie!";
    const userWin = "User wins!";
    const computerWin = "Computer wins!";

    const computerWinCondition = userChoise == gameOptions[0] && computerChoise == gameOptions[1] ||
        userChoise == gameOptions[1] && computerChoise == gameOptions[2] ||
        userChoise == gameOptions[2] && computerChoise == gameOptions[0];

    const userWinCondition = userChoise == gameOptions[0] && computerChoise == gameOptions[2] ||
        userChoise == gameOptions[1] && computerChoise == gameOptions[0] ||
        userChoise == gameOptions[2] && computerChoise == gameOptions[1];

    if (computerWinCondition) {
        console.log(computerWin);
    } else if (userWinCondition) {
        console.log(userWin);
    } else console.log(noWin);
};

play();