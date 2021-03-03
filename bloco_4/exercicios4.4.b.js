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


// Exercício 03 - Crie uma função que receba uma array de inteiros e retorne o menor valor 
let arraySmallestNumb = [2, 4, 6, 7, 10, 0, -3];
let smallestNumb = 1000000;

function smallestNumbers (arraySmallestNumb) {
    for (let indexSmall = 0; indexSmall <= arraySmallestNumb.length; indexSmall += 1) {
        if (arraySmallestNumb[indexSmall] < smallestNumb) {
            smallestNumb = arraySmallestNumb[indexSmall];
        }
    }
    console.log(smallestNumb)
}
smallestNumbers(arraySmallestNumb);



// Exercício 04 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres
let arrayNames = ['José', 'Lucas', 'Nadia', 'Fernanda', 'Cairo', 'Joana']
let biggerNameLetters = 0;
let biggestName = arrayNames[0];

function nameLetterCount (arrayNames) {
    for (let indiceNames in arrayNames) {
        if (biggestName.length < arrayNames[indiceNames].length) {
            biggestName = arrayNames[indiceNames];
        }
    }
    console.log(biggestName);
}

nameLetterCount(arrayNames);

// Exercício 05 - Crie uma função que receba uma array de inteiros e retorne o que mais se repete.
let numbers = [2, 3, 2, 5, 8, 2, 3];
let repeatedNumber = 0;
function repeatedNumbers(numbers) {
    for (indexNumb in numbers) {
        if (numbers[0] === numbers[indexNumb]) {

        }
    }
}
