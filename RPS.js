//select all elements
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissor');
const outcomeDiv = document.querySelector('.outcome');
const runningDiv = document.querySelector('.runScore');

const checkForWinner = (playerScore, computerScore) => {
    // compare first score to 5 and print out on a seperate headerline
    if (playerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('player-won')
        h2.innerText = `GG, you won! Final Score : Player: ${playerScore} to Computer :${computerScore}`;
        outcomeDiv.append(h2);
        
        //append h2 to outcomeDiv for finalScore. use backtick ` to implement inline element 
        

    }
    if(computerScore === 5){
        const h2 = document.createElement('h2');
        h2.classList.add('computer-won');
        h2.innerText = `GG, you lost! Final score : Computer : ${computerScore} to Player ${playerScore}`;
        outcomeDiv.append(h2);

    }
    
}

//create buttons and event listeners for click selection
rockButton.addEventListener('click',() =>{

    const computerSelection = getComputerChoice()
    const playerSelection = 'rock';
    playRound(playerSelection,computerSelection)
    checkForWinner(playerScore, computerScore);
} )

paperButton.addEventListener('click',() =>{

    const computerSelection = getComputerChoice()
    const playerSelection = 'paper';
    playRound(playerSelection,computerSelection)
    checkForWinner(playerScore, computerScore);
} )

scissorsButton.addEventListener('click',() =>{

    const computerSelection = getComputerChoice()
    const playerSelection = 'scissor';
    playRound(playerSelection,computerSelection)
    checkForWinner(playerScore, computerScore);
} )


//added another div to record running score 
const p1 = document.createElement('p1');
runningDiv.append(p1);
p1.style.color = " Red";
p1.style.backgroundColor = "Yellow";
p1.style.fontWeight = "bold";
p1.style.fontSize = "30px";




let playerScore = 0;
let computerScore = 0;
//Array of possible choices
let gameChoices = ['Rock','Paper','Scissor']

// user input and convert to lower case
//let playerSelection = prompt("User selection!");
//playerSelection = playerSelection.toLowerCase(); unecessary for program since selections are button based

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
        p1.innerText = `Current Score: Player : ${playerScore} Computer : ${computerScore}`;
        
        
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

        p1.innerText = `Current Score: Player : ${playerScore} Computer : ${computerScore}`;
     
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

        p1.innerText = `Current Score: Player : ${playerScore} Computer : ${computerScore}`;
        
    }
    


}


//getComputerChoice();
//console.log(playerSelection + " " + computerSelection);
//playRound(playerSelection,computerSelection);
//console.log ("Player Score : "+ playerScore + " " + "Computer Score : " + computerScore);