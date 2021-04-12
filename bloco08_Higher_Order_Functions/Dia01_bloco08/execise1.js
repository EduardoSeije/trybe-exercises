// // EXERCÍCIO 01
// // Crie uma função de primeira classe que retorna um objeto 
// { nomeCompleto, email } de uma nova pessoa contratada.
// Passe sua função como parâmetro da HOF newEmployees para criar 
// cada pessoa contratada em seu respctivo id . 
// A sua função deve receber como parâmetro o nome completo 
// da pessoa funcionária e a partir dele gerar automaticamente um email 
// no formato nome_da_pessoa@trybe.com .

const newPerson = (nomeCompleto) => {
  const email = nomeCompleto.toLowerCase().split(' ').join('_');
  return {nomeCompleto, email: `${email}@trybe.com`}
};

const newEmployees = (ids) => {
  const employees = {
  id1: ids('Pedro Guerra'),
  id2: ids('Luiza Drumond'),
  id3: ids('Carla Paiva'),  
  };
  return employees;
}
console.log(newEmployees(newPerson));

