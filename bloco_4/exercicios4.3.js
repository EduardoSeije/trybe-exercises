// Exercício 01 - Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n 
let n = 5;
let symbol = '*'
let square = '';
for (let index = 0; index <= n; index +=1) {
    square = square + symbol;
};
for (let index = 0; index <n; index +=1) {
    console.log(square);
}

// Exercício 02 - Imprima um triângulo com 5 * de base
let n = 5;
let symbol = '*'
let triangle = '';
for (let index = 0; index <= n; index +=1) {
    triangle = triangle + symbol;
    console.log(triangle);
};

// Exercício 02 - Imprima um triângulo invertido 
let n = 5;
let symbol = n;
let triangle = '';
let spaces = ' ';
for (let index = 0; index <= n; n += 1) {
    triangle = triangle + spaces;
    console.log(triangle)
}