/* Assign starting points to global scope */
/* Select score container div in global scope */

let playerScore = 0;
let computerScore = 0;
const scoreDisplay = document.querySelector('#score-container');

/* Funtion to randomly generate a number between 1-3 and returns rock, paper or scissors
for computer input */

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) +1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
    return "scissors";
    } 
};

/* Function to play a round of the game by comparing parameters playerSeletion
and computerSelection. Points are incremented depending on who wins the round.*/

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a Tie!";
    } else if (playerSelection == "rock" && computerSelection == "scissors" || 
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
};

/* Function to keep and display score. This replaced the original function to
play until 5 wins. */

function keepScore() {
    scoreDisplay.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
    if (playerScore === 5) {
        alert ("FUCK YOU BUT YOU WIN");
    } else if (computerScore === 5) {
        alert ("FUCK YOU LOSER, GET FUCKED HAHAHAHA");
    }
};

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    scoreDisplay.textContent = 'Player: 0, Computer: 0';
};

/* 3 separate buttons to select player choice */

const rockButton = document.querySelector('#rock-btn');
rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound('rock', computerChoice);
    document.querySelector('#game-result').textContent = result;
    keepScore();
    
});

const paperButton = document.querySelector('#paper-btn');
paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound('paper', computerChoice);
    document.querySelector('#game-result').textContent = result;
    keepScore();
});

const scissorsButton = document.querySelector('#scissors-btn');
scissorsButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound('scissors', computerChoice);
    document.querySelector('#game-result').textContent = result;
    keepScore();
});

/* Create a button to reset the game */

const resetButton = document.querySelector('#reset-btn');
resetButton.addEventListener("click", resetGame);
