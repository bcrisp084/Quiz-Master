const easyBtn = document.querySelector('#easy')
const hardBtn = document.querySelector('#hard')
const questionContainer = document.querySelector('.question-container')
const startContainer = document.querySelector('.start-container')
const enterInitials = document.querySelector('.enterInitials')
const timer = document.querySelector(".timer")
const header = document.querySelector('.header')
const questionEl = document.querySelector('.question')
const insight = document.querySelector('.insight')
let secondsLeft = 60;
let timeInterval;
let currentIndex;
let score;
const sfxRight = new Audio("assets/sfx/correct.wav");
const sfxWrong = new Audio("assets/sfx/incorrect.wav");



easyBtn.addEventListener("click", easyGame)
hardBtn.addEventListener('click', hardGame)

function easyGame() {
    startContainer.classList.add('hide')
    questionContainer.classList.remove('hide');
    header.classList.add('hide')
    timer.classList.remove('hide')
    currentIndex = 0;
    startTimer();
    loadEasyQuestions();
}

function hardGame() {
    startContainer.classList.add('hide')
    questionContainer.classList.remove('hide');
    header.classList.add('hide')
    timer.classList.remove('hide')
    currentIndex = 0;
    startTimer();
    loadHardQuestions()
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

function loadEasyQuestions(current) {
    const currentQuestion = easyQuestions[currentIndex].question;
    const questionEl = document.querySelector('.question')
    questionEl.innerHTML = currentQuestion
    for (const answer of easyQuestions[currentIndex].answers) {
        const button = document.createElement('button')
        button.setAttribute('data-answer', answer)
        button.setAttribute('id', 'answer-button')
        button.innerHTML = answer
        const btnGrid = document.querySelector('.btn-grid')
        button.addEventListener('click', function (event) {
            const correct = easyQuestions[currentIndex].correctAnswer
            const chosen = button.getAttribute('data-answer')
            console.log('corrrect', correct)
            console.log('chosen', chosen)
            if (correct === chosen) {
                insight.innerHTML = ''
                btnGrid.innerHTML = ''
                questionEl.innerHTML = ''
                const correctInfo = document.createElement('h1')
                correctInfo.textContent = 'Correct'
                correctInfo.setAttribute('class', 'correctInfo')
                insight.appendChild(correctInfo)
                sfxRight.play()
                currentIndex++
                loadEasyQuestions(currentIndex)

            } else {
                insight.innerHTML = ''
                btnGrid.innerHTML = ''
                questionEl.innerHTML = ''
                const incorrectInfo = document.createElement('h1')
                incorrectInfo.textContent = 'Incorrect'
                incorrectInfo.setAttribute('class', 'incorrectInfo')
                insight.appendChild(incorrectInfo)
                sfxWrong.play()
                currentIndex++
                loadEasyQuestions(currentIndex)
            }
        })
        btnGrid.appendChild(button)
    }
}

function loadHardQuestions(current) {
    const currentQuestion = hardQuestions[currentIndex].question;
    const questionEl = document.querySelector('.question')
    questionEl.innerHTML = currentQuestion
    for (const answer of hardQuestions[currentIndex].answers) {
        const button = document.createElement('button')
        button.setAttribute('data-answer', answer)
        button.setAttribute('id', 'answer-button')
        button.innerHTML = answer
        const btnGrid = document.querySelector('.btn-grid')
        button.addEventListener('click', function (event) {
            const correct = hardQuestions[currentIndex].correctAnswer
            const chosen = button.getAttribute('data-answer')
            console.log('corrrect', correct)
            console.log('chosen', chosen)
            if (correct === chosen) {
                insight.innerHTML = ''
                btnGrid.innerHTML = ''
                questionEl.innerHTML = ''
                const correctInfo = document.createElement('h1')
                correctInfo.textContent = 'Correct'
                correctInfo.setAttribute('class', 'correctInfo')
                insight.appendChild(correctInfo)
                sfxRight.play()
                currentIndex++
                loadHardQuestions(currentIndex)
            } else {
                insight.innerHTML = ''
                btnGrid.innerHTML = ''
                questionEl.innerHTML = ''
                const incorrectInfo = document.createElement('h1')
                incorrectInfo.textContent = 'Incorrect'
                incorrectInfo.setAttribute('class', 'incorrectInfo')
                insight.appendChild(incorrectInfo)
                sfxWrong.play()
                currentIndex++
                loadHardQuestions(currentIndex)
            }
        })
        btnGrid.appendChild(button)
    }
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
        question: "What musical term indicates a chord where the notes are played one after another rather than all together?",
        answers: ["A Capella", "Atonal", "Arpeggio", "Baritone"],
        correctAnswer: "Arpeggio",
    },
    {
        question: "What color does gold leaf appear if you hold it up to the light?",
        answers: ["Green", "Bronze", "Silver", "Red"],
        correctAnswer: "Green",
    },
    {
        question: "Who was the first person to suggest Daylight Savings Times?",
        answers: ["Thomas Edison", "Benjamin Franklin", "James Madison", "Alexander Hamilton"],
        correctAnswer: "Benjamin Franklin",
    },
    {
        question: "Emetophobia is the fear of?",
        answers: ["Fear of Feces", "Fear of Mice", "Fear of People", " Fear of Vomit"],
        correctAnswer: " Fear of Vomit",
    },
    {
        question: "What famous actress once tried to hire a hitman to kill her?",
        answers: ["Angelina Jolie", "Demi Moore", "Cameron Diaz", "Sally Field"],
        correctAnswer: "Angelina Jolie",
    },
    {
        question: "What is the only king in a deck of cards without a mustache??",
        answers: ["King of clubs", "King of hearts", "King of spades", "King of diamonds"],
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
]


