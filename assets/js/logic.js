// create variables to reference html
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questions = document.querySelector("#questions");
var questionTitle = document.querySelector("#question-title");
var options = document.querySelector(".options");
var timerElement = document.querySelector(".timer");
var feedback = document.querySelector(".feedback");
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
  timerCount = 10;
  //update timer on screen
  timerElement.textContent = timerCount;
  startCounter();
  // while (timerCount != 0) {
  //   showHideQuestions(true);
  //   console.log("show hide");
  //}
}

function checkTimer() {
  console.log(timerElement.textContent);
  timerElement.textContent = timerCount;

}

function endScreen() {
  // allow high score entry
  //save high score with initials
  console.log("end screen");
  return;

}

function startCounter() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--; // reduce timer & upate screen
    timerElement.textContent = timerCount;
    if (timerCount >= 0) {
      // showHideQuestions(true);
    }
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

// display question 1 and wait for user response

// calc user score

// store user score in local storage

// reduce timer if incorrect answer & check for end time

// make a questions container - to hide and show - toggle class attribute hide

// make a start game container to swap out with above

// use clear interval to reset timer

// transition to scores when game over

// create scores.js to handle saving and recalling saved data and displaying scores

// quizEnd() function to trigger high scores display thingy

