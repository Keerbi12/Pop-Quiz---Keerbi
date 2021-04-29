/* =========== Timer functions =========== */

const score= document.getElementById("score")
const timer= document.getElementById("timer")
let time= 30
setInterval(countDown, 1000)
function countDown() {
    time--
    timer.innerHTML= time;

    if (time < 10) {
        timer.setAttribute("style", "color: red;")
    } 

    if (time < 0) {
        window.location.href = "highScore.html"
        highScore();
    }
}

function highScore() {
    let finalScore = time;
    finalScore = finalScore*10
    console.log(finalScore);
}

let deduction=0;
function incorrectAnswer() {
    deduction++;
    let penalty = deduction*20
    console.log(penalty);
}

/* =========== Question functions =========== */

const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answerBtn");
let shuffleQuestion, currentQuestion;
let questionNumber = 1;

function begin() {
    console.log("Quiz Begun")
    shuffleQuestion = questions.sort()
    currentQuestion = 0
    setQuestion()
}

/* =========== Delays the begin() to allow the constants to load. =========== */
setTimeout(begin, 1000)

function setQuestion () { 
    resetQuestions();
    displayQuestion(shuffleQuestion[currentQuestion]);
}

/* =========== Displays the question by creating buttons within the button container (answerEl) gives them class of btn for styling in css. =========== */
function displayQuestion (question) {
    questionEl.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", testAnswer)
        answerEl.appendChild(button)
    })
}

/* =========== the while runs through all the created buttons in the answerEl, since the button container (answerEl) is the parent, all the firstChilds (buttons) get removed =========== */
function resetQuestions() {
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}

/* =========== Checks to see if the answer has a dataset of correct, =========== */
function testAnswer(e) {
    const chosenBtn = e.target
    const correct = chosenBtn.dataset.correct
    if (chosenBtn.dataset.correct) {
        correctAnswer();
    } else {
        time = time-5;
        incorrectAnswer();
    }
}

/* =========== if the answer has a dataset of correct as defined in the array, will run the correctAnswer() function. Finds the current question number from the HTML and increments it by 1. =========== */
function correctAnswer() {
    if (currentQuestion < 3) {
        currentQuestion++;
    } else {}

    questionNumbers.innerHTML = ++questionNumber;
    if (questionNumber == 4 ) {
        highScore();
        setQuestion();
    } else {
        setQuestion();
    }
}


/* =========== Objects, contains questions and answer array. =========== */
const questions= [
    {
        question: "Which one of these brackets are used for defining objects?",
        answer: [
            {text: "{}", correct: true},
            {text: "()", correct: false},
            {text: "[]", correct: false},
            {text: "<>", correct: false}
        ]
    },
    {
        question: "Which of these below can be used in css for directly selecting class?",
        answer: [
            {text: "~class", correct: false},
            {text: "#class", correct: false},
            {text: ".class", correct: true},
            {text: "*class", correct: false}
        ]
    },
    {
        question: "let x = 1; var time = ++x; console.log(time);",
        answer: [
            {text: "1", correct: false},
            {text: "2", correct: true},
            {text: "time", correct: false},
            {text: "++x", correct: false}
        ]
    },
    {
        question: "Congratulations on completion!!!",
        answer: [
            {text: "N/A", correct: false},
            {text: "N/A", correct: false},
            {text: "N/A", correct: false},
            {text: "N/A", correct: false}
        ]
    }
]

