


function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}


function getComputerChoice() {

    const randomNumber = Math.floor(Math.random() *3 );
    
    if (randomNumber === 0) {
    
    return "rock";
    
    } else if (randomNumber === 1) {
    
    return "paper";
    
    } else {
    
    return "scissors";
    
    }
    
    }

const playerSelection = prompt("Enter your choice: rock, paper, or scissors");
const computerSelection = getComputerChoice();

alert(playRound(playerSelection, computerSelection));


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
if (playerSelection === computerSelection) {
    return "It's a Tie!";
}

else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock smashes scissors!";
}

else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose! Paper covers Rock!";
}

else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors cut paper!";
}

else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win! Paper covers rock!";
}

else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock smashes scissors";
}

else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors cut paper!"
}

}