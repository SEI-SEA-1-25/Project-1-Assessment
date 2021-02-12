let buttonAdd =document.querySelector('.add');
let buttonMinus =document.querySelector('.sub');
let resultInput =document.querySelector('.dis');
let inputValue =document.querySelector('.num');
let result =0;

//intitial view in browser

intit =() => {
    resultInput.innerText = '0';
    inputValue.innerText ='1';
}

buttomAdd.addEventListener('click', function() {
    result = inputValue.value +1;
    resultInput.appendChild(result);
    resultInput.innerText =result;
})


buttomMinus.addEventListener('click', function() {
    result = inputValue.value - 1;
    resultInput.appendChild(result);
    resultInput.innerText =result;
})

document.addEventListener('DOMContentLoaded', intit);