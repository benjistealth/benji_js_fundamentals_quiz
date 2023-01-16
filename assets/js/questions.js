// This file is just to store the questions for the quiz
// Create questions and 4 answers to each with only one being correct
// Store each question as an object with all the info for each question
// Create an array
;
var question1 = {
    title: "Commonly used data types DO NOT include: ",
    options: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    answer: "3. Alerts",
};

var question2 = {
    title: "The condition in an if/else statement is enclosed within: ",
    options: ["1. Quotes", "2. Curley Brackets", "3. Parenthesis", "4. Square Brackets"],
    answer: "2. Curley Brackets",
};

var question3 = {
    title: "Arrays in Javascript can be used to store: ",
    options: ["1. Numbers & Strings", "2. Other Strings", "3. Booleans", "4. All of the above"],
    answer: "4. All of the above",
};

var question4 = {
    title: "String Values must be enclosed within _______ when being assigned to variables: ",
    options: ["1. Commas", "2. Curley Brackets", "3. Quotation Marks", "4. Parenthesis"],
    answer: "3. Quotation Marks",
};

var q = 0;



var questionsArr = [question1, question2, question3, question4];

function showHideQuestions(hide) {
    // hide start page element - show questions
    if (hide) {
        //hide start screen first, then show questions
        startScreen.setAttribute("class", "hide");
        questions.setAttribute("class", "choices");
        //prints 1st question        
        questionTitle.textContent = questionsArr[q].title;
        // prints the 4 options as buttons for q1
        makeButtons(questionsArr[q].options);
    }
    else {
        questions.setAttribute("class", "hide");
        return;
    }
}
// listener for answer button click event
options.addEventListener("click", function (event) {
    if (event.target.innerText === questionsArr[q].answer) {
        questionOK();
        nextQuestion();
    }
    else if (event.target.innerText != questionsArr[q].answer) {
        questionWrong();
        nextQuestion();
    }
});

// pass array from showHideQuestions to display as buttons
function makeButtons(arr) {
    var questionItem = document.createElement("ol");
    for (let i = 0; i < arr.length; i++) {
        // questionItem.id = i;
        questionItem.className = "questionItem";
        var button = document.createElement('button');
        button.id = "button_" + i;
        button.innerText = arr[i];
        questionItem.appendChild(button);
        options.appendChild(questionItem);
    }
}

// amends the button text and question text after a selection is made
function nextQuestion() {
    if (q < 3) {
        q++;
        var buttonQ0 = document.querySelector("#button_0");
        var buttonQ1 = document.querySelector("#button_1");
        var buttonQ2 = document.querySelector("#button_2");
        var buttonQ3 = document.querySelector("#button_3");
        buttonQ0.innerText = questionsArr[q].options[0];
        buttonQ1.innerText = questionsArr[q].options[1];
        buttonQ2.innerText = questionsArr[q].options[2];
        buttonQ3.innerText = questionsArr[q].options[3];
        questionTitle.textContent = questionsArr[q].title;
    }
    else {
        saveScores();
        endScreen();
    }
}

function questionWrong() {
    // display feedback to user and load next question
    // also reduce timer by 10 seconds
    feedback.textContent = "Wrong!";
    timerCount -= 10;
    return;
}

function questionOK() {
    // display feedback to user and load next question
    feedback.textContent = "Correct!";
    return;
}

function endScreen() {
    // hide questions and start page - show score and say GAME OVER or summat
    //showHideQuestions(false); // hide questions - may not be required if changing to highscores.html
    // show the endScreen
    questions.setAttribute("class", "hide");
    endScreenEl.setAttribute("class", "show");    
    // finalScoreEl.textContent = timerCount;
    clearInterval(timer);
    // then load high score entry
    // show score and Game over
    displayScores();
}
