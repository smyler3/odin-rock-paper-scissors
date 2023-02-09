function getComputerChoice() {
    // Constants associating the values of random with the string to return
    const ROCK_VALUE = 0;
    const PAPER_VALUE = 1;
    const SCISSORS_VALUE = 2;
    // Constants containing the strings to return
    const ROCK = "Rock";
    const PAPER = "Paper";
    const SCISSORS = "Scissors";
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

function playOneRound(playerSelection, computerSelection) {

}

// Converts a string to initial case form
function toInitialCase(text) {
    let firstLetter = text[0].toUpperCase();
    let precedingText = text.substring(1).toLowerCase();
    return firstLetter.concat(precedingText);
}