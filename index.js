

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
    let computerChoice = getRandomInt(3);
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

    //function to simply get in input, convert it to lowercase, then output it.
function getPlayerChoice(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

    // this function compares two inputs, player selection and the computers selection, it checks if they are
    // equal, or if the player or the computer wins.
function playRound(playerSelection, computerSelection) {
    // check if the player has lost by comparing all possibilities options.
    // then return result.
    if ((playerSelection === "rock" && computerSelection === "paper")||(playerSelection === "paper" && computerSelection === "scissors")||(playerSelection === "scissors" && computerSelection === "rock")) {
        return `You chose ${playerSelection}! I chose ${computerSelection}! Sorry, you lose!`;
    }
    // check if the player has lost by comparing all possibilities options.
    // then return result.
    else if ((computerSelection === "rock" && playerSelection === "paper")||(computerSelection === "paper" && playerSelection === "scissors")||(computerSelection === "scissors" && playerSelection === "rock")) {
        return `You chose ${playerSelection}! I chose ${computerSelection}! Congratulations, you won!`;
    }
    // if your choice is the same as the computers, return that we tied.
    else if (playerSelection === computerSelection) {
        return `You chose ${playerSelection}! I chose ${computerSelection}! hey, we tied!`;
    }
    // include an option for handing errors relating to the player inputting something that isn't
    // "rock", "paper", or "scissors".
    else {
        return "sorry, incorrect input. You must input rock, paper, or scissors.";
    }
}

console.log(playRound(getPlayerChoice(prompt("Please choose an option, rock, paper, or scissors: ")), getComputerChoice()));
