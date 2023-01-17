var scoresEl = document.querySelector("highscores");
var submitButton = document.querySelector("#submit");
var intialsEl = document.querySelector("#initials");
var recalledScores;
var recalledInitials;

    // event listener for submit button so save the data
    submitButton.addEventListener("click", function (event) { 
        var saveInitials = intialsEl.value;
        console.log("intitials " + saveInitials);
        var saveScore = timerCount;
        console.log("score " + saveScore);
        var finalScore = {
            initials: saveInitials,
            score: saveScore,
        };
        localStorage.setItem("initials", saveInitials);
        localStorage.setItem("score", saveScore);
        displayScores();
    });

function getScores() {
    // recall scores from local storage
    //var storedTodos = JSON.parse(localStorage.getItem("todos"));
    recalledInitials = localStorage.getItem("initials");
    recalledScore = localStorage.getItem("");
    console.log("recalled " + recalledScores);
    return;
}

function displayScores() {
    //hide the endscreen
    // endScreenEl.setAttribute("class", "hide"); //may not need this as going to new html file this time
    // display the leaderboard on the highscores page
    // function highScoresPage() {
    //     location.replace("./../html/highscsores.html");
    //  get the latest saved scores to display on highscores page
    getScores();
    // transition to highscores page
    document.querySelector(".scores").click();
    // create elements to put scores into

    // var highScoreDisplay = ("ol");
    // scoresEl.appendChild(highScoreDisplay);
    return;
}
