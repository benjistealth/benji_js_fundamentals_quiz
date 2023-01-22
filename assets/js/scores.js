
var submitButton = document.querySelector("#submit");
var intialsEl = document.querySelector("#initials");
var highscoresList = document.querySelector("#highscores");
var clearScores = document.querySelector("#clear");
var recalledArr = JSON.parse(localStorage.getItem("finalScore"));
var saveArr = [];
var recalledScores;
var recalledInitials;
var displayArr = [];

// event listener for submit button so save the data
// add if statement to avoid error when submit button not on page
if (submitButton) {
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        getScores();
        saveScore();
        changePage();
    });
}

function saveScore() {
// grab initials and score
    var saveInitials = intialsEl.value;
    var saveScore = timerCount;
// create object with data
    var finalScore = {
        initials: saveInitials,
        score: saveScore,
    };
    // add each score to the array before saving
        recalledArr = JSON.parse(localStorage.getItem("finalScore"));
    if (recalledArr) {
        recalledArr.push(finalScore);
    }
    else {
        recalledArr = [finalScore];
    }
    localStorage.setItem("finalScore", JSON.stringify(recalledArr));
}

function changePage() {
    // transition to highscores page
    window.location.href = "./assets/html/highscores.html";
}

function getScores() {
    // recall scores from local storage
    recalledArr = JSON.parse(localStorage.getItem("finalScore"));
    if (recalledArr !== null) {
        // sort by score value
        recalledArr.sort(function(a, b) {
            return b.score - a.score;
        });
        for (let i = 0; i < recalledArr.length; i++) {
            recalledInitials = recalledArr[i].initials;
            recalledScores = recalledArr[i].score;
            displayArr.push(recalledInitials + " - " + recalledScores);
        }
    }
}

displayScores()
//  get the latest saved scores & display on highscores page
// create new elements for each score recalled from storage
function displayScores() {
    if (highscoresList) {
        getScores();
        for (let i = 0; i < displayArr.length; i++) {
            let item = displayArr[i];
            let listItem = document.createElement("li");
            listItem.textContent = item;
            highscoresList.appendChild(listItem);
        }

    }
}

// add listener for clear scores button
if (window.location.href.endsWith("/highscores.html")) {
    clearScores.addEventListener("click", function (event) {
        let listItem = document.querySelector("li");
        event.preventDefault();
        // check there are items to remove
        if (listItem) {
            // clear the stored data
            localStorage.clear();
            // remove the highscores list from the page
            var listElement = document.getElementById('highscores');
            listElement.parentNode.removeChild(listElement);
        }
    });
}