'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("Test PASSED.");
    } else {
        console.error("Test FAILED. Keep trying!");
        console.group("Result:");
        console.log("  actual:", actual);
        console.log("expected:", expected);
        console.groupEnd();
    }   
}
  
///////////////////////////////////////////////////////////////////
// 1
const xOrNot = (b1, b2) => !(( b1 && !b2 ) || ( !b1 && b2 ))
const isEven = num => num % 2 === 0
function evenOrOdd( array, bEven) {
    return array.filter(num => xOrNot(isEven(num),bEven))
}
test( evenOrOdd([1, 2, 3, 4, 5], true),      [2, 4]       )
test( evenOrOdd([0, 4, 36], false),          []           )
test( evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7] )

///////////////////////////////////////////////////////////////////
// 2
function findKeys( obj, target ) {
    const rtn = []
    for( const key in obj ){
        if ( obj[key] === target ) {
            rtn.push(key)
        }
    }
    return rtn
}
test( findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2),                          ["b", "e"])
test( findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"])

///////////////////////////////////////////////////////////////////
// 3
function buildObject( keys, values ) {
    const rtn = {}
    let k = keys.length - values.leng
    for(; k>0; k--){
        values.push(undefined)
    }
    for( let i=0; i<keys.length; i++) {
        rtn[keys[i]] = values[i]
    }
    return rtn
}

test( buildObject(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3})
test( buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), {"cat": "にゃー", "dog": "わんわん", "duck": "がーがー"} )
test( buildObject(["cat", "dog", "duck"], [null, 0, NaN]), {"cat": null, "dog": 0, "duck": NaN} )
test( buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), {"abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8]} )

///////////////////////////////////////////////////////////////////
// 4
function add( x ) {
    const base = x
    return function (y) {return base+y}
}
const addTwo = add(2);
test( addTwo(3),  5  )
test( addTwo(70), 72 )

const addOneHundred = add(100);
test( addOneHundred(3), 103 )

///////////////////////////////////////////////////////////////////
// 5
//-------------
// (1) sayHello()が実行されて関数の内部にあるconsole.log()関数から "Hello"がコンソールに出力される。
// (2) sayHello()がリターン文を持っていない為、console.log(foo)のコンソール出力は、foo関数の戻り値である"undefined"になる。
// (3) 最後にconsole.log(bar)のコンソール出力は、sayHelloAndName("JavaScript")の戻り値である"Hello, JavaScript"になる。

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

///////////////////////////////////////////////////////////////////
// 6
// 別途


///////////////////////////////////////////////////////////////////
// 7
function map( x, callBack ) {
    const rtn = []

    if ( typeof(x) === "object" ) {
        for(const elm of Object.values(x) ) {
            rtn.push( callBack(elm) )
        }
    }

    return rtn
}

function addOne(num) {
    return num + 1;
}

test( map([1, 2, 3], addOne),            [2, 3, 4] )
test( map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4] )

///////////////////////////////////////////////////////////////////
// 8
function changeMiddle( text, word ){
    let words = text.split(" ")

    words[Math.floor(words.length/2)] = word

    return words.join(" ")
}

test( changeMiddle("I like cats", "love"),      "I love cats"     )
test( changeMiddle("red green blue", "yellow"), "red yellow blue" )


///////////////////////////////////////////////////////////////////
// 9
function countSomething( arraySth ) {
    let count = [0, 0, 0] // [num, bool, string]
    const msg   = ["NUMBER COUNT:", "BOOL COUNT:", "STRING COUNT:"]

    for( const sth of arraySth ){
        if( typeof(sth)        === "number" ) {
            count[0]++
        } else if( typeof(sth) === "boolean" ) {
            count[1]++
        } else if( typeof(sth) === "string"  ) {
            count[2]++
        }
    }
    const maxCount = Math.max(...count)
    const idx      = count.indexOf( maxCount )

    return `${msg[idx]} ${maxCount}`
}
test( countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3" )
test( countSomething([true, true, false, true]),       "BOOL COUNT: 4"   )
test( countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4" )

///////////////////////////////////////////////////////////////////
// 10
function each( x, callBack){
    
    if ( typeof(x) === "object" ) {
        for(const elm of Object.values(x) ) {
            callBack(elm)
        }
    }
}
each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);

///////////////////////////////////////////////////////////////////
// 11
function compose( funcA, funcB ) {
    return function (x) {return funcB(funcA(x))}
}

function multiplyTwo(x) {
    return x * 2;
}

function addTen(x) {
return x + 10;
}

const baz = compose(multiplyTwo, addTen);
test( baz(5),   20 )
test( baz(100), 210)
