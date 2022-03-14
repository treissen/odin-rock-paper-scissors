// lay out pseudo code first in plain english

let playerScore = 0;
let compScore = 0;
let roundCount = 0;
let buttons = document.querySelectorAll('input');
let playerSelection =''
buttons.forEach(buttons => buttons.addEventListener('click', (e) => {
    playerSelection = e.target.value;
}))
console.log(playerSelection);


// if rounds < 5 run play round
if (roundCount < 5 && compScore < 3 && playerScore < 3){
    playRound();
}

// function winner() {
//     if(compScore === 3) {
//         alert('the computer won the match');
//     } else if(playerScore === 3) { 
//         alert('you won the match');
//     }   
// }
// winner();

function playRound() {
    function computerPlay() {
        compArray = ['rock', 'paper', 'scissors']
        computerSelection = compArray[Math.floor(Math.random() * compArray.length)]
        console.log('computer selected ' + computerSelection)
        return computerSelection;
    }
    computerPlay();

    buttons.forEach(buttons => buttons.addEventListener('click', (e) => {
        playerSelection = e.target.value;
    }))
    console.log(playerSelection);

    // function choice() {
    // let playerSelection = addEventListener.buttons('click', )
    // console.log('player selected ' + playerSelection);
    // return playerSelection;
    // }
    // choice();

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
    
    roundCount =+ 1;
}





