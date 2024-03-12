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

// 1.
function evenOrOdd(arrayOfNumber, boolean) {
  let result = [];
  if (boolean === true) {
    for (const number of arrayOfNumber) {
      if (number % 2 === 0) {
        result.push(number);
      };
    }
  } else if (boolean === false) {
    for (const number of arrayOfNumber) {
      if (number % 2 !== 0) {
        result.push(number)
      };
    }
  }
  return result;
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []); 
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]); 

evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
evenOrOdd([0, 4, 36], false); // []
evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]

// 2.
function findKeys(object, target) {
  let result = [];
  for (const key in object) {
    if (object[key] === target) {
      result.push(key);
    }
  }
  return result;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]); 

findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2); // ["b", "e"]
findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]

// 3.
function buildObject(objectKey, objectValue) {
  let newObject = objectValue.reduce(
    (accumulator, currentValue, currentIndex) => {
    accumulator[objectKey[currentIndex]] = currentValue;
    return accumulator;
  }, {});
  
  return newObject;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});

buildObject(["a", "b", "c"], [1, 2, 3]); // {"a": 1, "b": 2, "c": 3}
buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

// 4.
const add = function(x) {
  return function(y) {
    return x + y;
  }
}

const addTwo = add(2);
addTwo(3); // 5
addTwo(70); // 72

const addOneHundred = add(100);
addOneHundred(3); // 103

// 5.
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

// 7.
function map(collection, action) {
  let result = [];
  if (Array.isArray(collection) === true) {
    for (const elem of collection) {
      result.push(action(elem));
    }
  } else if (Array.isArray(collection) !== true) {
    for (const key in collection) {
      result.push(action(collection[key]));
    }
  }
  return result;
}

function addOne(num) {
  return num + 1;
}

test(map([1, 2, 3], addOne), [2, 3, 4])
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4])

map([1, 2, 3], addOne); // [2, 3, 4]
map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]

// 8.
function changeMiddle(oddSentence, word) {
  let array = oddSentence.split(" ");
  array[1] = word;
  return array.join(" ");
}

test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");

changeMiddle("I like cats", "love"); // "I love cats"
changeMiddle("red green blue", "yellow"); // "red yellow blue"


// 9.
function countSomething(arrayOfSomething) {
  let countStr = 0;
  let countBool = 0;
  let countNum = 0;
  for (const element of arrayOfSomething) {
    let result = typeof element;
    if (result === "string") {
      countStr++;
    } else if (result === "boolean") {
      countBool++;
    } else if (result === "number") {
      countNum++;
    }
  }
  return countStr > countBool && countStr > countNum ? `STRING COUNT: ${countStr}`
      : countBool > countNum && countBool > countStr ? `BOOL COUNT: ${countBool}`
      : `NUMBER COUNT: ${countNum}`;
}


test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");

countSomething(["a", "b", "c", true, false, 2]); // "STRING COUNT: 3"
countSomething([true, true, false, true]); // "BOOL COUNT: 4"
countSomething([true, true, 1, 0, 1, false, 1]); // "NUMBER COUNT: 4"

// 10.
function each(collection, action) {
  let result;
  if (Array.isArray(collection) === true) {
    for (const elem of collection) {
      result = action(elem);
    }
  } else if (Array.isArray(collection) !== true) {
    for (const key in collection) {
      result = action(collection[key]);
    }
  }
  return result;
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

// 11.

const compose = function(funcA, funcB) {
  return function(x) {
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
baz(5); // 20
baz(100); // 210

test(baz(5), 20);
test(baz(100), 210);
