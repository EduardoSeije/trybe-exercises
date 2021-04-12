// Exercício 01
// Dada uma matriz de matrizes, transforme em uma única matriz

const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

function flatten() {
  const globalArray = arrays.reduce((acc, curr) => acc.concat(curr), []);
  return globalArray;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);