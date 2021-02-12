console.log('linked')
/* Constants */
const num = document.querySelector("#input").value;
//setting input value to 1 to begin
document.querySelector("#input").value = 1;
/* Game Logic Variables and State */

/* DOM References */

/* Functions and Game Logic */

/* Event Listeners */
document.getElementById('plus').addEventListener('click', function(){
    document.querySelector('#count-display').value = num + document.querySelector('#input').value
})

// document.getElementById('minus').addEventListener('click', function(){
//     value = value - num 
// })