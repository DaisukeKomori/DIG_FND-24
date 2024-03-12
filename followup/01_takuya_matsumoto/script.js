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

//1
/**
* @param {Array<number>} array 数値型配列
* @param {Boolean} boolean
* @returns {Array<number>} boolean が true の場合は、偶数のみの配列を返し、 false の場合は、奇数のみの配列を返す。
*/

function evenOrOdd(array, boolean){
  if (boolean === true){
    return array.filter(element => element % 2 === 0);
  }else{
    return array.filter(element => element % 2 === 1 || element % 2 === -1);
  }
}

test(evenOrOdd([1, 2, 3, 4, 5], true),[2, 4]); 
test(evenOrOdd([0, 4, 36], false),[]); 
test(evenOrOdd([-1, -2, 4, -5, -7], false),[-1, -5, -7]);
test(evenOrOdd([-1, -2, 4, -5, -7], true),[-2, 4]);  

//2
/**
* @param {Object} object 
* @param {String/Number} target 文字列または数値 
* @returns {Array} オブジェクト中、ターゲットにマッチする値を持つ全てのキーを含む新しい配列を返す。
*/

function findKeys(object,target){
  const newArray = [];
  for (const key in object){
    if (object[key] === target){
      newArray.push(key);
    }
  }
  return newArray;
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"),["c", "d"]); 


//3
/**
* @param {Array} array1
* @param {Array} array2
* @returns {Object} 第一引数の配列の要素をオブジェクトのキー、第二引数の配列の要素をオブジェクトの値とした配列を返す。
*/

function buildObject(array1,array2){
  const newObj = {};
  for (let i=0; i < array1.length; i++){
    newObj[array1[i]] = array2[i];
  }
  return newObj;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3});
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"});
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]),{"cat": null, "dog": 0, "duck": NaN}); 
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]});

//4
/**
* @param {Number} x
* @returns {Function} 関数を返す。この関数は引数として数値yをとり、xとyの和を返す。
*/

function add (x) {
  return function (y) {
    return x + y ;
  }
}

// const add = x => y => x + y; // DJ
const addTwo = add(2);
test(addTwo(3),5);
test(addTwo(70),72);

const addOneHundred = add(100);
test(addOneHundred(3),103);

// """Hello"", undefined, ""Hello, JavaScript""の順で表示される。
// 9行目のconst foo = sayHello();でsayHello()が呼び出され、コンソールに""Hello""が表示される。
// sayHello関数は戻り値を返さないため、fooにはundefinedが代入され、
// 12行目のconsole.log(foo);ではundefinedが表示される。
// 13行目のconsole.log(bar)でbarには10行目で関数が実行され
// ""Hello, JavaScript""が返され代入されているので、""Hello, JavaScript""が表示される。"

//7 
/**
* @param {Array/Object} colection
* @param {Function} func
* @returns {Array} コレクション内の各要素に対してコールバック関数を実行した結果を要素にもつ配列を返す。 
*/

function map(colection,func){
  const newArray = [];
  if (Array.isArray(colection)){
    for (const element of colection){
      newArray.push(func(element));
    }
  }else{
    for (const key in colection){
      newArray.push(func(colection[key]));
    }
  }
  return newArray;
}

function addOne(num) {
  return num + 1;
}
test(map([1, 2, 3], addOne),[2, 3, 4]);  
test(map({ a: 1, b: 2, c: 3 }, addOne),[2, 3, 4]); 

//8
/**
* @param {String} sentence 奇数個の単語からなる文字列(スペースで区切られる)
* @param {String} word
* @returns {String} 第 1 引数の真ん中の単語を第 2 引数の単語で置き換えた新しい文字列を返す
*/
function changeMiddle(sentence, word){
  const words = sentence.split(' ');
  const centerIndex = Math.floor(words.length/2);
  words[centerIndex] = word;
  return words.join(' ');
}

test(changeMiddle("I like cats", "love"),"I love cats");
test(changeMiddle("red green blue", "yellow"),"red yellow blue");

//9
/**
* @param {Array<any>} array
* @returns {String} 要素の登場回数が最も多い型に対して、"BOOL COUNT: x" (ブーリアンが最も多い場合) "STRING COUNT: x" (文字列が最も多い場合) "NUMBER COUNT: x"を返す。
*/

function countSomething(array){
  let stringCount = 0;
  let boolCount = 0;
  let numberCount = 0;

  for (const element of array){
    if (typeof element === "string"){
      stringCount ++;
    }else if (typeof element === "boolean"){
      boolCount ++;
    }else if (typeof element === "number"){
      numberCount ++;
    }
  }

  const countType = Math.max(stringCount,boolCount,numberCount);
  
  if (countType === stringCount){
    return `STRING COUNT: ${stringCount}`;
  }else if (countType === boolCount){
    return `BOOL COUNT: ${boolCount}`;
  }else if (countType === numberCount){
    return `NUMBER COUNT: ${numberCount}`;
  }
}


test(countSomething(["a", "b", "c", true, false, 2]),"STRING COUNT: 3"); 
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");

//10
/**
* @param {Array/Object} colection
* @param {Function} func
*/

function each(colection,func){
  if (Array.isArray(colection)){
    for (const elment of colection){
      func(elment);
    }
  }else{
    for (const key in colection){
      func(colection[key]);
    }
  }
}

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

//11
/**
* @param {Function} funcA
* @param {Function} funcB
* @returns {Function} 返された関数は引数 x を受け取り、funcA に x を引数として渡して得られた戻り値を funcB に引数として渡し、得られた結果を返す。
*/

// function compose(funcA, funcB){
//   return function (x) {
//     return funcB (funcA(x));
//   }
// }

const compose = (funcA, funcB) => x => funcB(funcA(x));

function multiplyTwo(x) {
  return x * 2;
}

function addTen(x) {
  return x + 10;
}

const baz = compose(multiplyTwo, addTen);
test(baz(5),20);
test(baz(100),210);
