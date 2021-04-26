/* =========== Button functions =========== */

const btnA= document.getElementById("aBtn")
/* Event listeners for buttons, on click */
aBtn.addEventListener("click", startQuiz);
/* Button functions */
function startQuiz() {
    console.log("Start");
}

/* =========== Timer functions =========== */
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
    }

}
