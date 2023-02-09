// Constants representing the strings for each possible choice
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

// Constants representing the possible win states
const DRAW = 0;
const PLAYER_WIN = 1;
const COMPUTER_WIN = 2;

// Play through multiple rounds of rock-paper-scissors and declare the overall result
function game() {
    let playerScore = 0;
    let computerScore = 0;
    const MAX_ROUNDS = 5;
    let playerSelection = undefined
    let result = undefined;

    // Play through all of the rounds
    for (i = 0; i < MAX_ROUNDS; i++) {
        // Get player's choice
        playerSelection = prompt("Rock, Paper, or Scissors?: ");
        result = playOneRound(playerSelection, getComputerChoice())
        // Calculate result
        if (result === DRAW) {
            continue;
        }
        else if (result == PLAYER_WIN) {
            playerScore += 1;
        }
        else {
            computerScore += 1;
        }
    }

    // Compare results
    console.log(`Results: PlayerScore = ${playerScore}, ComputerScore = ${computerScore}`);
    if (playerScore === computerScore) {
        console.log("Draw!");
    }
    else if (playerScore > computerScore) {
        console.log("Player Wins!");
    }
    else {
        cconsole.log("Computer Wins!");
    }
}

// Randomly generated a random choice for the computer to play
function getComputerChoice() {
    // Constants associating the values of random with the string to return
    const ROCK_VALUE = 0;
    const PAPER_VALUE = 1;
    const SCISSORS_VALUE = 2;
    // The random number value for selecting which type to play
    let random = Math.floor(Math.random() * 3);

    // Return type to play based on the random value
    if (random == ROCK_VALUE) {
        return ROCK;
    }
    if (random == PAPER_VALUE) {
        return PAPER;
    }
    if (random == SCISSORS_VALUE) {
        return SCISSORS;
    }
}

// Play one round of rock-paper-scissors between the player and the computer
function playOneRound(playerSelection, computerSelection) {
    playerSelection = toInitialCase(playerSelection);

    // Comparing types chosen and declaring outcome
    // A draw
    if (playerSelection == computerSelection) {
        console.log("Draw!");
        return DRAW;
    }
    // Player wins
    if (playerSelection == ROCK && computerSelection == SCISSORS || playerSelection == PAPER && computerSelection == ROCK || 
    playerSelection == SCISSORS && computerSelection == PAPER ) {
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return PLAYER_WIN;
    }
    // Player loses
    else {
        console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        return COMPUTER_WIN;
    }
}

// Converts a string to initial case form
function toInitialCase(text) {
    let firstLetter = text[0].toUpperCase();
    let precedingText = text.substring(1).toLowerCase();
    return firstLetter.concat(precedingText);
}