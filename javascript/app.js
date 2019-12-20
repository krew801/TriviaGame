const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById
('question-container')

startButton.addEventListener('click', startGame)

startGame = () => {
startButton.classList.add('hide')
questionContainerElement.classList.remove('hide')
}

setNextQuestion = () =>{

}

selectAnswer = () => {

}

$(document).ready(() => {

    const questions = [
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        },
        {
            prompt: "What is the date setting of the original Call of Duty?",
            choice: ["World War 2", "The Civil War", "World War 1", "Vietnam War"],
            answer: 1
        }
)