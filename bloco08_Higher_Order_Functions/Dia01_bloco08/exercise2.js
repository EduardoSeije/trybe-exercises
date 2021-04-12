// EXERCÍCIO 02
// Desenvolva uma HOF que retorna o resultado de um sorteio. 
// Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo 
// como parâmetros o número apostado e uma função que checa se o
//  número apostado é igual ao número sorteado. 
//  O retorno da sua HOF deve ser uma string 
//  (Ex: "Tente novamente" ou "Parabéns você ganhou").


const checkNumber = (myNumber, sortedNumber) => myNumber === sortedNumber;

const sortedNumber = (myNumber, callback) => {
  const sortNumber = Math.floor((Math.random() * 5) +1); // poderia usar parseInt.
  return callback(myNumber, sortNumber) ? 'Parabéns, você ganhou' : 'Tente novamente';
} 
console.log(sortedNumber(3, checkNumber));
