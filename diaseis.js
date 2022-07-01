let frutas = [];
let laticinios = [];
let congelados = [];
let doces = [];
let pergunta = prompt("Deseja adicionar um item na sua lista de compras? \n1 - Sim \n2 - Não");
let remover = "";

while(pergunta == 1){
       
      const comida = prompt("Qual comida você deseja inserir?");
  
      const categorias = prompt("Qual categoria essa comida se encaixa? \n1 - Frutas \n2 - Laticínios \n3 - Congelados \n4 - Doces");
  
        if(categorias == 1){
           frutas.push(comida);
         }else if (categorias == 2){
           laticinios.push(comida);
         }else if (categorias == 3){
           congelados.push(comida);
         }else if (categorias == 4){
           doces.push(comida);
         }
      pergunta = prompt("O que deseja fazer na sua lista de compras? \n1 - Adicionar item \n2 - Finaliza lista \n3 - Remover item");
   
  if(pergunta == 3){
  remover = prompt("Lista de compras:\n  Frutas: "+ (frutas) +"\n  Laticínios: "+ (laticinios) +"\n  Doces: "+ (doces) +"\n  Congelados: "+ (congelados) + "\n\nQual produto você deseja remover?");
    
		if(frutas.indexOf(remover) != -1){
			frutas.splice(frutas.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if(laticinios.indexOf(remover) != -1){
			laticinios.splice(laticinios.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (doces.indexOf(remover) != -1){
			doces.splice(doces.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else if (congelados.indexOf(remover) != -1){
			congelados.splice(congelados.indexOf(remover), 1);
			alert(`O item ${remover} foi removido com sucesso!`)
		} else {
			alert(`Não foi possível encontrar o item dentro da lista!`)
		}
	}
  
     pergunta = prompt("O que deseja fazer na sua lista de compras? \n1 - Adicionar item \n2 - Finaliza lista \n3 - Remover item");
}

alert("Lista de compras:\n  Frutas: "+ (frutas) +"\n  Laticínios: "+ (laticinios) +"\n  Doces: "+ (doces) +"\n  Congelados: "+ (congelados));
