
var submitButton = document.querySelector("#submit");
var intialsEl = document.querySelector("#initials");
var highscoresList = document.querySelector("#highscores");
var clearScores = document.querySelector("#clear");
var recalledObj = JSON.parse(localStorage.getItem("finalScore"));
var saveArr = [];
var recalledScores;
var recalledInitials;
var recalledArr = [];
// var recalledObj;


// event listener for submit button so save the data
// add if statement to avoid error when submit button not on page
if (submitButton) {
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        var saveInitials = intialsEl.value;
        var saveScore = timerCount;
        var finalScore = {
            initials: saveInitials,
            score: saveScore,
        };
        // add each score to the array before saving
        saveArr.push(finalScore);
        alert(saveArr.length);
        // finalScore.initials.push(saveInitials);
        // finalScore.score.push(saveScore);
        localStorage.setItem("finalScore", JSON.stringify(saveArr));
        // localStorage.setItem("initials", saveInitials);
        // localStorage.setItem("score", saveScore);
        changePage();
    });
}

function changePage() {
    // transition to highscores page
    window.location.href = "./assets/html/highscores.html";
}

function getScores() {
    // recall scores from local storage
    // recalledObj = JSON.parse(localStorage.getItem("finalScore"));
    if (recalledObj !== null) {
        for (let i = 0; i < recalledObj.length; i++) {
            recalledInitials = recalledObj[i].initials;
            recalledScores = recalledObj[i].score;
            // recalledInitials = localStorage.getItem("initials");
            // recalledScores = localStorage.getItem("score");
            console.log(recalledInitials + " - " + recalledScores);
            recalledArr.push(recalledInitials + " - " + recalledScores);
        }
    }
    // return;
}

displayScores()
//  get the latest saved scores & display on highscores page
// create new elements for each score recalled from storage

function displayScores() {
    if (highscoresList) {
        getScores();
        for (let i = 0; i < recalledArr.length; i++) {
            let item = recalledArr[i];
            console.log(item);
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
        if (listItem) {
            localStorage.clear();
            var listElement = document.getElementById('highscores');
            listElement.parentNode.removeChild(listElement);
        }
    });
}