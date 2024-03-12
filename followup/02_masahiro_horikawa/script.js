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
//evenOrOdd という名前の関数を宣言
/**
 * @param {Array<number>} arr - 数値型の要素を持つ配列
 * @param {boolean} isEven - 偶数のみを返す場合は true、奇数のみを返す場合は false
 * @returns {Array<number>} 与えられた配列の中の偶数または奇数だけが入った新しい配列
 */

function evenOrOdd(arr, isEven) {
  if (isEven) {
    return arr.filter(num => num % 2 === 0);
  } else {
    return arr.filter(num => num % 2 !== 0);
  }
}


test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);

console.log(evenOrOdd([1, 2, 3, 4, 5], true)); // [2, 4]
console.log(evenOrOdd([0, 4, 36], false)); // []
console.log(evenOrOdd([-1, -2, 4, -5, -7], false)); // [-1, -5, -7]


//課題2
//findKeys という名前の関数を宣言
/**
 * @param {Object} obj - オブジェクト
 * @param {string | number} target - ターゲットとなる文字列または数値
 * @returns {Array<string>} オブジェクト内でターゲットにマッチする値を持つ全てのキーを含む新しい配列
 */

function findKeys(obj, target) {
  return Object.keys(obj).filter(key => obj[key] === target);
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);

console.log(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
console.log(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);


//課題3
//buildObject という名前の関数を宣言

/**
 * @param {Array<string>} keys - キーを持つ配列
 * @param {Array<any>} values - 値を持つ配列
 * @returns {Object} キーと値のペアを持つ新しいオブジェクト
 */

function buildObject(keys, values) {
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
  }
  return obj;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), { "a": 1, "b": 2, "c": 3 });
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), { "cat": "にゃー", "dog": "わんわん", "duck": "がーがー" });
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), { "cat": null, "dog": 0, "duck": NaN });
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), { "abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8] });

//課題4
//add という名前の関数を宣言
/**
 * @param {number} x 　数値型
 * @returns {function} 引数 y を取り、x と y の合計を返す関数
 */

function add(x) {
  return function(y) {
    return x + y;
  }
}

const addTwo = add(2);
test(addTwo(3), 5);
test(addTwo(70), 72);

console.log(addTwo(3), 5);
console.log(addTwo(70), 72);


const addOneHundred = add(100);
test(addOneHundred(3), 103);
console.log(addOneHundred(3), 103);

//課題5
//以下のコードを実行すると、どの順番で何が表示されるか？
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

//１．sayHello関数が呼び出され、"Hello" が表示される。
//２．sayHello関数は空で何も返さないため、foo 変数には「undefined」が代入される。
//３．次にsayHelloAndName関数が呼び出され、引数に "JavaScript" が渡される。
//４．sayHelloAndName 関数は 文字列の"Hello, JavaScript" を返して、bar変数に代入される（表示はまだな状態）。
//５．console.log(foo) が実行され、foo の値である「undefined」 がコンソール上に表示される。
//６．console.log(bar) が実行され、bar の値である "Hello, JavaScript" がコンソールに表示される。
//以上

// 課題6
// 時間切れのため今回はパスいたします。


//課題7
//関数 map を宣言
/**
 * @param {Array<any>} collection - コレクション（配列またはオブジェクト）
 * @param {Function} callback - 各要素に適用するコールバック関数
 * @returns {Array<any>} 各要素にコールバック関数を適用した結果を要素に持つ新しい配列
 */


function map(collection, callback) {
  if (Array.isArray(collection)) {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      result.push(callback(collection[i], i, collection));
    }
    return result;
  } else if (typeof collection === "object" && collection !== null) {
    const result = [];
    for (let key in collection) {
      result.push(callback(collection[key], key, collection));
    }
    return result;
  } else {
    throw new Error("Invalid collection type. Only arrays and objects are supported.");
  }
}

function addOne(num) {
  return num + 1;
}

test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);

console.log(map([1, 2, 3], addOne), [2, 3, 4]);
console.log(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);

//課題8
//関数 changeMiddle を宣言
/**
 * @param {string} str  スペースで区切られた単語からなる文字列
 * @param {string} replacement  置き換える単語
 * @returns {string} 第１引数の真ん中の単語を第２引数の単語で置き換えた新しい文字列
 */


function changeMiddle(str, replacement) {
  const words = str.split(" ");
  const middleIndex = Math.floor(words.length / 2);
  words[middleIndex] = replacement;
  return words.join(" ");
}


test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");

console.log(changeMiddle("I like cats", "love"), "I love cats");
console.log(changeMiddle("red green blue", "yellow"), "red yellow blue");

//課題9
// 関数 countSomething を宣言
/**
 * @param {Array<any>} arr - 数値・文字列・ブーリアンを要素に持つ配列
 * @returns {string} 最も出現回数の多い型に基づいた結果の文字列
 */

function countSomething(arr) {
  let countString = 0;
  let countNumber = 0;
  let countBool = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
         countString++;
        } else if (typeof arr[i] === "number") {
         countNumber++;
        } else if (typeof arr[i] === "boolean") {
         countBool++;
    }
  }

  if (countString > countNumber && countString > countBool) {
    return "STRING COUNT: " + countString;
    } else if (countNumber > countString && countNumber > countBool) {
        return "NUMBER COUNT: " + countNumber;
    } else if (countBool > countString && countBool > countNumber) {
        return "BOOL COUNT: " + countBool;
    } else {
    return "There is no dominant type in the array.";
  }
}


test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");

console.log(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
console.log(countSomething([true, true, false, true]), "BOOL COUNT: 4");
console.log(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");


//課題10
//関数 each を宣言

/**
 * @param {Object | Array} collection - コレクション（オブジェクトまたは配列）
 * @param {Function} callback - 各要素に適用するコールバック関数
 * @returns {void} 何も返さない
 */

function each(collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else if (typeof collection === "object" && collection !== null) {
    for (let key in collection) {
      callback(collection[key], key, collection);
    }
  } else {
    throw new Error("Invalid collection type. Only arrays and objects are supported.");
  }
}

each({ a: 1, b: 2, c: 3 }, console.log);  //各要素をコンソールに表示
each([4, 5, 6], console.log);             //各要素をコンソールに表示



//課題11
//関数 compose を宣言
/**
 * @param {Function} funcA - 1つ目の関数
 * @param {Function} funcB - 2つ目の関数
 * @returns {Function} 引数を受け取り、funcAとfuncBを組み合わせて処理する新しい関数
 */

function compose(funcA, funcB) {
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
test(baz(5), 20);
test(baz(100), 210);


//以上です。