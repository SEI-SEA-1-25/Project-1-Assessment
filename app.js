/* Constants */

/* Game Logic Variables and State */
let countDisplay = 0;


/* DOM References */
const countDisplayEl = document.querySelector('#count-display')
const upButtonEl = document.querySelector('#up-button')
const numberInputEl = document.querySelector('#number-input')
const downButtonEl = document.querySelector('#down-button')

/* Functions and Game Logic */
const initialize = (event) => {
    countDisplay = '0'
}
const addOne = (event) => {

}

const subOne = (event) => {

}


/* Event Listeners */
document.addEventListener('DOMContentLoaded', initialize)