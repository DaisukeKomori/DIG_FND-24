'use strict'


function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.group("Result:");
    console.log("  actual:", actual);
    console.log("expected:", expected);
    console.trace();
    console.groupEnd();
  }
}


console.log("問1");

function evenOrOdd(numArray, bln) {
  const result = [];
  for (const num of numArray) {
    if (bln === true) {
      if (num % 2 === 0) {
        result.push(num);
      }
    }
    if (bln === false) {
      if (num % 2 === 1 || num % 2 === -1) {
        result.push(num);
      }
    }
  }
  return result;
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);


console.log("問2");

function findKeys(obj, target) {
  const result = [];
  for (const key in obj) {
    if (obj[key] === target) {
      result.push(key);
    }
  }
  return result;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);


console.log("問3");

function buildObject(keyArray, dataArray) {
  const result = {};
    let i = 0;
    for (const key of keyArray) {
      result[key] = dataArray[i];
      i++;
    }
  return result;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});


console.log("問4");

function add(x) {
  return function (y) {
    return x + y;
  }
}

const addTwo = add(2);
test(addTwo(3), 5)
test(addTwo(70), 72)

const addOneHundred = add(100);
test(addOneHundred(3), 103)

// console.log(foo)で、変数fooに代入されている関数simpleHello()が呼び出される。 
// simpleHello()が呼び出されると、console.log("Hello")が呼び出され、コンソールに"Hello"が表示される。 
// simpleHello()は返り値がないので、console.log(foo)でコンソールにundefinedがが表示される。 
// console.log(bar)で、変数barに代入されている関数anotherGreeting("JavaSctipt")が呼び出される。 
// anotherGreeting("JavaSctipt")は返り値として、文字列"Hello, JavaScript"を返す。 
// console.log(bar)で文字列"Hello, JavaScript"がコンソールに表示される。 
// よって、コンソールには下記の順番で表示される。 "Hello" undefined "Hello, JavaScript"


//問6
// 'use strict';
// // please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor);


// let body = document.getElementsByTagName('body');
// let button = document.getElementById("color-button");
// let i = 0;

// function changeColor() {
//   console.log('Button clicked!'); // feel free to change/delete this line

//   let red = Math.floor(Math.random()*256);
//   let green = Math.floor(Math.random()*256);
//   let blue = Math.floor(Math.random()*256);
//   body[0].style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

//   if (i === 0) {
//     setInterval(buttonMove, 1000);
//     i++;
//   }
// }

// function buttonMove() {
//   button.style.position = "fixed";
//   button.style.left = `${Math.floor(Math.random()*61)+20}%`;
//   button.style.top = `${Math.floor(Math.random()*61)+20}%`;
// }



console.log("問7")

function map(collection, func) {
  const result = [];
  if (typeof(collection) === "array"){
    for (const data of collection) {
      result.push(func(data));
    }
  } else if (typeof(collection) === "object") {
    for (const key in collection) {
      result.push(func(collection[key]))
    }
  }
  return result;
}

function addOne(num) {
  return num + 1;
}
test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);



console.log("問8");
function changeMiddle(sentence, changeWord) {
  const sentenceArray =[];
  let word = "";
  let characterNum = 0;
  let result = "";

  for (const character of sentence) {
    if (character !== " ") {
      word = word + character;
    } else if (character === " "){
      sentenceArray.push(word);
      word = "";
    }
    characterNum++;
  }
  sentenceArray.push(word);

  sentenceArray.splice(Math.floor(sentenceArray.length / 2), 1, changeWord);
  
  for (const wordOfArray of sentenceArray) {
    result = result + wordOfArray + " ";
  }
  result = result.slice(0, result.length - 1);

  return result;
}

test(changeMiddle("like", "love"), "love");
test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");
test(changeMiddle("red green blue aaaa ddddd", "yellow"), "red green yellow aaaa ddddd");


console.log("問9");
function countSomething(ary) {
  let strCount = 0;
  let blnCount = 0;
  let numCount = 0;

  for (const data of ary) {
    if (typeof(data) === "string") {
      strCount++;
    } else if (typeof(data) === "boolean") {
      blnCount++;
    } else if (typeof(data) === "number") {
      numCount++;
    }
  }

  if (strCount > blnCount && strCount > numCount) {
    return `STRING COUNT: ${strCount}`;
  } else if (blnCount > numCount && blnCount > strCount) {
    return `BOOL COUNT: ${blnCount}`;
  } else if (numCount > strCount && numCount > blnCount) {
    return `NUMBER COUNT: ${numCount}`;
  } else {
    return `数値、文字列、ブーリアンで登場回数が最大のものは2つ以上あるか、全て登場回数が0です。`;
  }
}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");


console.log("問10");

function each(collection, func) {
  if (typeof(collection) === "array"){
    for (const data of collection) {
      func(data);
    }
  } else if (typeof(collection) === "object") {
    for (const key in collection) {
      func(collection[key]);
    }
  }
}


each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);


console.log("問11");

function compose(funcA, funcB) {
  return function (x) {
    return (funcB(funcA(x)));
  }
}


function multiplyTwo(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const baz = compose(multiplyTwo, addTen);
test(baz(5), 20);
test(baz(100), 210);
