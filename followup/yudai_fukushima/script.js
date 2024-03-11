//--- 課題1 ---

function evenOrOdd(array, boolean) {
  if (boolean) {
      return array.filter(num => num % 2 === 0); // booleanがtrueの時、偶数のだけを配列に返す
  } else {
      return array.filter(num => num % 2 !== 0); // booleanがfalseの時、奇数のだけを配列に返す
  }
}

//--- ﾃｽﾄ ---

console.log(evenOrOdd([1, 2, 3, 4, 5], true)); // [2, 4]
console.log(evenOrOdd([0, 4, 36], false)); // []
console.log(evenOrOdd([-1, -2, 4, -5, -7], false)); // [-1, -5, -7]

//--- 課題2 ---

function findKeys(obj, target) {    
  return Object.keys(obj).filter(key => obj[key] === target); //すべてのkeyを抽出してfilterで欲しい条件の物を配列に返す
}

//--- ﾃｽﾄ ---
console.log(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2)); // ["b", "e"]
console.log(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello")); // ["c", "d"]

//--- 課題3 ---

function buildObject(keys, values) {     
  const obj = {};
  for (let i = 0; i < keys.length; i++) {
      obj[keys[i]] = values[i];
  } 
  return obj; //keysの長さより1少ない数だけループを回してobjの中にkeyとvalueセットで返す
}

//--- ﾃｽﾄ ---

console.log(buildObject(["a", "b", "c"], [1, 2, 3])); // {"a": 1, "b": 2, "c": 3}
console.log(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"])); // {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"}
console.log(buildObject(["cat", "dog", "duck"], [null, 0, NaN])); // {"cat": null, "dog": 0, "duck": NaN}
console.log(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]])); // {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]}

//--- 課題4 ---

function add(x) {
    return function(y) {
        return x + y;
    };
}

//--- ﾃｽﾄ ---
const addTwo = add(2);
console.log(addTwo(3)); // 5
console.log(addTwo(70)); // 72

const addOneHundred = add(100);
console.log(addOneHundred(3)); // 103




//--- 課題5 ---


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

//--- 課題6 ---

//別ファイルへ

//--- 課題7 ---

function map(collection, callback) {
  const result = [];
  if (Array.isArray(collection)) {     
      for (let i = 0; i < collection.length; i++) {
          result.push(callback(collection[i])); //collectionの長さより1少ない数だけカウントをしてaddOne処理をして配列に値を返す
      } 
  } else  {
      for (const key in collection) {     
            result.push(callback(collection[key])); //objectから値を取得しaddOne処理をして配列に値を返す
        } 
    }
    return result;
}

function addOne(num) {
return num + 1;
}

//--- ﾃｽﾄ ---
console.log(map([1, 2, 3], addOne)); // [2, 3, 4]
console.log(map({ a: 1, b: 2, c: 3 }, addOne)); // [2, 3, 4]

//--- 課題8 ---

function changeMiddle(str, newWord) {
  const words = str.split(" "); // 文字列を単語に分割
  const middleText = Math.floor(words.length / 2); // 中央のインデックスを計算
  
  if (words.length % 2 !== 0) { 
      words[middleText] = newWord; // 奇数個の単語のみ代入
  }
  
  return words.join(" "); // 単語を結合して文字列を返す
}

console.log(changeMiddle("I like cats", "love")); // "I love cats"
console.log(changeMiddle("red green blue", "yellow")); // "red yellow blue"

//--- 課題9 ---

function countSomething(array) {
  let boolCount = 0; //booleanカウンター
  let stringCount = 0; //stringカウンター
  let numberCount = 0; //numberカウンター

  for (let i = 0; i < array.length; i++) {     //それぞれの型でカウントをするループ処理
      if (typeof array[i] === 'boolean') {
          boolCount++;
      } else if (typeof array[i] === 'string') {
          stringCount++;
      } else if (typeof array[i] === 'number') {
          numberCount++;
      }
    } 

  if (boolCount > stringCount && boolCount > numberCount) { //配列内で多い型を比較し一番多い型のカウントを返す処理
      return `BOOL COUNT: ${boolCount}`;
  } else if (stringCount > boolCount && stringCount > numberCount) {
      return `STRING COUNT: ${stringCount}`;
  } else if (numberCount > boolCount && numberCount > stringCount) {
      return `NUMBER COUNT: ${numberCount}`;
  }
}

//--- ﾃｽﾄ ---
console.log(countSomething(["a", "b", "c", true, false, 2])); // "STRING COUNT: 3"
console.log(countSomething([true, true, false, true])); // "BOOL COUNT: 4"
console.log(countSomething([true, true, 1, 0, 1, false, 1])); // "NUMBER COUNT: 4"

//--- 課題10 ---

function each(collection, callback) {
  if (Array.isArray(collection)) {     
      for (let i = 0; i < collection.length; i++) {
          callback(collection[i]); //引数が配列なら配列の中身をcallbackに返す
      } 
  } else if (typeof collection === 'object') {     
      for (const key in collection) {
          if (collection.hasOwnProperty(key)) {
              callback(collection[key]); //引数がｵﾌﾞｼﾞｪｸﾄなら値を取得してcallbackに返す          
          }
      }
  }
}

//--- ﾃｽﾄ ---
each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

//--- 課題11 ---

function compose(funcA, funcB) {
  return function(x) {
      return funcB(funcA(x));
  }; //引数を2倍してから10足す関数
}

function multiplyTwo(x) {
return x * 2; //引数を2倍する関数
}

function addTen(x) {
return x + 10; // 引数に10足す関数
}

//--- ﾃｽﾄ　---

const baz = compose(multiplyTwo, addTen);
console.log(baz(5)); // 20
console.log(baz(100)); // 210