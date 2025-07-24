let scoreCount = JSON.parse(localStorage.getItem("score")) || {
        wins: 0,
        losses: 0,
        ties: 0
    }

function resetScore() {
    scoreCount = {
    wins: 0,
    losses: 0,
    ties: 0
    }

    localStorage.setItem("score", JSON.stringify(scoreCount))

    document.querySelector('.score').innerHTML = `Wins: ${scoreCount.wins}, Losses: ${scoreCount.losses}, Ties: ${scoreCount.ties}`;
};

let cross = document.querySelector('.cancel-game-cross');

function playGame(playermove) {

    const computerMove = getcomputerMove();

    let result;

    if (computerMove === 'Rock') {
        if (playermove === 'Scissors') {
            result = `Computer had ${computerMove}. You had ${playermove}. You lose!`;
            scoreCount.losses += 1;
        } else if(playermove === 'Rock') {
            result = `Computer had ${computerMove}. You had ${playermove}. You had Rock. Tie!`;
            scoreCount.ties += 1;
        } else if (playermove === 'Paper') {
            result = `Computer had ${computerMove}. You had ${playermove}. You win!`;
            scoreCount.wins += 1;
        }
    } else if (computerMove === 'Scissors') {
        if (playermove === 'Rock') {
            result = `Computer had ${computerMove}. You had ${playermove}. You had Rock. You win!`;
            scoreCount.wins += 1;
        } else if (playermove === 'Paper') {
            result = `Computer had ${computerMove}. You had ${playermove}. You lose!`;
            scoreCount.losses += 1;
        } else if (playermove === 'Scissors') {
            result = `Computer had ${computerMove}. You had ${playermove}. Tie!`;
            scoreCount.ties += 1;
        }
    } else if (computerMove === 'Paper') {
        if (playermove === 'Rock') {
            result = `Computer had ${computerMove}. You had ${playermove}. You had Rock. You lose!`;
            scoreCount.losses += 1;
        } else if (playermove === 'Scissors') {
            result = `Computer had ${computerMove}. You had ${playermove}. You win!`;
            scoreCount.wins += 1;
        } else if (playermove === 'Paper') {
            result = `Computer had ${computerMove}. You had ${playermove}. You had Paper. Tie!`;
            scoreCount.ties += 1;
        }
    }

    document.querySelector('.result').innerHTML = result

    document.querySelector('.score').innerHTML = `Wins: ${scoreCount.wins}, Losses: ${scoreCount.losses}, Ties: ${scoreCount.ties}`;

    cross.classList.add('show-cancel-game-cross');

    localStorage.setItem("score", JSON.stringify(scoreCount))

}


function getcomputerMove() {

    const number = Math.random();

    let computerMove;

    if (number < 0.33) {
        computerMove = 'Rock';
    } else if (number >= 0.33 && number < 0.66) {
        computerMove = 'Paper';
    } else if (number >= 0.66) {
        computerMove = 'Scissors'
    }

    return computerMove;

}


cross.addEventListener('click', () => {
    let resultp = document.querySelector('.result');
    let scorep = document.querySelector('.score');

    resultp.innerHTML = "";
    scorep.innerHTML = ""

    cross.classList.remove('show-cancel-game-cross');
});