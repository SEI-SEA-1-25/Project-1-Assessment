// const grab the dom

const add = document.getElementById('add')
const sub = document.getElementById('subtract')
const display = document.getElementById('display')
const input = document.getElementById('input')

// event listener

add.addEventListener('click', () => {
    addNum(parseInt(input.value))
    negNum()
})
sub.addEventListener('click', () => {
    subNum(parseInt(input.value))   
    negNum()
})

// to turn it red reread your countdown timer for project 1
const negNum = () => {
if (count < 0){
    display.style.color = 'red'
    console.log('you are now at negative number')
} else {
    display.style.color = 'black'
    console.log('you are back at positive number')
}
}


let count = 0

// if you're stuck refer back to the udemy course of the calculator you made!

// function for adding

const addNum = (theNum) => {
    count += theNum;
    display.innerText = count;
    return count;
};


// function for subtracting
const subNum = (theNum) => {
    count -= theNum;
    display.innerText = count;
    return count;
    
};


// turn it red if it goes negative









