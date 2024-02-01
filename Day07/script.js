
// *** takuya suzuki ***/

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //課題１
// /**
//  * @param {string} name - 名前
//  * @returns {string}  挨拶を返す
//  */
// function greeting(name){
//     return "Hello, " + name + "!";
// };

// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// //課題2
// /**
//  * @param {number} num1 - 数値１
//  * @param {number} num2 - 数値２
//  * @returns {number}  数値１と数値２の平均を返す
//  */

// function average(num1,num2){
//     return (num1 + num2) / 2;
// };
// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200


// //課題3

// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temperature - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */

// let actual;
// let expected;

// function describeTheWeather(season,temperature) {
//     switch(season) {
//             case "春":
//                 if(temperature === "暖かい"){
//                     return "この季節の平均的な気温です。"
//                 }else{
//                     return "この季節には珍しい気温です。"
//                 }
//             case "夏":
//                 if(temperature === "熱い"){
//                     return "この季節の平均的な気温です。"
//                 }else{
//                     return "この季節には珍しい気温です。"
//                 }
//             case "秋":
//                 if(temperature === "涼しい"){
//                     return "この季節の平均的な気温です。"
//                 }else{
//                     return "この季節には珍しい気温です。"
//                 }
//             case "冬":
//                 if(temperature === "寒い"){
//                     return "この季節の平均的な気温です。"
//                 }else{
//                     return "この季節には珍しい気温です。"
//                 }
//             default:
//                 return "Invalid Input"
//     }
//   };
  
//   // テストTDD
//   actual = describeTheWeather("春", "暖かい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   };
  
//   actual = describeTheWeather("春", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   };

//  // さらにテストを書いて、コードが正しいことを確認してください
//  // 追加TDD
//  actual = describeTheWeather("夏", "熱い");
//  expected = "この季節の平均的な気温です。";
 
//  if (actual === expected) {
//    console.log("OK! Test PASSED.");
//  } else {
//    console.error("Test FAILED. Try again!");
//    console.log("    actual: ", actual);
//    console.log("  expected: ", expected);
//  };
 
//  //追加TDD1
//   actual = describeTheWeather("夏", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   };

//   //追加TDD2

//   actual = describeTheWeather("冬", "寒い");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   };

//   actual = describeTheWeather("冬", "熱い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   };
//  // 入力が異なる場合
//   actual = describeTheWeather("a", "熱い");
//   expected = "Invalid Input";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   };


  // *** takuya matsumoto ***/

//   'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// /**テストコードを関数にする。
//  * @param {any} actual - 関数の実行結果
//  * @param {any} expected - 期待する返り値
//  * @returns {any} 関数の実行結果が期待通りか否かメッセージを返す
//  */

// function testCode(actual, expected) {
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("  actual: ", actual);
//     console.log("expected: ", expected);
//   }
// }


// //1
// function greeting(name) {
//   return "Hello, " + name + "!";
// }
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// //テスト
// let actual = greeting("TAKUYA");
// let expected = "Hello, TAKUYA!";
// testCode(actual, expected);

// //2
// function average(num1, num2) {
//   return (num1 + num2) / 2;
// }
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200

// //テスト
// actual = average(300, 100);
// expected = 200;
// testCode(actual, expected);


// //3
// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temperature - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// function describeTheWeather(season, temperature) {
//   if (season === "春") {
//     if (temperature === "暖かい") {
//       return "この季節の平均的な気温です。";
//     } else {
//       return "この季節には珍しい気温です。";
//     }
//   } else if (season === "夏") {
//     if (temperature === "暑い") {
//       return "この季節の平均的な気温です。";
//     } else {
//       return "この季節には珍しい気温です。";
//     }
//   } else if (season === "秋") {
//     if (temperature === "涼しい") {
//       return "この季節の平均的な気温です。";
//     } else {
//       return "この季節には珍しい気温です。";
//     }
//   } else {
//     if (temperature === "寒い") {
//       return "この季節の平均的な気温です。";
//     } else {
//       return "この季節には珍しい気温です。";
//     }
//   }
// }

// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";
// testCode(actual, expected)

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";
// testCode(actual, expected)

// // さらにテストを書いて、コードが正しいことを確認してください
// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";
// testCode(actual, expected)

// actual = describeTheWeather("夏", "寒い");
// expected = "この季節には珍しい気温です。";
// testCode(actual, expected)

// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";
// testCode(actual, expected)

// actual = describeTheWeather("秋", "寒い");
// expected = "この季節には珍しい気温です。";
// testCode(actual, expected)

// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";
// testCode(actual, expected)

// actual = describeTheWeather("冬", "暑い");
// expected = "この季節には珍しい気温です。";
// testCode(actual, expected)


  // *** takashi sayo ***/

//   'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //console.log("課題1");
// function greeting(name1) {
//     return `Hello, ${name1}!`;
// }


// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"



// //console.log("課題2");
// function average(num1, num2) {
//     return (num1 + num2) / 2;
// }


// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200


// //console.log("課題3");

// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} feel - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */

// let actual;
// let expected;

// function describeTheWeather(season, feel) {
//     if (season === "春") {
//         if (feel === "暖かい") {
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         }
//     } else if (season === "夏") {
//         if (feel === "暑い") {
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         }
//     } else if (season === "秋") {
//         if (feel === "涼しい") {
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         }
//     } else {
//         if (feel === "寒い") {
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         }
//     }
// }

// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }


  // *** shigeru hirano ***/

//   'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// // 全体で使用するTDD変数を定義する。
// let actual ;
// let expected ;

// // 課題1
// // console.log("---課題1---");
// /**
//  * @param {string} name - 人の名前
//  * @returns {"Hello, 名前!"} あいさつ文
//  */
// function greeting(name) {
//     if (typeof name === "string") {
//         return `Hello, ${name}!`;
//     } else {
//         return "実引数の型が違います。" ;
//     }
// }

// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"
// console.log(greeting(0)); // => "実引数の型が違います。"


// // 課題2
// // console.log("---課題2---");
// /**
//  * @param {number} num1 - 1番目の数値
//  * @param {number} num2 - 2番目の数値
//  * @returns {number} num1とnum2の平均
//  */
// function average(num1, num2) {
//     if (typeof num1 === "number"  &&  typeof num2 === "number") {
//         return (num1 + num2) / 2;
//     } else {
//         return "実引数の型が違います。" ;
//     }
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200
// console.log(average("100", 300)); // => "実引数の型が違います。"


// // 課題3
// // console.log("---課題3---");
// /**
//  * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temp - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// function describeTheWeather(season, temp) {
//     if (typeof season ==="string"  &&  typeof temp === "string") {
//         if (season === "冬" ) {
//             if (temp ==="寒い") {
//                 return "この季節の平均的な気温です。" ;
//             } else if (temp == "暑い" || temp == "暖かい" || temp == "涼しい") {
//                 return "この季節には珍しい気温です。" ;
//             } else {
//                 return "あなたの感覚がおかしいです。";
//             }
//         }
//         if (season === "夏" ) {
//             if (temp ==="暑い") {
//                 return "この季節の平均的な気温です。" ;
//             } else if (temp == "寒い" || temp == "暖かい" || temp == "涼しい") {
//                 return "この季節には珍しい気温です。" ;
//             } else {
//                 return "あなたの感覚がおかしいです。";
//             }
//         }
//         if (season === "春" ) {
//             if (temp ==="暖かい") {
//                 return "この季節の平均的な気温です。" ;
//             } else if (temp == "寒い" || temp == "暑い" || temp == "涼しい") {
//                 return "この季節には珍しい気温です。" ;
//             } else {
//                 return "あなたの感覚がおかしいです。";
//             }
//         }
//         if (season === "秋" ) {
//             if (temp ==="涼しい") {
//                 return "この季節の平均的な気温です。" ;
//             } else if (temp == "寒い" || temp == "暑い" || temp == "暖かい") {
//                 return "この季節には珍しい気温です。" ;
//             } else {
//                 return "あなたの感覚がおかしいです。";
//             }
//         } else {
//             return "入力した季節がおかしいです。" ;
//         }
//     } else {
//         return "実引数の型が違います。";
//     }
//   }
  
//   // テスト
//   actual = describeTheWeather("春", "暖かい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("春", "暑い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("夏", "暑い");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("夏", "寒い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("秋", "涼しい");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("秋", "暑い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("冬", "寒い");
//   expected = "この季節の平均的な気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather("秋", "暑い");
//   expected = "この季節には珍しい気温です。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }
  
//   actual = describeTheWeather(3.14, "暑い");
//   expected = "実引数の型が違います。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("冬", 2.73);
//   expected = "実引数の型が違います。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("秋", "OOPS!");
//   expected = "あなたの感覚がおかしいです。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }

//   actual = describeTheWeather("333", "暑い");
//   expected = "入力した季節がおかしいです。";
  
//   if (actual === expected) {
//     console.log("OK! Test PASSED.");
//   } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
//   }


  // *** hinano matsuo ***/

// //1問目
// function greeting(name){
//   return "Hello, " + name + "!";
// }

// // テスト
// console.log(greeting("Kana")); 
// console.log(greeting("Kimiko")); 



// //2問目
// function average(num1, num2){
//   return (num1 + num2) / 2;
// }

// // テスト
// console.log(average(1, 2)); 
// console.log(average(100, 300));



// //3問目
// /**
// * @param {"春"|"夏"|"秋"|"冬"} season - 現在の季節
// * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temperature - 現在の気温
// * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
// */

// let actual;
// let expected;

// function describeTheWeather(season, temperature) {
//   if(typeof season === "string" && typeof temperature === "string"){
//       if (season === "春"){
//           if (temperature === "暖かい"){
//               return "この季節の平均的な気温です。";
//           } else {
//               return "この季節には珍しい気温です。";
//           }
//       } else if (season === "夏"){
//           if (temperature === "暑い"){
//               return "この季節の平均的な気温です。";
//           } else {
//               return "この季節には珍しい気温です。";
//           }
//       } else if (season === "秋"){
//           if (temperature === "涼しい"){
//               return "この季節の平均的な気温です。";
//           } else {
//               return "この季節には珍しい気温です。";
//           }
//       } else if (season === "冬"){
//           if(temperature === "寒い"){
//               return "この季節の平均的な気温です。";
//           } else {
//               return "この季節には珍しい気温です。";
//           }
//       }
//   } else {
//       return "文字を入力してください。";
//   }
// }

// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// // さらにテストを書いて、コードが正しいことを確認してください
// actual = describeTheWeather("春", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// } 

// actual = describeTheWeather(2, "暑い");
// expected = "文字を入力してください。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// } 


// *** 福島 雄大 ***
// //課題1------------------------------------------------------------------------------------------------------------

// function greeting(name){
//   return `Hello, ${name}!`;
// }

// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// //課題2------------------------------------------------------------------------------------------------------------

// function average(num1,num2){
//   return (num1 + num2) / 2;
// }

// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200

// //課題3------------------------------------------------------------------------------------------------------------

// let actual;
// let expected;

// /**
//  * @param {"春"|"夏"|"秋"|"冬"} seazon - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temperature - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 季節や気温に応じて変わる、気候に関する説明
//  */
// function describeTheWeather(seazon,temperature) {
//   if(seazon === "春" && temperature === "暖かい"){
//     return "この季節の平均的な気温です。";
//   }else if(seazon === "春" && temperature !== "暖かい"){
//     return "この季節には珍しい気温です。";
//   }else if (seazon === "夏" && temperature === "暑い"){
//     return "この季節の平均的な気温です。";
//   }else if(seazon === "夏" && temperature !== "暑い"){
//     return "この季節には珍しい気温です。";
//   }else if (seazon === "秋" && temperature === "涼しい"){
//     return "この季節の平均的な気温です。";
//   }else if(seazon === "秋" && temperature !== "涼しい"){
//     return "この季節には珍しい気温です。";
//   }else if (seazon === "冬" && temperature === "寒い"){
//     return "この季節の平均的な気温です。";
//   }else if(seazon === "冬" && temperature !== "寒い"){
//     return "この季節には珍しい気温です。";
//   }  
// }

// テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "暖かい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//   console.log("OK! Test PASSED.");
// } else {
//   console.error("Test FAILED. Try again!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// *** 草野 豪仁 ***

// 'use strict'
// // 1行目に記載している 'use strict' は削除しないでください

// //課題1
// function greeting(name) {
//     return `Hello, ${name}!`;
// }

// // テスト
// console.log(greeting("Kana")); // => "Hello, Kana!"
// console.log(greeting("Kimiko")); // => "Hello, Kimiko!"

// //課題2
// function average(num1,num2) {
//     return (num1 + num2) / 2;
// }

// // テスト
// console.log(average(1, 2)); // => 1.5
// console.log(average(100, 300)); // => 200

// //課題3
// let actual;
// let expected;

// /**
//  * @param {"春"|"夏"|"秋"|"冬"} seasons - 現在の季節
//  * @param {"暖かい"|"暑い"|"涼しい"|"寒い"} temp - 現在の気温
//  * @returns {"この季節の平均的な気温です。"|"この季節には珍しい気温です。"} 
//  * 季節や気温に応じて変わる、気候に関する説明
//  */
// function describeTheWeather(seasons,temp) {
//     // ここにコードを書きましょう
//     if (typeof seasons !== "string") {
//         return "春,夏,秋,冬から選んで入力してください";
//     } if (typeof temp !== "string") {
//         return "暖かい,暑い,涼しい,寒いから選んで入力してください";
//     } if (seasons === "春" && temp === "暖かい") {
//             return "この季節の平均的な気温です。";
//         } else if (seasons === "夏" && temp === "暑い") {
//             return "この季節の平均的な気温です。";
//         } else if (seasons === "秋" && temp === "涼しい") {
//             return "この季節の平均的な気温です。";
//         } else if (seasons === "冬" && temp === "寒い") {
//             return "この季節の平均的な気温です。";
//         } else {
//             return "この季節には珍しい気温です。";
//         }
    
// }

// // テスト
// actual = describeTheWeather("春", "暖かい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("春", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// // さらにテストを書いて、コードが正しいことを確認してください
// actual = describeTheWeather("夏", "暑い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("夏", "涼しい");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// //テスト2
// actual = describeTheWeather("秋", "涼しい");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("秋", "寒い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// //テスト3
// actual = describeTheWeather("冬", "寒い");
// expected = "この季節の平均的な気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// actual = describeTheWeather("冬", "暑い");
// expected = "この季節には珍しい気温です。";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// //テスト4
// actual = describeTheWeather("冬", 25);
// expected = "暖かい,暑い,涼しい,寒いから選んで入力してください";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }

// //テスト5
// actual = describeTheWeather(12, "寒い");
// expected = "春,夏,秋,冬から選んで入力してください";

// if (actual === expected) {
//     console.log("OK! Test PASSED.");
// } else {
//     console.error("Test FAILED. Try again!");
//     console.log("    actual: ", actual);
//     console.log("  expected: ", expected);
// }



