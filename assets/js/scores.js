var score = 0;
var scoresEl = document.querySelector("highscores");
var name = "name";

function checkScores() {
    // check the scores
    getScores();
    console.log("checking scores");
    displayScores();

}

function saveScore() {
    // save scores to local storage
    // localStorage.setItem("name", score);
    // get name from user input
}

function getScores() {
    // recall scores from local storage
    return;
    // score = localStorage.getItem("name", score);
}

function evalScore() {
    getScores();
    displayScores();
    return;
}

function displayScores() {
    // display the leaderboard on the highscores page
    scoresEl.appendChild(li, score);
    return;
}

