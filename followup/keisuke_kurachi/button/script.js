'use strict';
// please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor)

// function changeColor() {
//   console.log('Button clicked!'); // feel free to change/delete this line
// }

////////// 問６ //////////
const button = document.getElementById('color-button')

button.addEventListener('click', changeColor);
button.addEventListener('mouseenter', enterChangeColor);
button.addEventListener('mouseleave', leaveChangeColor);


function changeColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function enterChangeColor() {
    button.style.background = 'red';
    button.style.fontSize = "40pt";
    button.style.height= "80px";
    button.style.width = "400px";
    button.innerText = "Let's go!";
}

function leaveChangeColor() {
    button.style.background = 'white';
    button.style.fontSize = "20pt";
    button.style.height= "50px";
    button.style.width = "200px";
    button.innerText = "Change color";
    button.style.fontSize = "20pt";
}