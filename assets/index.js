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
    if (this.textContent !== quizQuestion[currentIndex].answers) {
        secondsLeft -= 5;
    }
    currentIndex++;
    if (currentIndex === quizQuestion.length) {
        questionContainer.style.display = 'none';
        enterInitials.style.display = "block";
        questionContainer.text = "Game Over";
    }
    loadQuestions();
}

const quizQuestion = [
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

