//  global variables

let compScore = 0
let userScore = 0
let roundCount = 0
let winner = ''
let userSelection
const choices = ['rock', 'paper', 'scissors']

const handleClick = (e) => {
    userSelection = e.target.value
    game()
    
}

for (var i = 0 ; i < choices.length; i++) {
   addEventListener('click' ,handleClick); 
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
//   console.log(result)
  return result
}

function gameWinner() {     //this will run after the game() loops 5 times and will log who won and final score
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

//  game() needs to loop through  playRound(userSelection, compSelection) 5 times
function game(){
    
    console.log('you chose: ' + userSelection);           
    compSelection = computerPlay();                       
    console.log('Computer selected ' + compSelection);    
    playRound(userSelection,compSelection);               
    console.log('result: ' + result)                      
    console.log('userScore: ' + userScore)                
    console.log('compScore: ' + compScore)                
    console.log('that was round ' + roundCount)           
    if(roundCount === 5){
        gameWinner();
        console.log('the winner of the game is......' + winner)
    }    
}

// for(let roundCount = 1; roundCount < 6; roundCount++){}