const gameTools = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randomNumberGen = Math.floor(Math.random() * gameTools.length);
    let computerChoice = gameTools[randomNumberGen];

    return computerChoice;
}

/**function getHumanChoice(){
    let userInput = prompt("Enter your choice: 'Rock', 'Scissors', 'Paper'").toLowerCase();
    return firstLetterUpperCase(userInput);
}

function firstLetterUpperCase(userInput){
    let upperCased = userInput[0].toUpperCase();
    let stringConcat = upperCased + userInput.slice(1);
    return stringConcat;
}**/

let computerScore = 0;
let humanScore = 0;


function playRound(computerChoice, humanChoice){
    const result = document.querySelector("#result");
    const userChoice = document.querySelector("#user-choice");
    const compChoice = document.querySelector("#computer-choice");
    const userScore = document.querySelector("#user-score");
    const compScore = document.querySelector("#computer-score");

    if (computerChoice === humanChoice){
        userChoice.innerText = `Your choice: ${humanChoice}`;
        compChoice.innerText = `Computer's choice: ${computerChoice}`;
        result.innerText = `Result: It is a draw, you both chose ${computerChoice}.`
    }
    else if (humanChoice === "Rock" && computerChoice === "Scissors"){
        userChoice.innerText = `Your choice: ${humanChoice}`;
        compChoice.innerText = `Computer's choice: ${computerChoice}`;
        result.innerText = `Result: You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        userScore.innerText = `Your score: ${humanScore}`;
    }
    else if (humanChoice === "Scissors" && computerChoice === "Paper"){
        userChoice.innerText = `Your choice: ${humanChoice}`;
        compChoice.innerText = `Computer's choice: ${computerChoice}`;
        result.innerText = `Result: You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        userScore.innerText = `Your score: ${humanScore}`;
    }
    else if (humanChoice === "Paper" && computerChoice === "Rock"){
        userChoice.innerText = `Your choice: ${humanChoice}`;
        compChoice.innerText = `Computer's choice: ${computerChoice}`;
        result.innerText = `Result: You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
        userScore.innerText = `Your score: ${humanScore}`;
    }
    else {
        userChoice.innerText = `Your choice: ${humanChoice}`;
        compChoice.innerText = `Computer's choice: ${computerChoice}`;
        result.innerText = `Result: You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
        compScore.innerText = `Computer's score: ${computerScore}`;

    }
}


function playGame(){
    const gameRound = 5;
    const chances = document.querySelector("#chances p");
    const gamebtn = document.querySelectorAll(".container button");
    const declareWinner = document.querySelector("#declareWinner");
    let displayDisable = document.querySelectorAll("#chances, .description, .container");
    let i = 1;

    for (const btn of gamebtn){
        btn.addEventListener('click', () => {
            let computerChoice = getComputerChoice();
            let humanChoice = btn.innerText;
            playRound(computerChoice, humanChoice);

            chances.innerText = `Chances left: ${gameRound - i}/${gameRound}`;

            if (i === gameRound){
                if (humanScore > computerScore){
                    declareWinner.innerText = "You win the Game! :)."
                    declareWinner.style.fontSize = "30px";
                    declareWinner.style.fontWeight = "bold";
                    declareWinner.style.textAlign = "center";
                }
                else {
                    declareWinner.innerText = "You lose the Game! :(."
                    declareWinner.style.fontSize = "30px";
                    declareWinner.style.fontWeight = "bold";
                    declareWinner.style.textAlign = "center";
                    declareWinner.style.color = "red";
                }

                for (let e of displayDisable)
                {
                    e.style.display = "none";
                }

                replay();
                
            }

            else { i++;}
        })
    }
}

function replay(){
    const replayBtn = document.querySelector('#play-again');
    replayBtn.style.display = "block";

    replayBtn.addEventListener('click', () => {
        location.reload();
    })
}

playGame();