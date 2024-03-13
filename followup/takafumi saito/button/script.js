// 'use strict';
// // please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor)

// function changeColor() {
//   console.log('Button clicked!'); // feel free to change/delete this line
// }

'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor);


let body = document.getElementsByTagName('body');
let button = document.getElementById("color-button");
let i = 0;

function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line

  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);
  body[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  if (i === 0) {
    setInterval(buttonMove, 1000);
    i++;
  }
}

function buttonMove() {
  button.style.position = "fixed";
  button.style.left = `${Math.floor(Math.random()*61)+20}%`;
  button.style.top = `${Math.floor(Math.random()*61)+20}%`;
}
