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

function getPlayerChoice() {
    let playerInput = prompt("rock, paper or scissors?");
    if (playerInput.toLowerCase() === "rock") {
        return "rock";
    } else if (playerInput.toLowerCase() === "paper") {
        return "paper";
    } else if (playerInput.toLowerCase() === "scissors") {
        return "scissors";
    } else { playerInput.toLowerCase() 
        return "invalid";
    }
    }

/* Declare a function to plays a single round of the game */
/* Determine which variables beat which ones */
/* Determine who is the winner. Either the computer or the player */
/* Increment 1 point for the winner */
let playerPoints = 0;
let computerPoints = 0;
function playRound(playerSelection, computerSelection) {
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

/* Function to play game */
/* 5 rounds (log function 5 times) */
/* Display score up to 5 */
/* Higher score wins game */
function playGame() {
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