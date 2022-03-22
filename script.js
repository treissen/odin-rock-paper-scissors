let compScore = 0
let userScore = 0
let roundCount = 0
let winner = ''
let userSelection
const choices = ['rock', 'paper', 'scissors']


//creating the divs

const gameInfoDisp = document.querySelector('#gameInfo'); //main container
const compScoreDiv = document.createElement('div');
const userScoreDiv =document.createElement('div');
const winnerDisp = document.createElement('h1');
const roundCountDiv = document.createElement('div');
const userSelectionDiv = document.createElement('div');
const compSelectionDiv = document.createElement('div');
const roundResultDiv = document.createElement('div');


//appending to html

gameInfoDisp.appendChild(compScoreDiv);
gameInfoDisp.appendChild(userScoreDiv);
gameInfoDisp.appendChild(roundCountDiv);
gameInfoDisp.appendChild(userSelectionDiv);
gameInfoDisp.appendChild(compSelectionDiv);
gameInfoDisp.appendChild(compScoreDiv);
gameInfoDisp.appendChild(roundResultDiv);

const handleClick = (e) => {
    userSelection = e.target.value;
    if(roundCount < 5) {
        game()
    }
    if(roundCount >= 5){
        removeEventListener('click', handleClick, false); //remove eventlistener by setting to false if roundcount is 5 or higher
        gameWinner();
        alert('winner: ' + winner + '!  refresh page to play again.')
    }
    
}

for (var i = 0 ; i < choices.length; i++) {
   addEventListener('click' ,handleClick, true); //looping through choices array setting eventlistener to true
}


function computerPlay() {
    let compArray = ['rock', 'paper', 'scissors'];
    compSelection = compArray[Math.floor(Math.random() * compArray.length)];
    return compSelection
}

function playRound(userSelection, compSelection) {
    switch (userSelection + compSelection) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            result =  'User wins this round'
            ++userScore
            ++roundCount
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            result =  'computer wins this round';
            ++compScore
            ++roundCount
            break
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            result = 'this round is a tie'
            ++roundCount
            break
  }
  return result
}

function gameWinner() {     
    if(compScore > userScore) {
        winner = 'computer';
    }
    if(compScore < userScore) {
        winner = 'user';
    }
    if(compScore === userScore) {
        winner = 'tie';
    }
    return winner;
}

function game(){
    console.log('you chose: ' + userSelection);           
    compSelection = computerPlay();                       
    console.log('Computer selected ' + compSelection);    
    playRound(userSelection,compSelection);               
    console.log('result: ' + result)                      
    console.log('userScore: ' + userScore)                
    console.log('compScore: ' + compScore)                
    console.log('that was round ' + roundCount)  
    // text to DOM
    compScoreDiv.textContent = 'Computer Score: ' + compScore
    userScoreDiv.textContent = 'User Score: ' + userScore
    userSelectionDiv.textContent = 'User Selection: ' + userSelection
    compSelectionDiv.textContent = 'Computer Selection: ' + compSelection
    roundResultDiv.textContent = 'Round Result: ' + result
    roundCountDiv.textContent = 'Round Count: ' + roundCount



}
