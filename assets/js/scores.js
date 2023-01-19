
var submitButton = document.querySelector("#submit");
var intialsEl = document.querySelector("#initials");
var highscoresList = document.querySelector("#highscores");
var clearScores = document.querySelector("#clear");
var recalledScores;
var recalledInitials;
var recalledArr = [""];


// event listener for submit button so save the data
// add if statement to avoid error when changing page to highscores.html
if (submitButton) {
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var saveInitials = intialsEl.value;
        var saveScore = timerCount;
        var finalScore = {
            initials: saveInitials,
            score: saveScore,
        };
        localStorage.setItem("initials", saveInitials);
        localStorage.setItem("score", saveScore);
        changePage();
    });
}

function changePage() {
    // transition to highscores page
    window.location.href = "./assets/html/highscores.html";
}

function getScores() {
    // recall scores from local storage
    //var recalledString = JSON.parse(localStorage.getItem("finalscore")); // not working
    recalledInitials = localStorage.getItem("initials");
    recalledScores = localStorage.getItem("score");
    recalledArr[0] = [recalledInitials + " - " + recalledScores];
}

displayScores()
// displaying the scores does not seem to work and I cannot see why
//  get the latest saved scores & display on highscores pagerecalledScores
    // attempt to populate new element created

function displayScores() {
    if (highscoresList){    
    getScores();
    for (let i = 0; i < recalledArr.length; i++) {
        let item = recalledArr[i];
        let listItem = document.createElement("li");
        listItem.textContent = item;
        highscoresList.appendChild(listItem);
    }
 }
}

// add listener for clear scores button
if (clearScores) {
    clearScores.addEventListener("click", function (event) {
        event.preventDefault();
        localStorage.clear();
        var listElement = document.getElementById('highscores');
        listElement.parentNode.removeChild(listElement);
    });
}
