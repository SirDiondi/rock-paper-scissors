    //Created random int function to be used later in deciding computer choice
function getRandomInt(max) {
    // get a random float between  0 - 1, multiply it by our input, then set it to floor.
    return Math.floor(Math.random() * max);
}

    //Created function to decide computer choice
function getComputerChoice() {
    //store our rock paper scissors variables, plus the computers choice
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    const computerChoice = getRandomInt(3);
    // set our result from computerChoice to a specified text output based on the numerical input
    if (computerChoice === 0) {
        return rock;
    }
    else if (computerChoice === 1) {
        return  paper;
    }
    else if (computerChoice === 2) {
        return  scissors;
    }
}

console.log( getComputerChoice());