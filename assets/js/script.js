var quizTime = 5;

var timer = document.querySelector(".time");
var startQuizBtn = document.getElementById("start-quiz");
var questionBody = document.getElementById("question-body");

startQuizBtn.addEventListener("click", setTime);

function setTime() {
  var timeInterval = setInterval(function () {
    questionBody.style.display = "block";
    if (quizTime > 0) {
      timer.textContent = "Time remaining: " + quizTime;
      quizTime--;
    }

    if (quizTime === 0) {
      console.log("stop here");
      clearInterval(timeInterval);
      timer.textContent = "Time is up! ";
    }
  }, 500);
}
