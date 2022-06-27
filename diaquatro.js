let valor = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let tentativas = 3;
let chute = prompt("Escolha um numero para chutar de 0 à 10");;
for(i = 0; i < 3; i++){
  if(chute == valor){
    alert("Parabens vc acertou!!!");
    i = 3;
  }else{
    alert("Errou seu burro! Você tem mais " + (tentativas) + " tentativas");
    chute = prompt("Escolha um numero para chutar de 0 à 10");;
    tentativas = tentativas -1;
  }   
}
alert("O numero era " + (valor));
