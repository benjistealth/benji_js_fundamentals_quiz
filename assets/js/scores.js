var scoresEl = document.querySelector("highscores");
var recalledScores;

function saveScores() {
    // assuming the score is the time left, bigger score  === better
    // get the time remaining to save as score - timerCount
    // save scores to local storage
    // get name from user input
    finalScoreEl.textContent = timerCount;
    // event listener for submit button so save the data
    submitButton.addEventListener("click", function (event) {
        var saveInitials = intialsEl.value;
        var saveScore = timerCount;
        var finalScore = {
            initials: saveInitials,
            score: saveScore,
        }
        localStorage.setItem("highScore", JSON.stringify(finalScore));
        displayScores();
    });
}


function getScores() {
    // recall scores from local storage
    recalledScores = localStorage.getItem(JSON.parse(highScore));
    return;
}

function displayScores() {
    //hide the endscreen
    // endScreenEl.setAttribute("class", "hide"); //may not need this as going to new html file this time
    // display the leaderboard on the highscores page
    function highScoresPage() {
        location.replace("./../html/highscsores.html");
      }
    var highScoreDisplay = ("ol");
    // scoresEl.appendChild(highScoreDisplay);
    return;
}
