// This file is just to store the questions for the quiz
// Create questions and 4 answers to each with only one being correct
// Store each question as an object with all the info for each question
// Create an array

var question1 = {
    title: "Title_1",
    question: "What is the answer to q1 ?",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: "Option1",
};

var question2 = {
    title: "Title_2",
    question: "What is the answer to q1 ?",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: "Option2",
};

var question3 = {
    title: "Title_3",
    question: "What is the answer to q1 ?",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: "Option3",
};

var question4 = {
    title: "Title_4",
    question: "What is the answer to q1 ?",
    options: ["Option1", "Option2", "Option3", "Option4"],
    answer: "Option4",
};

var questions = [question1, question2, question3, question4];
var hide = true;

function showHideQuestions(hide) {
    // hide start page element - show questions
    
    while (questions.index != (questions.length - 1)) {
        // loop through them on each submission
        for (let i = 0; i < questions.length; i++) {
            console.log(questions.i.title);
       }
    }
    endScreen();
    checkScores();
}

function questionWrong() {
// display feedback to user and load next question
// also reduce timer by 10 seconds

}

function questionOK() {
    // display feedback to user and load next question


}