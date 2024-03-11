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

//問１

function evenOrOdd(arrNumber, boolean){
  if (boolean){
    return arrNumber.filter((element) => element % 2 === 0);
  }else{
    return arrNumber.filter((element) => element % 2 !== 0);
  }
}

evenOrOdd([1, 2, 3, 4, 5], true); // [2, 4]
evenOrOdd([0, 4, 36], false); // []
evenOrOdd([-1, -2, 4, -5, -7], false); // [-1, -5, -7]

test(evenOrOdd([1, 2, 3, 4, 5], true),[2, 4])
test(evenOrOdd([0, 4, 36], false),[])
test(evenOrOdd([-1, -2, 4, -5, -7], false),[-1, -5, -7])

//問２

function findKeys(obj, target){
  const resultArr = [];
  for (const key in obj){
    if ( obj[key] === target){
      resultArr.push(key);
    }
  }
  return resultArr;
}

findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2); // ["b", "e"]
findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"); // ["c", "d"]

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2),["b", "e"])
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"),["c", "d"])


//問３

function buildObject (arr1, arr2){
  const resultObj = {};
  for(let i = 0 ; i < arr1.length ; i++){
    resultObj[arr1[i]] = arr2[i];
  }
  return resultObj;
}

buildObject(["a", "b", "c"], [1, 2, 3]); // {"a": 1, "b": 2, "c": 3}
buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
buildObject(["cat", "dog", "duck"], [null, 0, NaN]); // {"cat": null, "dog": 0, "duck": NaN}
buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]);  // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

test(buildObject(["a", "b", "c"], [1, 2, 3]),{"a": 1, "b": 2, "c": 3})
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"})
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]),{"cat": null, "dog": 0, "duck": NaN})
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]),{"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]})

//問４

function add (x){
  return function(y){
    return x + y;
  }
}

const addTwo = add(2);
addTwo(3); // 5
addTwo(70); // 72

test(addTwo(3),5);
test(addTwo(70),72);

const addOneHundred = add(100);
addOneHundred(3); // 103

test(addOneHundred(3),103);


//問5

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
//95行目で関数宣言した際にHelloがコンソールに表示される
//106行目で変数fooに代入されている関数sayHEllo()が呼び出されるがリターンはないのでundefinedが表示される
//107行目で変数barに代入されている関数sayHelloAndName("JavaScript")が呼び出される、引数のJavaScriptを受け取りリターン文の"Hello,　JavaScript"が表示される


//問６

// 別添付

//問7

function map(collection, func){
  const newarr = [];
  if (Array.isArray(collection)){
    for(const element of collection){
      newarr.push(func(element));
    }
  }else{
    for(const key in collection){
      newarr.push(func(collection[key]));
    }
  }
  return newarr;
}

function addOne(num) {
  return num + 1;
}

map([1, 2, 3], addOne); // [2, 3, 4]
map({ a: 1, b: 2, c: 3 }, addOne); // [2, 3, 4]

test(map([1, 2, 3], addOne),[2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne),[2, 3, 4])


//問8

function changeMiddle(oddString,string){
  let stringArr = oddString.split(" ");
  stringArr[Math.floor(stringArr.length / 2)] = string;
  return stringArr.join(" ");
}

changeMiddle("I like cats", "love"); // "I love cats"
changeMiddle("red green blue", "yellow"); // "red yellow blue"

test(changeMiddle("I like cats", "love"),"I love cats")
test(changeMiddle("red green blue", "yellow"),"red yellow blue")

//問9

function countSomething(array){
  let newArry = array.map((element) => typeof element);
  const count = {};
  newArry = newArry.map((ele) => ele.replace("boolean", "bool"))
  newArry.forEach(element => {
    count[element] = (count[element] || 0) + 1;
  });
  const maxNumber = Math.max(...Object.values(count));
  for( const key in count){
    if(count[key] === maxNumber){
      const KEY = key.toUpperCase();
      return `${KEY} COUNT: ${maxNumber}`
    }
  }
}

countSomething(["a", "b", "c", true, false, 2]); // "STRING COUNT: 3"
countSomething([true, true, false, true]); // "BOOL COUNT: 4"
countSomething([true, true, 1, 0, 1, false, 1]); // "NUMBER COUNT: 4"

test(countSomething(["a", "b", "c", true, false, 2]),"STRING COUNT: 3")
test(countSomething([true, true, false, true]),"BOOL COUNT: 4")
test(countSomething([true, true, 1, 0, 1, false, 1]),"NUMBER COUNT: 4")


//問10

function each(collection, func){
  if(collection.isArray){
    for(const element of collection){
      func(element);
    }
  }else{
    for(const key in collection){
      func(collection[key]);
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

//問11

function compose(funcA, funcB){
  return function (x){
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
test(baz(5), 20)
test(baz(100), 210)
