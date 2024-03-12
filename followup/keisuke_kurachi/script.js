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



////////// 問１ //////////
const evenOrOdd = (array, boolean) => {
    if (boolean === true) {
        return array.filter(num => num % 2 === 0);
    } else {
        return array.filter(num => num % 2 !== 0);
    }
}

test(evenOrOdd([1, 2, 3, 4, 5], true), [2, 4]);
test(evenOrOdd([0, 4, 36], false), []);
test(evenOrOdd([-1, -2, 4, -5, -7], false), [-1, -5, -7]);



////////// 問２ //////////
const findKeys = (obj, target) => {
    return Object.entries(obj).filter(element => element[1] === target).map(element => element[0]);
}

test(findKeys({ a: 1, b: 2, c: 6, d: 4, e: 2 }, 2), ["b", "e"]);
test(findKeys({ 1: "h", b: "el", c: "hello", d: "hello", e: "o" }, "hello"), ["c", "d"]);



////////// 問３ //////////
const buildObject = (key, value) => {
    const reslt = {};
    for (let i = 0; i < key.length; i++) {
        reslt[key[i]] = value[i];
    }
    return reslt;
}

test(buildObject(["a", "b", "c"], [1, 2, 3]), { "a": 1, "b": 2, "c": 3 });
test(buildObject(["cat", "dog", "duck"], ["にゃー", "わんわん", "がーがー"]), { "cat": "にゃー", "dog": "わんわん", "duck": "がーがー" });
test(buildObject(["cat", "dog", "duck"], [null, 0, NaN]), { "cat": null, "dog": 0, "duck": NaN });
test(buildObject(["abc", "def", "ghi"], [[0, 1, 2], [3, 4, 5], [6, 7, 8]]), { "abc": [0, 1, 2], "def": [3, 4, 5], "ghi": [6, 7, 8] });



////////// 問４ //////////
const add = addNum => {
    const sum = num => num + addNum;
    return sum;
}

const addTwo = add(2);
test(addTwo(3), 5);
test(addTwo(70), 72);

const addOneHundred = add(100);
test(addOneHundred(3), 103);



////////// 問７ //////////
const map = (array, func) => {
    const reslt = [];
    if (Array.isArray(array)) {
        for (const num of array) {
            reslt.push(func(0) + num);
        }
    } else {
        for (const key in array) {
            reslt.push(func(0) + array[key]);
        }
    }
    return reslt;
}

const addOne = num => num + 1;

test(map([1, 2, 3], addOne), [2, 3, 4]);
test(map({ a: 1, b: 2, c: 3 }, addOne), [2, 3, 4]);



////////// 問８ //////////
const changeMiddle = (textString, str) => {
    const textArray = textString.split(/\s+/);
    const textArrayLength = textArray.length;
    const textArrayMidleIndex = Math.floor(textArrayLength / 2);
    textString = textString.replace(textArray[textArrayMidleIndex], str);
    return textString;
}

test(changeMiddle("I like cats", "love"), "I love cats");
test(changeMiddle("red green blue", "yellow"), "red yellow blue");


////////// 問９ //////////
const countSomething = array => {
    let num = 0;
    let boo = 0;
    let str = 0;
    array.forEach(element => {
        if (typeof element === "number") {
            num += 1;
        } else if (typeof element === "boolean") {
            boo += 1;
        } else if (typeof element === "string") {
            str += 1;
        }
    });
    if (num > boo & num > str) {
        return `NUMBER COUNT: ${num}`;
    } else if (boo > num & boo > str) {
        return `BOOL COUNT: ${boo}`;
    } else if (str > boo & str > num) {
        return `STRING COUNT: ${str}`;
    }
}

test(countSomething(["a", "b", "c", true, false, 2]), "STRING COUNT: 3");
test(countSomething([true, true, false, true]), "BOOL COUNT: 4");
test(countSomething([true, true, 1, 0, 1, false, 1]), "NUMBER COUNT: 4");



////////// 問１０ //////////
const each = (array, func) => {
    if (Array.isArray(array)) {
        for (const num of array) {
            func(num);
        }
    } else {
        for (const key in array) {
            func(array[key]);
        }
    }
}

each({ a: 1, b: 2, c: 3 }, console.log);
each([4, 5, 6], console.log);



////////// 問１１ //////////
const compose = (funcA, funcB) => {
    return function reslt(num) {
        const giveNum = funcA(num);
        return funcB(giveNum);
    }
}

const multiplyTwo = x => x * 2;
const addTen = x => x + 10;
const baz = compose(multiplyTwo, addTen);

test(baz(5), 20);
test(baz(100), 210); 