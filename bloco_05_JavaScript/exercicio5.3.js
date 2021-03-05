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

// Exercício 02