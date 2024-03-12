// 'use strict';
// // please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor)

// function changeColor() {
//   console.log('Button clicked!'); // feel free to change/delete this line
// }

'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)
const colors = ['pink', 'gray', 'brown', 'blue', 'aqua', 'black', 'blue' , 'fuchsia', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'white'];

function changeColor() {
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  console.log('Button clicked!'); // feel free to change/delete this line
}
