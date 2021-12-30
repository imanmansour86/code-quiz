var quizTime = 5;
var score = 0;

var timer = document.querySelector(".time");
var startQuizBtn = document.getElementById("start-quiz");
var mainContainer = document.querySelector(".main-container");

startQuizBtn.addEventListener("click", setTime);

function setTime() {
  var timeInterval = setInterval(function () {
    questionHeader.style.display = "block";
    mainContainer.style.display = "none";
    if (quizTime > 0) {
      timer.textContent = "Time remaining: " + quizTime;
      quizTime--;
    }

    if (quizTime === 0) {
      console.log("time is up");
      clearInterval(timeInterval);
      timer.textContent = "Time is up! ";
    }
  }, 500);
}

var quizQuestions = [
  {
    question: "What is not a data type in Javascript?",
    answers: ["String", "Number", "BigIn", "Function"],
    correctAnswer: "Function",
  },
  {
    question:
      "Which method returns the string representation of the number's value?",
    answers: ["toString()", "toNumber() ", "toValue()", "None of the above"],
    correctAnswer: "toString()",
  },
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    answers: ["map", "while", "loop()", "forEach()"],
    correctAnswer: "forEach()",
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<js>", "<scripting>", "<script>", "<javascript>"],
    correctAnswer: "<script>",
  },
  {
    question: "Which of the following best describes JavaScript?",
    answers: [
      "a low-level programming language",
      "an object-oriented scripting language",
      "text editor",
      "a compiled scripting language",
    ],
    correctAnswer: "an object-oriented scripting language",
  },
  {
    question: "What is mean by this keyword in javascript?",
    answers: [
      "refers to current object",
      "refers to previous object",
      "variable which contains value",
      "none of the above",
    ],
    correctAnswer: "refers to current object",
  },
];

var body = document.body;
var questionHeader = document.createElement("div");
questionHeader.style.display = "none";
// questionHeader.id = "question-body";

questionHeader.textContent = quizQuestions[0].question;
questionHeader.classList.add("question-header");
body.appendChild(questionHeader);

for (i = 0; i < 4; i++) {
  var newDiv = document.createElement("div");

  questionHeader.appendChild(newDiv);

  newDiv.classList.add("radio-sub");

  var radioBtn = document.createElement("input");
  radioBtn.setAttribute("type", "radio");
  radioBtn.setAttribute("name", "q1");
  radioBtn.setAttribute("value", quizQuestions[0].answers[i]);
  radioBtn.setAttribute("id", "q[" + i + "]");

  newDiv.appendChild(radioBtn);

  var radioLabel = document.createElement("label");
  radioLabel.innerHTML = quizQuestions[0].answers[i];
  newDiv.appendChild(radioLabel);

  radioBtn.addEventListener("click", function (e) {
    console.log(e.target.value);

    var correctChoice = quizQuestions[0].correctAnswer;

    if (e.target.value == correctChoice) {
      console.log("user answer is", e.target.value);
      score += 1;
      console.log("the score is " + score);
    }
  });
}
