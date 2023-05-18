//select all elements
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissor');
const outcomeDiv = document.querySelector('.outcome')

rockButton.addEventListener('click',() =>{

    const computerSelection = getComputerChoice()
    const playerSelection = 'rock';
    playRound(playerSelection,computerSelection)
} )

paperButton.addEventListener('click',() =>{

    const computerSelection = getComputerChoice()
    const playerSelection = 'paper';
    playRound(playerSelection,computerSelection)
} )

scissorsButton.addEventListener('click',() =>{

    const computerSelection = getComputerChoice()
    const playerSelection = 'scissor';
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
        const p = document.createElement('p');
        if(computerSelection == "rock"){
            const p = document.createElement('p');
            p.innerText = "it's a tie!";
            outcomeDiv.appendChild(p);
            
            
        }
        else if ( computerSelection == "paper"){
            const p = document.createElement('p');
            p.innerText = "you lost, paper beats rock";
            outcomeDiv.appendChild(p);
            computerScore = computerScore+1;
        }
        else if (computerSelection == "scissor"){
            const p = document.createElement('p');
            p.innerText = "you won, rock beats scissors!";
            outcomeDiv.appendChild(p);
            playerScore = playerScore+1;
        }


    }
    else if(playerSelection == "paper"){
        if(computerSelection == "rock"){
            const p = document.createElement('p');
            p.innerText = " you win! Paper beats rock";
            outcomeDiv.appendChild(p);
            playerScore = playerScore+1;
        }
        else if ( computerSelection == "paper"){
            const p = document.createElement('p');
            p.innerText = "It's a Tie";
            outcomeDiv.appendChild(p);
        }
        else if (computerSelection == "scissor"){
            const p = document.createElement('p');
            p.innerText = "You lost. Scissor beats paper";
            outcomeDiv.appendChild(p);
            computerScore = computerScore+1;
        }


    }
    
    else if(playerSelection == "scissor"){
        if(computerSelection == "rock"){
            const p = document.createElement('p');
            p.innerText = "you lose! rock beats scissor";
            outcomeDiv.appendChild(p);
            computerScore = computerScore+1;
        }
        else if ( computerSelection == "paper"){
            const p = document.createElement('p');
            p.innerText = "you win! Scissor beats paper";
            outcomeDiv.appendChild(p);
            playerScore = playerScore +1 ;
        }
        else if (computerSelection == "scissor"){
            const p = document.createElement('p');
            p.innerText = "its a tie!";
            outcomeDiv.appendChild(p);
        }


    }
    


}


//getComputerChoice();
//console.log(playerSelection + " " + computerSelection);
//playRound(playerSelection,computerSelection);
//console.log ("Player Score : "+ playerScore + " " + "Computer Score : " + computerScore);