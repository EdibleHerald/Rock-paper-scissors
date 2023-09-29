function getComputerChoice(){
let randomChoice = Math.floor(Math.random()*3+1);
let Choice=(parseInt(randomChoice)==1) ? 'Rock'
: (randomChoice==2) ? 'Paper' 
: (randomChoice==3) ? 'Scissors' 
:  'Error';
return Choice;
}
    
let computerSelection = getComputerChoice();
let playerSelection = prompt('Rock, paper, or scissors?','')