// Constants
let count = 0
let inputValue = 1

// DOM references
const displayEl = document.querySelector("#display")
const addEl = document.querySelector("#add")
const subtractEl = document.querySelector("#subtract")
const inputEl = document.querySelector("#input")

// Functions
const newDisplayNum = () => {
    displayEl.innerText = count
}


const newInput = () => {
    inputValue = input.value

}


const plusOne = () => {
    let inputNum = Number(inputValue)
    inputValue = inputNum + count
    count = inputValue
    newDisplayNum()
}

const lessOne = () => {
    let inputNum = Number(inputValue)
    inputValue = count - inputNum
    count = inputValue
    newDisplayNum()
}

// Event listeners
addEl.addEventListener("click", plusOne)
subtractEl.addEventListener("click", lessOne)
document.addEventListener("input", newInput)