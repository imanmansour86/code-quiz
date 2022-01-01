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
    answers: ["js", "scripting", "script", "javascript"],
    correctAnswer: "script",
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

//bigger loop to loop over entire questions

let j = 0;

var question = document.createElement("div");

var questionHeader = document.createElement("div");
questionHeader.setAttribute("id", j);
// questionHeader.style.display = "none";

// var currentPosition = 0;
// if {

// }
//  (currentPosition < quizQuestions.length)
//   var t = document.getElementById("j");
//   t.style.display = "block";

questionHeader.textContent = quizQuestions[j].question;
questionHeader.classList.add("question-header");
question.appendChild(questionHeader);
body.appendChild(question);

var questionResult = document.createElement("div");

//loop to create radio buttons for  question
for (i = 0; i < quizQuestions[j].answers.length; i++) {
  var radioContainer = document.createElement("div");

  questionHeader.appendChild(radioContainer);

  radioContainer.classList.add("radio-sub");

  var radioBtn = document.createElement("input");
  radioBtn.setAttribute("type", "radio");
  radioBtn.setAttribute("name", "q1");
  radioBtn.setAttribute("value", quizQuestions[j].answers[i]);
  radioBtn.setAttribute("id", "q[" + j + "]");
  radioContainer.appendChild(radioBtn);

  var radioLabel = document.createElement("label");
  radioLabel.innerHTML = quizQuestions[j].answers[i];
  radioContainer.appendChild(radioLabel);

  // take a copy of j so that the listener does not reference the final j when it is clicked
  const jCopy = j;
  radioBtn.addEventListener("click", function (e) {
    console.log("the click is ", e.currentTarget.id);

    var t = document.getElementById(jCopy);
    console.log("test333+ " + t);

    document.getElementById(jCopy).appendChild(questionResult);

    var correctChoice = quizQuestions[jCopy].correctAnswer;

    if (e.target.value == correctChoice) {
      console.log("user answer is", e.target.value);
      score += 1;
      console.log("the answer is correct, score is " + score);

      questionResult.textContent = "the answer is correct";
    } else {
      score -= 1;
      console.log("wrong answer, new scroe is ", score);

      questionResult.textContent = "the answer is wrong";
    }
  });
}
