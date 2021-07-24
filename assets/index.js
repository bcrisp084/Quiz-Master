const startBtn = document.querySelector('#start')
const questionContainer = document.querySelector('.question-container')
const startContainer = document.querySelector('.start-container')
const timer = document.querySelector(".timer")
let secondsLeft = 60;
let timeInterval;


startBtn.addEventListener("click", startGame)

function startGame() {
    startBtn.classList.add('hide');
    startContainer.classList.add('hide')
    questionContainer.classList.remove('hide')
    startTimer()
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

}

const quizQuestion = [
    {
        question: 'How many licks does it take to get to the center of a tootsie pop',
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
    {
        question: '',
        answers: [],
        correctAnswer: '',
    },
]

