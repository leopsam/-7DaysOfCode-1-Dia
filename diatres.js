const area = prompt("Qual area você quer seguir? \n1 - Front-End \n2 - Back-End");
let linguagem = "";
if (area == 1){
    linguagem = prompt("O que você quer aprender? \n1 - React \n2 - Vue");
}
else if (area == 2){
    linguagem = prompt("O que você quer aprender? \n1 - C# \n2 - Java");
}
else {
    alert("Você não inseriu uma área válida!");
}

const especialidadeOuFullstack = prompt("O que você quer fazer \n1 - Seguir se especializando na área escolhida \n2 - Seguir se desenvolvendo para se tornar Fullstack");

let pergunta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? \n1 - Sim \n2 - Não");
while (pergunta == 1){
    let Tecnologia = prompt("Qual?");
    alert((Tecnologia) + " é realmente uma tecnologia muito legal!")
    pergunta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? \n1 - Sim \n2 - Não");
}

alert("OBRIGADO!!!")
