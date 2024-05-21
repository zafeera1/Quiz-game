const urlParams = new URLSearchParams(window.location.search);
const score = urlParams.get('score');
const scoreDisplay = document.getElementById('score-display');
scoreDisplay.textContent = 'Your Score: ' + score;

const initialsForm = document.getElementById('initials-form');
const scoreList = document.getElementById('score-list');
const restartBtn = document.getElementById('restart-btn');
const clearScoresBtn = document.getElementById('clear-scores-btn'); 

function getScores() {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    return scores;
}

function saveScore(initials, score) {
    const scores = getScores();
    scores.push({ initials, score });
    localStorage.setItem('scores', JSON.stringify(scores));
}

function displayScores() {
    const scores = getScores();
    scores.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.initials + ': ' + item.score;
        scoreList.appendChild(listItem); 
    });
}
function clearScores() {
    localStorage.removeItem('scores');
    scoreList.innerHTML = ''; 
}

initialsForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const initialsInput = document.getElementById('initials');
    const initials = initialsInput.value.trim();

    saveScore(initials, score);

    displayScores();

    initialsInput.value = '';
});

displayScores();

restartBtn.addEventListener('click', function() {
    window.location.href = 'index.html';
});
clearScoresBtn.addEventListener('click', function() {
    clearScores();
});