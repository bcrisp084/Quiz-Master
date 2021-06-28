const startBtn = document.querySelector('.start')
const questionContainer = document.querySelector('#questionContainer')


startBtn.addEventListener('click', startGame())

function startGame() {
    startBtn.classList.add('hide')
    questionContainer.classList.add('hide')
    console.log(startBtn)
    
}
