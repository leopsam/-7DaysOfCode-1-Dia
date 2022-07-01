let pergunta = prompt("Deseja adicionar um item na sua lista de compras? \n1 - Sim \n2 - Não");
let fruta = [];
let laticinio = [];
let congelados = [];
let doces = [];

while(pergunta == 1){
       
      const comida = prompt("Qual comida você deseja inserir?");
  
      const categorias = prompt("Qual categoria essa comida se encaixa? \n1 - Frutas \n2 - Laticínios \n3 - Congelados \n4 - Doces");
  
        if(categorias == 1){
           fruta.push(comida);
         }else if (categorias == 2){
           laticinio.push(comida);
         }else if (categorias == 3){
           congelados.push(comida);
         }else if (categorias == 4){
           doces.push(comida);
         }
      pergunta = prompt("Deseja adicionar mais um item na sua lista de compras? \n1 - Sim \n2 - Não");
      }

alert("Lista de compras:\n  Frutas: "+ (fruta) +"\n  Laticínios: "+ (laticinio) +"\n  Doces: "+ (doces) +"\n  Congelados: "+ (congelados));
