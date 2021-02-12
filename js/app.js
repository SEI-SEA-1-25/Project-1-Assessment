

/* DOM Refrences */
// plusButton = document.getElementById('plusButton')
// minusButton = document.getElementById('minusButton')


/* I got sidetracked with something else and lost some time */
inputNum = document.getElementById('input-form').value
outputNum = document.getElementById('output-num').innerText

counter = 0;

}
const initialize = (event) => {
    inputNum.addEventListener('input', updateValue);
}


const updateValue = (e) => {
  log.textContent = e.target.value;
  listenForIncDec()
}


const listenForIncDec = () => {

}
const upDateDOM = () => {
       

}
const initialize = (event) => {
    inputNum.addEventListener('input', updateValue);
}



const incrementNum = (event) => {

    parsedOutput = parseInt(outputNum);
    parsedOutput = parsedOutput + 1;
    
}

const = decrementNum = (event) => {

}



/* Event Listeners */

document.addEventListener('DOMContentLoaded', initialize)
document.getElementById('plusButton').addEventListener('click', incrementNum)
document.getElementById('minusButton').addEventListener('click', decrementNum)