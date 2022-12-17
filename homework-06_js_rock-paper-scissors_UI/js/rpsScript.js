const game = () => {
    let userScore = 0;
    let computerScore = 0;

    const playMatch = () => {
        const options = document.querySelectorAll(".button-choice");
        const playerHand = document.querySelector(".user-hand");
        const computerHand = document.querySelector(".computer-hand");

        const gameOptions = ["rock", "paper", "scissors"];

        options.forEach((option) => {
            option.addEventListener('click', function () {
                const randomNumber = Math.floor(Math.random() * 3);
                const computerChoice = gameOptions[randomNumber];

                // winnerResults(this.textContent, computerChoice);
                
                playerHand.src = `./images/${this.textContent}.svg`;
                computerHand.src = `./images/${computerChoice}.svg`;
            });
        });
    };

    const winnerResults = (userChoice, computerChoice) => {
        const winner = document.querySelector('.winner');

        const computerWinCondition = userChoice == gameOptions[0] && computerChoice == gameOptions[1] ||
            userChoice == gameOptions[1] && computerChoice == gameOptions[2] ||
            userChoice == gameOptions[2] && computerChoice == gameOptions[0];

        const userWinCondition = userChoice == gameOptions[0] && computerChoice == gameOptions[2] ||
            userChoice == gameOptions[1] && computerChoice == gameOptions[0] ||
            userChoice == gameOptions[2] && computerChoice == gameOptions[1];

            if (computerWinCondition) {
                winner.textContent = "Computer Wins!";
            } else if (userWinCondition) {
                winner.textContent = "User Wins!";
            } else winner.textContent = "It's a tie!";
    };

    playMatch();

};

game();