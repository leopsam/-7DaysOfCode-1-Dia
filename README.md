# 7DaysOfCode

<h1>Dia 1</h1>
Chegou a hora, Leonardo! Você vai começar a sua jornada no #7DaysOfCode ;)

Este primeiro dia é super importante! Ao final dele, você terá um novo conhecimento que é essencial para os próximos desafios.

Existe uma situação super comum para quem utiliza o Javascript: problemas com os tipos de variáveis na hora de comparar os valores de duas variáveis entre si. Eu já passei muito por isso!

Em linguagens de programação compiladas, como Java e C#, esse problema é detectado em tempo de compilação, e você que está desenvolvendo o código tem um aviso claro do erro.

Já no Javascript, esses erros passam despercebidos, já que o código não passa por um compilador. Ou seja, os erros só aparecem em tempo de execução.

A parte mais confusa para quem está começando a aprender lógica com Javascript é a operação de igualdade entre valores. Dependendo de como você escrever o seu código, o Javascript fará uma conversão de tipo para um tipo booleano de maneira implícita (automática), e isso afetará variáveis que eram Strings, Numbers, Object, etc….

Isso causa alguns comportamentos estranhos, como todos esses exemplos aqui abaixo retornando true:

console.log( false == '0' );
console.log( null == undefined );
console.log( " \t\r\n" == 0 );
console.log( ' ' == 0 );

O que não faz necessariamente muito sentido.

(Você pode testar tudo isso indo no seu navegador, clicando com o botão direito, escolhendo a opção “Inspecionar” e a aba “Console”. Nessa aba, basta copiar e colar cada uma das linhas acima para confirmar que todas realmente retornam true).

Sendo assim, a sua tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}
DICA
Você também pode utilizar o próprio navegador para executar esse seu programa, caso ainda não tenha familiaridade com editores de código, como o Visual Studio Code.

Para isso, como eu falei acima, basta você clicar com o botão direito do mouse em qualquer página, selecionar a opção “Inspecionar”, ir na aba “Console” e digitar o seu código. Bem simples, né?

Se você quiser mudar os nomes das variáveis e valores, fique à vontade. Mas jamais imprima algo que não seja verdadeiro, hein!


<h1>Dia 2</h1>
E aí, Leonardo, conseguiu resolver o desafio de ontem?

Tenho certeza que sim! Mas, para te deixar mais confiante, vou deixar lá embaixo, no final deste e-mail, como eu resolveria o desafio, ok?
Sabe quando você se cadastra em um site e, logo em seguida, quando faz o seu login, ele já te chama pelo seu nome? É isso que você vai fazer no desafio de hoje!

Quando você cria algum sistema, site ou aplicativo, é comum querer colocar alguns toques personalizados para tornar a experiência na sua aplicação mais rica e dinâmica.

Fazer isso através da programação pode não ser uma tarefa muito fácil. Dependendo do nível de customização que você quiser implementar, a quantidade de código que você precisará escrever pode ser imensa.

Mas é claro que você pode começar de uma maneira mais simples. Para isso, o importante é entender como capturar e armazenar valores dentro de variáveis. E é nisso que eu vou te ajudar hoje!

Variáveis são os blocos básicos de construção de qualquer sistema e são essenciais para processar qualquer tipo de informação, seja ela de uma pessoa logada no sistema ou mesmo para exibir detalhes de produtos em um catálogo de e-commerce.

Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?

À medida que as perguntas forem sendo feitas, a pessoa que estiver usando o programa deve responder cada uma delas.

No final, o sistema vai exibir a mensagem:

"Olá [nome], você tem [idade] anos e já está aprendendo [linguagem]!"

Note que cada informação entre [ ] é uma das respostas dadas pela pessoa.
EXERCÍCIO OPCIONAL
Se você quiser se aprofundar no assunto de hoje, eu tenho mais um exercício para você.

Mas ele é 100% opcional.

Você vai complementar o código para que, depois de exibir a mensagem anterior, o programa pergunte:

Você gosta de estudar [linguagem]? Responda com o número 1 para SIM ou 2 para NÃO.

E aí, dependendo da resposta, ele deve mostrar uma das seguintes mensagens:

1 > Muito bom! Continue estudando e você terá muito sucesso.
2 > Ahh que pena... Já tentou aprender outras linguagens?
DICA
Você pode adicionar quantas perguntas quiser, e pode aproveitar as respostas dos usuários na mensagem que será exibida.

Para imprimir e receber valores, você pode tanto usar console.log, prompt e alert, quanto usar HTML e CSS caso já tenha conhecimento nessas duas tecnologias.

Você pode usar a estrutura condicional if para resolver o Exercício Opcional. Algo como:

if (resposta == 1){
    // dê a resposta positiva
}
if (resposta == 2){
    // dê a resposta negativa
}
EXTRA
Tanto o alert() quanto o prompt() são usados para criar caixas de diálogo e interagir com o usuário, mas eles são diferentes entre si.

O alert() é usado para mostrar uma mensagem simples ao usuário.

Exemplo:

alert(“Olá, pessoal!”);

Já o prompt() precisa que o usuário insira algum valor, que você poderá manipular.

Exemplo:

const cidade = prompt("Digite a sua cidade:");
const msg = `Você é de ${cidade}!`;
alert(msg);

Teste os códigos acima e tente adaptá-los ao seu programa!


<h1>Dia 3</h1>
Você chegou no terceiro dia já!

Continue assim, Leonardo!

Aliás, o que você achou do desafio de ontem? Trouxe a minha ideia de solução lá no final deste e-mail e vou adorar saber a diferença para a sua.
Você alguma vez já jogou algum jogo que te desse mais de uma escolha e, dependendo do que você escolhesse, o destino do personagem seria totalmente diferente?

Hoje você vai desenvolver um exemplo assim com Javascript!

Eu quero que você trabalhe com estruturas de controle de fluxo. Esse jeito complicado de falar só quer dizer que, assim como nos jogos, a história que você montar precisa se adaptar às respostas dadas por quem está jogando.

Para isso, você vai precisar de algumas estruturas capazes de alterar o fluxo da aplicação, como for, while, if e else. Todas essas conseguem cumprir esse objetivo, dada uma certa condição.

O if e o else, que eu já te mostrei nos últimos dias, são capazes de criar ramificações dentro da aplicação para que seja tomada uma ou outra ação, dependendo da condição fornecida.

Os loops (como for e while) são capazes de fazer uma tarefa repetitiva se transformar em poucas linhas de código, independente de quantas vezes você precisar repetir aquela tarefa.

Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. Aqui, a pessoa pode responder N tecnologias, uma de cada vez. Então, enquanto ela continuar respondendo ok para a pergunta: “Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida.

O importante é que a pessoa que estiver jogando possa sempre escolher qual decisão tomar para conseguir aprender e se desenvolver na área de programação.

Além disso, também é essencial que, ao final do jogo, ela possa inserir quantas tecnologias quiser na lista de aprendizado.
DICA
Já deu pra ter uma ideia de como fazer toda essa historinha acontecer, né? Principalmente lembrando como utilizar as estruturas condicionais e loops em Javascript!

Caso você ainda não saiba como imprimir e receber valores nas páginas web com HTML e CSS, você poderá usar console.log, prompt e alert para desenvolver o seu jogo, como você já viu nos últimos dias.

Lembre-se que você pode sempre personalizar o jogo da forma que quiser.
EXTRA
Você já viu estruturas condicionais em Javascript anteriormente, mas vou recapitular. O if é usado para verificar se uma determinada condição é verdadeira.

Exemplo:

if (cidade === “Roma”){
    // mostre a foto do “Coliseu”
}

Além disso, ele também pode ser usado com um ou vários else if, que irá saber que a condição anterior era falsa e vai verificar se a atual é verdadeira.

Por fim, existe o else sozinho, sem nenhuma condição, e o código dentro dele será executado sempre que todas as condições encadeadas anteriormente forem falsas.

if (cidade === “Roma”){
    // mostre a foto do “Coliseu”
}
else if (cidade === “Paris”){
    // mostre a foto do “Torre Eiffel”
}
else {
    // dê a resposta “Você não digitou nenhuma cidade válida”
}

Além disso, para a parte 4, você precisará de uma estrutura de repetição (loop) como o while. Para usá-lo, é bem fácil:

let idade = 0;

while (idade < 8) {
    // algum comando para imprimir a idade
    idade = idade + 1;
}

Esse código começará com a idade em zero e, ao entrar no while, esse valor será impresso e, logo depois, incrementado em 1.

Ou seja, depois da primeira vez que ele passar, o valor da idade será igual a 1, que é menor que 8, e por isso, a condição do while terá um resultado verdadeiro e ele continuará a ser executado.

Ele só vai parar quando o valor da variável idade chegar a 8, que não é menor que 8, e por isso a condição do while terá um resultado falso.

<h1>Dia 4</h1>
Você já brincou de tentar adivinhar o número que seu amigo ou amiga estava pensando? Hoje você vai voltar na infância e fazer exatamente isso. Mas agora, o jogo vai ser contra o próprio computador!

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.
DICA
Pense muito bem em qual estrutura de repetição você irá utilizar para fazer o seu programa ser executado até o momento em que as 3 tentativas acabem, ou até a pessoa acertar o número.

Lembre-se que você pode sempre personalizar o seu programa da forma que quiser.

Não se esqueça de compartilhá-lo no seu GitHub e nas suas redes sociais com a hashtag #7DaysOfCode, e também com #feedback7DoC caso você precise de alguma ajuda.
EXTRA
Dê uma olhada nesse site para aprender mais sobre estruturas de repetição.

Para fazer a própria máquina escolher sozinha o número a ser adivinhado, você pode utilizar algo chamado Math.random().

Para isso, utilize o código:

Math.floor(Math.random() * (máximo - mínimo + 1) + mínimo)

Onde, claro, você terá que alterar os valores de mínimo e máximo pelos limites inferior e superior, respectivamente.


<h1>Dia 5</h1>

Sabe quando você vai no supermercado com uma lista de compras e acaba ficando indo e voltando nos mesmos corredores até completar a lista?

Você precisa de uma maçã e vai para a área de frutas. O próximo item é um leite e você segue para os laticínios. Mas em seguida você anotou a pêra, e precisa novamente retornar para a área de frutas.

Depois que você resolver o desafio de hoje, com certeza não fará mais isso!

Assim como a nossa lista de compras, é muito comum que programas trabalhem com listas de strings, números e objetos.

Pense em todo catálogo de e-commerce que você já viu, na lista de eventos do seu Google Calendar, ou ainda na sua caixa de e-mails. Todos esses sites usam listas para exibir informações de uma forma simples e fácil de entender.

Além disso, você pode aproveitar as listas para fazer filtros, ordenação, e outras funcionalidades muito úteis.

Nesse ponto, você já deve ter percebido que trabalhar com essas coleções é algo que você vai precisar dominar, né?

Então hoje, para facilitar a sua ida ao supermercado, você deve criar um programa em Javascript que perguntará se você deseja adicionar uma comida na sua lista de compras, e você deve poder responder com sim ou não.

Em seguida, ele perguntará qual comida você deseja inserir, e você digitará o nome dela, como por exemplo batata.

Depois, ele deverá perguntar em qual categoria essa comida se encaixa, com algumas opções já pré-definidas, como frutas, laticínios, congelados, doces e o que mais você achar interessante. Assim, você poderá separar tudo no seu devido grupo.

Por fim, caso você não queira mais adicionar nada na lista de compras e responder não na primeira pergunta, ele irá exibir uma lista com todos os itens agrupados, da seguinte forma:

Caso você adicione na sua lista:
banana, leite em pó, tomate, leite vegetal, chiclete, bala de ursinho, maçã, uva, abacate e leite de vaca

O programa deverá imprimir, por exemplo:

Lista de compras:
    Frutas: banana, tomate, maçã, uva, abacate
    Laticínios: leite vegetal, leite de vaca, leite em pó
    Congelados:
    Doces: chiclete e bala de ursinho
DICA
Existe um objeto dentro da linguagem Javascript que é usado justamente para criar listas de elementos, chamado Array. Use e abuse dele!

Lembre-se que você sempre pode estilizar da maneira que quiser o seu programinha, inclusive utilizando outras tecnologias para isso, como HTML e CSS.

Porém, isso não é obrigatório na nossa lista de lógica de programação com Javascript. Como eu já mencionei nos dias anteriores, você pode usar recursos como console.log, alert e prompt para desenvolver o seu programa.

Não se esqueça de compartilhar o seu código no seu GitHub e nas suas redes sociais com a hashtag #7DaysOfCode, e também com #feedback7DoC caso você precise de alguma ajuda.
EXTRA
Para criar um array vazio, você pode usar colchetes. E aí, para inserir algo em um array, você pode usar a função .push(). Por exemplo:

let meuArray = [];
meuArray.push(elemento1);

Depois disso, o array não estará mais vazio, ele terá o elemento1.

<h1>Dia 6</h1>
Sabe o programinha que você criou ontem para montar a sua própria lista de compras? Hoje o seu desafio é deixar ele ainda mais legal!

Você já viu como trabalhar com arrays de forma simples, adicionando itens na sua lista de compras.

Outra operação muito comum é a de remoção de itens da lista e, por isso, é muito importante que você saiba como fazer isso.

Pensando a fundo, existem N maneiras de deletar um item de uma lista. Você pode remover o primeiro item, o último, ou qualquer um do meio da lista. Cada uma dessas operações tem o seu próprio método dentro das documentações dos arrays em Javascript. Vamos falar mais sobre esses métodos na seção "Dicas".

Você deverá criar a opção de remover algum item da lista, que será exibida junto à pergunta de “você deseja adicionar uma comida na lista de compras”?

A partir daí, caso a pessoa escolha essa opção, o programa irá imprimir os elementos presentes na lista atual, e a pessoa deverá escrever qual deles deseja remover.

Depois disso, o programa irá remover o elemento da lista e imprimir a confirmação de que o item realmente não está mais lá.

Por fim, ele voltará para o ciclo inicial de perguntas.

Se, na hora de deletar o item, o mesmo não for encontrado na lista, você deverá exibir uma mensagem avisando isso.

Por exemplo: “Não foi possível encontrar o item dentro da lista!”

Lembre-se que a opção de remover um item só deverá estar disponível a partir do momento que existir ao menos um elemento dentro da lista de compras.
DICA
Você pode fazer a procura do elemento que a pessoa deseja apagar da forma que quiser, usando métodos do Javascript para isso.

Existe o método .includes(elemento), que retorna true ou false se o array em questão contém o tal elemento ou não.

Existe também o método .indexOf(elemento), que retorna a posição desse elemento dentro do array, ou -1, caso não o encontre.

Já para a remoção em si, existem diferentes métodos. O método o shift, por exemplo, remove sempre o primeiro item da lista; o método pop remove o último; já o método splice remove um certo número de itens a partir de uma determinada posição. Escolha o que você achar que faz mais sentido para o seu programinha.

<h1>Dia 7</h1>
