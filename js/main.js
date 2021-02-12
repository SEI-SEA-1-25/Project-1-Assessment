/* Constants */


/* DOM References */
let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let input = document.querySelector("#input");
let number = document.querySelector("#number");

/* Variables and State */
// let number1 = parseInt(number.innerText);
// let number2 = parseInt(input.value);

/* Functions and Game Logic */
add = () => {
    let number1 = parseInt(number.innerText);
    let number2 = parseInt(input.value);
    let adding = number1 + number2;
    number.innerText = adding;
    checkValue(adding);
};
subtract = () => {
    let number1 = parseInt(number.innerText);
    let number2 = parseInt(input.value);
    let subtracting = number1 - number2;
    number.innerText = subtracting;
    checkValue(subtracting);
};
checkValue = (num) => {
    if(num < 0) {
        number.classList.add("red")
    } else if (num >= 0) {
        number.classList.remove("red")
    }
    
}

/* Event Listeners */
plus.addEventListener("click", add);
minus.addEventListener("click", subtract);
