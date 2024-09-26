function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    turns = 10;
    previousGuesses = [];
    document.getElementById('feedback').textContent = '';
    document.getElementById('previousGuesses').textContent = '';
    document.getElementById('turnsLeft').textContent = turns;
    document.getElementById('restartButton').style.display = 'none';
    document.getElementById('guess').value = '';
    document.getElementById('guess').focus();
}

function makeGuess() {
    const guess = Number(document.getElementById('guess').value);
    if (!guess || guess < 1 || guess > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    
    previousGuesses.push(guess);
    turns--;

    if (guess === randomNumber) {
        document.getElementById('feedback').textContent = `Win!`;
        document.getElementById('restartButton').style.display = 'block';
    } else if (turns === 0) {
        document.getElementById('feedback').textContent = `Fail! The number was ${randomNumber}.`;
        document.getElementById('restartButton').style.display = 'block';
    } else {
        let hint = guess < randomNumber ? "Too low" : "Too high";
        document.getElementById('feedback').textContent = hint;
        document.getElementById('turnsLeft').textContent = turns;
    }

    document.getElementById('previousGuesses').textContent = previousGuesses.join(', ');
    document.getElementById('guess').value = '';
    document.getElementById('guess').focus();
}

window.onload = startGame;
