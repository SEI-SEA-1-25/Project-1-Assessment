console.log('connected')

// let Input = document.getElementById('#input-number')
let output = document.getElementById(".new-number");
let input = document.getElementById('#input-number')

function add() {
 output + input
}

function subtract() {
   output - input
}



document.querySelector("#add-button").addEventListener("click", function () {
    console.log('hi')
    output.innerText = output + input;
    add()
});


document.querySelector("#subtract-button").addEventListener("click", function () {
    console.log("hi")
    output.innerText = output - input;
    subtract()
});





