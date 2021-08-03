const startBtn = document.querySelector('#start')
const questionContainer = document.querySelector('.question-container')
const startContainer = document.querySelector('.start-container')
const timer = document.querySelector(".timer")
let secondsLeft = 60;
let timeInterval;
let currentIndex;


startBtn.addEventListener("click", startGame)

function startGame() {
    startBtn.classList.add('hide');
    startContainer.classList.add('hide')
    questionContainer.classList.remove('hide');
    currentIndex = 0;
    startTimer();
    loadQuestions();
}

function startTimer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft;
        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function loadQuestions() {
    document.querySelector(".question").textContent = quizQuestion[currentIndex].question;
    document.querySelector("#choiceA").textContent = quizQuestion[currentIndex].answers[0];
    document.querySelector("#choiceB").textContent = quizQuestion[currentIndex].answers[1];
    document.querySelector("#choiceC").textContent = quizQuestion[currentIndex].answers[2];
    document.querySelector("#choiceD").textContent = quizQuestion[currentIndex].answers[3];

}

var answerBtns = document.querySelectorAll(".btn")
for (var i = 0; i < answerBtns.length; i++) {
    answerBtns[i].addEventListener("click", checkAnswer);
}
//Validating answers and checks quiz progress
function checkAnswer() {
    if (this.textContent === quizQuestion[currentIndex].answers) {
        secondsLeft += 15;
    }
    else {
        secondsLeft -= 15;
    }
    currentIndex++;
    if (currentIndex === quizQuestion.length) {
        questionContainer.style.display = 'none';
        enterInitials.style.display = "block";
    }
    loadQuestions();
}

const quizQuestion = [
    {
        question: 'How many licks does it take to get to the center of a tootsie pop',
        answers: ["10", "14", "99", "477"],
        correctAnswer: '477',
    },
    {
        question: '',
        answers: [],
        correctAnswer: '',
    },
    {
        question: '',
        answers: [],
        correctAnswer: '',
    },
    {
        question: '',
        answers: [],
        correctAnswer: '',
    },
    {
        question: '',
        answers: [],
        correctAnswer: '',
    },
    {
        question: '',
        answers: [],
        correctAnswer: '',
    },
    {
        question: '',
        answers: [],
        correctAnswer: '',
    },
    {
        question: '',
        answers: [],
        correctAnswer: '',
    },
]

