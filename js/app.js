console.log('linked')
/* Constants */
const num = document.querySelector("#input").value;
const countDisplay = document.querySelector('#count-display').value;
//setting input value to 1 to begin
document.querySelector("#input").value = 1;
// console.log(document.querySelector('h1').value)
/* Event Listeners */
document.querySelector('#plus').addEventListener('click', function(){
    let newNum = countDisplay + num;
    document.querySelector('#count-display').value = newNum;
})

document.getElementById('minus').addEventListener('click', function(){
    let newNum = parseInt(countDisplay) - parseInt(num);
    document.querySelector('#count-display').value = newNum;
})