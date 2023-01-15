// create variables to reference html
var startButton = document.querySelector("#start");
var questions = document.querySelector("#questions");
var choices = document.querySelector(".choices");
var timerElement = document.querySelector(".timer");
var feedback = document.querySelector(".feedback");
// global variables
var timer;
var timerCount;

// listener to trigger the game when the "Start Quiz" button is hit
// start the timer when the start button is pressed
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  startGame();
  // If the count is zero, exit function
  if (timerElement.textContent == 0) {
    console.log("end game");
    evalScore();
    endScreen();
  }
  else showHideQuestions();
});
// Create startGame() function to kick off the game
function startGame() {
  timerCount = 75;
  timerElement.textContent = timerCount; // working
  startCounter();
  while (timerCount != 0) {
    showHideQuestions(true);
  }
}

function checkTimer() {
  console.log(timerElement.textContent);
  timerElement.textContent = timerCount;

}

function endScreen() {


}

function startCounter() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--; //working
    timerElement.textContent = timerCount; //working
    if (timerCount >= 0) {
        // Clears interval and stops timer
        clearInterval(timer);
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer);
      // questionWrong(); not sure about that
    }
  }, 1000);

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

