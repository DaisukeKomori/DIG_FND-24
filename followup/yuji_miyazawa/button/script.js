// 'use strict';
// // please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor)

// function changeColor() {
//   console.log('Button clicked!'); // feel free to change/delete this line
// }


'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor)

function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line
  let coler1 = Math.ceil(Math.random() * 255);
  let coler2 = Math.ceil(Math.random() * 255);
  let coler3 = Math.ceil(Math.random() * 255);
  let rbgColer = `rgb(${coler1},${coler2},${coler3})`
  document.body.style.backgroundColor = rbgColer;
}

const newParagraph = document.createElement("p");
newParagraph.innerHTML = "";
document.body.appendChild(newParagraph);

function generateWards(){
  newParagraph.innerHTML = newParagraph.innerHTML + "&#" + Number(Math.ceil(Math.random() * 199999));
}

function addBtn() {
  const newBtn = document.createElement("button");
  newBtn.innerText = "generate wards";
  newBtn.style.scale = "auto";
  document.body.appendChild(newBtn);
  newBtn.addEventListener('click', generateWards);
  console.log("New Btn");
}
addBtn();