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

let playerScore = 0;
let computerScore = 0;
let results = document.querySelector('#results');

function playRound(playerSelection, computerSelection, results) {
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        alert("tie");
        results.innerHTML = `Player Score: ${playerScore} <br> Computer Score: ${computerScore} <br> You tied! Both chose ${playerSelection.toLowerCase()}.`;
    } else if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')
    ) {
        alert("win");
        playerScore++;
        results.innerHTML = `Player Score: ${playerScore} <br> Computer Score: ${computerScore} <br> You win! ${playerSelection} beats ${computerSelection.toLowerCase()}.`;
    }
}

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
    playRound('Rock', getComputerChoice(), results);
});

paperBtn.addEventListener('click', () => {
    playRound('Paper', getComputerChoice(), results);
});

scissorsBtn.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice()), results;
});


