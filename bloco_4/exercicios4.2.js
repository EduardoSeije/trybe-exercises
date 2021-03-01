// EXERCÍCIOS BLOCO 04 - DIA 02 - JAVASCRIPT 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 01 - imprima todos os valores da array com a função console.log

for (let index = 0; index < numbers.length; index++ ) {
    console.log(numbers[index]);
}

// Exercício 02 - somar todos os valores contidos no array e imprimir o resultado 
let soma = 0;
    for (let index2 = 0; index2 < numbers.length; index2++) {
        soma += numbers[index2];
    }
console.log(soma);    

// Exercício 03 - calcule e imprima a média aritmética dos valores da array
let media = 0;

for (let index3 = 0; index3 < numbers.length; index3++){
    media += numbers[index3] /10;
}
console.log(media);

// Exercício 04 - usando o código anterior, 
//caso o valor final seja maior que 20 imprima "valor maior que 20"
//Caso não seja, imprima "Valor menor ou igual a 20"

if (media > 20) {
    console.log('Valor maior que 20');
}
else {
    console.log('Valor menor ou igual a 20')
}

// Exercício 05 - Utilizando for, descubra qual o maior valor na array e imprima-o
let maiorNum = 0;
for (let index4 = 0; index4 < numbers.length; index4++) {
    if (numbers[index4] > maiorNum) {
        maiorNum = numbers[index4];
    }
}
console.log(maiorNum);

// Exercício 06 - Descubra quantos valores ímpares existem no array e 
//imprima o resultado. Caso não exista nenhum, imprima a mensagem:
// "nenhum valor ímpar encontrado"

let numsImpar = 0;
for (let index5 = 0; index5 < numbers.length; index5++) {
    if (numbers[index5] % 2 !== 0) {
        numsImpar = numsImpar += 1;
    }
    else if (numsImpar === 0) {
        console.log('Nenhum valor ímpar encontrado');
    }
}
    
console.log(numsImpar);

// Exercício 07 - Descubra qual o menor valor da array e imprima-o
let menorNum = 1000000;
for (let index7 = 0; index7 < numbers.length; index7++) {
    if(numbers[index7] < menorNum) {
        menorNum = numbers[index7];
    }
}
console.log(menorNum);

// Exercício 08 - cria uma array que vá de 1 até 25 e imprima 
let array8 = [];
for (let index8 = 1; index8 <= 24; index8+=1) {
    array8.push(index8);
}
console.log(array8);

// Exercício 09 - Utilizando o array criado no exercício anterior 
//imprima o resultado da divisão de cada um dos elementos por 2 .
let array9 = 0;
for (let index9 = 0; index9 < array8.length; index9++) {
    console.log(array8[index9] / 2)
}

// Exercício Bônus - Ordem crescente
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] < numbers[j]) {
        let position = numbers[i];
  
        numbers[i] = numbers[j];
        numbers[j] = position;
      }
    }
  }
  console.log(numbers)

// Ordem decrescente

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 1; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] > numbers[j]) {
        let position = numbers[i];
  
        numbers[i] = numbers[j];
        numbers[j] = position;
      }
    }
  }
  console.log(numbers)

// Criando um novo array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayBonus =[];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i + 1]) {
        arrayBonus.push(numbers[i] * numbers[i+1]);
    } else {
        arrayBonus.push(numbers[i] + 2);
    }
  }
  console.log(arrayBonus)