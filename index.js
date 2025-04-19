const gameTools = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randomNumberGen = Math.floor(Math.random() * gameTools.length);
    let computerChoice = gameTools[randomNumberGen];

    return computerChoice;
}

function getHumanChoice(){
    let userInput = prompt("Enter your choice: 'Rock', 'Scissors', 'Paper'").toLowerCase();
    return firstLetterUpperCase(userInput);
}

function firstLetterUpperCase(userInput){
    let upperCased = userInput[0].toUpperCase();
    let stringConcat = upperCased + userInput.slice(1);
    return stringConcat;
}

let computerScore = 0;
let humanScore = 0;



function playRound(computerChoice, humanChoice){
    if (computerChoice === humanChoice){
        console.log(`It is a draw, you both chose ${computerChoice}.`);
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock"){
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    }
    else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        computerScore++;
        console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
    }
}

function playGame(){
    const gameRound = 5;
    for (let i = 1; i <= gameRound; i++){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(computerChoice, humanChoice);
    }

    if (humanScore > computerScore){
        console.log("You won the Game! :).")
    }
    else {
        console.log("You lose the Game! :(.")
    }
}

playGame();