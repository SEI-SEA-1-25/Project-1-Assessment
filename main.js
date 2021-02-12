//Variables//

//Where number outcome appears
const displayNumber = document.querySelector("#displayAnswer");

//Where user can input values
const inputBar = document.querySelector("#input-area");

//Buttons
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");

//game state
i = 0;

//Functions
function addInteger() {
  if (i < 10) {
    i++;
  } else if ((i = 10)) {
    i = 0;
  }
  displayNumber.innerText = i;
  inputBar.innerText = i;
}
function subtractInteger() {
  if (i < 10) {
    i--;
  } else if ((i = 10)) {
    i = 0;
  }
  displayNumber.innerText = i;
  inputBar.innerText = i;
}

//Event Listeners
plusButton.addEventListener("click", addInteger);
minusButton.addEventListener("click", subtractInteger);
