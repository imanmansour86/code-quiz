var quizTime = 100;
var score = 0;
let j = 0; //question index

var timer = document.querySelector(".time");
var startQuizBtn = document.getElementById("start-quiz");
var nextQuestion = document.getElementById("next-question");
var questionHeader = document.createElement("div");
var scorePage = document.getElementById("score-page");
var highScore = document.getElementById("high-scores");
var currentScore = document.getElementById("total-score");
var submitInitials = document.getElementById("submit-initials");
var displayHighScore = document.getElementById("high-score");
displayHighScore.style.display = "none";

nextQuestion.style.display = "none";
scorePage.style.display = "none";
var mainContainer = document.querySelector(".main-container");

startQuizBtn.addEventListener("click", setTime);

function setTime() {
  mainContainer.style.display = "none";

  answerQuestion();
  var timeInterval = setInterval(function () {
    if (quizTime > 0) {
      timer.textContent = "Time remaining: " + quizTime;
      quizTime--;
    }

    if (quizTime === 0) {
      console.log("time is up");
      clearInterval(timeInterval);
      if (j < quizQuestions.length - 1) timer.textContent = "Time is up! ";
      else timer.textContent = "Congrats!! done!";
      nextQuestion.style.display = "none";
      questionHeader.style.display = "none";
      scorePage.style.display = "block";
      currentScore.innerHTML = "Total score is: " + score;
    }
  }, 1000);
}

submitInitials.addEventListener("click", function (e) {
  e.preventDefault();
  var initials = document.getElementById("initial").value;
  console.log("submit your initial here " + initials);

  localStorage.setItem(initials, score);
  console.log(localStorage);
  scorePage.style.display = "none";
  timer.textContent = "Score Page";
  viewHighscore();
});

highScore.addEventListener("click", viewHighscore);

function viewHighscore() {
  mainContainer.style.display = "none";
  displayHighScore.style.display = "flex";

  // let initialName = localStorage.getItem("initials");

  var name = document.getElementById("name");
  var score = document.getElementById("score");

  for (let [key, value] of Object.entries(localStorage)) {
    console.log(`${key}: ${value}`);

    const newNameDiv = document.createElement("div");
    const newScoreDiv = document.createElement("div");

    name.appendChild(newNameDiv);
    score.appendChild(newScoreDiv);

    newNameDiv.textContent = key;
    newScoreDiv.textContent = value;
  }
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
    question: "What is meant by this keyword in javascript?",
    answers: [
      "refers to current object",
      "refers to previous object",
      "variable which contains value",
      "none of the above",
    ],
    correctAnswer: "refers to current object",
  },
];

nextQuestion.addEventListener("click", function () {
  j += 1;

  if (j > 0) {
    //remove the old question
    document.getElementById(j - 1).remove();
  }
  if (j >= quizQuestions.length) {
    console.log("test here" + quizQuestions.length);
    alert("no more questions");
    nextQuestion.style.display = "none";
    quizTime = 0;
  } else {
    answerQuestion();
  }
});

function answerQuestion() {
  var body = document.body;

  var question = document.createElement("div");

  questionHeader.setAttribute("id", j);

  questionHeader.textContent = quizQuestions[j].question;
  questionHeader.classList.add("question-header");
  question.appendChild(questionHeader);
  body.appendChild(question);

  var questionResult = document.createElement("div");
  questionResult.classList.add("question-result");

  //loop to create radio buttons for question
  for (i = 0; i < quizQuestions[j].answers.length; i++) {
    var radioContainer = document.createElement("div");

    questionHeader.appendChild(radioContainer);

    radioContainer.classList.add("radio-sub");

    var radioBtn = document.createElement("input");
    radioBtn.setAttribute("type", "radio");
    radioBtn.setAttribute("name", "q[" + j + "]");
    radioBtn.setAttribute("value", quizQuestions[j].answers[i]);
    radioBtn.setAttribute("id", "q[" + j + "]" + "-" + i);
    radioContainer.appendChild(radioBtn);

    var radioLabel = document.createElement("label");
    radioLabel.innerHTML = quizQuestions[j].answers[i];
    radioContainer.appendChild(radioLabel);

    radioBtn.addEventListener("click", function (e) {
      console.log("the click is ", e.target.value);

      document.getElementById(j).appendChild(questionResult);
      console.log("jcopy is " + j);
      var correctChoice = quizQuestions[j].correctAnswer;

      if (e.target.value == correctChoice) {
        console.log("user answer is", e.target.value);
        score += 10;
        console.log("the answer is correct, score is " + score);
        questionResult.textContent = "Correct answer";
      } else {
        score -= 10;
        quizTime -= 10;

        questionResult.textContent = "Wrong answer";
      }
    });
  }

  nextQuestion.style.display = "block";
}
