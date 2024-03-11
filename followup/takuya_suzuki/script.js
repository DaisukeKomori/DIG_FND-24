'use strict'
// Please don't delete the 'use strict' line above
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}

//1
function evenOrOdd(numArray,boolean){
  if(boolean === true){
    return numArray.filter((num) => num % 2 === 0);
  }else if (boolean === false){
    return numArray.filter((num) => num % 2 === 1 || num % 2 === -1);
  }
}

test(evenOrOdd([1, 2, 3, 4, 5], true) , [2, 4]);
test(evenOrOdd([0, 4, 36], false) , []);
test(evenOrOdd([-1, -2, 4, -5, -7], false) , [-1, -5, -7]);

//2
function findKeys (object,target){
  const newArray =[];
  for(const key in object){
    if(object[key] === target){
      newArray.push(key);
    }
  }
  return newArray;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2) , ["b", "e"])
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello") , ["c", "d"])

//3
function buildObject(keyArray,array){
  const object = {};
  for(let i = 0; i < keyArray.length; i++){
    object[keyArray[i]] =array[i];
  }
  return object;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]) , {"a": 1, "b": 2, "c": 3})
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]) , {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"})
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]) , {"cat": null, "dog": 0, "duck": NaN})
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]) , {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]})

// //4
function add(x){
  return function(y){
    return x + y;
  }
}
const addTwo = add(2);
test(addTwo(3) , 5);
test(addTwo(70) , 72);

const addOneHundred = add(100);
test(addOneHundred(3) , 103);


//5
function sayHello() {
  console.log("Hello");
}

function sayHelloAndName(name) {
  return "Hello, " + name;
}

const foo = sayHello();
const bar = sayHelloAndName("JavaScript");

console.log(foo);
console.log(bar);

// あなたの回答と、なぜそうなるのかの説明をここに記載してください
// (1) "Hello" =>(2) undefined =>(3) "Hello, Javascript"
// (1)2行目のconsole.logでHello を出力 (2)console.log(foo)で
//　sayHelloの返り値を出力するがreturnがなく、返り値がないため、undefinedを出力する
//（3）console.log(bar)でbarに定義した、sayHelloAndName("JavaScript");
// の返り値である"Hello, " + "JavaScript")


// //6
// document.getElementById('color-button').addEventListener('click', changeColor);

// function changeColor() {
//   let random1 = Math.ceil(Math.random()*16777216);
//   document.body.style.backgroundColor = `#${random1}`;

//   //ボタン色変更
//   document.getElementById('color-button').style.backgroundColor = "green";
//   document.getElementById('color-button').style.color = "yellow";
//   //end
//   console.log('Button clicked!'); 
// }

// //配置変更
// document.body.style.justifyContent = "space-around";
// //ボタン追加
// const button = document.createElement("button");
// button.textContent = "講師の皆様";
// document.body.appendChild(button);

// //イベント追加
// button.addEventListener('click', thankYou);

// //イベントの中身
// const h1 = document.createElement("h1");
// h1.style.fontSize = "40px";
// h1.style.display = "block";
// h1.style.width = "400%";
// h1.style.textAlign = "center";

// function thankYou(){
//   h1.innerHTML = "🏋️‍♀️長い間ありがとうございました。🏋️‍♂️</br>🎉お疲れ様でした🎉";
//   document.getElementById('color-button').appendChild(h1);
// }


//7
function map(collection,fn){
  const newArray = [];
  if(Array.isArray(collection)){
    for(const element of collection){
      newArray.push(fn(element));
    }
  }else if (!Array.isArray(collection)){
    for(const key in collection){
      newArray.push(fn(collection[key]));
    }
  }
  return newArray;
}

function addOne(num) {
  return num + 1;
}
test(map([1, 2, 3], addOne) , [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne) , [2, 3, 4]);

//8
function changeMiddle(strings,word){
  const newWords = strings.split(" ");
  const centerNum = (newWords.length-1) / 2;
  newWords[centerNum] = word;
  const newString = newWords.reduce((accum,current) => accum +" "+ current);
  return newString;
}

test(changeMiddle("I like cats", "love") , "I love cats");
test(changeMiddle("red green blue", "yellow") , "red yellow blue");

//9
function countSomething(array){
  let countS = 0;
  let countN = 0;
  let countB = 0;
  for(const element of array){
    if(typeof(element) === "string"){
      countS += 1;
    }else if(typeof(element) === "number"){
      countN += 1;
    }else if(typeof(element) === "boolean"){
      countB += 1;
    }
  }
  if(countS > countN && countS > countB){
    return `STRING COUNT: ${countS}`;
  }else if(countN > countS && countN > countB){
    return `NUMBER COUNT: ${countN}`;
  }else if(countB > countS && countB > countN){
    return `BOOL COUNT: ${countB}`;
  }
}

test(countSomething(["a", "b", "c", true, false, 2]) , "STRING COUNT: 3");
test(countSomething([true, true, false, true]) , "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]) , "NUMBER COUNT: 4");

//10
function each(collection,fn){
  if(Array.isArray(collection)){             //配列なら
    for(const element of collection){
      fn(element);
    }
  }else if(!Array.isArray(collection)){      //オブジェクトなら
    for(const key in collection){
      fn(collection[key]);
    }
  }
}

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

// 上記を実行すると下記を表示するはずです
// 1
// 2
// 3
// 4
// 5
// 6


//11
function compose(funcA,funcB){
  return function(x){
    return funcB(funcA(x));
  }
}

function multiplyTwo(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const baz = compose(multiplyTwo, addTen);
test(baz(5) , 20);
test(baz(100) , 210);