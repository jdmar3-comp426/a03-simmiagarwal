// change line 4 in package.json from 
// "type": "module",
// to
// "type": "commonjs",
// to run locally. (former must be kept to run in autograder);

// import * as mild1 from "./src/mild/mild_1.js";

// console.log(mild1.sumToString(3, 5));
// console.log(mild1.getIncreasingArray(3, 7));
// console.log(mild1.maxAndMin([1, 2, 3, 4, 5]));
// console.log(mild1.countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]]));

// import * as mild2 from "./src/mild/mild_2.js";

// console.log(mild2.identifyVariable(4));
// console.log(mild2.identifyArray(['some', 3, [3, 4], false]));

// let objRemoveKey = {
//     name: 'Mr. Boss',
//     title: 'boss',
//     age: 33,
//     password: 'pass123'
// };
// mild2.removeKey(objRemoveKey, 'password');
// console.log(objRemoveKey);

// let objRemoveKeyNonDestructive = {
//     name: 'Mr. Boss',
//     title: 'boss',
//     age: 33,
//     password: 'pass123'
// };
// console.log(objRemoveKeyNonDestructive);
// console.log(mild2.removeKeyNonDestructive(objRemoveKeyNonDestructive, 'password'));

// let objRemoveKeys = {
//     name: 'Mr. Boss',
//     title: 'boss',
//     age: 33,
//     password: 'pass123'
//  };
// console.log(objRemoveKeys);
// console.log(mild2.removeKeys(objRemoveKeys, ['password', 'age']));

// import * as medium1 from "./src/medium/medium_1.js";

// console.log(medium1.getSum([1, 2, 3, 4]));
// console.log(medium1.getMedian([3,2,5,6,2,7,4,2,7,5]));
// console.log(medium1.getStatistics([3,2,4,5,5,5,2,6,7]));

// test cases:
// console.log(medium1.getMedian([14,2,3,47,5,5,5,7,7,7,8,9]));
// console.log(medium1.getStatistics([14, 2, 3, 47, 5, 5, 5, 7, 7, 7, 8, 9]));

// import * as medium2 from "./src/medium/medium_2.js";

// console.log(medium2.allCarStats);
// console.log(medium2.moreStats);


// import * as medium3 from "./src/medium/medium_3.js";
// import mpg_data from "./src/medium/data/mpg_data.js";

// console.log(medium3.searchHighPower(mpg_data, 200, 200));
// console.log(medium3.searchMpg(mpg_data, 16, 20));
// console.log(medium3.searchName(mpg_data, "auto"));
// console.log(medium3.searchByYear(mpg_data, [2018, 2019]));

import * as spicy from "./src/spicy/spicy_9.js";

// console.log(spicy.repeat(array => array[0], 7, ["What's up", "Nope"]))
// spicy.repeatDemo();

// console.log(spicy.multiplyBy(3)(2));
// console.log(spicy.tenTimes(6));
// console.log(spicy.tenTimesFifty());

// console.log(spicy.everyEven([1, 5, 1, 0, 1], x => x === 1));
// console.log(spicy.everyEven([1, 1, 0, 1, 1], x => x === 1));

// console.log(spicy.someEven([4, 3, 2, 1, 0], x => x === 3));
// console.log(spicy.someEven([1, 0, 1, 0, 1], x => x === 0));
// console.log(spicy.someEven([1, 1, 1, 1, 0], x => x === 0));
// console.log(spicy.someEven([0, 0, 0, 0, 0], x => x === 0));

// console.log(spicy.filter(['yes', 'nope', 'maybe', 'yellow'], x => x[0] === 'y'));
// console.log(spicy.filter([1, 90, 5, 31], x => x % 2 === 1));

// console.log(spicy.allEvensAreOdd([1, 2, 3, 4, 5, 6])); // true
// console.log(spicy.allEvensAreOdd([1, 2, 3, 4, 6, 6])); // false

// console.log(spicy.anEvenIsOdd([1, 2, 3, 4, 6, 6])); // true
// console.log(spicy.anEvenIsOdd([2, 2, 4, 4, 6, 6])); // false

// console.log(spicy.hasExactly([1, 2, 3], (number) => number % 2, 2)); // true
// console.log(spicy.hasExactly([1, 2, 3], (number) => number % 2, 0)); // false