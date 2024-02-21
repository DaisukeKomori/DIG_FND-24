
// *** takenori kusano ***

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

// //1.
// function doTheThing(arrayOfNum) {
//     let result = [];
//     result = arrayOfNum.filter(element => element < 6).map(element2 => element2 ** 2);
//     return result;
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// // 2.
// function getItemsInRefrigerator() {
//     let result = [];
//     //putItemから配列に加える
//     //result.push(putItemInRefrigerator);
//     //removeItemから配列を削除する
//     return result;
// }

// function putItemInRefrigerator(drink) {
//     return drink;
// }

// function removeItemFromRefrigerator(drink) {
//     return drink;
// }
// console.log(putItemInRefrigerator())


// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


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

// //   1
// //   ここにコードを書きましょう
// function doTheThing(array){
//     const filteredArray = [];
//     const resultArray = [];
//     filteredArray = array.filter(function(num){
//         return num < 6;
//     }); 
//     console.log(filteredArray)
//     resultArray = filteredArray.map(function(num){
//         return num * num
//     });
// }


// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// // 2
// function getItemsInRefrigerator(){
//     let result = [];
//     putItemInRefrigerator()
//     return result
// }

// function putItemInRefrigerator(item){
//     let result = [];
//     result = result.push(item);
//     return result
// }

// // function putItemInRefrigerator(item){
// //     let result = [];
// //     result =  getItemsInRefrigerator()
// //     return result = result.push(item)
// // }

// // ここにコードを書きましょう

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// *** koichi takahashi ***

// function doTheThing (numobj) {
//   const result = [];
//   for(const num of numobj) {
//     // console.log(num);
//     if (num < 6 ) {
//       result.push(num ** 2);
//     } else {
//     }
//   }
//   return result;
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// *** masahiro horikawa ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

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

// //アセスメント2/20
// //課題1
// //※沼にはまってしまい、完成できませんでした。。。
//   function doTheThing(array) {
//     const result = [];
//     for (const element of array) {
//         if (element < 6) {
//             result.push(element * element);
//         }
//         return result
//       }
//   }
   
// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// //課題2
// let itemsInRefrigerator = [];

// function getItemsInRefrigerator() {
//   return itemsInRefrigerator;
// }

// function putItemInRefrigerator(item) {
//   itemsInRefrigerator.push(item);
// }

// function removeItemFromRefrigerator(item) {
//   const index = itemsInRefrigerator.indexOf(item);
//   if (index !== -1) {
//     itemsInRefrigerator.splice(index, 1);
//   }
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// *** shigeru hirano ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

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

// // 問題1
// console.log("問題1")

// // ここにコードを書きましょう
// /**
//  * @param {array(number)}   // 数値の入った配列
//  * @returns {() => boolean} // 入力が5以下の場合は2乗を返すようにする
//  */
// function doTheThing(arrayIn) {
//   return arrayIn.filter(num => num <=5);
// }
// // function doTheThing(arrayIn) {
// //   const arrayOut = [];
// //   for (const num of arrayIn) {
// //     arrayOut.push(num**2);
// //   }
// //   return arrayOut
// // }

// // 2乗にできませんでした

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// // test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// // 問題2
// console.log("問題2")
// function putItemInRefrigerator(x) {
//   const nakami = [];
//   function tuika(y) {
//     nakami.push(y);
//     return nakami;
//   }
//   return tuika;
// }

// function getItemsInRefrigerator() {
//   const nakami = [];
//   return nakami;
// }
// // ここにコードを書きましょう

// // 冷蔵庫の中身を共有できませんでした

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// *** ryuji takagi ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

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



// function doTheThing(array) {
//   const filterArray = array.filter(num => num <= 5);
//   const results = filterArray.map(num => num * num);
//   return results;
// }


// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// let refrigerator = [];

// function putItemInRefrigerator(putDrink) {
//   refrigerator.push(putDrink);
// }

// function getItemsInRefrigerator() {
//   return refrigerator;
// }

// function removeItemFromRefrigerator(removeDrink) {
//   const index = refrigerator.indexOf(removeDrink);
//   if (index !== -1) {
//     refrigerator.splice(index, 1);
//   }
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// *** takafumi saito ***

// 'use strict'

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

// // 課題1

// /**
//  * 
//  * @param {*} array 数値の配列
//  * @returns 引数の配列の要素を、それぞれ2乗して25以上の場合は取り除いた配列
//  */
// function doTheThing(array) {
//   return array.map(function (element){
//     return element ** 2;
//   }).filter(function (element){
//     return element <= 25;
//   })
// } 

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// // 課題2
// const refrigerator = [];
// function getItemsInRefrigerator() {
//   return refrigerator;
// }

// function putItemInRefrigerator(item) {
//   refrigerator.push(item);
// }

// function removeItemFromRefrigerator(item) {
//   let i = 0
//   for (const innerItem of refrigerator){
//     if (item === innerItem){
//       refrigerator.splice(i, 1)
//     }
//     i++;
//   }
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// // 同じアイテムを複数追加後にそれをremoveすると、おかしな挙動
// // （splice(i, 1)後にbreakしておらず、要素を削除しても i++しているため）
// putItemInRefrigerator("milk");
// putItemInRefrigerator("milk");
// putItemInRefrigerator("milk");
// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice", "milk", "milk"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// *** yudai fukushima ***

// //--- ﾃｽﾄｺｰﾄﾞ ---

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

// function doTheThing(array) {
//   return array.filter((num) <= 5)
//               .map(num => num * num)
// }


// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// *** yuji miyazawa ***

// 'use strict'

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


// function doTheThing(arr) {
//   return arr.map(num => num ** 2).filter(num => num <= 25);
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// const itemInRefrigerator = [];
// function getItemsInRefrigerator() {
//   return itemInRefrigerator;
// }

// function putItemInRefrigerator(name) {
//   itemInRefrigerator.push(name);
// }

// function removeItemFromRefrigerator(name) {
//   for (let i = 0; i < itemInRefrigerator.length; i++) {
//     if( itemInRefrigerator[i] === name) {
//       itemInRefrigerator.splice(i,1);
//     }
//   }
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// //冷蔵庫内のアイテムをクロージャに、加工する関数をメソッドで定義する方が安全んで便利と思います。
// //残った時間で改善版を作成しました。

// function makeRefrigerator() {
//   const items = [];
//   const methods = {
//     getItems: function() {
//       return items;
//     },
//     putItems: function(item) {
//       items.push(item); 
//     },
//     removeItems: function(item) {
//       for (let i = 0; i < items.length; i++) {
//         if(items[i] === item) {
//           items.splice(i,1);
//         }
//       }
//     }
//   }
//   return methods
// }

// const refrigerator = makeRefrigerator();

// test(refrigerator.getItems(), []);

// refrigerator.putItems("milk");
// test(refrigerator.getItems(), ["milk"]);

// refrigerator.putItems("juice");
// test(refrigerator.getItems(), ["milk", "juice"]);

// refrigerator.removeItems("milk");
// test(refrigerator.getItems(), ["juice"]);

// refrigerator.removeItems("milk");
// test(refrigerator.getItems(), ["juice"]);


// *** takuya suzuki ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

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

// // 試験１

// function doTheThing(array){
//     const newArray = array.filter(element => element < 6)
//                           .map(element => element ** 2);
//     return newArray;
//   };

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// // 試験2

// let refigerator =[];
// function getItemsInRefrigerator(){
//     return refigerator;
//   };

// function putItemInRefrigerator(food){
//     refigerator.push(food);
//   };

// function removeItemFromRefrigerator(food){
//     const newRefrigerator =[];
//     for (const element of refigerator){
//         if(element !== food){
//             newRefrigerator.push(element);
//         }else{};
//     };
//     refigerator = newRefrigerator;
//   };

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// *** hinano matsuo ***

// // 1問目
// function doTheThing(array) {
//   return array.filter((num) => num < 6)
//               .map((num) => num * num)
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// // 2問目
// function getItemsInRefrigerator() {
//   const result = [];

//   return result;
// }

// const result = getItemsInRefrigerator()

// function putItemInRefrigerator(item) {
//   return result.push(item);
// }


// *** takuro matsumoto ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

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

// // 1
// /**
// * @param {Array} array 配列
// * @returns {Array} 与えられた配列の5以下の要素を抽出し、その各要素を2乗した配列を返す。
// */

// function doTheThing(array) {
//   return array.filter(element => element <= 5)
//               .map(element => element * element);
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);


// // 2

// const result = [];

// /**
// * @returns {Array} result（配列）を返す
// */
// function getItemsInRefrigerator() {
//   return result;
// }

// //result（配列）に文字列の引数を追加する関数
// function putItemInRefrigerator(item) {
//   result.push(item);
// }

// //result（配列）に文字列の引数が存在する場合、その要素を取り除く関数
// function removeItemFromRefrigerator(item) {
//   const index = result.indexOf(item);
//   if (index >= 0) {
//     result.splice(index, 1);
//   }
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// *** masato tsuji ***

// 'use strict'

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


// // 1.
// const doTheThing = array => {
//     return array.filter(num => num < 6)
//                 .map( num => num * num);
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// // 2.
// const arrayItem = [];

// // 配列の値取得
// const getItemsInRefrigerator = () => arrayItem;


// /**
//  * １つの渡された引数を配列に追加して返す
//  * @param {string} item - 配列に追加する文字列
//  * @returns {Array} - 引数を追加した配列
//  */
// const putItemInRefrigerator = item => arrayItem.push(item);


// /**
//  * １つの渡された引数を配列から削除（対象がない場合はそのまま返す）
//  * @param {string} item - 配列から削除する文字列
//  * @returns {Array} - 引数の文字列を削除した配列
//  */
// const removeItemFromRefrigerator = item => {
//     const removeIndex = arrayItem.indexOf(item);
//     if (removeIndex > -1) {
//         arrayItem.splice(removeIndex, 1);
//     }
//     return arrayItem;
// }


// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// *** takuji tsuchida ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("OK! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Try again!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
// }

// // 1
// function doTheThing(array){
//     return array.filter(num => num <= 5).map(num => num**2);
// } 
// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// // 2. 
// const refrig = {};
// const itemList = () => Object.keys(refrig)
// const outRefrig = item => refrig[item] === undefined;

// function putItemInRefrigerator(item) {
//   if (outRefrig(item)) {
//     refrig[item] = 1
//   } else {
//     refrig[item] = refrig[item] + 1
//   }
// }
// function removeItemFromRefrigerator(item) {
//   if (outRefrig(item)){
//     return itemList();
//   } else {
//     if(refrig[item] >= 1) {
//       refrig[item] = refrig[item] - 1;
//       if (refrig[item]===0) {
//         delete refrig[item];
//       }
//       return itemList();
//     }
//   }
// }
// function getItemsInRefrigerator() {
//   return itemList();
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// *** keisuke kurachi ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

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

// // ここにコードを書きましょう

// function doTheThing(array) {
//   return array.map(num => num ** 2)
//     .filter(num => num < 26);
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);







// // ここにコードを書きましょう
// let itemBox = [];
// let getItembBox = [];
// let removeItemBox = [];

// function getItemsInRefrigerator() {
//   // getItembBox[getItembBox.length - 1] = itemBox[itemBox.length - 1];
//   getItembBox[getItembBox.length - 1] = itemBox[itemBox.length - 1];
//   return getItembBox;
// }

// function putItemInRefrigerator(array) {
//   itemBox.push(array);
//   return itemBox;
// }

// function removeItemFromRefrigerator(array) {
//   return
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// *** ryosuke mochiki ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

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

// //課題１

// function doTheThing (array){
//   function cal(ele){
//     return ele ** 2;
//   }
//   function isLessThan (ele){
//     return ele < 6;
//   }
//   const resultArray = array.filter(isLessThan).map(cal)
//   return resultArray;
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// //課題2

// const refrigerator = [];

// function getItemsInRefrigerator(){
//   return refrigerator;
// }

// function putItemInRefrigerator(str){
//   refrigerator.push(str);
// }

// function removeItemFromRefrigerator(str){
//   const newRefrigerator = [];
//   function remove (refStr){
//     if (refStr !== str){
//       refrigerator.push(refStr)
//     }
//     return refrigerator;
//   }
//   newRefrigerator = refrigerator.filter(remove)
//   return newRefrigerator;
// }


// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// *** yoshie mikami ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //test関数
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

// //問題１
// function doTheThing(arr){
//   return arr.map(num => num *num).filter(num => num <= 25);
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// //問題２
// let reizoko = [];
// function getItemsInRefrigerator() {
//     return reizoko;
// }
// function putItemInRefrigerator(item) {
//     reizoko.push(item);
// }

// function removeItemFromRefrigerator(item) {
//   reizoko = reizoko.filter(i => i !== item);
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);

// removeItemFromRefrigerator("milk");
// test(getItemsInRefrigerator(), ["juice"]);


// *** takashi sayo ***

// 'use strict'
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



// function doTheThing(array){
//   console.log(array);
//   array
//     .filter((num) => num < 6)
//     .map((num) => num * num );
// }

// test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
// test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

// //2
// function getItemsInRefrigerator(string){
//   const result = [];
//   result.push (string) ;
//   return result ;
// }

// function putItemInRefrigerator(string){
//    getItemsInRefrigerator(string);
// }

// test(getItemsInRefrigerator(), []);

// putItemInRefrigerator("milk");
// test(getItemsInRefrigerator(), ["milk"]);

// putItemInRefrigerator("juice");
// test(getItemsInRefrigerator(), ["milk", "juice"]);

// // removeItemFromRefrigerator("milk");
// // test(getItemsInRefrigerator(), ["juice"]);

// // removeItemFromRefrigerator("milk");
// // test(getItemsInRefrigerator(), ["juice"]);

