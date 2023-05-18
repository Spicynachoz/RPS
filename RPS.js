//select all elements
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');


rockButton.addEventListener('click',() =>{

    const computerSelection = getComputerChoice()
    const playerSelection = 'rock';
    playRound(playerSelection,computerSelection)
} )




let playerScore = 0;
let computerScore = 0;
//Array of possible choices
let gameChoices = ['Rock','Paper','Scissor']

// user input and convert to lower case
let playerSelection = prompt("User selection!");
playerSelection = playerSelection.toLowerCase();

const computerSelection = getComputerChoice();

//
function getComputerChoice(){

return(gameChoices[(Math.random() * gameChoices.length) | 0].toLowerCase());

}


function playRound(playerSelection,computerSelection){
    if(playerSelection == "rock"){
        if(computerSelection == "rock"){
            console.log("its a tie!") ;
        }
        else if ( computerSelection == "paper"){
            console.log("you lost! paper beats rock");
            computerScore = computerScore+1;
        }
        else if (computerSelection == "scissor"){
            console.log("you won! rock beats scissor");
            playerScore = playerScore+1;
        }


    }
    else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            console.log("you win! Paper beats rock") ;
            playerScore = playerScore+1;
        }
        else if ( computerSelection == "paper"){
            console.log("It's a Tie");
        }
        else if (computerSelection == "scissor"){
            console.log("You lost. Scissor beats paper");
            computerScore = computerScore+1;
        }


    }
    
    else if(playerSelection == "scissor"){
        if(computerSelection == "rock"){
            console.log("you lose! rock beats scissor") ;
            computerScore = computerScore+1;
        }
        else if ( computerSelection == "paper"){
            console.log("you win! Scissor beats paper");
            playerScore = playerScore +1 ;
        }
        else if (computerSelection == "scissor"){

            console.log("its a tie!");
        }


    }
    


}


//getComputerChoice();
//console.log(playerSelection + " " + computerSelection);
//playRound(playerSelection,computerSelection);
//console.log ("Player Score : "+ playerScore + " " + "Computer Score : " + computerScore);