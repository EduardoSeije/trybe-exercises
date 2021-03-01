let nota = 95;

if (nota >= 80) {
    console.log("Parabéns, você foi aprovado!")
}
else if(nota < 80 && nota > 60) {
    console.log("Você está na nossa lista de espera")
}
else {
    console.log("Você foi reprovado")
}


let resultadoProcesso = "aprovada";

switch (resultadoProcesso) {
    case "aprovada":
        console.log("Parabéns, você foi aprovado");
    break;

    case "lista":
        console.log("Você está na nossa lista de espera");
    break;

    case "reprovada":
        console.log("Você foi reprovado");
    
    default:
        console.log("Não se aplica")
}