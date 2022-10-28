
// create variables that will represent elements in document to access elements via the DOM 
//Choice
const trueButton = document.getElementById('True');
const falseButton = document.getElementById('False');
//question number tracker
const questionText = document.getElementById('questionText');
const totalQuestions = document.getElementById('total-questions');
const currentQuest = document.getElementById('currentQ');
//user points tracker
const userPoints = document.getElementById('userPoints');
const totalPoints = document.getElementById('totalPoints');
//Controls
const restartButton = document.getElementById('restart');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const finishButton = document.getElementById('finish');

var currentQ = 0; // for current question
var points = 0; // for points

// create an array called questions
//contain the question, choices and answers

var questions = [
    {
        question: "<p>Welcome</p><p> Click Next To Begin</p>",
    },

    {//question:1
        question: "<p>True or False,</p><p>There are 6 infinity stones ?</p>",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false },
        ],
    },
    {//question:2
        question: "<p>True or False,</p> <p>The Soul Stone is located on Vormir?</p>",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]
    },
    {//question:3
        question: "<p>True or False,</p><p> Tom Cruise voices the character Rocket the raccon?</p>",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true }
        ]
    },
    {//question:4
        question: "<p>True or False,</p><p> Captain America's shield and Bucky's arm are made of iron?</p>",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true }
        ]
    },
    {//question:5
        question: "<p>True or False,</p><p> Captain America was able to pick up Thor's hammer in Endgame?</p>",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]

    },
    {//question:6
        question: "<p>True or False,</p><p>Charles Xavier became paralyzed after being shot by Wolverine?</p>",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true }
        ]

    },
    {//question:7
        question: "<p>True or False,</p><p>Howard Stark, Tony Stark's father, created Captain America's shield using vibranium?</p>",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false },
        ],
    },
    {//question:8
        question: "<p>True or False,</p><p>The Space Infinity Stone was the first one to show up in the MCU?</p>",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false },
        ],
    },
    {//question:9
        question: "<p>True or False,</p><p>Thor's hammer's name is Bifrost?</p>",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true },
        ],
    },
    {//question:10
        question: "<p>True or False,</p><p>Captain Marvel was born with her powers?</p>",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true },
        ],
    },

    {// end of quiz
        question: "<p>End Of Quiz</p><p> Click The Finish Button To Get Result</p>",
        answers: [
            { option: null },
            { option: null }
        ]
    }
];
// onclick events to call functions
// when button is clicked the corresponding function is called

nextButton.addEventListener('click', next);
finishButton.addEventListener('click', submit);
restartButton.addEventListener('click', restart);//restart button when clicked calls the restart function.
previousButton.addEventListener('click', previous);
// get executed when the page loads and the script gets executed
function startQuiz() {
    previousButton.classList.add('hide');// set previousButton to hide so it does not apeear
    restartButton.classList.add('hide');
    finishButton.classList.add('hide');
    trueButton.classList.add('hide');
    falseButton.classList.add('hide');
    currentQ = 0;
    questionText.innerHTML = questions[currentQ].question;//questionText set question from questions array found at location of value of currentQ
    totalQuestions.innerHTML = `/${questions.length - 2}`;// the length of questions -2 to exculded the opening and closing messages.
    totalPoints.innerHTML = `/${questions.length - 2}`;
    trueButton.innerHTML = questions[currentQ].answers[0].option;//true buuton assigned the value found in the answers array at location 0
    falseButton.innerHTML = questions[currentQ].answers[1].option;//false buuton assigned the value found in the answers array at location 1
}
// Restart function will reset all values back to 0,hidden elements have the hidden attribute removed that need to be hidden and begin the quiz again by calling startQuiz();
function restart() {
    currentQ = 0;
    currentQuest.innerHTML = currentQ;//currentQ is applied HTML element of currentQuest
    trueButton.classList.remove('hide');
    falseButton.classList.remove('hide');
    previousButton.classList.remove('hide');
    nextButton.classList.remove('hide');
    finishButton.classList.remove('hide');

    points = 0;
    userPoints.innerHTML = points;//points is applied HTML element of userPoints

    startQuiz();// call startQuiz() to start quiz again

}
// next() function called when nextButton is clicked
function next() {

    currentQuest.innerHTML = ++currentQ; // currentQuest is assigned the value stored in currentQ
    trueButton.classList.remove('hide');
    falseButton.classList.remove('hide');
    restartButton.classList.remove('hide');

    if (currentQ >= 2) {// on question 2 the previous button hidden attibrute is removed so the user can use the button.
        previousButton.classList.remove('hide');
    }

    if (currentQ >= 10) { // ifcurrentQ is greater than or equal to 10 the hidden attribute is removed from finish,previous button and is added to next button
        finishButton.classList.remove('hide');
        nextButton.classList.add('hide');
        previousButton.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQ].question;

    trueButton.innerHTML = questions[currentQ].answers[0].option;// html element true button is assigned option value from the questions array.answer array pointing at index o for true
    falseButton.innerHTML = questions[currentQ].answers[1].option;// html element false button is assigned option value from the questions array

    trueButton.onclick = () => { // trueButton clicked will run a function
        let num = 0;
        if (questions[currentQ].answers[num].answer) {// will check to see if the answer selected is correct from the questions array.
            if (points < 10) {// if points less than 10
                points++;//increment points by 1
            }
        }
        userPoints.innerHTML = points;//points is applied HTML element of userPoints
        if (currentQ <= 10) {//if points less than or =10
            next();// then next function is called
        }
    }

    falseButton.onclick = () => {
        let num = 1;
        if (questions[currentQ].answers[num].answer) { //will check to see if the answer selected is correct from the questions array. answer array pointing at index 1 for false
            if (points < 10) {
                points++;
            }
        }
        userPoints.innerHTML = points;
        if (currentQ <= 10) {
            next();//next function is called
        }
    };

}
// prev() function called when previousButton is clicked
function previous() {
    currentQuest.innerHTML = --currentQ;
    if (currentQ <= 0) {// if currentQ is less than or equal to 0 the hide attribute is added to previous,true,false button and is removed from next button
        previousButton.classList.add('hide');
        nextButton.classList.remove('hide');
        trueButton.classList.add('hide');
        falseButton.classList.add('hide');
    }
    questionText.innerHTML = questions[currentQ].question;// HTML element questionText is assigned value stored question in questions array. currentq will provide the index.
    trueButton.innerHTML = questions[currentQ].answers[0].option;
    falseButton.innerHTML = questions[currentQ].answers[1].option;// html element false button is assigned option value from the questions array

    trueButton.onclick = () => {
        let num = 0;
        if (questions[currentQ].answers[num].answer) {//will check to see if the answer selected is correct from the questions array.
            if (points < 10) {
                points++;//increment points by 1
            }
        }
        userPoints.innerHTML = points;
        if (currentQ < 10) {
            next();//next function is called
        }
    };

    falseButton.onclick = () => {
        let num = 1;
        if (questions[currentQ].answers[num].answer) {
            if (points < 10) {
                points++;//increment points by 1
            }
        }
        userPoints.innerHTML = points;
        if (currentQ < 10) {
            next();//next function is called
        }
    };

}

function submit() {// submit function called all buttons are aassigned attribute hide. to hide the buttons. restart button still visible
    previousButton.classList.add('hide');
    nextButton.classList.add('hide');
    finishButton.classList.add('hide');
    trueButton.classList.add('hide');
    falseButton.classList.add('hide');

    if (points == 10) {// depending on the users score diffent message is displayed to via  the HTML element questionText
        questionText.innerHTML = `<p>Congratulations You Scored ${points}/ ${questions.length - 2}. You Know Your Marvel Movies</p>`;
    }
    else if (points < 10 && points >= 7) {
        questionText.innerHTML = `<p>You Scored ${points}/${questions.length - 2}.</p><p> Not Bad, You Know Your Stuff</p>`;
    }
    else if (points < 7 && points >= 4) {
        questionText.innerHTML = `<p>You Scored ${points}/${questions.length - 2}.</p><p> There Is Room For Improvement</p>`;
    }
    else if (points < 4 && points >= 0) {
        questionText.innerHTML = `<p>You Scored ${points}/${questions.length - 2}.</p><p> You Should Watch The Movies Again</p>`;
    }

}
startQuiz();// calls startQuiz() function
