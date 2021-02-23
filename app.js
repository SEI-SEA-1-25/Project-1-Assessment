/* Constants */

/* Game Logic Variables and State */
let countDisplay = 0;


/* DOM References */
const countDisplayEl = document.querySelector('#count-display')
const upButtonEl = document.querySelector('#up-button')
const numberInputEl = document.querySelector('#number-input')
const downButtonEl = document.querySelector('#down-button')

/* Functions and Game Logic */
// const initialize = (event) => {
//     countDisplay = '0'
// }


const addOne = (event) => {
    // need to add one to countDisplay and append to DOM
    // let addValue = upButtonEl;
    // addValue.innerText 
    let getValue = parseInt(numberInputEl.value)
        // console.log(getValue)
    countDisplay = countDisplay + getValue


    countDisplayEl.innerText = countDisplay

}

const subOne = (event) => {
    // need to sub one from countDisplay and append to DOM
    // let subValue = downButtonEl;
    let getValue = parseInt(numberInputEl.value)
        //console.log(getValue)
    countDisplay = countDisplay - getValue
    countDisplayEl.innerText = countDisplay

}

// const addOne = upButtonEl.addEventListener('click')





/* Event Listeners */
// DOM Loaded and initiate 
//document.addEventListener('DOMContentLoaded', initialize)
// add one
upButtonEl.addEventListener('click', addOne)
    // subtract one
downButtonEl.addEventListener('click', subOne)