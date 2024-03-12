// 'use strict';
// // please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor)

// function changeColor() {
//   console.log('Button clicked!'); // feel free to change/delete this line
// }

'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changBackgroundColor )
document.getElementById('color-button').addEventListener('click', changeStringBuckColor )
document.getElementById('color-button').addEventListener('click', changeStringSize )

function colorRandom(){
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

function changBackgroundColor() {
  document.body.style.backgroundColor = colorRandom();
}

function changeStringBuckColor() {
  document.getElementById('color-button').style.backgroundColor = colorRandom();
}

function changeStringSize() {
  const size = Math.floor(Math.random() * 100);
  document.getElementById('color-button').style.fontSize = size + "px";
}