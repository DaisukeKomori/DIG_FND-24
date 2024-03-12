// 'use strict';
// // please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor)

// function changeColor() {
//   console.log('Button clicked!'); // feel free to change/delete this line
// }

'use strict';
// please do not delete the 'use strict' line above

document.getElementById('color-button').addEventListener('click', changeColor);

// function changeColor() {
//   let color = randmColor();
//   document.body.style.backgroundColor = color;
//   let button = document.getElementById('color-button');
//   button.innerHTML = `Change color <br>現在の色コード: ${color}`;
//   button.style.fontSize = '16px';
//   document.body.style.transition = 'background-color 0.5s ease';

//   // アニメーション開始
//   button.style.transform = 'scale(0.95)';
//   button.style.transition = 'transform 0.5s ease';
//   button.style.opacity = '0.5';

//   // アニメーション終了後に元の状態に戻す
//   setTimeout(() => {
//     button.style.transform = 'scale(1)';
//   }, 500); 

//   setTimeout(() => {
//     button.style.opacity = '1';
//   }, 500);

// }

function changeColor() {
  let color = randmColor();
  document.body.style.backgroundColor = color;
  let button = document.getElementById('color-button');
  button.innerHTML = `Change color <br>現在の色コード: ${color}`;
  button.style.fontSize = '16px';
  document.body.style.transition = 'background-color 0.5s ease';

  // アニメーション開始
  setAnimation(button);
  // button.style.transform = 'scale(0.95)';
  // button.style.transition = 'transform 0.5s ease';
  // button.style.opacity = '0.5';

  // アニメーション終了後に元の状態に戻す
  // setTimeout(() => {
  //   button.style.transform = 'scale(1)';
  // }, 500); 

  // setTimeout(() => {
  //   button.style.opacity = '1';
  // }, 500);
}

function setAnimation(button) {
  // アニメーション開始
  button.style.transform = 'scale(0.95)';
  button.style.transition = 'transform 0.5s ease';
  button.style.opacity = '0.5';
  // アニメーション終了後に元の状態に戻す
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 500); 

  setTimeout(() => {
    button.style.opacity = '1';
  }, 500);
}

// ランダムに色コードを取得する関数
function randmColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
}

// カーソルの変更
document.getElementById("color-button").style.cursor = 'pointer';