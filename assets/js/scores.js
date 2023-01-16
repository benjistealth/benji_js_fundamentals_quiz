var scoresEl = document.querySelector("highscores");
var recalledScores;

function saveScores() {
    // assuming the score is the time left, bigger score  === better
    // get the time remaining to save as score - timerCount
    // save scores to local storage
    // get name from user input
    finalScoreEl.textContent = timerCount;
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
    recalledScores = localStorage.getItem(JSON.parse(highScore));
    return;
    // score = localStorage.getItem("name", score);
}

function displayScores() {
    // display the leaderboard on the highscores page
    var highScoreDisplay =  ("ol");
    // scoresEl.appendChild(highScoreDisplay);
    return;
}
