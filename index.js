const content = document.getElementById("content");
const textLog = document.getElementById("textLog");

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
    const winCondition = `You chose ${playerSelection}! I chose ${computerSelection}! you won this round!`;
    const loseCondition = `You chose ${playerSelection}! I chose ${computerSelection}! you lost this round!`;
    const tieCondition = `You chose ${playerSelection}! I chose ${computerSelection}! hey, we tied!`;

    // check if the player has lost by comparing all possibilities options.
    // then return result.
    if ((playerSelection === "rock" && computerSelection === "paper")||(playerSelection === "paper" && computerSelection === "scissors")||(playerSelection === "scissors" && computerSelection === "rock")) {
        textLog.textContent = loseCondition;
        return "lose";
    }
    // check if the player has lost by comparing all possibilities options.
    // then return result.
    else if ((computerSelection === "rock" && playerSelection === "paper")||(computerSelection === "paper" && playerSelection === "scissors")||(computerSelection === "scissors" && playerSelection === "rock")) {
        textLog.textContent = winCondition;
        return "win";
    }
    // if your choice is the same as the computers, return that we tied.
    else if (playerSelection === computerSelection) {
        textLog.textContent = tieCondition;
        return "tie";
    }
    // include an option for handing errors relating to the player inputting something that isn't
    // "rock", "paper", or "scissors".
    else {
        playRound(getPlayerChoice(textLog.textContent = "sorry, incorrect input. You must input rock, paper, or scissors: "), computerSelection);
    }
}

const button1 = document.createElement("button");
button1.textContent = "rock";

const button2 = document.createElement("button");
button2.textContent = "paper";

const button3 = document.createElement("button");
button3.textContent = "scissors";

content.appendChild(button1);
content.appendChild(button2);
content.appendChild(button3);

const playerNumber = document.createElement("span");
playerNumber.textContent = "Player:";
content.appendChild(playerNumber);
const playerTracker = document.createElement("span");
content.appendChild(playerTracker);
const computerNumber = document.createElement("span");
computerNumber.textContent = "Computer:";
content.appendChild(computerNumber);
const computerTracker = document.createElement("span");
content.appendChild(computerTracker);

function buttonPlayGame() {
    let playerWins = 0;
    let computerWins = 0;
    let currentRound = undefined;
    
    button1.addEventListener("click", () => {
        currentRound = playRound(getPlayerChoice("rock"), getComputerChoice())
        
        if (currentRound === "win") {
            playerWins += 1;
            playerTracker.textContent = playerWins;
            if (playerWins >= 5) {
                textLog.textContent = "Congratulations! you won!";
                playerWins = 0;
                computerWins = 0;
                currentRound = undefined;
                return;
            }
        }  
        else if (currentRound === "lose") {
            computerWins += 1;
            computerTracker.textContent = computerWins;
            if (computerWins >= 5) {
                textLog.textContent = "Sorry! you lost.";
                playerWins = 0;
                computerWins = 0;
                currentRound = undefined;
                return;
            }
        }
        else {
            playerWins += 0;
            playerTracker.textContent = playerWins;
            computerWins += 0;
            computerTracker.textContent = computerWins;
        }
    })
    button2.addEventListener("click", () => {
        currentRound = playRound(getPlayerChoice("paper"), getComputerChoice())
        if (currentRound === "win") {
            playerWins += 1;
            playerTracker.textContent = playerWins;
            if (playerWins >= 5) {
                textLog.textContent = "Congratulations! you won!";
                playerWins = 0;
                computerWins = 0;
                currentRound = undefined;
                return;
            }
        }  
        else if (currentRound === "lose") {
            computerWins += 1;
            computerTracker.textContent = computerWins;
            if (computerWins >= 5) {
                textLog.textContent = "Sorry! you lost.";
                playerWins = 0;
                computerWins = 0;
                currentRound = undefined;
                return;
            }
        }
        else {
            playerWins += 0;
            playerTracker.textContent = playerWins;
            computerWins += 0;
            computerTracker.textContent = computerWins;
        }
    })
    button3.addEventListener("click", () => {
        currentRound = playRound(getPlayerChoice("scissors"), getComputerChoice())
        if (currentRound === "win") {
            playerWins += 1;
            playerTracker.textContent = playerWins;
            if (playerWins >= 5) {
                textLog.textContent = "Congratulations! you won!";
                playerWins = 0;
                computerWins = 0;
                currentRound = undefined;
                return;
            }
        }  
        else if (currentRound === "lose") {
            computerWins += 1;
            computerTracker.textContent = computerWins;
            if (computerWins >= 5) {
                textLog.textContent = "Sorry! you lost.";
                playerWins = 0;
                computerWins = 0;
                currentRound = undefined;
                return;
            }
        }
        else {
            playerWins += 0;
            playerTracker.textContent = playerWins;
            computerWins += 0;
            computerTracker.textContent = computerWins;
        }
    })
    
    
}

buttonPlayGame();

/*function playGame() {
    // create some variables to store our wins and loses
    let gameWins = 0;
    let gameLoses = 0
    // run 5 rounds of playRound and each win or lose store that result in the apropriate variable.
    for (let i = 5; i > 0; i--) {
        const playResult = playRound(getPlayerChoice(prompt(`We have ${i} rounds left!\n Please choose an option, rock, paper, or scissors: `)), getComputerChoice());
        if (playResult === "lose") {
            gameLoses+= 1;
        }
        else if (playResult === "win") {
            gameWins+= 1;
        }
        // I think we could just not have an option for ties, but I included this else here for if
        // a tie did happen, since a tie does not have a winner it should just do nothing.
        else {
        }
    }
    // once we have our results from the 5 games, we must report the results to the player.
    // if game loses are greater than game wins, report we lost.
    if (gameLoses > gameWins) {
        console.log(`that's ${gameLoses} for me, and ${gameWins} for you, sorry, I win the game!`);
    }
    // if game wins are greater than game loses, report we won.
    else if (gameLoses < gameWins) {
        console.log(`that's ${gameLoses} for me, and ${gameWins} for you, damn! congratulations, you win the game!`);
    }
    // if the results are equal, report we tied.
    else if (gameLoses === gameWins) {
        console.log(`that's ${gameLoses} for me, and ${gameWins} for you, looks like we tied the game!`);
    }

}
playGame();*/
