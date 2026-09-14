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
    return event.target.value;
}

function playGame () {
    // init pc and user scores
    let computerScore = 0;
    let humanScore = 0;
    let drawCount = 0;

    // select dom nodes
    const gameButtons = document.querySelectorAll('.game-button');
    const display = document.querySelector('#display');
    const scoreDisplay = document.querySelector('#scores');
    const commentaryDisplay = document.querySelector('#commentary');

    // functions to update display nodes
    function updateScoreDisplay (humanScore, computerScore, drawCount) {
        scoreDisplay.textContent = `Human Score: ${humanScore} | Computer Score: ${computerScore} | Draw Count: ${drawCount}`;
    }

    function updateCommentaryDisplay (commentaryText) {
        commentaryDisplay.textContent = commentaryText;
    }

    gameButtons.forEach((button) => {
        button.addEventListener('click', playRound);
        })

    // play round logic
    function playRound (event) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice(event);
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
        
        // modify commentary
        if (winType === 'human') {
            humanScore++;
            updateCommentaryDisplay(`You chose: ${humanChoice} and computer chose: ${computerChoice}. You win this round.`);
        } else if (winType === 'computer') {
            updateCommentaryDisplay(`You chose: ${humanChoice} and computer chose: ${computerChoice}. The computer wins this round.`);
            computerScore++;
        } else if (winType === 'draw') {
            updateCommentaryDisplay(`You chose: ${humanChoice} and computer chose: ${computerChoice}. It's a draw this time.`);
            drawCount++;
        }

        // modify scores
        updateScoreDisplay(humanScore, computerScore, drawCount);

        // end conditions
        if (humanScore === 5 || computerScore === 5) {
            endGame();
        }
    }
    
    function endGame () {
    // final commentary and scores
        updateScoreDisplay(humanScore, computerScore, drawCount);
        if (computerScore > humanScore) {
            updateCommentaryDisplay("Sorry. Computer wins this game. Here are the scores: ");
        } else {
            updateCommentaryDisplay("Congratulations. You win the game. The scores are above. ");
        }
    }
}

playGame();