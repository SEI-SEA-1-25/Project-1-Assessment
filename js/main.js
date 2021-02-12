var displayNum = document.querySelector("#resultDisplay")
var resultStore = 0;
var plusBtn = document.querySelector("#plusBtn")
var minusBtn = document.querySelector("#minusBtn")
var inputValue = document.querySelector("#numValue")

const plusClicked = () => {
    resultStore++
    // inputValue.value = resultStore;
    displayNum.innerText = resultStore
    colorChange()

}

const minusClicked = () => {
    resultStore--
    // inputValue.value = resultStore;
    displayNum.innerText = resultStore
    colorChange()
}

const colorChange = () => {
    if (displayNum.innerText < 0){
        displayNum.style.color = "red"
    } else displayNum.style.color = "black"
}

const initial = () => {
    inputValue.value = "1"
    displayNum.innerText = "0"
}

const numberTyped = () => {
    displayNum.innerText = inputValue.value
    resultStore = inputValue.value
}

plusBtn.addEventListener('click', plusClicked)

minusBtn.addEventListener('click', minusClicked)

window.addEventListener('DOMContentLoaded', initial)

inputValue.addEventListener('keyup', numberTyped)

