let leftScore = document.getElementById("left-score")
let rightScore = document.getElementById("right-score")

let numberOne = 0
let numberTwo = 0

function addOneLeft() {
    numberOne += 1
    leftScore.textContent = numberOne 
}

function addTwoLeft() {
    numberOne += 2
    leftScore.textContent = numberOne 
}

function addThreeLeft() {
    numberOne += 3
    leftScore.textContent = numberOne 
}

function addOneRight() {
    numberTwo += 1
    rightScore.textContent = numberTwo
}

function addTwoRight() {
    numberTwo += 2
    rightScore.textContent = numberTwo
}

function addThreeRight() {
    numberTwo += 3
    rightScore.textContent = numberTwo
}

function reset() {
    numberOne = 0
    numberTwo = 0
    leftScore.textContent = 0
    rightScore.textContent = 0
}