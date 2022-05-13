const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const output = document.querySelector('#output')
const input = document.querySelector('#input')
let total = 0


document.addEventListener('DOMContentLoaded', () => {
    output.innerHTML = total
    plus.addEventListener('click', () => {
        output.innerHTML = " "
        total += parseInt(input.value)
        output.innerHTML = `${total}`
    })
    minus.addEventListener('click', () => {
        total -= input.value
        output.innerText = " "
        output.innerText = total
        if(total < 0) {
            output.style.color = "red"
        }
      
    })
    plus.addEventListener('mouseover', (event) => {
        event.target.style.color = 'grey'
        event.target.style.backgroundColor = 'white'
        // setTimeout(function() {
        //     event.target.style.color = ""
        //     event.target.style.backgroundColor = ""
        //   }, 100)
        // }, false)
    })
    plus.addEventListener('mouseout', (event) => {
        event.target.style.color = ''
        event.target.style.backgroundColor = ''
    })
    minus.addEventListener('mouseover', (event) => {
        event.target.style.color = 'grey'
        event.target.style.backgroundColor = 'white'
        // setTimeout(function() {
        //     event.target.style.color = ""
        //     event.target.style.backgroundColor = ""
        //   }, 100)
        // }, false)
    })
    minus.addEventListener('mouseout', (event) => {
        event.target.style.color = ''
        event.target.style.backgroundColor = ''
    })
   
})
console.dir(input)
console.log(output, output.outerHTML)