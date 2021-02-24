// Exercício 1
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

// Exercício 2
let num1 = 9;
let num2 = 7;

if (num1 > num2) {
    console.log(num1)
}
else {
    console.log(num2);
}

// Exercício 3
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

// Exercício 4
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