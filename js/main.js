// alert("Hello World");
let selector = document.querySelector("#div1");
let selectortwo = document.querySelector("#div2");
let selectorThree = document.querySelector("#div3");
let aboveDiv = document.querySelector("#abovediv");
let parentDiv = document.querySelector("#selectmetwo");
console.log(parentDiv);

let count = 1;
aboveDiv.textContent = 0;


//function and eventlisteners

function create(){
    let inp = document.createElement("input");
    let firstDiv = document.createElement("div");
    let thirdDiv = document.createElement("div");

    //Set attr
    inp.setAttribute("id", "div2");
    firstDiv.setAttribute("id", "div1");
    firstDiv.setAttribute("class", "selected");
    thirdDiv.setAttribute("id", "div3");
    thirdDiv.setAttribute("class", "selected");

    //Add styles
    inp.classList.add("middiv");
    firstDiv.classList.add("selected");
    thirdDiv.classList.add("selected");

    //select divs

    firstDiv = parentDiv.childNodes[0]= firstDiv;
    inp = parentDiv.childNodes[1]= inp;
    inp.value = 1;
    thirdDiv = parentDiv.childNodes[2]= thirdDiv;
    parentDiv.append(firstDiv);
    parentDiv.append(inp);
    parentDiv.append(thirdDiv);

    firstDiv.textContent = "-";
    thirdDiv.textContent = "+";

    // listen to the DOM

    firstDiv.addEventListener("click", ()=>{
        // = parseInt(aboveDiv.textContent -= count);
    return subNum;


    })
}
create();




// selector.addEventListener("click", ()=>{
//     subNum = parseInt(aboveDiv.textContent -= count);
//     return subNum;
// });

// selectorThree.addEventListener("click", ()=>{
//     addNum = parseInt(aboveDiv.textContent += count);
//     return addNum;
//     console.log(addNum);
// });



