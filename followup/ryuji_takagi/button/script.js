// 'use strict';
// please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor)

// function changeColor() {
//   console.log('Button clicked!'); // feel free to change/delete this line
// }

//課題6
//ファイル名 script.js


'use strict';
// please do not delete the 'use strict' line above
const imgElement = document.createElement('img');
const linkElement = document.createElement('a');
const textElement = document.createElement('p')
const btn = document.getElementById('color-button').addEventListener('click', changeColor)
const colorArray = ['red', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink']
document.body.appendChild(textElement);
function changeColor() {
  let random = Math.floor(Math.random() * 6);
  document.querySelector('body').style.backgroundColor = colorArray[random];
  textElement.innerText = String(colorArray[random]) + ' Juice!'
}
document.body.appendChild(imgElement);
imgElement.src = 'https://loosedrawing.com/assets/illustrations/png/367.png';
imgElement.alt = 'colorful-drink';
document.body.appendChild(linkElement);
linkElement.href = 'https://loosedrawing.com/';
linkElement.target = '_blank';
linkElement.textContent = 'Posted by Loose Drawing';

