function getComputerChoice() {
    computerChoice = getRandomNumber(0, 2);

    if (computerChoice === 0) {
        return "Rock";
    } else if (computerChoice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }

}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        switch (computerSelection) {
            case "Rock":
                console.log("You tied.");
                return 0;
                break;
            case "Paper":
                console.log("You lose! Paper beats your rock.");
                return -1;
                break;
            case "Scissors":
                console.log("You win! Your rock beats scissors.");
                return 1;
                break;
        }
    }

    if (playerSelection === "paper") {
        switch (computerSelection) {
            case "Rock":
                console.log("You win! Your paper beats rock.");
                return 1;
                break;
            case "Paper":
                console.log("You tied.");
                return 0;
                break;
            case "Scissors":
                console.log("You lose! Scissors beats your paper.");
                return -1;
                break;
        }
    }

    if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "Rock":
                console.log("You lose! Rock beats your scissors.");
                return -1;
                break;
            case "Paper":
                console.log("You win! Your scissors beats paper.");
                return 1;
                break;
            case "Scissors":
                console.log("You tied.");
                return 0;
                break;
        }
    }
}

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice());
});

paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice());
});

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice());
});

let playerScore = 0;
let computerScore = 0;