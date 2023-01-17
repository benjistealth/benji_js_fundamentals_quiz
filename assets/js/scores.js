var scoresEl = document.querySelector("highscores");
var submitButton = document.querySelector("#submit");
var intialsEl = document.querySelector("#initials");
var highscoresList = document.querySelector("#highscores");
var clearScores = document.querySelector("#clear");
var recalledScores;
var recalledInitials;
var recalledArr;


// event listener for submit button so save the data
// add if statement to avoid error when changing page to highscores.html
if (submitButton) {
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var saveInitials = intialsEl.value;
        console.log("intitials " + saveInitials); // debug
        var saveScore = timerCount;
        console.log("score " + saveScore); // debug
        var finalScore = {
            initials: saveInitials,
            score: saveScore,
        };
        localStorage.setItem("initials", saveInitials);
        localStorage.setItem("score", saveScore);
        changePage();
        displayScores();
    });
}

function getScores() {
    // recall scores from local storage
    //var storedTodos = JSON.parse(localStorage.getItem("todos")); // not working
    recalledInitials = localStorage.getItem("initials");
    recalledScores = localStorage.getItem("score");
    recalledArr.push(recalledInitials + " " + recalledScores);
    console.log("recalled " + recalledInitials + " " + recalledScores);
    return;
}

function changePage() {
    // transition to highscores page
    window.location.href = "./assets/html/highscores.html";
    return;
}

function displayScores() {
    //  get the latest saved scores to display on highscores page
    getScores();
    // create elements to put scores into
    let scorelist = document.getElementById("ol");
    for (let i = 0; i < recalledArr.length; i++) {
        let item = recalledArr[i];
        let listItem = document.createElement("li");
        listItem.textContent = item;
        scorelist.appendChild(listItem);
    }
}
    // add listener for clear scores button
    clearScores.addEventListener("click", function (event) {
        event.preventDefault();
        localStorage.clear();
    });

