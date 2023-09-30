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
    if 
    (
    playerSelection=='rock' && computerSelection=='scissors'||
    playerSelection=='paper' && computerSelection=='rock'||
    playerSelection=='scissors' && computerSelection=='paper'
    ){
        alert('You win!')
    }
    else if 
    (
    playerSelection=='rock' && computerSelection=='paper'||
    playerSelection=='paper' && computerSelection=='scissors'||
    playerSelection=='scissors' && computerSelection=='rock'
    ){
        alert('You Lose!')
    }
    else if 
    (
    playerSelection=='rock' && computerSelection=='rock'||
    playerSelection=='paper' && computerSelection=='paper'||
    playerSelection=='scissors' && computerSelection=='scissors'
    ){
        alert('Tie!')
    }
}

