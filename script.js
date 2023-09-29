let computerSelection;

function getComputerChoice(){
let randomChoice = Math.floor(Math.random()*3+1);
let Choice=(parseInt(randomChoice)==1) ? 'rock'
: (randomChoice==2) ? 'paper' 
: (randomChoice==3) ? 'scissors' 
:  'Error';

return Choice;
}
    
let playerSelection;

function playRound(playerSelection,computerSelection){
computerSelection=getComputerChoice();
playerSelection = prompt('Rock, paper, or scissors?','').toLowerCase();
    if (playerSelection=='rock' && computerSelection=='scissors'){
        alert('You win!')
    }
    else if (playerSelection=='rock' && computerSelection=='paper'){
        alert('You Lose!')
    }
    else if (playerSelection=='rock' && computerSelection=='rock'){
        alert('Tie!')
    }
    else if (playerSelection=='paper' && computerSelection=='scissors'){
        alert('You Lose!')
    }
    else if (playerSelection=='paper' && computerSelection=='rock'){
        alert('You Win!')
    }
    else if (playerSelection=='paper' && computerSelection=='paper'){
        alert('Tie!')
    }
    else if (playerSelection=='scissors' && computerSelection=='paper'){
        alert('You win!')
    }
    else if (playerSelection=='scissors' && computerSelection=='rock'){
        alert('You lose!')
    }
    else if (playerSelection=='scissors' && computerSelection=='scissors'){
        alert('Tie!')
    }
    
}
