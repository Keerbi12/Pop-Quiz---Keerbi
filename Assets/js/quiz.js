/* =========== Timer functions =========== */
const score= document.getElementById("score")
const timer= document.getElementById("timer")
let time= 60
setInterval(countDown, 1000)
function countDown() {
    time--
    timer.innerHTML= time;

    if (time < 30) {
        timer.setAttribute("style", "color: red;")
    } 

    if (time === 0) {
        window.location.href = "index.html"
        highScore();
    }
}

/* =========== Button functions =========== */

const aBtn= document.getElementById("aBtn")
const bBtn= document.getElementById("bBtn")
const cBtn= document.getElementById("cBtn")
const dBtn= document.getElementById("dBtn")
/* Event listeners for buttons, on click */
aBtn.addEventListener("click", startQuiz1);
bBtn.addEventListener("click", startQuiz);
cBtn.addEventListener("click", startQuiz);
dBtn.addEventListener("click", startQuiz);
/* Button functions */
function startQuiz() {
    console.log("WRONG");
}
function startQuiz1() {
    console.log("RIGHT");
}

/* =========== Question functions =========== */

const questions= [
    {
        question: "Question number 1",
        answer: [

        ]
    }
]

function callQuestion () {

}