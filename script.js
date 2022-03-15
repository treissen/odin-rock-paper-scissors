//  global variables
// compSelection = computerPlay();     // call computer play function set to Computer Play
// userSelelction = userInput();        // call user input function set to userSelection
let compScore = 0
let userScore = 0
let roundCount = 0
let winner = ''
// let scoreBoard = 'user score: ' + userScore + ' & computer score: ' + compScore
// computer choice

function computerPlay() {
    let compArray = ['rock', 'paper', 'scissors'];
    compSelection = compArray[Math.floor(Math.random() * compArray.length)];
    return compSelection
}

// user input

function userInput() {
    userPrompt = prompt('rock, paper, or scissors?');
    userSelection = userPrompt.toLowerCase();
    return userSelection
}

// play one round

function playRound(userSelection, compSelection) {
      
    // if else statements checking who wins

    if(userSelection === compSelection) {
        result = 'this round is a tie'
    } 
    if(
        (userSelection === "rock" && compSelection === "scissors") || 
        (userSelection === "paper" && compSelection === "rock") ||
        (userSelection === "scissors" && compSelection === "paper")
    ) {
        result =  'User wins this round'
        ++userScore
    }
    if(
        (userSelection === "scissors" && compSelection === "rock") || 
        (userSelection === "rock" && compSelection === "paper") ||
        (userSelection === "paper" && compSelection === "scissors")
    ) {
        result =  'computer wins this round';
        ++compScore
    }
    return result 
    }
// playRound(userSelection, compSelection);
// console.log(result);

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
    for(let roundCount = 1; roundCount < 6; roundCount++) {         // start roundcount at 1 instead of zero so it logs what round just played
        userSelelction = userInput();        // call user input function set to userSelection
        console.log('you chose: ' + userSelection); // log user selection
        compSelection = computerPlay();     // call computer play function set to Computer Play
        console.log('Computer selected ' + compSelection); // log computer selection
        playRound(userSelection,compSelection);
        console.log('result: ' + result) 
        console.log('userScore: ' + userScore) 
        console.log('compScore: ' + compScore)
        console.log('that was round ' + roundCount)
        
        // console.log(scoreBoard)
    }

    // after loops through 5 times runs function to log who won the match
    gameWinner();
    console.log('the winner of the game is......' + winner)
}
game();
