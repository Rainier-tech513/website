let scoree = JSON.parse(localStorage.getItem("scoree")) || {
    wins: 0,
    losses: 0 
}

function resetScoree() {
    scoree = {
        wins: 0,
        losses: 0 
    }

    localStorage.setItem("scoree", JSON.stringify(scoree));

    document.querySelector('.scoree').innerHTML = `Wins: ${scoree.wins}, Losses: ${scoree.losses}`;
}

function flipACoin(playerMovee) {
    const computerMoveee = getComputerMove();

    let resultt;

    if (playerMovee === 'Tail') {
        if (computerMoveee === 'Tail') {
            resultt = `Tail, you won!`;
            scoree.wins += 1;
        } else if (computerMoveee === 'Head') {
            resultt = `Head, you lose`;
            scoree.losses += 1;
        }
    } else if (playerMovee === 'Head') {
        if (computerMoveee === 'Head') {
            resultt = `Head, you won!`;
            scoree.wins += 1;
        } else if (computerMoveee === 'Tail') {
            resultt = `Tail, you lose!`;
            scoree.losses += 1;
        }
    }

    document.querySelector('.resulttt').innerHTML = resultt;

    document.querySelector('.scoree').innerHTML = `Wins: ${scoree.wins}, Losses: ${scoree.losses}`;

    localStorage.setItem("scoree", JSON.stringify(scoree));

}

function getComputerMove() {
    const randomNumberr = Math.random()

    let computerMovee;

    if (randomNumberr < 0.5) {
        computerMovee = 'Tail';
    } else if (randomNumberr > 0.5) {
        computerMovee = 'Head';
    }

    return computerMovee;
}