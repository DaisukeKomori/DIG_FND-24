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
}

document.getElementById('color-button').addEventListener('click', changeColor);

function changeColor() {
  // ランダムなRGB値を生成
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;

  // ページの背景色をランダムな色に変更
  document.body.style.backgroundColor = randomColor;
}