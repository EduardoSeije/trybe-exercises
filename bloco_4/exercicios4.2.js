// EXERCÍCIOS BLOCO 04 - DIA 02 - JAVASCRIPT 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 01 - imprima todos os valores da array com a função console.log

for (let i = 0; i < numbers.length; i++ ) {
    console.log(numbers[i]);
}

// Exercício 02 - somar todos os valores contidos no array e imprimir o resultado 
let soma = 0;
    for (let x = 0; x < numbers.length; x++) {
        console.log(soma += numbers[x]);
    }

// Exercício 03 - calcule e imprima a média aritmética dos valores da array
let media = 0;

for (let y = 0; y < numbers.length; y++){
    console.log(media += numbers[y] /2)
}
