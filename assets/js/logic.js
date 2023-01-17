// create variables to reference html
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var options = document.querySelector(".choices");
var timerElement = document.querySelector(".timer");
var feedback = document.querySelector(".feedback");
var endScreenEl = document.querySelector("#end-screen");
var finalScoreEl = document.querySelector("#final-score");

// global variables
var timer;
var timerCount;

// listener to trigger the game when the "Start Quiz" button is hit
// start the timer when the start button is pressed
startButton.addEventListener("click", function (event) {
  startScreen.setAttribute("class", "hide");
  event.preventDefault();
  startGame();
  showHideQuestions(true);
});

// Create startGame() function to kick off the game
function startGame() {
  // set a new counter value 
  timerCount = 75;
  //update timer on screen
  timerElement.textContent = timerCount;
  startCounter();
}

function startCounter() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--; // reduce timer & upate screen
    timerElement.textContent = timerCount;
    // Check if timer is expired
    if (timerCount <= 0) {
      // Clears interval
      clearInterval(timer);
      timerElement.textContent = timerCount;
      // showHideQuestions(false);
      // endScreen();
    } //wait 1s
  }, 1000);
return timerCount;
}
