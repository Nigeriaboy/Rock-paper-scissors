const gameTools = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randomNumberGen = Math.floor(Math.random() * gameTools.length);
    let computerChoice = gameTools[randomNumberGen];

    return computerChoice;
}

console.log(getComputerChoice());