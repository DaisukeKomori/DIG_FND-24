// 'use strict';
// // please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor)

// function changeColor() {
//   console.log('Button clicked!'); // feel free to change/delete this line
// }

'use strict';
// please do not delete the 'use strict' line above
const getTime = () => {
  var now  = new Date();
  var year = now.getFullYear();
  var mon  = now.getMonth()+1; //１を足すこと
  var day  = now.getDate();
  var hour = now.getHours();
  var min  = now.getMinutes();
  var sec  = now.getSeconds();

  //出力用
  var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒";
  return s;
}
const bodyElements = document.getElementsByTagName('body');
const par          = document.createElement('p');
bodyElements[0].appendChild(par)
par.style.bottom     = "0px";
par.style.right      = "0px";
par.style.fontColor  = "black";
//
const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
const randomInt    = max => Math.floor(Math.random() * max);
const drawTime     = () => par.innerText      = getTime();
const fontSizeCng  = () => par.style.fontSize = String(randomInt(30) + 5)+"px"
let   prevColor = undefined
let   color     = undefined

const button    = document.getElementById('color-button')
button.style.margin  = "center";
button.style.position= "fixed";
button.addEventListener('click', changeColor);

function changeColor() {
  do {
    color = colors[randomInt(colors.length)];
  } while(prevColor === color);
  bodyElements[0].style.backgroundColor = color;
  prevColor = color;
  //
  drawTime()
  fontSizeCng()
  console.log('Button clicked!'); // feel free to change/delete this line
}