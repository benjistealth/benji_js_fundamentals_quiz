
// question objects to store in array
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
// keep track of which question is displayed
var questionCounter = 0;

// array of question objects
var questionsArr = [question1, question2, question3, question4];

// hide start page element - show questions
function showHideQuestions(hide) {
    if (hide) {
        //hide start screen first, then show questions
        startScreen.setAttribute("class", "hide");
        questions.setAttribute("class", "choices");
        //prints 1st question        
        questionTitle.textContent = questionsArr[questionCounter].title;
        // prints the 4 options as buttons for q1
        makeButtons(questionsArr[questionCounter].options);
    }
    else {
        questions.setAttribute("class", "hide");
        return;
    }
}
// listener for answer button click event
options.addEventListener("click", function (event) {
    event.preventDefault();
    if (event.target.innerText === questionsArr[questionCounter].answer) {
        questionOK();
        nextQuestion();
    }
    else if (event.target.innerText != questionsArr[questionCounter].answer) {
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
// exit to end screen when questions run out
// refactor to use foreach to make this neater
function nextQuestion() {
    if (questionCounter < (questionsArr.length - 1)) {
        questionCounter++;
        var buttonQ0 = document.querySelector("#button_0");
        var buttonQ1 = document.querySelector("#button_1");
        var buttonQ2 = document.querySelector("#button_2");
        var buttonQ3 = document.querySelector("#button_3");
        buttonQ0.innerText = questionsArr[questionCounter].options[0];
        buttonQ1.innerText = questionsArr[questionCounter].options[1];
        buttonQ2.innerText = questionsArr[questionCounter].options[2];
        buttonQ3.innerText = questionsArr[questionCounter].options[3];
        questionTitle.textContent = questionsArr[questionCounter].title;
    }
    else {
        endScreen();
    }
}

function questionWrong() {
    // display feedback to user and subtract time
    // also reduce timer by 10 seconds if they have enough left
    feedback.textContent = "Wrong!";
    if (timerCount > 10) {
        timerCount -= 10;
        return;
    }
    else timerCount = 0;
}

function questionOK() {
    // display feedback to user and return
    feedback.textContent = "Correct!";
    return;
}

function endScreen() {
    // hide questions
    // show the endScreen
    questions.setAttribute("class", "hide");
    endScreenEl.setAttribute("class", "show");
    clearInterval(timer);
    // display the final score on end screen
    finalScoreEl.textContent = timerCount;
}
