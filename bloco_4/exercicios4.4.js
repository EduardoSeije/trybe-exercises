let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

// Exercício 01 - imprima uma mensagem de boas vindas para a personagem .
console.log('Bem-vinda, ' + info['personagem']);

// Exercício 02 - Insira nova propriedade com o nome de chave 'recorrente' e o valor 'sim'.
info.recorrente = 'Sim';
console.log(info);

// Exercício 03 - Faça um for in que mostre as chaves do obj

for (let key in info) {
    console.log(key);
}

// Exercício 04 - Faça um for in que mostre todos os valores das chaves
for (let key in info) {
    console.log(info[key]);
}

// Exercício 05 - Defina segundo obj com valores indicados e mostre os dois 
let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'Sim'
}
for (let key in info) {    
}
for (let key2 in info2) {

}
if (info.recorrente === info2.recorrente) {
    return 'ambos recorrentes'
}

console.log(info[key] + ' e ' + info2[key2]);