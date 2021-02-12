// let container = document.querySelector('.container')

// let displayValue = []

// let addBtn = document.querySelector('#add')
// let subBtn = document.querySelector('#subtract')



function addBtn() {
    var value = parseInt(document.getElementById('textbox').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('textbox').value = value;
}


function subBtn() {
    var value = parseInt(document.getElementById('textbox').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('textbox').value = value;
}

const displayValue = (value) => {
    let div = document.createElement('div')
    let h2El = document.createElement('h2')
    h2El.textContent = value;
    div.appendChild(h2El)
}

// function subBtn() {
//     document.getElementById('textbox').stepDown()
// }

// addBtn.addEventListener('click', function () {
//     clicks += 1;
    // document.getElementById('textbox').innerText = ''
// })

// function display() {
//     for (let index = 0; index < displayValue.length; index++) {
//         displayValue[index].render()
//     }
// }