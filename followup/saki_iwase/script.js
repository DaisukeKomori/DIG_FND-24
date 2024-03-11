'use strict'
// 1行目に記載している 'use strict' は削除しないでください

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

//課題1
function evenOrOdd(array, bool) {
  const result = [];
  if (bool === true) {
    for (let i = 0 ; i <= array.length -1 ; i++) {
      if (array[i] % 2 === 0 ) {
        result.push(array[i]);
      } 
    }
  } else if (bool === false) {
    for (let i = 0 ; i <= array.length -1 ; i++) {
      if (array[i] % 2 !== 0 ) {
        result.push(array[i]);
      } 
  }
} return result;
}

evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
evenOrOdd([0, 4, 36], false); // []
evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]

// test
test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);


//課題2
function findKeys(obj, target) {
  let result = [];
  for ( const key in obj) {
    if (obj[key] === target ){
      result.push(key);
    }
  } return result;
}


findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2); // ["b", "e"]
findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]

// test
test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);

// 課題3
function buildObject (array1, array2) {
  let result = new Object();
  for (let i = 0 ; i <= array1.length -1 ; i++) {
    result[array1[i]] = array2[i];
  } return result;
}

buildObject(["a", "b", "c"], [1, 2, 3]); // {"a": 1, "b": 2, "c": 3}
buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}


// test
test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});


// 課題4
const add = function (x) {
  return function (y) {
    return x + y;
  };
};

const addTwo = add(2);
addTwo(3); // 5
addTwo(70); // 72

//test
test(addTwo(3), 5);
test(addTwo(70), 72 );

const addOneHundred = add(100);
addOneHundred(3); // 103

//test
test(addOneHundred(3), 103)

//課題5
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
/*
Hello
Hello
Hello, JavaScript と表示されると思いましたが、
実際には console.log(foo)が undefinedでした。
sayHelloにはreturn がないため、返り値を持たないため
foo にはundifinedが入力される。
*/

//課題6
//script.js
// 'use strict';
// // please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor)
// const colors = ['pink', 'gray', 'brown', 'blue', 'aqua', 'black', 'blue' , 'fuchsia', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'silver', 'teal', 'white'];

// function changeColor() {
//   document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//   console.log('Button clicked!'); // feel free to change/delete this line
// }



//課題7
function map(obj, func) {
  const result = [];
  let num
  for (const element in obj) {
    num = obj[element]
    result.push(func(num));
  } return result;
}

function addOne(num) {
  return num + 1;
}

map([1, 2, 3], addOne); // [2, 3, 4]
map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]

//test
test(map([1, 2, 3], addOne), [2, 3, 4])
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4])


//課題8
function changeMiddle(sentence, word){
  let result = [];
  let NewResult = [];
  result = sentence.split(" ");
  result[1] = word;
  NewResult = result.join(" ");
  return NewResult;
}

changeMiddle("I like cats", "love"); // "I love cats"
changeMiddle("red green blue", "yellow"); // "red yellow blue"

//test
test(changeMiddle("I like cats", "love"), "I love cats")
test(changeMiddle("red green blue", "yellow"), "red yellow blue")

//課題9
function countSomething (array) {
  let countString = 0;
  let countNumber = 0;
  let countBoolean = 0;
  for (const element of array) {
    if (typeof element === "string"){
      countString = countString + 1;
    } else if (typeof element === "number") {
      countNumber = countNumber + 1;
    } else if (typeof element === "boolean") {
      countBoolean = countBoolean + 1;
    }
  } if (countString > countNumber && countString > countBoolean){
    return `STRING COUNT: ${countString}`; 
  } else if (countNumber > countBoolean && countNumber > countString) {
    return `NUMBER COUNT: ${countNumber}`;
  }  else if (countBoolean > countString && countBoolean > countNumber) {
    return `BOOL COUNT: ${countBoolean}`;
  }
}


countSomething(["a", "b", "c", true, false, 2]); // "STRING COUNT: 3"
countSomething([true, true, false, true]); // "BOOL COUNT: 4"
countSomething([true, true, 1, 0, 1, false, 1]); // "NUMBER COUNT: 4"

//test
test(countSomething(["a", "b", "c", true, false, 2]),"STRING COUNT: 3");
test(countSomething([true, true, false, true]),"BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]),"NUMBER COUNT: 4");

//課題10
function each(obj, func){
  for (const ele in obj) {
    let num;
    num = obj[ele];
    func(num);
  }
}

function func(num) {
  return console.log(num);
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

//課題11
function multiplyTwo(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const compose = function(funcA, funcB) {
  return function(x) {
    return funcB(funcA(x));
  }
}

const baz = compose(multiplyTwo, addTen);
baz(5); // 20
baz(100); // 210

//test
test(baz(5), 20);
test(baz(100), 210);