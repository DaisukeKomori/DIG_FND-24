'use strict';
// please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor)

// function changeColor() {
//   console.log('Button clicked!'); // feel free to change/delete this line
// }

//6
document.getElementById('color-button').addEventListener('click', changeColor);

function changeColor() {
  let random1 = Math.ceil(Math.random()*16777216);
  document.body.style.backgroundColor = `#${random1}`;

  //ボタン色変更
  document.getElementById('color-button').style.backgroundColor = "green";
  document.getElementById('color-button').style.color = "yellow";
  //end
  console.log('Button clicked!'); 
}

//配置変更
document.body.style.justifyContent = "space-around";
//ボタン追加
const button = document.createElement("button");
button.textContent = "講師の皆様";
document.body.appendChild(button);

//イベント追加
button.addEventListener('click', thankYou);

//イベントの中身
const h1 = document.createElement("h1");
h1.style.fontSize = "40px";
h1.style.display = "block";
h1.style.width = "400%";
h1.style.textAlign = "center";

function thankYou(){
  h1.innerHTML = "🏋️‍♀️長い間ありがとうございました。🏋️‍♂️</br>🎉お疲れ様でした🎉";
  document.getElementById('color-button').appendChild(h1);
}
