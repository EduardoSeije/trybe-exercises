const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

const sum1 = sum(4,5);
assert.strictEqual(sum1, 9);
const sum2 = sum(0,0);
assert.strictEqual(sum2,0);
const sum3 = sum(4,"5");
assert.strictEqual(sum3,9);

// PARTE 02

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
const myRemove1 = myRemove([1,2,3,4],3);
assert.deepStrictEqual(myRemove1, [1,2,4]);
assert.notDeepStrictEqual(myRemove1, [1,2,3,4], 'retornou o array [1,2,3,4]');
assert.deepStrictEqual(myRemove1, [1,2,3,4], 'Houve alterações no array');
const myRemove2 = myRemove([1,2,3,4],5);
assert.deepStrictEqual(myRemove2, [1,2,3,4], 'Não retornou o array esperado');

// PARTE 03
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

const myRemoveWC1 = myRemoveWithoutCopy([1,2,3,4], 3);
assert.deepStrictEqual(myRemoveWC1, [1,2,4]);
assert.notDeepStrictEqual(myRemoveWC1, [1,2,3,4]);
const myRemoveWC2 = myRemoveWithoutCopy([1,2,3,6,7,8], 7);
assert.deepStrictEqual(myRemoveWC2,[1,2,3,6,7,8], 'Array sofreu alterações');
const myRemoveWC3 = myRemoveWithoutCopy([1,2,3,4],5);
assert.deepStrictEqual(myRemoveWC3, [1,2,3,4], 'não retornou o array esperado');

// PARTE 04
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

const myFizzBuzz1 = myFizzBuzz(15);
assert.strictEqual(myFizzBuzz1, 'fizzbuzz');
const myFizzBuzz2 = myFizzBuzz(9);
assert.strictEqual(myFizzBuzz2, 'fizz');
const myFizzBuzz3 = myFizzBuzz(25);
assert.strictEqual(myFizzBuzz3, 'buzz');
const myFizzBuzz4 = myFizzBuzz(8);
assert.strictEqual(myFizzBuzz4, 8);
const myFizzBuzz5 = myFizzBuzz('olá');
assert.strictEqual(myFizzBuzz5, false);

// PARTE 05
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2);
assert.deepStrictEqual(obj1, obj3);

// PARTE 06
const assert = require('assert');

const addOne = (array) => {
  const output =[];
  for (let index = 0; index < array.length; index += 1) {
    output.push(array[index] + 1);    
  }
  return output;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

// PARTE 07
const assert = require('assert');
const wordLght = [];
const wordLengths = (array) => {
for (let index = 0; index < array.length; index += 1){
  wordLght.push(array[index].length);
 }
 return wordLght;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

// PARTE 08

const assert = require('assert');

const sumAllNumbers = (array) => {
  total = 0;
  for (let key in array){
    total += array[key];
  }
  return total;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);