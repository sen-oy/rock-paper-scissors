// compute pc choice
// generate a random number between 1 and 3
function getRandomInt (max) {
    return Math.floor(Math.random() * max) + 1;
}

function getComputerChoice () {
    let choiceNumber = getRandomInt(3);
    if (choiceNumber === 1) {
        return 'rock';
    } else if (choiceNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// get user choice > make event based
function getHumanChoice (event) {
    return event.value;
}

function playGame () {
    // init pc and user scores
    let computerScore = 0;
    let humanScore = 0;
    let drawCount = 0;

    // select dom nodes
    const rockButton = document.querySelector('#rock');
    const paperButton = document.querySelector('#paper');
    const scissorsButton = document.querySelector('#scissors');
    const gameButtons = document.querySelectorAll('.game-button');
    const display = document.querySelector('#display');
    const scoreDisplay = document.querySelector('#scores');
    const commentaryDisplay = document.querySelector('#commentary');


    // play round logic
    function playRound (event) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice(event);

        // return variable 
        let winType;

        // human win conditions
        if ((humanChoice == 'rock' && computerChoice == 'scissors') || 
            (humanChoice == 'paper' && computerChoice == 'rock') || 
            (humanChoice == 'scissors' && computerChoice == 'paper')) {
                winType = 'human';
            }

        // computer win conditions
        if ((computerChoice == 'rock' && humanChoice == 'scissors') ||   
            (computerChoice == 'paper' && humanChoice == 'rock') || (computerChoice == 'scissors' && humanChoice == 'paper')) {
                winType = 'computer';
            }

        // draw condition
        if (computerChoice === humanChoice) {
            winType = 'draw';
        }

        return winType;
    }
}