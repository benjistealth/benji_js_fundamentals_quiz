// create variables to reference html
var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

// listener to trigger the game when the "Start Quiz" button is hit
// 
document.addEventListener("keydown", function(event) {
    // If the count is zero, exit function
    if (timerCount === 0) {
      return;
    }
    // Convert all key presses to lower case
    var key = event.key.toLowerCase();

  });
  
// start the timer when the start button is pressed

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

