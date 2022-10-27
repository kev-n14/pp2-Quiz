
// create variables that will represent elements in document to access elements via the DOM 
const restartButton = document.getElementById('restart');
const previousButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const finishButton = document.getElementById('finish');
const trueButton = document.getElementById('True');
const falseButton = document.getElementById('False');
const userPoints = document.getElementById('user-points');
const questionText = document.getElementById('questionText');
const response = document.getElementById('response');
const questionNumber = document.getElementById('questionNumber');
const questionArea = document.getElementById('questionArea');
const currentQuest = document.getElementById('currentQ');

var currentQ = 0; // for current question
var points = 0; // for points

// create an array called questions
//contain the image,question, answers and options

var questions = [
    {

        question: "<p>Welcome</p><p> click next to begin h1</p>",

    },

    {



        question: "<p>True or False,</p><p>There are 6 infinity stones ?</p>",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false },
        ],
        qImage: "assets/images/question1.jpg"

    },
    {
        question: "<p>True or False,</p> <p>oul stone is located on Vormir?</p>",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]

    },
    {
        question: "<p>True or False,</p><p> Tom Cruise voices the character Rocket the raccon?</p>",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true }
        ]

    }
    ,
    {
        question: "<p>True or False,</p><p> Captain America's shield and Bucky's arm are made of iron?</p>",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true }
        ]

    }
    ,
    {
        question: "<p>True or False,</p><p> Captain America was able to pick up Thor's hammer in Endgame?</p>",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]

    },
    // // {
    // //     question: "<p>True or False,</p><p> Captain America's shield and Bucky's arm are made of iron?</p>",
    // //     answers: [
    // //         { option: "True", answer: false },
    // //         { option: "False", answer: true }
    // //     ]

    // // }
    // ,
    {
        question: "<p>End Of Quiz</p><p> Click The Finish Button To Get Result</p>",
        answers: [
            { option: null },
            { option: null }
        ]
    }


]
// onclick events to call functions
restartButton.addEventListener('click', restart);
previousButton.addEventListener('click', prev);
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
    questionText.innerHTML = ques(questions[currentQ].question);
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

    if (currentQ >= 6) {
        finishButton.classList.remove('hide');
        nextButton.classList.add('hide');
        previousButton.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQ].question;
    trueButton.innerHTML = questions[currentQ].answers[0].option;
    trueButton.onclick = () => {
        let num = 0;
        if (questions[currentQ].answers[num].answer) {
            if (points < 5) {
                points++;
            }
        }
        userPoints.innerHTML = points;
        if (currentQ <= 5) {
            next();
        }
    }
    falseButton.innerHTML = questions[currentQ].answers[1].option;
    falseButton.onclick = () => {
        let num = 1;
        if (questions[currentQ].answers[num].answer) {
            if (points <= 5) {
                points++;
            }
        }
        userPoints.innerHTML = points;
        if (currentQ <= 5) {
            next();
        }
    }
    previousButton.classList.remove('hide');
}
// prev() function called when previousButton is clicked
function previous() {
    currentQuest.innerHTML = currentQ--;
    if (currentQ <= 0) {
        previousButton.classList.add('hide');
        nextButton.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQ].question;
    trueButton.innerHTML = questions[currentQ].answers[0].option;
    trueButton.onclick = () => {
        let num = 0;
        if (questions[currentQ].answers[num].answer) {
            if (points < 5) {
                points++;
            }
        }
        userPoints.innerHTML = points;
        if (currentQ < 5) {
            next();
        }
    }
    falseButton.innerHTML = questions[currentQ].answers[1].option;
    falseButton.onclick = () => {
        let num = 1;
        if (questions[currentQ].answers[num].answer) {
            if (points < 5) {
                points++;
            }
        }
        userPoints.innerHTML = points;
        if (currentQ < 2) {
            next();
        }
    }
    previousButton.classList.remove('hide');
}

function submit() {

    previousButton.classList.add('hide');
    nextButton.classList.add('hide');
    finishButton.classList.add('hide');
    trueButton.classList.add('hide');
    falseButton.classList.add('hide');

    if (points == 5) {
        questionText.innerHTML = `<p>Congratulations You pointsd ${points}/5. You know your marvel movies</p>`;
    }
    else if (points < 5 && points >= 3) {
        questionText.innerHTML = `<p>You pointsd ${points}/5 .Not bad</p>`;
    }
    else if (points < 3 && points >= 0) {
        questionText.innerHTML = `<p>You pointsd ${points}/5 .Watch the movies again</p>`;
    }

}
startQuiz();// calls startQuiz() function
