let playerInput = prompt('rock, paper, or scissors?');
let playerSelection = playerInput.toLowerCase();
console.log(playerSelection);
let computerSelection = '';
let roundCount = 0;
let compScore = 0;
let playerScore = 0;



function computerPlay() {
    compArray = ['rock', 'paper', 'scissors']
    computerSelection = compArray[Math.floor(Math.random() * compArray.length)]
    console.log('computer selected ' + computerSelection)
    return computerSelection;
}
computerPlay();

function oneRound() {
    function checkWinner() {
        if((computerSelection === 'scissors' && playerSelection === 'paper') 
            || (computerSelection === 'rock' && playerSelection === 'scissors') 
            || (computerSelection === 'paper' && playerSelection === 'rock')) {
                var result = 'you lose!';
                return compScore += 1;
        } else if((computerSelection === 'paper' && playerSelection === 'scissors') 
            || (computerSelection === 'scissors' && playerSelection === 'rock') 
            || (computerSelection === 'rock' && playerSelection === 'paper')) {
                var result = 'you win!';
                playerScore += 1;
        } else {
            var result = 'it is a tie!';
        }
        console.log(result);
        console.log('player score: ' + playerScore);
        console.log('computer score: ' + compScore);
        return result
    }
    checkWinner();
}
oneRound();