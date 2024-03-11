'use strict'

// テスト
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

// 1問目
function evenOrOdd(arr, bool) {
  const result = [];

  if (bool === true) {
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] % 2 === 0){
        result.push(arr[i]);
      }
    }   
  } else if (bool === false) {
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] % 2 !== 0){
        result.push(arr[i]);
      }
    } 
  }

  return result;
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);

// 2問目
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

// 3問目
function buildObject(arr1, arr2) {
  const result = {};

  for (let i = 0; i <= arr1.length - 1; i++) {
    result[arr1[i]] = arr2[i];
  }

  return result;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});

// 4問目
function add(x) {
  function addNumber(y) {
    return x + y;
  }
  
  return addNumber;
}

const addTwo = add(2);
test(addTwo(3), 5);
test(addTwo(70), 72);

const addOneHundred = add(100);
test(addOneHundred(3), 103);

// 7問目
function map (collection, action) {
  const result = [];

  if (Object.getPrototypeOf(collection).constructor.name === "Array") {
    for (let i = 0; i < collection.length; i++){
      result.push(action(collection[i]));
    }
  } else if (Object.getPrototypeOf(collection).constructor.name === "Object") {
    for (let key in collection) {
      result.push(action(collection[key]));
    }
  }

  return result;
}

function addOne(num) {
  return num + 1;
}

test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);

// 8問目
function changeMiddle(sentence, word) {
  const splitword = sentence.split(" ");
  return `${splitword[0]} ${word} ${splitword[2]}`;
}

test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");

// 9問目
function countSomething(array) {
  let number = array.filter((element) => typeof element === "number");
  let string = array.filter((element) => typeof element === "string");
  let boolean = array.filter((element) => typeof element === "boolean");
  
  if (number.length > string.length && number.length > boolean.length) {
    return `NUMBER COUNT: ${number.length}`;
  } else if (string.length > number.length && string.length > boolean.length) {
    return `STRING COUNT: ${string.length}`;
  } else if (boolean.length > number.length && boolean.length > string.length) {
    return `BOOL COUNT: ${boolean.length}`;
  }
}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");

// 10問目
function each(collection, action) {
  if (Object.getPrototypeOf(collection).constructor.name === "Array") {
    for (let i = 0; i < collection.length; i++){
      action(collection[i]);
    }
  } else if (Object.getPrototypeOf(collection).constructor.name === "Object") {
    for (let key in collection) {
      action(collection[key]);
    }
  }
}

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

// 11問目
function compose(funcA, funcB) {
  function newfunc(x) {
    return funcB(funcA(x));
  }
  return newfunc;
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
