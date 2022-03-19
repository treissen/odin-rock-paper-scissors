//  global variables

let compScore = 0
let userScore = 0
let roundCount = 0
let winner = ''
let userSelection

const choices = ['rock', 'paper', 'scissors']

const handleClick = (e) => {
    userSelection = e.target.value
    // console.log(userSelection)
    computerPlay()
    // console.log(compSelection)
    playRound(userSelection, compSelection);
    
}

for (var i = 0 ; i < choices.length; i++) {
   addEventListener('click' ,handleClick); 
 }

// computer choice

function computerPlay() {
    let compArray = ['rock', 'paper', 'scissors'];
    compSelection = compArray[Math.floor(Math.random() * compArray.length)];
    return compSelection
}

// user input

// function userInput() {
//     userPrompt = prompt('rock, paper, or scissors?');
//     userSelection = userPrompt.toLowerCase();
//     return userSelection
// }
// change this to buttons



function playRound(userSelection, compSelection) {
      
    switch (userSelection + compSelection) {
        case 'scissorspaper':
        case 'rockscissors':
        case 'paperrock':
            result =  'User wins this round'
            ++userScore
            break
        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            result =  'computer wins this round';
            ++compScore
            break
        case 'scissorsscissors':
        case 'rockrock':
        case 'paperpaper':
            result = 'this round is a tie'
            break
  }
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
    for(let roundCount = 1; roundCount < 6; roundCount++) {   // start roundcount at 1 instead of zero so it logs what round just played
        userSelelction = userInput();                         // call user input function set to userSelection
        console.log('you chose: ' + userSelection);           // log user selection
        compSelection = computerPlay();                       // call computer play function set to Computer Play
        console.log('Computer selected ' + compSelection);    // log computer selection
        playRound(userSelection,compSelection);               // run playround function
        console.log('result: ' + result)                      //log result of round
        console.log('userScore: ' + userScore)                // log user score
        console.log('compScore: ' + compScore)                // log compscore
        console.log('that was round ' + roundCount)           // log what round was just played
    }

    // after loops through 5 times runs function to log who won the match
    gameWinner()
    console.log('the winner of the game is......' + winner) 
}
// calling game() on click event


// test on github desktop