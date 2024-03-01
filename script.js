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