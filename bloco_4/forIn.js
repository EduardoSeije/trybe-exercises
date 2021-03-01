// Código que mostra as marcas de carros em uma array é 
let cars = ["Saab", "Volvo", "BMW"];

for (let i in cars) {
  console.log(cars[i]);
}

// Iteração nas chaves de um objeto
let car = {
    type: "Fiat",
    model: "500",
    color: "white",
  };
  
  for (let i in car) {
    console.log(i, car[i]);
  }

