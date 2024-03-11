'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//テスト駆動開発
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
  if (bool === true) {
    return array.filter(num => num % 2 === 0);
  } else {
    return array.filter(num => num % 2 !== 0);
  }
}

test(evenOrOdd([1, 2, 3, 4, 5], true),[2,4]);
test(evenOrOdd([0, 4, 36], false),[]);
test(evenOrOdd([-1, -2, 4, -5, -7], false),[-1, -5, -7]);

//課題2
function findKeys(object, target) {
    return Object.keys(object).filter(key => object[key] === target);
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2),["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"),["c", "d"]);

//課題3
function buildObject(array1, array2) {
  const result = {};
  for (let i = 0; i < array1.length; i++) {
      result[array1[i]] = array2[i];
  }
  return result;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]),{"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]),{"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]),{"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});

//課題4
function add(x) {
  return function(y) {
      return x + y;
  };
}

const addTwo = add(2);
test(addTwo(3),5);
test(addTwo(70),72);

const addOneHundred = add(100);
test(addOneHundred(3),103);

//課題5
//提出フォームに記入済

//課題6
//ファイル名 script.js

/*
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
*/


//課題7
function map(collect, callback) {
  const result = [];
  for (const key in collect) {
      if (collect.hasOwnProperty(key)) {
          result.push(callback(collect[key]));
      }
  }
  return result;
}

function addOne(num) {
  return num + 1;
}

test(map([1, 2, 3], addOne),[2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne),[2, 3, 4]);

//課題8
function changeMiddle(word, replaceword) {
  const words = word.split(' ');
  const middleIndex = Math.floor(words.length / 2);
  words[middleIndex] = replaceword;
  return words.join(' ');
}

test(changeMiddle("I like cats", "love"),"I love cats");
test(changeMiddle("red green blue", "yellow"),"red yellow blue");

//課題9
function countSomething(array) {
  let boolCount = 0;
  let stringCount = 0;
  let numberCount = 0;

  for (const element of array) {
      if (typeof element === 'boolean') {
          boolCount++;
      } else if (typeof element === 'string') {
          stringCount++;
      } else if (typeof element === 'number') {
          numberCount++;
      }
  }

  if (boolCount >= stringCount && boolCount >= numberCount) {
      return `BOOL COUNT: ${boolCount}`;
  } else if (stringCount >= boolCount && stringCount >= numberCount) {
      return `STRING COUNT: ${stringCount}`;
  } else {
      return `NUMBER COUNT: ${numberCount}`;
  }
}

test(countSomething(["a", "b", "c", true, false, 2]),"STRING COUNT: 3");
test(countSomething([true, true, false, true]),"BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]),"NUMBER COUNT: 4");

//課題10
function each(collect, callback) {
  if (Array.isArray(collect)) {
      for (let i = 0; i < collect.length; i++) {
          callback(collect[i]);
      }
  } else if (typeof collect === 'object') {
      for (const key in collect) {
          if (collect.hasOwnProperty(key)) {
              callback(collect[key]);
          }
      }
  }
}

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);


//課題11
function compose(funcA, funcB) {
  return function(x) {
      const result = funcA(x);
      return funcB(result);
  };
}

function multiplyTwo(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const baz = compose(multiplyTwo, addTen);
test(baz(5),20);
test(baz(100),210);