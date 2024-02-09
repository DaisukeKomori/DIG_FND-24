
// *** takashi sayo ***

//  'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //test定型文
// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }

// //1.関数 sayHelloToFriends を宣言してください
// /**
//  * @param {Array<string>} friends - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// function sayHelloToFriends(friends){
//   const arrayname =[];
//   for (const key of friends){
//     arrayname.push("Hello, " + key + "!");
//   }
//   return arrayname;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);


// //2.関数 filterObjectForStrings を宣言してください。

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//   const result = {};
//   for (const key in object){
//     if (typeof object [key] === "string"){
//       // console.log (object [key]);
//       result = object ;
//     }
//   }
//   return result ;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


// *** keisuke kurachi ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//         console.log("OK! Test PASSED.");
//     } else {
//         console.error("Test FAILED. Try again!");
//         console.log("    actual: ", actual);
//         console.log("  expected: ", expected);
//         console.trace();
//     }
// }


// /**
// * @param {Array<string>} arrayName - 友達の名前が入った配列
// * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
// */
// // ここにコードを書きましょう
// function sayHelloToFriends(arrayName) {
//     const result = [];
//     for (const name of arrayName) {
//         result.push(`Hello, ${name}!`);
//     }
//     return result;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);





// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

//  /**
//  * @param {object} object オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//     // ここにコードを書きましょう
//     const result = [];
//     let a;
//     for (const key in object) {
//         if (typeof object[key] === "string") {
//             // a = object[key];
//             // console.log(Object.keys(object));
//             result.push(object[key]);
//             // result.push([key] + object[key]);
//             // result.push(`${key}: ${object[key]}`)
//             // result.push(Object.keys(object))
    
//         }
//     }
//     return result;
//   }
  
//   test(filterObjectForStrings(obj1), obj1); // 変化なし
//   test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
//   test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


// *** saki iwase ***

// 'use strict'

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }

// //   課題1
// /**
//  * @param {Array<string>} nameArray - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// // ここにコードを書きましょう
// function sayHelloToFriends(nameArray){
//     const result = [];
//     for (const name of nameArray){
//         let nameHello = "Hello, " + name + "!";
//         result.push(nameHello);
//     } return result;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// // 課題2
// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {
//     const Newobject = {};
//     for (const key in object ) {
//         if (typeof key === "string" && typeof object[key] === "string") {
//             Newobject[key] = object[key];
//         }
//     } return Newobject;
//   }
  
//   test(filterObjectForStrings(obj1), obj1); // 変化なし
//   test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
//   test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

//   /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//     const NewArray = [];
//     for (const key in arrayOfObjects){
//         let newValue = filterObjectForStrings(arrayOfObjects[key]);
//         NewArray.push(newValue);
//     }
//     return NewArray;
//   }
  
//   test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
  
//   // 2 番目の要素から値が 2 のペアは除くこと
//   test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);
  
//   test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


// *** ryosuke mochiki ***

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.group("Result:");
//     console.log("  actual:", actual);
//     console.log("expected:", expected);
//     console.trace();
//     console.groupEnd();
//   }
// }

// /**
// * @param {Array<string>} namearray - 友達の名前が入った配列
// * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
// */

// function sayHelloToFriends(namearray){
//   const greeting = [];
//   for ( name of namearray){
//       greeting.push( `Hello, ${name}!`);
//   }
//   return greeting;
// }
// console.log(window.name);

// const friends = ["Mario", "Luigi"];
// const friends2 = ["Mario", "Luigi", "Peach"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);
// test(sayHelloToFriends(friends2), ["Hello, Mario!", "Hello, Luigi!", "Hello, Peach!"]);


// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" }

// /**
// * @param {object} object オブジェクト
// * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
// */

// function filterObjectForStrings(object) {
//   const resultobj = {};
//   for( let key in object){
//       if( typeof key === "string" && typeof object[key] === "string"){
//           resultobj[key] = object[key];
//       }
//   }
//   return resultobj;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない


// /**
// * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
// * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
// */

// function filterArrayForStrings(arrayOfObjects) {
//   const resultarray = [];
//   for ( let obj of arrayOfObjects){
//       resultarray.push(filterObjectForStrings(obj));
//   }
//   return resultarray;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


// *** 福島 雄大 ***

//--- ﾃｽﾄｺｰﾄﾞ ---

// function test(actual, expected) {
//   if (JSON.stringify(actual) === JSON.stringify(expected)) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//     console.trace();
//   }
// }

// //---　課題1 ---

// /**
//  * @param {Array<string>} ??? - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
// */

// function sayHelloToFriends(array){
//   const result = [];
//   for (const name of array) {
//     result.push(`Hello, ${name}!`);
//   }
//   return result;
// }


// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);


// //--- 下記課題のﾃｽﾄ用　---
// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// //---　課題2 ---

// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
// */
// function filterObjectForStrings(object) {
//   const result2 = {};
//   for ( let key in object){
//     if (typeof object[key] ==="string" ){
//       result2[key] = object[key];
//     }
//   }
//   return result2;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// //---　課題3 ---

// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//   const result3 = [];
//   for (const valueIsString of array3) {
//     for (let key in object){
//       if (typeof object === "string" && key === object[key]){
//         result3[key] = object[key];
//       }
//     }
//   }
//   return result3;
//   // どこかで関数 `filterObjectForStrings` を呼びましょう
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

// //---　課題4 ---

// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//     console.log(names[j]);
//     }
//   }
// }


// //---　課題5 ---

// for (let i = 0; i < 2; i++) {
//   console.log("a: " + i);
//   for (let i = 0; i < 2; i++) {
//     console.log("b: " + i);
//     for (let i = 0; i < 2; i++) {
//     console.log("c: " + i);
//     }
//   }
// }


// *** 草野 豪仁 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//         console.log("OK! Test PASSED.");
//     } else {
//         console.error("Test FAILED. Try again!");
//         console.log("    actual: ", actual);
//         console.log("  expected: ", expected);
//         console.trace();
//     }
// }

// //関数 sayHelloToFriends を宣言してください
// /**
//  * @param {Array<string>} arrayoOfName - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった
//  * 文字列を要素に持つ配列
//  */

// function sayHelloToFriends(arrayoOfName) {
//     const result = [];
//     for (const name of arrayoOfName) {
//         result.push("Hello, " + name + "!");
//     }
//     return result;
// }

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);

// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };

// // 関数 filterObjectForStrings を宣言してください。
// /**
//  * @param {object} オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、
//  * 値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(object) {

//     const resultObj = {};
//     for (const key in object) {
//         if (typeof object[key] === "string") {
//             resultObj[key] = object[key];
//         }

//     }
//     return resultObj;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない

// // 関数 filterArrayForStrings を宣言してください。
// // この関数内で、2 問目で作った関数 filterObjectForStrings を使いましょう。
// /**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の
//  * 各オブジェクトについて、値が文字列であるキーと値のペアのみを持つ
//  * 新しいオブジェクトを作成し、そのオブジェクトを含む新しい配列を
//  * 返り値として返す。
//  */
// function filterArrayForStrings(arrayOfObjects) {
//     // ここにコードを書きましょう.
//     // どこかで関数 `filterObjectForStrings` を呼びましょう
//     const resultArrObj = [];
//     for (const obj of arrayOfObjects) {
//         resultArrObj.push(filterObjectForStrings(obj));
//     }
//     return resultArrObj;
// }

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし

// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);


// // 以下のコードを実行する前に何が表示されるか予想してみましょう。その後、コードを実行して予想が合っていたかどうかを確認してください。なぜこのような結果になるのか理由を説明してください。
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < names.length; j++) {
//         for (let k = 1; k < 3; k++) {
//             console.log(names[j]);
//         }
//     }
// }


// for (let i = 0; i < 2; i++) {
//     console.log("a: " + i);
//     for (let i = 0; i < 2; i++) {
//         console.log("b: " + i);
//         for (let i = 0; i < 2; i++) {
//             console.log("c: " + i);
//         }
//     }
}