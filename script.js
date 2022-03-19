//  global variables

let compScore = 0
let userScore = 0
let roundCount = 0
let winner = ''
let userSelection
const choices = ['rock', 'paper', 'scissors']

const handleClick = (e) => {
    userSelection = e.target.value
    if(roundCount < 5) {
        game()
    }
    if(roundCount === 5){
        removeEventListener('click', handleClick, false);
        gameWinner();
        alert('winner: ' + winner)

    }
    
}

for (var i = 0 ; i < choices.length; i++) {
   addEventListener('click' ,handleClick, true); 
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
}
