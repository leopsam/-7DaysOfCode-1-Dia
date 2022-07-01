let pergunta = prompt("Escolha o operador para sua conta \n1 - soma \n2 - subtração \n3 - multiplicação \n4 - divisão \n5 - sair");
let valor1 = prompt("Qual o primeiro valor?");
let valor2 = prompt("Qual o Segundo valor?");

function soma(n1, n2) {
  return Number(n1) + Number(n2);
}

function subtracao(n1, n2) {
  return Number(n1) - Number(n2);
}

function multplicacao(n1, n2) {
  return Number(n1) * Number(n2);
}

function divicao(n1, n2) {
  return Number(n1) / Number(n2);
}
while(pergunta == 1 || pergunta == 2 || pergunta == 3 || pergunta == 4){
if(pergunta == 1){
  alert(soma(valor1, valor2));   
   }else if(pergunta == 2){
  alert(subtracao(valor1, valor2));   
   }else if(pergunta == 3){
  alert(multplicacao(valor1, valor2));   
   }else if(pergunta == 4){
  alert(divicao(valor1, valor2));   
   }else if(pergunta == 5){
  break
   }
  pergunta = prompt("Escolha o operador para sua conta \n1 - soma \n2 - subtração \n3 - multiplicação \n4 - divisão \n5 - sair");
  
     if(pergunta == 1 || pergunta == 2 || pergunta == 3 || pergunta == 4){
        valor1 = prompt("Qual o primeiro valor?");
        valor2 = prompt("Qual o Segundo valor?");
     }else if(pergunta == 5){
       break
     }  
    }
  alert("Ate a proxima!");
