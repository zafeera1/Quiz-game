
const questions = [
    {
        question: "Which chemical formula is both an empirical formula and a molecular formula?",
        answers: ["CH4", "C2H6", "CH3COOH", "CH3CH2COOCH3"],
        correctAnswer: 0
    },
    {
        question: "What products are obtained with CH4(g) burns completely in an excess of oxygen?",
        answers: ["CO and H2O", "CO and C", "CO2 and H2O", "CO2 and CO"],
        correctAnswer: 2
    },
    {
        question: "As a chemical bond forms between 2 hydrogen atoms in a system, energy is released and the stability of the system",
        answers: ["Increases", "Decreases", "Remains the same", "Increases at first, then decreases"],
        correctAnswer: 0
    },
    {
        question: "A hydrocarbon double bonds and no triple bond configuration is called an ______.",
        answers: ["Alkene", "Alkyne", "Alkane", "Alkali"],
        correctAnswer: 0
    },
    {
        question: "Which of the following is the molecular formula for butane?",
        answers: ["C2H", "C2H6", "C4H8", "C4H10"],
        correctAnswer: 3
    }
];

const quizContainer = document.getElementById('quiz-container');
const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const answersContainer = document.getElementById('answers-container');
const timeRemaining = document.getElementById('time-remaining');
let timer;
let timeLeft = 60; 
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    startBtn.style.display = 'none';
    timer = setInterval(updateTimer, 1000);
    displayQuestion();
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    answersContainer.innerHTML = ''; 

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(index));
        answersContainer.appendChild(button);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++; 
    } else {
        
        timeLeft -= 10;
        if (timeLeft < 0) {
            timeLeft = 0; 
        }
        timeRemaining.textContent = timeLeft; 
    }


    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function updateTimer() {
    timeLeft--;
    timeRemaining.textContent = timeLeft;

    if (timeLeft === 0) {
        clearInterval(timer);
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    
    window.location.href = 'score.html?score=' + score;
}

startBtn.addEventListener('click', startQuiz);



