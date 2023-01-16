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
    // assuming the score is the time left, bigger score  === better
    // get the time remaining to save as score - timerCount
    // save scores to local storage
    // get name from user input
    endScreenEl = timerCount;
    submitButton.addEventListener("click", function (event) {
        var saveInitials = intialsEl.value;
        var saveScore = timerCount;
        var finalScore = {
            initials: saveInitials,
            score: saveScore,
        }
        localStorage.setItem("highScore", JSON.stringify(finalScore));
    });
}

function getScores() {
    // recall scores from local storage
    JSON.parse(highScore);
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
    // scoresEl.appendChild(li, score);
    return;
}
