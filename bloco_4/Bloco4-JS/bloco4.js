// Exercício 1 - Operações
let a = 4;
let b = 9;

let soma = (a + b);
console.log(soma);

let subtracao = (a - b);
console.log(subtracao);

let mult = (a * b);
console.log(mult);

let div = (a / b); 
console.log(div);

let mod = (a % b);
console.log(mod);

// Exercício 2 - Maior de 2 números
let num1 = 9;
let num2 = 7;

if (num1 > num2) {
    console.log(num1)
}
else {
    console.log(num2);
}

// Exercício 3 - Maior de 3 números
let num1 = 4683;
let num2 = 9;
let num3 = 500;

if (num1 > num2 && num1 > num3) {
    console.log(num1);
}
else if (num2 > num1 && num2 > num3) {
    console.log(num2);
}
else {
    console.log(num3);
}

// Exercício 4 - Positovo ou negativo?
let number = -165146513;

if (number > 0) {
    console.log("Positive")
}
else if (number < 0) {
    console.log("Negative")
}
else {
    console.log("Zero")
}

// Exercício 5 - Triângulo ou não?
let angle1 = 80;
let angle2 = 60;
let angle3 = 70;

let sumAngles = (angle1 + angle2 + angle3 === 180)
if (sumAngles === true) {
console.log(sumAngles)
}
else {
    console.log(sumAngles)
}

// Exercício 6 - Movimentos Xadrez
let chessPiece = "king";

switch (chessPiece.toLowerCase()) {
    case ("pawn"):
        console.log("Forward - 1 vacant square");
        break;
         
    case("rook"):
        console.log("Forward and Backward");
        break;

    case("bishop"):
        console.log("Diagonal");
        break;

    case("queen"):
        console.log("Any direction");
        break;

    case("king"):
        console.log("Any direction - 1 vacant square");
        break;

    case("knight"):
        console.log("Diagonal from one corner of any 2×3 rectangle of squares to the furthest opposite corner.");
        break;

    default:
        console.log("Error")

}

// Exercício 7 - Conversor de notas
let grade = 52;

if (grade < 0 || grade > 100) {
    console.log("Error");
}
else if (grade >= 90) {
    console.log("A")
}
else if (grade >= 80 && grade < 90) {
    console.log("B");
}
else if (grade >= 70 && grade < 80) {
    console.log("C")
}
else if (grade >= 60 && grade < 70) {
    console.log("D");
}
else if (grade >= 50 && grade < 60) {
    console.log("E");
}
else {
    console.log("F")
}

// Exercício 8 - Um número par
let number1 = 7;
let number2 = 5;
let number3 = 2;

if (number1 % 2 == 0 || number2 % 2 == 0 || number3 % 2 == 0) {
    console.log(true);
}
else {
    console.log(false);
}

// Exercício 9 - Um número ímpar
let numb1 = 6;
let numb2 = 5;
let numb3 = 2;

if (numb1 % 2 !== 0 || numb2 % 2 !== 0 || numb3 % 2 !== 0) {
    console.log(true);
}
else {
    console.log(false);
}

// Exercício 10 - Cálculo de lucro
let cost = 50.50;
let sell = 80.99;
let numProd = 1000;
let totalCost = ((50.50 * 1000) * 0.20)
console.log(totalCost);

let proft = ((sell * 1000) - totalCost);
console.log(proft);

// Exercício 11 - Cálculo INSS
let salarioBruto = 3000;
let aliquotaINSS;
let aliquotaIR;
let descontoIR;
console.log("Salário bruto = R$" + salarioBruto);

if (salarioBruto <= 1556.94) {
    console.log("Valor a descontar - INSS = R$" + (aliquotaINSS = 0.08 * salarioBruto));
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    console.log("Valor a descontar - INSS = R$" + (aliquotaINSS = 0.09 * salarioBruto));
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    console.log("Valor a descontar - INSS = R$" + (aliquotaINSS = 0.11 * salarioBruto));
}
else {
    console.log("Valor a descontar INSS = R$" + (aliquotaINSS = salarioBruto - 570.88));
}

let salarioBase = (salarioBruto - aliquotaINSS);
console.log("Salário Bruto - INSS = R$" + salarioBase);

if (salarioBase<= 1903.98) {
    console.log(aliquotaIR = 0);
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    console.log("Alíquota IR aplicada = R$" + (aliquotaIR = 0.075));
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    console.log("Alíquota IR aplicada = R$" + (aliquotaIR = 0.15));
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    console.log("Alíquota IR aplicada = R$" + (aliquotaIR = 0.225));
}
else {
    console.log("Alíquota IR aplicada = R$" + (aliquotaIR = 0.275));
}


if (salarioBase <= 1903.98) {
    console.log(descontoIR= 0);
}
else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    console.log("Valor a ser deduzido IR = R$" + (descontoIR = 142.80));
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    console.log("Valor a ser deduzido IR = R$" + (descontoIR = 354.80));
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    console.log("Valor a ser deduzido IR = R$" + (descontoIR = 636.13));
}
else {
    console.log("Valor a ser deduzido IR = R$" + (descontoIR = 869.36));
}

let resultado = (salarioBase - (salarioBase * aliquotaIR - descontoIR));
console.log("O salário líquido recebido é R$" + resultado);