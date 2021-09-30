const easyBtn = document.querySelector('#easy')
const hardBtn = document.querySelector('#hard')
const questionContainer = document.querySelector('.question-container')
const startContainer = document.querySelector('.start-container')
const enterInitials = document.querySelector('.enterInitials')
const timer = document.querySelector(".timer")
const header = document.querySelector('.header')
let secondsLeft = 60;
let timeInterval;
let currentIndex;
let score;



easyBtn.addEventListener("click", startGame)
hardBtn.addEventListener('click', startGame)

function startGame() {
    startBtn.classList.add('hide');
    startContainer.classList.add('hide')
    questionContainer.classList.remove('hide');
    header.classList.add('hide')
    timer.classList.remove('hide')
    currentIndex = 0;
    startTimer();
    loadEasyQuestions();
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
    const currentQuestion = easyQuestions[currentIndex].question;
    const questionEl = document.querySelector('.question')
    questionEl.textContent = currentQuestion

}




function gameOver() {
    if (currentIndex > quizQuestion.length) {
        clearInterval(timerInterval)
        score = timer.textContent;
        secondsLeft = 0;
        questionContainer.classList.add('hide')
        window.localStorage.setItem("score", JSON.stringify(score))
        const gameEnded = confirm("Game Over. Your score is " + score)
        if (gameEnded) {
            startContainer.classList.remove("hide")
            startBtn.classList.remove("hide")
            timer.textContent = "60";
            secondsLeft = 60;
        }
    }
}

const easyQuestions = [
    {
        question: "What geometric shape is used in MMA sports?",
        answers: ["pentagon", "hexagon", "square", "octagon"],
        correctAnswer: "octagon",
    },
    {
        question: "what is Cynophobia?",
        answers: ["fear of heights", "fear of salt", "fear of dogs", "fear of cars"],
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
]

const hardQuestions = [
    {
        question: "What geometric shape is used in MMA sports?",
        answers: ["pentagon", "hexagon", "square", "octagon"],
        correctAnswer: "octagon",
    },
    {
        question: "what is Cynophobia?",
        answers: ["fear of heights", "fear of salt", "fear of dogs", "fear of cars"],
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
]


