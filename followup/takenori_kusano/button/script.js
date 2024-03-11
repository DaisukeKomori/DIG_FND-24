// 'use strict';
// // please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor)

// function changeColor() {
//   console.log('Button clicked!'); // feel free to change/delete this line
// }

'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)

const bodycolor = document.querySelector("body");

const colors = ["fuchsia", "navy", "lime", "silver", "purple"];

const paragraph = document.createElement("p");
paragraph.style.fontSize = "50pt";
paragraph.style.color = "white";
paragraph.style.position = "absolute";
paragraph.style.top = "20pt";

function changeColor() {
  // console.log('Button clicked!'); // feel free to change/delete this line
  const randomcolor = colors[Math.floor(Math.random() * colors.length)];
  bodycolor.style.backgroundColor = randomcolor;
  paragraph.textContent = randomcolor;
  document.body.appendChild(paragraph);
}

const pointer = document.querySelector("button");
pointer.style.cursor = "pointer";