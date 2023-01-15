// This file is just to store the questions for the quiz
// Create questions and 4 answers to each with only one being correct
// Store each question as an object with all the info for each question
// Create an array
;
var question1 = {
    title: "test_What is the answer to q1 ?",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: "Option1",
};

var question2 = {
    title: "What is the answer to q1 ?",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: "Option2",
};

var question3 = {
    title: "What is the answer to q1 ?",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: "Option3",
};

var question4 = {
    title: "What is the answer to q1 ?",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: "Option4",
};

var questionsArr = [question1, question2, question3, question4];

function showHideQuestions(hide) {
    // hide start page element - show questions
    if (hide) {
        //hide start screen first, then show questions
        startScreen.setAttribute("class", "hide");
        questions.setAttribute("class", "none");
        // show question 
        questionTitle.textContent = questionsArr[0].title;
        //show option/s
        // var listButton1 = options.appendChild("ol");
        // listButton = document.createElement("BUTTON");
        // optionButton.setAttribute("id", "Option" + "1");
        // optionButton.textContent = options.appendChild(questionsArr[0].options[0]);
        // options.appendChild(optionButton);
    }
    else {
        // console.log("hide Qs");
        // questions.setAttribute("class", "show");
        return;
    }

    // while (questions.index != (questions.length - 1)) {
    //     // loop through them on each submission
    //     for (let i = 0; i < questions.length; i++) {

    //     }
    // }
    // endScreen();
    // checkScores();
    return;
}

function makeButtons(listItem) { 
    var grabList = document.getElementById(".options");
  
    var text = "" + "option" + "optionNumber";
    var questionItem = document.createElement('li');
    questionItem.id = list.length - 1;
    questionItem.className = "option"; 
    questionItem.appendChild(document.createTextNode(text));
  
    /*Add a button to each LI */
    var button = document.createElement('button');
    button.innerText = 'Click me!';
    questionItem.appendChild(button);
  
    grabList.appendChild(entry);
  }

function questionWrong() {
    // display feedback to user and load next question
    // also reduce timer by 10 seconds
    feedback.textContent = "Correct !!";
    timerCount - + 10;
}

function questionOK() {
    // display feedback to user and load next question
    feedback.textContent = "Correct !!";
}

function endScreen() {
    // hide questions and start page - show score and say GAME OVER or summat
    // then load high score entry
    showHideQuestions(false); // hide questions
    // show score and Game over
    displayScores();
}
