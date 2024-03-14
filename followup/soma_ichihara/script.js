'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// テスト
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test Passed.");
  } else {
    console.error("Test Failed. Try Again!");
    console.log("actual  :", actual);
    console.log("expected:", expected);
  }
}




// 一問目
function evenOrOdd(numArray, boo){
  const ansArray = [];
  if(boo === true){
    for(const num of numArray){
      if(num % 2 === 0 || num % 2 === -0){
        ansArray.push(num);
      }
    }
  } else {
    for(const num of numArray){
      if(num % 2 === 1 || num % 2 === -1){
        ansArray.push(num);
      }
    }
  }
  return ansArray;
}

// テスト
test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]); // [2, 4]
test(evenOrOdd([0, 4, 36], false), []); // []
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]); // [-1, -5, -7]




// 二問目
function findKeys(obj, target){
  const ansArray = [];
  for(const key in obj){
    if(obj[key] === target){
      ansArray.push(key);
    }
  }
  return ansArray;
}

// テスト
test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]); // ["b", "e"]
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]); // ["c", "d"]




// 三問目
function buildObject(keyObj, valueObj){
  const ansArray = {};
  for(let i = 0; i < keyObj.length; i++){
    ansArray[keyObj[i]] = valueObj[i];
  }
  return ansArray;
}

// テスト
test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3}); // {"a": 1, "b": 2, "c": 3}
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN}); // {"cat": null, "dog": 0, "duck": NaN}
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}




// 四問目
function add(x){
  function addX(y){
    return x + y;
  }
  return addX;
}

// テスト
const addTwo = add(2);
test(addTwo(3), 5); // 5
test(addTwo(70), 72); // 72

const addOneHundred = add(100);
test(addOneHundred(3), 103); // 103




// 五問目
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

// まずconsole.lgo(foo);で"Hello"がコンソールに出力するが
// returnで返り値がないのでundefinedが出力, 
// 次にconsole.log(bar);で"Hello, JavaScript"が出力




// // 六問目             
// document.getElementById('color-button').addEventListener('click', changeColor)

// function changeColor() {
//   console.log('Button clicked!'); // feel free to change/delete this line
//   // ここからコード入れる予定（難しい調べないとわからない）
// }




//七問目
function map(objOrArray, func){
  const ansArray = [];
  for (const key in objOrArray){
    ansArray.push(addOne(objOrArray[key]));
  }
  return ansArray;
}

function addOne(num) {
  return num + 1;
}

// テスト
test(map([1, 2, 3], addOne), [2, 3, 4]); // [2, 3, 4]
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]); // [2, 3, 4]





// 八問目 
function changeMiddle(string, word){
  let num = Math.floor(string.split(" ").length / 2);
  return string.replace(string.split(" ")[num], word);
}

//　テスト
test(changeMiddle("I like cats", "love"), "I love cats"); // "I love cats"
test(changeMiddle("red green blue", "yellow"), "red yellow blue"); // "red yellow blue"




// 九問目
function countSomething(anyArray) {
  let numStr = 0;
  let numNum = 0;
  let numBoo = 0;

  for (const any of anyArray) {
    if (typeof any === "string") {
      numStr += 1;
    } else if (typeof any === "number") {
      numNum += 1;
    } else {
      numBoo += 1;
    }
  }

  if (numStr > numNum) {
    if (numStr > numBoo) {
      return (`STRING COUNT: ${numStr}`);
    }
  } else if (numNum > numBoo) {
    return (`NUMBER COUNT: ${numNum}`);
  } else {
    return (`BOOL COUNT: ${numBoo}`);
  }
}

// テスト
test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3"); // "STRING COUNT: 3"
test(countSomething([true, true, false, true]), "BOOL COUNT: 4"); // "BOOL COUNT: 4"
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4"); // "NUMBER COUNT: 4"





// 十問目
// ここにコードを書きましょう
function each(any, func){
  for (const key in any){
    func(any[key]);
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






// 十一問目
function compose(funcA, funcB){
  function newFunc(x){
    return funcB(funcA(x));
  }
  return newFunc;
}

function multiplyTwo(x) {    
  return x * 2;
}

function addTen(x) {          
  return x + 10;
}

// テスト
const baz = compose(multiplyTwo, addTen);
test(baz(5), 20); // 20
test(baz(100), 210); // 210