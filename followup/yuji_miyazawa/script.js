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

//1.
function evenOrOdd(numArray, getEven){
  if(getEven) {
    return numArray.filter(num => num % 2 === 0)
  } else {
    return numArray.filter(num => num % 2 !== 0)
  }
}

test(evenOrOdd([1, 2, 3, 4, 5], true),[2, 4]);
test(evenOrOdd([0, 4, 36], false),[]);
test(evenOrOdd([-1, -2, 4, -5, -7], false),[-1, -5, -7]);


//2.
function findKeys(obj, target) {
  const result = [];
  for (const key in obj) {
    const value = obj[key];
    if (value === target) {
      result.push(key);
    }
  }
  return result;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2),["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"),["c", "d"]);


//3.
function buildObject(keys, values) {
  const result = {};
  for(let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  } 
  return result;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN});
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});


//4.
function add(num) {
  return (target => target + num);
}

const addTwo = add(2);
test(addTwo(3), 5);
test(addTwo(70), 72);

const addOneHundred = add(100);
test(addOneHundred(3), 103);


//5.
//formsで回答


//6.
//別ファイルで回答


//7.
function map(collection, func) {
  const result = [];
  for(const i in collection) {
    result.push(func(collection[i]));
  }
  return result;
}

function addOne(num) {
  return num + 1;
}

test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);


//8.
function changeMiddle(str, ward) {
  const wards = str.split(" ");
  if(wards.length % 2 === 1){
    wards[Math.trunc(wards.length / 2)] = ward;
    let result = "";
    for(const ward of wards) {
      result = result + ward + " ";
    }
    return result.trimEnd();
  } else {
    return "Words in input statement needs to be odd number";
  }
}

test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");
test(changeMiddle("I like cats and dogs", "birds"), "I like birds and dogs");
test(changeMiddle("I do like cats", "love"), "Words in input statement needs to be odd number");

//9.
function countSomething(arr) {
  const counts = {
    boolCount : 0,
    strCount : 0,
    numberCount : 0,
    otherCount : 0 
  }
  for(const elm of arr) {
    if(typeof elm === "boolean") {
      counts.boolCount += 1;
    } else if(typeof elm === "string") {
      counts.strCount += 1;
    } else if (typeof elm === "number") {
      counts.numberCount += 1;
    } else {
      counts.otherCount += 1;
    }
  }
  const maxCount = Math.max(...Object.values(counts));
  if(counts.boolCount === maxCount) {
    return  "BOOL COUNT: " + maxCount;
  } else if (counts.strCount === maxCount) {
    return "STRING COUNT: " + maxCount;
  } else if (counts.numberCount === maxCount) {
    return "NUMBER COUNT: " + maxCount;
  }

}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");


//10.
function each(collection,func) {
  for(const elm in collection) {
    func(collection[elm]);
  }
}

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);


//11.
function compose(funcA, funcB) {
  return (x => funcB(funcA(x)));
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
