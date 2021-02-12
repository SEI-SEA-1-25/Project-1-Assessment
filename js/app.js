console.log("project assessment")

plusButtonEl = document.querySelector("#plus")
minusButtonEl = document.querySelector("#minus")
inputEl = document.querySelector("#input")
outputEl = document.querySelector("#output")

// define state
let currentAmount = 0

inputEl.value = 1

function minusAndDisplay(){
    let minusAmount = inputEl.value
    currentAmount -= minusAmount
    console.log(minusAmount)
    outputEl.innerText = currentAmount

}

function plusAndDisplay(){
    let plusAmount = parseFloat(inputEl.value)
    currentAmount += plusAmount
    outputEl.innerText = currentAmount
}

minusButtonEl.addEventListener("click",minusAndDisplay)
plusButtonEl.addEventListener("click",plusAndDisplay)


plusButtonEl.style.color = "white";
plusButtonEl.style.background_color = "gray";


let counter = 0
function plusSwapBackgroundColors(){
    console.log("swap colors")

    if(counter%2 === 0){
    plusButtonEl.style.color = "gray";
    plusButtonEl.style.backgroundColor = "white";
    }
    else{
        plusButtonEl.style.color = "white";
        plusButtonEl.style.backgroundColor = "gray";
    }
    counter ++




}

//was not able to access element 'minusButtonEl.style.color' so had to do hacky fix with counter

let counter2 = 0
function minusSwapBackgroundColors(){
    console.log("swap colors")

    if(counter2%2 === 0){
        minusButtonEl.style.color = "gray";
        minusButtonEl.style.backgroundColor = "white";
    }
    else{
        minusButtonEl.style.color = "white";
        minusButtonEl.style.backgroundColor = "gray";
    }
    counter2 ++


}

plusButtonEl.addEventListener("mouseover",plusSwapBackgroundColors)
minusButtonEl.addEventListener("mouseover",minusSwapBackgroundColors)

plusButtonEl.addEventListener("mouseleave",plusSwapBackgroundColors)
minusButtonEl.addEventListener("mouseleave",minusSwapBackgroundColors)


function makeRed(){
    if(currentAmount < 0){
        outputEl.style.color = "red"
        console.log("switch color to red")
    } else{
        outputEl.style.color = "black"
    }
}
plusButtonEl.addEventListener("click",makeRed)
minusButtonEl.addEventListener("click",makeRed)