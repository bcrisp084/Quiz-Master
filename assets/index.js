const easyBtn = document.querySelector("#easy");
const hardBtn = document.querySelector("#hard");
const questionContainer = document.querySelector(".question-container");
const startContainer = document.querySelector(".start-container");
const enterInitials = document.querySelector(".enterInitials");
const timer = document.querySelector(".timer");
const header = document.querySelector(".billboard");
const questionEl = document.querySelector(".question");
const insight = document.querySelector(".insight");
const scoreCount = document.querySelector(".scoreCount");
const highscore = document.querySelector(".highscore");
let secondsLeft = 60;
let timerInterval;
let currentIndex;
let score = 0;
const sfxRight = new Audio("assets/sfx/correct.wav");
const sfxWrong = new Audio("assets/sfx/incorrect.wav");

easyBtn.addEventListener("click", easyGame);
hardBtn.addEventListener("click", hardGame);

function easyGame() {
  highscore.classList.add("hide");
  startContainer.classList.add("hide");
  questionContainer.classList.remove("hide");
  scoreCount.classList.remove("hide");
  header.classList.add("hide");
  timer.classList.remove("hide");
  currentIndex = 0;
  startTimer();
  loadEasyQuestions();
}

function hardGame() {
  startContainer.classList.add("hide");
  questionContainer.classList.remove("hide");
  scoreCount.classList.remove("hide");
  header.classList.add("hide");
  timer.classList.remove("hide");
  currentIndex = 0;
  startTimer();
  loadHardQuestions();
}

function startTimer() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = secondsLeft;
    if (secondsLeft === 0) {
      timer.textContent = 0;
      clearInterval(timerInterval);
    }
  }, 1000);
}

function loadEasyQuestions() {
  scoreCount.textContent = `Score: ${score}`;
  if (currentIndex >= easyQuestions.length) {
    gameOver();
    return;
  }
  const currentQuestion = easyQuestions[currentIndex].question;
  const questionEl = document.querySelector(".question");
  questionEl.innerHTML = currentQuestion;
  for (const answer of easyQuestions[currentIndex].answers) {
    const button = document.createElement("button");
    button.setAttribute("data-answer", answer);
    button.setAttribute("id", "answer-button");
    button.innerHTML = answer;
    const btnGrid = document.querySelector(".btn-grid");
    button.addEventListener("click", function (event) {
      const correct = easyQuestions[currentIndex].correctAnswer;
      const chosen = button.getAttribute("data-answer");
      if (correct === chosen) {
        score++;
        insight.innerHTML = "";
        btnGrid.innerHTML = "";
        questionEl.innerHTML = "";
        sfxRight.play();
        currentIndex++;
        loadEasyQuestions(currentIndex);
      } else {
        insight.innerHTML = "";
        btnGrid.innerHTML = "";
        questionEl.innerHTML = "";
        sfxWrong.play();
        currentIndex++;
        loadEasyQuestions(currentIndex);
      }
      if (correct !== chosen && secondsLeft > 0) {
        secondsLeft = secondsLeft - 5;
      }
    });
    btnGrid.appendChild(button);
  }
}

function loadHardQuestions() {
  scoreCount.textContent = `Score: ${score}`;
  if (currentIndex >= hardQuestions.length) {
    gameOver();
    return;
  }
  const currentQuestion = hardQuestions[currentIndex].question;
  const questionEl = document.querySelector(".question");
  questionEl.innerHTML = currentQuestion;
  for (const answer of hardQuestions[currentIndex].answers) {
    const button = document.createElement("button");
    button.setAttribute("data-answer", answer);
    button.setAttribute("id", "answer-button");
    button.innerHTML = answer;
    const btnGrid = document.querySelector(".btn-grid");
    button.addEventListener("click", function (event) {
      const correct = hardQuestions[currentIndex].correctAnswer;
      const chosen = button.getAttribute("data-answer");
      if (correct === chosen) {
        score++;
        insight.innerHTML = "";
        btnGrid.innerHTML = "";
        questionEl.innerHTML = "";
        sfxRight.play();
        currentIndex++;
        loadHardQuestions(currentIndex);
      } else {
        insight.innerHTML = "";
        btnGrid.innerHTML = "";
        questionEl.innerHTML = "";
        sfxWrong.play();
        currentIndex++;
        loadHardQuestions(currentIndex);
      }
      if (correct !== chosen && secondsLeft > 0) {
        secondsLeft = secondsLeft - 5;
      }
    });
    btnGrid.appendChild(button);
  }
}

function gameOver() {
  clearInterval(timerInterval);
  window.location.href = "Highscore.html";
}

const easyQuestions = [
  {
    question: "What geometric shape is used in MMA sports?",
    answers: ["pentagon", "hexagon", "square", "octagon"],
    correctAnswer: "octagon",
  },
  {
    question: "what is Cynophobia?",
    answers: [
      "fear of heights",
      "fear of salt",
      "fear of dogs",
      "fear of cars",
    ],
    correctAnswer: "fear of dogs",
  },
  {
    question: "Which animal can be seen of a Porsche logo?",
    answers: ["lion", "Elephant", "Horse", "Cheetah"],
    correctAnswer: "Horse",
  },
  {
    question: "What is the name of Batman's sidekick?",
    answers: ["Robin", "Reggie", "Larry", "Oscar"],
    correctAnswer: "Robin",
  },
  {
    question: "What was the first soft Drink in space?",
    answers: ["Pepsi", "Mountain Dew", "Coca Cola", "Sprite"],
    correctAnswer: "Coca Cola",
  },
  {
    question: "Which is the only edible food that never goes bad?",
    answers: ["Jello", "Honey", "Twinkies", "Marshmallows"],
    correctAnswer: "Honey",
  },
  {
    question: "What was the first toy to be advertised on TV?",
    answers: ["GI Joe", "Cabbage patch kids", "Alf", "Mr Potato Head"],
    correctAnswer: "Mr Potato Head",
  },
  {
    question: "What can be broken but is never held?",
    answers: ["A heart", "A promise", "A dance", "Glass"],
    correctAnswer: "A promise",
  },
];

const hardQuestions = [
  {
    question:
      "What musical term indicates a chord where the notes are played one after another rather than all together?",
    answers: ["A Capella", "Atonal", "Arpeggio", "Baritone"],
    correctAnswer: "Arpeggio",
  },
  {
    question:
      "What color does gold leaf appear if you hold it up to the light?",
    answers: ["Green", "Bronze", "Silver", "Red"],
    correctAnswer: "Green",
  },
  {
    question: "Who was the first person to suggest Daylight Savings Times?",
    answers: [
      "Thomas Edison",
      "Benjamin Franklin",
      "James Madison",
      "Alexander Hamilton",
    ],
    correctAnswer: "Benjamin Franklin",
  },
  {
    question: "Emetophobia is the fear of?",
    answers: [
      "Fear of Feces",
      "Fear of Mice",
      "Fear of People",
      " Fear of Vomit",
    ],
    correctAnswer: " Fear of Vomit",
  },
  {
    question: "What famous actress once tried to hire a hitman to kill her?",
    answers: ["Angelina Jolie", "Demi Moore", "Cameron Diaz", "Sally Field"],
    correctAnswer: "Angelina Jolie",
  },
  {
    question: "What is the only king in a deck of cards without a mustache??",
    answers: [
      "King of clubs",
      "King of hearts",
      "King of spades",
      "King of diamonds",
    ],
    correctAnswer: "King of hearts",
  },
  {
    question: "What is the little dot above a lowercase “i” or “j” called?",
    answers: ["Tilda", "Dot", "Tittle", "Tempe"],
    correctAnswer: "Tittle",
  },
  {
    question: "What country has competitive office chair racing?",
    answers: ["United States", "Russia", "Turkey", "Japan"],
    correctAnswer: "Japan",
  },
];
