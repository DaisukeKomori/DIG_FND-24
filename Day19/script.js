
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
