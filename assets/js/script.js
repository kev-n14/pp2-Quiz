
// create variables that will represent elements in document to access elements via the DOM 
const restartButton = document.getElementById('restart');
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const finishButton = document.getElementById('finish');
const trueButton = document.getElementById('True');
const falseButton = document.getElementById('False');
const userPoints = document.getElementById('user-points');
const questionText = document.getElementById('questionText');


const totalQuestions = document.getElementById('total-questions');
const totalPoints = document.getElementById('total-points');

const currentQuest = document.getElementById('currentQ');

var currentQ = 0; // for current question
var points = 0; // for points

// create an array called questions
//contain the image,question, answers and options

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
restartButton.addEventListener('click', restart);
previousButton.addEventListener('click', previous);
nextButton.addEventListener('click', next);
finishButton.addEventListener('click', submit);



// get executed when the page loads and the script gets executed
function startQuiz() {
    previousButton.classList.add('hide');
    restartButton.classList.add('hide');
    finishButton.classList.add('hide');
    trueButton.classList.add('hide');
    falseButton.classList.add('hide');
    currentQ = 0;
    questionText.innerHTML = questions[currentQ].question;
    totalQuestions.innerHTML = `/${questions.length - 2}`;
    totalPoints.innerHTML = `/${questions.length - 2}`;
    trueButton.innerHTML = questions[currentQ].answers[0].option;
    falseButton.innerHTML = questions[currentQ].answers[1].option;

    previousButton.classList.add('hide');
}


function restart() {
    currentQ = 0;
    currentQuest.innerHTML = currentQ;
    previousButton.classList.remove('hide');
    nextButton.classList.remove('hide');
    finishButton.classList.remove('hide');
    trueButton.classList.remove('hide');
    falseButton.classList.remove('hide');
    points = 0;
    userPoints.innerHTML = points;

    startQuiz();// call startQuiz() to start quiz again

}
// next() function called when nextButton is clicked
function next() {
    trueButton.classList.remove('hide');
    falseButton.classList.remove('hide');
    restartButton.classList.remove('hide');
    currentQuest.innerHTML = currentQ++;
    if (currentQ >= 2) {

        previousButton.classList.remove('hide');
        console.log("im in next function  " + currentQ);
    }

    if (currentQ >= 10) {
        finishButton.classList.remove('hide');
        nextButton.classList.add('hide');
        previousButton.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQ].question;
    trueButton.innerHTML = questions[currentQ].answers[0].option;
    trueButton.onclick = () => {
        let num = 0;
        if (questions[currentQ].answers[num].answer) {
            if (points < 10) {
                points++;
            }
        }
        userPoints.innerHTML = points;
        if (currentQ <= 10) {
            next();
        }
    }
    falseButton.innerHTML = questions[currentQ].answers[1].option;
    falseButton.onclick = () => {
        let num = 1;
        if (questions[currentQ].answers[num].answer) {
            if (points <= 10) {
                points++;
            }
        }
        userPoints.innerHTML = points;
        if (currentQ <= 10) {
            next();
        }
    };

}
// prev() function called when previousButton is clicked
function previous() {
    currentQuest.innerHTML = --currentQ;
    if (currentQ <= 0) {
        previousButton.classList.add('hide');
        nextButton.classList.remove('hide');
        trueButton.classList.add('hide');
        falseButton.classList.add('hide');
        console.log("current is " + currentQ);
    }
    questionText.innerHTML = questions[currentQ].question;
    trueButton.innerHTML = questions[currentQ].answers[0].option;
    trueButton.onclick = () => {
        let num = 0;
        if (questions[currentQ].answers[num].answer) {
            if (points < 10) {
                points++;
            }
        }
        userPoints.innerHTML = points;
        if (currentQ < 10) {
            next();
        }
    };
    falseButton.innerHTML = questions[currentQ].answers[1].option;
    falseButton.onclick = () => {
        let num = 1;
        if (questions[currentQ].answers[num].answer) {
            if (points < 10) {
                points++;
            }
        }
        userPoints.innerHTML = points;
        if (currentQ < 10) {
            next();
        }
    };
    previousButton.classList.remove('hide');
}

function submit() {

    previousButton.classList.add('hide');
    nextButton.classList.add('hide');
    finishButton.classList.add('hide');
    trueButton.classList.add('hide');
    falseButton.classList.add('hide');

    if (points == 10) {
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
