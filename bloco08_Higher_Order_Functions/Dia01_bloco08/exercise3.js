// EXERCÍCIO 03
// Crie uma HOF utilizando o conceito de currying . 
// Passe como parâmetros a resposta correta (Ex: Gabarito) 
// para uma pergunta e uma resposta a ser validada 
// (Ex: Resposta de uma pessoa). 
// Sua HOF deve checar se a resposta enviada pela pessoa usuária é correta. 
// Se for, a função retorna true , se não for, a função retorna false .

const rightAnswer = 'higher order function';
const answer = 'HIGHER ORDER2 FUNCTION';

const checkAnswer = (rightAnswer) => (answer) => rightAnswer.toLowerCase() === answer.toLowerCase();

console.log(checkAnswer(rightAnswer)(answer));