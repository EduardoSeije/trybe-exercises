let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(tasksList.length);



let searchForFirstTask = tasksList[0];
console.log(searchForFirstTask);
// Tomar café

let searchForLastTask = tasksList[tasksList.length - 1];
console.log(searchForLastTask);
// Brincar com o cachorro

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);

tasksList.pop();
console.log(tasksList);

// Exercício 1 - Obtenha o valor "serviços" do array menu
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//Exercício 2 - Procure o índice do valor "POrtfólio" do array menu
let indexOfPortfolio = menu.indexOf("Portfólio");
console.log(indexOfPortfolio);

// Exercício 3 - Adicione o valor "Contato" no final da array menu
menu.push("Contato");
console.log(menu);


