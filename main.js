let counter = document.getElementById("counter");
let plusBtn = document.getElementById("plusbtn");
let minusBtn = document.getElementById("minusbtn");
let number = document.getElementById("number");
// number = 10;
console.log(number);

// plusBtn.addEventListener("click", addnum);

function addnum() {
  counter.innerText = counter.innerText + number.innerText;
}

// minusBtn.addEventListener("click", addnum);

function minusnum() {
  counter.innerText = counter.innerText - number.innerText;
}
