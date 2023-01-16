// This file is just to store the questions for the quiz
// Create questions and 4 answers to each with only one being correct
// Store each question as an object with all the info for each question
// Create an array
;
var question1 = {
    title: "Q.1_What is the answer to q1 ?",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: "Option1",
};

var question2 = {
    title: "Q.2_What is the answer to q2 ?",
    options: ["Option1", "Option2", "Option3", "Optiontwo4"],
    answer: "Option2",
};

var question3 = {
    title: "Q.3_What is the answer to q3 ?",
    options: ["Option1", "Option2", "Option3", "Optionthree4"],
    answer: "Option3",
};

var question4 = {
    title: "4_What is the answer to q4 ?",
    options: ["Option1", "Option2", "Option3", "Option4four"],
    answer: "Option4",
};

var q = 0;

var questionsArr = [question1, question2, question3, question4];

function showHideQuestions(hide) {
    // hide start page element - show questions
    if (hide) {
        //hide start screen first, then show questions
        startScreen.setAttribute("class", "hide");
        questions.setAttribute("class", "choices");
        // show question 
        // for (let i = 0; i < questionsArr.length; i++) {

        //}
        //prints 1 question and 4 options as buttons          
        questionTitle.textContent = questionsArr[q].title;
        makeButtons(questionsArr[q].options);
    }
    else {

        return;
    }
    // endScreen();
    // checkScores();
    return;
}
// listener for answer button click event
options.addEventListener("click", function (event) {
    // var thing = event.target.innerText; 
    // thing = thing.splice(0,2);
    console.log(event.target.innerText);
    console.log(questionsArr[q].answer);
    if (event.target.innerText === questionsArr[q].answer) {
        questionOK();
        q++;
        showHideQuestions(true);
    }
    else if(event.target.innerText != questionsArr[q].answer)
         questionWrong();
         showHideQuestions(true);

});

// pass array from showHideQuestions to display as buttons
function makeButtons(arr) {
    var questionItem = document.createElement("ol");
    for (let i = 0; i < list.length; i++) {
        var button = document.createElement('button');
        button.innerText = arr[i]; // (i + 1) +  + ". "
        questionItem.appendChild(button);
        options.appendChild(questionItem);
    }
}

function replaceButtons() {


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
    // then load high score entry
    showHideQuestions(false); // hide questions - may not be required if changing to highscores.html
    // show score and Game over
    displayScores();
}
