/* Constants */
const INITIAL_COUNT = 0
const INITIAL_INPUT = 1

/* DOM References */
let plusButton = document.querySelector(".plus-button");
let minusButton = document.querySelector(".minus-button");
let countDisplay = document.querySelector(".count-display");
let input = document.querySelector("#input");

/* Functions and Game Logic */

const initialize = () => {
      input.value = INITIAL_INPUT
      countDisplay.textContent = INITIAL_COUNT
}

const addValue = () => {
      let newValue = parseInt(countDisplay.innerText) + parseInt(input.value)
      countDisplay.innerText = newValue
      if(newValue >= 0) {
            countDisplay.classList.remove("red");
      }
}

const subtractValue = () => {
      let newValue = parseInt(countDisplay.innerText) - parseInt(input.value)
      countDisplay.innerText = newValue
      if(newValue < 0) {
            countDisplay.classList.add("red");
      }
}

const reversePlusColor = () => {
            plusButton.className = "reverse-color" 
      
}

const reverseMinusColor = () => {
      minusButton.className = "reverse-color"
}

const normalPlusColor = () => {
      plusButton.className = "plus-button" 
      
}

const normalMinusColor = () => {
      minusButton.className = "minus-button"
}

/* Event Listeners */
document.addEventListener("DOMContentLoaded", initialize);
plusButton.addEventListener("click", addValue);
minusButton.addEventListener("click", subtractValue);
plusButton.addEventListener("mouseenter", reversePlusColor);
minusButton.addEventListener("mouseenter", reverseMinusColor);
plusButton.addEventListener("mouseleave", normalPlusColor);
minusButton.addEventListener("mouseleave", normalMinusColor);
