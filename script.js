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
                return "You tied."
                break;
            case "Paper":
                return "You lose! Paper beats your rock.";
                break;
            case "Scissors":
                return "You win! Your rock beats scissors.";
                break;
        }
    }

    if (playerSelection === "paper") {
        switch (computerSelection) {
            case "Rock":
                return "You win! Your paper beats rock."
                break;
            case "Paper":
                return "You tied.";
                break;
            case "Scissors":
                return "You lose! Scissors beats your paper.";
                break;
        }
    }

    if (playerSelection === "scissors") {
        switch (computerSelection) {
            case "Rock":
                return "You lose! Rock beats your scissors."
                break;
            case "Paper":
                return "You win! Your scissors beats paper.";
                break;
            case "Scissors":
                return "You tied.";
                break;
        }
    }


}

const playerSelection = "scissors".toLowerCase();
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));