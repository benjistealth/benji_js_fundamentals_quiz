
var submitButton = document.querySelector("#submit");
var intialsEl = document.querySelector("#initials");
var highscoresList = document.querySelector("#highscores");
var clearScores = document.querySelector("#clear");
var recalledScores;
var recalledInitials;
var recalledArr = [];
var recalledObj;


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
        localStorage.setItem("finalScore", JSON.stringify(finalScore));
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
    recalledObj = JSON.parse(localStorage.getItem("finalScore"));
    if (recalledObj !== null) {
        recalledInitials = recalledObj.initials;
        recalledScores = recalledObj.score;
        // recalledInitials = localStorage.getItem("initials");
        // recalledScores = localStorage.getItem("score");
        console.log(recalledInitials + " - " + recalledScores);
        recalledArr.push(recalledInitials + " - " + recalledScores);
    }
}

displayScores()
// displaying the scores does not seem to work and I cannot see why
//  get the latest saved scores & display on highscores
// attempt to populate new element created

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
if (window.location.href.endsWith("/highscores.html")){

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