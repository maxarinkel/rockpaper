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

let playerSelection = prompt("Enter your choice: rock, paper, or scissors");

getHumanChoice(playerSelection);

function getHumanChoice() {
}


const computerSelection = getComputerChoice();

let humanScore = 0;
let computerScore = 0;


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

  

if (playerSelection === computerSelection) {
    return "It's a Tie!";
}

else if (playerSelection === "rock" && computerSelection === "scissors") {
    humanScore++;
    return "You win! Rock smashes scissors!";
}

else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose! Paper covers Rock!";
    
}

else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose! Scissors cut paper!";
    
}

else if (playerSelection === "paper" && computerSelection === "rock") {
    humanScore++;
    return "You win! Paper covers rock!";
    
}

else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose! Rock smashes scissors";
    
}

else if (playerSelection === "scissors" && computerSelection === "paper") {
    humanScore++;
    return "You win! Scissors cut paper!"
    
}
 


}

function playGame() {
    let playerSelection = prompt("Enter your choice: rock, paper, or scissors");
    const computerSelection = getComputerChoice();
    getComputerChoice();
    getHumanChoice(playerSelection);
alert( playRound(playerSelection, computerSelection) );
alert('You have ' + humanScore + ' points');
alert('The computer has ' + computerScore + ' points');
    
}

function scoreBoard() {
    if (humanScore > computerScore) {
        alert("You Win! Refresh the page to play again!");
    }

    else if (computerScore > humanScore) {
        alert("Sorry, You Lost! Refresh the page to try again!");
    }
} 

playGame();
playGame();
playGame();
playGame();
playGame();
scoreBoard();

