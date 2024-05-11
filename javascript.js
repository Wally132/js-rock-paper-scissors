/* 
1. Make a fuction for computer choice to generate random output of rock, paper, or scissors.
2. Make user input input
3. Compare the input and run the fuction with if...else
4. Return declaration with string
*/

/*
1. Declare a fuction for computer choice to generate random output of rock, paper, or scissors */
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) +1;
    if (randomNumber === 1) {
        return "rock";
    } else if (randomNumber === 2) {
        return "paper";
    } else {
    return "scissors";
    } 
    }



/* Declare a function to plays a single round of the game */
/* Determine which variables beat which ones */
/* Determine who is the winner. Either the computer or the player */
/* Increment 1 point for the winner */

function playRound(playerSelection, computerSelection) {
    let playerPoints = 0;
    let computerPoints = 0;
    if (playerSelection == computerSelection) {
        return "It's a Tie!";
    } if (playerSelection == "invalid") {
        return "Invalid response, permabanned";
    } else if (playerSelection == "rock" && computerSelection == "scissors" || 
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper") {
        playerPoints++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else 
        computerPoints++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
}

const rockButton = document.querySelector('#rock-btn');
const displayResult = document.querySelector('#container');
rockButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound('rock', computerChoice);
    console.log(result);
    keepScore();
    
});

const paperButton = document.querySelector('#paper-btn');
paperButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound('paper', computerChoice);
    console.log(result);
    keepScore();
});

const scissorsButton = document.querySelector('#scissors-btn');
scissorsButton.addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    const result = playRound('scissors', computerChoice);
    console.log(result);
    keepScore();
});

const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

/* Function to play game */
/* 5 rounds (log function 5 times) */
/* Display score up to 5 */
/* Higher score wins game */
/*function playGame() {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(`Player Points: ${playerPoints} Computer Points: ${computerPoints}`);
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(`Player Points: ${playerPoints} Computer Points: ${computerPoints}`);
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(`Player Points: ${playerPoints} Computer Points: ${computerPoints}`);
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(`Player Points: ${playerPoints} Computer Points: ${computerPoints}`);
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
    console.log(`Player Points: ${playerPoints} Computer Points: ${computerPoints}`);
    if (playerPoints > computerPoints) {
        console.log("You Win The Game!");
    } else {
        console.log("The House Always Wins");
    }
}

playGame();
*/