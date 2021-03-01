// Crie um objeto player contendo as variáveis indicadas. 
let player = {
    name:'Marta', 
    lastName:'Silva', 
    age: 34, 
    medals: {
        goldem: 2, 
        silver: 3
    }
}


// Acesse a chave name, lastName e Age - concatene as informações em uma frase
console.log('A jogadora ' + player.name + ' ' + player.lastName+ ' tem ' + player.age + ' anos de idade.')

// Adicione a chave bestInTheWorld e atribua uma array com os anos. 
player['bestInTheWorld'] = 2006, 2007, 2008, 2009, 2010, 2018;
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + ' 6 vezes.')

// Acesse a chave medals e faça um c.log no formato desejado. 
console.log('A jogadora ' + player.name + ' ' + player.lastName + ' possui ' + player.medals.goldem + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.')

