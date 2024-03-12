// 'use strict';
// // please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor)

// function changeColor() {
//   console.log('Button clicked!'); // feel free to change/delete this line
// }

'use strict';

// 6問目
document.getElementById('color-button').addEventListener('click', changeColor)

const colors = ["lightgreen", "lightblue", "tomato", "plum", "gray"];

function changeColor() {
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}
