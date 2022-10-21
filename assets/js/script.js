// create variables that will represent elements in document to access elements via the DOM 
const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const finishBtn = document.getElementById('finish');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');
const currentQuest = document.getElementById('currentQ');
const image = document.getElementById('image');

let currentQ = 0; // for current question
var score = 0; // for score

// create an array called questions
//contain the image,question, answers and options
let questions = [
    {

        question: "Welcome click next to begin",

    },
    {
        img: "assets/images/question1",
        question: "True or False, There are 6 infinity stones ?",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false },
        ]
    },
    {
        question: "True or False, soul stone is located on Vormir?",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]

    },
    {
        question: "True or False, Tom Cruise voices the character Rocket the raccon?",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true }
        ]

    }
    ,
    {
        question: "True or False, Captain America's shield and Bucky's arm are made of iron?",
        answers: [
            { option: "True", answer: false },
            { option: "False", answer: true }
        ]

    }
    ,
    {
        question: "True or False, Captain America was able to pick up Thor's hammer in Endgame??",
        answers: [
            { option: "True", answer: true },
            { option: "False", answer: false }
        ]

    }


]
// onclick events to call functions
//used addEventListener instead of onClick
restartBtn.addEventListener('click', restart);
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
finishBtn.addEventListener('click', submit);
// get executed when the page loads and the script gets executed
function startQuiz() {

    currentQ = 0;
    questionText.innerHTML = questions[currentQ].question;
    trueBtn.innerHTML = questions[currentQ].answers[0].option;
    img = questions[currentQ].img;

    image.innerHTML += "<img src=\"" + img + "\" width=\"200\" height=\"200\"><br>";
    // questions.innerHTML += "<img src=\"" + img + "\" width=\"200\" height=\"200\"><br>";
    trueBtn.onclick = () => {
        let num = 0;
        if (questions[currentQ].answers[num].answer) {
            if (score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQ < 5) {
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQ].answers[1].option;
    falseBtn.onclick = () => {
        let num = 1;
        if (questions[currentQ].answers[num].answer) {
            if (score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQ < 5) {
            next();
        }
    }
    prevBtn.classList.add('hide');

}
startQuiz();

//reset the cuurent question, score,remove the hide class if it's assigned to an element.
// calls startQuiz() function
function restart() {

    currentQ = 0;
    currentQuest.innerHTML = currentQ;
    prevBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    finishBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score = 0;
    userScore.innerHTML = score;
    startQuiz();

}
// increment currentQ
function next() {

    currentQuest.innerHTML = currentQ++;

    if (currentQ >= 6) {
        nextBtn.classList.add('hide');
        prevBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQ].question;
    trueBtn.innerHTML = questions[currentQ].answers[0].option;
    trueBtn.onclick = () => {
        let num = 0;
        if (questions[currentQ].answers[num].answer) {
            if (score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQ < 5) {
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQ].answers[1].option;
    falseBtn.onclick = () => {
        let num = 1;
        if (questions[currentQ].answers[num].answer) {
            if (score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQ < 5) {
            next();
        }
    }
    prevBtn.classList.remove('hide');
}

function prev() {
    currentQuest.innerHTML = --currentQ;
    if (currentQ <= 0) {
        prevBtn.classList.add('hide');
        nextBtn.classList.remove('hide');
    }
    questionText.innerHTML = questions[currentQ].question;
    trueBtn.innerHTML = questions[currentQ].answers[0].option;
    trueBtn.onclick = () => {
        let num = 0;
        if (questions[currentQ].answers[num].answer) {
            if (score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQ < 5) {
            next();
        }
    }
    falseBtn.innerHTML = questions[currentQ].answers[1].option;
    falseBtn.onclick = () => {
        let num = 1;
        if (questions[currentQ].answers[num].answer) {
            if (score < 5) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if (currentQ < 2) {
            next();
        }
    }
    prevBtn.classList.remove('hide');
}

function submit() {

    prevBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    finishBtn.classList.add('hide');
    trueBtn.classList.add('hide');
    falseBtn.classList.add('hide');

    if (score == 5) {
        questionText.innerHTML = `Congratulations You scored ${score}/5. You know your marvel movies`;
    }
    else if (score < 5 && score >= 3) {
        questionText.innerHTML = `You scored ${score}/5 .Not bad`;
    }
    else if (score < 3 && score >= 0) {
        questionText.innerHTML = `You scored ${score}/5 .Watch the movies again`;
    }

}