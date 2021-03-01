// Parte II - Funções 

// Exercício 01 - crie uma função que receba uma sting e retorne true se for um palíndromo ou false se não. 
let word = 'ama';
function verificarPalindrome(word) {
    if (word === word.split('').reverse().join('')) {
        console.log(true)
    }
    else {
        console.log(false)
    }
} 
verificarPalindrome(word);    

// Exercício 02 - Crie uma função que receba um array de inteiros e retorne o maior
let array = [2, 3, 6, 7, 10 , 152]
let biggestNumber = 0;
function biggestNumbers (array) {
    for (let index = 0; index <= array.length; index ++) {
        if (array[index] > biggestNumber) {
            biggestNumber = array[index];
        }
    }
    console.log(biggestNumber);
}
biggestNumbers(array);