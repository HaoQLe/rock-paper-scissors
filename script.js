function getComputerChoice() {
    computerChoice = getRandomNumber(0, 2);

    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }

}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let playerScore = 0;
let computerScore = 0;
let results = document.querySelector('#results');

function playRound(playerSelection, computerSelection, results) {
    console.log("palye");
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        alert("tie");
        results.textContent = `Player Score: ${playerScore} \n Computer Score: ${computerScore}`;
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
    }
}

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
    playRound('rock', getComputerChoice(), results);
});

paperBtn.addEventListener('click', () => {
    playRound('paper', getComputerChoice(), results);
});

scissorsBtn.addEventListener('click', () => {
    playRound('scissors', getComputerChoice()), results;
});


