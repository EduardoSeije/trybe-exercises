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