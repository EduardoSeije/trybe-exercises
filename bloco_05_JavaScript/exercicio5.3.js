// Exercício 01 
function dayCreator () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    for (let key in dezDaysList) {
        let day = dezDaysList[key];
        let listaDays = document.createElement("li")
        listaDays.innerHTML = dezDaysList[key]; 
        listaDays.className = "days"
        if (day === 24) {
            listaDays.className = "days holiday";
        }
        if (day === 25) {
            listaDays.className = "days holiday friday";
        }
        if (day === 31) {
            listaDays.className = "day holiday";
        } 
        if (day === 4 || day === 11 || day === 18){
            listaDays.className = "day friday";
        } 
         
        document.getElementById("days").appendChild(listaDays);
    }

}
dayCreator()

// Exercício 02 * Ainda falta alterar o ID!
function createBtn (string) {
    let divButtons = document.querySelector(".buttons-container");
    let buttonFeriado = document.createElement("button");
    buttonFeriado.innerHTML = string;
    buttonFeriado.id = "btn-holiday"
    divButtons.appendChild(buttonFeriado);    

}
createBtn("Feriados");

// Exercício 03
let buttonFeriado = document.querySelector("button");
let holidayList = document.getElementsByClassName("holiday");
function buttonFunction() {
   document.getElementsByClassName("holiday")[0].style.backgroundColor = "blue";
   document.getElementsByClassName("holiday")[1].style.backgroundColor = "blue";
   document.getElementsByClassName("holiday")[2].style.backgroundColor = "blue";
} 
buttonFeriado.addEventListener("click", buttonFunction);


// Exercício 04
