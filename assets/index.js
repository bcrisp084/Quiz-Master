const startBtn = document.querySelector('#start')
const questionContainer = document.querySelector('#iniatialContainer')


startBtn.addEventListener("click", startGame)

function startGame() {
    startBtn.classList.add('hide');

}
console.log(startBtn)


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

