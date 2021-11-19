// import * as mild1 from "./src/mild/mild_1.js";

// console.log(mild1.sumToString(3, 5));

// console.log(mild1.getIncreasingArray(3, 7));

// console.log(mild1.maxAndMin([1, 2, 3, 4, 5]));

// console.log(mild1.countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]));

import * as mild2 from "./src/mild/mild_2.js";

console.log(mild2.identifyVariable(4));

console.log(mild2.identifyArray(['some', 3, [3, 4], false]));

let objRemoveKey = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
mild2.removeKey(objRemoveKey, 'password');
console.log(objRemoveKey);

let objRemoveKeyNonDestructive = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
console.log(objRemoveKeyNonDestructive);
console.log(mild2.removeKeyNonDestructive(objRemoveKeyNonDestructive, 'password'));

let objRemoveKeys = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
 };
console.log(objRemoveKeys);
console.log(mild2.removeKeys(objRemoveKeys, ['password', 'age']));