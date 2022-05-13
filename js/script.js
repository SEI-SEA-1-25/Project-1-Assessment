console.log("hello");
let dispNum = document.querySelector("#displayNum");
let inputF = document.querySelector("#numInput");
console.dir(dispNum);

document.addEventListener("DOMContentLoaded", () => {
  let plusButtonF = function () {
    dispNum.value = +inputF.value + +dispNum.value;
  };
  let minButtonF = function () {
    dispNum.value = -inputF.value - -dispNum.value;
    console.log(dispNum.value);
  };
  let buttonChange = function () {
    document.querySelectorAll("button").style = buttoninverse;
  };

  document.querySelector("#plusBtn").addEventListener("click", plusButtonF);
  document.querySelector("#minBtn").addEventListener("click", minButtonF);
});
