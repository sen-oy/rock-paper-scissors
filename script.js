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

// get user choice
function getHumanChoice () {
    let userChoice = prompt("Type 'rock', 'paper' or 'scissors': ", 'rock');
    return userChoice.toLowerCase();
}

function playGame () {
    const maxGames = 5;
    
    // set a pc score and a user score
    let humanScore = 0;
    let computerScore = 0;

    // start a round
    function playRound (humanChoice, computerChoice) {
        let winnerType;
        let winningMove;
        let losingMove;

        // human win conditions
        if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper')) {
            winnerType = 'Human';
            winningMove = humanChoice;
            losingMove = computerChoice;
        }

        // computer win conditions
        if ((computerChoice == 'rock' && humanChoice == 'scissors') || (computerChoice == 'paper' && humanChoice == 'rock') || (computerChoice == 'scissors' && humanChoice == 'paper')) {
            winner = computerChoice;
            winnerType = 'Computer';
            winningMove = computerChoice;
            losingMove = humanChoice;
        }

        // draw condition - experimental
        if (computerChoice == humanChoice) {
            playRound(humanChoice(), computerChoice());
        }

        // win text function 
        // should use parameters for winnerType, winningMove and losing move
        function generateWinText (winnerType, winningMove, losingMove) {
            return `${winningMove} beats ${losingMove} ${winnerType} wins this round.`;
        }

        let winText = generateWinText(winnerType, winningMove, losingMove);
        
        console.log(winText);
        return winnerType;
    }

    for (let i = 0; i < maxGames; i++) {
        let roundWinner = playRound(getHumanChoice(), getComputerChoice());
        
        // increment the score of the winner
        if (roundWinner == 'Human') {
            humanScore++;
        } else if (roundWinner == 'Computer') {
            computerScore++;
        }
    }

    if (humanScore < computerScore) {
        console.log('Congratulations! The human player wins this game!');
    } else {
        console.log('Too bad. The pc wins this game.')
    }

    console.log(`Final scores - human: ${humanScore} | pc: ${computerScore}`);
}

playGame()
