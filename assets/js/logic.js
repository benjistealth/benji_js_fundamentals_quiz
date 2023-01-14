// create variables to reference html
var startButton = document.querySelector("#start");
var hideQuestions = document.querySelector(".hide");
var choices = document.querySelector(".choices");
var timerElement = document.querySelector(".timer");

// listener to trigger the game when the "Start Quiz" button is hit
// start the timer when the start button is pressed
startButton.addEventListener("click", function (event) {
  event.preventDefault();
   startGame();
  // If the count is zero, exit function
  if (timerElement.textContent == 0) {
    console.log("end game");
  }
});
// Create startGame() function to kick off the game
function startGame() {
  while(checkTimer() != 0){
  showQuestions();
  }
}

function checkTimer() {


}

function showQuestions() {
// unhide questions element and list out the options
while(questions.index != (questions.length-1)){
  // unhide questions and loop through them on each submission
}
  endScreen();
  checkScores();
}


function endScreen() {
  

}


function checkTimer() {
  console.log(timerElement.toString);

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

