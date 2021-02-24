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


